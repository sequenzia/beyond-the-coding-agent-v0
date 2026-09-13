# design-sync notes

Repo-specific facts for re-syncing this design system to Claude Design. Read this before running the converter.

## What this sync is

- Tokens and guidelines only. There are no React components. The design agent builds slides from its own primitives using the tokens in `style/tokens.css`, the rules in `style/design-brief.md` (shipped as `guidelines/design-brief.md`), and `.design-sync/conventions.md` (stitched into the top of the generated README).
- `style/` is the package. `style/index.js` is an intentionally empty entry: the converter needs a JavaScript entry to bundle, and `cssEntry: tokens.css` is what makes it take the tokens-only branch. `[ZERO_MATCH] no component exports — treating as tokens-only DS` in the build log is expected.
- `style/tokens.css` is generated from the `:root` block in `style/design-brief.md` by the `buildCmd` in `config.json`. Do not edit it by hand. Edit the brief, re-run the command, then run the converter.

## Build environment

- Converter deps live in `.ds-sync/` (gitignored). From inside `.ds-sync/`: `npm i esbuild ts-morph @types/react playwright react react-dom`, then `npx playwright install chromium`. Validate hard-fails with `[RENDER_SKIPPED]` without the Chromium build that matches the installed Playwright, even with zero previews.
- Invocation from the repo root: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules .ds-sync/node_modules --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json`. The entry path comes from `config.json`; no `--entry` flag needed.
- The generated README body below the header is converter boilerplate written for component libraries ("All 0 components are the real upstream code", a `window.SweToAieDeck.*` loading snippet). The header states the truth first and is what the design agent reads first. Changing the body would mean forking `lib/emit.mjs`, which is the app's output contract; do not.
- `[DTS_REACT] @types/react not found` in the build log is benign. The .d.ts loader searches `style/node_modules` and its ancestors, never `.ds-sync/node_modules`. With zero components nothing depends on it.

## Known warnings (validate)

- None on the first sync (2026-09-13). Helvetica, Menlo, SF Mono, and Arial are system families the font check already treats as generic, so `[FONT_MISSING]` does not fire.

## Project

- Claude Design project "Beyond the Coding Agent deck", id `495a27f2-1951-4f4e-bed0-a950e86a333b` (also in `config.json`). First synced 2026-09-13 with 10 files: bundle, styles, vendored React, README, two guideline files, sentinel, anchor.

## Re-sync risks

- `.design-sync/conventions.md` restates rules from the brief (tokens, text on fills, accent rules, type scale, layout). When the brief changes, re-read the header against it. The token-name check only catches renamed tokens, not changed rules.
- The header's example uses the slide 4 stop-card wording from `outlines/outline-v2.md`. If that wording changes, update the example.
- Type sizes in the header assume a 960 × 540 pt slide rendered at 1920 × 1080 px, so 1 pt = 2 px. That conversion is an assumption of this sync, not something the brief states.
- Playwright pins a Chromium build per version. A fresh `.ds-sync/` install may need `npx playwright install chromium` again.
