# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## What this repository is

Preparation materials for a conference talk, "Beyond the Coding Agent: From Software Engineer to AI Engineer." Everything is Markdown. There is no code, build, lint, or test tooling.

## Layout and roles

- `README.md`: the session description already sent to attendees. Treat its topic list as fixed scope. Any outline must cover every responsibility it names; only the weighting may change.
- `outlines/outline-vN.md`: versioned outlines. `outline-v2.md` is current. Do not overwrite a prior version; write the next number and leave earlier ones in place for comparison.
- `research/synthesis.md`: consolidated research findings and the single place to check before putting a statistic, quotation, or definition in an outline or slide. Section 4 sorts claims into safe to cite, cite with a caveat, and do not put on a slide.
- `research/track-*.md`: the four full research reports (discipline, enterprise agents, evals and operations, transition). They are large; read `synthesis.md` first and open a track report only for detail, using its section headers.

## Decisions that govern the talk

These were settled with the speaker on 2026-09-11 and are not recorded elsewhere.

- Format is 50 minutes: about 30 of presentation, 20 of Q&A. `outline-v1.md` and the earlier session plan say 60/40; that is out of date.
- Agentic AI is the priority. Every area of the discipline is taught through one enterprise agent (the access-request agent in `outline-v2.md`, four versions v0 to v3 on the autonomy spectrum). RAG and workflows appear as earlier points on that spectrum, not as separate sections.
- Audience is software engineers, mixed but leaning beginner: most have used a coding agent, fewer have called a model API, few have shipped an AI-dependent system.
- Name widely adopted standards (MCP, A2A, tool calling, structured outputs, OpenTelemetry) but do not endorse or compare SDKs and frameworks.
- The transition roadmap must stay concrete: skills that carry over, skills to add, a first project, a short resource list.

## Evidence rules

- Every number or quotation in an outline must trace to `research/synthesis.md` or a track report, with the same attribution and date.
- Do not invent baseline numbers for the running example. Where a figure is needed, the outline says "your current median resolution time" so the audience supplies its own.
- Items flagged as unverified or secondary in the research keep that flag when they move into an outline.

## Conventions

- Kebab-case filenames, flat directories.
- Match the prose style of `outline-v2.md`: short declarative sentences, attributed claims, per-section time budgets, and a running-example beat plus a coding-agent bridge for each area of section 2.
- The Context7 MCP server is disabled for this repository in `.claude/settings.local.json`; there are no library docs to fetch here.
