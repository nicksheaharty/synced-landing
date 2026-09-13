import type { Page } from "../types";

export const aiAgent: Page = {
  slug: "/glossary/ai-agent",
  cluster: "glossary",
  parent: "/glossary",
  term: "AI agent",
  title: "What Is an AI Agent? | Synced",
  h1: "AI agent",
  navLabel: "AI agent",
  cardText: "An AI system that plans steps and uses tools to complete a goal.",
  description:
    "An AI agent is a system built around a language model that plans steps, uses tools like search or calendars, and acts toward a goal instead of only replying.",
  eyebrow: "Glossary",
  intro: "The step from an AI that answers to an AI that does.",
  answer:
    "An AI agent is a software system that uses a large language model to pursue a goal by planning steps, calling tools such as search, calendars, or APIs, observing the results, and deciding what to do next. An AI agent differs from a chatbot because its output is actions taken in other systems, not only text in a chat window.",
  primaryIntent: "ai agent definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How an AI agent works" },
    {
      type: "p",
      text: "Most agents run a loop. The model reads the goal and the current state, picks a tool to call, gets the result, and repeats until the goal is met or it needs a person. Asked to \"set up a call with Priya next week,\" an agent might check your calendar, draft an email with three times, and wait for your approval to send.",
    },
    {
      type: "list",
      items: [
        "A model that plans and reasons over text.",
        "Tools the model is allowed to call, each with defined permissions.",
        "Memory or context about the task so far.",
        "Stopping points where the agent hands control back to a person.",
      ],
    },
    { type: "h2", text: "AI agent vs. chatbot vs. automation" },
    {
      type: "table",
      head: ["System", "Decides its own steps", "Acts in other systems"],
      rows: [
        ["Chatbot", "No, it responds to each prompt", "No"],
        ["Rule-based automation", "No, it follows fixed rules", "Yes"],
        ["AI agent", "Yes", "Yes"],
      ],
    },
    { type: "h2", text: "Risks specific to AI agents" },
    {
      type: "p",
      text: "Because agents act, their mistakes have effects. The OWASP Top 10 for LLM Applications names \"Excessive Agency\" as a risk: giving a model more permissions or autonomy than the task requires. Agents that read outside content, like incoming email, are also exposed to [prompt injection](/glossary/prompt-injection). The common safeguards are narrow permissions and [human-in-the-loop approval](/glossary/human-in-the-loop-approval) for actions that can't be undone.",
    },
    {
      type: "p",
      text: "Synced is an AI agent for your inbox that follows that pattern: it searches and checks calendars on its own, and waits for approval before sending any message it drafted.",
    },
    {
      type: "sources",
      items: [{ label: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/agentic-email", "/glossary/large-language-model", "/glossary/human-in-the-loop-approval"],
};
