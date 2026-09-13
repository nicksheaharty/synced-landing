import type { Page } from "../types";

export const emailThread: Page = {
  slug: "/glossary/email-thread",
  cluster: "glossary",
  parent: "/glossary",
  term: "Email thread",
  title: "What Is an Email Thread? | Synced",
  h1: "Email thread",
  navLabel: "Email thread",
  cardText: "An original email plus every reply and forward, grouped as one conversation.",
  description:
    "An email thread is an original message and all its replies grouped into one conversation. Mail apps group them using subject lines and reply headers.",
  eyebrow: "Glossary",
  intro: "The unit most email actually happens in, and the reason \"see below\" is so hard to follow.",
  answer:
    "An email thread is a group of related email messages, an original message plus the replies and forwards that follow it, displayed together as one conversation. Email clients build threads from reply headers defined in the email standard (In-Reply-To and References) and, in many clients, from matching subject lines.",
  primaryIntent: "email thread meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How email clients group a thread" },
    {
      type: "p",
      text: "When you reply, your mail app adds headers pointing to the message you're answering. RFC 5322, the Internet Message Format standard, defines these as In-Reply-To (the message being answered) and References (the chain before it). Clients use those headers, and often the subject line, to stack messages into one conversation. Gmail calls this conversation view; Outlook calls it Show as Conversations. Both can be turned off.",
    },
    { type: "h2", text: "Why email threads break" },
    {
      type: "list",
      items: [
        "Changing the subject line can split a thread in some clients.",
        "A mail app that doesn't carry over the reply headers starts a new one.",
        "Someone forwards the email to a new group, creating a parallel thread with half the context.",
      ],
    },
    { type: "h2", text: "Email thread vs. Slack thread" },
    {
      type: "p",
      text: "A Slack thread is a set of replies attached to one message in a channel, and it lives inside that channel. An email thread has no channel; it's held together by headers, so it can fork, lose participants, or merge by accident. The word is the same, but a Slack thread is much harder to break.",
    },
    {
      type: "p",
      text: "The full thread is what an AI assistant needs to read before replying, since the question often sits three messages up. Synced reads the thread around each new message before it drafts, and sends approved replies in the original thread. For condensing long ones, see [email summarization](/glossary/email-summarization).",
    },
    {
      type: "sources",
      items: [{ label: "RFC 5322: Internet Message Format, section 3.6.4", url: "https://datatracker.ietf.org/doc/html/rfc5322#section-3.6.4", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/email-summarization", "/glossary/follow-up-tracking", "/guides/how-to-summarize-long-email-threads"],
};
