# Section 0: Cold Open

**Slides:** 1 (1 slide) | **Approximate time:** 1 minute | **Outline:** outline-v3.md §0

**Goal:** Open on the coding agent, not on AI. Name the distinction the whole talk rests on, put the thesis on screen, and leave it there.

**Running example in this section:** Not yet. The coding agent the audience used this morning is the only example.

**Bridge in:** None. This is the first slide. | **Bridge out:** "This talk is about crossing to that side." Slide 2 opens on the three categories.

**Cut order if long:** Nothing. This is one minute.

**Sources convention:** Every number and quotation traces to `research/synthesis.md` §4 or a track report, with attribution and date. Flags: CAVEAT (say so on stage), SECONDARY (primary unreachable; keep the flag), NOT IN SYNTHESIS (traced to a track report, not in the §4 tables).

| Slide | Title | Time | Words |
|---|---|---|---|
| 1 | You shipped code you did not read | 1:00 | 150 |

---

### Slide 1: You shipped code you did not read

**Outline:** 0 | **Time:** 1:00 | **Script target:** about 150 words

**On slide**

Headline: You shipped code this week that you did not read.

On build, beneath it, the thesis in two lines:

- Using AI makes you an AI-enabled software engineer.
- Engineering systems whose behavior depends on AI makes you an AI engineer.

**Visual**

Nearly empty. The headline sits alone, centered, large, for the first half of the script. On [BUILD] it shrinks to the top and the two thesis lines appear beneath it, one above the other, set as a pair. The talk title sits in a small footer. Nothing else. The thesis stays on screen for the rest of the minute and returns verbatim on slide 19, so the wording here is the wording there.

**Script**

Some of you shipped code this week that you did not read. I am not judging. Simon Willison, who has written about this longer than almost anyone, said in May that he no longer reviews every line his agents write, even for production. His words: "I'm not reviewing that code. And now I've got that feeling of guilt."

That does not make you an AI engineer. It makes you an AI-enabled software engineer, and that is a real skill.

Now turn it around. Everything you touched from the user side of that agent, somebody engineered. The instructions file. The permission prompt. The sandbox. The model picker. The people who built those are AI engineers.

This talk is about crossing to that side. [BUILD] Here is the whole argument in two sentences. [POINT: thesis] It stays on screen while we go.

**Cut if running long**

Drop the verbatim Willison quotation and keep the paraphrase: "he no longer reviews every line his agents write, even for production." Saves about 8 seconds.

**Sources**

- Willison no longer reviews every line, May 2026 → synthesis.md §2 finding 9 (paraphrase). Verbatim "I'm not reviewing that code. And now I've got that feeling of guilt: if I haven't reviewed the code, is it really responsible for me to use this in production?" → track-d-transition.md §2.5 (Simon Willison, May 6, 2026). NOT IN SYNTHESIS §4 tables; primary reachable.
- The thesis → README.md, the talk's own claim. It sits inside swyx's categories one and two and Huyen's definition (synthesis.md §2 finding 1; §5 item 8).
- "Everything you touched from the user side ... somebody engineered" → synthesis.md §2 finding 10 (the coding-agent bridge). The talk's own framing.
