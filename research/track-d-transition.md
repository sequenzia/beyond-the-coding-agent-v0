# Research Track D: The Transition from Software Engineer to AI Engineer

Prepared 2026-09-11 for "Beyond the Coding Agent: From Software Engineer to AI Engineer" (talk week of 2026-09-14).

Scope: how software engineers are actually becoming AI engineers in 2025 and 2026, the job market, which skills transfer and which must be added, common first-timer mistakes, learning resources practitioners recommend, first-person accounts, the changing nature of software engineering itself, and the career-strategy debates. Every claim carries a date and a source. Items I could not verify against a primary source are marked **[unverified]**.

---

## 1. Executive summary

1. **"AI engineer" is the fastest-growing job title in the US for the second year running.** LinkedIn's Jobs on the Rise 2026 (Jan 7, 2026) ranks it #1, based on jobs started Jan 2023 to Jul 2025. LinkedIn's own description of the role is application-side: "building and running AI products, including AI agents and LLMs, and integrating them into a business's workflow." Median prior experience of people hired into it: 3.7 years.
2. **The software engineering market is recovering through AI roles, not around them.** Indeed Hiring Lab (Jul 8, 2026): US software development postings grew almost 15% since Claude Code launched (Feb 24, 2025) while all postings fell 7%. Of the May 2025 to May 2026 increase, 71% was senior roles and 37% was jobs with AI in the title. Software dev postings are still 27.5% below pre-pandemic. AI-related postings hit 6.3% of all US postings in Aug 2026, nearly double the 2022 peak.
3. **The pay premium is real but modest outside frontier labs.** Levels.fyi (Jul 17, 2025): AI engineers earn 6.2% more than peers at entry level, 11.9% at engineer, 14.2% at senior, 18.7% at staff. PwC's much-quoted 56% premium (Jun 2025) measures "jobs requiring AI skills" across all industries, not AI engineer versus software engineer. The frontier-lab tier ($600K to $795K median total comp per Levels.fyi via Pin, May 2026) is a separate market.
4. **Real 2026 job descriptions converge on the same five things:** integrate foundation models via API, build and run evals, design tools and agent loops, debug production failures from traces, and own cost, latency, and security. OpenAI's Applied AI Engineer posting ($230K to $385K) and Anthropic's Forward Deployed Engineer posting both list "evaluation frameworks" and "agent development" as required, not preferred.
5. **The title taxonomy is real but overlapping.** AI engineer (builds on model APIs), applied AI engineer (same, customer-facing), agent engineer (autonomous multi-step systems), forward deployed engineer (embedded with customers, 25 to 50% travel, 4 to 8+ years), AI platform engineer (internal eval harnesses, orchestration, model registry), evals engineer. Employers describe breadth as more valuable than depth in any one of these (Axial Search, Jul 2026).
6. **The consensus on what transfers: nearly everything.** Chip Huyen: "AI engineering is just software engineering with AI models thrown in the stack." One AI engineer's estimate: 20% of the job is AI-specific, 80% is ordinary software engineering. The engineering rigor matters more, not less, because the non-deterministic layer makes everything harder.
7. **The consensus on what must be added:** (a) building intuition for how LLMs behave and fail, (b) evaluation and error analysis on real traces, (c) context engineering (prompts, retrieval, memory, tool descriptions), (d) agent loop design and when not to build one, (e) cost and latency as first-class design constraints. Every credible source names evals as the hardest and most important new skill.
8. **The most-cited first-timer mistakes,** each with a practitioner source: building an agent when a workflow or single call would do (Anthropic, OpenAI), shipping without evals and then "prompt and pray" (Husain and Shankar), adopting frameworks before understanding what they hide (Anthropic, Horthy's interviews with ~100 engineers, Sentry), skipping error analysis and reaching for generic metrics (Husain), shipping unread agent output ("spells disaster within months," Horthy), and treating the demo as done.
9. **The "AI-enabled software engineer versus AI engineer" line is sharpening from both sides.** Karpathy (Apr 30, 2026) now calls professional use of coding agents "agentic engineering" and says the skill is coordinating "fallible and stochastic, but extremely powerful" agents "without sacrificing your quality bar." That is the AI-enabled software engineer. Huyen, swyx, and the job postings describe the AI engineer as someone who ships systems whose runtime behavior depends on a model. Same tools, different deliverable.
10. **Developers use AI overwhelmingly but trust it less each year.** Stack Overflow 2025 (49,000+ respondents): 84% use or plan to use AI tools, 51% of professionals daily, but only 33% trust the output and 3% "highly trust" it; 66% say the top frustration is output that is "almost right." Only 31% use agents. The 2026 survey opened Jun 23, 2026 and results were not published as of Sep 11, 2026.
11. **Productivity evidence is contested.** METR's RCT (Jul 2025) found experienced open-source developers were 19% slower with early-2025 AI tools while believing they were 20% faster. METR's Feb 2026 follow-up found weak evidence of improvement, with confidence intervals spanning zero, and concluded selection effects had compromised the design. Do not put a single productivity number on a slide.
12. **The market is shifting toward agents specifically, not cooling.** AI engineering postings ran roughly 1,550 per week through H1 2026 and rose into late Q2 (Axial). Conference tracks at the June 2026 AI Engineer World's Fair were dominated by agent topics: Harness Engineering, Agentic Engineering, Context Engineering, Evals, Forward Deployed Engineering, Computer Use, Memory. Anthropic's and OpenAI's own postings are agent postings.
13. **The durability debate has two credible sides.** "Folds back in": Huyen's framing, Levels.fyi's "AI/ML is now core engineering," Boris Cherny's "the title of software engineer is going to go away... maybe 'builder'" (Feb 2026). "Stays distinct": two years at #1 on LinkedIn, proliferating specialized titles (evals, FDE, agent, platform), and swyx's 2023 prediction that AI engineer postings would outnumber ML engineer postings within five years, which looks on track.
14. **Resources practitioners actually recommend fit on one slide:** Chip Huyen's *AI Engineering* (O'Reilly, 2025); Anthropic's "Building Effective Agents" (Dec 2024); OpenAI's "A Practical Guide to Building Agents" (2025); Husain and Shankar's evals course and forthcoming book (Oct 31, 2026); Hugging Face's free Agents course; Google and Kaggle's free 5-Day AI Agents Intensive (1.5 million learners, next run recorded June 2026); DeepLearning.AI's Agentic AI course by Andrew Ng; Anthropic Academy and OpenAI Academy developer tracks (free); Latent Space and Pragmatic Engineer for staying current; Dex Horthy's 12-Factor Agents.
15. **First-person accounts agree on three surprises:** the hardest part is getting comfortable with non-deterministic outputs and evaluation (Ross McNairn, Wordsmith); vendors and frameworks push over-engineering that a self-taught engineer can beat in two months (Ryan Cogswell, DSI); and speed arrives before confidence does ("Things got faster, but confidence didn't just come along for the ride," Ibtihaaj Khurram, Jan 2026).

---

## 2. Detailed findings by theme

### 2.1 Job market: growth, pay, titles, and what postings ask for

**Posting growth.**

- LinkedIn Jobs on the Rise 2026 (LinkedIn News, Jan 7, 2026). AI Engineer is #1 of 25 fastest-growing US roles. Methodology: millions of jobs started by members Jan 1, 2023 to Jul 31, 2025, ranked by growth rate, excluding internships and titles dominated by a few companies. Four of the top five are AI roles (AI Engineer, AI Consultant/Strategist, Data Annotator, AI/ML Researcher). AI Engineer profile: most common skills LangChain, RAG, PyTorch; top industries Technology and Internet, IT Services, Business Consulting; top cities San Francisco, New York, Dallas; 23% women; median prior experience 3.7 years; 26.2% remote, 27.1% hybrid. The "143% year-over-year" growth figure widely attached to this ranking appears in secondary coverage (HR Leader, Dice) and not on the LinkedIn page I fetched **[unverified]**.
- CBS News (Apr 16, 2026), reporting LinkedIn data: AI engineer is the fastest-growing role for young and entry-level workers for the second year; between 2023 and 2025 LinkedIn carried 639,000 AI-related US postings, 75,000 of them AI engineer roles. LinkedIn's definition there: "building and running AI products, including AI agents and Large Language Models (LLMs), and integrating them into a business's workflow." Tech leads hiring, then financial services, defense, universities, consulting. Context: unemployment for ages 20 to 24 was 6.4% in Mar 2026 versus 4.3% overall.
- World Economic Forum (Jan 2026), citing LinkedIn: AI has added "1.3 million new roles like AI Engineers, Forward-Deployed Engineers and Data Annotators" plus 600,000 data-center jobs. Page could not be fetched; figure taken from search summary **[unverified]**.
- Indeed Hiring Lab, Guillermo Gallacher, "AI and Job Postings: From Destruction to Creation?" (Jul 8, 2026). "US software development job postings have grown by almost 15% since the launch of Claude Code in late February, 2025, while overall job postings fell by 7%." Still "about 27.5% below their pre-pandemic level." Of the May 2025 to May 2026 increase, 71% came from senior roles and 37% from jobs mentioning AI in the title. AI-exposed occupations fell most in 2022 to 2026 and rebounded most in 2025 to 2026. Rebound visible across English-speaking economies.
- Indeed Hiring Lab, Cory Stahle (Jan 22, 2026). Share of all US postings mentioning AI reached 4.2% in Dec 2025. Software development, IT, and scientific R&D postings mention AI "20% or more of the time." AI-mentioning tech postings were 45% above Feb 2020 while overall tech postings were 34% below.
- Indeed Hiring Lab, US Labor Market Snapshot (Aug 24, 2026). Software development postings index at 74.4 (Feb 2020 = 100), up from the May 2025 low of 61.1. AI-related postings are 6.3% of all postings, versus a prior peak of 3.3% in 2022.
- Axial Search, "AI Engineering Jobs in 2026: A Data-Backed Market Map" (Jul 21, 2026). Public US postings tracked weekly since Jan 2026. Baseline about 1,550 AI engineering postings per week, range 927 (early March) to 2,327 (late June); "late Q2 volume ran higher than the January baseline, not lower." Employers: professional services 28%, technology 24%; 47% of roles at companies with 10,000+ employees. Skills: Python 62%, cloud 55%, foundation models 51%, then observability and RAG. Their summary: "breadth beats depth." Recruiter-published; methodology stated but not audited.
- Stanford HAI 2026 AI Index is cited by Pin (May 2026) for "agentic AI listings surged 10,854% year-over-year." I could not find this figure on the HAI report pages **[unverified]**.

**Compensation.**

- Levels.fyi, "2025 AI Engineer Compensation Trends" (Jul 17, 2025). Premium over non-AI engineers at the same level: entry 6.2% (down from 10.7% in 2024), engineer 11.9%, senior 14.2%, staff 18.7% (up from 15.8%). "On average, AI-focused Software Engineers earn $245,000 per year in the US." Outliers: Intuit staff AI ~$917K vs ~$515K non-AI.
- Levels.fyi 2025 End of Year Report: "AI/ML Is Now Core Engineering," moving "from niche specialty to one of the largest and highest-paid SWE tracks in 2025."
- PwC 2025 Global AI Jobs Barometer (Jun 3, 2025). Analysis of "close to a billion job ads" across six continents through end-2024. "Average 56% wage premium in 2024" for jobs requiring AI skills, up from 25% the year before. Note this is a cross-industry premium for AI skills, not an AI-engineer-versus-software-engineer comparison.
- Pin, "AI Compensation Benchmarks 2026" (May 3, 2026), aggregating: Levels.fyi May 2026 median total comp for software engineers at Anthropic $600K and OpenAI $795K; Robert Half 2026 AI/ML engineer midpoint $170,750; Glassdoor Feb 2026 AI engineer national median $173,482. Pin frames a "two-tier market." Secondary aggregation; treat the enterprise figures as indicative.
- Blind thread on transitioning (Jan 2026): an Amazon engineer expects "a pretty booming and popular career path for the next few decades" because "most organizations lack AI expertise"; a New Relic engineer warns it is "quite difficult as a newcomer" and defines the job as "building applications around LLMs using RAG, fine tuning models, creating platforms and tooling."

**Title taxonomy.** Drawn from Ivan Turkovic's "AI Job Title Reference Guide 2026" (Apr 2026, cites Levels.fyi Q3 2025 and Glassdoor) and cross-checked against postings:

| Title | What it means in 2026 postings | Notes |
|---|---|---|
| AI Engineer | Builds product features on pretrained model APIs | LinkedIn #1; $159K to $245K US per Turkovic |
| Applied AI Engineer | Same core skills, customer- or deployment-facing; at labs, works on agent behavior and evals | OpenAI posting $230K to $385K |
| Agent Engineer / Agentic AI Engineer | Autonomous multi-step systems, tool orchestration, planning | Turkovic reports "986% YoY growth" **[unverified]** |
| Forward Deployed Engineer | Embedded with enterprise customers; ships production apps in their systems | Anthropic requires 4 to 8+ years, 25 to 50% travel |
| AI Platform Engineer | Owns internal eval harnesses, orchestration, model registry, observability | Growing as enterprises centralize (Elsevier RAG platform case) |
| Evals Engineer | Designs evaluation harnesses and graders | Turkovic: "most under-valued title relative to its importance" |
| ML Engineer | Trains and deploys models from data | The other side of swyx's "API line" |

**What real 2026 postings ask for.**

- OpenAI, Applied AI Engineer, Codex Core Agent team ($230K to $385K; SF, NYC, Seattle, London). Responsibilities: "Design and refine agent behaviors for real-world coding tasks"; "develop evaluations measuring agent performance, failures, and edge cases"; improve via "prompt optimization, tool-use approaches, context design"; "Examine production failures and systematically strengthen robustness"; build feedback and data infrastructure. Required: experience shipping ML or LLM products; strong Python; "model evaluation, fine-tuning, or prompt engineering"; "systems thinking focused on user outcomes beyond model metrics alone"; "aptitude for debugging real-world complications."
- Anthropic, Forward Deployed Engineer, Applied AI (Paris). "Work within customer systems to build production applications with Claude models"; "Deliver technical artifacts for customers like MCP servers, sub-agents, and agent skills"; travel 25 to 50%. Required: "8+ years of experience in a technical, customer facing role"; "Production experience with LLMs including advanced prompt engineering, agent development, evaluation frameworks"; Python; "high agency and ability to navigate organizational ambiguity." A US FDE variant asks for 4+ years and hands-on experience with tool use, extended thinking, or Claude Code.
- Anthropic, Applied AI Engineer, Beneficial Deployments: "advising on evals, hill-climbing on harnesses, and prototyping new agents" (from listing summary; full page not fetched).
- Enterprise examples (DEV Community survey of five open agent roles, May 6, 2026): PointClickCare Principal AI Engineer (Autonomous Agent), $179K to $199K base, requires function calling, API integration, and "authentication, RBAC, audit logging"; Veeam AI Agents CI/CD DevOps Engineer (pipelines, Kubernetes, secrets, LLMOps); Netomi Prompt Engineer (tool descriptions, automated testing, benchmarking). The author's cross-cutting read: "tool integration as baseline," "evaluation is operational," "security is mandatory."
- Anthropic interview loop. Third-party prep sites describe five stages (recruiter screen, technical screen, take-home or live coding, customer-conversation simulation, onsite system design) with a values round "weighted as heavily as the technical rounds." Anthropic does not publish this; treat as **[unverified]**. The verified signal is the postings themselves.

**Who hires and for what.** Frontier labs hire applied and forward-deployed engineers to make their models work inside customer systems. Large enterprises (47% of Axial's postings) and professional services firms (28%) hire AI engineers and platform engineers to build internal agents and shared RAG and eval infrastructure. Regulated industries (healthcare, insurance, finance) treat agents as systems-engineering problems with audit and permission requirements. Startups hire generalist AI engineers who own the full loop.

### 2.2 Skills that transfer and skills that must be added

**Transfer: the case from credible sources.**

- Chip Huyen with Gergely Orosz, "The AI Engineering Stack" (May 20, 2025): three layers (application development, model development, infrastructure); "AI engineering is just software engineering with AI models thrown in the stack"; ML knowledge becomes "a nice-to-have and less of a must-have." Transferable from ML engineering: mapping business metrics to performance indicators, systematic experimentation, optimizing for speed and cost, production feedback loops.
- Huyen on the Pragmatic Engineer podcast (Feb 5, 2025): "AI models can be used simply by making API calls. This lowers the barrier to entry." "Solving the problem is more important than using the latest AI tools." Start with prompting, add data, then progress; use human-in-the-loop first.
- swyx, "The Rise of the AI Engineer" (Jun 30, 2023): the "API line" separates people who train and host models from people who build on top of them, and it is "permeable." Cites Karpathy: "One can be quite successful in this role without ever training anything." "When it comes to shipping AI products, you want engineers, not researchers."
- Pragmatic Engineer, "AI Engineering in the real world" (Mar 25, 2025): seven case studies of teams building first AI features with no prior AI expertise. Skills that mattered: self-directed learning, breaking down problems, domain expertise to judge outputs, "traditional software engineering principles." Elsevier's Matt Morgis moved from manager back to IC because "working with AI has rekindled my joy in coding."
- Anecdote (Frank's World, Jul 13, 2026): an AI engineer at a startup says "about 20% of his role involves AI-specific tasks, while the remaining 80% mirrors regular software engineering duties."
- Ankit Rattan (DEV Community, Jan 2026): "The difference between a Junior Dev and an AI Engineer today isn't just knowing Python, it's knowing how to glue a probabilistic model to a deterministic system without everything breaking apart." "Understanding embeddings is the new 'understanding SQL.'"

**Add: the new competencies, mapped to the speaker's five areas.**

| Speaker's area | Competency to add | Source |
|---|---|---|
| 1. Context and knowledge | Context engineering: "curating and maintaining the optimal set of tokens during LLM inference," covering system prompts, tools, retrieved data, message history, compaction, and memory | Anthropic, "Effective context engineering for AI agents" (Sep 29, 2025) |
| 1. Context and knowledge | RAG as "the single most common production pattern"; LinkedIn lists RAG as a top-three skill for the title | LinkedIn (Jan 2026); swyx |
| 2. Tools and interfaces | Tool design: "self-contained functions with minimal overlap, clear intended use, descriptive parameters"; OpenAI's three tool types (data, action, orchestration) | Anthropic (Sep 2025); OpenAI guide (2025) |
| 3. Harness and orchestration | Knowing workflow versus agent and choosing the simplest; handling compounding error across steps; controlling context and control flow in code | Anthropic (Dec 2024); Huyen "Agents" (Jan 2025); Horthy 12-Factor |
| 4. Evals and verification | Error analysis on real traces before automated evals; binary labels; custom assertions before LLM judges | Husain FAQ (May 2025, rev. Sep 2026); Anthropic (Jan 2026) |
| 5. Operations and responsibility | Cost and latency as design constraints (baseline with the best model, then downshift); permissions, RBAC, audit logging; human checkpoints | OpenAI guide; PointClickCare posting; Horthy |

**Model intuition** underlies all five. Huyen's list of fundamentals: what an LLM is and how it works, how to evaluate it, RAG, what fine-tuning is, inference optimization. OpenAI's posting phrases it as "systems thinking focused on user outcomes beyond model metrics alone."

**Domain expertise as a skill.** Two of the Pragmatic Engineer case studies (Simply Business insurance chatbot, Wordsmith legal) found that "engineers without domain knowledge struggle to assess solution quality." Husain's process assigns one domain expert as the "benevolent dictator" for quality judgments.

### 2.3 Common mistakes when engineers first build AI systems

1. **Building an agent when a workflow or single call would do.** Anthropic, "Building Effective Agents" (Dec 19, 2024): "For many applications, however, optimizing single LLM calls with retrieval and in-context examples is usually enough." Workflows are "LLMs and tools orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage." OpenAI's guide (2025) gives three criteria that justify an agent (complex decision-making, difficult-to-maintain rules, heavy reliance on unstructured data) and warns: "Before committing to building an agent, validate that your use case can meet these criteria clearly. Otherwise, a deterministic solution may suffice." Huyen (Feb 2025): using GenAI "when simpler solutions (spreadsheets, manual scheduling) suffice."
2. **Shipping without evals, then "prompt and pray."** Husain and Shankar (Lenny's Newsletter, Sep 25, 2025): "Always start with error analysis (don't jump into writing evals)." Husain (Mar 29, 2024): "Success with AI hinges on how fast you can iterate," and most teams cannot because they only know how to change behavior, not measure it. Anthropic (Jan 9, 2026): "Evals get harder to build the longer you wait. Early on, product requirements naturally translate into test cases." Start with 20 to 50 tasks from real failures.
3. **Not reading traces; reaching for generic metrics.** Husain's FAQ: "Do not skip error analysis." "The abuse of generic metrics is endemic. Many eval vendors promote off-the-shelf metrics, which ensnare engineers into superfluous tasks." Practical rule: 30 minutes reviewing 20 to 50 outputs with one domain expert; allocate 60 to 80% of development time to error analysis and evals; binary pass/fail, not Likert scales; "A 70% pass rate might indicate a more meaningful evaluation." Anthropic (Jan 2026): "A good task is one where two domain experts would independently reach the same pass/fail verdict."
4. **Over-engineering with frameworks and vendor stacks.** Anthropic (Dec 2024): frameworks "can also make it tempting to add complexity when a simpler setup would suffice"; start with direct API calls. Dex Horthy interviewed ~100 engineers with production agents and found they "abandoned popular frameworks like LangChain and CrewAI, instead building custom pipelines" (Pragmatic Engineer, Jul 15, 2026). Sentry rejected LangChain and built in-house tooling (Mar 2025). DSI's Ryan Cogswell was quoted a 6 to 9 month, multi-service architecture by a vendor whose operating cost exceeded the company's entire infrastructure budget; he self-taught and shipped in two months.
5. **Compounding errors and shipping unread output.** Huyen (Jan 2025): "overall accuracy decreases as the number of steps increases." Horthy: "Shipping unread code spells disaster within months," from a July 2025 experiment he had to shut down four months later. Other Horthy failure modes: overfilling context into "the dumb zone," continuing a poisoned session, premature token optimization.
6. **Ignoring cost and latency.** OpenAI's guide: set up evals to establish a baseline, meet the accuracy target with the best model, then "optimize for cost and latency by replacing larger models with smaller ones where possible." Huyen ranks inference optimization among the five fundamentals.
7. **Treating the demo as done.** Husain (2024): most builders focus only on changing behavior, "preventing meaningful progress beyond demos." The MIT NANDA "GenAI Divide" report (Jul/Aug 2025) is widely cited for "95% of pilots fail"; it actually found 95% of ~300 reviewed initiatives showed no measurable P&L impact, largely for lack of baselines, and it is not peer-reviewed. Use it, if at all, as "most pilots never get measured," not "most pilots fail."
8. **Abandoning too early, or too late.** Huyen: "Abandoning GenAI without diagnosing where failures occur" and "jumping to complex solutions (vector databases, fine-tuning) without trying simpler approaches."

### 2.4 Learning roadmaps and resources practitioners recommend

Books

- Chip Huyen, *AI Engineering* (O'Reilly, Jan 2025). Recommended by Gergely Orosz (two Pragmatic Engineer features), the louisfb01 community guide, and nearly every 2026 reading list. Covers evaluation, prompts, RAG, agents, fine-tuning, inference. Reviewers single out its treatment of evaluating open-ended outputs.
- Hamel Husain and Shreya Shankar, *Evals for AI Engineers* (O'Reilly, due Oct 31, 2026). Book form of their Maven course, which has trained 2,000+ (Lenny's, Sep 2025) to 3,000+ (course page, Jan 2026) engineers and PMs, including teams at OpenAI and Anthropic. Recommended by Lenny Rachitsky and Aakash Gupta.
- Also cited: Paul Iusztin and Maxime Labonne, *LLM Engineering Handbook*; Sebastian Raschka, *Build a Large Language Model (From Scratch)* (for model intuition, not for the job).

Free vendor guides (cited by practitioners as the best short reads)

- Anthropic, "Building Effective Agents" (Dec 19, 2024); "Effective context engineering for AI agents" (Sep 29, 2025); "Demystifying evals for AI agents" (Jan 9, 2026).
- OpenAI, "A Practical Guide to Building Agents" (34 pages, 2025).
- Dex Horthy, "12-Factor Agents" (2025). Front page of Hacker News, thousands of GitHub stars; recommended by the LangChain team as required reading despite its skepticism of frameworks.
- Hamel Husain, "Your AI Product Needs Evals" (Mar 29, 2024) and the Evals FAQ (May 2025, updated Sep 1, 2026).

Courses

- Google and Kaggle, 5-Day AI Agents Intensive. Free. First run Nov 10 to 14, 2025 reached 1.5 million learners with 11,000+ capstone submissions (Google blog, Dec 18, 2025); second run Jun 15 to 19, 2026 with recordings and a Kaggle Learn Guide. Topics: architectures, tools, memory, evaluation, prototype to production.
- Hugging Face Agents Course. Free including certification. Units: fundamentals, frameworks (smolagents, LangGraph, LlamaIndex), real use cases, final assignment; bonus units on fine-tuning and observability. 3 to 4 hours per week.
- DeepLearning.AI, *Agentic AI* by Andrew Ng. Four patterns (reflection, tool use, planning, multi-agent) plus evals and error analysis. ~10 hours. Free to audit; $25/month for labs and certificate.
- Anthropic Academy (academy.claude.com, launched Mar 2, 2026; expanded Aug 2026). Free. Developer courses: Building with the Claude API (9 hours; prompting, tool use, RAG, agents, MCP, production patterns), Claude Platform 101, Claude Code 101, Claude Code in Action, Introduction to MCP, MCP Advanced Topics, Introduction to agent skills, Introduction to subagents.
- OpenAI Academy (academy.openai.com). Free with a ChatGPT account. "Build with AI" track plus Builder Bootcamps on RAG, Agents, and Realtime; help-center listings also name Evaluate AI Applications, Design and Build Agentic Systems, and Optimize AI Application Performance (help page returned 403; from search summary **[unverified]**).
- Husain and Shankar, "AI Evals for Engineers and PMs" (Maven). Paid cohorts, four weeks; the January 2026 cohort ran Jan 26 to Feb 21.

Staying current

- Latent Space (swyx and Alessio). "The 2025 AI Engineering Reading List" (Dec 2024): ~50 papers and posts, one per week. The AI Engineer conference grew from one event in 2023 to four in 2025 and a planned seven in 2026; the June 29 to Jul 2, 2026 World's Fair had 29 tracks and 6,000+ attendees.
- The Pragmatic Engineer (Gergely Orosz): the two Huyen features, "AI Engineering in the real world," and the Horthy context-engineering feature.
- Simon Willison's blog and his in-progress "Agentic Engineering Patterns" guide (started Feb 23, 2026).
- Community guide: louisfb01/start-ai-engineering (GitHub, updated through 2026) recommends the sequence: foundation videos, one free course plus framework docs, one or two books, "two to three real projects that break in instructive ways," then evals, tracing, and deployment.

Karpathy's Zero to Hero and 3Blue1Brown remain the standard recommendations for model intuition (HN, Apr 2024), but every 2025 to 2026 source puts them after, not before, shipping something.

### 2.5 First-person accounts

- **Ryan Cogswell, Data Solutions International** (Pragmatic Engineer, Mar 2025). 25-year veteran, no AI background. A vendor proposed SageMaker, Langfuse, multiple databases, and a 6 to 9 month timeline. He self-taught and shipped a survey-comment summarizer on Bedrock and Postgres in two months.
- **Ross McNairn, Wordsmith** (same). "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have." What surprised the team: "the learning curve for rethinking problem-solving approaches entirely."
- **Matt Morgis, Elsevier** (same). Went from engineering manager to staff engineer to build a central RAG platform after multiple teams duplicated the work.
- **Ibtihaaj Khurram, "The Year I Stopped Chatting and Started Managing"** (Jan 18, 2026). Moved from AI as autocomplete to delegating whole tasks. "Things got faster, but confidence didn't just come along for the ride." "We're not being displaced; we're being repositioned."
- **Ankit Rattan, "Software Developer to AI Engineer: The Change Is Real"** (Jan 2026). The shift is "from deterministic logic to probabilistic systems"; go beyond prompting to understand how RAG and agent decision-making work mechanically.
- **Simon Willison** (May 6, 2026). "I'm not reviewing that code. And now I've got that feeling of guilt: if I haven't reviewed the code, is it really responsible for me to use this in production?" His resolution: trust comes from use, not inspection. "I want somebody to have used the thing."
- **Sean Goedecke, "Software engineering may no longer be a lifetime career"** (Apr 24, 2026). "Using AI means you don't learn as much from your work," yet "we might still be obliged to use it, if it provided enough short-term benefits."
- **Hacker News, "Reflections on software engineering in the age of AI"** (2026). A 30-year C++ developer: Claude Code is "excellent... However I always always always check and verify every change before committing." Another: "my mental model of the code rots... really hard to recover from that state."
- **Hacker News, "Ask HN: How to transition from SWE to AI/ML engineer"** (Apr 2024). Still the most-linked thread. Top advice: build something ("Make sure you produce something, even if it's just nice pixels"); skeptic: "There's a huge glut of ML engineers." Note this thread predates the agent era and conflates AI and ML engineering.

Common threads across accounts: how long it took ranged from two months (Cogswell, one feature) to a year of workflow change (Khurram); the first project that helped was always narrow and real (a summarizer, a support bot with an approved-answers loop, a note-taker); the recurring surprise is that speed and non-determinism outrun confidence, and evals are how confidence is rebuilt.

### 2.6 The changing nature of software engineering

- **Karpathy, Sequoia Ascent (Apr 30, 2026).** Vibe coding "raises the floor"; agentic engineering "raises the ceiling." "You have agents, which are spiky entities. They are fallible and stochastic, but extremely powerful. How do you coordinate them to go faster without sacrificing your quality bar?" The practice: design specs, supervise plans, inspect diffs, write tests, create eval loops, manage permissions and worktrees. Needed skills shift from API recall to foundations (storage, memory, security boundaries), decomposition, and recognizing when agents go off the rails. He describes December 2025 as the point where "the chunks just came out fine."
- **Willison (Feb 23, 2026).** Agentic engineering is "building software using coding agents" that "can both generate and execute code." "The cost to churn out initial working code has dropped to almost nothing, how does that impact our existing intuitions about how we work?"
- **Boris Cherny, Lenny's Podcast (Feb 2026).** "I think today coding is practically solved." "We're going to start to see the title of software engineer go away... maybe 'builder,' maybe 'product manager.'" "Software engineers are also going to be writing specs. They're going to be talking to users." "100% of my code is written by Claude Code."
- **Anthropic Economic Index.** Apr 28, 2025: 79% of Claude Code conversations were "automation" versus 49% on Claude.ai; the "feedback loop" pattern (AI does the task, human validates) was 35.8% on Claude Code. Mar 24, 2026: coding is 35% of Claude.ai conversations and migrating to API-based workflows; users with 6+ months of experience have 10% higher conversation success rates. Jun 2026 ("Cadences"): conversations producing code show 0.53 points more autonomy (1 to 5 scale) in Claude Code than in chat; heavy delegators "report learning at equivalent rates to others."
- **Stack Overflow 2025 Developer Survey** (49,000+ respondents, 177 countries, published Jul 2025). 84% use or plan to use AI tools (76% in 2024); 51% of professionals daily. Trust: 33% trust accuracy, 46% distrust, 3% "highly trust"; 10+ year developers highest "highly distrust" at 20.7%. 66% cite "almost right, but not quite"; 45% say debugging AI code is more time-consuming. Agents: 31% use them, 38% have no plans; 69% of agent users report higher productivity. Positive sentiment fell from 70%+ to 60%. Stack Overflow's Feb 18, 2026 follow-up frames it as a "trust gap" and notes trust fell from 40% (2024) to 29% (2025) on its headline measure. The 2026 survey opened Jun 23, 2026; results not published as of Sep 11, 2026.
- **METR.** Jul 10, 2025 RCT: 16 experienced open-source developers, 246 tasks; AI-allowed tasks took 19% longer (CI: 2% to 39% longer) while developers estimated a 20% speedup. Feb 24, 2026 update with 57 developers, 143 repos, 800+ tasks: original-cohort estimate -18% (CI -38% to +9%), new developers -4% (CI -15% to +9%); METR says selection effects make this "only very weak evidence" and that "the true speedup could be much higher among the developers and tasks which are selected out"; they are redesigning the study.
- **Engineering leaders (Aviator, Jan 12, 2026).** Annie Vella: "Learn how to build software that uses AI. Not how to build the LLM, but how to build systems around it." Patrick Debois: "Dev jobs are becoming ops jobs. My role shifts from producer to supervisor." Angie Jones (Block): "Companies are hiring junior engineers again... I look at portfolios showing what you've built with AI."

### 2.7 Career strategy debates

**Is "AI engineer" durable, or does it fold back into software engineering?**

Strongest case for folding back:
- Huyen: "just software engineering with AI models thrown in the stack." Levels.fyi 2025: "AI/ML is now core engineering."
- Indeed: 37% of the software-development rebound is AI-titled work, and 20%+ of all software postings mention AI. When the modifier is on a fifth of postings, it stops discriminating.
- Cherny: the title that disappears is "software engineer," replaced by "builder," which implies AI-building is the default, not a specialty.
- Axial: "breadth beats depth"; employers want full-stack engineers who can also do the AI parts.
- The 80/20 anecdote: most of the job is still software engineering.

Strongest case for durability:
- Two years at #1 on LinkedIn with a distinct skill profile (RAG, LangChain, PyTorch) and a distinct experience profile (3.7 years median).
- Specialization is increasing, not collapsing: evals engineer, FDE, agent engineer, AI platform engineer, each with separate postings and pay bands. Turkovic predicts "AI delivery engineer" becomes the most common title at sub-200-person companies by 2027 (prediction, not data).
- swyx's 2023 prediction that AI engineer postings outnumber ML engineer postings within five years is on track; the "API line" has become an organizational line (application teams versus model teams).
- The skills the postings require (evals, context engineering, agent loops, trace debugging) are not yet taught in standard software engineering curricula or interview loops.

**Is the market cooling, heating, or shifting to agents in 2026?** Shifting toward agents, and not cooling. Evidence: Axial's H1 2026 volume rising into late Q2; Indeed's AI share at a record 6.3% (Aug 2026); lab postings are agent postings; June 2026 World's Fair tracks are agent-native (Harness Engineering, Agentic Engineering, Context Engineering, Computer Use, Memory, Evals, FDE). swyx's "Agent Labs thesis" (Apr 23, 2026): start with frontier models, specialize to a domain, then train your own once you have workload and data; "If it doesn't exist as an API that agents can use, it doesn't exist." Caveats: entry-level generalist postings are down (Robert Half and Pin cite a 25% decline from 2023 peak **[unverified]**); the senior skew (71% of Indeed's rebound) means the door is narrower for juniors; the Blind thread's "quite difficult as a newcomer" is a fair warning.

---

## 3. Slide-ready material

**Statistics**

| Statistic | Source, date |
|---|---|
| AI Engineer is the #1 fastest-growing US job for the second year | LinkedIn Jobs on the Rise, Jan 7, 2026 |
| 639,000 AI-related US postings 2023 to 2025; 75,000 for AI engineers | LinkedIn via CBS News, Apr 16, 2026 |
| Software dev postings +15% since Claude Code launch; all postings -7% | Indeed Hiring Lab, Jul 8, 2026 |
| 71% of the software rebound is senior; 37% has AI in the title | Indeed Hiring Lab, Jul 8, 2026 |
| Software dev postings still 27.5% below pre-pandemic | Indeed Hiring Lab, Jul 8, 2026 |
| AI-related postings 6.3% of all US postings, vs 3.3% peak in 2022 | Indeed Hiring Lab, Aug 24, 2026 |
| AI premium: 6.2% entry, 11.9% engineer, 14.2% senior, 18.7% staff | Levels.fyi, Jul 17, 2025 |
| 84% of developers use or plan to use AI tools; 33% trust output; 3% highly trust | Stack Overflow, 2025 survey |
| 66% say the top frustration is output that is "almost right" | Stack Overflow, 2025 survey |
| 31% of developers use agents; 38% have no plans to | Stack Overflow, 2025 survey |
| Experienced devs were 19% slower with AI and believed they were 20% faster | METR, Jul 10, 2025 |
| 79% of Claude Code conversations were automation vs 49% on Claude.ai | Anthropic Economic Index, Apr 28, 2025 |
| 1.5 million learners in Google and Kaggle's 5-day agents course | Google, Dec 18, 2025 |
| ~1,550 US AI engineering postings per week in H1 2026, rising into Q2 | Axial Search, Jul 21, 2026 |

**Quotes**

- "AI engineering is just software engineering with AI models thrown in the stack." Chip Huyen, Pragmatic Engineer, May 20, 2025.
- "When it comes to shipping AI products, you want engineers, not researchers." swyx, Jun 30, 2023.
- "One can be quite successful in this role without ever training anything." Andrej Karpathy, quoted by swyx, 2023.
- "You have agents, which are spiky entities. They are fallible and stochastic, but extremely powerful. How do you coordinate them to go faster without sacrificing your quality bar?" Karpathy, Sequoia Ascent, Apr 30, 2026.
- "Getting comfortable with evaluations and iterating on non-deterministic outputs is the biggest challenge most devs have." Ross McNairn, Wordsmith, Mar 2025.
- "For many applications, optimizing single LLM calls with retrieval and in-context examples is usually enough." Anthropic, Dec 19, 2024.
- "Before committing to building an agent, validate that your use case can meet these criteria clearly. Otherwise, a deterministic solution may suffice." OpenAI, A Practical Guide to Building Agents, 2025.
- "Evals get harder to build the longer you wait." Anthropic, Jan 9, 2026.
- "Always start with error analysis (don't jump into writing evals)." Hamel Husain and Shreya Shankar, Sep 2025.
- "A good task is one where two domain experts would independently reach the same pass/fail verdict." Anthropic, Jan 9, 2026.
- "Shipping unread code spells disaster within months." Dex Horthy, Jul 2026.
- "Things got faster, but confidence didn't just come along for the ride." Ibtihaaj Khurram, Jan 18, 2026.
- "Learn how to build software that uses AI. Not how to build the LLM, but how to build systems around it." Annie Vella, Jan 2026.
- "I think we're going to start to see the title of software engineer go away." Boris Cherny, Feb 2026.

**Definitions**

- AI engineer (swyx, 2023): a software engineer who builds products on foundation models, on the application side of the "API line."
- AI engineer (LinkedIn, 2026): "building and running AI products, including AI agents and LLMs, and integrating them into a business's workflow."
- Workflow vs agent (Anthropic, 2024): workflows are "LLMs and tools orchestrated through predefined code paths"; agents are "systems where LLMs dynamically direct their own processes and tool usage."
- Agent (OpenAI, 2025): "systems that independently accomplish tasks on your behalf"; apps that use LLMs but do not let them control workflow execution "are not agents."
- Context engineering (Anthropic, 2025): "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference."
- Agentic engineering (Karpathy, Willison, 2026): the professional practice of building software with coding agents, keeping accountability for quality, security, and maintainability.

**Short examples**

- The vendor quote versus the self-taught build: 6 to 9 months and a budget-breaking stack versus two months on managed inference plus Postgres (DSI, 2025).
- The approved-answers loop: a regulated insurer let the model answer only from a vetted knowledge base and used human support to grow it (Simply Business, 2025).
- The four-month shutdown: an agent that shipped unread output had to be turned off (Horthy, 2025).
- Two Anthropic FDE deliverables named in the posting: "MCP servers, sub-agents, and agent skills."

---

## 4. Disagreements, controversies, and open questions

1. **Does AI speed developers up?** METR's RCT says early-2025 tools slowed experienced developers by 19%; Stack Overflow's self-reports say 52% feel more productive and 69% of agent users do; Cherny claims 200% per engineer at Anthropic. METR itself now says its follow-up is "very weak evidence." The honest slide says perception and measurement diverge and the measurement is not settled.
2. **Does using AI erode skill?** Goedecke and HN commenters describe mental models that "rot"; Anthropic's June 2026 index finds heavy delegators "report learning at equivalent rates." Both are self-report or usage-derived; no longitudinal skill measurement exists.
3. **Is the title durable?** See 2.7. The evidence supports "distinct for now, converging over time," which is also the talk's thesis: the discipline is built on top of software engineering, not beside it.
4. **Frameworks: skip them or learn them?** Anthropic, Horthy, and Sentry say start bare; LinkedIn says LangChain is the most common skill on AI engineer profiles; DeepLearning.AI and Hugging Face teach frameworks. Resolution for a beginner audience: learn the primitives first, then use a framework you can read.
5. **Do coding agents need evals?** Husain and Shankar note a live debate about whether products like Claude Code are shipped on dogfooding rather than formal evals; OpenAI's Codex posting asks for exactly the eval work that suggests otherwise.
6. **The 95% failure statistic.** Not peer-reviewed, measures "no measurable P&L impact" among ~300 initiatives, largely due to missing baselines. Widely misquoted.
7. **Junior pathway.** LinkedIn says AI engineer is the top entry-level growth role; Indeed says 71% of the software rebound is senior; Angie Jones says juniors are being hired again on AI portfolios. All three can be true: the entry door exists but is narrow and portfolio-gated.
8. **Where the AI-enabled/AI-engineer line actually sits.** Willison says the line between vibe coding and agentic engineering "is disappearing" in his own practice as models improve. If using agents becomes indistinguishable from engineering with them, the talk's distinction must rest on the deliverable (a system whose behavior depends on a model at runtime), not on the tools used to write it.

---

## 5. Implications for the talk

**Framing the distinction.** Use Karpathy and Willison to define the AI-enabled software engineer: someone who orchestrates coding agents to produce conventional software, keeping the quality bar. Use Huyen, swyx, and the postings to define the AI engineer: someone whose shipped system calls a model at runtime and therefore inherits non-determinism, evaluation, cost, and safety as engineering problems. One line for the slide: same tools, different deliverable. The postings from OpenAI and Anthropic make this concrete because they ask for eval and agent work, not agent use.

**Structuring the transition roadmap.** A three-column slide works: carry over, add, build first.
- Carry over (say it explicitly so beginners relax): systems design, APIs and integration, testing discipline, observability, security, product sense, domain knowledge. Cite the 80/20 anecdote and Huyen's line.
- Add, mapped to the five areas: model intuition and context engineering (area 1), tool design (area 2), the workflow-versus-agent decision and loop control (area 3), error analysis and evals (area 4), cost, latency, permissions, and human checkpoints (area 5). Name evals as the one skill every source calls hardest.
- Build first: one narrow, real agent for a task the audience already understands, with a 20 to 50 case eval set written before the first prompt, single-agent before multi-agent, direct API calls before a framework, and a trace viewer from day one. This matches Anthropic, OpenAI, Husain, and every first-person account.

**What to include.** The Indeed rebound-through-AI story (it answers "is this worth it"); Levels.fyi's modest premium (it sets honest expectations); the Stack Overflow trust gap (it motivates evals); the workflow-versus-agent rule (it is the single most useful design heuristic); the mistake list with one quote each; the seven-item resource slide.

**What to cut.** Frontier-lab compensation (irrelevant to most of the room and distorting); the 143% and 10,854% growth figures (unverified); the MIT 95% statistic (misleading); any single productivity number; interview-loop details from prep sites; the ML-engineering curriculum from the 2024 HN thread (wrong era for this audience).

**Tone for this audience.** Beginners who have used Copilot or Cursor already have the "agentic engineering" skill in embryo. The pitch is that the next step is not learning ML but learning to be accountable for a system that is wrong some percentage of the time, and building the instruments (evals, traces, guardrails) that make that accountability possible. The first-person accounts show the transition takes months, not years, when the first project is small and real.

**Q&A preparation.** Expect: "Will the title exist in five years?" (section 2.7, both sides), "Do I need math?" (Huyen: no, API calls lower the barrier; model intuition can be built later), "Which framework?" (primitives first; the talk does not endorse one), "Is the market saturated?" (not for people who have shipped; narrow for juniors; the postings want evidence of production LLM work), "Does AI make me a worse engineer?" (contested; cite Goedecke and Anthropic's June 2026 finding).

---

## 6. Full source list

Job market
- LinkedIn News, "LinkedIn Jobs on the Rise 2026: The 25 fastest-growing roles in the U.S.," Jan 7, 2026. https://www.linkedin.com/pulse/linkedin-jobs-rise-2026-25-fastest-growing-roles-us-linkedin-news-dlb1c
- CBS News, "This is the fastest-growing job for young workers, LinkedIn says," Apr 16, 2026. https://www.cbsnews.com/news/artificial-intelligence-entry-level-role-linkedin-study/
- World Economic Forum, "AI has already added 1.3 million jobs, LinkedIn data says," Jan 2026. https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/ [not fetched]
- Indeed Hiring Lab, Guillermo Gallacher, "AI and Job Postings: From Destruction to Creation?," Jul 8, 2026. https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/
- Indeed Hiring Lab, Cory Stahle, "January 2026 US Labor Market Update," Jan 22, 2026. https://hiringlab.indeed.com/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/
- Indeed Hiring Lab, "US Labor Market Snapshot, August 2026," Aug 24, 2026. https://hiringlab.indeed.com/2026/08/24/us-labor-market-snapshot-august-2026/
- Levels.fyi, "2025 AI Engineer Compensation Trends," Jul 17, 2025. https://www.levels.fyi/blog/ai-engineer-compensation-trends-q3-2025.html
- Levels.fyi, "2025 End of Year Pay Report." https://www.levels.fyi/2025/
- PwC, "2025 Global AI Jobs Barometer," Jun 3, 2025. https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2025/report.pdf
- Pin, "AI Compensation Benchmarks 2026," May 3, 2026. https://www.pin.com/blog/ai-compensation-salary-guide/
- Pin, "Tech Job Market 2026," May 4, 2026 (rev. Jun 3). https://www.pin.com/blog/tech-job-market-report/
- Axial Search, "AI Engineering Jobs in 2026: A Data-Backed Market Map," Jul 21, 2026. https://axialsearch.com/insights/ai-engineering-jobs
- Ivan Turkovic, "The AI Job Title Reference Guide 2026," Apr 2026. https://www.ivanturkovic.com/the-ai-job-title-reference-guide-2026/
- OpenAI, "Applied AI Engineer" (Codex Core Agent) posting via Simplify. https://simplify.jobs/p/f7c00e2e-4c5c-4925-bff5-b5af0c7d86a7/Applied-AI-Engineer
- Anthropic, "Forward Deployed Engineer" (Applied AI, Paris) posting. https://job-boards.greenhouse.io/anthropic/jobs/5391021008
- Anthropic, "Applied AI Engineer, Beneficial Deployments" posting. https://job-boards.greenhouse.io/anthropic/jobs/5068226008 [listing only]
- DEV Community, "Five Open AI-Agent Roles That Show Where the Market Is Hiring in May 2026," May 6, 2026. https://dev.to/caprice_waters_c2fe2eb479/five-open-ai-agent-roles-that-show-where-the-market-is-hiring-in-may-2026-2mf9
- Blind, "Career transition to AI engineer," Jan 2026. https://www.teamblind.com/post/career-transition-to-ai-engineer-epwkl6e3
- MIT NANDA, "The GenAI Divide: State of AI in Business 2025," Jul 2025. https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf

Skills and definitions
- swyx, "The Rise of the AI Engineer," Latent Space, Jun 30, 2023. https://www.latent.space/p/ai-engineer
- Gergely Orosz and Chip Huyen, "The AI Engineering Stack," Pragmatic Engineer, May 20, 2025. https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack
- Gergely Orosz, "AI Engineering with Chip Huyen" (podcast), Feb 5, 2025. https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen
- Gergely Orosz, "AI Engineering in the real world," Mar 25, 2025. https://newsletter.pragmaticengineer.com/p/ai-engineering-in-the-real-world
- Gergely Orosz, "Context engineering with Dex Horthy," Jul 15, 2026. https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy
- Anthropic, "Effective context engineering for AI agents," Sep 29, 2025. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Chip Huyen, "Agents," Jan 7, 2025. https://huyenchip.com/2025/01/07/agents.html

Mistakes and practice
- Anthropic, "Building Effective Agents," Dec 19, 2024. https://www.anthropic.com/engineering/building-effective-agents
- Anthropic, "Demystifying evals for AI agents," Jan 9, 2026. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- OpenAI, "A Practical Guide to Building Agents," 2025. https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
- Hamel Husain, "Your AI Product Needs Evals," Mar 29, 2024. https://hamel.dev/blog/posts/evals/
- Hamel Husain and Shreya Shankar, "AI Evals: Everything You Need to Know" (FAQ), May 28, 2025, rev. Sep 1, 2026. https://hamel.dev/blog/posts/evals-faq/
- Lenny's Newsletter, "Why AI evals are the hottest new skill for product builders," Sep 25, 2025. https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill
- Dex Horthy, "12-Factor Agents," 2025. https://github.com/humanlayer/12-factor-agents

Learning resources
- Chip Huyen, *AI Engineering*, O'Reilly, 2025.
- Hamel Husain and Shreya Shankar, "AI Evals for Engineers and PMs," Maven; course post Jan 23, 2026. https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product
- Google, "Join the 5-day AI Agents Intensive course," Sep 23, 2025. https://blog.google/technology/developers/ai-agents-intensive/
- Google, "Inside Kaggle's AI Agents Intensive Course," Dec 18, 2025. https://blog.google/innovation-and-ai/technology/developers-tools/ai-agents-intensive-recap/
- Google, June 2026 intensive announcement. https://blog.google/innovation-and-ai/technology/developers-tools/kaggle-genai-intensive-course-vibe-coding-june-2026/
- Hugging Face Agents Course. https://huggingface.co/learn/agents-course/unit0/introduction
- DeepLearning.AI, "Agentic AI" (Andrew Ng). https://www.deeplearning.ai/courses/agentic-ai/
- Anthropic Academy, all courses. https://academy.claude.com/all
- OpenAI Academy. https://academy.openai.com/
- Latent Space, "The 2025 AI Engineering Reading List," Dec 2024. https://www.latent.space/p/2025-papers
- Latent Space, "Scaling without Slop," Jan 23, 2026. https://www.latent.space/p/2026
- Latent Space, "AIE Europe Debrief + Agent Labs Thesis," Apr 23, 2026. https://www.latent.space/p/unsupervised-learning-2026
- AI Engineer World's Fair 2026 tracks. https://ai.engineer/worldsfair/2026
- louisfb01, "start-ai-engineering" (GitHub, updated 2026). https://github.com/louisfb01/start-ai-engineering
- Hacker News, "Ask HN: How to Transition from Software Engineer to AI/ML Engineer," Apr 2024. https://news.ycombinator.com/item?id=39992764

First-person and changing nature of SWE
- Andrej Karpathy, "Sequoia Ascent 2026 summary," Apr 30, 2026. https://karpathy.bearblog.dev/sequoia-ascent-2026/
- Simon Willison, "Writing about Agentic Engineering Patterns," Feb 23, 2026. https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/
- Simon Willison, "Vibe coding and agentic engineering are getting closer than I'd like," May 6, 2026. https://simonw.substack.com/p/vibe-coding-and-agentic-engineering
- Boris Cherny on Lenny's Podcast, Feb 2026, via OfficeChai (Feb 18, 2026). https://officechai.com/ai/software-engineer-title-will-go-away-it-could-be-replaced-by-builder-or-product-manager-claude-code-creator-boris-cherny/
- Sean Goedecke, "Software engineering may no longer be a lifetime career," Apr 24, 2026. https://www.seangoedecke.com/software-engineering-may-no-longer-be-a-lifetime-career/
- Ibtihaaj Khurram, "The Year I Stopped Chatting and Started Managing," Jan 18, 2026. https://ibtihaaj.substack.com/p/the-year-i-stopped-chatting-and-started
- Ankit Rattan, "Software Developer to AI Engineer: The Change Is Real," Jan 2026. https://dev.to/ankit_rattan/software-developer-to-ai-engineer-the-change-is-real-2c8i
- Frank's World, "From Software Engineering to AI Engineering," Jul 13, 2026. https://www.franksworld.com/2026/07/13/from-software-engineering-to-ai-engineering-your-ultimate-guide-to-a-promising-career-shift/
- Aviator, "Software Engineering in 2026: Predictions from Leaders and Practitioners," Jan 12, 2026. https://www.aviator.co/blog/software-engineering-in-2026/
- Hacker News, "Reflections on software engineering in the age of AI," 2026. https://news.ycombinator.com/item?id=48708721
- Hacker News, "AI is removing the middle class of software engineering?," 2026. https://news.ycombinator.com/item?id=49271994

Surveys and studies
- Stack Overflow, 2025 Developer Survey, AI section. https://survey.stackoverflow.co/2025/ai
- Stack Overflow, "Mind the gap: Closing the AI trust gap for developers," Feb 18, 2026. https://stackoverflow.blog/2026/02/18/closing-the-developer-ai-trust-gap/
- Stack Overflow, "The 2026 Developer Survey is now open," Jun 23, 2026. https://stackoverflow.blog/2026/06/23/the-2026-developer-survey-is-now-open-for-human-developers-only/
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity," Jul 10, 2025. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- METR, "We are Changing our Developer Productivity Experiment Design," Feb 24, 2026. https://metr.org/blog/2026-02-24-uplift-update/
- Anthropic, "Anthropic Economic Index: AI's Impact on Software Development," Apr 28, 2025. https://www.anthropic.com/research/impact-software-development
- Anthropic, "Economic Index report: Learning curves," Mar 24, 2026. https://www.anthropic.com/research/economic-index-march-2026-report
- Anthropic, "Economic Index report: Cadences," Jun 2026. https://www.anthropic.com/research/economic-index-june-2026-report

Not fetched or not verified
- Marina Wyss, "The Fastest Way To Become an AI Engineer (For Software Engineers)," Medium, 2026 (403 on fetch).
- Stanford HAI 2026 AI Index job-postings chapter (figure cited by Pin not found on HAI pages).
- Third-party Anthropic interview guides (Educative, Perspective AI, Dataford, 2026); not published by Anthropic.
