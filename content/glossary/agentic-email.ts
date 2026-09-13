import type { Page } from "../types";

export const agenticEmail: Page = {
  slug: "/glossary/agentic-email",
  cluster: "glossary",
  parent: "/glossary",
  term: "Agentic email",
  title: "What Is Agentic Email? | Synced",
  h1: "Agentic email",
  navLabel: "Agentic email",
  cardText: "Email handled by an AI agent that plans and carries out multi-step work.",
  description:
    "Agentic email is email handled by an AI agent that plans steps and uses tools, like search and calendar, to get a message done rather than only suggest text.",
  eyebrow: "Glossary",
  intro: "The difference between an AI that writes a reply and one that does what the email asked.",
  answer:
    "Agentic email is an approach to email in which an AI agent reads a message, plans the steps needed to resolve it, and uses tools such as file search, calendars, and the mail account itself to carry those steps out. Agentic email differs from AI writing help because the output is completed work (a file found, a time proposed, a reply ready) rather than suggested text.",
  primaryIntent: "agentic email meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "An agentic email example" },
    {
      type: "p",
      text: "A client writes: \"Can you send last month's invoice and move our call to next week?\" A writing assistant drafts \"Sure, attached is the invoice\" and leaves you to find it. An agentic system searches your files for the invoice, checks your calendar for open slots next week, and drafts a reply that includes both. Three tools, one message.",
    },
    { type: "h2", text: "What makes an email workflow agentic" },
    {
      type: "list",
      items: [
        "The system decides the steps itself instead of following a fixed rule.",
        "The system calls tools outside the text box: search, calendar, storage, the send action.",
        "The system handles the message start to finish, stopping only where a person has to decide.",
      ],
    },
    { type: "h2", text: "Agentic email vs. email automation rules" },
    {
      type: "p",
      text: "Filters and rules in Gmail or Outlook are automation, but they aren't agentic. A rule does the same thing every time a condition matches: label it, forward it, archive it. An [AI agent](/glossary/ai-agent) reads the content and chooses what to do, which is why agentic systems also need limits on what they can do without asking. The OWASP Top 10 for LLM Applications lists \"Excessive Agency\" as a risk for exactly this reason.",
    },
    {
      type: "p",
      text: "The common safeguard is [human-in-the-loop approval](/glossary/human-in-the-loop-approval) on anything that leaves your account. Synced works this way: it takes the steps that change nothing others can see, and brings drafted replies to you for approval.",
    },
    {
      type: "sources",
      items: [{ label: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/ai-agent", "/glossary/human-in-the-loop-approval", "/glossary/ai-inbox-assistant"],
};
