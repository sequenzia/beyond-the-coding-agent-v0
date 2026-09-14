# Section 1: The Line

**Slides:** 2 through 4 (3 slides) | **Approximate time:** 4 minutes | **Outline:** outline-v3.md §1

**Goal:** Define the discipline, explain why it is distinct, and set up the spectrum the running example moves along.

**Running example in this section:** Introduced on slide 4. The access agent and its four versions, v0 to v3, are placed on the autonomy spectrum. Every later section refers back to this slide's wording.

**Bridge in:** "This talk is about crossing to that side." | **Bridge out:** "v3 is the same shape as the coding agent you used this morning."

**Cut order if long:** Nothing in this section is on the outline's cut list. If forced: the job-postings paragraph on slide 2 (10 seconds), then the Thoughtworks sentence on slide 3 (10 seconds).

**Sources convention:** Every number and quotation traces to `research/synthesis.md` §4 or a track report, with attribution and date. Flags: CAVEAT (say so on stage), SECONDARY (primary unreachable; keep the flag), NOT IN SYNTHESIS (traced to a track report, not in the §4 tables).

| Slide | Title | Time | Words |
|---|---|---|---|
| 2 | Same tools, different deliverable | 1:15 | 190 |
| 3 | Why it is a distinct discipline | 1:15 | 190 |
| 4 | The autonomy spectrum and the access agent | 1:30 | 225 |

---

### Slide 2: Same tools, different deliverable

**Outline:** 1.1 | **Time:** 1:15 | **Script target:** about 190 words

**On slide**

Headline: Same tools, different deliverable.

- Software engineers enhanced by AI
- Software engineers building AI products
- Non-human software engineers

Footer: The deliverable is the test. Does the shipped system call a model at runtime?

**Visual**

Three cards in a row, one per category, attributed in small type to swyx (2023, restated 2025). The first two cards are full weight; the third is dimmed, since the talk is not about it. An arrow runs from the first card to the second, labeled "this talk." The footer line sits beneath the cards and is the only other text on the slide. No build.

**Script**

swyx, who named this field and runs its conference, draws three categories. Software engineers enhanced by AI. Software engineers building AI products. And non-human software engineers, the agents themselves. This talk is about moving from the first to the second. [POINT: arrow]

What does the second group build? Chip Huyen's definition: products and systems on foundation models that someone else made. Machine learning engineers train models. AI engineers adapt them. Karpathy's line, quoted by swyx: "One can be quite successful in this role without ever training anything." That is the boundary with ML engineering, and it is the last time I will mention fine-tuning until the end.

So how do you tell the two groups apart? Not by the tools. Both use the same coding agent. The test is the deliverable. [POINT: footer] If the system you ship calls a model at runtime, it inherits non-determinism, evaluation, cost, and safety as engineering problems. That is the whole difference.

And it is what the job postings say. Real 2026 postings from OpenAI and Anthropic list "evaluation frameworks" and "agent development" as required. Not agent use. Agent development.

**Cut if running long**

Drop the final paragraph on job postings. Saves about 10 seconds. The same fact returns on slide 18.

**Sources**

- Three categories: software engineers enhanced by AI, software engineers building AI products, non-human software engineers → track-a-discipline.md §2.1 (swyx, RedMonk conversation, July 23, 2025; first drawn at the 2023 AI Engineer Summit). Also synthesis.md §2 finding 1. NOT IN SYNTHESIS §4 tables; a definition, not a statistic.
- "products and systems on foundation models made by others" → synthesis.md §3 (Huyen, 2025). Huyen's own words: models "typically developed by research labs and made available as a service" → track-a-discipline.md §2.1 (Huyen with Orosz, May 20, 2025).
- "One can be quite successful in this role without ever training anything." → track-d-transition.md §3 (Karpathy, quoted by swyx, 2023).
- "evaluation frameworks" and "agent development" required, not preferred → track-d-transition.md §1 finding 4 (OpenAI Applied AI Engineer posting; Anthropic Forward Deployed Engineer, Applied AI posting; both 2026). Verbatim from the Anthropic posting: "Production experience with LLMs including advanced prompt engineering, agent development, evaluation frameworks" → track-d-transition.md §2.1.
- "Same tools, different deliverable" → track-d-transition.md §1 finding 9 and §5. The track's framing, adopted by the talk.

---

### Slide 3: Why it is a distinct discipline

**Outline:** 1.2 | **Time:** 1:15 | **Script target:** about 190 words

**On slide**

Headline: "Demo is works.any(). Product is works.all()."

- Jagged. Non-deterministic. Amnesiac at every context boundary.
- 75% × 75% × 75% = 42%
- Retaining principles, relinquishing patterns.

**Visual**

The headline is Karpathy's line in monospace, attributed. Beneath it, the three psychology words in a single row, small. Then the arithmetic as three boxes, each reading "75%," with multiplication signs between them and "= 42%" at the end. The boxes build one at a time on [BUILD], so the audience watches the number fall. Attribution under the boxes: Anthropic, January 2026. The Thoughtworks phrase sits in the footer with attribution. If the speaker prefers to speak the arithmetic rather than show it, the boxes collapse to one line of text.

**Script**

Why is this a distinct discipline and not just software engineering with an API call in it? Start with the model's psychology, because the engineering that follows needs a reason. Karpathy, June 2025: these models are jagged, brilliant at one thing and wrong at the thing next to it. They are non-deterministic; the same input does not give the same output. And they are amnesiac at every context boundary. Every new session starts from nothing.

Karpathy again, on the gap between prototype and production: "Demo is works.any(). Product is works.all()." [POINT: headline] Your demo has to work once. Your product has to work every time.

Here is the arithmetic that makes that real. [BUILD] An agent that succeeds 75 percent of the time per attempt. [BUILD] Three attempts in a row. [BUILD] 42 percent. Anthropic published that in January. Reliability, not capability, is the enterprise problem, and the field's own data says capability gains have not delivered it.

So traditional software engineering remains the foundation. It is no longer sufficient. Thoughtworks put it as "retaining principles, relinquishing patterns." The principles are old. The failure modes are new.

**Cut if running long**

Drop the Thoughtworks sentence and end on "capability gains have not delivered it." Saves about 10 seconds. The Thoughtworks line returns in the Q&A answer to "Isn't this just software engineering?"

**Sources**

- Jagged, amnesiac → track-a-discipline.md §2.1 (Karpathy, "Software in the era of AI," YC AI Startup School, June 17, 2025). "Jagged intelligence" and "anterograde amnesia" are his terms; "non-deterministic" is the track's gloss. Paraphrased on slide and in script, no quotation marks. NOT IN SYNTHESIS §4 tables.
- "Demo is works.any(), product is works.all()." → track-a-discipline.md §3 (Karpathy, June 17, 2025).
- 75 percent per attempt, 42 percent for three consecutive passes → synthesis.md §4 safe (Anthropic, "Demystifying evals for AI agents," 2026-01-09).
- "capability gains have not delivered [reliability]" → synthesis.md §1 item 8 (Princeton reliability study, June 2026: "reliability gains lag behind accuracy improvements" over 24 months of model releases). NOT IN SYNTHESIS §4 tables. Paraphrased; do not quote the study's number.
- "retaining principles, relinquishing patterns" → track-a-discipline.md §4 (Thoughtworks Technology Radar vol. 34, April 2026). "The principles are old, the failure modes are new" is the track's gloss, owned by the talk.

---

### Slide 4: The autonomy spectrum and the access agent

**Outline:** 1.3 | **Time:** 1:30 | **Script target:** about 225 words

**On slide**

Headline: Start with a workflow. Add autonomy when it demonstrably improves outcomes.

- Workflow: LLMs and tools orchestrated through predefined code paths.
- Agent: LLMs dynamically direct their own processes and tool usage.

Then the spectrum, built one stop at a time:

| v0, a single call | v1, a workflow | v2, agent, read-only tools | v3, agent, tiered actions |
|---|---|---|---|
| Classify the request and draft a reply | Retrieve policy, look up entitlements, recommend, on a fixed code path | The model chooses which lookups to run and proposes an action | Grants low-sensitivity access itself, requests approval for elevated, escalates the rest |
| A human sends it | A human decides and acts | A human approves and executes | The agent, within tiers |

**Visual**

Anthropic's two definitions sit at the top, attributed (December 2024). Beneath them a horizontal line runs from "workflow" on the left to "agent" on the right. Four stops on the line, each a card with two rows: what it is, and who acts. The cards build left to right on [BUILD]. When v3 appears it takes the highlight and the other three dim, because v3 is what the rest of the talk builds. The card wording here is the wording every later slide uses.

**Running example**

Introduced here. The access agent resolves employee access requests end to end, correctly, with human approval where policy requires it. No baseline numbers; where a figure would go, the script says "your current median resolution time."

**Bridge**

"v3 is the same shape as the coding agent you used this morning."

**Script**

Now the spectrum every guide agrees on. Anthropic's definitions from December 2024 are the ones the field uses. Workflows are "systems where LLMs and tools are orchestrated through predefined code paths." Agents are "systems where LLMs dynamically direct their own processes and tool usage." The difference is who decides what happens next: your code, or the model.

And the rule: start with a workflow. Add autonomy only when it demonstrably improves outcomes. Anthropic's own words: "For many applications, optimizing single LLM calls with retrieval and in-context examples is usually enough."

Here is the example we build for the rest of the talk. Employees ask for access to systems and data all day. "I need read access to the billing database for the Q3 audit." Today a human reads that, checks policy, looks up what you already have, asks your manager, grants it, and replies. You have filed one of these. You have waited.

[BUILD] v0, a single call. Classify the request and draft a reply. A human sends it. [BUILD] v1, a workflow. Retrieve policy, look up entitlements, produce a recommendation, on a fixed code path. A human decides. [BUILD] v2, an agent with read-only tools. The model chooses which lookups to run and proposes an action. A human approves. [BUILD] v3, tiered actions. It grants low-sensitivity access itself, requests approval for elevated access, and escalates what it cannot resolve.

v3 is the most demanding expression of this discipline. It is what we build. And it is the same shape as the coding agent you used this morning.

**Cut if running long**

Drop the "For many applications" quotation. Saves about 8 seconds. Keep the rule before it; slide 17 depends on it.

**Sources**

- Workflows are "systems where LLMs and tools are orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage." → synthesis.md §3 (Anthropic, "Building effective agents," 2024-12-19).
- Add complexity "only when it demonstrably improves outcomes" → track-b-enterprise-agents.md §2 (Anthropic, 2024-12-19).
- "For many applications, optimizing single LLM calls with retrieval and in-context examples is usually enough." → track-d-transition.md §3 (Anthropic, 2024-12-19).
- The access agent, v0 to v3 → outlines/outline-v3.md, "The Running Example." The talk's own scenario. No external source, no invented numbers.
- "the same shape as the coding agent you used this morning" → synthesis.md §2 finding 10.
