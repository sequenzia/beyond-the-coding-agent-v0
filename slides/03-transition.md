# Section 3: Build your first useful version

**Slides:** 18–19 | **Time:** 3:30 | **Outline:** outline-v3.md §3

**Goal:** Pair existing skills with new practices and concrete completion checks.

**Running-example beat:** Apply the same sequence to a domain the attendee knows.

**Bridge in:** Translate the map into a first project. | **Bridge out:** Return to the supported report.

**Cut order if long:** 18 examples, then 19 optional detail. Keep all four milestones.

**Delivery:** Script is verbatim first-person speech. At 150 words/minute, each row reserves its remaining time for the visual build, pointing, and reflection. Slides 5 and 11 reserve 12 seconds each for silent thought or brief chat. Do not read every diagram label aloud in addition to the script. All case excerpts and receipts are fictional.

**Sources convention:** Synthesis §8 governs this revision. CAVEAT means say the qualification; SECONDARY means primary was unreachable; NOT IN SYNTHESIS means traced to a track report outside the synthesis. Fictional case evidence traces to the dossier instead of external research.

| Slide | Title | Time | Spoken words | Build / reflection seconds |
|---|---|---|---|---|
| 18 | Your engineering skills give you a starting point. | 1:15 | 152 | 14.2 |
| 19 | Build the smallest useful version first. | 2:15 | 248 | 35.8 |

---

### Slide 18: Your engineering skills give you a starting point.

**Outline:** 3.18 | **Time:** 1:15 | **Script:** 152 words | **Build / reflection:** 14.2 seconds

**On slide**

Headline: Your engineering skills give you a starting point.

| Skills you bring | Practices to add |
|---|---|
| Interfaces | Tool contracts and context |
| Testing | Semantic evaluation and support |
| Security | Untrusted evidence and derived access |
| Operations | Quality alongside cost and latency |

**Visual**

Use a four-row pairing table, not a percentage claim. Existing skills are off-white, new practices carry pink underlines. Build one row at a time. This is a conceptual mapping, not measured skill overlap. Leave the full map behind on slide 17.

**Build cues (within the allocated non-speech time)**

Build each pairing during its spoken explanation, leaving all rows readable.

**Script**

You do not have to discard your software engineering experience to begin.

Interface design becomes tool contracts and clear context boundaries. Testing discipline becomes a foundation for evaluation, with additional work on meaning, uncertainty, and supporting evidence.

Security still begins with identity and least privilege. You now follow untrusted text through a model and track permissions into summaries and saved outputs.

Operations still needs traces, incident response, and rollback. You add answer quality to the service measures you already watch.

The new skills take practice. Read failed answers closely. Learn how a model uses context and tools. Write a rubric that distinguishes a persuasive explanation from a supported one.

Domain knowledge helps you judge what the records establish. That is why I recommend starting with a task you understand and a collection you are allowed to use. You can learn the model-facing parts while keeping the business question small enough to check.

**Cut if running long**

Drop one spoken pairing already visible in the table. Saves 8 seconds.

**Sources**

Synthesis §6 transferable skills, revised by §8; local roadmap. No anecdotal percentage or career timeline.

---

### Slide 19: Build the smallest useful version first.

**Outline:** 3.19 | **Time:** 2:15 | **Script:** 248 words | **Build / reflection:** 35.8 seconds

**On slide**

Headline: Build the smallest useful version first.

Supplied document: supported answer; unknowns handled.

Fixed retrieval: relevant evidence; permissions hold.

Adaptive investigation: difficult cases improve within budget.

Saved reports: save, retry, reopen, permission changes pass.

**Visual**

Four sequential milestones on one horizontal line. Each milestone gets its completion check beneath it. Build one at a time; use the full canvas. Keep every check at 24 pt or larger. No extra resource list. The title stays above, and the milestone under discussion gets a pink underline.

**Build cues (within the allocated non-speech time)**

Reveal each milestone with its paragraph and hold its completion check before the next. Leave all four visible during the guide pointer.

**Script**

Here is the project I would build first: answer useful questions over an approved document collection from a domain I understand.

At the first milestone, I supply a document and return an answer with supporting passages. I check a question the document can answer and one it cannot. I define what success means before tuning the prompt, and keep the observed failures.

At the second milestone, I add fixed retrieval. My checks ask whether the right evidence was retrieved, whether permissions held, and whether I can trace the answer back to source versions. I also test an empty result and an unavailable document. This may already be a useful product.

At the third milestone, I add a bounded investigation loop for questions that need evidence-dependent follow-up. I compare it with fixed retrieval on representative difficult cases. Does it improve the answers enough to justify the extra cost and latency? If it does not, I keep the simpler version and diagnose why.

At the fourth milestone, I add private saved reports with provenance. I exercise saving, retrying after an unknown outcome, reopening, and changing source permissions. I check the persisted state rather than accepting the model's claim that it finished.

The first-project guide in the handout gives you these completion checks and a starter evaluation table. You do not need a large dataset or a collection of frameworks before beginning. You need a useful question, authorized evidence, and a way to tell whether the answer deserves your user's trust.

**Cut if running long**

Drop the empty-result example and the final dataset sentence. Keep all milestones and checks. Saves 12 seconds.

**Sources**

Handout first-project guide; synthesis §8 R4 and R6. Milestone checks are local recommendations, not measured benefits.
