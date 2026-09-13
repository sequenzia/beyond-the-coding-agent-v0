# Beyond the Coding Agent: From Software Engineer to AI Engineer

Preparation materials for a conference talk on AI engineering as a discipline, with a focus on designing, building, and deploying enterprise AI agents. The talk materials are Markdown. The small style token package supports a separate design sync.

## Session

- **Length:** 50 minutes, 29 minutes of planned presentation, one minute of contingency, and 20 minutes of questions and discussion
- **Audience:** software engineers who want to move into AI engineering, most of whom have used a coding agent but few of whom have shipped a system whose behavior depends on a model
- **Focus:** agentic AI, taught through a fictional document investigation supporting a consumer toaster-oven launch
- **When:** September 2026

## Presentation Description

AI coding tools are changing how software gets built. However, using a coding agent does not make someone an AI engineer. It makes them an AI-enabled software engineer. AI engineering begins when the behavior of the system itself depends on AI.

This session presents AI engineering as a distinct engineering discipline built on top of traditional software engineering. While machine learning engineers generally focus on models and the pipelines that produce them, AI engineers build products and systems around foundation models developed by others. Their work includes retrieval-augmented generation, model-powered workflows, and other AI applications, with agentic systems representing the discipline’s most demanding expression.

When a model can interpret goals, construct and consume context, select tools, determine its next action, and affect external systems, probabilistic behavior is no longer a minor implementation detail. It becomes part of the system’s foundation. Making that behavior useful, reliable, and trustworthy requires much more than prompts and API calls.

We will map the major responsibilities of AI engineering, including context engineering and retrieval, agent tools and extensibility, harness design and orchestration, evaluations and verification, observability, guardrails, security, and operational concerns such as cost and latency. We will examine why a compelling prototype is not evidence of production readiness, why traditional software tests remain necessary but are no longer sufficient, and why evaluations must continue after deployment.

For software engineers interested in making the transition, this session will identify which existing skills provide a strong foundation, what additional competencies AI engineering demands, and where to focus further learning. Attendees will leave with a clear conceptual map of the discipline, a realistic understanding of its complexity, and a roadmap for becoming an AI engineer rather than merely a software engineer who uses AI.

The description above was provided to attendees before the outline was finalized. Its topic list is treated as fixed scope: every outline version covers everything it names, and only the weighting changes.

## Repository Contents

| Path | What it is |
|---|---|
| `overview.md` | Standalone guide to the full revised talk, chronology, timing, cuts, map, contracts, evidence, roadmap, and status. Start here. |
| `outlines/outline-v3.md` | Current outline: twenty connected scenes, 29 minutes of planned content, and explicit coverage of the distributed description. |
| `outlines/outline-v1.md`, `outlines/outline-v2.md` | Historical outlines, preserved for comparison. |
| `slides/` | Five section files with globally numbered scenes 1–20, on-slide text, visual specs, verbatim scripts, cuts, and sources. `qa.md` prepares the 20-minute discussion. |
| `handout.md` | Illustrative report, discipline map, first-project guide, evaluation checklist, and references. |
| `research/toaster-oven-dossier.md` | Ten canonical fictional documents, chronology, access model, tool contracts, trace, and expected findings. |
| `research/toaster-oven-injection-variant.md` | Isolated adversarial fixture, separate from the canonical evidence. |
| `research/presentation-review.md` | Revision findings, checked primary sources, and corrected claims. |
| `research/revision-validation.md` | Content checks, calculated rehearsal, layout proof results, and remaining speaker/export checks. |
| `research/synthesis.md` | Consolidated research. Section 8 governs the current revision; earlier sections preserve historical research and flags. |
| `research/track-a-discipline.md` | Definitions, competency maps, and discipline boundaries. |
| `research/track-b-enterprise-agents.md` | Agent design, standards, production patterns, and security. |
| `research/track-c-evals-and-operations.md` | Evaluation, verification, observability, cost, and latency. |
| `research/track-d-transition.md` | Transferable skills, learning resources, and career research. |
| `style/design-brief.md` | Conference design system and source for generated tokens. |
| `.design-sync/` | Design sync configuration and conventions; no sync is included in this content revision. |
| `AGENTS.md` | Working conventions and current talk decisions for repository agents. |

## Central Thesis

Using AI makes you an AI-enabled software engineer. Engineering systems whose behavior depends on AI makes you an AI engineer.

## Status

- Description: final and distributed, preserved verbatim.
- Research: original tracks dated 2026-09-11; revision sources and qualifications checked 2026-09-13.
- Outline: v3 is current. Earlier outlines remain unchanged.
- Slides: twenty-scene Markdown revision with a fictional illustrated case. No working agent is required.
- Delivery: local content/layout verification is documented in `research/revision-validation.md`. Live speaker rehearsal and final design-export review remain separate. No design sync was published.
