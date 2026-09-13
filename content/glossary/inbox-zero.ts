import type { Page } from "../types";

export const inboxZero: Page = {
  slug: "/glossary/inbox-zero",
  cluster: "glossary",
  parent: "/glossary",
  term: "Inbox zero",
  title: "What Is Inbox Zero? Meaning and Origin | Synced",
  h1: "Inbox zero",
  navLabel: "Inbox zero",
  cardText: "Merlin Mann's 2006 method for deciding on every email instead of rereading it.",
  description:
    "Inbox zero is an email method coined by Merlin Mann in 2006: turn every message into a next step so the inbox stops holding your attention.",
  eyebrow: "Glossary",
  intro: "Probably the most misunderstood productivity term on the internet, including by fans of it.",
  answer:
    "Inbox zero is an approach to email management introduced by Merlin Mann in a 2006 series on his site 43 Folders. The idea is to process each message into a next step (delete, delegate, respond, defer, or do) so the inbox stops being a place where attention leaks away. An empty inbox is a common side effect, and Mann has since said the term is widely misunderstood as a message count.",
  primaryIntent: "inbox zero meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What the zero in inbox zero means" },
    {
      type: "p",
      text: "The popular reading is a message count, but the method is about decisions. An inbox with 40 messages that each have a clear next step is closer to the idea than an empty one you check every four minutes. In 2020 Mann said he doesn't keep his own inbox empty and that the term has been misunderstood.",
    },
    { type: "h2", text: "The inbox zero actions" },
    {
      type: "list",
      items: [
        "Delete or archive what needs nothing.",
        "Delegate what someone else should handle.",
        "Respond right away when a reply takes a couple of minutes.",
        "Defer anything longer to a to-do list or calendar.",
        "Do the task now if it's quick and it's yours.",
      ],
    },
    { type: "h2", text: "Inbox zero vs. unread zero" },
    {
      type: "p",
      text: "Unread zero means every message has been opened. Inbox zero means every message has been decided. Marking everything as read gets you the first without any of the second, which is how people end up with a clean-looking inbox and a dozen forgotten requests. The step-by-step method is in [how to get to inbox zero](/guides/how-to-get-to-inbox-zero).",
    },
    {
      type: "p",
      text: "Synced takes on part of the processing step: it drafts replies and turns requests into Tasks, so what's left for you is the approve-or-edit decision.",
    },
    {
      type: "sources",
      items: [{ label: "Inbox Zero (Wikipedia)", url: "https://en.wikipedia.org/wiki/Inbox_Zero", checked: "2026-09-13" }],
    },
  ],
  faqs: [
    {
      q: "Who invented inbox zero?",
      a: "Merlin Mann, a productivity writer, coined the term in a 2006 series of articles on his site 43 Folders.",
    },
    {
      q: "Is inbox zero realistic with hundreds of emails a day?",
      a: "The empty-inbox version is hard to sustain at that volume. The original idea, deciding on each message quickly instead of rereading it, scales better.",
    },
  ],
  related: ["/glossary/email-triage", "/glossary/email-to-task", "/guides/how-to-get-to-inbox-zero"],
};
