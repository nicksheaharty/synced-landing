import type { Page } from "../types";

export const unifiedInbox: Page = {
  slug: "/glossary/unified-inbox",
  cluster: "glossary",
  parent: "/glossary",
  term: "Unified inbox",
  title: "What Is a Unified Inbox? | Synced",
  h1: "Unified inbox",
  navLabel: "Unified inbox",
  cardText: "One view that combines messages from several accounts or apps.",
  description:
    "A unified inbox combines messages from several email accounts, or from email plus chat apps like Slack and WhatsApp, into one list you can read and reply from.",
  eyebrow: "Glossary",
  intro: "One list instead of six tabs.",
  answer:
    "A unified inbox is a single view that combines incoming messages from multiple accounts or channels, such as two Gmail accounts and an Outlook account, or email alongside Slack and WhatsApp, so they can be read and answered in one place. Replies from a unified inbox still go out from the original account or channel.",
  primaryIntent: "unified inbox meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "Two kinds of unified inbox" },
    {
      type: "p",
      text: "**Multi-account email.** Mail apps like Apple Mail and many third-party clients can show several email accounts in one combined list. Everything is still email.",
    },
    {
      type: "p",
      text: "**Multi-channel.** Some tools combine email with chat and social messages: Slack, Teams, WhatsApp, Instagram DMs, SMS. Customer support and sales teams have used these for years; they're becoming common for individuals whose work is split across apps.",
    },
    { type: "h2", text: "Unified inbox vs. shared inbox" },
    {
      type: "p",
      text: "The two get mixed up because both combine things. A unified inbox combines many accounts for one person. A [shared inbox](/glossary/shared-inbox) is one account, like support@, used by many people. A team can have a shared inbox, and each person on it might also use a unified inbox.",
    },
    { type: "h2", text: "What a unified inbox doesn't fix" },
    {
      type: "p",
      text: "Putting every message in one list makes them easier to find, but the list is longer. Unless the tool also helps sort or act on messages, a unified inbox can feel busier than the separate apps did.",
    },
    { type: "h2", text: "How Synced relates to a unified inbox" },
    {
      type: "p",
      text: "Synced connects Inboxes across email, chat, and messaging (Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, and more) and shows them in one Messages list. The difference from a plain unified inbox is that each message arrives with an [Action Plan](/glossary/action-plan) already started. For managing accounts manually, see [how to manage multiple email accounts](/guides/how-to-manage-multiple-email-accounts).",
    },
  ],
  related: ["/glossary/shared-inbox", "/glossary/inbox-connector", "/guides/how-to-manage-multiple-email-accounts"],
};
