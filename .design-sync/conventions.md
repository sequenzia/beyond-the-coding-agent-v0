# Beyond the Coding Agent: slide design system

Tokens and guidelines for one **20-scene, 16:9** talk deck shown over a video call. Planned content is 29:00 with 1:00 contingency and 20:00 Q&A. There are no React components. Read `guidelines/design-brief.md` before composing slides and use the supplied tokens for your primitives.

## Narrative and source contract

The example is a **document investigation supporting a standard consumer toaster-oven launch**. Reuse the request, evidence, investigation, checks, and report. Reserve the full discipline map for slide 17. Reveal the immediate question first, recurring problems on slide 11, saving on slide 15. Slide 3 is a bounded preview; slide 5 restarts the broad investigation.

The earlier supplier update D02 v1 §1, September 2, names tooling as the blocker. D03 v1 §1, September 9, clears tooling. D04 v2 §2, September 10, requires repeat validation after a heating-element revision. D05 v1 §2, September 11, records validation pending. D06 v1, September 12, corroborates that dependency. D07/D08 show late changes and repeat validation in reviewed retrospectives; D09 supplies the packaging counterexample. Match the dossier and slide text exactly. All records and receipts are fictional.

Use these four display names verbatim: **list documents**, **search documents**, **read document**, **save report**. Authorization precedes every retrieval path. Source restrictions also govern caches, derived material, and reopened reports. The only persistent business action is saving privately. Never imply source editing, permission changes, email, public sharing, or readiness certification.

## Setup and colors

`styles.css` imports `_ds_bundle.css`. Give every slide `background: var(--color-base); color: var(--color-text); font-family: var(--font-sans)`. Render at 1920 × 1080 px. Never a light background, pure black/white, gradients, shadows, glows, or red. No conference logo or theme line.

- Base #14161c; primary text #fffcf5; surface #1c1f27.
- Pink #f948be is the hero accent and marks selected evidence or failures.
- Blue #1064f8 is retrieval and ordinary steps. Green #01b66d is harness, enforced gates, checks, and verified receipt. Amber #fdad00 is model, untrusted text, save boundary, waits, and partial outcomes.
- Text on pink, green, amber, and off-white fills is #14161c. Text on blue fills is #fffcf5.
- Blue text on dark ground is at least 24 pt regular or 19 pt bold. Smaller necessary source labels use off-white.
- At most three accents per scene; four only on the complete map at slide 17.
- Map key: amber model, blue loop/context/tools, green harness/checks/security, muted off-white operations. A2A is optional and dashed.
- Dates, explicit labels, and solid/dashed lines reinforce color. Never dim evidence the audience must read.

## Type and composition

Use the Helvetica stack. Menlo/SF Mono is available for tools or fields. On a 960 × 540 pt canvas: assertion titles 36–42 pt bold, statement titles 54–64 pt, essential body/excerpts/tables 24–28 pt, essential source IDs/dates 20–22 pt, secondary attribution 16 pt, footer 14 pt. Double these values for the 1920 × 1080 pixel export. Cut text before reducing necessary type. Inspect at 960 × 540 pixels too.

Keep most scenes near 25–40 essential words including the headline and excerpts. Use about 6% horizontal margins. Favor a clear assertion supported by a passage, timeline, table, or diagram. No section-divider slides, code screenshots, adoption tiles, anecdotal percentages, retirement trivia, mistakes inventory, or dense resource slide. Slide 20 contains three starting resources.

## Example evidence comparison

Display these as dated passages, not application widgets:

- September 2 · D02 v1 §1: “Tooling availability is the current launch blocker.”
- September 9 · D03 v1 §1: “Tooling is available for pilot production.”

Reveal the second passage after the first. Add an explicit Earlier status label and pink strike to the first claim while keeping it readable. Ask what to search next. The next scene follows remaining validation dependencies. Do not show the complete report or discipline map in this build.
