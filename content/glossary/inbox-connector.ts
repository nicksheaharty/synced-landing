import type { Page } from "../types";

export const inboxConnector: Page = {
  slug: "/glossary/inbox-connector",
  cluster: "glossary",
  parent: "/glossary",
  term: "Inbox (input connector)",
  title: "What Is an Inbox Connector in Synced? | Synced",
  h1: "Inbox connector",
  navLabel: "Inbox connector",
  cardText: "A connected message source, like Gmail or Slack, that Synced reads from.",
  description:
    "An Inbox, or input connector, is a message source you connect to Synced, like Gmail, Outlook, or Slack. Synced reads new messages from it and plans a response.",
  eyebrow: "Glossary · Synced term",
  intro: "Where Synced's work starts: the accounts that send messages in.",
  answer:
    "An Inbox, also called an input connector, is a message account connected to Synced, the AI inbox assistant, that Synced reads incoming messages from. Live Inboxes are Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, and GroupMe. Integrations are unlimited, with up to 4 accounts each.",
  primaryIntent: "synced inbox connector definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What an Inbox connector does" },
    {
      type: "p",
      text: "Connecting an Inbox gives Synced permission to see new messages arriving in that account. Each new message becomes an [Action Plan](/glossary/action-plan). Replies Synced drafts go back out through the same Inbox, from your own address or account, after you approve them. The [Inboxes feature page](/features/inboxes) covers setup and what each source supports.",
    },
    {
      type: "p",
      text: "Gmail connects through Google's own OAuth permission screen, which lists the access being granted before you approve it. You can disconnect an Inbox at any time, and messages from that account stop coming into Synced. Connecting a second account of the same kind, like a work and a personal Gmail, adds a second Inbox.",
    },
    { type: "h2", text: "Inbox connector vs. output integration" },
    {
      type: "p",
      text: "Synced separates where messages come from and where work gets done. An Inbox brings messages in. An [output integration](/glossary/output-integration), like Google Drive or Google Calendar, is a place Synced searches for context or acts in, such as finding a file or checking availability. Gmail is an Inbox; Google Drive is an output integration.",
    },
    { type: "h2", text: "Inbox connectors marked coming soon" },
    {
      type: "p",
      text: "iMessage is listed as coming soon. The app also lists more connectors as coming soon. Zoom has no connector.",
    },
  ],
  faqs: [
    {
      q: "Which Inboxes are on the Free plan?",
      a: "The Free plan includes Gmail, along with Google Drive, OneDrive, and Google Calendar. Pro includes all integrations.",
    },
  ],
  related: ["/glossary/output-integration", "/glossary/unified-inbox", "/features/inboxes"],
};
