import type { Page } from "../types";

export const aiInboxAssistant: Page = {
  slug: "/glossary/ai-inbox-assistant",
  cluster: "glossary",
  parent: "/glossary",
  term: "AI inbox assistant",
  title: "What Is an AI Inbox Assistant? | Synced",
  h1: "AI inbox assistant",
  navLabel: "AI inbox assistant",
  cardText: "Software that reads incoming messages and prepares the work they ask for.",
  description:
    "An AI inbox assistant is software that reads your incoming messages, works out what each one needs, and drafts replies, finds files, or proposes times.",
  eyebrow: "Glossary",
  intro: "A category name that covers everything from a sidebar chatbot to an assistant that works through the inbox for you.",
  answer:
    "An AI inbox assistant is software that uses a large language model to read incoming messages, work out what each one is asking for, and prepare the response, such as a drafted reply, a found attachment, or a proposed meeting time. The term usually covers email and often extends to chat apps like Slack and Teams. What separates one assistant from another is how much it does before you ask, and whether it sends anything without your approval.",
  primaryIntent: "ai inbox assistant definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What an AI inbox assistant does with a new message" },
    {
      type: "list",
      items: [
        "Reads the message and the thread it belongs to.",
        "Decides what kind of message it is: a question, a request, an FYI, a scheduling ask.",
        "Pulls context from connected sources like past email, files, or a calendar.",
        "Drafts a reply or proposes an action, then either waits for approval or acts.",
      ],
    },
    { type: "h2", text: "Three kinds of AI inbox assistant" },
    {
      type: "p",
      text: "**Prompted assistants** sit inside an email client and respond when you ask: summarize this thread, draft a reply. **Sorting assistants** filter and label mail but don't write anything. **Proactive assistants** process each message as it arrives and bring you the finished draft or a question. Many products mix two of these.",
    },
    { type: "h2", text: "AI inbox assistant vs. AI email assistant" },
    {
      type: "p",
      text: "The two phrases are mostly used interchangeably. \"Inbox\" tends to signal that the tool reads more than one kind of message, for example Slack, Teams, or WhatsApp alongside email. \"Email assistant\" usually means email only, and sometimes only writing help.",
    },
    { type: "h2", text: "How Synced fits the definition" },
    {
      type: "p",
      text: "Synced is a proactive AI inbox assistant. It reads messages from connected Inboxes, writes an [Action Plan](/glossary/action-plan) for each, and puts anything that needs your judgment, including every drafted reply, in the Decide queue for approval.",
    },
  ],
  faqs: [
    {
      q: "Is an AI inbox assistant the same as a spam filter?",
      a: "No. A spam filter decides whether a message reaches you. An AI inbox assistant works on the messages that do, reading them and preparing responses.",
    },
  ],
  related: ["/glossary/agentic-email", "/glossary/email-triage", "/glossary/large-language-model", "/guides/how-to-evaluate-an-ai-email-assistant"],
};
