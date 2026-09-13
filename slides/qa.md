# Questions and Discussion

**Time:** about 20 minutes | **Outline:** outline-v2.md "Questions and Discussion" | **Sourced answers:** research/synthesis.md §7, with track-report detail where noted

**How to use this file.** One block per anticipated question. *Stage answer* is about twenty seconds, said as written. *If pressed* is the next layer, from the synthesis. *Sources* says where each fact lives. *Do not say* names the number or claim to avoid on that question. The file closes with the list of numbers that must not be cited and what to say instead.

**Opening line.** "Questions about the discipline, the transition, agent reliability, or applying this inside an existing engineering organization. All fair game."

**If the room is quiet.** Offer one of these, in this order: "The one I get most is, isn't this just software engineering?" Then "Which framework?" Then "How do we handle prompt injection?" Each has a stage answer below.

---

## Preface: the vocabulary trap

"Harness engineering" means two things in 2026. Anthropic's posts use it for the system around a production agent, which is how this talk uses it. OpenAI's February 2026 post and Birgitta Böckeler's essay on martinfowler.com use it for configuring a coding agent with instruction files, linters, and tests. The skills overlap, which is the talk's bridge, but the targets differ. Slide 9 names this once. If a question seems to disagree with slide 9, the asker is probably using the other meaning. Say so, then answer.

Sources: outline-v2.md Appendix D; synthesis.md §3 (harness); track-a-discipline.md §4 ("Two meanings of 'harness engineering'").

---

## Isn't this just software engineering?

**Stage answer.** Yes at the foundation, no at the failure modes. The new layer is statistical testing of probabilistic behavior, per-action verification, and a loop from production back to the test set.

**If pressed.** Thoughtworks' Technology Radar, April 2026: "retaining principles, relinquishing patterns." The principles are old; the failure modes are new. Karpathy's model psychology is the reason: jagged, non-deterministic, amnesiac. And the arithmetic: 75 percent per attempt is 42 percent over three attempts. No traditional test suite catches that.

**Sources.** synthesis.md §7; track-a-discipline.md §4 (Thoughtworks Radar vol. 34, April 15, 2026); synthesis.md §4 safe (Anthropic, 2026-01-09).

---

## Won't better models make the harness obsolete?

**Stage answer.** Parts of it, on purpose. Anthropic deletes harness components as models improve. The loop, the evals, the action tiers, and the identity model do not expire.

**If pressed.** Anthropic, March 2026: "Every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing." Both camps exist. Boris Cherny calls Claude Code "the thinnest possible wrapper over the model." Addy Osmani: "A decent model with a great harness beats a great model with a bad harness." Anthropic's practice sits between: build the harness, delete pieces as the model catches up.

**Sources.** synthesis.md §5 item 1 and §7; track-a-discipline.md §3 and §4 (Anthropic, 2026-03-24; Cherny and Osmani via Latent Space, 2026-03-05).

**Do not say.** Mike Krieger's "models go obsolete every 40 to 90 days." The recap page was unreachable; the claim is unverified. If someone raises it: "reported, not verified; OpenAI's six-month notice policy is the number I trust."

---

## Is the AI engineer title going away?

**Stage answer.** Distinct for now, converging over time. Either way, the postings require the skills.

**If pressed.** Two credible sides. Folds back in: Huyen's "just software engineering with AI models thrown in the stack," and Boris Cherny's prediction that "software engineer" itself gives way to "builder" (February 2026, reported secondhand). Stays distinct: two years at number one on LinkedIn's fastest-growing list, specialized titles multiplying (evals engineer, agent engineer, forward deployed engineer), and the 2026 World's Fair needing 29 tracks where one event sufficed in 2023. The honest answer is also the talk's thesis.

**Sources.** synthesis.md §5 item 8 and §7; track-d-transition.md §1 finding 13; track-a-discipline.md §4.

**Do not say.** Cherny's "builder" line as a direct quotation; it is flagged secondary in the research.

---

## Which framework should I learn?

**Stage answer.** Primitives first: direct API calls, your own loop, your own prompts and context. Then a framework you can read. Own the loop.

**If pressed.** Anthropic, Cognition, and 12-Factor Agents all say own the loop. OpenAI deprecated its own Agent Builder eight months after launch: launched October 2025, shutdown November 30, 2026. Dex Horthy interviewed about a hundred engineers with agents in production; most had abandoned popular frameworks for custom pipelines they could read. Frameworks "can also make it tempting to add complexity when a simpler setup would suffice" (Anthropic, December 2024).

**Sources.** synthesis.md §5 item 5 and §7; synthesis.md §4 safe (OpenAI deprecations page); track-d-transition.md §2.3 item 4 (The Pragmatic Engineer, 2026-07-15).

**Do not say.** Any framework by name, for or against. The talk endorses none and the research names several; keep them out of the room.

---

## Is MCP secure?

**Stage answer.** The protocol is not the boundary; your implementation is. Scoped short-lived tokens, resource indicators, and least privilege are your job.

**If pressed.** Microsoft counted 99 CVEs for MCP-related software in 2025. The 2026-07-28 spec requires Protected Resource Metadata on servers and Resource Indicators on clients, and deprecates Dynamic Client Registration. Akamai's Maxim Zavodchik: "Critical security boundaries are now entirely dependent on how developers implement them." If you write a server, the tool-design rules apply. If you configure a client, OAuth resource-server discovery and token scoping are your problem.

**Sources.** synthesis.md §7; track-b-enterprise-agents.md §2.2 (MCP 2026-07-28 spec; Microsoft CVE count; Zavodchik in SecurityWeek, 2026-06-26).

---

## Should we build multi-agent?

**Stage answer.** Only for read-heavy, parallelizable work, with a single writer. Expect about fifteen times the tokens. Most coding and transactional tasks do not qualify.

**If pressed.** Anthropic's multi-agent research system beat a single agent by 90.2 percent at about 15x the tokens of a chat, and token usage explained 80 percent of the variance. Anthropic warns it underperforms where agents must share context, "such as most coding tasks." Cognition, April 2026: setups that work share one property, "writes stay single-threaded and the additional agents contribute intelligence rather than actions." Cognition's review agent finds about two bugs per pull request precisely because it does not share the author's context.

**Sources.** synthesis.md §1 item 9, §4 safe (Anthropic, 2025-06-13), §7; track-b-enterprise-agents.md §2.1 (Cognition, 2026-04-22).

---

## Which model?

**Stage answer.** Baseline with the most capable, downgrade with evals, plan a migration every six to twelve months, and never change the model and the prompt in the same commit.

**If pressed.** OpenAI's rule: "build your agent prototype with the most capable model for every task to establish a performance baseline. From there, try swapping in smaller models." OpenAI gives six months' notice on GA models and retired the GPT-4 era on 2026-07-23. Over 75 percent of surveyed teams run more than one model. Jeff Boudier: "The real engineering leverage is not choosing the right model, it is building systems that can continually measure, test, and swap them."

**Sources.** synthesis.md §1 item 1 and §7; synthesis.md §4 safe (OpenAI deprecations; LangChain, December 2025); track-a-discipline.md §3 (Boudier in InfoWorld, 2025-11-10).

**Do not say.** Any model as the right choice. The answer is a process, not a name.

---

## Do I need math or ML?

**Stage answer.** Not to start. "One can be quite successful in this role without ever training anything." Model intuition comes from shipping and reading traces. Deeper ML later if the work demands it.

**If pressed.** Huyen: "AI models can be used simply by making API calls. This lowers the barrier to entry." Karpathy's Zero to Hero and 3Blue1Brown remain the standard recommendations for model intuition, and every 2025 to 2026 source puts them after shipping something, not before. 57 percent of surveyed teams do not fine-tune at all.

**Sources.** synthesis.md §6 and §7; track-d-transition.md §2.2 (Huyen, Pragmatic Engineer podcast, 2025-02-05) and §2.4; synthesis.md §4 safe (LangChain).

---

## Do we need a durable-execution product?

**Stage answer.** You need the pattern: journaled idempotent steps, compensating actions, durable human waits. The product is optional.

**If pressed.** Temporal, March 2026: "the odds an AI agent experiences some kind of failure increase with each marginal step," and restarts are expensive once you have paid for the tokens. Inngest: "you pay for each LLM call exactly once." 12-Factor Agents says it in three factors: unify execution state and business state, launch and pause and resume with simple APIs, make your agent a stateless reducer. Anthropic's managed-agents session log is the same idea implemented inside the harness.

**Sources.** synthesis.md §1 item 4 and §7; track-b-enterprise-agents.md §2.3 (Temporal, 2026-03-10; Inngest, 2026-02-19; 12-Factor factors 5, 6, 12; Anthropic, 2026-04-08).

**Do not say.** A vendor recommendation. The named products are examples of the pattern, not endorsements.

---

## What does the EU AI Act require of us?

**Stage answer.** Disclosure now for any agent that talks to people. Logging, oversight, and six-month log retention if the system is high-risk, from December 2027.

**If pressed.** Article 50 transparency applies from 2026-08-02: the AI nature must be evident unless obvious, which is a UX requirement on every customer-facing agent. Annex III high-risk obligations were deferred to 2027-12-02 by the Digital Omnibus; high-risk means employment, credit and essential services, education, law enforcement, and similar. Then Article 12 automatic logging, Article 14 human oversight, and deployer log retention of at least six months. A model provider's compliance does not cover your agent. Internal productivity agents, coding agents, and summarizers are mostly outside high-risk scope.

**Sources.** synthesis.md §4 safe (Regulation 2024/1689 and the Digital Omnibus, June to July 2026) and §7; track-b-enterprise-agents.md §2.6.

---

## Is the 95 percent failure number real?

**Stage answer.** No. Non-random sample, "no measurable P&L impact" mostly means no baseline, not peer reviewed. Use Gartner's forecast that over 40 percent of agentic projects will be canceled by the end of 2027, and McKinsey's flat 37 percent EBIT figure, instead.

**If pressed.** MIT NANDA's report reviewed about 300 disclosed projects the lab could access, and the lab researches agent infrastructure. Gartner's figure comes from a January 2025 poll of 3,412 webinar attendees. McKinsey's August 2026 numbers reached the research through secondary coverage because the primary page was unreachable; say so. If you need one line about pilots: "most pilots never get measured."

**Sources.** synthesis.md §4 (do-not-cite list; caveat table) and §7; track-b-enterprise-agents.md §2.5.

**Do not say.** "95 percent of pilots fail."

---

## Does AI make me faster, or worse?

**Stage answer.** Contested. METR found experienced developers slower while believing they were faster, then called its own follow-up "very weak evidence." Do not trust any single number.

**If pressed.** Skill erosion is self-reported on both sides. Sean Goedecke, April 2026: "Using AI means you don't learn as much from your work." Anthropic's June 2026 index found heavy delegators "report learning at equivalent rates." No longitudinal skill measurement exists. Karpathy's line is the useful one: "You can outsource your thinking, but you can't outsource your understanding."

**Sources.** synthesis.md §4 (do-not-cite list), §5 item 9, §7; track-d-transition.md §2.5 and §4 item 2; track-a-discipline.md §3 (Karpathy, 2026-04-30).

**Do not say.** Any single productivity percentage as a fact, including METR's 19 percent.

---

## How long does the transition take?

**Stage answer.** Months, not years, when the first project is small and real.

**If pressed.** Two months for one feature at Data Solutions International: a 25-year veteran with no AI background, after a vendor quoted six to nine months and a stack whose operating cost exceeded the company's infrastructure budget, self-taught and shipped on managed inference plus Postgres. A year of workflow change for Ibtihaaj Khurram. The common thread across first-person accounts: the first project was narrow and real, speed outran confidence, and evals rebuilt it.

**Sources.** synthesis.md §6 and §7; track-d-transition.md §2.5 (Pragmatic Engineer, 2025-03-25; Khurram, 2026-01-18).

---

## Is the market saturated?

**Stage answer.** Not for engineers who have shipped production LLM work. Narrow for juniors. Postings want evals and agent development, not agent use.

**If pressed.** AI engineer is LinkedIn's fastest-growing US role for the second year, with software engineer the most common prior role. Indeed Hiring Lab, July 2026: US software development postings rose about 15 percent since February 2025 while all postings fell 7 percent; 71 percent of the increase was senior roles and 37 percent carried AI in the title. The premium outside frontier labs runs 6.2 percent at entry to 18.7 percent at staff (Levels.fyi, July 2025). Angie Jones at Block says juniors are being hired again on AI portfolios. The door exists and it is portfolio-gated.

**Sources.** synthesis.md §4 safe (LinkedIn, 2026-01-07; Levels.fyi, 2025-07-17), §6, §7; track-d-transition.md §2.1 (Indeed Hiring Lab, 2026-07-08) and §4 item 7.

**Do not say.** LinkedIn's "143 percent" growth figure, Stanford HAI's "10,854 percent" agentic-postings surge, or The New Stack's "800 percent" rise in FDE postings. None is verified against a primary source.

---

## How do we handle prompt injection?

**Stage answer.** Assume it succeeds. Keep the lethal trifecta from assembling: if the agent has private data and reads untrusted content, it must not be able to take a consequential action or communicate out without a deterministic gate.

**If pressed.** Willison: "Once an LLM agent has ingested untrusted input, it must be constrained so that it is impossible for that input to trigger any consequential actions." Meta's Rule of Two: no more than two of untrusted input, sensitive data, and external state change per session without human approval. Classifiers: academic tests reached "up to 100% evasion" against commercial guardrails, while Anthropic's Constitutional Classifiers held through more than 3,000 red-team hours; both are true, and architecture is the cheaper first line for most teams. Two incidents if the room wants texture: EchoLeak, a zero-click email exfiltrating from Microsoft 365 Copilot; ForcedLeak, an injection through a Salesforce web form exfiltrating through an expired allowlisted domain the researchers bought for five dollars.

**Sources.** synthesis.md §2 findings 6 and 8, §5 item 7, §7; track-b-enterprise-agents.md §2.4; track-c-evals-and-operations.md §2.4 (Meta, 2025-10-31) and §2.6 (Hackett et al., 2025; Anthropic classifiers).

---

## What about fine-tuning?

**Stage answer.** Later, if ever. 57 percent of surveyed teams do not. Start on frontier models, specialize with context and tools, and train only when you have the workload and the data.

**If pressed.** swyx's "agent labs thesis," April 2026: start on frontier models, specialize to a domain, train your own once you have workload and data. Huyen names "jumping to complex solutions (vector databases, fine-tuning) without trying simpler approaches" as a first-timer mistake. This is also the boundary with ML engineering from slide 2.

**Sources.** synthesis.md §1 item 11 and §7; synthesis.md §4 safe (LangChain, December 2025); track-d-transition.md §2.3 item 8 and §2.1 (swyx, 2026-04-23).

---

## Numbers not to cite, and what to say instead

From synthesis.md §4. These do not appear on any slide. If one comes up from the floor:

| If someone cites | Say instead |
|---|---|
| MIT's "95 percent of pilots fail" | "Most pilots never get measured." Then Gartner's over-40-percent cancellation forecast and McKinsey's flat 37 percent, with the caveat that McKinsey's figure reached me through secondary coverage. |
| LinkedIn's "143 percent" growth | "Fastest-growing US role for the second year." The percentage appears only in secondary coverage. |
| Stanford HAI's "10,854 percent" surge in agentic postings | Nothing. It was not found on HAI's pages. |
| Any single developer-productivity number | "Contested. METR's own follow-up was 'very weak evidence.'" |
| Krieger's "models go obsolete every 40 to 90 days" | "Reported, not verified. OpenAI's six-month notice policy is the number I trust." |
| The New Stack's "800 percent" rise in FDE postings | "Pragmatic Engineer reports massive demand at Google, OpenAI, and Anthropic." Unverified against the article. |

Figures that may be used only with their caveat spoken aloud: McKinsey's August 2026 numbers (secondary coverage); Gravitee's shared-API-key figure (vendor survey); Sinch's 74 percent rollback figure (vendor-commissioned); Greptile and Sonar's AI-code-review figures (secondary recap); OpenAI's 59.4 percent SWE-bench test-flaw figure (secondary summary); Salesforce's headcount and Agentforce revenue (vendor figures).
