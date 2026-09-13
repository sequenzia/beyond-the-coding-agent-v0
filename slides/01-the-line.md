# Section 1: From an answer to an investigation

**Slides:** 3–6 | **Time:** 5:15 | **Outline:** outline-v3.md §1

**Goal:** Distinguish a supplied answer, fixed retrieval, and evidence-adaptive investigation.

**Running-example beat:** Preview D05, restart the broad request, then reconcile the stale tooling claim.

**Bridge in:** Start with one supplied document. | **Bridge out:** Make the investigation tools dependable.

**Cut order if long:** 4, 6, then shorten reflection on 5. Preserve the reveal.

**Delivery:** Script is verbatim first-person speech. At 150 words/minute, each row reserves its remaining time for the visual build, pointing, and reflection. Slides 5 and 11 reserve 12 seconds each for silent thought or brief chat. Do not read every diagram label aloud in addition to the script. All case excerpts and receipts are fictional.

**Sources convention:** Synthesis §8 governs this revision. CAVEAT means say the qualification; SECONDARY means primary was unreachable; NOT IN SYNTHESIS means traced to a track report outside the synthesis. Fictional case evidence traces to the dossier instead of external research.

| Slide | Title | Time | Spoken words | Build / reflection seconds |
|---|---|---|---|---|
| 3 | One document can answer one bounded question. | 1:00 | 103 | 18.8 |
| 4 | Retrieval supplies evidence for the question. | 1:15 | 146 | 16.6 |
| 5 | The first relevant document can tell an outdated story. | 1:30 | 152 | 29.2 |
| 6 | An agent chooses the next investigation step. | 1:30 | 181 | 17.6 |

---

### Slide 3: One document can answer one bounded question.

**Outline:** 1.3 | **Time:** 1:00 | **Script:** 103 words | **Build / reflection:** 18.8 seconds

**On slide**

Headline: One document can answer one bounded question.

Question: What validation is pending?

“Temperature-uniformity validation remains pending.”

D05 v1 §2 · September 11, 2026

Answer: temperature-uniformity validation.

**Visual**

Show the supplied pilot-production report as a wide document passage. Pink underline on the exact quoted sentence. Put question above and answer below, with the citation attached to the passage. This is a bounded demonstration before restarting the larger request on slide 5.

**Build cues (within the allocated non-speech time)**

Highlight the passage after the first answer; hold it while contrasting the missing completion date.

**Script**

First I supply one document: the pilot-production report. I ask what validation is pending.

The report says temperature-uniformity validation remains pending. I can answer directly and point to the passage. There is no search decision and no investigation loop here. One model call may be enough.

I also need an unanswerable case. If I ask when validation will finish, this report gives no completion date. A useful answer says that the document does not tell us.

This small version already gives me a way to define success: answer the bounded question, preserve the supporting passage, and recognize what the supplied evidence cannot establish.

**Cut if running long**

Shorten the completion-date example to one sentence. Saves 8 seconds.

**Sources**

Dossier D05 v1 §§2–3; synthesis §8 R6. All displayed excerpts are fictional canonical text.

---

### Slide 4: Retrieval supplies evidence for the question.

**Outline:** 1.4 | **Time:** 1:15 | **Script:** 146 words | **Build / reflection:** 16.6 seconds

**On slide**

Headline: Retrieval supplies evidence for the question.

Question

Authorized retrieval

Supporting passages

Grounded answer

RAG: retrieval-augmented generation. This path is fixed.

**Visual**

Use the Mermaid workflow below across the canvas. The authorization gate precedes any passage entering the model. Build each step in order. Explain indexing aloud rather than adding another diagram.

```mermaid
flowchart LR
 Q[Question]:::step --> A[Authorized retrieval]:::check
 A --> P[Supporting passages]:::step
 P --> M[Grounded answer]:::model
 classDef step fill:#1064f8,color:#fffcf5,stroke:#1064f8
 classDef check fill:#01b66d,color:#14161c,stroke:#01b66d
 classDef model fill:#fdad00,color:#14161c,stroke:#fdad00
```

**Build cues (within the allocated non-speech time)**

Build the fixed path after the RAG definition, then point back to authorization.

**Script**

Now the user has a folder rather than a supplied passage. I add retrieval: find relevant evidence, put it in the model's context, and generate an answer grounded in it. That is retrieval-augmented generation, or RAG.

The retrieval service needs to ingest documents, preserve their identities and versions, and index useful passages. Search may match words, meanings, or both. Those are implementation choices we evaluate against our questions.

Here the application fixes the path: retrieve, then answer. It can retrieve several documents and still be a workflow. The number of documents does not determine whether I need an agent.

Notice the authorization gate before the passages. The model only receives evidence this user can access. We will return to that boundary when the collection includes restricted material.

For now, we have made evidence available. We have not established that the first result tells the current story.

**Cut if running long**

Drop the indexing choices paragraph. Saves 15 seconds.

**Sources**

Synthesis §8 R6 and R2; dossier §5 authorization is the local application contract.

---

### Slide 5: The first relevant document can tell an outdated story.

**Outline:** 1.5 | **Time:** 1:30 | **Script:** 152 words | **Build / reflection:** 29.2 seconds

**On slide**

Headline: The first relevant document can tell an outdated story.

September 2 · D02 v1 §1
“Tooling availability is the current launch blocker.”

September 9 · D03 v1 §1
“Tooling is available for pilot production.”

What would you search next?

**Visual**

Two dated excerpts on a horizontal timeline. Initially show only September 2. Pause before revealing September 9. Mark the earlier claim with a pink strike labeled Earlier status after the later update appears. Keep dates and IDs fully readable, never dim the critical contradiction. The reflection question remains at the bottom.

**Build cues (within the allocated non-speech time)**

Show only D02 first. Reveal D03 after the follow-up search. Reserve 12 seconds after “what would you search next?” for silent thought or brief chat.

**Script**

Let me restart with the broader launch question. Our first search returns the earlier supplier update. It says tooling availability is the current launch blocker. That is a relevant result with a perfectly real citation inside our fictional pack.

Would you send that answer to your colleague?

I would first ask what current means here. The update is dated September second. It also promises a follow-up. That gives the investigation a specific next step: search for later tooling status.

The September ninth update says tooling is available for pilot production. The earlier blocker has cleared.

Take a moment: what would you search next? You can think silently or put a short answer in chat.

I would look for the remaining readiness dependencies. Simply taking the newest search hit is not enough either. We need to know what each record establishes, which product configuration it describes, and whether another record closes the dependency.

**Cut if running long**

Shorten reflection from 12 to 6 seconds, still reveal both records. Saves 6 seconds.

**Sources**

Dossier D02 v1 §§1–2, D03 v1 §§1–2 and §4 trace. Fictional excerpts.

---

### Slide 6: An agent chooses the next investigation step.

**Outline:** 1.6 | **Time:** 1:30 | **Script:** 181 words | **Build / reflection:** 17.6 seconds

**On slide**

Headline: An agent chooses the next investigation step.

Search tooling
Read D03: tooling cleared
Search validation
Reconcile D04–D06
Stop with supported findings

Harness: application control around the model.

**Visual**

Build the evidence-dependent turn first, then place a green harness outline around the loop. Label the return edge New evidence. Show the green stop boundary. Use this compact Mermaid flow, not a full discipline map.

```mermaid
flowchart LR
 S[Search tooling]:::step --> D[Read D03: cleared]:::step
 D --> V[Search validation]:::model
 V --> R[Reconcile D04–D06]:::step
 R -. New evidence .-> V
 R --> E[Supported findings]:::check
 classDef step fill:#1064f8,color:#fffcf5,stroke:#1064f8
 classDef model fill:#fdad00,color:#14161c,stroke:#fdad00
 classDef check fill:#01b66d,color:#14161c,stroke:#01b66d
```

**Build cues (within the allocated non-speech time)**

Build the change from tooling to validation after the second paragraph. Add the harness boundary when it is defined.

**Script**

This is where I give the model a bounded choice about what to do next.

It reads the tooling update and changes its next search to validation and design revisions. That finds the engineering change record, the pilot report, and the readiness review. Together they establish that the revised heating-element configuration needs repeat validation, and that the result remains pending.

The choice follows the evidence. I did not just ask for a longer answer or send every document into a bigger prompt.

An agent uses the model to choose its next investigation step. The harness is the application control around that model: it supplies context, validates tool calls, tracks state, handles failures, and decides which actions are available.

The model can propose another search. The harness can reject an invalid call or stop an exhausted run. That division of responsibility matters even when the model is capable.

Think of your coding agent changing its search after finding an unexpected dependency. We are engineering that behavior for project documents. We will earn this added autonomy by comparing it with the simpler workflow.

**Cut if running long**

Drop the coding-agent comparison sentence and shorten loop build. Saves 10 seconds.

**Sources**

Synthesis §8 R6; dossier §4 trace and §5 harness contract. Harness is the talk’s working definition, consistent with synthesis §3.
