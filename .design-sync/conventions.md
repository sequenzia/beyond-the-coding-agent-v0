# Beyond the Coding Agent: slide design system

Tokens and rules for one 19-slide, 16:9 talk deck shown over a video call, on a dark ground with bright accents. There are **no React components** in this design system. Build every slide from your own primitives and style them only with the tokens below. Read `guidelines/design-brief.md` before composing any slide: it is the source of truth for the component vocabulary (statement slide, card row, contrast card, table, checklist, big number, stat tile, callout, quote, resource list, ring map, diagram nodes, spectrum), the fixed color keys per slide, and the banned list.

## Setup

`styles.css` imports `_ds_bundle.css`, which defines every token on `:root`. Nothing applies the ground for you: give each slide `background: var(--color-base); color: var(--color-text); font-family: var(--font-sans)`. Slides are 16:9 at 1920 × 1080 px. Never a light background, never pure black or pure white, never red.

## Tokens (the complete set)

| Token | Value | Use |
|---|---|---|
| `--color-base` | `#14161c` | Slide background. Also the dark text on pink, green, amber, and off-white fills. |
| `--color-text` | `#fffcf5` | Primary text. The text on blue fills. |
| `--color-muted` | off-white at 60% | Captions, attributions, footers, slide numbers, connectors, the operations ring. |
| `--color-dimmed` | off-white at 40% | Siblings of a highlighted element, greyed example values. |
| `--color-surface` | `#1c1f27` | Cards, tiles, table rows, diagram containers. |
| `--color-border` | off-white at 12% | Hairline rules, table borders, card outlines. |
| `--color-primary` | `#f948be` pink | The hero: big numbers, the highlighted card, row, or node, strikes, statement backgrounds. |
| `--color-secondary` | `#1064f8` blue | Structure: loop ring, step nodes, connectors that matter, read-only tool tier. |
| `--color-positive` | `#01b66d` green | Harness ring, checklist checks, the antidote side, tips. |
| `--color-caution` | `#fdad00` amber | The model, waits, warnings, the consequential tool tier, caveats. |
| `--font-sans` | Helvetica Neue stack | All text. |
| `--font-mono` | Menlo stack | Quotations, tool names, field names, tags. Never code blocks; the deck has none. |
| `--radius` | 8px | Cards, tiles, nodes. |
| `--stroke`, `--stroke-highlight`, `--stroke-hairline` | 2px, 3px, 1px | Diagram shapes, highlight borders, dividers. |

## Color rules

- Pink is the default accent. At most three accents on a slide; four only on the map slides.
- Text on fills: `--color-base` on pink, green, amber, and off-white. `--color-text` on blue, and only on blue. Blue text on the base only at 24 pt regular or 19 pt bold and up.
- Highlight and dim: the element that is the point takes a pink fill with dark text or a `--stroke-highlight` pink border; its siblings switch text and border to `--color-dimmed`.
- Series order for stat rows and tiles: pink, blue, green, amber.
- Strikes, cross-outs, and failures are pink. No gradients, drop shadows, or glows.

## Type scale (pt on a 960 × 540 pt slide; 1 pt = 2 px at 1920 × 1080)

Statement headline 64 to 72 pt bold, centered. Slide title 40 to 44 pt bold, left, tight tracking. Big number 96 pt or larger, bold, pink. Body 20 to 24 pt regular, line height 1.4, at most two bullet levels. Captions, labels, and attributions 16 pt in `--color-muted`. Slide number and footer 14 pt muted, the only text below 16 pt. Sentence case for headlines. Italics for attributed quotations only; emphasis is bold or pink.

## Layout

Margins about 6% of slide width on a 12-column grid. Left-aligned by default; center only the statement slide and a lone map. Two-column split 5/7, text left and diagram right. Slide number bottom right and talk title bottom left, both muted. One idea and about 40 words of body per slide. No section-divider slides, no code blocks, no charts, no photos.

## Example: the autonomy spectrum's four stop cards, v3 highlighted

```jsx
const card = { background: 'var(--color-surface)', border: 'var(--stroke-hairline) solid var(--color-border)', borderRadius: 'var(--radius)', padding: 32, color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: 40, lineHeight: 1.4 };
const dim = { ...card, color: 'var(--color-dimmed)', borderColor: 'var(--color-dimmed)' };
const hot = { ...card, border: 'var(--stroke-highlight) solid var(--color-primary)' };
<div style={{ display: 'flex', gap: 32 }}>
  <div style={dim}><b>v0, a single call</b><br />A human sends it.</div>
  <div style={dim}><b>v1, a workflow</b><br />A human decides and acts.</div>
  <div style={dim}><b>v2, an agent with read-only tools</b><br />A human approves and executes.</div>
  <div style={hot}><b>v3, an agent with tiered actions</b><br />The agent, within tiers.</div>
</div>
```
