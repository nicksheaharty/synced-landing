import type { Page } from "../types";

export const outputIntegration: Page = {
  slug: "/glossary/output-integration",
  cluster: "glossary",
  parent: "/glossary",
  term: "Output integration",
  title: "What Is an Output Integration in Synced? | Synced",
  h1: "Output integration",
  navLabel: "Output integration",
  cardText: "A connected tool, like Drive or Calendar, that Synced searches or acts in.",
  description:
    "An output integration is a tool Synced searches or works in while handling messages, like Google Drive, OneDrive, or Google Calendar. It's not a message source.",
  eyebrow: "Glossary · Synced term",
  intro: "The tools Synced reaches into to finish the work a message asks for.",
  answer:
    "An output integration is a connected service that Synced, the AI inbox assistant, searches for context or takes action in while carrying out an Action Plan. Live output integrations are Google Drive, OneDrive, and Google Calendar. An output integration never brings new messages in; that's the job of an Inbox.",
  primaryIntent: "synced output integration definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What Synced does with an output integration" },
    {
      type: "p",
      text: "When a message asks for something, Synced looks for it in your output integrations. \"Can you resend the signed SOW?\" sends Synced to Google Drive or OneDrive to find and attach the file. \"Free Thursday afternoon?\" sends it to Google Calendar to read availability and propose times.",
    },
    {
      type: "list",
      items: [
        "Google Drive and OneDrive: search and read files for context, and attach the right one to a reply.",
        "Google Calendar: read availability and create or update events.",
      ],
    },
    { type: "h2", text: "Output integration vs. Inbox connector" },
    {
      type: "p",
      text: "An [Inbox connector](/glossary/inbox-connector) is a source of messages, like Gmail or Slack. An output integration is a destination for work. Some people expect Google Calendar to show up as an Inbox because invites arrive by email; the invite email comes through Gmail or Outlook, and Calendar is where Synced checks and books the time.",
    },
    { type: "h2", text: "Output integrations marked coming soon" },
    {
      type: "p",
      text: "Dropbox, Notion, and GitHub are listed as coming soon. Until they're live, Synced can't search or act in them. Google Drive, OneDrive, and Google Calendar are included on the Free plan.",
    },
  ],
  faqs: [
    {
      q: "Do I need an output integration to use Synced?",
      a: "No. Synced can read and draft replies with only an Inbox connected. Output integrations let it attach files and propose real meeting times instead of asking you.",
    },
  ],
  related: ["/glossary/inbox-connector", "/glossary/calendar-coordination", "/help/connect-an-output-integration"],
};
