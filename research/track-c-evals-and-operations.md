# Research Track C: Evaluations, Verification, Observability, Testing, and the Improvement Loop

Prepared 2026-09-11 for "Beyond the Coding Agent: From Software Engineer to AI Engineer" (talk week of 2026-09-14).

Scope: evaluation methodology, LLM-as-judge, agent-specific evals and benchmarks, verification versus evaluation, observability, post-deployment practice and guardrails, testing, and cost and latency engineering. Publication dates are given for every source. Items I could not verify against a primary source are marked **[unverified]** or **[secondary]**.

---

## 1. Executive summary

1. **The dominant 2025-2026 methodology is a loop, not an artifact.** Hamel Husain and Shreya Shankar (FAQ first published 2025-05-28, updated 2026-09-01) call error analysis "the most important activity in evals" and say practitioners should spend "60-80% of development time on error analysis and evaluation." Eugene Yan (April 2025): "evals aren't static artifacts or quick fixes; they're practices." Husain's field guide (2025-03-24) reframes the roadmap metric from "features shipped" to "experiments run." The speaker's suspicion that the map is missing the production-data-to-evals loop is confirmed by the strongest practitioner sources.

2. **Anthropic's "Demystifying evals for AI agents" (2026-01-09) is the best single primary source for agent evals** and supplies a vocabulary the talk can adopt: task, trial, grader, transcript/trajectory, outcome, harness, pass@k versus pass^k. Its advice: start with 20-50 tasks drawn from real failures, grade outcomes rather than paths, prefer deterministic graders, read transcripts, and watch for saturation.

3. **"Look at your data" is the consensus, and generic metrics are the consensus anti-pattern.** Husain and Shankar: "generic evaluations waste time and create false confidence." OpenAI's evaluation best-practices guide lists "vibe-based evaluation" and reliance on "generic academic metrics" as anti-patterns. Binary pass/fail with a written critique beats Likert scales in every practitioner source found.

4. **Verification of one action is a different engineering primitive from evaluation across a population, and credible sources now name it.** Anthropic's Agent SDK post (2025-09-29) makes "verify work" a step in the agent loop ("gather context, take action, verify work, repeat"). Anthropic's long-running-agents post (2025-11-26) reports agents that "declare the job done" without end-to-end checks. Jason Wei's "asymmetry of verification" (2025-07-15) gives the underlying principle: design tasks and tools so that checking is cheaper than doing.

5. **Reliability is not capability.** Sierra's pass^k (tau-bench, June 2024; tau2-bench 2025-06-10) shows agents that pass once often fail on repetition; Princeton's "Towards a Science of AI Agent Reliability" (v3 2026-06-02) finds "reliability gains lag behind accuracy improvements" over 24 months of model releases. Anthropic's illustration: a 75% per-trial agent passes three trials only 42% of the time. Enterprise agents need pass^k thinking.

6. **Public benchmarks are reference points, not product evals.** OpenAI retired SWE-bench Verified in February 2026 after an audit found 59.4% of 138 hard-task failures were test flaws and models reproduced gold patches from task IDs [secondary; primary post returned 403]. Kirgis, Kapoor, Narayanan et al. (2026-05-08) found 25 of 50 tau-bench Airline tasks were flawed. AgentLens (May 2026) found 10.7% of passing SWE-bench trajectories were "lucky passes." Scaffolding alone is worth 11-15 points on SWE-bench Verified.

7. **LLM-as-judge is necessary and unreliable in specific, measurable ways.** Position bias, self-preference, and prompt sensitivity are well documented; verbosity bias has shrunk in recent judges (bias magnitude under 0.011 in a 541,000-judgment study, June 2026). The fix is process: calibrate against a single domain expert's binary labels, report true-positive and true-negative rates, pin the judge model version, and re-check periodically. "Reliability without validity" (June 2026) shows exact-match agreement overstates judge quality by 33-41 percentage points versus chance-corrected kappa.

8. **The judge itself drifts.** "Every drift alarm is ambiguous between a worse product and a changed judge" (Li, 2026-06-13). Judge model IDs must be pinned and re-calibrated against a human-labeled anchor set on every change.

9. **Observability is broadly adopted; evaluation is not.** LangChain's survey (1,340 responses, Nov 18 to Dec 2, 2025): 89% have some observability, 52.4% run offline evals, 37.3% run online evals; quality is the top barrier to production at 32-33%, ahead of cost. OpenTelemetry GenAI semantic conventions exist (invoke_agent, execute_tool, chat spans) but every gen_ai.* attribute is still "Development" status as of July 2026; the conventions moved to a separate repository in June 2026.

10. **Log analysis is the bridge between evals and observability.** "Benchmarks tell us what the agent achieved; only logs reveal how and why" (Kirgis et al., May 2026). Anthropic's multi-agent research post (2025-06-13): "full production tracing" let them "diagnose why agents failed and fix issues systematically." The trace is the shared unit of evals, debugging, and monitoring.

11. **Guardrail classifiers have measured limits; architecture does the heavy lifting.** Hackett et al. (April 2025) achieved "up to 100% evasion" against commercial prompt-injection guardrails. Meta's "Agents Rule of Two" (2025-10-31) calls prompt injection "a fundamental, unsolved weakness in all LLMs" and requires human approval when an agent needs untrusted input, sensitive data access, and external state change in one session. Anthropic's Constitutional Classifiers++ (2026-01-08) shows classifiers can work at scale (0.05% refusal rate, 40x cheaper than the 2025 version) but only with heavy investment.

12. **Testing: three tiers, and non-determinism is handled with rates, not exact matches.** Stub models for control-flow tests, recorded fixtures for regression, and a small nightly live suite is the pattern practitioners describe in 2026. "Assert a rate, not an answer" (Wong, September 2026). Tool schema tests come first because "a misleading schema corrupts every downstream trajectory score."

13. **Cost and latency are eval dimensions, not afterthoughts.** "AI Agents That Matter" (Kapoor et al., July 2024) showed accuracy-only evaluation rewards "needlessly complex and costly" agents. Anthropic's multi-agent system used about 15x the tokens of a chat. Prompt caching cuts cached-input price by 90% at both major providers (0.1x base input; Anthropic cache writes cost 1.25x for 5-minute TTL). Batch APIs give 50% off. Agent turns compound latency 3-10x over single-call benchmarks.

14. **Model change is an operational event.** OpenAI's Evals platform itself goes read-only 2026-10-31 and shuts down 2026-11-30, a reminder that provider tooling churns. Practitioner guidance: migrate the model in one change, re-tune the prompt in another, and run the regression suite between them.

15. **For the talk:** the five-area map treats 3.4 and 3.5 as artifacts. Add the improvement loop as the methodology that connects them; add per-action verification as a harness-and-tool concern in 3.2 and 3.3; make reliability (pass^k) and cost-per-task explicit eval dimensions; and state that graders, judges, and traces are production code that needs its own tests.

---

## 2. Detailed findings by theme

### 2.1 Evaluation methodology as practiced in 2025-2026

**Husain and Shankar's method (FAQ, 2025-05-28, updated 2026-09-01; course has trained over 2,000 engineers and PMs).** The process has four stages: build a dataset of real traces; open coding (free-text notes on failures, borrowed from qualitative research); axial coding (cluster notes into a failure taxonomy and count); iterate until "theoretical saturation," when new traces stop revealing new failure modes. Concrete numbers: review 100+ diverse traces, annotate the first 30 yourself, re-run error analysis every 2-4 weeks with 100+ fresh traces, and review 10-20 random traces weekly in between. Appoint a single "benevolent dictator" domain expert to resolve labeling disputes. Prefer binary pass/fail with critiques: "Binary decisions are also faster to make during error analysis - you don't waste time debating whether something is a 3 or 4." Build custom annotation interfaces; this is "the single most impactful investment," enabling roughly 10x faster iteration. Split CI evals (small, deterministic, protect against known regressions) from production monitoring (sampled, asynchronous, more judge-based, with confidence intervals). Notably, the FAQ argues **against** writing evaluators before implementation: "Write evaluators for errors you discover, not errors you imagine."

**Husain's field guide (2025-03-24).** From 30+ production engagements: "teams who succeed barely talk about tools at all. Instead, they obsess over measurement and iteration." Example: NurtureBoss found date-handling failures dominated its error taxonomy and raised success on that category from 33% to 95%. Critiques in few-shot judge prompts raised human-judge agreement by 15-20 percentage points. Honeycomb needed three iterations to exceed 90% agreement. Synthetic data guidance: generate inputs, not outputs; ground them in real system constraints; verify coverage across features, scenarios, and personas.

**Eugene Yan (April 2025), "An LLM-as-Judge Won't Save The Product, Fixing Your Process Will."** "Building product evals is simply the scientific method in disguise." Five steps: observe, annotate (balanced roughly 50:50 pass/fail), hypothesize root causes, experiment, measure. "Having automated evaluators doesn't remove the need for human oversight."

**Anthropic, "Demystifying evals for AI agents" (2026-01-09).** Definitions worth adopting verbatim: an eval is "a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." A transcript/trace/trajectory is "the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions." Outcome is the final environment state, distinct from the process. Eight-step roadmap: start early with 20-50 tasks from real failures; convert manual checks and bug reports into cases; write unambiguous tasks with reference solutions (0% pass@100 by a frontier model usually means a broken task); balance the set so the behavior should sometimes occur and sometimes not; give every trial a clean environment; prefer deterministic graders, use model graders when needed, use humans judiciously; read transcripts; watch for saturation; assign ownership and let domain experts contribute. A grading-bug fix moved Opus 4.5 from 42% to 95% on CORE-Bench, which shows how much of a score can be the grader. Anthropic positions automated evals alongside production monitoring, A/B tests, user feedback, manual transcript review, and human studies, recommending "automated evals for fast iteration, production monitoring for ground truth, and periodic human review for calibration."

**OpenAI evaluation best practices (developers.openai.com, current as of September 2026).** "Adopt eval-driven development: Evaluate early and often." Five-step workflow: define success criteria, collect datasets (synthetic, domain, production, human-curated, historical), establish metrics, run and iterate, evaluate continuously on every change. Judge guidance: pairwise or pass/fail, validate against human labels first, control for length bias, add chain-of-thought before scoring. Anti-patterns: perplexity and BLEU as proxies, unrepresentative datasets, "vibe-based" evaluation, skipping human calibration. Once evals are stable, use the data for reinforcement fine-tuning "to establish a data flywheel." The page also carries a deprecation notice: the OpenAI Evals platform goes read-only on 2026-10-31 and shuts down on 2026-11-30.

**Eval-driven development (EDD): who advocates it.** Vercel (Malte Ubl et al., 2024-10-17): "Evaluations (evals) are like end-to-end tests for AI and other probabilistic systems," with three grader types (code, human, LLM) and an "AI-native flywheel." OpenAI's guide uses the phrase directly. Eugene Yan endorses "EDD" as defining success criteria before building. Xia et al. (CSIRO-affiliated authors; arXiv 2411.13768, v3 2025-11-17) formalize "evaluation-driven development and operations" as a process model uniting offline and online evaluation in a closed loop. The dissent is Husain and Shankar, above. The reconciliation most practitioners land on: define a handful of success criteria early, but grow the eval set from observed failures, not imagined ones.

**What mature practice looks like, step by step (synthesis of the above).** (1) Instrument everything so traces exist. (2) Read 100 traces; one expert labels pass/fail with critiques. (3) Cluster failures into a taxonomy and count. (4) For the top failure modes, write graders: code where possible, judge where necessary, each judge validated against 100-200 labels with TPR/TNR reported. (5) Freeze a regression set of 100+ cases; gate changes in CI on rates, not exact outputs. (6) Ship; sample 10-20% of production traffic into asynchronous online scoring. (7) Route low scores and user complaints into an annotation queue. (8) Every 2-4 weeks, re-run error analysis on fresh traces, retire saturated cases, add new ones. (9) When the model or judge changes, re-calibrate before trusting any number.

### 2.2 LLM-as-judge: practices and pitfalls

**Bias evidence.** Eugene Yan's survey of about two dozen papers (August 2024) reports position bias of 50-70% toward the first response for older models, verbosity preference over 90% of the time in one study, and self-enhancement of 10-25% higher win rates for a model's own outputs. Spearman correlation with humans typically 0.27-0.55; human-human agreement exceeds LLM-human agreement. Ye et al., "Justice or Prejudice" (October 2024), catalog 12 bias types in the CALM framework and conclude users should "exercise caution." Zhao et al., "Bias in the Loop" (2026-04-18), find for code judging that "small prompt edits can swing outcomes" enough to "alter relative model rankings" and recommend reporting bias sensitivity alongside accuracy. Norman, Rivera, and Hughes, "Reliability without Validity" (2026-06-17; 21 judges, 9 providers, about 541,000 judgments): exact-match agreement overstates judge quality by 33-41 percentage points versus Cohen's kappa; rankings shift up to 14 positions across benchmarks; two production judges showed test-retest reliability above 0.95 alongside position bias above 0.10; verbosity bias magnitude was below 0.011. They propose a "Minimum Viable Validation Protocol."

**Calibration practice.** Husain's "Creating a LLM-as-a-Judge That Drives Business Results" (2024-10-29): "If your evaluations consist of a bunch of metrics that LLMs score on a 1-5 scale (or any other scale), you're doing it wrong." Critique shadowing: one principal domain expert labels pass/fail with a written critique; build the judge prompt from those critiques; split labels roughly 10-20% train, 40-45% dev, 40-45% test; report TPR and TNR separately because raw agreement misleads when failures are rare; aim for about 100 examples per failure mode. Shankar et al., "Who Validates the Validators?" (UIST 2024): "criteria drift" means graders cannot fully define criteria before seeing outputs, so criteria and labels must co-evolve.

**Pairwise versus direct scoring.** Yan: pairwise for subjective qualities (tone, persuasiveness), direct pass/fail for objective ones (faithfulness, policy violations). Anthropic: "Prefer deterministic graders where possible, use LLM graders when necessary, and employ human graders judiciously."

**Judge drift.** Li (2026-06-13): a human-labeled anchor set re-scored at intervals, with a statistical guard, attributed silent judge version bumps correctly in 60 of 60 runs while a rolling z-test false-alarmed on 75% of drift-free streams. Practitioner rule: pin a dated judge snapshot, version the rubric, hash the prompt, and treat a judge swap as an eval-suite migration.

**When code graders are preferable.** Any property that can be checked deterministically: schema validity, required tool calls, end-state of a database or file system, test suite results, citations resolving, policy fields present. Anthropic and OpenAI both put these first. Judges are for what remains: tone, completeness, reasoning quality.

### 2.3 Agent-specific evaluation and benchmarks

**Trajectory versus outcome.** Anthropic: grade outcomes, since "agents find valid approaches evaluators didn't anticipate," but read transcripts to understand why. Anthropic's research-system post (2025-06-13) describes "end-state evaluation" and an LLM judge scoring factual accuracy, citation accuracy, completeness, source quality, and tool efficiency on 0-1 with a pass/fail. Google's Vertex AI evaluation service defines trajectory metrics as exact match, in-order match, any-order match, precision, and recall against a reference tool sequence [secondary: via Mete Atamel, August 2025; the docs page did not render]. Kirgis et al. (2026-05-08) argue outcome-only grading hides shortcut solutions, scaffold bottlenecks, and dangerous actions, and that "as agent time-horizons and degrees of freedom grow, the gap between process and outcome widens."

**Partial credit and process quality.** Anthropic recommends partial credit for multi-component tasks. AgentLens (Sahoo et al., May 2026; 2,614 OpenHands trajectories, 8 models, 60 SWE-bench Verified tasks): 10.7% of passing trajectories were "lucky passes" with "regression cycles, blind retries, missing verification"; lucky rates ranged 0.5% to 23.2% by model; ranking by process quality moved some models up to five positions.

**pass@k versus pass^k.** Sierra's tau-bench (June 2024; blog 2025-03-18): GPT-4-class agents solved under 50% of tasks once and about 25% when the same task was repeated eight times. tau2-bench (2025-06-10) adds dual-control tasks where the user also acts; leading models dropped up to 25 points moving from solo to interactive mode. Anthropic: "At k=1, they're identical. By k=10, they tell opposite stories: pass@k approaches 100% while pass^k falls to 0%." Kirgis et al. found tau-bench Airline pass^5 was under-elicited by nearly half (20.8% to 40.0% after fixing flawed tasks), with 25 of 50 tasks containing policy inconsistencies, ambiguous instructions, or grading errors, and models with similar pass^5 differing 4x in resistance to user persuasion.

**Reliability science.** Rabanser, Kapoor, Kirgis, Narayanan et al. (Princeton, v3 2026-06-02) decompose reliability into consistency, robustness, predictability, and safety with 12 metrics, and find "overall reliability shows minimal improvement over time, despite 24 months of model releases"; smaller models are often more consistent because larger models have more solution paths. Khanal et al. (2026-03-31; 10 models, 23,392 episodes) report meltdown rates up to 19% on long tasks and that "memory scaffolds universally hurt long-horizon performance across all 10 models." METR (2026-01-29): best 50% time horizon about 320 minutes (Claude Opus 4.5), doubling every 131 days since 2023, but the 80% horizon is far shorter, and "a 50% time horizon of X hours does not mean we can delegate tasks under X hours to AIs" (2026-01-22).

**Simulated users.** tau-bench-style user simulators are "cooperative, template-like" and evaluate against fixed solutions; Chong et al. (2026-03-16) add expert and non-expert personas plus automated error analysis. Treat the simulator as another component that needs validation.

**Public benchmarks and their limits.**
- SWE-bench Verified: OpenAI (February 2026) stopped reporting it; top scores moved only 74.9% to 80.9% in six months; of 138 audited hard tasks, 59.4% had flawed tests or statements, 35.5% had overly narrow tests, and 31 showed contamination signals; recommended SWE-bench Pro instead [secondary: Pebblous summary, February 2026]. OpenHands (2026-06-25) reports OpenAI then walked back the Pro recommendation in July 2026 after roughly 30% of the public split was found broken [secondary]. Scaffolding was "worth 11 to 15 points" (Claude 3.7 Sonnet 62.3% to 70.3% with a custom scaffold).
- Terminal-Bench 2.0 (Merrill et al., 2026-01-17): 89 tasks with human-written solutions and tests; frontier agents under 65%; version 2.1 fixed 28 of 89 tasks for changed dependencies, tight budgets, and instruction-test mismatches.
- BrowseComp (OpenAI, 2025): 1,266 hard web-research questions; by September 2026 the top three models sit within 1 point of each other above 91%, near saturation [secondary: leaderboard aggregators].
- GAIA: 103-question text subset still cited; largely a legacy reference.
- BFCL v4 (April 2026): 40% weight on agentic multi-step tasks, 30% multi-turn; paraphrasing a query drops exact-match tool accuracy 13-19 points, a direct measure of tool-selection brittleness [secondary].

Why they do not substitute for product evals: contamination, saturation, scaffold variance, flawed tasks, and a task distribution that is not yours. Kapoor et al. (July 2024): benchmarks "conflate" model-developer and application-developer needs and let agents "take shortcuts and overfit."

### 2.4 Verification versus evaluation

**The distinction.** Evaluation is offline and population-level: it estimates a rate over many cases before or after a change. Verification is online and instance-level: it decides whether this particular output or action is acceptable before it takes effect. Both use the same grader types, but they answer different questions and have different failure costs.

**Sources that name it.** Anthropic's Agent SDK post (2025-09-29): the loop is "gather context, take action, verify work, repeat," with three verification modes: rules-based feedback (linting, type checks: "the more in-depth in feedback the better"), visual feedback (screenshots), and a second model judging "based on fuzzy rules," with a noted latency cost. "Agents that can check and improve their own output are fundamentally more reliable." Anthropic's "Building effective agents" (2024-12-19): "it's crucial for the agents to gain 'ground truth' from the environment at each step (such as tool call results or code execution) to assess its progress," and agents should "pause for human feedback at checkpoints or when encountering blockers." The long-running-agents post (2025-11-26) reports Claude "tended to make code changes... but would fail to recognize that the feature didn't work end-to-end," that browser tools "dramatically improved performance," and that a later agent instance "would look around, see that progress had been made, and declare the job done." The fix was explicit per-feature verification state.

**Approval gates.** OpenAI's "A practical guide to building agents" (2025-04-17) recommends human intervention when failure thresholds are exceeded (for example repeated retries) and for high-risk actions such as payments, refunds, or cancellations [wording from memory of the guide; the PDF did not parse in this session]. Meta's Rule of Two (2025-10-31): if an agent needs all of untrusted input, sensitive data, and external state change, it "should not be permitted to operate autonomously and at a minimum requires supervision, via human-in-the-loop approval or another reliable means of validation."

**Verifier models and test-time compute.** Jason Wei (2025-07-15): "Some tasks are much easier to verify than to solve"; verifier's law: "The ease of training AI to solve a task is proportional to how verifiable the task is." Five properties: objective truth, fast, scalable, low noise, continuous reward. The research literature on the "generation-verification gap" (Weaver, NeurIPS 2025; multi-agent verification, 2025) shows imperfect verifiers yield diminishing returns when false positives dominate. Cho and Sun (2026-05-13) formalize the "release decision" in generate-verify loops with always-valid statistical stopping rules. Practical reading for the talk: verification is only as good as the verifier, so prefer deterministic verifiers (tests, schemas, external state) and treat model verifiers as evidence, not proof.

**Structured outputs.** Schema-constrained decoding makes format verification deterministic; OpenAI's Structured Outputs launch (August 2024) claimed exact schema adherence [from memory; not re-verified this session]. This removes one class of failure from judges entirely.

### 2.5 Observability

**Standards status.** As of 2026-07-16, "every single gen_ai.* attribute, span, metric, and event in the official OpenTelemetry registry carries the stability badge 'Development'" (Azena, dev.to). On 2026-06-12, with semantic-conventions v1.42.0, GenAI conventions moved to a dedicated open-telemetry/semantic-conventions-genai repository, which also absorbed MCP conventions. Operations defined: chat, embeddings, execute_tool, invoke_agent, invoke_workflow, create_agent, retrieval, plan, plus memory operations. Required attributes: gen_ai.operation.name and gen_ai.provider.name. Renames already happened (gen_ai.system to gen_ai.provider.name; prompt/completion token names to input/output tokens; gen_ai.prompt and gen_ai.completion removed). Message content (gen_ai.input.messages, gen_ai.output.messages, gen_ai.system_instructions) is opt-in because it "is likely to contain sensitive information including user/PII data." Claude Code, VS Code Copilot, and OpenAI Codex emit OTel GenAI telemetry; Claude Code exports metrics, events, and traces over OTLP with prompt text off by default.

**What to record.** The union of Anthropic's transcript definition, the OTel agent span model, and LangChain's monitoring guide (2026-02-26): full prompt and response per model call; every tool call with arguments and returned content; state transitions and stopping reason; end-state of the environment; per-step and per-run tokens, cost, latency; model and prompt versions; user and session identifiers; user feedback; and eval scores attached to the trace. LangChain: "You can't monitor agents like traditional software. Inputs are infinite, behavior is non-deterministic, and quality lives in the conversations themselves." Anthropic monitors "agent decision patterns and interaction structures, all without monitoring the contents of individual conversations, to maintain user privacy."

**What practitioners wish they had logged.** Pedro Alonso (2026-07-30): tracing revealed 73% of GPU time going to unneeded reference sheets, tools returning absolute paths the system prompt forbade ("tool output is prompt engineering"), language switching in 3 of 7 runs, and protocol violations he converted into counted metrics. "When a behavior must be reliable, stop asking the model to infer state you already know." The recurring lesson across sources: tool outputs are model inputs with the same authority as the system prompt and are the least audited input.

**Tooling landscape (descriptive, no endorsement).** AI-native trace platforms: Langfuse (open source, OTLP ingest), LangSmith, Braintrust, Arize Phoenix (OpenInference schema with OTel translation), Weights and Biases Weave, Opik, Laminar. Incumbent APM vendors: Datadog LLM Observability (native OTel GenAI support), Honeycomb. Gateways adding logging and routing: Helicone, Portkey, LiteLLM. Most converge on the same object model: a trace of nested spans with attached scores and datasets.

### 2.6 Post-deployment practice

**Adoption data.** LangChain survey (Nov 18 to Dec 2, 2025; 1,340 respondents; 57.3% with agents in production): observability 89% (94% among production teams), detailed tracing 62%, offline evals 52.4%, online evals 37.3% (44.8% in production), human review 59.8%, LLM-as-judge 53.3%; over 75% use multiple models; 57% do not fine-tune. Top barrier: quality (about 33%), then latency (20%); cost declining. Datadog's 2026 data reportedly shows median token usage per request doubling year over year and about 8.4 million rate-limit failures in March 2026 [unverified; report page not reachable].

**Online evals.** Sample 10-20% of traffic (LangChain), score asynchronously so no user-facing latency is added, alert on deltas from a rolling baseline, and feed low scores into annotation queues. Husain and Shankar: track confidence intervals on production estimates and correct for judge TPR/TNR.

**Model change and deprecation.** Arthur AI (2026-08-06): "Probabilistic systems don't raise exceptions when their behavior drifts. That silence is exactly what makes a model swap dangerous." Steps: build a regression suite from production traffic and past failures; run the new model against it with everything else fixed; re-tune the prompt separately; keep continuous binary checks on production; inventory which agents depend on which models. Practitioner consensus: never change model and prompt in the same commit. Deprecation cadence is real: Anthropic listed Claude Opus 4.1 for retirement on 2026-08-05; OpenAI removed several models in early 2026 and is shutting down its Evals platform in November 2026.

**The data flywheel.** Shankar (2024-07-01): evaluation, monitoring, continual improvement; "Humans need to be in the loop for evaluation regularly, as human preferences on LLM outputs change over time." OpenAI: eval data feeds reinforcement fine-tuning. NVIDIA's data-flywheel blueprint automates traces to evals to fine-tunes. Most teams close the loop with prompts and few-shot examples, not weights; the LangChain survey's 57% no-fine-tuning figure supports that.

**Guardrails and their limits.** OpenAI's guide: guardrails are "a layered defense mechanism"; combine LLM classifiers, rules (regex, PII filters), moderation APIs, tool risk ratings, and output validation. Hackett et al. (2025-04-15, revised 2025-07-14): character injection and adversarial-ML evasion against six systems including Azure Prompt Shield and Meta Prompt Guard reached "up to 100% evasion success" while keeping the attack effective. Ramakrishnan and Balaji (2025-11-19): baseline attack success 73.2% across 847 cases and seven models, reduced to 8.7% with a combined three-layer defense while retaining 94.3% task performance [intermediate layer figures unverified]. Anthropic's Constitutional Classifiers (2025) survived over 3,000 hours of red teaming with 0.38% extra refusals and 23.7% inference overhead; Constitutional Classifiers++ (2026-01-08) cut cost about 40x versus the exchange classifier with a 0.05% refusal rate and over 1,700 red-team hours finding no universal jailbreak. OWASP's 2026 agentic report maps prompt injection to six of its ten agentic categories (Help Net Security, 2026-06-11). Beurer-Kellner et al. (2025-06-13) give six architectural patterns (action-selector, plan-then-execute, map-reduce, dual LLM, code-then-execute, context-minimization) with the principle: "once an LLM agent has ingested untrusted input, it must be constrained so that it is impossible for that input to trigger any consequential actions."

### 2.7 Testing

**Why unit and integration tests remain necessary but insufficient.** They verify the deterministic parts (routing, retries, parsing, permission checks, tool dispatch) but cannot assert a probabilistic output. Anthropic treats eval maintenance "like unit test maintenance," which frames evals as a new layer, not a replacement.

**Test pyramid analog (Pan, 2026-04-10; corroborated by Wong, September 2026, and several 2026 practitioner posts).** Tier 1: structural tests with stub models on every commit, zero cost. Tier 2: recorded fixtures (VCR-style cassettes) replayed on every PR; cassettes are committed and diffed when prompts change. Tier 3: live evals on merge to main and nightly, costing roughly $0.50 to $50 per run; a three-person team spends about $30-80 per month. Pan notes outputs "vary even at temperature=0 due to hardware-level floating-point differences across provider regions."

**Non-determinism in CI.** Wong: sample each case several times and "score as a rate"; contract rules (shape, schema) require every sample to pass; quality rules allow one miss; "Never loosen a threshold in the same commit that changes a prompt." Anthropic's arithmetic makes the point: three trials at 75% each pass together only 42% of the time, so single-run gates are noise.

**Contract and property-based testing for tools.** Braintrust (2026-08-30): MCP evals test "the boundary between an AI client and an MCP server, isolating whether tool descriptions, schemas, and responses guide the agent correctly," because "a misleading schema corrupts every downstream trajectory score," and "Valid JSON-RPC traffic does not guarantee useful agent behavior." Anthropic's tool-writing post (2025-09-11) recommends programmatic tool evals that record runtime, tool-call count, tokens, and errors, with verifiable outcomes per task, and reading transcripts because "omissions can be more revealing than stated feedback." Property-based tests fit tool handlers well (any valid input yields a schema-valid, bounded, side-effect-correct response).

**Mocking versus fixtures versus live.** Stub models test your code; fixtures test your prompts against a frozen model; live calls test the model. Each tier needs a different assertion style. Fixtures go stale on model change, which is a feature: the diff is the regression report.

### 2.8 Cost and latency engineering

**Prompt caching.** Anthropic (platform docs, September 2026): cache writes 1.25x base input (5-minute TTL) or 2x (1-hour); cache reads 0.1x base input, with 0.025x on the newest models; minimum cacheable length 512-4,096 tokens by model; automatic cache-point movement for growing conversations. OpenAI (pricing page, September 2026): cached input is 10% of input price across current models; Batch API halves prices at both providers. Third-party measurements cite up to 85% latency reduction for long prompts on Anthropic [secondary].

**Routing and cascades.** RouteLLM (ICLR 2025): 85% cost reduction on MT-Bench at 95% of GPT-4 quality, sending 14% of queries to the strong model. FrugalGPT (2023): up to 98% cheaper on its benchmarks. Practitioner reports put production savings at 40-70% [secondary]. Constitutional Classifiers++ used the same cascade idea to cut guardrail overhead.

**Cost per task as a metric.** Kapoor et al. (July 2024): "SOTA agents are needlessly complex and costly"; evaluate on the accuracy-cost Pareto frontier. OpenHands Index (2026) reports ability, cost, and runtime per category. Anthropic's multi-agent research system used about 15x the tokens of a chat and found token usage explained 80% of performance variance, so budget is a design input, not an output. Anthropic's tool evals track tokens and tool calls per task.

**Latency budgets.** A single agent turn involves 2-5 model hops plus tools, compounding latency 3-10x over single-call benchmarks; sequential planner-executor-critic loops inherit three times the time-to-first-token [secondary practitioner sources]. Chat targets around 300 ms TTFT p99, voice under 150 ms model TTFT and under 800 ms end-to-end. LangChain: latency is the second-biggest production barrier at 20%. Practical levers: caching, streaming, parallel tool calls, smaller models for sub-steps, step and token budgets with stopping conditions.

---

## 3. Slide-ready material

**Definitions (attributed)**
- Eval: "a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." (Anthropic, 2026-01-09)
- Trajectory: "the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions." (Anthropic, 2026-01-09)
- pass@k: at least one of k trials succeeds. pass^k: all k trials succeed. (Sierra, 2024; Anthropic, 2026)
- Error analysis: "the systematic process of reviewing traces, noting problems, categorizing errors, and counting them." (Husain and Shankar, 2025)
- Log analysis: "the systematic tracking and analysis of the inputs, execution, and outputs of an AI agent." (Kirgis et al., 2026-05-08)
- Asymmetry of verification: "some tasks are much easier to verify than to solve." (Jason Wei, 2025-07-15)
- Agents Rule of Two: no more than two of untrusted input, sensitive data access, external state change, per session, without human approval. (Meta, 2025-10-31)

**Statistics**
- 75% per-trial success gives 42% for three consecutive passes. (Anthropic, 2026-01-09)
- tau-bench: under 50% single-run success, about 25% over eight repetitions for GPT-4-class agents. (Sierra, 2024/2025)
- tau2-bench: up to 25-point drop from solo to interactive mode. (Sierra, 2025-06-10)
- 25 of 50 tau-bench Airline tasks flawed; pass^5 under-elicited by nearly 50%. (Kirgis et al., 2026-05-08)
- 59.4% of 138 audited SWE-bench Verified hard-task failures were test flaws; top score moved 74.9% to 80.9% in six months. (OpenAI, February 2026, via secondary)
- Scaffold worth 11-15 points on SWE-bench Verified. (OpenHands, 2026-06-25)
- 10.7% of passing SWE-bench trajectories were "lucky passes." (AgentLens, May 2026)
- Grader fix moved CORE-Bench score from 42% to 95%. (Anthropic, 2026-01-09)
- Judge exact-match agreement overstates quality by 33-41 points versus kappa; 541,000 judgments. (Norman et al., 2026-06-17)
- Critiques in judge few-shots: +15-20 points human agreement. (Husain, 2025-03-24)
- 89% observability, 52.4% offline evals, 37.3% online evals; quality top barrier at about 33%; 1,340 respondents. (LangChain, Dec 2025)
- "Up to 100% evasion" of commercial prompt-injection guardrails. (Hackett et al., 2025)
- Constitutional Classifiers: 3,000+ red-team hours, 0.38% extra refusals, 23.7% overhead (2025); ++ version: 0.05% refusals, about 40x cheaper (2026-01-08).
- Multi-agent research: 90.2% better than single agent, about 15x tokens. (Anthropic, 2025-06-13)
- Cached input: 0.1x base price at Anthropic and OpenAI; Anthropic cache write 1.25x; batch 50% off. (Provider docs, September 2026)
- RouteLLM: 85% cost cut at 95% quality. (ICLR 2025)
- METR: 50% time horizon about 320 minutes; doubling every 131 days since 2023. (2026-01-29)

**Quotes**
- "Teams who succeed barely talk about tools at all. Instead, they obsess over measurement and iteration." (Husain, 2025-03-24)
- "Write evaluators for errors you discover, not errors you imagine." (Husain and Shankar, FAQ)
- "Building product evals is simply the scientific method in disguise." (Eugene Yan, April 2025)
- "Benchmarks tell us what the agent achieved; only logs reveal how and why." (Kirgis et al., 2026-05-08)
- "Every drift alarm is ambiguous between a worse product and a changed judge." (Li, 2026-06-13)
- "Agents that can check and improve their own output are fundamentally more reliable." (Anthropic, 2025-09-29)
- "Prompt injection is a fundamental, unsolved weakness in all LLMs." (Meta, 2025-10-31)
- "Probabilistic systems don't raise exceptions when their behavior drifts." (Arthur AI, 2026-08-06)
- "Tool output is prompt engineering." (Pedro Alonso, 2026-07-30)
- "The suite is not there to prove the prompt is good. It is there so a change to the prompt produces a number two people can argue about." (Wong, September 2026)
- "Reliability gains lag behind accuracy improvements." (Rabanser et al., 2026)

**Short examples**
- NurtureBoss: error analysis showed date handling dominated failures; fixing it moved that category from 33% to 95%. (Husain, 2025)
- Long-running coding agents "declared the job done" after seeing prior progress; a per-feature pass/fail file fixed it. (Anthropic, 2025-11-26)
- A tool returned absolute file paths the system prompt forbade; the trace, not the prompt, revealed it. (Alonso, 2026)
- Terminal-Bench 2.1 had to fix 28 of 89 tasks because dependencies changed, budgets were too tight, or instructions did not match tests. (2026)

---

## 4. Disagreements, controversies, and open questions

1. **Evals first or errors first?** OpenAI, Vercel, Eugene Yan, and Xia et al. advocate eval-driven development. Husain and Shankar explicitly reject writing evaluators before observing failures. The practical middle: a few success criteria up front, the eval set grown from production.

2. **Is LLM-as-judge trustworthy enough?** Norman et al. argue field practice validates judges with the wrong metric. Vendors ship judge-heavy products anyway. Everyone agrees on human calibration; nobody agrees on how much is enough.

3. **Trajectory grading or outcome grading?** Anthropic and its research team favor outcome grading with transcript reading. Kirgis et al., AgentLens, and Google's trajectory metrics push process grading as necessary for reliability and safety. The honest answer is that outcomes are the score and trajectories are the diagnosis, but safety-relevant actions must be graded in the trajectory.

4. **Do public benchmarks measure anything now?** OpenAI abandoned its own SWE-bench Verified, then reportedly walked back its Pro recommendation within months. Terminal-Bench and tau-bench both needed task fixes. Contamination detection is an active research area. Position for the talk: benchmarks show model trends; only your evals show your product.

5. **Are guardrail classifiers worth it?** Academic evasion studies say classifiers alone fail; Anthropic's production results say a well-resourced classifier program works. Both can be true: the cost of doing classifiers well is high, and architecture (Rule of Two, design patterns) is the cheaper first line for most teams.

6. **Fine-tune or not?** OpenAI and NVIDIA frame the flywheel ending in fine-tuning; 57% of surveyed teams do not fine-tune, and Shankar's flywheel deliberately omits it.

7. **Does more capability buy reliability?** Princeton says no over 24 months; METR shows fast capability growth but warns that horizon does not equal delegability. Open question whether reliability is a model property or a harness property.

8. **Simulated users.** Needed for multi-turn evals at scale, but known to be cooperative and template-like; their calibration against real users is largely unmeasured.

9. **OTel GenAI stability.** Widely described as "the standard," yet nothing is marked stable and names have already changed. Instrument now, expect renames.

---

## 5. Implications for the talk

**What the five-area map is missing in these areas.**

- **The improvement loop is the methodology, not an area.** Areas 3.4 and 3.5 read as deliverables (an eval suite, a dashboard). The strongest sources describe a cycle: trace, read, label, taxonomize, grade, fix, re-measure, sample production, repeat. Recommend presenting the loop once as the spine that connects 3.1 through 3.5, then showing where each area's artifacts plug in. Husain's "experiments run, not features shipped" is the one-line version.

- **Per-action verification deserves its own name.** It belongs in 3.3 (a step of the loop: verify before proceeding, stop when unverifiable) and 3.2 (consequential tools require evidence or approval). Vocabulary to use: evaluation estimates a rate across cases; verification decides one case before it takes effect. Verifiers, in order of trust: deterministic checks and tests, external state and evidence, approval gates, model judges. Jason Wei's asymmetry principle is the design rule: build tools and tasks so that checking is cheap.

- **Reliability is a distinct eval dimension.** Add repeated trials and pass^k to 3.4. Enterprise agents are judged on consistency, and the field's data says capability gains have not delivered it.

- **Cost and latency are eval outputs.** Put cost per task, tokens per task, and p95 latency on the same scorecard as correctness (Kapoor et al.; Anthropic's tool metrics). This also connects 3.3's budgets to 3.4's measurements.

- **Eval infrastructure is production code.** Graders, judge prompts, simulators, and fixtures need versioning, tests, and calibration. Judge drift and criteria drift are real; pin and re-calibrate.

- **Logs are the shared substrate.** Observability (3.5) and evals (3.4) converge on the trace. The single most repeated lesson: record tool outputs, because they are model inputs with system-prompt authority.

- **Security guardrails: state the measured limits.** Classifiers help; architecture (Rule of Two, constrained action patterns) is what bounds harm. This ties 3.5 back to 3.2's consequential-action distinction.

**What to include for a 30-minute, beginner-leaning talk.**
- One slide: the loop, with the 60-80% time figure.
- One slide: evaluation versus verification, with the agent loop "gather, act, verify, repeat."
- One slide: pass@k versus pass^k with the 75% to 42% arithmetic.
- One slide: three grader types, and "generic metrics create false confidence."
- One slide: what a trace contains, and "tool output is prompt engineering."
- One slide: cost levers (caching 90%, batch 50%, routing) and cost per task.
- One slide: guardrail limits and the Rule of Two.

**What to cut.** Judge bias taxonomies, OTel attribute names, formal reliability metrics, benchmark leaderboards, tooling comparisons. Mention that tools exist and converge on the same trace model; do not compare them.

**Framing for this audience.** Software engineers already know the test pyramid, CI gates, tracing, canaries, and rollback. The message is that all of it stays, and a new layer sits on top: statistical tests over probabilistic behavior, verification of individual actions before they take effect, and an explicit loop from production back to the test set. The unfamiliar habit is reading raw data by hand; the unfamiliar artifact is a labeled failure taxonomy; the unfamiliar metric is a rate with a confidence interval instead of a green check.

---

## 6. Full source list

Primary and practitioner sources
- Anthropic, "Demystifying evals for AI agents," 2026-01-09. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- Anthropic, "Building agents with the Claude Agent SDK," 2025-09-29. https://claude.com/blog/building-agents-with-the-claude-agent-sdk
- Anthropic, "Effective harnesses for long-running agents," 2025-11-26. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Anthropic, "Building effective agents," 2024-12-19. https://www.anthropic.com/engineering/building-effective-agents
- Anthropic, "How we built our multi-agent research system," 2025-06-13. https://www.anthropic.com/engineering/multi-agent-research-system
- Anthropic, "Writing effective tools for agents," 2025-09-11. https://www.anthropic.com/engineering/writing-tools-for-agents
- Anthropic, Prompt caching docs, accessed 2026-09-11. https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- OpenAI, "Evaluation best practices," accessed 2026-09-11. https://developers.openai.com/api/docs/guides/evaluation-best-practices
- OpenAI, API pricing, accessed 2026-09-11. https://developers.openai.com/api/docs/pricing
- OpenAI, "A practical guide to building agents," 2025-04-17. https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
- OpenAI, "Why SWE-bench Verified no longer measures frontier coding capabilities," February 2026 (403 on fetch; figures via Pebblous summary). https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/ and https://blog.pebblous.ai/blog/swe-bench-verified-retired/en/
- Hamel Husain and Shreya Shankar, "AI Evals: Everything You Need to Know" (FAQ), 2025-05-28, updated 2026-09-01. https://hamel.dev/blog/posts/evals-faq/
- Hamel Husain, "A Field Guide to Rapidly Improving AI Products," 2025-03-24. https://hamel.dev/blog/posts/field-guide/
- Hamel Husain, "Creating a LLM-as-a-Judge That Drives Business Results," 2024-10-29. https://hamel.dev/blog/posts/llm-judge/
- Eugene Yan, "An LLM-as-Judge Won't Save The Product, Fixing Your Process Will," April 2025. https://eugeneyan.com/writing/eval-process/
- Eugene Yan, "Evaluating the Effectiveness of LLM-Evaluators," August 2024. https://eugeneyan.com/writing/llm-evaluators/
- Shreya Shankar, "Data Flywheels for LLM Applications," 2024-07-01. https://www.sh-reya.com/blog/ai-engineering-flywheel/
- Jason Wei, "Asymmetry of verification and verifier's law," 2025-07-15. https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law
- Sierra, "tau-bench," 2025-03-18. https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents
- Sierra, "tau2-bench," 2025-06-10. https://sierra.ai/blog/benchmarking-agents-in-collaborative-real-world-scenarios
- Meta, "Agents Rule of Two," 2025-10-31. https://ai.meta.com/blog/practical-ai-agent-security/
- Simon Willison, "Design Patterns for Securing LLM Agents against Prompt Injections," 2025-06-13. https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/
- Vercel, "Eval-driven development: Build better AI faster," 2024-10-17. https://vercel.com/blog/eval-driven-development-build-better-ai-faster
- LangChain, "State of Agent Engineering," survey Nov 18 to Dec 2, 2025. https://www.langchain.com/state-of-agent-engineering
- LangChain, "How to Monitor AI Agents in Production," 2026-02-26. https://www.langchain.com/blog/production-monitoring
- METR, "Time Horizon 1.1," 2026-01-29. https://metr.org/blog/2026-1-29-time-horizon-1-1/
- METR, "Clarifying limitations of time horizon," 2026-01-22. https://metr.org/notes/2026-01-22-time-horizon-limitations/
- OpenTelemetry, GenAI agent spans (Development status). https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md
- Azena, "OpenTelemetry's GenAI semantic conventions are NOT stable yet," 2026-07-16. https://dev.to/azena-ai/opentelemetrys-genai-semantic-conventions-are-not-stable-yet-heres-what-actually-shipped-in-2026-3mke
- Pedro Alonso, "One Day of Agent Observability: Five Bugs Found," 2026-07-30. https://www.pedroalonso.net/blog/llm-agent-tracing-case-study/
- Tian Pan, "How to Integration-Test AI Agent Workflows in CI Without Mocking the Model Away," 2026-04-10. https://tianpan.co/blog/2026/04/10/integration-testing-ai-agents-ci
- Matthews Wong, "Prompt Regression Testing in CI: Assert a Rate, Not an Answer," September 2026. https://www.matthewswong.com/en/blog/prompt-regression-testing-ci-evals/
- Arthur AI, "Model Deprecation: How to Migrate an Agent Safely," 2026-08-06. https://www.arthur.ai/column/model-deprecation-version-drift-agents
- Braintrust, "5 best MCP testing tools for agent evals in 2026," 2026-08-30 (vendor). https://www.braintrust.dev/articles/best-mcp-testing-tools-agent-evals-2026
- OpenHands, "AI Coding Benchmarks Explained," 2026-06-25. https://www.openhands.dev/blog/ai-coding-benchmarks-explained
- Help Net Security on OWASP "State of Agentic AI Security and Governance" v2.01, 2026-06-11. https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/
- Mete Atamel, "Gen AI Evaluation Service, Agent Metrics," August 2025 (Google Cloud trajectory metrics). https://medium.com/google-cloud/gen-ai-evaluation-service-agent-metrics-ef2a88fc6227
- Lazar Milicevic, "LLM Evals in 2026: A Practitioner's Field Guide," 2026-07-09 (practitioner, secondary). https://dev.to/lamingsrb/llm-evals-in-2026-a-practitioners-field-guide-26if

Papers
- Kirgis, Kapoor, Rabanser, Nadgir, Ududec, Dubois, Allaire, Stosz, Hobbhahn, Steinhardt, Narayanan, "Log analysis is necessary for credible evaluation of AI agents," 2026-05-08. https://arxiv.org/abs/2605.08545
- Rabanser, Kapoor, Kirgis, Liu, Utpala, Narayanan, "Towards a Science of AI Agent Reliability," v3 2026-06-02. https://arxiv.org/abs/2602.16666
- Khanal, Tao, Zhou, "Beyond pass@1: A Reliability Science Framework for Long-Horizon LLM Agents," 2026-03-31. https://arxiv.org/abs/2603.29231
- Sahoo et al., "AgentLens: Revealing The Lucky Pass Problem in SWE-Agent Evaluation," 2026-05-13 (v3 2026-06-02). https://arxiv.org/abs/2605.12925
- Norman, Rivera, Hughes, "Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models," 2026-06-17. https://arxiv.org/abs/2606.19544
- Li, "Who Drifted: the System or the Judge? Anytime-Valid Attribution in LLM Evaluation Pipelines," 2026-06-13. https://arxiv.org/abs/2606.15474
- Zhao, Esmaeili, Fard, "Bias in the Loop: Auditing LLM-as-a-Judge for Software Engineering," 2026-04-18. https://arxiv.org/abs/2604.16790
- Ye et al., "Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge," 2024-10-03. https://arxiv.org/abs/2410.02736
- Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran, Arawjo, "Who Validates the Validators?" UIST 2024. https://arxiv.org/abs/2404.12272
- Cho, Sun, "When Should an AI Workflow Release? Always-Valid Inference for Black-Box Generate-Verify Systems," 2026-05-13. https://arxiv.org/abs/2605.12947
- Chong et al., "Talk, Evaluate, Diagnose: User-aware Agent Evaluation with Automated Error Analysis," 2026-03-16. https://arxiv.org/abs/2603.15483
- Merrill et al., "Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces," 2026-01-17. https://arxiv.org/abs/2601.11868
- Kapoor, Stroebl, Siegel, Nadgir, Narayanan, "AI Agents That Matter," 2024-07-01. https://arxiv.org/abs/2407.01502
- Xia, Lu, Zhu, Xing, Zhao, Zhang, "Evaluation-Driven Development and Operations of LLM Agents," v3 2025-11-17. https://arxiv.org/abs/2411.13768
- Hackett, Birch, Trawicki, Suri, Garraghan, "Bypassing LLM Guardrails: An Empirical Analysis of Evasion Attacks," 2025-04-15 (rev. 2025-07-14). https://arxiv.org/abs/2504.11168
- Ramakrishnan, Balaji, "Securing AI Agents Against Prompt Injection Attacks," 2025-11-19. https://arxiv.org/abs/2511.15759
- Cunningham et al. (Anthropic), "Constitutional Classifiers++," 2026-01-08. https://arxiv.org/abs/2601.04603
- Beurer-Kellner et al., "Design Patterns for Securing LLM Agents against Prompt Injections," June 2025. https://arxiv.org/abs/2506.08837
- Ong et al., "RouteLLM," ICLR 2025 (figures via secondary summaries).
- Patil et al., "The Berkeley Function Calling Leaderboard: From Tool Use to Agentic Evaluation," ICML 2025; v4 April 2026 (secondary). https://proceedings.mlr.press/v267/patil25a.html

Unverified or not reachable in this session
- Datadog "State of AI" 2026 statistics (page returned 404).
- OpenAI, "Separating signal from noise in coding evaluations" (403); the July 2026 SWE-bench Pro walk-back is reported only by OpenHands.
- Intermediate defense-layer figures (41.0%, 23.4%) attributed to Ramakrishnan and Balaji appeared only in a search summary.
- OpenAI Structured Outputs schema-adherence claim (August 2024) cited from memory.
- Human-intervention trigger wording in OpenAI's practical guide cited from memory of the PDF.
