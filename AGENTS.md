# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## What this repository is

Preparation materials for a conference talk, "Beyond the Coding Agent: From Software Engineer to AI Engineer." Everything is Markdown except a small token package under `style/` that `/design-sync` uploads to Claude Design. There is no build, lint, or test tooling for the talk itself.

## Layout and roles

- `README.md`: the session description already sent to attendees. Treat its topic list as fixed scope. Any outline must cover every responsibility it names; only the weighting may change.
- `outlines/outline-vN.md`: versioned outlines. `outline-v2.md` is current. Do not overwrite a prior version; write the next number and leave earlier ones in place for comparison.
- `research/synthesis.md`: consolidated research findings and the single place to check before putting a statistic, quotation, or definition in an outline or slide. Section 4 sorts claims into safe to cite, cite with a caveat, and do not put on a slide.
- `research/track-*.md`: the four full research reports (discipline, enterprise agents, evals and operations, transition). They are large; read `synthesis.md` first and open a track report only for detail, using its section headers.
- `slides/`: the slide-by-slide content, one file per section (`00-cold-open.md` through `04-close.md`) plus `qa.md`. Slides are numbered 1 to 19 globally with the outline reference beside each. Every slide has the same shape: on-slide text (a headline and at most three bullets, except the resource list on slide 18), a visual spec (Mermaid where there is a diagram; node fill and text colors follow the class table in `style/design-brief.md`), a verbatim first-person script sized at 150 words per minute against the slide's time, a "cut if running long" with seconds saved, and a sources line. Section files carry a header with goal, running-example beat, bridges in and out, cut order, and a timing table.
- `style/`: `design-brief.md` is the design system for the deck; `colors.md` is the raw conference palette it derives from. The brief's fixed color keys (map rings, tool tiers, node classes) and its text-on-fill table govern any color named in a slide's visual spec. The folder is also a tiny npm package (`package.json`, an intentionally empty `index.js` entry, and `tokens.css` generated from the brief's token block) that `/design-sync` converts and uploads to the Claude Design project as tokens and guidelines; there are no components. Edit the brief, never `tokens.css`.
- `.design-sync/`: sync state for Claude Design. `config.json` holds the project id and the command that regenerates `tokens.css`; `conventions.md` is the header inlined into the design agent's prompt; `NOTES.md` is the file to read before re-syncing. `.ds-sync/` and `ds-bundle/` are gitignored scratch.

## Decisions that govern the talk

These were settled with the speaker on 2026-09-11 and 2026-09-13 and are not recorded elsewhere.

- Format is 50 minutes: about 30 of presentation, 20 of Q&A. `outline-v1.md` and the earlier session plan say 60/40; that is out of date.
- Agentic AI is the priority. Every area of the discipline is taught through one enterprise agent (the access-request agent in `outline-v2.md`, four versions v0 to v3 on the autonomy spectrum). RAG and workflows appear as earlier points on that spectrum, not as separate sections.
- Audience is software engineers, mixed but leaning beginner: most have used a coding agent, fewer have called a model API, few have shipped an AI-dependent system.
- Name widely adopted standards (MCP, A2A, tool calling, structured outputs, OpenTelemetry) but do not endorse or compare SDKs and frameworks.
- The transition roadmap must stay concrete: skills that carry over, skills to add, a first project, a short resource list.
- Branding, settled 2026-09-13: the talk runs inside an internal virtual conference themed "Code Meets Intelligence," whose brand supplies the palette and the Helvetica type. Dark base on every slide, pink `#f948be` as the hero accent, brightness from bolder accents rather than a light variant, no conference logo or theme line on slides, a statement slide in place of section dividers. Gradients and shadows stay banned; decorative shapes and italics are allowed under the rules in `style/design-brief.md`.

## Evidence rules

- Every number or quotation in an outline or slide must trace to `research/synthesis.md` or a track report, with the same attribution and date.
- Do not invent baseline numbers for the running example. Where a figure is needed, the outline says "your current median resolution time" so the audience supplies its own.
- Items flagged as unverified or secondary in the research keep that flag when they move into an outline.
- Sources lines in `slides/` use three flags: CAVEAT (say the caveat on stage), SECONDARY (primary source unreachable when the research ran), NOT IN SYNTHESIS (traced to a track report rather than the §4 tables of `synthesis.md`). `qa.md` ends with the numbers that must not be cited and what to say instead.

## Conventions

- Kebab-case filenames, flat directories.
- Match the prose style of `outline-v2.md`: short declarative sentences, attributed claims, per-section time budgets, and a running-example beat plus a coding-agent bridge for each area of section 2.
- The access agent's six tools are named on slide 8 (look up requester, search policy, check entitlements, request approval, notify requester, grant entitlement) plus revoke as the compensating action. Reuse those names verbatim.
- The Context7 MCP server is disabled for this repository in `.claude/settings.local.json`; there are no library docs to fetch here.
