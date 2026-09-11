# Research Synthesis: AI Engineering and the Software-Engineer-to-AI-Engineer Transition

**Prepared:** 2026-09-11, for "Beyond the Coding Agent: From Software Engineer to AI Engineer" (week of 2026-09-14).

**Method.** Four parallel research tracks, each written up in full in this folder:

| Track | File | Scope |
|---|---|---|
| A | `track-a-discipline.md` | Definitions, competency maps, vocabulary evolution, conference programs, boundaries with ML and software engineering |
| B | `track-b-enterprise-agents.md` | Canonical design guidance, standards (MCP, A2A, Skills, AGENTS.md, agent identity), production patterns, security incidents, adoption data, governance |
| C | `track-c-evals-and-operations.md` | Evaluation methodology, verification, observability, testing, cost and latency |
| D | `track-d-transition.md` | Job market, transferable skills, first-timer mistakes, learning resources, first-person accounts, career debates |

Sources were weighted toward 2025 and 2026 primary material: model-provider engineering posts, standards bodies, practitioners with production track records, and surveys with stated methodology. Each track report flags items reachable only through secondary coverage or not verifiable. Section 4 below repeats those flags for anything likely to land on a slide.

---

## 1. The verdict on section 3 of outline v1

v1's five-area map (context, tools, harness, evals, operations) matches the field's vocabulary closely. All four tracks independently reached the same conclusion about what it lacks. Ranked by weight of evidence:

1. **The model as an engineered choice, including its lifecycle.** Absent from the map. Every canonical decomposition of an agent begins with the model: OpenAI (model, tools, instructions), Google (model, tools, orchestration), swyx's competency list, Huyen's model-selection chapter. What belongs here: capability tiers, the selection rule "build your agent prototype with the most capable model for every task to establish a performance baseline. From there, try swapping in smaller models" (OpenAI, Apr 2025), routing by task, structured outputs, and model upgrades as scheduled operational events. OpenAI gives six months' notice on GA models and retired its remaining GPT-4-era models on 2026-07-23. Over 75 percent of surveyed teams run more than one model (LangChain, Dec 2025). Anthropic's framing: "Harnesses encode assumptions that go stale as models improve" (Apr 2026).

2. **The improvement loop as the discipline's methodology.** Present in v1 only as "continue evaluation after deployment." The strongest practitioner sources describe a cycle, not an artifact: traces, error analysis, failure taxonomy, graders, regression suite, production sampling, repeat. Husain and Shankar: error analysis is "the most important activity in evals," and teams should spend "60-80% of development time on error analysis and evaluation." Anthropic (Jan 2026): start with 20 to 50 tasks drawn from real failures. Observability is widely adopted (89 percent) while evals lag (52 percent offline, 37 percent online), which is exactly the gap the loop closes.

3. **Verification of a single action, distinct from evaluation across cases.** Blurred inside v1's 3.4. Anthropic's agent loop is "gather context, take action, verify work, repeat" (Sept 2025). Evaluation estimates a rate over many cases; verification decides one case before it takes effect. Verifiers in order of trust: deterministic checks and tests, external evidence and end state, approval gates, model judges as evidence rather than proof. Jason Wei's "asymmetry of verification" (July 2025) is the design rule: build tasks and tools so that checking is cheaper than doing. Anthropic's long-running-agent work found agents "declare the job done" without end-to-end checks, and that separating the agent doing the work from the agent judging it "proves to be a strong lever."

4. **Durable state and resumability.** Absent from v1's 3.3. Anthropic Managed Agents (stateless harness, durable append-only session log, disposable sandboxes), Temporal, Inngest, Restate, and 12-Factor Agents factors 5, 6, and 12 all describe the same pattern: journal every side effect before it runs, make steps idempotent with keys so a retry cannot act twice, pair consequential steps with compensating actions, model human approval as a durable wait with a timeout. This is the difference between a demo loop and a production agent.

5. **Agent identity and delegated authorization.** One word ("authorization") in v1's 3.5. Google (Nov 2025): agents are "a new principal class distinct from users and service accounts." MCP hardened its OAuth profile in 2025 and 2026; three IETF drafts and a NIST initiative appeared in 2026; yet 45.6 percent of organizations still use shared API keys for agent-to-agent auth (Gravitee, Feb 2026, vendor survey). OWASP's Agentic Top 10 lists identity and privilege abuse as ASI03.

6. **Sandboxing and execution isolation.** Absent. Claude Code's sandbox (filesystem confinement plus a network egress allowlist, cutting permission prompts 84 percent), Anthropic's brain-versus-hands split with credentials that never enter the sandbox, OpenAI's sandboxed app-server. Replit's July 2025 production-database deletion and Google Antigravity's December 2025 drive wipe are what the absence looks like.

7. **Interaction design for partial autonomy.** Absent. Karpathy's autonomy slider and fast generation-verification loop (June 2025); Huyen's "good applications demand good interfaces"; a Design Engineering track at both the 2025 and 2026 AI Engineer World's Fairs. Approval gates must carry the action, the reasoning, and the impact, because Microsoft's red team found human-in-the-loop bypass "the most consistently exploited failure mode" (June 2026). EU AI Act Article 50 requires disclosure for any agent that interacts with people from 2026-08-02.

8. **Reliability across repeated runs as an eval dimension.** Absent. pass@k (at least one of k trials succeeds) versus pass^k (all k succeed). A 75 percent per-trial agent passes three consecutive trials 42 percent of the time (Anthropic, Jan 2026). Princeton's reliability study (June 2026): "reliability gains lag behind accuracy improvements" over 24 months of model releases.

9. **The multi-agent rule.** Absent; one line suffices. Cognition (Apr 2026): "writes stay single-threaded and the additional agents contribute intelligence rather than actions." Anthropic's multi-agent research system beat a single agent by 90.2 percent at about 15x the tokens of a chat, and Anthropic warns it underperforms where agents must share context, "such as most coding tasks."

10. **Governance, engineer-scoped.** Absent; one breath suffices. Article 50 disclosure from 2026-08-02; high-risk logging, oversight, and six-month log retention deferred to 2027-12-02 by the Digital Omnibus. NIST AI RMF and ISO 42001 are voluntary and organizational: vocabulary for the risk register, not build specs.

11. **Fine-tuning as the boundary with ML engineering.** One line. 57 percent of surveyed teams do not fine-tune (LangChain). swyx's "agent labs thesis" (Apr 2026): start on frontier models, specialize to a domain, train only when you have the workload and the data.

**Mis-weightings in v1.**
- 3.1 should lead with the token budget ("find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome," Anthropic) and with provenance and freshness. Amazon's March 2026 retail outage traced to an engineer acting on advice an agent inferred from an outdated internal wiki.
- 3.2 should say that MCP is how tools ship, and that action tiers are enforced by a policy layer outside the model.
- 3.3 should be framed around the loop and the harness, absorbing durable state, sandboxing, routing, and budgets. That matches how Anthropic and OpenAI use the word "harness" in 2026.
- 3.4 should say the evaluator must not share the generator's context, and that graders, judges, and fixtures are production code that drift.
- 3.5 splits naturally into security (injection, identity, sandbox, supply chain) and operations (observability, incident response, rollback, model upgrades).

**What v1 gets right.** RAG demoted to one technique (the field now calls it infrastructure). Tools as contracts. Read-only, reversible, and consequential tiers. Evals as the primary instrument. Continued evaluation after deployment. And the central thesis sits inside the field's consensus: it is swyx's categories one and two (software engineers enhanced by AI versus software engineers building AI products), and Huyen's definition (building on foundation models developed by others).

---

## 2. Ten findings that shape the talk

1. **The thesis is the consensus.** swyx (2023, restated July 2025) separates engineers enhanced by AI from engineers building AI products. Huyen (2025): AI engineering builds on models "typically developed by research labs and made available as a service," with "less modeling and training, and more model adaptation," more pressure on inference efficiency, and evaluation as "a much bigger problem." "When it comes to shipping AI products, you want engineers, not researchers" (swyx).

2. **The center of gravity moved from the model to the system around it.** "The model alone is no longer the product" (swyx, World's Fair keynote, June 2026). "Agent = Model + Harness. If you're not the model, you're the harness" (Addy Osmani, Apr 2026). OpenAI (Aug 2026): "the most valuable reusable asset inside Codex is not the chat interface. It is the harness."

3. **The unifying primitive is the loop.** Anthropic: gather context, take action, verify work, repeat. Google: an agent "uses the LM in a loop to accomplish a goal." OpenAI: "the reusable part is the agent loop." The 2026 World's Fair opened with swyx's "Loopcraft: The Art of Stacking Loops."

4. **Canonical design guidance has converged.** Start with a workflow; add autonomy only when it demonstrably improves outcomes; own prompts, context, and control flow; invest in tool interfaces with the care of a UI; treat context as a budget. Anthropic, OpenAI, Google, Cognition, LangChain, and 12-Factor Agents agree on the fundamentals and disagree only on multi-agent topology and how much control flow lives in code.

5. **Evals are the hardest new skill, named by every source.** "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have" (Ross McNairn, Wordsmith, via Pragmatic Engineer, Mar 2025). "Evaluation is the new CI" (Jeff Boudier, Nov 2025). Real 2026 postings from OpenAI and Anthropic require "evaluation frameworks" and "agent development," not agent use.

6. **Prompt injection is unsolved and probably unsolvable; defenses are architectural.** OpenAI (Dec 2025): "unlikely to ever be fully 'solved.'" UK NCSC agrees. Willison's lethal trifecta (private data, untrusted content, external communication). Meta's Rule of Two: no more than two of the three without human approval. Guardrail classifiers show "up to 100% evasion" in academic tests (Hackett et al., 2025) while Anthropic's heavily invested classifiers hold up; architecture is the cheaper first line for most teams.

7. **Adoption is high, value is flat, rollback is common.** 57.3 percent have agents in production (LangChain, Dec 2025, n=1,340). 62 percent are experimenting but only 37 percent see any EBIT impact, flat year over year (McKinsey, Aug 2026, via secondary coverage). Gartner (June 2025): "over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls." Klarna's May 2025 reversal is the cleanest failure story: "Cost unfortunately seems to have been a too predominant evaluation factor."

8. **The incident record is teachable.** Replit (July 2025): an agent deleted a production database during a declared code freeze; the fix was three controls, not a better prompt. EchoLeak (June 2025): zero-click exfiltration from Microsoft 365 Copilot via a crafted email. ForcedLeak (Sept 2025): injection through a Salesforce web form, exfiltration through an expired allowlisted domain bought for five dollars. OpenClaw (Jan to Feb 2026): tens of thousands of exposed personal agents and hundreds of malicious marketplace skills. LiteLLM (Mar 2026): a credential stealer on PyPI for about 40 minutes in a gateway with about 95 million monthly downloads. Amazon (Mar 2026): an outage from advice inferred from a stale wiki.

9. **Skillful use of coding agents is assumed, not distinguishing.** Karpathy's "agentic engineering" (Feb 2026) describes the AI-enabled software engineer: "you are orchestrating agents who do and acting as oversight." Willison (May 2026) admits he no longer reviews every line, even for production. JetBrains (Aug 2026, n=15,000+): 90 percent of professional developers use coding agents at least weekly. The talk's distinction must rest on the deliverable, a system whose runtime behavior depends on a model, not on the tools used to write it.

10. **The coding agent is the bridge to the audience.** Every attendee has touched a harness from the user side. The instructions file is context engineering. The permission prompt is an action tier. The sandbox is execution isolation. Subagents follow the single-writer rule. The deprecation email is model lifecycle. The enterprise agent is the same machine with someone else's data, someone else's credentials, and a compliance officer. Track A found no widely cited talk structured as a software-engineer-to-AI-engineer transition; the pieces that landed used a running example (Karpathy's MenuGen) or real team case studies (Pragmatic Engineer).

---

## 3. The vocabulary of 2026, with attribution

- **AI engineer.** Builds products and systems on foundation models made by others, on the application side of the "API line" (swyx, 2023). LinkedIn (2026): "building and running AI products, including AI agents and LLMs, and integrating them into a business's workflow."
- **Workflow versus agent.** Workflows are "systems where LLMs and tools are orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage" (Anthropic, Dec 2024).
- **Context engineering.** "The set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference" (Anthropic, Sept 2025). Coined by Cognition and popularized by Lütke and Karpathy in June 2025. Prompt engineering is a subset.
- **Harness.** "The layer between your application and the model" that must "understand a task, maintain context over time, inspect relevant information, call tools, expose progress, handle failures, request human approval when necessary, and return a useful result" (OpenAI, Aug 2026). Böckeler (martinfowler.com, Apr 2026): guides steer before the agent acts, sensors observe after. Note the trap: "harness engineering" also names the practice of configuring coding agents (OpenAI's Feb 2026 post, Böckeler's essay). Same words, different targets.
- **Agentic engineering.** How professionals build software with coding agents while keeping accountability for quality (Karpathy, Willison, 2026). This is the AI-enabled software engineer, not the AI engineer.
- **Tool.** "A new kind of software which reflects a contract between deterministic systems and non-deterministic agents" (Anthropic, Sept 2025).
- **Eval.** "A test for an AI system: give an AI an input, then apply grading logic to its output to measure success" (Anthropic, Jan 2026).
- **Trajectory.** "The complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions" (Anthropic, Jan 2026).
- **Error analysis.** "The systematic process of reviewing traces, noting problems, categorizing errors, and counting them" (Husain and Shankar, 2025).
- **pass@k versus pass^k.** At least one of k trials succeeds, versus all k succeed (Sierra, 2024; Anthropic, 2026).
- **Lethal trifecta.** Private data access, exposure to untrusted content, and a way to communicate externally (Willison, June 2025).
- **Agent Ops.** DevOps plus MLOps plus "tool management, orchestration, memory, and task decomposition" (Google, Feb 2025).
- **MCP.** Model Context Protocol: agent-to-tool. Donated to the Linux Foundation's Agentic AI Foundation on 2025-12-09. **A2A**: agent-to-agent, relevant only across organizational or vendor boundaries. **Agent Skills**: a folder with a `SKILL.md`, loaded by progressive disclosure; procedural memory as version-controlled files. **AGENTS.md**: the repo-level instruction file, in 60,000+ projects.

---

## 4. Evidence hygiene for slides

**Safe to cite (primary source reachable, methodology stated).**

| Claim | Source and date |
|---|---|
| 75 percent per-trial success gives 42 percent for three consecutive passes | Anthropic, "Demystifying evals for AI agents," 2026-01-09 |
| Start evals with 20 to 50 tasks from real failures | Anthropic, 2026-01-09 |
| 60 to 80 percent of development time on error analysis and evaluation | Husain and Shankar, Evals FAQ, 2025-05-28 (updated 2026-09-01) |
| 89 percent observability, 52.4 percent offline evals, 37.3 percent online evals; quality the top barrier at about 33 percent; 57.3 percent with agents in production; 75 percent+ multi-model; 57 percent do not fine-tune | LangChain State of Agent Engineering, Dec 2025, n=1,340 |
| Multi-agent research +90.2 percent over single agent at about 15x chat tokens | Anthropic, 2025-06-13 |
| Sandboxing cut permission prompts 84 percent | Anthropic, 2025-10-20 |
| Over 40 percent of agentic AI projects canceled by end of 2027 | Gartner press release, 2025-06-25 (poll of 3,412 webinar attendees) |
| MCP donated to Linux Foundation AAIF 2025-12-09; 2026-07-28 spec stateless with hardened OAuth | MCP blog and spec |
| OpenAI deprecation cadence: six months GA; GPT-4-era retirement 2026-07-23; Evals platform and Agent Builder shutdown 2026-11-30 | OpenAI deprecations page |
| AI engineer the number one fastest-growing US job for the second year | LinkedIn Jobs on the Rise, 2026-01-07 |
| AI pay premium 6.2 percent entry, 11.9 percent engineer, 14.2 percent senior, 18.7 percent staff | Levels.fyi, 2025-07-17 |
| 84 percent of developers use or plan to use AI tools; 33 percent trust output; 66 percent cite "almost right" | Stack Overflow Developer Survey 2025, 49,000+ respondents |
| 90 percent of professional developers use coding agents weekly, 68 percent daily | JetBrains Developer Ecosystem 2026, Aug 2026, n=15,000+ |
| Cached input at 0.1x base price at Anthropic and OpenAI; batch APIs 50 percent off | Provider pricing pages, Sept 2026 |
| EU AI Act Article 50 disclosure from 2026-08-02; Annex III high-risk deferred to 2027-12-02 | Regulation 2024/1689 and the Digital Omnibus (June to July 2026) |

**Cite with a caveat.**

| Claim | Caveat |
|---|---|
| 62 percent experimenting with agents, 37 percent EBIT impact, about 6 percent high performers | McKinsey State of AI, Aug 2026; primary page timed out, figures from secondary coverage |
| 45.6 percent use shared API keys for agent auth; 88 percent had agent security incidents | Gravitee, Feb 2026; vendor survey, n=900+ |
| 74 percent rolled back or shut down a live customer agent | Sinch, May 2026; vendor-commissioned, n=2,527 |
| AI-generated code 27.6 percent of merged PRs; about 48 percent explicitly reviewed | Greptile and Sonar at World's Fair 2026, via a recap; secondary |
| 59.4 percent of audited SWE-bench Verified hard-task failures were test flaws | OpenAI, Feb 2026, via secondary summary |
| Salesforce support headcount 9,000 to 5,000; Agentforce ARR $800M | Benioff interview Sept 2025; Salesforce investor release Feb 2026; vendor figures |

**Do not put on a slide.**

- MIT NANDA's "95 percent of pilots fail." Non-random sample of about 300 disclosed projects, measures "no measurable P&L impact," largely reflects missing baselines, not peer reviewed, produced by a lab with a stake in the result. If asked, say "most pilots never get measured."
- LinkedIn's "143 percent" growth figure. Appears only in secondary coverage.
- Stanford HAI's "10,854 percent" agentic postings surge. Not found on HAI pages.
- Any single developer-productivity number. METR's July 2025 RCT found experienced developers 19 percent slower while believing they were 20 percent faster; METR's Feb 2026 follow-up has confidence intervals spanning zero and METR calls it "very weak evidence."
- Mike Krieger's "models go obsolete every 40 to 90 days." Recap page unreachable; present as reported if at all.
- The New Stack's "800 percent" rise in FDE postings. Unverified against the article.

---

## 5. Controversies to acknowledge rather than hide

1. **Big model versus big harness.** Boris Cherny: Claude Code is "the thinnest possible wrapper over the model." Noam Brown: "those scaffolds will also just be replaced by the reasoning models." Against: Osmani, "a decent model with a great harness beats a great model with a bad harness." Anthropic's mature position (Mar 2026): "every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing." For the talk: harness components are hypotheses about model limits, with expiry dates; the loop and the evals outlast them.
2. **Evals first or errors first.** OpenAI, Vercel, and Eugene Yan advocate eval-driven development; Husain and Shankar say "write evaluators for errors you discover, not errors you imagine." The reconciliation: a few success criteria up front, the eval set grown from observed failures.
3. **Outcome grading versus trajectory grading.** Outcomes are the score; trajectories are the diagnosis; safety-relevant actions must be graded in the trajectory.
4. **Multi-agent.** Resolved in practice as single writer, stateless helpers, read-heavy parallelism. SDK marketing still sells swarms.
5. **Frameworks.** Anthropic, Cognition, and 12-Factor say own the loop; OpenAI's and Google's guidance is SDK-shaped; OpenAI deprecated its own Agent Builder eight months after launch. Practitioner accounts (Horthy's roughly 100 interviews, Sentry) describe abandoning frameworks for custom pipelines. For beginners: primitives first, then a framework you can read.
6. **Compaction versus reset.** Anthropic found compaction insufficient for long tasks and moved to file-based hand-offs and fresh sessions; most SDKs still default to compaction.
7. **Guardrail classifiers.** Academic evasion studies say classifiers alone fail; Anthropic's production results show a well-resourced classifier program works. Both are true; architecture is the cheaper first line.
8. **Does the title last?** Folds back: Huyen's "just software engineering with AI models thrown in the stack," Cherny's prediction that "software engineer" itself gives way to "builder." Stays distinct: two years at number one on LinkedIn, specialized titles proliferating (evals engineer, agent engineer, forward deployed engineer), and the 2026 World's Fair needing nine agent-related tracks where one sufficed in 2023. The honest answer: distinct for now, converging over time, which is also the talk's thesis.
9. **Productivity.** Perception and measurement diverge; the measurement is not settled.

---

## 6. The transition

**What transfers.** Nearly everything: systems design, API and integration work, testing discipline, observability, security, product sense, domain knowledge. Huyen: "AI engineering is just software engineering with AI models thrown in the stack." One practitioner estimates 20 percent of the role is AI-specific. Pragmatic Engineer's seven case studies (Mar 2025) found the skills that mattered were self-directed learning, decomposition, domain expertise to judge outputs, and "traditional software engineering principles."

**What must be added**, mapped to the six areas of outline v2: model intuition and lifecycle; context engineering; tool design and action tiers; harness and loop control, including the workflow-versus-agent judgment and durable state; error analysis and evals; security and operations for probabilistic systems. Every source names evals as the hardest.

**Common first mistakes**, each sourced in track D: building an agent when a workflow would do; shipping without evals and then "prompt and pray"; frameworks before primitives; generic metrics instead of reading traces; shipping unread output ("spells disaster within months," Horthy); treating the demo as done; ignoring cost and latency; abandoning too early without diagnosing where failures occur.

**Build first.** One narrow, real agent for a task the engineer already understands; 20 to 50 eval cases from real examples before tuning the first prompt; direct API calls before a framework; single agent before multi-agent; a trace viewer from day one; add autonomy one tier at a time. First-person accounts put the transition at months, not years, when the first project is small and real (two months for one feature at DSI; a year of workflow change for Khurram).

**Resources practitioners actually recommend.** Chip Huyen, *AI Engineering* (O'Reilly, Jan 2025). Anthropic's "Building Effective Agents," "Effective context engineering for AI agents," and "Demystifying evals for AI agents." OpenAI's "A Practical Guide to Building Agents." Dex Horthy's "12-Factor Agents." Husain and Shankar's evals course and their book *Evals for AI Engineers* (O'Reilly, due 2026-10-31). Google and Kaggle's five-day AI Agents Intensive (free; 1.5 million learners in its first run). Hugging Face's Agents course (free). Anthropic Academy and OpenAI Academy developer tracks (free). Latent Space and The Pragmatic Engineer for staying current. Karpathy's Zero to Hero for model intuition, after shipping something rather than before.

**Market reality.** AI engineer is LinkedIn's fastest-growing US role for the second year, with software engineer the most common prior role. Indeed Hiring Lab (July 2026): US software development postings rose about 15 percent since February 2025 while all postings fell 7 percent, with 71 percent of the increase in senior roles and 37 percent carrying AI in the title. The premium outside frontier labs is modest (6 to 19 percent by level). Postings want evidence of shipped production LLM work; the door for juniors exists but is narrow and portfolio-gated.

---

## 7. Q&A preparation

| Likely question | Sourced answer |
|---|---|
| Isn't this just software engineering? | Yes at the foundation, and no at the failure modes. Thoughtworks Radar (Apr 2026): retain principles, relinquish patterns. The new layer is statistical testing of probabilistic behavior, per-action verification, and a loop from production back to the test set. |
| Won't better models make the harness obsolete? | Parts of it, on purpose. Anthropic deletes harness components as models improve and says every component "encodes an assumption about what the model can't do." The loop, the evals, the action tiers, and the identity model do not expire. |
| Is the AI engineer title going away? | Two credible sides. Distinct for now (two years at number one, nine conference tracks), converging over time (Huyen, Cherny). Either way the skills are required by the postings. |
| Which framework should I learn? | Primitives first: direct API calls, your own loop, your own prompts and context. Then a framework you can read. Anthropic, Cognition, and 12-Factor all say own the loop; OpenAI deprecated its own Agent Builder eight months after launch. |
| Is MCP secure? | The protocol is not the boundary; your implementation is. Microsoft counted 99 MCP-related CVEs in 2025. Resource indicators, short-lived scoped tokens, and least privilege are your job. |
| Should we build multi-agent? | Only for read-heavy, parallelizable work, with a single writer. Expect about 15x the tokens. Most coding and transactional tasks do not qualify. |
| Which model? | Baseline with the most capable, downgrade with evals, plan a migration every six to twelve months, never change model and prompt in the same commit. |
| Do I need math or ML? | Not to start. "One can be quite successful in this role without ever training anything" (Karpathy via swyx). Model intuition comes from shipping and reading traces; deeper ML later if the work demands it. |
| Do we need a durable-execution product? | You need the pattern: journaled idempotent steps, compensating actions, durable human waits. The product is optional. |
| What does the EU AI Act require of us? | Disclosure now for any agent that talks to people. Logging, oversight, and six-month retention if the system is high-risk, from December 2027. |
| Is the 95 percent failure number real? | No. Non-random sample, "no measurable P&L impact" mostly means no baseline, not peer reviewed. Use Gartner's 40 percent cancellation forecast and McKinsey's flat 37 percent EBIT figure instead. |
| Does AI make me faster? Worse? | Contested. METR found experienced developers slower while believing they were faster, then called its own follow-up "very weak evidence." Skill erosion is self-reported on both sides. |
| How long does the transition take? | Months, not years, when the first project is small and real. |
| Is the market saturated? | Not for engineers who have shipped production LLM work. Narrow for juniors. Postings want evals and agent development, not agent use. |
| How do we handle prompt injection? | Assume it succeeds. Keep the lethal trifecta from assembling: if the agent has private data and reads untrusted content, it must not be able to take consequential actions or communicate out without a deterministic gate. |
| What about fine-tuning? | Later, if ever. 57 percent of teams do not. Start on frontier models, specialize with context and tools, train only with workload and data. |
