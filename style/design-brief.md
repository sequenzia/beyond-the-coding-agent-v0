# Design Brief: Beyond the Coding Agent

## Purpose

A design system for “Beyond the Coding Agent: From Software Engineer to AI Engineer.” Twenty 16:9 scenes support 29 minutes of planned speech and visual builds, one minute of contingency, and 20 minutes of Q&A. The audience watches an internal virtual conference in a reduced video-call window.

The conference theme is “Code Meets Intelligence.” Its palette and Helvetica supply the branding. Do not put its logo or theme line on slides. Every slide has a dark base. Use statement scenes instead of section dividers.

The running example is a document investigation supporting a standard consumer toaster-oven launch. The recurring visual is the evolving request, evidence, investigation, checks, and report. Reserve the complete discipline map for slide 17. All records are fictional; source IDs and dates must match the dossier.

## Color palette

| Role | Value | Use |
|---|---|---|
| Base | #14161c | Every slide background; dark text on bright fills |
| Text | #fffcf5 | Primary text; text on blue fills |
| Muted | #fffcf5 at 60% | Secondary captions, footers, connectors |
| Dimmed | #fffcf5 at 40% | Nonessential siblings only, never evidence the viewer must read |
| Surface | #1c1f27 | Document regions and restrained containers |
| Border | #fffcf5 at 12% | Hairline separators |
| Pink | #f948be | Hero emphasis, selected evidence, strikes and failures |
| Blue | #1064f8 | Retrieval, read tools, ordinary loop steps |
| Green | #01b66d | Enforced boundaries, checks, harness, verified receipt |
| Amber | #fdad00 | Model, untrusted text, waits, partial outcomes, save boundary |

### Text on fills

| Fill | Required text |
|---|---|
| Base or surface | Off-white |
| Pink, green, amber, off-white | Base #14161c |
| Blue | Off-white #fffcf5 |

Never off-white text on pink, green, or amber; never dark text on blue. Blue text on dark ground is large only: at least 24 pt regular or 19 pt bold. Use off-white for smaller necessary source labels. At most three accent colors per scene; four only for the full map. Failures use pink, never red. Dates, explicit labels, and solid/dashed line styles reinforce color meaning.

### Fixed color keys

| Visual | Key |
|---|---|
| Investigation steps, slides 4–6 | Ordinary steps blue; model choice amber; enforced stop green |
| Tools, slide 7 | list documents, search documents, read document: blue at large type; save report: amber |
| Ledger and coverage, slides 8 and 11 | Surface or base rows, off-white body, pink emphasis; no invented heatmap values |
| Authorization, slide 9 | Green enforced gate, blue retrieval paths; dashed blocked path labeled Outside user access |
| Injection, slide 10 | Amber untrusted document, pink attempted redirection, green private boundary |
| Claim checks, slide 12 | Pink strike for overclaim; explicit Overclaim and Supported labels |
| Checkpoints, slide 14 | Green checkpoint, amber partial result, dashed resume line |
| Save, slide 15 | Amber controlled action, green verified receipt, amber unknown status |
| Full map, slide 17 only | Model amber; loop/context/tools blue; harness/checks/security green; operations muted off-white |

## Typography and reduced viewing

Helvetica Neue, Helvetica, Arial, sans-serif throughout. Menlo or SF Mono for tool names and field labels only when useful. Italics are allowed for attributed quotations; emphasis is bold or pink. No code screenshots.

Sizes below are points on a 960 × 540 pt canvas, equivalent to twice those numbers in pixels on a 1920 × 1080 export.

| Element | Size |
|---|---|
| Statement headline | 54–64 pt bold; wrap deliberately |
| Assertion headline | 36–42 pt bold, at most three short lines |
| Essential body, excerpt, table | 24–28 pt; use 26–28 where possible |
| Essential source identity/date | 20–22 pt, off-white where needed |
| Secondary attribution | 16 pt muted |
| Footer and slide number | 14 pt muted, only nonessential text below 16 pt |

Most scenes should contain roughly 25–40 essential words including excerpts, labels, and headline. A small exception is allowed for the four-tool record, coverage table, or milestone checks when every word earns its place. Remove duplication before shrinking type. At a 960 × 540 pixel proof, required text should remain legible. Inspect that reduced proof as well as the full-size render. Do not count tiny footers as teaching content.

## Layout and builds

Use 16:9 at 1920 × 1080 px, about 6% horizontal margins, and a consistent title position. Prefer one clear assertion supported by evidence. Plain document excerpts, timelines, readable tables, and diagrams fit this talk better than decorative dashboards. A two-column split is useful only when the evidence comparison needs it. Use the full canvas for the milestone roadmap and coverage matrix.

No section dividers. Transitions come from the script. The full talk title belongs in the small footer; no extra cover is added to the twenty scenes.

The opening request reveals its immediate question first. Slide 3 previews a bounded D05 answer. Slide 5 restarts the broader investigation and contrasts D02 with D03. Slide 11 reveals the recurring-pattern request; slide 15 reveals saving. Do not show later findings in early builds. Keep the slide 5 and 11 reflection prompts on screen for their allocated pauses.

## Visual vocabulary

- **Request:** large plain question, connected to a labeled document collection. No chat-app chrome needed.
- **Evidence passage:** canonical short excerpt with ID, version, section, and date when the decision depends on chronology. Pink underline for the decisive phrase. Never fictionalize additional text during design.
- **Timeline:** dated records along a clear horizontal line. Use Earlier status and Later update labels as well as color. Critical old evidence stays readable after supersession.
- **Evidence ledger:** compact table with source and what it establishes. Full provenance stays in the handout and notes. Do not squeeze the entire dossier onto a slide.
- **Coverage matrix:** one row per project, explicit unread state during the build, counterexample retained. Repeated hits never become extra projects.
- **Claim check:** overclaim with a pink strike, followed by a qualified supported statement and its citations.
- **Investigation/checkpoint diagram:** editable nodes and solid progress edges; dashed interruption, resume, or optional edges. Gates are labeled, not just colored.
- **Report:** a readable excerpt of the final report, with current blocker, pattern, and limit. Build the receipt only after the controlled save. Distinguish unknown status from verified success in text.
- **Map:** compose once on slide 17, using familiar labels. The semantic structure is in its Mermaid diagram; concentric bands are an allowed visual rendering. A2A stays at an optional dashed inter-agent boundary.
- **Skill pairing / roadmap:** flat table or sequential milestones, with concrete completion checks. No skill percentages.
- **Resources:** three plain titles on slide 20. Links also appear in the handout. No dense bibliography or QR-only access.

### Mermaid classes

Every Mermaid block uses these colors directly. Do not retain the old pastel classes or rely on an external theme to fix them later.

| Class | Fill | Text | Purpose |
|---|---|---|---|
| model | #fdad00 | #14161c | Model choice |
| step | #1064f8 | #fffcf5 | Retrieval and ordinary steps |
| check | #01b66d | #14161c | Harness, gates, verified outcomes |
| wait | #fdad00 | #14161c | Partial result, waiting, unknown status |
| strike | #f948be | #14161c | Failure or rejected claim |
| ops | #fffcf5 | #14161c | Operations node |
| container | #1c1f27 | #fffcf5 | Containers; boundary stroke takes the relevant key color |

## Decoration and exclusions

Flat shapes and restrained decorative lines may support a meaningful relationship. Do not add ornamental circles behind evidence or shapes that resemble interactive controls. No gradients, shadows, glows, pure black/white, light-slide variant, or red. No adoption tiles, anecdotal percentages, retirement trivia, seven-mistakes table, or dense resource slide. No appliance specifications, safety marks, or stock imagery implying a real product.

## Source and sync contract

Slides are authored in the five existing Markdown section files. The dossier governs all fictional excerpts, dates, versions, and report conclusions. The synthesis §8 governs external evidence. Do not add unverified statistics during design. Preserve access and uncertainty labels through visual polish.

The token block below is unchanged by the narrative revision. `style/tokens.css` is generated from it; never edit generated tokens by hand. Updating these guidelines does not publish a design sync. Read `.design-sync/NOTES.md` before any later sync.

## Tokens for import

Values only. Every color is from `colors.md` or a stated opacity of one.

```css
:root {
  --color-base: #14161c;
  --color-text: #fffcf5;
  --color-muted: rgba(255, 252, 245, 0.6);
  --color-dimmed: rgba(255, 252, 245, 0.4);
  --color-surface: #1c1f27;
  --color-border: rgba(255, 252, 245, 0.12);
  --color-primary: #f948be;   /* pink: hero, highlight, strike */
  --color-secondary: #1064f8; /* blue: structure, loop, steps */
  --color-positive: #01b66d;  /* green: harness, checks, antidote */
  --color-caution: #fdad00;   /* amber: model, waits, warnings */
  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: Menlo, "SF Mono", monospace;
  --radius: 8px;
  --stroke: 2px;
  --stroke-highlight: 3px;
  --stroke-hairline: 1px;
}
```
