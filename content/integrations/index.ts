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
    "Synced connects to Gmail, Outlook, Slack, Teams, WhatsApp Business, Google Drive, OneDrive, and Google Calendar. See what each does and which plan has it.",
  eyebrow: "Integrations",
  intro:
    "Inboxes are where messages come in. Output integrations are where Synced finds context and does the work. Connect both and most messages turn into finished tasks.",
  answer:
    "Synced, the AI inbox assistant, reads messages from connected Inboxes (Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, and more) and acts on them using output integrations like Google Drive, OneDrive, and Google Calendar. Gmail, Drive, OneDrive, and Calendar are on the Free plan. You can disconnect any integration at any time.",
  primaryIntent: "synced integrations list",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "plug",
  body: [
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
  slack,
  microsoftTeams,
  whatsappBusiness,
  instagramBusiness,
  messenger,
  sms,
  groupme,
  googleDrive,
  onedrive,
  googleCalendar,
  imessage,
  dropbox,
  notion,
  github,
];
