# The "Anatomy of an agent" diagram versus the map

**Date:** 2026-09-14 | **Status:** assessment, no change made | **Diagram:** `anatomy-of-an-agent-diagram.png` in this folder

## The question

Could the "Anatomy of an agent" diagram replace the ring map on slides 5, 14, and 19?

## The diagram, in words

Title "Anatomy of an agent," subtitle "Model + Harness + Instructions + Goal." One outer box labeled Agent, captioned "a combination that acts." Inside it, a left column of three stacked tiles joined by plus signs: Model ("decides what to do"), Instructions ("system prompt, config"), Goal ("what to accomplish"). Beside them, a larger box labeled Harness ("everything around the model") holding four equal tiles: Loop ("act and observe"), Tools ("files, shell, web"), Context ("window contents"), Guardrails ("limits on actions"). Beneath the agent box, one bar: "Run until a stopping condition is met." Dark base, green for the model, purple for the harness.

## Bottom line

The diagram is a clean parts list for a coding agent, and it agrees with the talk on the headline claim that an agent is a model plus a harness. It cannot replace the map. It has no outer ring, so four of the eight promises in the session description have nowhere to land. It has no radial order, so the section's spine of scope phrases has nothing to point at. And it makes the loop one tile inside the harness and drops verification, which is a whole area of the talk.

## Where they agree

- **Osmani's line.** The diagram's harness caption, "everything around the model," is that line restated. Slide 5 says it verbatim: "Agent = Model + Harness. If you're not the model, you're the harness" (Addy Osmani, April 2026).
- **The specimen.** "Files, shell, web" is the six-tool set of slide 8 in three words. This is a drawing of a coding agent, which is the machine the section takes apart.
- **What lives in the harness.** Both put tools, context, and limits on actions inside the harness's territory. The map goes one level finer and makes context and tools steps of the loop.
- **The stopping condition.** The bottom bar matches the harness's job on slide 5 ("decides when the run stops") and the while condition in the code on slide 10.

## Where they differ

- **Topology.** The diagram is containment: the agent holds four parts, the harness holds four peer tiles. The map is scope by radius: one call, one action, one run, many runs, production. Section 2 walks that radius outward, a decision recorded in outline-v4.md Appendix F. Four equal tiles give the walk nothing to walk.
- **The loop.** In the diagram the loop is one harness tile beside tools, context, and guardrails, with two steps, act and observe. In the talk the loop is the idea and the harness is the code that runs it. Context and tools are steps of the loop, and verify is the third step. Verify is slide 9 and the seed slide 10 collects. The diagram has no verify, and its two-step vocabulary is not the sourced four-step loop (Anthropic, "Effective context engineering for AI agents," 2025-09-29: gather context, take action, verify work, repeat).
- **The outer ring.** The diagram stops at the agent's box. Evaluate, observe, secure, and govern are absent. That ring is the demo-versus-production argument, and the coverage check on slide 14 fails without it.
- **State and budgets.** The diagram's harness has no state. The progress file, the journal, the durable wait, and the budget gauge are the whole of slide 10 and carry the cost-and-latency promise.
- **Instructions and goal as top-level pillars.** The diagram gives them the same rank as model and harness. The talk absorbs both into context on slide 7. The instructions file is exactly the user-side artifact that slide 5 names as configuring rather than writing the harness. Promoting it to a peer of the harness blurs the one line the talk draws.
- **The model's role.** "Decides what to do" is the user's view of the model as the brain. The talk's view is a component you select, measure, and replace, drawn at the center so everything else is visibly harness.

## Element by element

| Diagram element | Where it lives in the talk | Note |
|---|---|---|
| Model: decides what to do | Center of the map; slide 6 | Component, not brain |
| Instructions: system prompt, config | One segment of the context bar, slide 7 | Absorbed on purpose |
| Goal: what to accomplish | "The task" on slides 7 and 10 | Not on the map at all |
| Harness: everything around the model | Middle ring; slides 5 and 10 | Same definition |
| Loop: act and observe | Innermost ring, four steps | Drops gather and verify |
| Tools: files, shell, web | Loop step; slide 8 | Same tool set |
| Context: window contents | Loop step; slide 7 | Same |
| Guardrails: limits on actions | Slides 8 and 13 | Five minutes compressed to a tile |
| Run until a stopping condition is met | Slide 5 gloss; slide 10 code | Worth borrowing |
| Absent: state, budgets | Middle ring; slide 10 | |
| Absent: verify | Loop's third step; slide 9 | |
| Absent: evaluate, observe, secure, govern | Outer ring; slides 11 to 13 | Four of eight promises |

## Why the shape matters

The ring map's shape is the section's argument. Radius means scope, and containment means "runs inside." Swap the drawing and you swap the argument: a tile grid says an agent is a bag of parts, a ring says an agent is a call inside an action inside a run inside a production system. The diagram is a parts list; the map is a scope diagram. Both are true, but only one carries the walk.

## Could it replace the map?

No. Three places it could still earn something, in order of fit:

1. **The two-meanings line.** The diagram's left column plus the harness's configuration is what the user supplies. The harness's inside is what the engineer writes. It already separates those visually, so it fits the Q&A preface's fuller version of the trap in `slides/qa.md`. On stage it would be a second system beside the map, which Appendix F ruled out.
2. **Borrow, don't replace.** Put its bottom bar under the harness ring as a caption. Use its icon, label, and two-word gloss tile pattern for the labels on slide 14, where the map is densest and the pptx pills are hardest to read.
3. **Sourcing, if any of it goes on a slide.** The formula model plus harness plus instructions plus goal matches none of the cited decompositions. OpenAI is model, tools, instructions (April 2025). Google is model, tools, orchestration (November 2025). Osmani is model plus harness (April 2026). It would need its own sources line, and "act and observe" has no citation in the research.

## Files consulted

- `slides/02-anatomy.md` (slides 5 and 14, the map of record)
- `outlines/outline-v4.md` §2.0 and Appendix F
- `style/design-brief.md` (the ring map as the deck's signature asset; fixed color keys)
- `deck/NOTES.md` (how the pptx draws the rings)
- `research/synthesis.md` §1 item 1, §2 findings 2 and 3, §3 (harness)
