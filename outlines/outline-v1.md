# Beyond the Coding Agent: From Software Engineer to AI Engineer

## High-Level Presentation Outline

**Session length:** 60 minutes

**Presentation:** Approximately 40 minutes

**Questions and discussion:** Approximately 20 minutes

### Central Thesis

Using AI makes you an AI-enabled software engineer. Engineering systems that depend on AI makes you an AI engineer.

AI engineering is a distinct discipline built on a foundation of software engineering. It requires additional skills and practices for creating useful, reliable, and trustworthy systems whose behavior depends partly on foundation models.

## 1. Using AI vs. Engineering AI Systems

**Approximate time:** 5 minutes

- Open with the central thesis and establish the distinction between using AI as a development tool and building AI-dependent systems.
- Contrast a software engineer using a coding agent with an AI engineer who is responsible for the behavior of a system built around foundation models.
- Define the scope of AI engineering broadly enough to include RAG, model-powered workflows, structured generation, and agentic systems.
- Position agentic systems as the most demanding expression of the discipline because models participate in control flow, select tools, maintain context, and take actions.

## 2. Why AI Engineering Is a Distinct Discipline

**Approximate time:** 7 minutes

- Explain how traditional software behavior is principally specified through code, while AI systems delegate part of their behavior to probabilistic models.
- Show why model behavior is context-sensitive, variable, and difficult to specify exhaustively in advance.
- Introduce the prototype-to-production gap. A successful demonstration proves that a system can work on one path, not that it will behave reliably across real-world conditions.
- Explain why traditional software engineering remains essential but is not sufficient by itself.
- Briefly distinguish AI engineering from software engineering, ML engineering, and data science.

## 3. What AI Engineers Actually Engineer

**Approximate time:** 21 minutes

This is the primary content section and the conceptual map of the discipline.

### 3.1 Context and Knowledge

- Context engineering as the deliberate construction of everything the model sees when performing a task.
- Retrieval-augmented generation as one important context-engineering technique rather than the whole discipline.
- Prompts, instructions, examples, retrieved knowledge, session state, memory, and tool results.
- Context quality, relevance, freshness, provenance, size limits, and security boundaries.

### 3.2 Tools and Agent Interfaces

- Tools as the mechanism through which agents retrieve information and affect external systems.
- Designing clear, constrained, and reusable tool interfaces for model callers.
- Tool discovery, extensibility, permissions, error handling, and result representation.
- Treating read-only, reversible, and consequential actions differently.

### 3.3 Harnesses and Orchestration

- The harness as the engineered system surrounding the model and managing its behavior.
- Agent loops, control flow, state, routing, retries, timeouts, stopping conditions, and escalation.
- Managing context across long-running work and multiple steps.
- Balancing autonomy with deterministic control and human oversight.
- Cost, latency, resource, and action budgets.

### 3.4 Evaluations and Verification

- Evals as the AI engineer's primary instrument for measuring system behavior across representative cases.
- Evaluating outcomes, intermediate behavior, tool selection, instruction following, safety, cost, and latency.
- Combining code-based checks, model-based graders, and human judgment where appropriate.
- Distinguishing evaluation across a population of cases from verification of a particular output or action.
- Using deterministic tests, external evidence, simulations, approval gates, and domain-specific checks to verify results.
- Continuing evaluation after deployment to detect regressions, emerging failures, and changes in real-world usage.

### 3.5 Production Operations and Responsibility

- Observability into context, model calls, tool use, state transitions, outcomes, cost, and latency.
- Guardrails, authorization, security, privacy, and prompt-injection risks.
- Human intervention for uncertainty, elevated risk, or irreversible actions.
- Monitoring, incident response, rollback, and continuous improvement.
- Using evals and verification to adopt rapidly changing models and techniques without sacrificing reliability.

## 4. Making the Transition

**Approximate time:** 7 minutes

- Reinforce that software engineers already possess a strong foundation in systems thinking, interface design, testing, security, operations, and maintainability.
- Identify the new competencies they must add: model behavior, context engineering, retrieval, tool design, harness engineering, evals, verification, and responsible operation.
- Present a learning roadmap organized around durable principles rather than short-lived frameworks.
- Encourage attendees to build progressively, beginning with constrained workflows and measurable outcomes before increasing autonomy.
- Close by restating the central thesis and inviting the audience to treat AI engineering as a serious discipline.

## Questions and Discussion

**Approximate time:** 20 minutes

- Invite questions about the discipline, career transition, agent reliability, and applying these principles within existing engineering organizations.
