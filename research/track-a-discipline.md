# Research Track A: The Discipline of AI Engineering (2023–2026)

Prepared 2026-09-11 for the talk "Beyond the Coding Agent: From Software Engineer to AI Engineer" (week of 2026-09-14).

Scope: how leading voices define AI engineering, what competencies they say it requires, how the vocabulary moved from prompt engineering to context engineering to harness engineering, and how all of that compares with the speaker's five-area map. Sources are primary wherever possible. Publication dates are given for every citation. Items that could only be confirmed through secondary coverage are marked **[secondary]**; items that could not be verified are marked **[unverified]**.

---

## 1. Executive summary

- **The definition has stabilized around one sentence.** swyx (June 2023) and Chip Huyen (January 2025) converge: an AI engineer builds products and systems on top of foundation models made by others, and is distinguished from the ML engineer by working on product-specific data and evals rather than training. Huyen's three differences are the cleanest formulation: less modeling and more model adaptation, more pressure on inference efficiency, and evaluation as "a much bigger problem." The talk's thesis is squarely inside the field's consensus.

- **swyx has always drawn the line the talk draws.** Since the first AI Engineer Summit he has separated (1) software engineers enhanced by AI, (2) software engineers building AI products, and (3) non-human software engineers. The talk's "AI-enabled software engineer" versus "AI engineer" is his categories 1 and 2.

- **The field's center of gravity moved from "the model" to "the system around the model."** Latent Space's July 2026 write-up of the World's Fair lists this as trend number one: "agents can run much more of the inner execution loop, but that outer loop is still engineering." swyx's 2026 keynote: "the model alone is no longer the product."

- **The unifying primitive in 2026 is the loop, and the harness is the artifact.** Anthropic's agent loop (gather context, take action, verify work), Google's "uses the LM in a loop to accomplish a goal," swyx's "Loopcraft," and OpenAI's "the reusable part is the agent loop" all say the same thing. "Agent = Model + Harness" (Osmani, Böckeler) is the one-line definition that spread fastest in 2026.

- **Vocabulary timeline is well documented.** Prompt engineering (2022–2024) gave way to context engineering (Lütke and Karpathy tweets, June 18 and 25, 2025; LangChain June 23; Anthropic September 29, 2025), then harness engineering (Anthropic November 2025 and March 2026; OpenAI February 2026; Böckeler on martinfowler.com April 2, 2026), with agentic engineering (Karpathy, February 4, 2026) naming the way engineers now use coding agents. Böckeler frames the three as a continuum: harness engineering is "a specific form of context engineering."

- **Every canonical decomposition of an agent starts with the model, and the five-area map does not.** OpenAI: model, tools, instructions. Google: model, tools, orchestration. swyx's IMPACT: Models is one of six. Huyen devotes a chapter section to model selection. This is the map's clearest gap.

- **Evals are treated as the core competency, not one of five.** "Evaluation is the new CI" (Jeff Boudier, Hugging Face, November 2025). Hamel Husain's guidance is that error analysis on production traces is "the most important activity in evals" and should take 60 to 80 percent of development time. Anthropic's January 2026 evals post says start with 20 to 50 tasks drawn from real failures. The production-data-to-evals loop is the field's methodology, and the map mentions it only as "continued evaluation after deployment."

- **Interaction design for partial autonomy is a named discipline the map omits.** Karpathy's autonomy slider and generation-verification loop (June 2025), Huyen's "good applications demand good interfaces," and a "Design Engineering" track at both the 2025 and 2026 World's Fairs.

- **Agent identity, delegated authority, sandboxing, and durable state are now explicit.** Google's November 2025 whitepaper calls agents "a new principal class distinct from users and service accounts." Anthropic's April 2026 managed-agents post enumerates sessions, sandboxes, resumability, and credential vaults as platform concerns. The 2026 World's Fair has a "Sandbox & Platform Engineering" track.

- **Skillful use of coding agents is now assumed, not distinguishing.** Latent Space's 2026 trend four: "coding agents replace IDEs." Karpathy: "the new default is that you are not writing the code directly 99% of the time." But every credible source treats this as how software is built, not as what AI engineering is.

- **One vocabulary trap: "harness engineering" is used for two different things.** Böckeler's piece is titled "Harness engineering for coding agent users." OpenAI's is about using Codex to write their own product. The same words describe the harness you build around a coding agent to help you code, and the harness you build around a production agent for customers. The talk should name this ambiguity or the audience will conflate them.

- **The strongest live controversy is "Big Model versus Big Harness."** Boris Cherny: Claude Code is "the thinnest possible wrapper over the model." Noam Brown: "those scaffolds will also just be replaced by the reasoning models." Against: Jerry Liu and Osmani ("a decent model with a great harness beats a great model with a bad harness"). Anthropic's own March 2026 post gives the mature position: "every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing."

- **The forward deployed engineer is the enterprise face of the AI engineer.** Anthropic's FDE job posting requires "advanced prompt engineering, agent development, evaluation frameworks, and deployment at scale." Latent Space's 2026 trend three is "AI engineering enters the enterprise" via FDEs. It is the same discipline, deployed at the customer.

- **The market signal is real but muddled.** LinkedIn's January 2026 Jobs on the Rise ranked AI Engineer the number one fastest-growing US role, with postings up 143 percent in 2025 and Software Engineer the most common prior role. LinkedIn lumps AI and ML engineers together, so the number overstates the foundation-model role specifically.

- **Evidence for "transition talks" is thin.** No widely cited talk is structured as "software engineer to AI engineer." The most effective adjacent pieces used case studies of real teams (Pragmatic Engineer, March 2025) or a running example (Karpathy's MenuGen). The plan to teach every area through one enterprise agent matches what worked.

---

## 2. Detailed findings by theme

### 2.1 How AI engineering is defined

**swyx, "The Rise of the AI Engineer" (Latent Space, June 30, 2023).** Places the AI engineer on a spectrum between prompt engineering and ML engineering, separated from ML by a permeable "API line." ML engineers work on "pretrain scale data" and "general benchmark evals"; AI engineers work on "product-specific data and evals." The essay's most quoted line: "When it comes to shipping AI products, you want engineers, not researchers." The required skills listed were software engineering ability, domain and product knowledge, fluency with the current tool ecosystem, and fast prototyping.

**swyx in conversation with RedMonk (July 23, 2025).** Restates three categories he first drew at the 2023 Summit: software engineers enhanced by AI, software engineers building AI products, and non-human software engineers. He argues specialization is the justification for the title: "a front-end developer is just gonna be way better at front-end than a generalist developer."

**Chip Huyen, "AI Engineering" (O'Reilly, January 2025), and the excerpt co-published with Gergely Orosz (May 20, 2025).** AI engineering means building applications on foundation models "typically developed by research labs and made available as a service," as opposed to ML engineering, which builds and deploys in-house models. Three differences: "AI engineering focuses less on modeling and training, and more on model adaptation"; "there's more pressure for efficient training and inference optimization"; and evaluation is "a much bigger problem in AI engineering" because outputs are open-ended. The stack has three layers: application development ("providing a model with good prompts and necessary context. This layer requires rigorous evaluation and good applications demand good interfaces"), model development, and infrastructure. The workflow is reversed relative to ML: start from the product and work down to data and models. In the Pragmatic Engineer podcast (February 5, 2025) Huyen says AI engineering is closer to software engineering than to ML engineering, and lists what software engineers must learn: how LLMs work, evaluating outputs, RAG, the limits of fine-tuning, and inference optimization. Her chapter list is a competency map in its own right: understanding foundation models, evaluation methodology, evaluating AI systems (including model selection), prompt engineering, RAG and agents, fine-tuning, dataset engineering, inference optimization, and "AI engineering architecture and user feedback."

**Karpathy, "Software in the era of AI" (YC AI Startup School, June 17, 2025).** Software 1.0 is code, 2.0 is weights, 3.0 is prompts; LLMs are the new operating system. The product guidance: build "partial autonomy" products with an autonomy slider, keep the generation-verification loop fast, keep "AI on a leash." "Demo is works.any(), product is works.all()." He named "jagged intelligence" and "anterograde amnesia" as LLM psychology that engineers must design around, and closed with "build for agents" (llms.txt, agent-legible docs). In his Sequoia Ascent talk (April 30, 2026) he restated Software 3.0 as "humans program LLMs through prompts, context, tools, examples, memory, and instructions," with the context window as "the primary lever." Quote: "You can outsource your thinking, but you can't outsource your understanding."

**Google, "Introduction to Agents" (Kaggle whitepaper, November 2025).** "An AI agent combines models, tools, an orchestration layer, and runtime services which uses the LM in a loop to accomplish a goal." Components: model (brain), tools (hands), orchestration (nervous system). A five-level taxonomy: Level 0 isolated reasoning; Level 1 connected problem-solver with tools; Level 2 strategic problem-solver with planning and "sophisticated context engineering"; Level 3 collaborative multi-agent; Level 4 self-evolving. "Agent Ops" is DevOps plus MLOps adapted for agents. The developer role: "Agent developer = 'director' who sets the scene (instructions/prompts), selects the cast (tools/APIs), and provides context (data)."

**OpenAI, "A practical guide to building agents" (April 2025).** An agent is model, tools, and instructions. Orchestration patterns: single agent, manager (agents as tools), decentralized handoffs. Guardrails: relevance, safety, PII, moderation, tool risk, output validation, plus human intervention on breach.

**Anthropic, "Building effective agents" (December 19, 2024).** "Agentic systems" is the umbrella. Workflows are "systems where LLMs and tools are orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage." Three principles: simplicity, transparency, and careful design of the agent-computer interface.

### 2.2 Boundaries: AI engineer, ML engineer, software engineer, data scientist, FDE

The ML boundary is the one every source agrees on: ML engineers train and serve their own models; AI engineers adapt someone else's (swyx 2023; Huyen 2025; InfoWorld November 2025: an AI engineer "effectively applies foundation models via APIs or open-source tools to build, evaluate, and productize AI systems rather than train them"). The data-scientist boundary is rarely discussed explicitly; Huyen's product-first workflow versus ML's data-first workflow is the implicit answer.

The software-engineer boundary is where the vocabulary is messiest. Three framings coexist:

1. **swyx's categories.** Using AI is category one; building AI products is category two. The distinction is the target system, not the tool.
2. **Karpathy's and Willison's "agentic engineering."** Both are about how professionals use coding agents. Karpathy (February 4, 2026, **[secondary]**): "'agentic' because the new default is that you are not writing the code directly 99% of the time, you are orchestrating agents who do and acting as oversight"; "'engineering' to emphasise that there is an art & science and expertise to it." Willison (May 6, 2026) contrasts vibe coding ("you're not looking at the code at all") with the professional who is "using these tools to the highest of your own ability." Neither is a definition of AI engineering; both describe the AI-enabled software engineer.
3. **Term drift in the wider blogosphere.** A June 29, 2026 essay by Ekky Armandi defines "AI engineer" as someone who works "at the model layer, including fine-tuning, evaluation, and deployment" and "AI-native engineer" as someone who uses AI tools. That is the opposite of the swyx/Huyen usage. Expect the audience to arrive with mixed definitions.

Yasin Miran's "We might all be AI engineers now" (March 5, 2026) and its Hacker News thread show the popular version of the confusion: the essay's actual claim is that fundamentals still matter when AI writes the code ("The model doesn't save you from bad decisions. It just helps you make them faster."), and the thread argued about code quality and skill atrophy, not about what AI engineering is.

**Forward deployed engineer.** Pragmatic Engineer's deep dive (August 12, 2025) traces the role to Palantir, notes OpenAI's FDE team grew from 2 to more than 10 within months, and separates FDEs (write code inside the customer's systems, own the outcome) from solutions engineers (build proofs of concept). Anthropic's "Forward Deployed Engineer, Applied AI" posting requires "production experience with LLMs including advanced prompt engineering, agent development, evaluation frameworks, and deployment at scale." Google lists "Applied AI Agent Engineer" and "Forward Deployed Engineer III, Google Cloud, Applied AI." Pragmatic Engineer (May 14, 2026) reports "massive demand for the role at Google, OpenAI, and Anthropic." The 2026 World's Fair has a "Forward Deployed Engineering" track, and Latent Space's trend three is "AI engineering enters the enterprise." Conclusion: the FDE is an AI engineer embedded with a customer. The New Stack's figure that FDE postings rose more than 800 percent from January to September 2025 could not be verified against the article text **[unverified]**.

### 2.3 The competency map

Consolidating the sources yields the following list. Entries marked with a star appear in at least three independent sources.

| Competency | Sources |
|---|---|
| Understanding how foundation models behave (jaggedness, non-determinism, context limits) * | Huyen ch. 2; Karpathy 2025; Pragmatic Engineer 2025 |
| Model selection, routing, and swapping across upgrades * | Huyen ch. 4; InfoWorld 2025; OpenAI and Google component lists; Anthropic March 2026 |
| Prompt and context engineering * | Anthropic Sept 2025; LangChain; Schmid; Karpathy; Huyen ch. 5 |
| Retrieval as infrastructure, not headline | swyx reading list; Latent Space 2026 ("RAG normalization") |
| Tool design for model callers * | Anthropic Sept 2025; Anthropic Dec 2024 (ACI); Google "hands" |
| Agent loop, harness, orchestration, and control flow * | Anthropic SDK post; OpenAI Codex platform; Google; swyx IMPACT |
| Memory, state, resumability across context windows * | Anthropic Nov 2025, Mar 2026, Apr 2026; Huyen ch. 6 |
| Evals: task design, graders, capability versus regression, error analysis * | Anthropic Jan 2026; Husain 2024 and 2025; Huyen ch. 3 and 4 |
| Verification design (what can be automatically checked) | Karpathy 2026; World's Fair 2026 verification theme |
| Guardrails, prompt injection, permissions, identity * | OpenAI 2025; Google 2025; Willison lethal trifecta; Radar vol. 34 |
| Sandboxing and execution environments | Anthropic managed agents; Osmani; World's Fair 2026 track |
| Observability: traces, cost, latency, Agent Ops * | Google 2025; Anthropic June 2025; Osmani |
| Interaction and product design for partial autonomy * | Karpathy 2025; Huyen ch. 10; Design Engineering tracks |
| Inference cost and latency optimization | Huyen ch. 9; Anthropic June 2025 (15x tokens) |
| Fine-tuning as an occasional option | Huyen ch. 7; swyx reading list; "agent labs thesis" |
| Multi-agent decomposition and handoffs | Anthropic June 2025; OpenAI patterns; Google Level 3 |
| Skillful use of coding agents (agentic engineering) * | Karpathy; Willison; Latent Space trend 4 |

Compared with the five-area map:

- **Covered well:** 3.1 maps to context engineering almost exactly, including Anthropic's four techniques (compaction, structured note-taking, sub-agents, just-in-time retrieval). 3.2 matches Anthropic's tool guidance ("Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents"). 3.3 matches harness vocabulary. 3.4 matches Anthropic's grader taxonomy. 3.5 matches Agent Ops.
- **Missing:** the model as an engineered choice; interaction design for partial autonomy; agent identity and delegated authority; sandboxing and execution isolation; durable state and resumability as a named concern.
- **Under-weighted:** the production-data-to-evals loop as the methodology that ties 3.4 and 3.5 together; verification as a design activity distinct from evaluation.
- **Named differently from the field:** the field says "harness" and "loop" where the map says "harnesses and orchestration" (close); the field says "guardrails" and "Agent Ops" for much of 3.5; the field says "skills" (Anthropic's Agent Skills, October 2025) for packaged, progressively disclosed instructions, which the map would file under 3.1.
- **Over-weighted:** nothing egregious. RAG is correctly demoted to "one technique." If anything, 3.5 could shed governance detail in favor of identity and sandboxing.

### 2.4 Vocabulary evolution

**Prompt engineering (2022–2024).** Huyen still gives it a full chapter (2025), and Karpathy's Software 3.0 framing treats prompts as programs. The 2024 O'Reilly report "What We Learned from a Year of Building with LLMs" (May 28, 2024) is the last major practitioner document organized around prompting first.

**Context engineering (June 2025 onward).** Tobi Lütke (June 18, 2025) described it as "the art of providing all the context for the task to be plausibly solvable by the LLM." Karpathy (June 25, 2025): "+1 for 'context engineering' over 'prompt engineering'... context engineering is the delicate art and science of filling the context window with just the right information for the next step." LangChain (June 23, 2025): "building dynamic systems to provide the right information and tools in the right format such that the LLM can plausibly accomplish the task," with "prompt engineering is a subset of context engineering." Phil Schmid (June 30, 2025) enumerated the seven things in context: system prompt, user prompt, state and history, long-term memory, retrieved information, tools, and structured output; "Agent failures aren't only model failures; they are context failures." Anthropic (September 29, 2025) gave the durable definition: "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference," introduced "attention budget" and "context rot," and the four techniques. Thoughtworks Radar vol. 34 (April 15, 2026) calls context engineering "a foundational architectural concern" that "treats the context window as a design surface."

**Harness engineering (November 2025 onward).** Anthropic's "Effective harnesses for long-running agents" (November 26, 2025) framed the problem as "engineers working in shifts, where each new engineer arrives with no memory of what happened on the previous shift" and introduced the initializer-agent plus progress-file pattern. OpenAI's "Harness engineering: leveraging Codex in an agent-first world" (February 2026) reported roughly one million lines, about 1,500 merged PRs, a team of three growing to seven, five months, 3.5 PRs per engineer per day, zero hand-written lines. Its practices: a roughly 100-line AGENTS.md as a map, a docs directory as system of record, enforced dependency layering, agent-written linters, telemetry made legible to the agent, and recurring "garbage collection." Its thesis: "Humans steer. Agents execute." and "Our most difficult challenges now center on designing environments, feedback loops, and control systems." Anthropic's "Harness design for long-running application development" (March 24, 2026) described a planner, generator, and evaluator, found that self-evaluation is lenient ("confidently praising the work—even when, to a human observer, the quality is obviously mediocre"), and gave the field's most important caveat: "every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing." Böckeler (martinfowler.com, April 2, 2026) supplied the mental model: guides (feedforward) that "anticipate the agent's behaviour and aim to steer it before it acts" and sensors (feedback) that "observe after the agent acts and help it self-correct," each either computational or inferential. Osmani (April 19, 2026; O'Reilly Radar May 15, 2026): "Agent = Model + Harness. If you're not the model, you're the harness." OpenAI's "Codex as a platform" (August 19, 2026) defines the harness as "the surrounding execution system" and says "the reusable part is the agent loop," citing an ARC-AGI-3 jump from 13.3 to 38.3 percent from harness-level changes alone.

**Agentic engineering (February 2026).** Karpathy's one-year retrospective on vibe coding. Also used by Willison and by the 2026 World's Fair as a track name. It describes how engineers work with coding agents, not what AI engineers build.

**How the terms relate in 2026.** Böckeler (SE Radio, July 22, 2026): prompt, context, and harness engineering "form a continuum," and harness engineering is "a specific form of context engineering." The Thoughtworks Radar warns of "semantic diffusion": "spec-driven development" and "harness engineering" lack stable definitions. Böckeler's own InfoQ timeline (June 8, 2026): autocomplete, then MCP (around March 2025), vibe coding (February 2025), context engineering (June 2025), harness engineering (late 2025), agentic engineering (current).

### 2.5 Conference programs as a self-portrait of the discipline

**AI Engineer Summit, New York, February 19–22, 2025.** Theme "Agents at Work," with an AI Leadership day and an Agent Engineering day. Applicants were told "just chatbots" would be rejected. Announced focus areas: memory, personality, evals, voice, LLM selection, proactive behavior, code generation, planning, multi-agent, safety and privacy, computer use, human-agent interaction design.

**AI Engineer World's Fair, San Francisco, June 3–5, 2025.** Around 3,000 attendees and 300 speakers. Tracks: Tiny Teams, MCP, LLM RecSys, Agent Reliability, AI Infrastructure, Product Management, Voice, GraphRAG, Retrieval and Search, Design Engineering, SWE Agents, Evals, Security, Generative Media, Reasoning and RL, Autonomy and Robotics, plus leadership tracks (AI Architects, AI in the Fortune 500).

**AI Engineer Paris, September 23–24, 2025.** Around 700 attendees, 47 talks, 5 tracks. **AI Engineer Code Summit, New York, November 19–22, 2025.** Leadership and engineering days devoted entirely to coding agents.

**AI Engineer World's Fair, June 29 to July 2, 2026.** 29 tracks, 300 speakers, more than 6,000 attendees. Day one: Software Factories, Claws and Personal Agents, Vision and OCR, Search and Retrieval, Security, Voice and Realtime, LLM Recsys, Forward Deployed Engineering, Data Quality. Day two: Autoresearch, Sandbox and Platform Engineering, Robotics and World Models, Memory and Continual Learning, Evals, Design Engineering, Computer Use, Context Engineering, Posttraining and Midtraining. Day three: Harness Engineering, Generative Media, Agentic Commerce, AI in Finance, Local AI, Graphs, AI in GTM, AI in Healthcare, Agentic Engineering, Inference. The program arc, per TrueFoundry's recap (July 10, 2026), ran loops, then verification, then harness: swyx opened with "Loopcraft: The Art of Stacking Loops," mid-week data from Greptile (AI-generated code at 27.6 percent of merged PRs) and Sonar (about 48 percent of AI-generated code gets explicit review) framed a verification gap **[secondary]**, and Mike Krieger closed with "How Anthropic Builds: Lessons from Labs," reporting that Anthropic's internal usage is "actually much more delegated," with bounded budgets, approval gates, and per-step tracing as operational requirements.

Reading the two World's Fair programs side by side: "Agent Reliability" (2025) became "Harness Engineering," "Context Engineering," "Sandbox and Platform Engineering," "Memory and Continual Learning," and "Evals" (2026). "SWE Agents" became "Software Factories" and "Agentic Engineering." "MCP" disappeared as a track because it became infrastructure. Latent Space's own summary: a single "AI Agents" track three years ago "now requires nine separate tracks."

**Upcoming.** AI Engineer New York, October 12–14, 2026, is themed on financial services. AI Engineer Code Summit, November 10–12, 2026, San Francisco.

### 2.6 Talks and essays about the transition

No widely cited talk is titled or structured as "software engineer to AI engineer"; most such content is SEO roadmap material (Codebasics, Dataquest, Turing College) and was excluded. Four credible pieces are structurally instructive:

- **Karpathy's Software 3.0 talk (June 2025).** Structure: three paradigms, LLM psychology, partial-autonomy product patterns with a running example (MenuGen), then "build for agents." Audiences repeated the Iron Man suit, the autonomy slider, "jagged intelligence," and "works.any() versus works.all()." Lesson: name the psychology of the model before the engineering.
- **Pragmatic Engineer, "AI Engineering in the real world" (March 25, 2025).** Seven company case studies. The most quoted line came from Ross McNairn at Wordsmith: "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have." Lesson: the audience responds to what real teams found hard.
- **Chip Huyen's ACM TechTalk, "From ML Engineering to AI Engineering" (2024).** Slides exist but returned 403 during research **[unverified]**.
- **swyx's original essay (2023).** Structure: why now, the spectrum, what these people do, objections. Still the template for defining the role.

### 2.7 Is using coding agents part of the AI engineer's job?

Yes, and it is no longer distinguishing. Latent Space trend four (July 2026): "coding agents replace IDEs." Karpathy (February 2026): not writing code directly "99% of the time." Willison (May 2026) admits "as the coding agents get more reliable, I'm not reviewing every line of code that they write anymore, even for my production level stuff." swyx (April 2026): "Everything that you should do for agents is something that you should have done for developers anyway." The distinction the leading voices draw is the same as the talk's: agentic engineering is a way of working; AI engineering is a class of system. The one bridge worth naming is that the harness you build around your coding agent (AGENTS.md, linters, tests, hooks) uses the same vocabulary and skills as the harness you build around a production agent. Böckeler's guides-and-sensors model applies to both.

---

## 3. Slide-ready material

**Definitions**

- "When it comes to shipping AI products, you want engineers, not researchers." swyx, Latent Space, June 30, 2023.
- "AI engineering focuses less on modeling and training, and more on model adaptation." Chip Huyen with Gergely Orosz, Pragmatic Engineer, May 20, 2025.
- "An AI agent combines models, tools, an orchestration layer, and runtime services which uses the LM in a loop to accomplish a goal." Google, Introduction to Agents, November 2025.
- "Agent = Model + Harness. If you're not the model, you're the harness." Addy Osmani, April 19, 2026.
- Context engineering: "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference." Anthropic, September 29, 2025.
- "Tools are a new kind of software which reflects a contract between deterministic systems and non-deterministic agents." Anthropic, September 11, 2025.
- Workflows are "systems where LLMs and tools are orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage." Anthropic, December 19, 2024.
- "Agent developer = 'director' who sets the scene (instructions/prompts), selects the cast (tools/APIs), and provides context (data)." Google, November 2025.

**Quotes on the shift**

- "The model alone is no longer the product." swyx, World's Fair keynote, June 30, 2026.
- "Agents can run much more of the inner execution loop, but that outer loop is still engineering." Keynote speaker quoted by Latent Space, July 14, 2026.
- "Humans steer. Agents execute." OpenAI, Harness engineering, February 2026.
- "Our most difficult challenges now center on designing environments, feedback loops, and control systems." OpenAI, February 2026.
- "Every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing." Anthropic, March 24, 2026.
- "Evaluation is the new CI." Jeff Boudier, Hugging Face, in InfoWorld, November 10, 2025.
- "The real engineering leverage is not choosing the right model, it is building systems that can continually measure, test, and swap them." Jeff Boudier, same.
- "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have." Ross McNairn, Wordsmith, in Pragmatic Engineer, March 25, 2025.
- "Demo is works.any(), product is works.all()." Karpathy, June 17, 2025.
- "You can outsource your thinking, but you can't outsource your understanding." Karpathy, April 30, 2026.
- "The gap between prototype and production is often wider than anticipated." Anthropic, June 13, 2025.
- "Error analysis is the most important activity in evals." Hamel Husain, AI Evals FAQ, May 28, 2025.
- "The agent doesn't need more instructions. It needs a world where the right thing to do is obvious and the wrong thing is hard." Attributed to OpenAI's February 2026 post by AlphaSignal, April 21, 2026 **[secondary]**.
- "What's old is new again." Nate Schutta on harness engineering, Thoughtworks podcast, May 14, 2026.

**Statistics**

| Figure | Source and date |
|---|---|
| AI Engineer ranked number one fastest-growing US job; postings up 143 percent in 2025; Software Engineer the most common prior role | LinkedIn Jobs on the Rise, January 2026 |
| 75,000 AI engineer postings added on LinkedIn, 2023 to 2025 | LinkedIn, January 2026 |
| World's Fair attendance: about 3,000 (2025) to more than 6,000 (2026); tracks 18 to 29 | ai.engineer program pages; RedMonk July 2025 |
| AI Engineer events per year: 1 (2023, 2024), 4 (2025), at least 7 (2026) | swyx, January 23, 2026 |
| OpenAI harness experiment: about 1M lines, about 1,500 PRs, 3 to 7 engineers, 5 months, 3.5 PRs per engineer per day, 0 hand-written lines | OpenAI, February 2026 |
| Multi-agent research beat single-agent by 90.2 percent, at about 15x the tokens of chat | Anthropic, June 13, 2025 |
| ARC-AGI-3: 13.3 to 38.3 percent from harness changes alone, with 6x fewer output tokens | OpenAI, August 19, 2026 |
| Start evals with 20 to 50 tasks from real failures | Anthropic, January 9, 2026 |
| Spend 60 to 80 percent of development time on error analysis and evaluation | Hamel Husain, May 28, 2025 |
| AI-generated code is 27.6 percent of merged PRs; about 48 percent gets explicit review | Greptile and Sonar at World's Fair 2026, via TrueFoundry recap **[secondary]** |
| OpenAI FDE team grew from 2 to more than 10 in months | Pragmatic Engineer, August 12, 2025 |

**Short examples**

- Anthropic's long-running harness: an initializer agent writes a feature list and a progress file; each later session starts by reading them, because "each new session begins with no memory of what came before."
- Anthropic's evaluator lesson: models grading their own work "tend to respond by confidently praising the work." Separate the evaluator from the generator.
- OpenAI's AGENTS.md is about 100 lines and acts as a table of contents, not a manual.
- Google's identity requirement: agents need "cryptographically verifiable identity" with delegated authority and least privilege, as "a new principal class distinct from users and service accounts."
- Willison's lethal trifecta (June 16, 2025): private data, untrusted content, external communication. Any two are manageable; all three are exploitable.

---

## 4. Disagreements, controversies, open questions

**Big Model versus Big Harness.** Latent Space's "Is Harness Engineering real?" (March 5, 2026) lays out both camps. Boris Cherny: Claude Code is "the thinnest possible wrapper over the model." Noam Brown: "those scaffolds will also just be replaced by the reasoning models." Against them, Jerry Liu: "the biggest barrier to getting value from AI is your own ability to context and workflow engineer the models," and Osmani: "A decent model with a great harness beats a great model with a bad harness." Anthropic's practice sits between: build the harness, then delete components as models improve, as they did with the sprint construct when moving from Opus 4.5 to 4.6. For the talk: harness components are hypotheses about model limits, with expiry dates.

**Is any of this new?** Thoughtworks' Radar vol. 34 flags "semantic diffusion" and says the field should be "retaining principles, relinquishing patterns." Schutta: "shift left has been the defining concept of software engineering from day one." Böckeler admits she is "trying to find some language" for existing practice. The honest framing: the principles are old, the failure modes are new.

**Vibe coding versus agentic engineering is collapsing.** Willison (May 2026) reports he no longer reviews every line even in production. Karpathy (April 2026) says vibe coding "raises the floor" and agentic engineering "raises the ceiling." The distinction survives as a norm, not as a description of behavior.

**Eval-driven development versus error analysis.** Husain argues pre-written evals "typically fail because LLM failure modes are unpredictable" and error analysis on real traces must come first. Anthropic agrees in practice (start from real failures) but still promotes capability evals written ahead of capability. The talk can present both as phases.

**Multi-agent skepticism.** Anthropic's own result (90.2 percent better) comes with a 15x token cost and an explicit warning that multi-agent underperforms where agents must share context, "such as most coding tasks." The 2026 World's Fair reframed the topic as "the outer loop," not as agent swarms.

**Does the title last?** A Hacker News commenter: "if someone is an AI engineer and his work only became relevant a month ago, very probably it will be obsolete in another month" **[unverified, via search summary]**. Boris Cherny in February 2026 predicted the software engineer title itself gives way to "builder" **[secondary]**. Latent Space's 2026 position is the opposite: the practices "are becoming part of mainstream software development."

**Two meanings of "harness engineering."** Böckeler's essay is for coding agent users; OpenAI's post is about using Codex; Anthropic's are about production agents built on the Agent SDK. Same words, different targets.

**Open questions.** Who owns the eval set when models change every few months? Where does agent identity live in an enterprise's IAM? Is "skills" (markdown plus scripts) a durable integration format or this year's MCP? None of these have consensus answers in the sources reviewed.

---

## 5. Implications for the talk

**Keep the thesis; it is the consensus.** The AI-enabled versus AI engineer split is swyx's categories one and two, and Huyen's definition backs the "systems around foundation models made by others" framing. Say so on a slide; it borrows authority.

**Add the model as an engineered choice.** Every provider's decomposition starts with the model. The audience needs: capability tiers, selecting per task, routing, structured outputs, and planning for a swap every few months (Krieger's "40 to 90 days" claim is secondary and should be presented as reported, not as fact). The InfoWorld line about "systems that can continually measure, test, and swap them" is the slide.

**Rename 3.3 around the loop and the harness, and put durable state and resumability inside it.** Use Anthropic's gather, act, verify loop as the diagram. Name state, sessions, sandboxes, and resumability explicitly; three of the four Anthropic harness-related posts are about surviving context-window boundaries.

**Promote the production-data-to-evals loop from a bullet to the spine of 3.4 and 3.5.** Traces feed error analysis, which feeds tasks, which graduate from capability to regression. This is Husain's and Anthropic's shared methodology and the single thing the case-study sources say developers find hardest.

**Add interaction design for partial autonomy.** One slide: the autonomy slider, fast verification, and transparency of plans. It is a track at the field's own conference two years running and it is absent from the map.

**Fold identity, authorization, and sandboxing into 3.2 and 3.5 with names.** Google's "new principal class" line and Willison's lethal trifecta give the audience two memorable hooks. Treat sandboxing as the execution counterpart of context boundaries.

**Mention fine-tuning once, as the boundary with ML engineering.** The "agent labs thesis" (start on frontier models, specialize, train only when you have data) is the sequence to cite.

**Cut or compress:** RAG mechanics (the field calls it infrastructure now); governance detail beyond what identity and guardrails already cover; any endorsement of framework-level patterns, since the sources themselves now converge on "skills are just markdown files."

**Framing for a beginner-heavy audience.** Open with Karpathy's model psychology (jagged, amnesiac, non-deterministic) so the engineering that follows has a reason. Then walk the loop. Then say plainly that the audience already does harness engineering when they write AGENTS.md and hooks for their coding agent, and that building an enterprise agent is the same skill turned outward, with a customer on the other end. Name the "harness engineering" ambiguity out loud; it will be the most common confusion in the Q&A.

**Anticipate three Q&A challenges:** "Isn't this just software engineering?" (answer with Thoughtworks: old principles, new failure modes); "Won't better models make the harness obsolete?" (answer with Anthropic's stress-test-your-assumptions line); "Is the title going away?" (answer with the 2026 track list: the work fragmented into nine tracks; it did not disappear).

---

## 6. Full source list

Primary sources

- swyx, "The Rise of the AI Engineer," Latent Space, June 30, 2023. https://www.latent.space/p/ai-engineer
- swyx, "The 2025 AI Engineering Reading List," Latent Space, December 27, 2024. https://www.latent.space/p/2025-papers
- swyx, "Announcing AI Engineer Summit NYC: All in on Agent Engineering + Leadership," Latent Space, January 2, 2025. https://www.latent.space/p/2025-summit
- swyx, "Agent Engineering," Latent Space, March 24, 2025. https://www.latent.space/p/agent
- RedMonk, "How Shawn (swyx) Wang Defines the AI Engineer," July 23, 2025. https://redmonk.com/blog/2025/07/23/shawn-swyx-wang-ai-engineer/
- swyx, "Scaling without Slop," Latent Space, January 23, 2026. https://www.latent.space/p/2026
- Latent Space, "[AINews] Is Harness Engineering real?," March 5, 2026. https://www.latent.space/p/ainews-is-harness-engineering-real
- Latent Space, "AIE Europe Debrief + Agent Labs Thesis" (Unsupervised Learning crossover), April 23, 2026. https://www.latent.space/p/unsupervised-learning-2026
- Richard MacManus, "5 Trends That Defined AI Engineering at World's Fair 2026," Latent Space, July 14, 2026. https://www.latent.space/p/aiewf26trends
- Chip Huyen, "AI Engineering: Building Applications with Foundation Models," O'Reilly, January 2025. Table of contents: https://github.com/chiphuyen/aie-book/blob/main/ToC.md
- Chip Huyen, "Agents," huyenchip.com, January 7, 2025. https://huyenchip.com/2025/01/07/agents.html
- Gergely Orosz and Chip Huyen, "The AI Engineering Stack," Pragmatic Engineer, May 20, 2025. https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack
- Gergely Orosz, "AI Engineering with Chip Huyen," Pragmatic Engineer, February 5, 2025. https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen
- Gergely Orosz, "AI Engineering in the real world," Pragmatic Engineer, March 25, 2025. https://newsletter.pragmaticengineer.com/p/ai-engineering-in-the-real-world
- Gergely Orosz, "What are Forward Deployed Engineers, and why are they so in demand?," Pragmatic Engineer, August 12, 2025. https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers
- Gergely Orosz, "The Pulse: Forward deployed engineering heats up again," Pragmatic Engineer, May 14, 2026 (paywalled). https://newsletter.pragmaticengineer.com/p/the-pulse-forward-deployed-engineering
- Andrej Karpathy, "Software Is Changing (Again)," YC AI Startup School, June 17, 2025; notes via Latent Space. https://www.latent.space/p/s3
- Andrej Karpathy, X post on context engineering, June 25, 2025. https://x.com/karpathy/status/1937902205765607626
- Andrej Karpathy, X post on agentic engineering, February 4, 2026 (quoted via The Hans India). https://x.com/karpathy/status/2019137879310836075
- Andrej Karpathy, "Sequoia Ascent 2026 summary," April 30, 2026. https://karpathy.bearblog.dev/sequoia-ascent-2026/
- Birgitta Böckeler, "Harness engineering for coding agent users," martinfowler.com, April 2, 2026. https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
- Thoughtworks, "Key themes in Technology Radar Vol. 34," April 15, 2026. https://www.thoughtworks.com/en-us/insights/podcasts/technology-podcasts/themes-technology-radar-34
- Thoughtworks Technology Podcast, "What is harness engineering?," May 14, 2026. https://www.thoughtworks.com/insights/podcasts/technology-podcasts/what-harness-engineering
- InfoQ Podcast, "From MCP and Vibe Coding to Harness Engineering," June 8, 2026. https://www.infoq.com/podcasts/mcp-vibe-coding-harness-engineering/
- SE Radio 730, "Birgitta Boeckeler on Harness Engineering for AI Agents," July 22, 2026. https://se-radio.net/2026/07/se-radio-730-birgitta-boeckeler-on-harness-engineering-for-ai-agents/
- Anthropic, "Building effective agents," December 19, 2024. https://www.anthropic.com/engineering/building-effective-agents
- Anthropic, "How we built our multi-agent research system," June 13, 2025. https://www.anthropic.com/engineering/multi-agent-research-system
- Anthropic, "Writing effective tools for agents — with agents," September 11, 2025. https://www.anthropic.com/engineering/writing-tools-for-agents
- Anthropic, "Effective context engineering for AI agents," September 29, 2025. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, "Building agents with the Claude Agent SDK," September 29, 2025. https://claude.com/blog/building-agents-with-the-claude-agent-sdk
- Anthropic (Justin Young), "Effective harnesses for long-running agents," November 26, 2025. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Anthropic, "Demystifying evals for AI agents," January 9, 2026. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- Anthropic (Prithvi Rajasekaran), "Harness design for long-running application development," March 24, 2026. https://www.anthropic.com/engineering/harness-design-long-running-apps
- Anthropic, "Managed agents," April 8, 2026. https://www.anthropic.com/engineering/managed-agents
- Anthropic careers, "Forward Deployed Engineer, Applied AI." https://job-boards.greenhouse.io/anthropic/jobs/5302966008
- OpenAI, "A practical guide to building agents," April 2025 (summarized via DEV Community; original returned 403). https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/
- OpenAI, "Harness engineering: leveraging Codex in an agent-first world," February 2026 (fetched via reader proxy; direct fetch returned 403). https://openai.com/index/harness-engineering/
- OpenAI Developers, "Codex as a platform: build on the open agent harness," August 19, 2026. https://developers.openai.com/blog/codex-as-a-platform
- Google (Blount, Gulli, Saboo, Zimmermann, Vuskovic), "Introduction to Agents," Kaggle whitepaper, November 2025 (summarized via vanducng.dev; Kaggle page returned no body). https://www.kaggle.com/whitepaper-introduction-to-agents
- Google Careers, "Staff Applied AI Agent Engineer, Google Cloud Platform." https://www.google.com/about/careers/applications/jobs/results/141264570990633670-staff-applied-ai-agent-engineer/
- Simon Willison, "The lethal trifecta for AI agents," June 16, 2025. https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- Simon Willison, "Vibe coding and agentic engineering are getting closer than I'd like," May 6, 2026. https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/
- Hamel Husain, "Your AI Product Needs Evals," March 29, 2024. https://hamel.dev/blog/posts/evals/
- Hamel Husain, "AI Evals FAQ," May 28, 2025 (updated September 1, 2026). https://hamel.dev/blog/posts/evals-faq/
- Eugene Yan et al., "What We Learned from a Year of Building with LLMs (Part I)," O'Reilly, May 28, 2024. https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/
- LangChain, "The rise of context engineering," June 23, 2025. https://www.langchain.com/blog/the-rise-of-context-engineering
- Philipp Schmid, "The New Skill in AI is Not Prompting, It's Context Engineering," June 30, 2025. https://www.philschmid.de/context-engineering
- Addy Osmani, "Agent Harness Engineering," April 19, 2026; O'Reilly Radar version May 15, 2026. https://addyosmani.com/blog/agent-harness-engineering/ and https://www.oreilly.com/radar/agent-harness-engineering/
- Travis Van, "The hidden skills behind the AI engineer," InfoWorld, November 10, 2025. https://www.infoworld.com/article/4083484/the-hidden-skills-behind-the-ai-engineer.html
- LinkedIn News, "Jobs on the Rise 2026: The 25 fastest-growing roles in the U.S.," January 2026. https://www.linkedin.com/pulse/linkedin-jobs-rise-2026-25-fastest-growing-roles-us-linkedin-news-dlb1c
- Yasin Miran, "We might all be AI engineers now," March 5, 2026, and Hacker News thread. https://yasint.dev/we-might-all-be-ai-engineers-now/ and https://news.ycombinator.com/item?id=47272734

Conference programs

- AI Engineer Summit 2025, New York, February 19–22, 2025. https://www.ai.engineer/summit/2025
- AI Engineer World's Fair 2025, June 3–5, 2025. https://www.ai.engineer/worldsfair/2025
- AI Engineer Paris 2025, September 23–24, 2025. https://www.ai.engineer/paris/2025
- AI Engineer Code Summit 2025, November 19–22, 2025. https://www.ai.engineer/code/2025
- AI Engineer World's Fair 2026, June 29 to July 2, 2026 (track list). https://www.ai.engineer/worldsfair/llms.md
- AI Engineer New York 2026, October 12–14, 2026. https://ai.engineer/nyc/2026
- AI Engineer Code Summit 2026, November 10–12, 2026. https://ai.engineer/code/2026

Secondary coverage used for quotes or figures not obtainable directly

- InfoQ, "OpenAI Introduces Harness Engineering," February 21, 2026. https://www.infoq.com/news/2026/02/openai-harness-engineering-codex/
- AlphaSignal, "A Closer Look at Harness Engineering from Top AI Companies," April 21, 2026. https://alphasignalai.substack.com/p/a-closer-look-at-harness-engineering
- TrueFoundry, "Loops, Harnesses, and 6,000 Engineers — AI Engineer World's Fair 2026 Recap," July 10, 2026. https://www.truefoundry.com/blog/aiewf-2026-loops-harness-engineering
- Hanzla Baig, "Inside AI Engineer World's Fair 2026," DEV Community, June 30, 2026. https://dev.to/hanzla/inside-ai-engineer-worlds-fair-2026-what-6000-engineers-showed-up-to-build-fgm
- The Hans India, "Karpathy Says 'Vibe Coding' Is Fading as 'Agentic Engineering' Becomes the New AI Coding Era," February 2026. https://www.thehansindia.com/technology/tech-news/karpathy-says-vibe-coding-is-fading-as-agentic-engineering-becomes-the-new-ai-coding-era-1045758
- The New Stack, "Why OpenAI and Anthropic are hiring forward deployed engineer teams" (article body not retrievable). https://thenewstack.io/forward-deployed-engineers-ai/
- Ekky Armandi, "AI Engineer vs AI-native Engineer," June 29, 2026 (cited only as evidence of term drift). https://ekky.dev/blog/2026-06-29-ai-engineer-vs-ai-native-engineer/
- vanducng, "Summary: Google's Introduction to Agents," January 10, 2026. https://vanducng.dev/2026/01/10/Google-Introduction-to-Agents-Whitepaper-Summary/
- ChatForest, AIEWF 2026 Day 4 recap (Krieger keynote; page returned 404 at research time, so the "models obsolete every 40–90 days; the harness outlasts the model" claim is **[unverified]**).
