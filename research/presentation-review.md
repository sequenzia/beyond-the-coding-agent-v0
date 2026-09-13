# Presentation revision findings

**Revision:** 2026-09-13. **Basis:** speaker-approved implementation plan supplied for this revision, repository inspection, and primary-source checks. These are editorial findings, not results from an audience study of this talk.

## Narrative changes

The earlier deck introduces the discipline map before the audience has encountered the problems it organizes. It also spends slide space on adoption statistics, an anecdotal skill percentage, retirement details, and a large mistakes/resource inventory. Replace those with a document investigation whose next step changes when an earlier blocker proves stale.

The first task is deliberately small. A supplied pilot report answers a bounded question. Fixed retrieval then finds evidence for a question. Adaptive investigation enters when a dated claim needs follow-up. Collection coverage, claim support, permissions, and persistence become visible responsibilities through that same case. The map arrives on slide 17 as synthesis.

The case is a fictional standard consumer toaster oven. Its technical scope is documented dependencies. No appliance design advice, performance benchmark, certification, or measured business benefit is implied. The dossier is the sole authority for fictional dates, quotes, versions, and findings. The injection variant is separate.

## Checked sources and what they support

All links below were checked on 2026-09-13. Publication dates appear where available. Interpretations and local design decisions are explicitly separated from source claims.

| Key | Primary source | Supported use and qualification |
|---|---|---|
| R1 | [Penn State slide-design research](https://writing.engr.psu.edu/research.html), studies summarized on the research page | Assertion headlines supported by visual evidence. Apply as a design rationale, not a promised effect size for this audience. The 25–40-word target is our editorial constraint. |
| R2 | [Edge et al., From Local to Global](https://www.microsoft.com/en-us/research/publication/from-local-to-global-a-graph-rag-approach-to-query-focused-summarization/), April 2024 | Distinguishes specific retrieval from collection-level synthesis. Our small manifest and project matrix are an application of that distinction, not an implementation or endorsement of GraphRAG. |
| R3 | [Gao et al., Enabling Large Language Models to Generate Text with Citations](https://aclanthology.org/2023.emnlp-main.398/), EMNLP, December 2023 | ALCE evaluates answer correctness and citation quality separately. Our claim-by-claim support checks adapt that distinction. No benchmark percentage is transferred to the case. |
| R4 | [Anthropic, Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), 2026-01-09 | Small initial suites, multiple trials, different graders, and growth from observed failures. A suggested initial suite size is not an entry requirement or proof of readiness. |
| R5 | [OpenTelemetry GenAI spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md), living specification | Sensitive instructions, inputs, and outputs should not be captured by default. Opt-in and separate content storage are supported patterns. Our application also specifies access, redaction, retention, and deletion rules. Pin the version used by an implementation. |
| R6 | [Anthropic, Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents), 2024-12-19 | Predefined workflows versus evidence-adaptive tool use. Simplicity first. The toaster-oven trace is our illustration, not Anthropic's example. |
| R7 | [Anthropic, Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), 2025-09-29 | Context selection and maintained working notes under finite context. The evidence ledger's schema is our design. |
| R8 | [MCP tools specification](https://modelcontextprotocol.io/specification/2025-11-25/server/tools), versioned page | Tool descriptions and input/output schemas support interoperable contracts. Server structured content is distinct from model structured outputs. Display names with spaces are not literal wire identifiers. No claim that MCP supplies application authorization. |
| R9 | [A2A: What is A2A?](https://a2a-protocol.org/latest/topics/what-is-a2a/), living documentation | Interoperability between agents. Optional boundary in the map, not required for parallel workers or restricted to cross-company use. |
| R10 | [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html), living guidance | Layered instruction/data separation, least privilege, validation, and monitoring. Controls reduce risk, without a guarantee of complete prevention. |

## Corrections to earlier synthesis guidance

- Remove the implication that a starter must collect a prescribed number of evals before trying a prompt. Define success early, then expand representative cases and observed failures.
- Do not describe a newer document as automatically truer. Resolve dates, scope, configuration, source lineage, and explicit dependencies. Unresolved contradictions remain unresolved.
- A citation that resolves is not necessarily supporting evidence. Check the claim's scope and whether important claims have support.
- A2A can connect distinct agents within or across organizations. It is not required for local parallel investigation.
- Independence is an evaluation design choice. Give a claim grader the candidate claim and supporting evidence with a rubric. Do not demand that a grader have no overlapping evidence or rely on shared hidden reasoning.
- Replace blanket trace capture with deliberate metadata collection and governed opt-in content capture. Working state and telemetry have different purposes and access requirements.
- Multi-agent cost and performance figures in earlier research describe a particular system and baseline. They are not a forecast for this project.
- Remove fixed model-migration intervals, salary promises, transition-duration promises, and legal applicability dates from active teaching. These require workload-specific or current jurisdiction-specific assessment.
- Do not replace a weak failure statistic with another unrelated survey. Define and measure success in the actual task.

## Review and rehearsal contract

Twenty scenes total 29:00, followed by 1:00 contingency and 20:00 Q&A. Scripts target 3,300–3,600 spoken words at 150 words per minute, with the remaining time explicitly allocated to builds and reflection. Word-count arithmetic is a rehearsal estimate, not evidence of an actual speaker rehearsal.

Review the opening request and stale-tooling reveal with the speaker before final script polish. Silent reflection or brief chat works on slides 5 and 11. Preserve the report payoff and first-project milestones when cutting. Inspect local slide proofs at full and reduced size. A local proof does not establish the final Claude Design export's layout, and no design sync is part of this revision.
