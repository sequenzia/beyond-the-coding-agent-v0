# Beyond the Coding Agent: talk overview

A standalone guide to the revised talk, current as of 2026-09-13. The active outline is [v3](outlines/outline-v3.md). Earlier outlines are historical. The attendee description in README.md remains verbatim.

## The talk in one page

**Thesis:** Using AI makes you an AI-enabled software engineer. Engineering systems whose behavior depends on AI makes you an AI engineer.

**Audience and outcome:** Software engineers, mixed but leaning beginner. Most have used a coding agent; fewer have called a model API or shipped an AI-dependent system. The intended takeaway is: “I understand the engineering responsibilities, and I know what to build first.”

**Format:** 50 minutes: 29:00 planned content, 1:00 contingency, 20:00 Q&A. Twenty scenes across five section files. Illustrated fictional documents, not a live demo or working-agent implementation.

**Brand:** Dark #14161c on every slide, warm off-white text, Helvetica, pink #f948be as the hero accent. Flat shapes, no gradients or shadows, no logo or conference theme line. Assertion headlines with visual evidence. Most slides stay near 25–40 essential words. The map appears only when the audience has experienced its responsibilities.

## The investigation

The full request is: “What is blocking the toaster-oven launch? What recurring problems should we learn from earlier launches? Save a report with the supporting evidence.” Reveal the immediate question first, recurring problems on slide 11, and saving on slide 15.

The product is a standard consumer countertop toaster oven, project TO-26. The canonical [dossier](research/toaster-oven-dossier.md) contains ten fictional documents. The launch-team requester can enumerate nine: six current-project records and three earlier-project retrospectives. The procurement appendix is invisible to this identity, including its title and count. This is author knowledge used to illustrate the boundary.

A supplied pilot report on slide 3 answers a small question. Restart the broader request on slide 5. The September 2 supplier update D02 v1 §1 says tooling is the current blocker. Its date and promised follow-up motivate a later-status search. D03 v1 §1, September 9, clears tooling. The model then changes its search to remaining readiness dependencies. D04 v2 §2, September 10, requires repeat validation for the revised heating-element configuration. D05 v1 §2, September 11, says validation is pending. D06 v1 §§1–3, September 12, corroborates that dependency without supplying an independent test result.

For recurring problems, enumerate the agreed retrospective collection. D07 and D08 describe late changes and repeat validation in distinct projects. D09 records a packaging delay after validation completed. Deduplicate repeated passages by source and project. Coverage describes this selected collection, not company-wide frequency. Missing records remain missing.

The report states the current documented blocker, the cleared earlier blocker, the bounded recurring pattern, other causes, versions and citations, investigation scope, and unresolved questions. It does not certify readiness or authorize launch. The complete report is in [the handout](handout.md).

## Application contract

The four tools are **list documents**, **search documents**, **read document**, **save report**. Identity and mandatory access filters come from the application, never model arguments. Authorization precedes every listing, snippet, result, and read. Caches, summaries, working notes, and report previews preserve source restrictions.

Adaptive investigation means choosing the next step based on evidence. Multiple documents alone do not require an agent. The harness validates calls and results, preserves evidence and coverage, enforces execution budgets, checkpoints progress, and supports interruption and resume. Resume rechecks permissions and versions. Insufficient or contradictory evidence leads to clarification or qualified partial findings.

Saving is the sole persistent business action. The application supplies a private destination, rechecks access and lineage, and commits idempotently using a key bound to user, run, and draft hash. Unknown save outcomes remain unknown until a verified receipt resolves them. Reopening rechecks source access before serving any report content or preview. Changed source permissions can block the whole report. No source edits, permission changes, email, or public sharing are available.

The separate [injection fixture](research/toaster-oven-injection-variant.md) attempts to redirect the report publicly. It never enters the canonical pack. Instruction/data separation, constrained capabilities, authorization, and validation reduce risk without promising complete prevention.

## Scene schedule and first cuts

| Slide | Main message | Time | First cut |
|---|---|---|---|
| 1 | Your user needs an answer they can act on. | 1:00 | Keep the opening. No planned cut. Saves 0 seconds. |
| 2 | You already use an agent. Now you own one. | 0:45 | Drop the last sentence if needed. Saves 5 seconds. |
| 3 | One document can answer one bounded question. | 1:00 | Shorten the completion-date example to one sentence. Saves 8 seconds. |
| 4 | Retrieval supplies evidence for the question. | 1:15 | Drop the indexing choices paragraph. Saves 15 seconds. |
| 5 | The first relevant document can tell an outdated story. | 1:30 | Shorten reflection from 12 to 6 seconds, still reveal both records. Saves 6 seconds. |
| 6 | An agent chooses the next investigation step. | 1:30 | Drop the coding-agent comparison sentence and shorten loop build. Saves 10 seconds. |
| 7 | A tool contract makes investigation dependable. | 1:15 | Drop the MCP wire-format sentence and schema example. Saves 10 seconds. |
| 8 | Context must preserve the evidence that matters. | 1:45 | Drop the extraction examples after negation and the final coding-agent bridge. Saves 15 seconds. |
| 9 | The retrieval service enforces what this user can see. | 1:45 | Drop the final bridge paragraph. Keep all retrieval paths and cache rule. Saves 12 seconds. |
| 10 | A document can contain instructions you must not follow. | 1:15 | Drop the source-integrity pause sentence and shorten diagram build. Saves 8 seconds. |
| 11 | A pattern claim needs coverage of the collection. | 2:00 | Reduce reflection by 6 seconds and drop the larger-collection paragraph. Saves 15 seconds. |
| 12 | Check what each claim actually establishes. | 1:45 | Drop the linked-record example. Keep the overclaim correction and verification distinction. Saves 10 seconds. |
| 13 | One failed answer becomes a reusable evaluation. | 2:30 | Drop the model-grader disagreement example and shorten the failure list aloud. Saves 20 seconds. |
| 14 | The investigation needs a stopping rule. | 1:30 | Drop optional parallel reading paragraph. Saves 15 seconds. |
| 15 | Saving a report creates another controlled boundary. | 1:15 | Shorten the opening report recap. Preserve save, retry, and reopen behavior. Saves 8 seconds. |
| 16 | Operate the answer quality as well as the service. | 1:30 | Drop detailed rollout wording and shorten the model comparison. Saves 12 seconds. |
| 17 | These are the responsibilities of AI engineering. | 0:45 | Keep the map. Shorten A2A to one sentence. Saves 5 seconds. |
| 18 | Your engineering skills give you a starting point. | 1:15 | Drop one spoken pairing already visible in the table. Saves 8 seconds. |
| 19 | Build the smallest useful version first. | 2:15 | Drop the empty-result example and the final dataset sentence. Keep all milestones and checks. Saves 12 seconds. |
| 20 | Build one answer you can stand behind. | 1:15 | Keep the closing and resources. No planned cut. Saves 0 seconds. |

## Delivery model

Scripts total 3,317 spoken words, or 22:07 at 150 words/minute. Another 6:53 covers builds, pointing, and reflection. Each slide file lists its allocation. Slides 5 and 11 each include a 12-second silent/chat prompt. Calculated timing is not a claim that the speaker has rehearsed it live. Protect the evidence reveal, saved report, and four-milestone roadmap. Cut optional parallelism and protocol detail first. Contingency remains a separate minute.

## The discipline map and scope

The map is synthesized on slide 17: model at center, context/retrieval/tools in the loop, harness/orchestration plus evaluation/verification/security around it, and operations outside. Guardrails guide and constrain behavior; service authorization enforces access. Operations includes answer quality, cost, latency, lifecycle, and rollback. MCP enters as a tool contract standard on slide 7. A2A is optional communication with another agent on slide 17. OpenTelemetry enters through the trace on slide 16. No framework comparison is needed.

| Advertised responsibility | Explicit teaching moment |
|---|---|
| AI engineering and foundation models | 2: owning a product whose runtime behavior depends on AI |
| RAG and model-powered workflows | 3–4: supplied evidence, then fixed retrieval |
| Goals, context, tools, next actions | 5–8: dated evidence changes the next search |
| Context engineering and retrieval | 4, 8, 11: ingestion, versions, evidence ledger, coverage |
| Agent tools and extensibility | 7: four contracts, tool calling, structured outputs, MCP |
| Harness design and orchestration | 6, 14: model proposal, application control, checkpoints, budgets |
| Evaluations and verification | 12–13, 15: claim support, per-action checks, regression cases, durable receipt |
| Observability | 16: trace diagnoses missing retrieval evidence |
| Guardrails and security | 9–10, 15: authorization before disclosure, injection layers, derived access |
| Cost and latency | 13–14, 16, 19: measured alongside quality, bounded execution, adoption gate |
| Prototype versus production readiness | 13, 16: one success versus repeated trials and ongoing operations |
| Tests necessary but insufficient | 13: deterministic tests plus semantic rubrics and repeated trials |
| Evaluation after deployment | 13, 16: sampled failures feed regression checks |
| Existing skills, new competencies, learning roadmap | 18–20: pairings, four milestones, three starting resources |

## Evaluating this product

Keep retrieval quality, answer quality, citation support, permissions, and completion separate. Record cost and latency alongside them. Traditional tests check contracts, pagination, access, and persistence. Rubrics and reviewed semantic grading check supported meaning and uncertainty. Repeat trials instead of equating one good answer with dependable behavior. Production feedback and investigated failures expand the regression suite.

Required cases: outdated evidence, unresolved contradictions, unsupported claims, incomplete coverage, duplicate evidence, unauthorized retrieval, injection, interruption/resume, and save retry after an unknown outcome. These are expected scenarios in the guide, not executed agent tests.

Traces should diagnose failures without blanket content logging. Capture operational metadata deliberately. Any sensitive content capture requires appropriate access, redaction, retention, and deletion, with separately governed content storage where suitable. Check the deployed OpenTelemetry convention version.

## Transition roadmap

| Milestone | Deliverable | Completion check |
|---|---|---|
| Bounded document Q&A | Answer from a supplied document | Correct support and appropriate handling of unanswerable questions |
| Fixed retrieval | Search and grounded answer | Relevant evidence, enforced permissions, traceable source versions |
| Adaptive investigation | Bounded evidence-dependent loop | Difficult-case improvement justifies added cost and latency |
| Controlled saved reports | Persisted private report with provenance | Save, retry, reopen, and changed permissions work as intended |

Existing interface, testing, security, and operations skills provide the foundation. Add context management, semantic evaluation, source support checks, and control of model-proposed actions. Begin with an approved collection in a familiar domain. Define success early and grow a small suite from representative cases and observed failures.

## Resources, Q&A, and status

The close has only three starting resources: Building Effective Agents, Demystifying Evals for AI Agents, and the talk's [first-project guide](handout.md#first-project-guide). The handout carries the broader bibliography, report, map, and checklist. [Q&A preparation](slides/qa.md) has concise stage answers and optional depth for the remaining 20 minutes.

[Research synthesis §8](research/synthesis.md#8-revision-evidence-and-qualifications) governs this revision's claims. Earlier statistics and caveats remain research history; none supplies a new measured claim for the toaster-oven case. CAVEAT, SECONDARY, and NOT IN SYNTHESIS flags must follow any reused historical evidence.

Content is revised in Markdown. The speaker confirmed the opening and stale-tooling reveal during implementation. Local layout proofing and calculated rehearsal results are recorded in [revision validation](research/revision-validation.md). A live speaker rehearsal and inspection of the eventual Claude Design export remain distinct checks. No design sync or publication is part of this revision.
