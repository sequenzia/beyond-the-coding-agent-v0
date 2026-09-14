# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## What this repository is

Preparation materials for a conference talk, "Beyond the Coding Agent: From Software Engineer to AI Engineer." Everything is Markdown except a small token package under `style/` that `/design-sync` uploads to Claude Design and the deck generator under `deck/build/`. There is no lint or test tooling for the talk itself.

## Layout and roles

- `README.md`: the session description already sent to attendees. Treat its topic list as fixed scope. Any outline must cover every responsibility it names; only the weighting may change.
- `overview.md`: a standalone breakdown of the talk compiled from the slides, outline v4, the synthesis, and the design brief. It repeats slide timing, cuts, the specimen beats, and the different-customer beats on purpose so a reader gets the whole talk in one file. Update it when those change.
- `outlines/outline-vN.md`: versioned outlines. `outline-v4.md` is current. Do not overwrite a prior version; write the next number and leave earlier ones in place for comparison.
- `research/synthesis.md`: consolidated research findings and the single place to check before putting a statistic, quotation, or definition in an outline or slide. Section 4 sorts claims into safe to cite, cite with a caveat, and do not put on a slide.
- `research/track-*.md`: the four full research reports (discipline, enterprise agents, evals and operations, transition). They are large; read `synthesis.md` first and open a track report only for detail, using its section headers.
- `slides/`: the slide-by-slide content, one file per section (`00-cold-open.md` through `04-close.md`) plus `qa.md`. Slides are numbered 1 to 19 globally with the outline reference beside each. Every slide has the same shape: on-slide text (a headline and at most three bullets, except the resource list on slide 18), a visual spec (Mermaid where there is a diagram; node fill and text colors follow the class table in `style/design-brief.md`; the loop as a code block on slide 10), a specimen block and a different-customer block in section 2, a verbatim first-person script sized at 150 words per minute against the slide's time, a "cut if running long" with seconds saved, and a sources line. Section files carry a header with goal, specimen beat, different-customer beat, bridges in and out, cut order, and a timing table.
- `deck/`: `beyond-the-coding-agent.pptx` is the transcribed deck, and `deck/build/` is the pptxgenjs generator that produces it from `slides/` and the brief (`sh deck/build/build.sh`; see `deck/build/README.md`). `deck/NOTES.md` records the decisions the deck embodies, including where it departs from the brief on purpose; read it before editing the deck. On-slide text lives in `build.js`; speaker notes are read from `slides/` at build time. Regenerate after editing either.
- `style/`: `design-brief.md` is the design system for the deck; `colors.md` is the raw conference palette it derives from. The brief's fixed color keys (map rings, tool tiers, node classes) and its text-on-fill table govern any color named in a slide's visual spec. The folder is also a tiny npm package (`package.json`, an intentionally empty `index.js` entry, and `tokens.css` generated from the brief's token block) that `/design-sync` converts and uploads to the Claude Design project as tokens and guidelines; there are no components. Edit the brief, never `tokens.css`.
- `.design-sync/`: sync state for Claude Design. `config.json` holds the project id and the command that regenerates `tokens.css`; `conventions.md` is the header inlined into the design agent's prompt; `NOTES.md` is the file to read before re-syncing. `.ds-sync/` and `ds-bundle/` are gitignored scratch.

## Decisions that govern the talk

These were settled with the speaker on 2026-09-11 and 2026-09-13 and are not recorded elsewhere.

- Format is 50 minutes: about 30 of presentation, 20 of Q&A. `outline-v1.md` and the earlier session plan say 60/40; that is out of date.
- Agentic AI is the priority. Every area of the discipline is taught by taking apart the coding agent from the builder's side, the specimen in `outline-v4.md`, and each area closes on a "same machine, different customer" beat carried by real, sourced systems (Amazon's stale wiki, NurtureBoss, Cursor's support bot, EchoLeak and ForcedLeak) or by one line. There is no invented running example: the access-request agent of v2 and v3 was removed on 2026-09-13 (`outline-v4.md` Appendix F). RAG and workflows appear as earlier stops on the coding agent's lineage on slide 4 (a completion, chat over the codebase, explore or plan mode, the agent behind the permission prompt), not as separate sections. The framing rule: the audience must never hear that AI engineering means building coding agents, or that configuring a coding agent is engineering one.
- On stage the specimen is "your coding agent." A vendor is named only as the author of a figure or a post (Anthropic's sandboxing post, OpenAI's agent-first codebase); no product is named as a recommendation. Incidents keep their company names (Replit, Amazon, Cursor), as before.
- The loop appears as code once, on slide 10: about ten lines of framework-free pseudocode with the section's scope phrases as its comments. The ring map stays the diagram of record on slides 5, 14, and 19.
- Audience is software engineers, mixed but leaning beginner: most have used a coding agent, fewer have called a model API, few have shipped an AI-dependent system.
- Name widely adopted standards (MCP, A2A, tool calling, structured outputs, OpenTelemetry) but do not endorse or compare SDKs and frameworks.
- The transition roadmap must stay concrete: skills that carry over, skills to add, a first project, a short resource list.
- The harness, settled 2026-09-13 after building section 2 as slides: on stage "harness" means one thing, the program that runs the loop (the loop ring and the harness ring together; the loop is the idea, the harness is the code). The two meanings of "harness engineering" are named once on stage, on slide 5, in one sentence: configuring the harness around your coding agent is the user side of the line, writing it is the engineer side. The fuller version stays in the Q&A preface of `slides/qa.md`. Per-action verification is the first half of area 2.4 and precedes the harness slide, so the walk finishes the loop ring before stepping out. Evaluation (2.5) sits on the map's outer ring beside operations. Section 2 opens each slide with a scope phrase (one call, what that call sees, one action, that action gated, one run, many runs, production) and seeds a refrain, "in code, not in a prompt," on slides 7 (the re-read rule), 8 (the permission system), and 9 (the tests before done) that slide 10 collects. See `outlines/outline-v4.md` Appendices E and F.
- Branding, settled 2026-09-13: the talk runs inside an internal virtual conference themed "Code Meets Intelligence," whose brand supplies the palette and the Helvetica type. Dark base on every slide, pink `#f948be` as the hero accent, brightness from bolder accents rather than a light variant, no conference logo or theme line on slides, a statement slide in place of section dividers. Gradients and shadows stay banned; decorative shapes and italics are allowed under the rules in `style/design-brief.md`.

## Evidence rules

- Every number or quotation in an outline or slide must trace to `research/synthesis.md` or a track report, with the same attribution and date.
- Do not invent numbers or scenarios for the specimen. Every specimen beat describes a shipping system or a published incident. The one uncited beat, the re-read rule on slide 7, is marked in its sources line as the talk's own observation of shipping agents, with no product named.
- Items flagged as unverified or secondary in the research keep that flag when they move into an outline.
- Sources lines in `slides/` use three flags: CAVEAT (say the caveat on stage), SECONDARY (primary source unreachable when the research ran), NOT IN SYNTHESIS (traced to a track report rather than the §4 tables of `synthesis.md`). `qa.md` ends with the numbers that must not be cited and what to say instead.

## Conventions

- Kebab-case filenames, flat directories.
- Match the prose style of `outline-v4.md`: short declarative sentences, attributed claims, per-section time budgets, and a specimen beat plus a different-customer beat for each area of section 2.
- The coding agent's six tools are named on slide 8 (read file, search the codebase, list files, edit file, run a command, push or open a pull request) with git as the compensating action. Reuse those names verbatim. The four spectrum stops on slide 4 (one call, a workflow, an agent with read-only tools, an agent with tiered actions) are likewise reused by wording.
- The Context7 MCP server is disabled for this repository in `.claude/settings.local.json`; there are no library docs to fetch here.
