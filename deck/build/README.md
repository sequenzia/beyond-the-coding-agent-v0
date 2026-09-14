# deck/build

Generates `deck/beyond-the-coding-agent.pptx` from `slides/00-cold-open.md` through `04-close.md` and the rules in `style/design-brief.md`.

## Regenerate

```
sh deck/build/build.sh
```

Needs Node 18 or later and Python 3 (standard library only). The first run installs the npm dependencies listed in `package.json`.

## What each file does

- `build.js`: the slides, one block per slide, in draw order. Layout numbers are inches on a 13.333 x 7.5 in canvas (960 x 540 pt, so the brief's point sizes hold). Speaker notes are pulled from the slide files by `notes.js`.
- `lib.js`: the design tokens from the brief (colors pre-blended for muted, dimmed, and border), text and shape helpers, the footer, the icon renderer, and the ring map used on slides 5, 14, and 19.
- `notes.js`: parses each slide's title, time, script, and first cut from `slides/*.md` for the notes pages.
- `post.py`: runs after pptxgenjs. Adds the click-to-appear builds, turns the hatch shapes on slide 7 into an amber pattern fill, splits speaker notes into paragraphs, and removes the stray paragraph properties pptxgenjs writes inside multi-run paragraphs.
- `render.sh`: optional visual QA that renders every slide to `qa/`. Needs LibreOffice and poppler.

## Builds

A shape whose name starts with `b<N>:` appears on click N of its slide (`b1:` on the first click, `b2:` on the second). Shapes without that prefix are visible from the start. Slide 1 is two physical slides because its headline moves on build and the brief bans motion.

## Editing

- Slide text changed in `slides/*.md` reaches the deck only where `build.js` reads the file: the speaker notes. On-slide text is written in `build.js` next to its slide, so change it there too.
- Colors, fonts, and type sizes come from `lib.js`; the brief is the source of truth for both.
