# deck notes

Read this before editing `beyond-the-coding-agent.pptx` or regenerating it with `build/build.sh`. `build/README.md` says how the generator works; this file records the decisions the deck embodies.

## Shape of the deck

- 19 slides, 20 physical. Slide 1 is two physical slides, the statement alone and then the built version with the thesis, both numbered 1 in the footer. The brief bans motion on builds, and "the headline shrinks to the top" is a motion, so the build is a cut between two slides.
- Every [BUILD] in the scripts is a native PowerPoint click, simple Appear, no motion. Clicks per slide: 3 has 3, 4 has 4, 5 has 2, 6 has 1, 7 has 1, 8 has 2, 9 has 4, 10 has 2, 11 has 2, 13 has 2, 16 has 1, 17 has 7, 19 has 2. The rest have none.
- Slide 4 dims the first three stops with a translucent base-colored overlay that appears on the fourth click; the cards themselves are drawn at full weight.
- Speaker notes on every slide: title, time, word target, the verbatim script with its [BUILD] and [POINT] cues, then the "cut if running long" line. They are read from `slides/*.md` at build time.
- Every diagram is native shapes and stays editable in PowerPoint. Icons (key, pull request, gate, package, speech bubble, ledger, checks) are PNGs rendered from react-icons in the accent colors. The loop on slide 10 is a plain Menlo text box, editable like any other.
- Canvas is 13.333 x 7.5 in (960 x 540 pt), so the brief's point sizes hold. Fonts are Helvetica Neue and Menlo; PowerPoint on Windows substitutes Arial.

## Where the deck departs from the brief, on purpose

- Titles. 40 pt only for short titles. Long sentence titles run at 34 to 36 pt so they hold two lines. Slides 5 and 14 keep the title in the left column at 28 to 30 pt with the map on the right, a 5/7 split, rather than centering the map alone.
- Body. 18 pt on the dense slides (8, 9, 10, 12, 13, 16, 17); 16 pt on slide 18 as the brief allows. Diagram labels are 16 pt everywhere.
- Ring map. Thick ring strokes with node pills straddling them, not filled bands, so labels stay horizontal and dark text never lands on blue. Loop pills are blue with off-white text, per the brief's text-on-fills table, which outranks the "dark on the colored rings" line.
- Slide 10. The session end is a pink "Session ends" marker sitting above the last node of the first row, not a dotted node, so the resume connector never crosses a node. The slide has no bullets: the run across the top, the loop as code at the left below it, and the budget gauge at the right carry the content, because ten lines of Menlo at 16 pt need about eight columns and the brief's 16 pt floor outranks the three-bullet habit. "Merged" is not drawn; the wait node's normal exit is implied and the timeout branch is the one that matters.
- Slide 11. The improvement cycle is an ellipse, not a circle, so six labeled steps fit in the left column.
- Slide 7. The untrusted segments get an amber outline plus an amber hatch band under the label, so the label stays legible.
- Slide 8. The six-tool table sits above the three bullets, not below them, so the table reads as the main content. The tool column is 2.7 in so "Search the codebase" fits on one line in Menlo; "Push, or open a pull request" wraps to two. The policy box in the sandbox strip is labeled "permission system," the coding agent's name for its policy engine.

## Editing

- On-slide text lives in `build/build.js` next to its slide. A wording change in `slides/*.md` reaches the deck only through the speaker notes, so make it in both places.
- Colors, fonts, and type sizes come from `build/lib.js`; the brief is the source of truth for both. Muted, dimmed, and border are the brief's opacities pre-blended onto the base color.
- For QA renders with `build/render.sh`, alias Helvetica Neue to Liberation Sans and Menlo to DejaVu Sans Mono in fontconfig, so line widths match what PowerPoint shows. LibreOffice's default substitute is wider and reports overflow that is not there.
