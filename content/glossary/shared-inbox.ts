import type { Page } from "../types";

export const sharedInbox: Page = {
  slug: "/glossary/shared-inbox",
  cluster: "glossary",
  parent: "/glossary",
  term: "Shared inbox",
  title: "What Is a Shared Inbox? | Synced",
  h1: "Shared inbox",
  navLabel: "Shared inbox",
  cardText: "One email address, like support@, that a team reads and answers together.",
  description:
    "A shared inbox is one email address, such as support@ or sales@, that several people can read and reply from, often with assignment to avoid duplicate replies.",
  eyebrow: "Glossary",
  intro: "The support@ address, and the recurring question of who's answering it.",
  answer:
    "A shared inbox is a single email address, such as support@company.com or hello@company.com, that multiple team members can access to read, assign, and reply to messages. Shared inboxes are built into Microsoft 365 as shared mailboxes and into Google Workspace as collaborative inboxes in Google Groups, and dedicated shared inbox tools add assignment, internal notes, and collision detection.",
  primaryIntent: "shared inbox definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How a shared inbox works" },
    {
      type: "p",
      text: "Mail sent to the shared address lands in one place that everyone on the team can see. Replies go out from the shared address, not from each person's own account, so customers get a consistent sender. The hard part is coordination: without assignment, two people answer the same email, or nobody does because everyone assumes someone else did.",
    },
    { type: "h2", text: "What shared inbox tools add" },
    {
      type: "list",
      items: [
        "Assigning a conversation to one owner.",
        "Internal comments that the customer doesn't see.",
        "Collision detection, which warns you when a teammate is already replying.",
        "Status like open, pending, or closed, and reports on response time.",
      ],
    },
    { type: "h2", text: "Shared inbox vs. unified inbox vs. delegation" },
    {
      type: "p",
      text: "A shared inbox is one address used by many people. A [unified inbox](/glossary/unified-inbox) is many addresses viewed by one person. [Email delegation](/glossary/email-delegation) is one person's mailbox opened to a specific helper, like an executive assistant. Forwarding everyone's personal mail to a group alias is none of these, and tends to produce the duplicate-reply problem at scale.",
    },
    { type: "h2", text: "When Synced isn't the right tool" },
    {
      type: "p",
      text: "Synced is built around one person's Inboxes and approvals, not team assignment and collision detection. A support team working a single support@ queue together is better served by a dedicated shared inbox tool.",
    },
  ],
  related: ["/glossary/unified-inbox", "/glossary/email-delegation", "/glossary/email-triage"],
};
