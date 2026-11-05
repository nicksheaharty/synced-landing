import type { Page } from "../types";
import { gmail } from "./gmail";
import { outlook } from "./outlook";
import { slack } from "./slack";
import { microsoftTeams } from "./microsoft-teams";
import { whatsappBusiness } from "./whatsapp-business";
import { instagramBusiness } from "./instagram-business";
import { messenger } from "./messenger";
import { sms } from "./sms";
import { groupme } from "./groupme";
import { googleDrive } from "./google-drive";
import { onedrive } from "./onedrive";
import { googleCalendar } from "./google-calendar";
import { imessage } from "./imessage";
import { dropbox } from "./dropbox";
import { notion } from "./notion";
import { github } from "./github";

const hub: Page = {
  slug: "/integrations",
  cluster: "integration",
  title: "Integrations: Gmail, Outlook, Slack, Teams and more | Synced",
  h1: "Everything Synced connects to.",
  navLabel: "Integrations",
  description:
    "Synced connects to Gmail, Outlook, Microsoft Teams, Slack, Google Calendar, Google Drive, and OneDrive, plus texts and other messaging apps. See which plan has each.",
  eyebrow: "Integrations",
  intro:
    "Most of an assistant's work arrives through email, Slack, Teams, and texts, and gets done with a calendar and a file drive. Those are the integrations Synced is built around.",
  answer:
    "Synced, the AI inbox assistant, reads messages from connected Inboxes (Gmail, Outlook, Microsoft Teams, Slack, and text messages) and acts on them using Google Calendar, Google Drive, and OneDrive. WhatsApp Business, Instagram Business, Messenger, and GroupMe are also live, and Dropbox is coming soon. Gmail, Drive, OneDrive, and Calendar are on the Free plan. You can disconnect any integration at any time.",
  primaryIntent: "synced integrations list",
  published: "2026-09-13",
  updated: "2026-11-05",
  schema: "CollectionPage",
  icon: "plug",
  body: [
    { type: "h2", text: "The core integrations for assistants" },
    {
      type: "p",
      text: "If you handle an executive's inbox and calendar, start with these seven: [Gmail](/integrations/gmail) or [Outlook](/integrations/outlook) for email, [Microsoft Teams](/integrations/microsoft-teams) and [Slack](/integrations/slack) for internal requests, [Google Calendar](/integrations/google-calendar) for availability (Outlook calendar comes with an Outlook connection), and [Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive) for the files people ask you to send. [Text messages](/integrations/sms) to a connected business number work too.",
    },
    { type: "h2", text: "Inboxes and output integrations" },
    {
      type: "p",
      text: "An **Inbox** is a source of messages: an email account, a Slack workspace, a WhatsApp Business number. Synced reads new messages there and writes an [Action Plan](/glossary/action-plan) for each one. An **output integration** is a place Synced reaches into while doing the work, like searching Drive for last quarter's deck or putting a meeting on your calendar.",
    },
    {
      type: "p",
      text: "Inboxes are unlimited, 4 accounts each. Which integrations you can use depends on your plan, and [pricing](/pricing) has the full table.",
    },
    { type: "h2", text: "All integrations" },
    { type: "index", clusters: ["integration"] },
  ],
  faqs: [
    {
      q: "How many Inboxes can I connect?",
      a: "Inboxes are unlimited on Free, Pro, and Enterprise, 4 accounts each. What's limited is the number of [Action Plans](/glossary/action-plan) per week: 20 on Free and 100 on Pro.",
    },
    {
      q: "Does Synced send anything without asking me?",
      a: "No. Synced can draft replies and prepare actions, but an AI-drafted message needs your approval before it goes out. You approve drafts from the Decide queue.",
    },
    {
      q: "Can I disconnect an integration later?",
      a: "Yes. Disconnect it from Settings in Synced. For Google services you can also revoke access from your Google Account permissions page. See [Security](/security) for what happens to the data.",
    },
  ],
};

export const pages: Page[] = [
  hub,
  gmail,
  outlook,
  microsoftTeams,
  slack,
  googleCalendar,
  googleDrive,
  onedrive,
  dropbox,
  sms,
  whatsappBusiness,
  instagramBusiness,
  messenger,
  groupme,
  imessage,
  notion,
  github,
];
