# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## What this repository is

Preparation materials for a conference talk, "Beyond the Coding Agent: From Software Engineer to AI Engineer." Everything is Markdown except a small token package under `style/` that `/design-sync` uploads to Claude Design. There is no build, lint, or test tooling for the talk itself.

## Layout and roles

- `README.md`: the session description already sent to attendees. Treat its topic list as fixed scope. Any outline must cover every responsibility it names; only the weighting may change.
- `overview.md`: a standalone breakdown of the talk compiled from the slides, outline v3, the synthesis, and the design brief. It repeats slide timing, cuts, and the running example on purpose so a reader gets the whole talk in one file. Update it when those change.
- `outlines/outline-vN.md`: versioned outlines. `outline-v3.md` is current. Do not overwrite a prior version; write the next number and leave earlier ones in place for comparison.
- `research/synthesis.md`: consolidated research findings and the single place to check before putting a statistic, quotation, or definition in an outline or slide. Section 8 governs the current revision. Section 4 preserves the historical safe/caveated/excluded claim inventory.
- `research/track-*.md`: the four full research reports (discipline, enterprise agents, evals and operations, transition). They are large; read `synthesis.md` first and open a track report only for detail, using its section headers.
- `slides/`: the slide-by-slide content, one file per section (`00-cold-open.md` through `04-close.md`) plus `qa.md`. Slides are numbered 1 to 20 globally with the outline reference beside each. Every slide has the same shape: on-slide text (a headline and at most three bullets, with tables or sequences where they communicate the evidence more clearly), a visual spec (Mermaid where there is a diagram; node fill and text colors follow the class table in `style/design-brief.md`), a verbatim first-person script plus explicit build/reflection time, calculated at 150 spoken words per minute, a "cut if running long" with seconds saved, and a sources line. Section files carry a header with goal, running-example beat, bridges in and out, cut order, and a timing table.
- `style/`: `design-brief.md` is the design system for the deck; `colors.md` is the raw conference palette it derives from. The brief's fixed color keys (map layers, tool boundaries, node classes) and its text-on-fill table govern any color named in a slide's visual spec. The folder is also a tiny npm package (`package.json`, an intentionally empty `index.js` entry, and `tokens.css` generated from the brief's token block) that `/design-sync` converts and uploads to the Claude Design project as tokens and guidelines; there are no components. Edit the brief, never `tokens.css`.
- `.design-sync/`: sync state for Claude Design. `config.json` holds the project id and the command that regenerates `tokens.css`; `conventions.md` is the header inlined into the design agent's prompt; `NOTES.md` is the file to read before re-syncing. `.ds-sync/` and `ds-bundle/` are gitignored scratch.

## Decisions that govern the talk

These were settled with the speaker on 2026-09-11 and 2026-09-13 and are not recorded elsewhere.

- Format is 50 minutes: 29 minutes of planned content, one minute of contingency, 20 of Q&A. `outline-v1.md` and the earlier session plan say 60/40; that is out of date.
- Agentic AI is the priority. Every area of the discipline is taught through one document investigation agent supporting a standard consumer toaster-oven launch in `outline-v3.md`. RAG and workflows appear as simpler milestones in the investigation, not as separate sections.
- Audience is software engineers, mixed but leaning beginner: most have used a coding agent, fewer have called a model API, few have shipped an AI-dependent system.
- Name widely adopted standards (MCP, A2A, tool calling, structured outputs, OpenTelemetry) but do not endorse or compare SDKs and frameworks.
- The transition roadmap must stay concrete: skills that carry over, skills to add, a first project, a short resource list.
- Branding, settled 2026-09-13: the talk runs inside an internal virtual conference themed "Code Meets Intelligence," whose brand supplies the palette and the Helvetica type. Dark base on every slide, pink `#f948be` as the hero accent, brightness from bolder accents rather than a light variant, no conference logo or theme line on slides, a statement slide in place of section dividers. Gradients and shadows stay banned; decorative shapes and italics are allowed under the rules in `style/design-brief.md`.

## Evidence rules

- External numbers, quotations, and definitions trace to `research/synthesis.md` (section 8 governs the current revision) or a track report with matching attribution and date. Fictional excerpts, dates, versions, and project counts trace to `research/toaster-oven-dossier.md`. Editorial timings and word counts are labeled calculations.
- All manufacturing content is illustrative. Do not invent business benefits, success rates, industry statistics, safety conclusions, or readiness approval. Findings describe the examined records, not company-wide frequency.
- Items flagged as unverified or secondary in the research keep that flag when they move into an outline.
- Sources lines in `slides/` use three flags: CAVEAT (say the caveat on stage), SECONDARY (primary source unreachable when the research ran), NOT IN SYNTHESIS (traced to a track report rather than the §4 tables of `synthesis.md`). `qa.md` ends with the numbers that must not be cited and what to say instead.

## Conventions

- Kebab-case filenames, flat directories.
- Match the prose style of `outline-v3.md`: short declarative sentences, attributed claims, per-section time budgets, and a running-example beat plus a coding-agent bridge for each area of section 2.
- Reuse exactly four tool display names: list documents, search documents, read document, save report. Identity and mandatory access restrictions come from the application. Authorization precedes listings, snippets, search results, and reads, including caches and derived material. Saving privately is the only persistent business action. Reports retain lineage and require source-access rechecks on reopen; changed permissions can block access.
- The Context7 MCP server is disabled for this repository in `.claude/settings.local.json`; there are no library docs to fetch here.

## Revision materials and verification

- `research/toaster-oven-dossier.md` defines the ten canonical fictional documents, chronology, tool contracts, trace, and expected findings. `research/toaster-oven-injection-variant.md` is separate and must never enter the canonical report.
- `research/presentation-review.md` records checked revision sources and editorial findings. `research/revision-validation.md` records content checks, calculated timing, local proof review, and outstanding speaker/final-export checks.
- `handout.md` contains the complete illustrative report, map, first-project guide, starter evaluation matrix, and broader references. Slide 20 has only three starting resources.
- Most slides target 25–40 essential words including excerpts. Scripts total approximately 3,300–3,600 words; allocate the remaining time to builds and reflection. Slides 5 and 11 each include a silent/chat reflection. Reserve the full map for slide 17.
- Enumerate a bounded authorized collection for pattern claims. Deduplicate by source and project, keep counterexamples, identify missing records, and qualify conclusions.
- Distinguish retrieval quality, answer quality, citation support, permissions, completion, cost, and latency. Do not present the illustrated trace or starter cases as executed agent evaluations.
- Capture sensitive trace content deliberately with access, redaction, retention, and deletion rules. Do not recommend blanket logging.
- Preserve the five section filenames and flat directories. Update overview, README status, and sync conventions when timing, counts, or the example change. Preserve the distributed description verbatim and prior outlines unchanged.
- Content revision does not authorize a design sync. Do not edit generated tokens. A local proof and calculated timing do not replace a live speaker rehearsal or final design-export inspection.
