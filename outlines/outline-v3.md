# Outline v3: investigating a toaster-oven launch

**Talk:** Beyond the Coding Agent: From Software Engineer to AI Engineer

**Revision:** 2026-09-13. Supersedes v2 for active work. Earlier outlines remain unchanged for comparison.

**Format:** 50 minutes. Planned content 29:00, contingency 1:00, Q&A 20:00. Beginner-leaning software engineers, most familiar with coding agents. This is an illustrated walkthrough, not a live agent demonstration.

**Takeaway:** I understand the engineering responsibilities, and I know what to build first.

## Narrative contract

A colleague asks what is blocking the launch of a standard consumer toaster oven. Begin with a supplied pilot report, then fixed retrieval. Restart the broader question: the first relevant supplier update describes a tooling delay that a later update clears. The model changes its next search to remaining validation dependencies. That choice introduces the agent loop and harness.

Reveal recurring problems on slide 11. Coverage and a counterexample qualify the pattern. Reveal saving on slide 15. The final private report includes supported findings, source versions, scope, limits, and unresolved questions. Assemble the discipline map on slide 17 from responsibilities already experienced.

All records, excerpts, and receipts are fictional. The [dossier](../research/toaster-oven-dossier.md) is canonical; the [injection variant](../research/toaster-oven-injection-variant.md) is isolated. No measured benefit, industry statistic, readiness certification, or production authorization is implied.

Use exactly four display names: **list documents**, **search documents**, **read document**, **save report**. Authentication comes from the application. Every retrieval path enforces source authorization before disclosure. The sole persistent business action is a private report save, with lineage and permission checks on reopen.

## Section budget

| Section | Story | Slides | Time |
|---|---|---|---|
| 0 | A question worth answering | 1–2 | 1:45 |
| 1 | From an answer to an investigation | 3–6 | 5:15 |
| 2 | Make the investigation dependable | 7–17 | 17:15 |
| 3 | Build your first useful version | 18–19 | 3:30 |
| 4 | An answer you can stand behind | 20 | 1:15 |
| | Contingency | | 1:00 |
| | Q&A | | 20:00 |

## 0. A question worth answering — 1:45

### 0.1. Your user needs an answer they can act on. — 1:00

Introduce the immediate launch question, the standard consumer toaster oven, and the fictional project records. Preview the eventual investigation and report in speech while keeping only the first question on screen. The audience should know what useful work the system will do.

**Evidence:** Dossier §§1–3; README.md thesis. Fictional case, not external evidence.

### 0.2. You already use an agent. Now you own one. — 0:45

Connect familiar coding-agent behavior to owning an AI-dependent product. Define AI engineering as building products and systems around foundation models. Existing interface, failure-handling, and verification responsibilities remain with the engineer.

**Evidence:** Synthesis §3 AI engineer and §2 finding 10; README.md definition. Paraphrase, no quotation.


## 1. From an answer to an investigation — 5:15

### 1.3. One document can answer one bounded question. — 1:00

Supply D05 v1 and answer what validation is pending from §2. Contrast the answerable question with a completion-date question that §3 cannot answer. This bounded preview occurs before the broader investigation restarts on slide 5.

**Evidence:** Dossier D05 v1 §§2–3; synthesis §8 R6. All displayed excerpts are fictional canonical text.

### 1.4. Retrieval supplies evidence for the question. — 1:15

Define RAG as retrieval-augmented generation: retrieve authorized evidence, supply passages, then generate a grounded answer. Ingestion, source identity, and indexing are engineering responsibilities. Several retrieved documents can still follow a fixed workflow.

**Evidence:** Synthesis §8 R6 and R2; dossier §5 authorization is the local application contract.

### 1.5. The first relevant document can tell an outdated story. — 1:30

The first search hit D02 v1 §1 describes tooling as the current blocker on September 2. Its date and promised follow-up motivate a later tooling-status search. Reveal D03 v1 §1 on September 9: tooling is available. Pause for the audience to choose the next search.

**Evidence:** Dossier D02 v1 §§1–2, D03 v1 §§1–2 and §4 trace. Fictional excerpts.

### 1.6. An agent chooses the next investigation step. — 1:30

The cleared tooling evidence changes the next query to outstanding validation dependencies. D04 v2 requires repeat validation, D05 records it pending, and D06 carries the dependency into readiness review. Define adaptive investigation and the harness that validates calls, supplies state, and enforces limits.

**Evidence:** Synthesis §8 R6; dossier §4 trace and §5 harness contract. Harness is the talk’s working definition, consistent with synthesis §3.


## 2. Make the investigation dependable — 17:15

### 2.7. A tool contract makes investigation dependable. — 1:15

Name list documents, search documents, read document, and save report. Expand a search result with ID, version, section, date, and passage. Explain tool calling, the distinction between service structured results and model structured outputs, and MCP as an optional contract transport. Schema correctness is not truth.

**Evidence:** Synthesis §8 R8; dossier §5. No protocol implementation or framework comparison.

### 2.8. Context must preserve the evidence that matters. — 1:45

Convert the decisive passages into a compact evidence ledger, preserving dates, versions, configuration, and provenance. Explain extraction failures, finite context, rereading canonical sources, and working notes as fallible derived material. Bridge to a coding agent losing a constraint during a long session.

**Evidence:** Synthesis §8 R7; dossier D03–D05 and §5 working state. Local ledger design.

### 2.9. The retrieval service enforces what this user can see. — 1:45

Place application-supplied identity and mandatory service authorization before listings, snippets, results, and document content. The restricted appendix is author knowledge, invisible to the simulated requester. Apply the same restrictions to caches and derived material and recheck on resume.

**Evidence:** Dossier §§1, 2, 5. Application security contract; synthesis §8 R10 supports layered least privilege.

### 2.10. A document can contain instructions you must not follow. — 1:15

Substitute isolated X-D03 to demonstrate document text trying to redirect a private report publicly and include procurement notes. Explain instruction/data separation, restricted capabilities, validation, and monitoring. Defenses reduce risk; source or answer contamination can still require review.

**Evidence:** Separate injection fixture X-D03 v1 §3; synthesis §8 R10. Canonical D03 remains unchanged.

### 2.11. A pattern claim needs coverage of the collection. — 2:00

Reveal the recurring-problems request. Enumerate the bounded authorized retrospective collection and track coverage by project. Deduplicate repeated passages. Pause with TO-25C unread, then reveal packaging supply as a counterexample. Qualify the conclusion to the examined records.

**Evidence:** Dossier D07–D09 v1 §§1–2 and §6 coverage; synthesis §8 R2. Application of the local/global distinction, not a GraphRAG prescription.

### 2.12. Check what each claim actually establishes. — 1:45

Attach a valid D07 citation to the overclaim that late changes cause most launch delays. Correct it to the reviewed TO-24A and TO-25B evidence and retain the D09 counterexample. Check reference resolution, claim support, and missing support separately. Explain per-action preconditions and postconditions.

**Evidence:** Dossier D07–D09 v1 §1, D06 v1 §2; synthesis §8 R3. ALCE motivates separate citation-quality assessment.

### 2.13. One failed answer becomes a reusable evaluation. — 2:30

Turn the stale tooling answer into a reusable regression case. Separate retrieval, answer quality, citation support, permissions, and completion. Combine deterministic tests with reviewed semantic rubrics, repeated trials, and cost/latency measures. Define success early and grow from representative questions and production failures.

**Evidence:** Synthesis §8 R4 and R3; dossier §§4–6. Expected rubric only, no agent was executed.

### 2.14. The investigation needs a stopping rule. — 1:30

Define completion by covered scope and checked claims. Enforce call, time, and token budgets. Show qualified partial results, durable checkpoints, interruption, and permission/version checks on resume. Position parallel reading as optional, with one owner of the final report and save.

**Evidence:** Dossier §5 stops and working state; synthesis §8 local harness design. Optional extension, no universal multi-agent cost claim.

### 2.15. Saving a report creates another controlled boundary. — 1:15

Reveal saving and the complete report payoff: current blocker, cleared tooling, bounded pattern, counterexample, evidence, and limits. Saving is private and the only persistent business action. Show unknown outcome, idempotent retry, verified receipt, lineage, and current-source checks on reopen.

**Evidence:** Dossier §§5–6; handout illustrative report. Save receipts are fictional expected states, not actual tool execution.

### 2.16. Operate the answer quality as well as the service. — 1:30

Use an illustrative trace where search succeeds but omits D03, producing a stale answer. Diagnose ingestion/index/filter coverage before changing the prompt. Name OpenTelemetry and deliberate content capture. Evaluate model/configuration changes on quality, cost, and latency with regression checks, staged rollout, and rollback.

**Evidence:** Synthesis §8 R5 and R4; trace failure is an illustrative scenario, not a production incident. Application retention rules are local design.

### 2.17. These are the responsibilities of AI engineering. — 0:45

Assemble the map from the responsibilities already experienced: model, context/retrieval/tools, harness/orchestration, evaluations/verification, guardrails/security, and operations. Place A2A at an optional inter-agent boundary. This is synthesis, not a new tour of the map.

**Evidence:** README.md responsibility inventory; synthesis §8 R9 and local map. No standards or framework endorsement.

**Coding-agent bridges:** tools as API contracts (7), forgetting a constraint after a long session (8), data flow and permission boundaries (9), checking a claim before accepting it (12), tests and failure analysis (13), job control and durable state (14), distributed save/retry semantics (15), tracing and rollback (16). Each bridge serves the investigation; none opens a separate lecture.

## 3. Build your first useful version — 3:30

### 3.18. Your engineering skills give you a starting point. — 1:15

Pair existing interface, testing, security, and operations skills with context/tool design, semantic evaluation, evidence boundaries, derived access, and quality operations. Recommend a familiar domain so the engineer can judge what evidence establishes. Use no skill-overlap percentage.

**Evidence:** Synthesis §6 transferable skills, revised by §8; local roadmap. No anecdotal percentage or career timeline.

### 3.19. Build the smallest useful version first. — 2:15

Give four milestones and completion checks: supported document Q&A; fixed retrieval with permissions and provenance; adaptive investigation that earns its cost; private reports with save/retry/reopen/permission tests. Define success early and grow evaluations without a large-dataset prerequisite.

**Evidence:** Handout first-project guide; synthesis §8 R4 and R6. Milestone checks are local recommendations, not measured benefits.


## 4. An answer you can stand behind — 1:15

### 4.20. Build one answer you can stand behind. — 1:15

Return to the supported report and its visible limits. Close with Building Effective Agents, Demystifying Evals for AI Agents, and the first-project guide. Invite questions for the remaining twenty minutes. Keep the complete bibliography in the handout.

**Evidence:** Synthesis §8 R6 and R4; handout.md. Closing is the talk’s own framing.


## Scope coverage

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

## Delivery and cuts

The scripts contain 3,317 spoken words. At 150 words/minute that is 22:07 of speech plus 6:53 explicitly reserved for builds, pointing, and reflection. This is a calculated rehearsal model, not a completed live rehearsal. Slides 5 and 11 each reserve 12 seconds for silent reflection or brief chat. Do not add audience discussion outside those windows; carry extended responses into Q&A.

Cut optional parallel research on 14, MCP protocol detail on 7, and optional examples on 8 and 16 before the report payoff or roadmap. Each slide has a specific cut and seconds saved. The one-minute contingency absorbs ordinary transitions. If substantially behind, apply the cut order in the section headers; keep the current-blocker reveal, report, four milestones, and close.

## First project

Use an approved document collection in a familiar domain. Define success immediately. Grow evaluation from representative questions and observed failures; a large dataset is not a prerequisite.

1. Supplied document Q&A: supported answer and appropriate unknowns.
2. Fixed retrieval: relevant evidence, permissions, traceable sources.
3. Adaptive investigation: improvement on difficult cases that justifies cost and latency.
4. Controlled saved reports: save, safe retry, reopen, and changed permissions behave as intended.

The close links only Building Effective Agents, Demystifying Evals for AI Agents, and [the first-project guide](../handout.md#first-project-guide). Broader references and optional depth live in the handout and Q&A.

## Changes from v2

The access-request agent is replaced throughout active materials by document investigation. The discipline map moves to synthesis. Adoption tiles, anecdotal percentages, retirement trivia, the seven-mistakes table, and the dense resource slide are removed. RAG and standards enter where the task needs them. Branding, title, attendee description, advertised responsibilities, and the 50-minute format remain.

## Evidence rules

[Research synthesis §8](../research/synthesis.md#8-revision-evidence-and-qualifications) is the current evidence policy. The new sources motivate distinctions and design choices, not numerical performance claims. CAVEAT, SECONDARY, and NOT IN SYNTHESIS flags remain mandatory if older research is reused. Fictional document quotations trace to the dossier by ID, version, and section.
