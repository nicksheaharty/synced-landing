import type { Page } from "../types";

export const humanInTheLoopApproval: Page = {
  slug: "/glossary/human-in-the-loop-approval",
  cluster: "glossary",
  parent: "/glossary",
  term: "Human-in-the-loop approval",
  title: "What Is Human-in-the-Loop Approval? | Synced",
  h1: "Human-in-the-loop approval",
  navLabel: "Human-in-the-loop approval",
  cardText: "A person signs off before an AI system takes an action that matters.",
  description:
    "Human-in-the-loop approval means an AI system pauses before a consequential action, like sending an email, until a person reviews and approves it.",
  eyebrow: "Glossary",
  intro: "The checkpoint between an AI's draft and the real world.",
  answer:
    "Human-in-the-loop approval is a design pattern in which an AI system prepares an action but waits for a person to review and approve it before the action takes effect. In email, the typical checkpoint is the send button: the AI drafts the reply, and a human decides whether it goes out as written, edited, or not at all.",
  primaryIntent: "human in the loop approval meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "Where the approval checkpoint sits" },
    {
      type: "p",
      text: "The useful question is which actions need a human and which don't. Reading a message, searching files, or checking a calendar changes nothing anyone else sees, so most systems let the AI do those alone. Sending a message, accepting an invite, or sharing a file speaks for you, so that's where the checkpoint goes.",
    },
    {
      type: "p",
      text: "A good approval step shows the context next to the proposed action (the original message, the draft, the attached file) so the review takes seconds instead of a reread of the whole thread.",
    },
    { type: "h2", text: "Human-in-the-loop vs. human-on-the-loop" },
    {
      type: "p",
      text: "In a human-in-the-loop setup, the action doesn't happen until someone approves it. In a human-on-the-loop setup, the system acts on its own and a person monitors and can step in afterward. An email tool that auto-sends replies and lets you review the sent folder is on-the-loop, even if it calls the feature \"review.\"",
    },
    { type: "h2", text: "How Synced uses human-in-the-loop approval" },
    {
      type: "p",
      text: "Synced drafts replies but never sends one without approval. Every AI-drafted message waits in the [Decide queue](/glossary/decide-queue) until you approve or edit it. The reasoning behind that choice is in [Why Synced asks before it sends](/blog/why-synced-asks-before-it-sends).",
    },
  ],
  faqs: [
    {
      q: "Doesn't approving every draft defeat the point of automation?",
      a: "Approval is the fast part. The slow parts of a reply are reading the thread, finding the file, and writing the message; an approval step keeps those automated and leaves only the yes or no to you.",
    },
  ],
  related: ["/glossary/decide-queue", "/glossary/agentic-email", "/glossary/ai-agent"],
};
