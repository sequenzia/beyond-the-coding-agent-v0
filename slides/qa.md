# Q&A: the first investigation you would build

**Time:** 20:00 after 29:00 planned content and 1:00 contingency. Keep slide 20's three starting resources visible. These are prepared stage answers, not additional slides or part of the 3,317-word script.

**Goal:** Help attendees explain what to build first, when autonomy helps, where permissions are enforced, and how to evaluate the result.

**Suggested pacing:** 0:00–2:00 collect questions and revisit either silent reflection if useful. 2:00–14:00 answer the highest-interest questions. 14:00–18:00 apply the first-project milestones to an attendee's approved document task. 18:00–20:00 final questions and resource pointer. This is a flexible facilitation budget, not twenty minutes of additional prepared speech.

## Core stage answers

| Question | First-person stage answer | Evidence / qualification |
|---|---|---|
| What should I build first? | I would answer a bounded question from one approved document, with supporting passages and an honest unknown. Then I would add fixed retrieval and check permissions. The handout gives completion checks for each milestone. | Handout first-project guide; synthesis §8 R4/R6 |
| When do I need an agent? | I add a loop when the next useful step depends on evidence just found. Here, cleared tooling changes the next query to validation. Multiple documents alone do not require an agent. I compare that loop with fixed retrieval before keeping it. | Dossier §4; R6 |
| Why does slide 3 show the answer before the investigation? | I preview one bounded question from a supplied pilot report so we can see the smallest useful version. Slide 5 restarts the broader launch question with retrieval. It is not a claim that the agent forgot a document it had already read in that run. | Dossier §4 preview/trace distinction |
| Why not just take the latest document? | I check what the document establishes, which configuration it describes, and whether it closes the earlier dependency. A newer unrelated record does not resolve a contradiction. If the records conflict without a resolution, I say so. | Dossier D03–D06; synthesis §8 |
| Why not put every document into a large context window? | That may work for a small bounded collection. I would evaluate it as a baseline. I still need access controls, usable extraction, versions, coverage, and support checks. More capacity does not remove those responsibilities. | R7; local engineering judgment |
| Where exactly are permissions enforced? | In the application and retrieval services before any listing, snippet, search result, or content reaches the model. The application supplies identity. A model cannot broaden access through arguments. Caches and derived material follow the same rules. | Dossier §5 contract |
| Does the agent know a procurement appendix exists? | The author-facing pack includes it to illustrate the boundary. The simulated agent does not receive its title, count, content, or existence. Its report describes only the authorized scope. | Dossier §§1–2 |
| Can the agent approve the launch? | No. It summarizes documented dependencies. The records contain no completed validation result for the revised configuration, and the launch decision belongs to the authorized review team. | D01 v1 §3; D05 v1 §§2–3; D06 v1 §3 |
| What makes the recurring-pattern answer credible? | I enumerate the agreed authorized collection, track one row per project, and retain the packaging counterexample. I can describe these reviewed records. I cannot infer a company-wide frequency from them. | D07–D09 v1 §§1–2; R2 |
| Is a citation enough? | I check that it resolves to the right version and that its passage supports the actual claim. Then I check whether important claims lack citations. A source about one launch cannot establish what causes most company delays. | R3; dossier §6 |
| What is the difference between tests, verification, and evals? | Traditional tests check contracts and state. Verification checks this particular claim or action, including its preconditions and postconditions. Evaluation assesses behavior across cases and repeated trials, including meaning and uncertainty. They work together. | Synthesis §8; R4 |
| How many evals do I need before starting? | I define success immediately and start with representative questions and observed failures. I do not make a large dataset a prerequisite. As changes become subtler or the task risk grows, I need better coverage and enough trials to assess them. | R4; no universal minimum |
| Which dimensions should I measure? | I separate retrieval quality, answer quality, citation support, permissions, and completion. I put cost and latency beside them. An aggregate score should not hide a permission failure or a report that never saved. | Handout starter matrix; local rubric |
| Can another model verify the answer? | It can help apply a clear rubric to the claim and evidence. I validate that grader against domain-informed review and inspect disagreements. A second model can share the first model's mistakes. | R4/R3; corrected synthesis §8 |
| What happens when the run cannot finish? | I preserve checked evidence and identify missing coverage or conflicting records. The application can ask for narrower scope, return a qualified partial result, or checkpoint for resume. It rechecks access and versions before continuing. | Dossier §5 |
| Does prompt injection go away with a better prompt? | I treat document text as untrusted and constrain the available actions. In this case, retrieval cannot access procurement and saving cannot choose a public destination. Detection adds a layer, but I still evaluate contamination and unexpected behavior. These controls reduce risk without a guarantee. | X-D03 fixture; R10 |
| Why does reopening a private report need checks? | The summary contains information derived from sources. Private storage alone does not reflect later permission changes. Our application rechecks source access before any report content or preview is served and can block the report. | Dossier §5 application design |
| How does save retry work? | A stable key is bound to the user, run, and draft hash. The same request returns the same receipt after commit. A different draft under that key conflicts. If the outcome is unknown, the agent says unknown until the service resolves it. | Dossier §5; no actual save occurred in the walkthrough |

## Optional technical depth

| Question | Prepared answer | Source / limit |
|---|---|---|
| Do we need MCP? | I can expose the same contracts through ordinary application calls. MCP standardizes a tool integration boundary. It does not validate the business conclusion or supply our complete permission model. Use a supported spec version and validate inputs and results. | R8; no SDK comparison |
| What do structured outputs guarantee? | They constrain the model's response shape under the supported schema contract. They do not make a claim true. The structured search result on slide 7 is produced by the retrieval service, which is a separate concept. | R8; dossier §5 |
| What about A2A and parallel research? | A2A supports communication between agents. Independent local readers do not require that protocol. I would add parallelism only when the work can be separated, reconcile coverage and duplicate evidence, and keep one owner of the report save. | R9; local design choice, no universal topology or cost claim |
| Which model or framework should I choose? | I would compare model candidates on the actual task and look at support, tool use, cost, and latency. I would choose implementation tools whose control flow and failure behavior I can inspect. This talk teaches responsibilities rather than comparing frameworks. | R4/R6; no pricing or current product recommendation |
| How do I trace a bad answer safely? | I start with operational metadata and relevant versions. If I need source content, I use deliberate capture with controlled access, redaction, retention, and deletion. Sensitive content can live separately from trace metadata. Even source IDs may reveal information. | R5; pin the deployed convention version |
| What if a parser drops the word pending? | I test extraction with known passages and preserve source links so I can compare extracted text with the canonical document. A generation failure may originate in ingestion, retrieval, or summarization. | D05 example; R7; local checks |
| What if permissions change during a run? | The service checks access on each read and at save. Resume and reopen revalidate sources before reusing derived material. If access is lost, the application blocks affected context or the whole report rather than trusting an old cache. | Dossier §5 |
| How do I know I can roll back safely? | I retain a known configuration and evaluate model, prompt, retrieval, or tool changes before staged rollout. A rollback should restore behavior while respecting current data permissions. I still investigate the failure and add its regression case. | Local operational design; R4 |
| Do I need to train a model? | This first project builds around an existing foundation model. I would investigate data, context, retrieval, tools, and evaluation before deciding whether training is justified by a specific observed problem. | README scope; no tuning statistic |
| What legal rules apply? | This fictional exercise does not establish the applicability of any legal regime. I would identify the real jurisdiction, data categories, users, and consequences with the responsible specialists, then translate their decisions into access, retention, disclosure, and review requirements. | No legal advice or unverified effective dates in the talk |
| How long does the transition take? | I would judge progress by the milestone checks and evidence of a useful system. This talk does not promise a duration, hiring outcome, or salary change. | Local roadmap; historical market claims omitted |

## Beginner exit check

Use these as optional discussion prompts, not an extra quiz slide:

- What is the smallest useful version of your document task?
- What evidence would make the next search change?
- Which service prevents an unauthorized snippet from reaching the model?
- How will you distinguish a supported answer from a fluent one, and a saved report from a claim that it saved?

A useful answer names supplied document Q&A, evidence-dependent follow-up, retrieval-service authorization, separate quality/support checks, and a durable save receipt. These are intended learning outcomes; audience comprehension has not been measured.

## Numbers not to cite, and what to say instead

These historical claims remain excluded under synthesis §4 and §8. No substitute statistic is required.

| Excluded claim | Say instead |
|---|---|
| “95 percent of pilots fail” | That study does not establish a universal failure rate. Define success and measure your task. |
| “143 percent” job growth or “10,854 percent” agentic-posting growth | The source or definition is insufficiently verified for this talk. Focus on demonstrable project skills. |
| One universal developer-productivity percentage | Productivity findings depend on task, population, and method. Evaluate your own workflow. |
| “40 to 90 days” as a universal model-obsolescence interval | Track the actual supported model lifecycle and evaluate changes against your workload. |
| “800 percent” FDE-posting growth | The number is unverified in the research and is not needed for the roadmap. |
| “About 80 percent” of skills already transfer | Interface, testing, security, and operations skills provide a concrete foundation. |
| A universal multi-agent token multiplier or improvement percentage | Compare parallel investigation with your simpler baseline on quality, cost, and latency. |
| Any invented toaster-oven benefit or agent success rate | The documents and trace are illustrative, and no agent evaluation was executed. |
