import type { Page } from "../types";

export const inboxes: Page = {
  slug: "/features/inboxes",
  cluster: "feature",
  parent: "/features",
  title: "Inboxes: Connect Email, Slack, Teams, and Texts | Synced",
  h1: "Inboxes",
  navLabel: "Inboxes",
  cardText: "The email and messaging accounts Synced reads, and how they differ from output integrations.",
  description:
    "Inboxes are the email and messaging accounts you connect to Synced, like Gmail, Outlook, Slack, and WhatsApp Business. Unlimited on every plan.",
  eyebrow: "Feature",
  intro:
    "Work doesn't arrive in one app. Inboxes are how Synced sees all of it in one list, whether the request came by email, Slack DM, or a text to your business number.",
  answer:
    "Inboxes in Synced, the AI inbox assistant, are the accounts messages come in through: Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS through Twilio, and GroupMe. Synced reads new messages from each Inbox and writes an Action Plan for them. Output integrations (Google Drive, OneDrive, Google Calendar) are different: Synced uses them for context and to create events, not as message sources. Inboxes are unlimited on every plan.",
  primaryIntent: "connect inboxes synced",
  related: ["/integrations", "/glossary/inbox-connector", "/glossary/output-integration", "/features/search"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "envelope",
  body: [
    { type: "h2", text: "Inboxes vs. output integrations" },
    {
      type: "p",
      text: "Synced's connections do one of two jobs. An Inbox is somewhere people send you things, so Synced watches it and acts on what arrives. An output integration is somewhere Synced goes to get something: a file to attach, a free slot on your calendar, an event to create. The distinction matters for what you connect first and which plan you need.",
    },
    {
      type: "table",
      head: ["", "Inboxes", "Output integrations"],
      rows: [
        ["What Synced does with it", "Reads new messages, writes Action Plans, sends replies you approve", "Searches files, attaches them, checks availability, creates events you approve"],
        ["Live today", "Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS (Twilio), GroupMe", "Google Drive, OneDrive, Google Calendar"],
        ["Coming soon", "iMessage", "Dropbox, Notion, GitHub"],
        ["Shows up in Messages", "Yes", "No"],
      ],
      caption: "More connectors, from Jira to QuickBooks, are listed as coming soon in the app.",
    },
    { type: "h2", text: "What each Inbox brings into Synced" },
    {
      type: "list",
      items: [
        "[Gmail](/integrations/gmail) and [Outlook](/integrations/outlook): email threads, attachments, and invites. Connecting Outlook also covers that account's calendar.",
        "[Slack](/integrations/slack): your direct messages and group DMs, which Synced can read and reply to after you approve.",
        "[Microsoft Teams](/integrations/microsoft-teams): your Teams chats.",
        "[WhatsApp Business](/integrations/whatsapp-business) and [Messenger](/integrations/messenger): messages to your business number or Facebook Page.",
        "[Instagram Business](/integrations/instagram-business): DMs to a business account.",
        "[SMS](/integrations/sms): texts sent to your Twilio number. [GroupMe](/integrations/groupme): the groups you choose.",
      ],
    },
    {
      type: "p",
      text: "Each [integration page](/integrations) has the connection steps and permissions for that tool. First-time setup, including the Gmail connection new accounts start with, is on [get started](/get-started).",
    },
    { type: "h2", text: "One conversation list across every Inbox" },
    {
      type: "p",
      text: "Messages from all your Inboxes land in one list, each thread marked with where it came from and summarized so you can see what it wants without opening it. Filters narrow it down: Primary for direct mail, Action Needed for threads with something waiting on you, plus Sent, Scheduled, Starred, Snoozed, and Trash.",
    },
    {
      type: "message",
      from: "Rosa (customer)",
      source: "whatsapp",
      time: "9:17 AM",
      text: "Hi, is the 6-person table still available for Saturday at 7? We'd also love the private room if it's free.",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Checked Saturday on your calendar and found nothing booked at 7:00 PM",
        "Noted the private room request, which isn't on your calendar",
        "Drafted a WhatsApp reply confirming the table and asking you about the room",
      ],
      caption: "An illustration. The reply goes back through WhatsApp Business once you approve it.",
    },
    {
      type: "p",
      text: "Replies go back out through the same Inbox the message came from. A WhatsApp question gets a WhatsApp answer, a Slack DM gets a Slack reply, and an email reply stays in the original thread.",
    },
    { type: "h2", text: "Multiple accounts and plan limits" },
    {
      type: "p",
      text: "Inboxes are unlimited on every plan, so a work and personal Gmail, two Outlook accounts, and a Slack workspace can all be connected at once. When you have more than one email account, the draft shows a From picker and you can set one as the default. What differs by plan is which tools you can connect: Free covers Gmail, Google Drive, OneDrive, and Google Calendar, and Pro includes all integrations. The weekly [Action Plan](/glossary/action-plan) count is shared across every Inbox you connect.",
    },
    { type: "h2", text: "Disconnecting an Inbox" },
    {
      type: "p",
      text: "Remove any Inbox from Settings and new messages from it stop showing up. For Google accounts you can also revoke access at myaccount.google.com/permissions. A couple of Inboxes need one more step on the provider's side: a Twilio number's webhook keeps pointing at Synced until you change it in Twilio, and the GroupMe bot stays in a group until you remove it there.",
    },
    { type: "h2", text: "Where Inboxes stop" },
    {
      type: "p",
      text: "iMessage isn't connectable yet; it's listed as coming soon. Zoom has no connector at all. And Synced isn't a replacement mail client for power filtering or rules; if you need complex server-side rules, keep them in Gmail or Outlook and let Synced work on what reaches you.",
    },
  ],
  faqs: [
    {
      q: "How many inboxes can I connect to Synced?",
      a: "Integrations are unlimited on Free, Pro, and Enterprise, with up to 4 accounts per integration. The limit that applies is the weekly Action Plan count: 20 on Free and 100 on Pro.",
    },
    {
      q: "Is Google Drive an Inbox?",
      a: "No. Google Drive, OneDrive, and Google Calendar are output integrations. Synced searches and uses them while handling a message, but they don't add conversations to your list.",
    },
    {
      q: "Can Synced read my iMessages?",
      a: "Not yet. iMessage is listed as coming soon. For texts today, Synced supports SMS sent to a Twilio number and GroupMe groups.",
    },
    {
      q: "Which Slack conversations does Synced read?",
      a: "Synced reads and replies to your Slack direct messages and group DMs. The [Slack integration page](/integrations/slack) has the current details on what's covered.",
    },
  ],
};
