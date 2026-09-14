# Section 3: Making the Transition

**Slides:** 15 through 18 (4 slides) | **Approximate time:** 5 minutes | **Outline:** outline-v4.md §3

**Goal:** A roadmap concrete enough to act on Monday: what carries over, what to add, the mistakes to skip, the first project, and where to learn.

**Specimen in this section:** Called back on slide 18. The recommended first project is a read-only agent over a repo you own, a pull-request reviewer or an issue-triage agent: retrieval, a recommendation, and a human who decides.

**Bridge in:** "Now, how do you get there from here?" | **Bridge out:** "Which is what the first project is for." Slide 19 closes on the map.

**Cut order if long:** This section is the outline's first cut. Fold slide 15 into slide 16 by saying the transfer list in one sentence at the top of 16 (saves about 40 seconds). Then the market paragraph on slide 18 (about 15 seconds).

**Sources convention:** Every number and quotation traces to `research/synthesis.md` §4 or a track report, with attribution and date. Flags: CAVEAT (say so on stage), SECONDARY (primary unreachable; keep the flag), NOT IN SYNTHESIS (traced to a track report, not in the §4 tables).

| Slide | Outline | Title | Time | Words |
|---|---|---|---|---|
| 15 | 3.1 | What carries over | 0:45 | 110 |
| 16 | 3.2 | What to add, by area | 1:15 | 190 |
| 17 | 3.3 | The mistakes everyone makes first | 1:30 | 225 |
| 18 | 3.4 | Build first, and where to learn | 1:30 | 225 |

---

### Slide 15: What carries over

**Outline:** 3.1 | **Time:** 0:45 | **Script target:** about 110 words

**On slide**

Headline: Most of the job is the job you already have.

- Systems design. API and integration work. Testing discipline. Observability. Security. Product sense. Domain knowledge.
- "AI engineering is just software engineering with AI models thrown in the stack." (Chip Huyen, 2025)

Callout: about 80 percent of the role. One practitioner's estimate, 2026.

**Visual**

The seven skills as a checklist, every box checked. To the right, a large callout reading "about 80%" with the caption "of the role, by one practitioner's estimate." Huyen's line is the footer, attributed. No build.

**Script**

Now the transition, and I will say this explicitly so the beginners in the room can relax. Nearly everything carries over. Systems design. API and integration work. Testing discipline. Observability. Security. Product sense. And domain knowledge, which matters more than most people expect, because you cannot judge the output without it.

Chip Huyen: "AI engineering is just software engineering with AI models thrown in the stack." One practitioner's estimate puts the AI-specific part of the job at about 20 percent. The foundation is real, and this room already has it.

**Cut if running long**

The whole slide folds into the top of slide 16 as one sentence: "Nearly everything carries over; here is what to add." Saves about 40 seconds. This is the outline's first cut.

**Sources**

- Skills that transfer: systems design, API and integration work, testing discipline, observability, security, product sense, domain knowledge → synthesis.md §6 "What transfers"; track-d-transition.md §2.2 (Pragmatic Engineer, "AI Engineering in the real world," March 25, 2025: seven case studies; skills that mattered were self-directed learning, decomposition, domain expertise to judge outputs, and "traditional software engineering principles").
- "AI engineering is just software engineering with AI models thrown in the stack." → track-d-transition.md §3 (Chip Huyen with Gergely Orosz, The Pragmatic Engineer, May 20, 2025).
- About 20 percent of the role is AI-specific → track-d-transition.md §2.2 (one anecdote: Frank's World, July 13, 2026). NOT IN SYNTHESIS §4. Spoken as "one practitioner's estimate," never as a statistic.
- Domain expertise: "engineers without domain knowledge struggle to assess solution quality" → track-d-transition.md §2.2 (Pragmatic Engineer case studies, Simply Business and Wordsmith).

---

### Slide 16: What to add, by area

**Outline:** 3.2 | **Time:** 1:15 | **Script target:** about 190 words

**On slide**

Headline: Six things to add, one per area of the map.

| Area | Add |
|---|---|
| The model | Model intuition: how they fail, what to ask for, when to swap |
| Context | Context engineering: the token budget, retrieval, provenance, memory |
| Tools | Tool design and action tiers |
| The harness | Loop control: verify each action, durable state, the workflow-versus-agent judgment |
| Evaluate | Error analysis and evals. The priority. |
| Operations | Security and operations for probabilistic systems: injection, identity, tracing |

**Visual**

Six rows. The left cell of each row carries the area name in the same color it has on the map, so the audience connects the list to the diagram they photographed. On [BUILD] the "Evaluate" row highlights and gains a tag: "every source names this the hardest." Nothing else on the slide.

**Script**

What to add. Six things, one per area of the map, so you can see where each one lives.

Model intuition: how these models fail, what to ask them for, when to swap them. You get that from shipping and reading traces, not from a math course.

Context engineering: the token budget, retrieval, provenance, memory.

Tool design and action tiers: writing interfaces for a caller that reasons.

Harness and loop control: verifying each action, durable state, and the workflow-versus-agent judgment.

[BUILD] Error analysis and evals. Every source names this the hardest. So make it the priority. If you learn one thing from this list first, learn this one. Ross McNairn, who built a legal AI team from scratch: "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have."

And security and operations for probabilistic systems: injection, identity, tracing.

Notice that none of these is training a model. That is the boundary from the start of the talk, and it is where most of you will stay.

**Cut if running long**

The McNairn quotation. Saves about 10 seconds. The "hardest skill" claim stands on the slide tag without it.

**Sources**

- The six competencies mapped to the six areas → synthesis.md §6 "What must be added"; outline-v4.md 3.2.
- Model intuition comes from shipping and reading traces → synthesis.md §7 ("Do I need math or ML?").
- Evals as the hardest new skill, named by every source → synthesis.md §2 finding 5 and §6.
- "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have." → track-d-transition.md §3 (Ross McNairn, Wordsmith, in The Pragmatic Engineer, March 25, 2025).
- None of these is training a model → synthesis.md §1 item 11 (57 percent of surveyed teams do not fine-tune, LangChain, December 2025, §4 safe).

---

### Slide 17: The mistakes everyone makes first

**Outline:** 3.3 | **Time:** 1:30 | **Script target:** about 225 words

**On slide**

Headline: Seven mistakes, seven antidotes.

| Mistake | Antidote |
|---|---|
| An agent when a workflow would do | Start with a workflow |
| Prompt and pray | 20 to 50 eval cases from real examples before tuning the first prompt |
| Frameworks before primitives | Direct API calls first, then a framework you can read. Own your prompts, context, and control flow. |
| Generic metrics instead of reading traces | Read a hundred |
| Shipping unread output | "Shipping unread code spells disaster within months." (Horthy, 2026) |
| Treating the demo as done | works.any() is not works.all() |
| Ignoring cost and latency until the invoice arrives | On the scorecard from day one |

**Visual**

A two-column table, seven rows. The left column in a warning tone, the right in a calm one. Rows build one at a time on [BUILD] so each mistake gets its own beat; if the speaker prefers, the whole table appears at once and the builds are dropped. Horthy's quotation is attributed in its row.

**Script**

The mistakes everyone makes first. I will go fast, because each one is a line, and you have already seen the antidote somewhere in this talk.

[BUILD] An agent when a workflow would do. Start with a workflow. You saw the spectrum.

[BUILD] Prompt and pray. Twenty to fifty eval cases from real examples before you tune the first prompt. Evals get harder to build the longer you wait.

[BUILD] Frameworks before primitives. Direct API calls first. Then a framework you can read. Own your prompts, your context, and your control flow. Dex Horthy interviewed about a hundred engineers with agents in production, and most had abandoned popular frameworks for pipelines they could read.

[BUILD] Generic metrics instead of reading traces. Read a hundred.

[BUILD] Shipping unread output. Horthy again: "Shipping unread code spells disaster within months." He ran that experiment himself and shut it down four months later.

[BUILD] Treating the demo as done. works.any() is not works.all().

[BUILD] Ignoring cost and latency until the invoice arrives. Put them on the scorecard from day one, next to correctness.

Every one of these is a line on the map. That is what the map is for.

**Cut if running long**

The Horthy interview sentence in the frameworks row ("Dex Horthy interviewed ... pipelines they could read."). Saves about 10 seconds.

**Sources**

- The seven mistakes and antidotes → synthesis.md §6 "Common first mistakes"; track-d-transition.md §2.3 items 1 to 7; outline-v4.md 3.3.
- "Evals get harder to build the longer you wait." → track-d-transition.md §3 (Anthropic, "Demystifying evals for AI agents," January 9, 2026).
- Start with 20 to 50 tasks from real failures → synthesis.md §4 safe (Anthropic, 2026-01-09).
- Horthy's roughly 100 interviews; engineers abandoned popular frameworks for custom pipelines → track-d-transition.md §2.3 item 4 (The Pragmatic Engineer, July 15, 2026); synthesis.md §5 item 5. Framework names omitted on the slide and in the script by the no-endorsement rule.
- "Shipping unread code spells disaster within months." → track-d-transition.md §3 and §2.3 item 5 (Dex Horthy, quoted in The Pragmatic Engineer, July 15, 2026, about a July 2025 experiment he shut down four months later).
- "Demo is works.any(), product is works.all()." → track-a-discipline.md §3 (Karpathy, June 17, 2025).
- Cost and latency on the scorecard → track-c-evals-and-operations.md §2.8; outline-v4.md 2.5.

---

### Slide 18: Build first, and where to learn

**Outline:** 3.4 | **Time:** 1:30 | **Script target:** about 225 words

**On slide**

Headline: Build one narrow, real agent for a task you already understand.

First project:

- A read-only agent over a repo you own: a pull-request reviewer or an issue-triage agent.
- 20 to 50 eval cases from real examples before the first prompt is tuned.
- Direct API calls before a framework. A trace viewer from day one.
- One agent, one tier at a time. Let the evals tell you when.

Where to learn:

- Chip Huyen, *AI Engineering* (O'Reilly, 2025)
- Anthropic: "Building Effective Agents," "Effective Context Engineering for AI Agents," "Demystifying Evals for AI Agents"
- OpenAI: "A Practical Guide to Building Agents"
- Dex Horthy: "12-Factor Agents"
- Hamel Husain and Shreya Shankar: the evals course, and *Evals for AI Engineers* (O'Reilly, due October 2026)
- Free courses: Google and Kaggle's 5-Day AI Agents Intensive; the Hugging Face Agents course; Anthropic Academy; OpenAI Academy
- Staying current: Latent Space; The Pragmatic Engineer

Footer: AI engineer is LinkedIn's fastest-growing US role for the second year. The premium outside frontier labs is modest. Postings want shipped production LLM work.

**Visual**

Two columns. Left, the first-project checklist, four items. Right, the resource list, grouped as books, guides, courses, and staying current, in small type but legible from the back of the room, since this is the slide people photograph on the way out. The market line runs as a footer strip. No build. This slide breaks the three-bullet rule on purpose: the outline asks for a short resource list, and the list is the deliverable.

**Specimen**

The first project is the third stop of the spectrum from slide 4, over a repo you own: a pull-request reviewer or an issue-triage agent. Retrieval, a recommendation, a human who decides. Cognition's review agent is the precedent. The tiers come later, when the evals say so.

**Script**

Build first. One narrow, real agent for a task you already understand. A read-only agent over a repo you own: a pull-request reviewer, or an issue-triage agent. Retrieval, a recommendation, a human who decides. That is the third stop on the spectrum, and Cognition's review agent is proof it earns its keep. Single agent before multi-agent. Twenty to fifty eval cases from real examples before you tune the first prompt. Direct API calls before a framework. A trace viewer from day one. Then add autonomy one tier at a time, and let the evals tell you when. First-person accounts put this at months, not years, when the first project is small and real.

Where to learn, chosen because practitioners recommend them rather than because they are marketed. Chip Huyen's book, AI Engineering. Anthropic's three guides: Building Effective Agents, Effective Context Engineering, and Demystifying Evals. OpenAI's Practical Guide to Building Agents. Dex Horthy's 12-Factor Agents. Hamel Husain and Shreya Shankar's evals course, and their book, due next month. Free courses from Google and Kaggle, Hugging Face, Anthropic Academy, and OpenAI Academy. And Latent Space and The Pragmatic Engineer to stay current. The list is on the slide. Photograph it.

One line on the market. AI engineer is LinkedIn's fastest-growing US role for the second year running. The pay premium outside the frontier labs is modest. And the postings want evidence of shipped production LLM work. Which is what the first project is for.

**Cut if running long**

The market paragraph. Saves about 15 seconds. Its facts return in the Q&A answer to "Is the market saturated?"

**Sources**

- Build first: one narrow real agent; 20 to 50 eval cases first; direct API calls before a framework; single agent before multi-agent; a trace viewer from day one; add autonomy one tier at a time → synthesis.md §6 "Build first"; outline-v4.md 3.4.
- A pull-request reviewer as the first project; Cognition's review agent finds about two bugs per pull request because it does not share the author's context → track-b-enterprise-agents.md §2.1 (Cognition, "Multi-Agents: What's Actually Working," 2026-04-22). NOT IN SYNTHESIS §4. The shape is the talk's own recommendation.
- Months, not years, when the first project is small and real → synthesis.md §6 (two months for one feature at DSI; a year of workflow change for Khurram); track-d-transition.md §2.5.
- Resource list → synthesis.md §6 "Resources practitioners actually recommend"; track-d-transition.md §2.4. Husain and Shankar, *Evals for AI Engineers*, O'Reilly, due 2026-10-31.
- AI engineer the number one fastest-growing US job for the second year → synthesis.md §4 safe (LinkedIn Jobs on the Rise, 2026-01-07).
- Premium modest: 6.2 percent entry to 18.7 percent staff → synthesis.md §4 safe (Levels.fyi, 2025-07-17). Spoken as "modest"; the figures are for Q&A.
- Postings want evidence of shipped production LLM work → synthesis.md §6 "Market reality"; track-d-transition.md §1 finding 4.
