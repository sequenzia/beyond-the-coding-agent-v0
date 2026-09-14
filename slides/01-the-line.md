# Section 1: The Line

**Slides:** 2 through 4 (3 slides) | **Approximate time:** 3 minutes 45 seconds | **Outline:** outline-v4.md §1

**Goal:** Define the discipline, explain why it is distinct, and set up the spectrum the specimen sits at the end of.

**Specimen in this section:** Introduced on slide 4 as the fourth stop of the coding agent's own lineage: a completion, chat over the codebase, explore or plan mode, the agent behind the permission prompt. Every later section refers back to this slide's wording.

**Bridge in:** "This talk is about crossing to that side. We are going to take that agent apart." | **Bridge out:** "That fourth stop is the machine we take apart for the next nineteen minutes."

**Cut order if long:** Nothing in this section is on the outline's cut list. If forced: the job-postings paragraph on slide 2 (10 seconds), then the Thoughtworks sentence on slide 3 (10 seconds).

**Sources convention:** Every number and quotation traces to `research/synthesis.md` §4 or a track report, with attribution and date. Flags: CAVEAT (say so on stage), SECONDARY (primary unreachable; keep the flag), NOT IN SYNTHESIS (traced to a track report, not in the §4 tables).

| Slide | Title | Time | Words |
|---|---|---|---|
| 2 | Same tools, different deliverable | 1:15 | 190 |
| 3 | Why it is a distinct discipline | 1:15 | 190 |
| 4 | The autonomy spectrum and the coding agent's lineage | 1:15 | 190 |

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

### Slide 4: The autonomy spectrum and the coding agent's lineage

**Outline:** 1.3 | **Time:** 1:15 | **Script target:** about 190 words

**On slide**

Headline: Start with a workflow. Add autonomy when it demonstrably improves outcomes.

- Workflow: LLMs and tools orchestrated through predefined code paths.
- Agent: LLMs dynamically direct their own processes and tool usage.

Then the spectrum, built one stop at a time:

| One call | A workflow | Agent, read-only tools | Agent, tiered actions |
|---|---|---|---|
| A completion, or one prompt that returns a snippet | Chat over your codebase: retrieve the relevant files, answer, on a fixed path | Explore or plan mode: the model chooses which files to read and proposes a patch | Edits files, runs commands behind a permission prompt, pushes when allowed |
| You paste it | You decide and edit | You approve and apply | The agent, within tiers |

**Visual**

Anthropic's two definitions sit at the top, attributed (December 2024). Beneath them a horizontal line runs from "workflow" on the left to "agent" on the right. Four stops on the line, each a card with two rows: what it is, and who acts. The cards build left to right on [BUILD]. When the fourth stop appears it takes the highlight and the other three dim, because the fourth stop is what the rest of the talk takes apart. The card wording here is the wording every later slide uses.

**Specimen**

Introduced here as the fourth stop. The four stops are the coding agent's own lineage, which the audience lived from the first completion to the agent behind the permission prompt. No product is named; the stops are described by what they do and who acts.

**Bridge**

"That fourth stop is the machine we take apart for the next nineteen minutes."

**Script**

Now the spectrum every guide agrees on. Anthropic's definitions, December 2024. Workflows are "systems where LLMs and tools are orchestrated through predefined code paths." Agents are "systems where LLMs dynamically direct their own processes and tool usage."

And the rule: start with a workflow. Add autonomy only when it demonstrably improves outcomes. Anthropic's own words: "For many applications, optimizing single LLM calls with retrieval and in-context examples is usually enough."

You have lived this spectrum. [BUILD] One call. A completion, or one prompt that hands back a snippet. You paste it. [BUILD] A workflow. Chat over your codebase: retrieve the relevant files, answer, on a fixed path. That was retrieval-augmented generation before it had a name. You decide and edit. [BUILD] An agent with read-only tools. Explore or plan mode: the model chooses which files to read and proposes a patch. You approve and apply. [BUILD] An agent with tiered actions. It edits files, runs commands behind a permission prompt, and pushes when allowed.

The industry did what the rule says. It started with a workflow and added autonomy one tier at a time. That fourth stop is the most demanding expression of this discipline. And it is the machine we take apart for the next nineteen minutes.

**Cut if running long**

Drop the "For many applications" quotation. Saves about 8 seconds. Keep the rule before it; slide 17 depends on it.

**Sources**

- Workflows are "systems where LLMs and tools are orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage." → synthesis.md §3 (Anthropic, "Building effective agents," 2024-12-19).
- Add complexity "only when it demonstrably improves outcomes" → track-b-enterprise-agents.md §2 (Anthropic, 2024-12-19).
- "For many applications, optimizing single LLM calls with retrieval and in-context examples is usually enough." → track-d-transition.md §3 (Anthropic, 2024-12-19).
- The four stops as the coding agent's lineage → outlines/outline-v4.md, "The Specimen." The talk's own framing, backed by Karpathy's autonomy slider (synthesis.md §1 item 7; track-a-discipline.md §2.1, June 2025) and by the field's sequence from completion to agent (track-a-discipline.md §2.2, vocabulary timeline). No external source states the four stops as such. NOT IN SYNTHESIS §4.
- Chat over the codebase as retrieval-augmented generation → synthesis.md §1 "What v1 gets right" (RAG as one technique, now infrastructure). The placement on the spectrum is the talk's own.
- "the machine we take apart" → synthesis.md §2 finding 10 (the coding agent as the bridge; every attendee has touched a harness from the user side).
