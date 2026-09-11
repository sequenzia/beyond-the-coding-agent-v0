# Beyond the Coding Agent: From Software Engineer to AI Engineer

Preparation materials for a conference talk on AI engineering as a discipline, with a focus on designing, building, and deploying enterprise AI agents. Everything here is Markdown; there is no code.

## Session

- **Length:** 50 minutes, roughly 30 of presentation and 20 of questions and discussion
- **Audience:** software engineers who want to move into AI engineering, most of whom have used a coding agent but few of whom have shipped a system whose behavior depends on a model
- **Focus:** agentic AI, taught by building one enterprise agent area by area
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
| `outlines/outline-v2.md` | The current outline. Thirty minutes of content drawn on the agent loop, a running access-request agent built in four versions from a single model call to a tiered autonomous agent, a coding-agent bridge for every area, a Q&A table, and appendices on what changed from v1 and what was deliberately cut. |
| `outlines/outline-v1.md` | The original draft, written for a 60-minute slot. Superseded, kept for comparison. |
| `research/synthesis.md` | Consolidated research: the ranked verdict on what v1 was missing, 2026 vocabulary with attribution, statistics sorted by how safely they can be cited, live controversies, the transition roadmap, and sourced Q&A answers. Read this before putting any number or quotation on a slide. |
| `research/track-a-discipline.md` | How the field defines AI engineering in 2025 and 2026, competency maps, the shift from prompt to context to harness engineering, conference programs. |
| `research/track-b-enterprise-agents.md` | Canonical agent design guidance, standards (MCP, A2A, Agent Skills, AGENTS.md, agent identity), production patterns, security incidents, adoption data, governance. |
| `research/track-c-evals-and-operations.md` | Evaluation methodology, verification versus evaluation, observability, testing, cost and latency. |
| `research/track-d-transition.md` | Job market, transferable skills, first-timer mistakes, learning resources, first-person accounts, career debates. |
| `CLAUDE.md` | Working conventions and the decisions that govern the talk, for Claude Code sessions in this repo. |

## Central Thesis

Using AI makes you an AI-enabled software engineer. Engineering systems whose behavior depends on AI makes you an AI engineer.

## Status

- Description: final and distributed.
- Research: complete as of 2026-09-11. Each track report flags anything that could only be reached through secondary coverage.
- Outline: v2 complete and under review by the speaker.
- Slides: not started.
