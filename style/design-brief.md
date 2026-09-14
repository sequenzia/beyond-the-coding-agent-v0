# Design Brief: Beyond the Coding Agent

## Purpose

A slide design system for one talk: "Beyond the Coding Agent: From Software Engineer to AI Engineer," delivered at an internal virtual conference whose theme is "Code Meets Intelligence." The deck is 19 slides at 16:9, about 30 minutes of presentation followed by 20 of questions, shown over a video call rather than a projector.

The colors and typefaces come from the conference brand. The conference's aesthetic is fun, playful, and bright, and this system carries that onto a dark ground: saturated accents, big type, big shapes, nothing muddy. The tone is bright, playful, and confident. The conference name, theme, and logo do not appear on the slides; the platform frames the deck.

What the deck contains, so the system covers exactly that and no more:

- A dark base on every slide. There is no light variant.
- One ring diagram (the "map") drawn three times: base, labeled, and bare.
- Three Mermaid flowcharts and a handful of drawn diagrams.
- Tables, cards, checklists, big numbers, stat tiles, quotations, and one dense resource list.
- No photography, no screenshots, no code blocks, no charts.

`colors.md` in this folder is the raw conference palette this brief derives from.

## Color Palette

### Base

| Role | Hex | Usage |
|---|---|---|
| Background | `#14161c` | Every slide. Never pure black. Never a light background. |
| Text | `#fffcf5` | Primary text. Warm off-white, not pure white. |
| Muted text | `#fffcf5` at 60% opacity | Captions, attributions, footers, slide numbers, connectors. Reads at 6.9:1. |
| Dimmed | `#fffcf5` at 40% opacity | De-emphasized cards, rows, and example values when a sibling is highlighted. Reads at 3.8:1, so only for content the audience is not meant to read closely. |
| Surface | `#1c1f27` | Cards, tiles, table rows, diagram containers. Slightly lighter than the background. |
| Border / divider | `#fffcf5` at 12% opacity | Hairline rules, table borders, card outlines. |

### Accents

| Name | Hex | Role |
|---|---|---|
| Pink (primary) | `#f948be` | The hero. Big numbers, the highlighted card, row, stop, or node, the "this talk" arrow, strikes and cross-outs, the statement-slide background, the first series in any stat row. Slide titles when the title is the point. |
| Blue (secondary) | `#1064f8` | Structure. The loop ring, step nodes, connectors that matter, the read-only tool tier, links. |
| Green | `#01b66d` | Positive. The harness ring, checklist checks, the antidote side of a contrast pair, tips. |
| Amber | `#fdad00` | Caution and the model. The model at the center of the map, the consequential tool tier, waits, warnings, untrusted segments, caveat callouts. |

### Text on fills

Measured against WCAG AA: 4.5:1 for body text, 3:1 for large text (24 pt regular or 19 pt bold and up).

| Fill | Text | Ratio | Rule |
|---|---|---|---|
| Background `#14161c` | Off-white | 17.7 | Default. |
| Background | Pink | 5.8 | Any size. |
| Background | Green | 6.8 | Any size. |
| Background | Amber | 9.6 | Any size. |
| Background | Blue | 3.6 | Large text only. Never for captions or body. |
| Pink | `#14161c` | 5.8 | Dark text on pink. |
| Green | `#14161c` | 6.8 | Dark text on green. |
| Amber | `#14161c` | 9.6 | Dark text on amber. |
| Blue | Off-white | 4.9 | Off-white text on blue. The one accent that takes light text. |
| Off-white | `#14161c` | 17.7 | Dark text on off-white nodes and rings. |

Never place off-white text on pink, green, or amber. Never place dark text on blue.

### Accent rules

- Pink is the default. If a slide needs one accent, it is pink.
- Up to three accents on a slide. Map slides may use four: amber, blue, green, and a pink highlight.
- Large flat blocks of accent color are welcome on the statement slide and behind big numbers. Elsewhere accents go on fills, strokes, and highlights, not on backgrounds.
- Highlight and dim: when one element is the point, it takes a pink fill with dark text or a 3 px pink border, and its siblings drop to the Dimmed token.
- Series order for stat rows and tiles is fixed: pink, blue, green, amber.
- Red is not in the palette. Strikes, cross-outs, and failures use pink.

### Fixed color keys

These recur across slides and must not vary.

| Structure | Key |
|---|---|
| The map (slides 5, 14, 19) and area names on slide 16 | Model at the center: amber. Loop ring: blue. Harness ring: green. Operations ring: muted off-white. |
| Autonomy spectrum (slide 4) | Four stop cards on the surface color. The fourth stop highlighted in pink; the first three dimmed. |
| Tool tiers (slide 8) | Read-only: blue. Reversible: muted off-white. Consequential and external: amber. |
| Mistake and antidote columns (slide 17) | Mistake column text in amber. Antidote column text in green. |
| Contrast card (slide 9) | Two columns on one surface card; headings in blue and green at 24 pt bold or larger. |
| Checklists (slides 15, 18) | Green check glyph, off-white text. |
| Diagram nodes | See the node class table under Components. |

## Typography

Font family: Helvetica. Prefer Helvetica Neue where available, falling back to Helvetica, then Arial. Monospace: Menlo, falling back to SF Mono, then any monospace.

| Element | Face and weight | Size (16:9 slide) | Notes |
|---|---|---|---|
| Statement headline | Helvetica Bold | 64 to 72 pt | Centered. Slide 1 before the build; the closing line on slide 19. |
| Slide title | Helvetica Bold | 40 to 44 pt | Tight letter spacing, left aligned. Off-white by default; pink when the title is the point. |
| Big number | Helvetica Bold | 96 pt or larger | Pink. One line of explanation below in body size. |
| Body text | Helvetica Regular | 20 to 24 pt | Line height about 1.4. Max two levels of bullets. |
| Mono display | Menlo Regular | 20 to 40 pt | The slide 3 headline quotation; the tool names look up requester, search policy, check entitlements, request approval, notify requester, grant entitlement, and revoke; field names on slide 12; tags. Not for code; there is none. |
| Captions and labels | Helvetica Regular or Light | 16 pt | Muted text color. Diagram labels are 16 pt minimum. |
| Attribution | Helvetica Regular or Italic | 16 pt | Muted. Quotation sources, stat sources, the small-type attributions on slides 2, 3, and 15. |
| Slide number and footer | Helvetica Regular | 14 pt | Muted. The only text allowed below 16 pt. |

- Sentence case is the default because every headline in the deck is written that way. Title Case is allowed for a label or a tag, not for headlines.
- Italics are for attributed quotations only. Emphasis inside body text uses bold or pink.
- Virtual delivery: viewers watch on their own screens, often in a small window. Nothing the audience must read goes below 16 pt, the slide 18 resource list included.
- Keep body text to roughly 40 words per slide. Slide 18 breaks this on purpose.

## Layout

- Aspect ratio 16:9. Dark background on every slide.
- Margins of about 6% of slide width on all sides; content sits on a 12-column grid.
- Left-aligned text by default. Center only on the statement slide and when the map stands alone.
- One idea per slide. Prefer a diagram or a single large number over a paragraph.
- Slide number bottom right in muted text. Talk title bottom left in muted text. No conference logo or theme line.
- Two-column split is 5/7 (text left, diagram right) by default. Slide 8 uses 8/4 (table left, sandbox strip right).
- Builds: the scripts mark them [BUILD]. Each build is a simple appear or a short fade. No flying, bouncing, or zooming.
- Corner radius 8 px on cards, tiles, and nodes. Strokes 2 px on diagram shapes, 3 px on highlight borders, 1 px hairline on dividers.

## Components

Each component names the slides that use it. "Not for" says where a similar-looking element should use something else.

- **Statement slide**: one headline alone, centered, 64 to 72 pt. Default is off-white on the background; optional full-bleed pink with dark text. On build the headline shrinks to the top and body text appears beneath. For: slide 1, and the thesis pair with the closing line on slide 19. Not for: section breaks; the deck has none and bridges by script.
- **Title + body**: title top left, body, table, or diagram below. For: most slides. Not for: a slide whose only content is a headline; use the statement slide.
- **Two column**: text left, diagram right, 5/7 or 8/4. For: slides 8, 9, 10, 13, 18. Not for: two lists of equal weight; use a table.
- **Card and card row**: surface fill, hairline border, 8 px radius, title in bold body size, two or three lines beneath. Variants: highlighted (pink border, or pink fill with dark text) and dimmed (Dimmed token for border and text). For: the three categories on slide 2 (third card dimmed) and the four stops on slide 4 (the fourth stop highlighted). Not for: metrics; use a stat tile.
- **Contrast card**: one surface card split into two columns with a hairline between, headings in blue and green at 24 pt bold or larger (blue on the surface color is 3.3:1, large text only), body in off-white. For: verification versus evaluation on slide 9. Not for: mistakes and antidotes; that is a table.
- **Table**: hairline row dividers, no vertical borders, header row bold. Variants: highlighted row (pink border, slide 16); color-coded cells (tier cells on slide 8 and area names on slide 16 in their fixed key); tinted columns (slide 17, mistake text amber, antidote text green, surface fill unchanged). Rows may build one at a time. For: slides 8, 16, 17. Not for: a list of resources; use the resource list.
- **Checklist**: green check glyph at the left, off-white text at body size, one item per line. For: the seven carried-over skills on slide 15 and the four first-project steps on slide 18. Not for: mistakes or warnings; those are a table.
- **Big number**: one figure at 96 pt or larger in pink, one line of explanation in body size. Variant: arithmetic row, three surface boxes and an equals sign, built left to right (slide 3: three 75% boxes to 42%). For: slides 3 and 15 ("about 80%"). Not for: a set of three metrics; use stat tiles.
- **Stat tile**: surface card, number in an accent in series order, one-line label, attribution in muted 16 pt. Three across. For: the adoption numbers on slide 11. Not for: a single headline number; use a big number.
- **Callout**: surface card with a 3 px left border in the accent that matches its meaning: amber for a caveat, green for a tip, pink for a tag or a highlighted takeaway. Text in off-white. For: the "hardest area" tag on slide 16 and the "about 80%" callout on slide 15. Not for: quotations; use the quote component.
- **Quote**: the quotation in mono display or italic Helvetica, the attribution beneath in muted 16 pt. For: the slide 3 headline, the footer quotation on slide 15, the attributed row on slide 17. Not for: the thesis; that is body text set as a pair.
- **Resource list**: two columns of grouped items, group headings in an accent, items at 16 pt in off-white. For: slide 18 only. Not for: anything else; it is the one dense slide.
- **Ring map**: the deck's signature asset. Three concentric rings around a center: the model at the center (amber fill, dark text), the loop as the innermost ring (blue), the harness as the middle ring (green), the outer ring for evaluation and operations (muted off-white). Ring labels are dark on the colored rings and off-white on the neutral ring. Three variants: base (slide 5, built ring by ring), labeled (slide 14, every element named, no build), bare (slide 19, smaller, no labels). Draw it once and reuse it; the three must be recognizably the same drawing. Area names elsewhere (slide 16) take the color of their ring.
- **Diagram nodes**: for Mermaid flowcharts and any drawn box diagram. Node fill and text follow this class table, which replaces the pastel `classDef` colors in the slide files.

  | Class | Fill | Text | Used for |
  |---|---|---|---|
  | model | Amber `#fdad00` | `#14161c` | The model node on slides 5 and 14. |
  | step | Blue `#1064f8` | `#fffcf5` | Ordinary steps: gather context, act through a tool, verify, and the run steps on slides 10 and 11. |
  | wait | Amber `#fdad00` | `#14161c` | The CI and review wait on slide 10. |
  | strike | Pink `#f948be` | `#14161c` | The session-end marker on slide 10; any failure or cross-out. |
  | ops | Off-white `#fffcf5` | `#14161c` | Outer-ring nodes (evaluate, observability, security, governance) on slides 5 and 14. |
  | container | Surface `#1c1f27` | `#fffcf5` label | Subgraphs: 2 px stroke in the ring color (blue for the loop, green for the harness, muted off-white for operations). |

  Connectors are muted off-white at 2 px; an edge that is the point (the loop-back, the resume) takes an accent. Dotted edges stay dotted. Labels are 16 pt minimum. For: slides 5, 10, 11, 14. Not for: cards; cards have hairline borders and no accent fill unless highlighted.
- **Spectrum**: one horizontal line across the slide in muted off-white, labeled at the ends (workflow at the left, agent at the right), four stop cards on it built left to right, the fourth stop highlighted in pink and the rest dimmed. Two definitions above in body size. For: slide 4 only.
- **Drawn diagram rules**: for the one-offs that are neither Mermaid nor cards: the three-word cycle and eval gate on slide 6, the segmented budget bar on slide 7, the sandbox strip on slide 8, the ladder on slide 9, the four-dial gauge on slide 10, the four-column scorecard strip on slide 11, the record card on slide 12, the triangle and identity chain on slide 13. Boxes on the surface color with hairline or 2 px accent strokes. Cross-hatching is allowed as an amber pattern on a surface fill (the untrusted segments on slide 7). Markers, stamps, and direction-of-argument arrows in pink. Crossed-out elements in pink. Greyed example values in the Dimmed token. The gauge dials are line drawings in off-white with pink needles.
- **Prop card**: a surface card styled to look like a document, with an amber stamp. For: the deprecation notice on slide 6 only.
- **Code block**: the loop as code, once. Menlo at 16 pt on a surface-filled block with a hairline border and 8 px radius, code in off-white, comments in the muted token, no syntax coloring beyond that. About ten lines; never scrolls or shrinks below 16 pt. For: the loop on slide 10 only. Not for: quotations (use the quote component) or the monospace headline on slide 3 (that is a quote).

## Iconography, imagery, and decoration

- Icons come in two styles; pick one per slide. Filled icons in an accent color (the key on slide 8; the pull request, gate, package, speech bubble, and ledger on slide 13; the status badge on slide 12; checks; dials). Or line icons at 2 px in off-white. Icons never carry text; a caption in muted 16 pt sits beside them.
- Diagrams use the node class table and the drawn diagram rules above.
- One decorative shape per slide is allowed: a flat circle or ring in an accent, echoing the map, behind a big number or on the statement slide. Never behind body text, tables, or diagrams. Flat color only, no gradient, no glow.
- Patterns are limited to cross-hatching inside a diagram element. No background patterns.
- No photography, no stock imagery, no screenshots. The deck has none.

## Things to avoid

- Gradients, drop shadows, and glow effects.
- Pure black or pure white anywhere. Red anywhere.
- A light background on any slide.
- The conference logo, name, or theme line on any slide.
- Off-white text on pink, green, or amber. Dark text on blue. Blue text below 24 pt regular or 19 pt bold.
- More than three accents on a non-map slide; more than four on a map slide.
- More than one decorative shape per slide; any decorative shape behind text, a table, or a diagram.
- Text the audience must read below 16 pt; anything below 14 pt.
- Motion effects on builds.
- Code blocks, charts, and section divider slides. The deck has none; do not add them.

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
