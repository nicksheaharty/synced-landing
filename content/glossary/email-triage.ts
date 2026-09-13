import type { Page } from "../types";

export const emailTriage: Page = {
  slug: "/glossary/email-triage",
  cluster: "glossary",
  parent: "/glossary",
  term: "Email triage",
  title: "What Is Email Triage? | Synced",
  h1: "Email triage",
  navLabel: "Email triage",
  cardText: "Sorting incoming email by what it needs and how soon, before doing any of it.",
  description:
    "Email triage is the quick first pass through incoming email that decides what each message needs (reply, delegate, file, or delete) and how urgently.",
  eyebrow: "Glossary",
  intro: "Borrowed from emergency medicine: decide what needs attention first, then treat it.",
  answer:
    "Email triage is the practice of making a fast first pass through incoming email to decide what each message needs and how urgently, before acting on any of them. Typical outcomes are reply now, reply later, delegate, file for reference, or delete. Triage separates the deciding from the doing, which is why it's faster than working through an inbox top to bottom.",
  primaryIntent: "email triage definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How a manual email triage pass works" },
    {
      type: "p",
      text: "Set a block of time, open the inbox, and give each message a few seconds. Anything that takes under two minutes, answer on the spot. Everything else gets a label, a star, a snooze, or a forward to the right person. Newsletters and notifications get archived. The goal is an inbox where every remaining message has a known next step.",
    },
    {
      type: "list",
      items: [
        "Reply: needs your answer, today or on a set date.",
        "Delegate: someone else should handle it; forward with a note.",
        "Reference: no action, but you'll want it later; archive or label it.",
        "Delete: no action and no future value.",
      ],
    },
    { type: "h2", text: "Email triage vs. email filtering" },
    {
      type: "p",
      text: "Filters and rules sort by sender, subject, or keywords before you see anything. They're good at moving receipts and newsletters out of the way. They can't tell whether a message from your manager is a quick FYI or an urgent request, because that depends on what the message says. Triage is a judgment about content; filtering is pattern matching.",
    },
    { type: "h2", text: "How AI changes email triage" },
    {
      type: "p",
      text: "An [AI inbox assistant](/glossary/ai-inbox-assistant) can read each message and make the first sort for you. Some tools stop at labels and priority. Synced goes a step further: for messages that need a reply, it drafts one and puts it in Decide, so triage and the first draft happen together.",
    },
  ],
  faqs: [
    {
      q: "How often should you triage email?",
      a: "Two or three scheduled passes a day works for most jobs. Constant checking tends to turn triage back into reacting message by message.",
    },
  ],
  related: ["/glossary/inbox-zero", "/glossary/email-delegation", "/glossary/ai-inbox-assistant", "/guides/how-to-batch-process-email"],
};
