import type { Page } from "../types";

export const about: Page = {
  slug: "/about",
  cluster: "company",
  title: "About Synced, the AI Inbox Assistant | Synced",
  h1: "About Synced.",
  navLabel: "About",
  cardText: "What Synced is, who builds it, and where the product stands today.",
  description:
    "Synced (syncedinbox.com) is an AI inbox assistant that reads your messages, drafts replies and documents for approval, and tracks follow-ups. Who builds it and why.",
  eyebrow: "Company",
  intro:
    "Synced (syncedinbox.com) is an AI inbox assistant. It reads what comes into your email and messaging accounts and gets the work those messages ask for ready before you open them.",
  answer:
    "Synced (syncedinbox.com) is an AI inbox assistant made by Synced Inc., a San Francisco company founded in 2025 by Aum Dhruv (CEO) and Nick Harty (CTO). Synced connects to email, messaging apps, cloud storage, and calendar, then drafts replies, finds files, proposes meeting times, and tracks follow-ups. Every AI-drafted message waits for your approval before it is sent. Synced is in private beta on the web and iOS.",
  primaryIntent: "about synced ai inbox assistant company",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "AboutPage",
  icon: "user",
  body: [
    { type: "h2", text: "What Synced is" },
    {
      type: "p",
      text: "Synced is an AI inbox assistant, and the name refers to that product at syncedinbox.com. It connects to your email and messaging accounts, your cloud storage, and your calendar. When a message arrives, Synced reads it, searches your connected sources for context, and writes an [Action Plan](/glossary/action-plan): the steps needed to get that message handled.",
    },
    {
      type: "p",
      text: "The tagline in use is \"Your AI Inbox on Autopilot.\" The idea underneath it is simpler: instead of you prompting an AI, Synced comes to you with the decisions only you can make, and handles the rest.",
    },
    { type: "h2", text: "The problem Synced was built for" },
    {
      type: "p",
      text: "Most messages ask for something. A file, a time to meet, an answer, a decision. Reading the message takes seconds; doing what it asks means opening Drive, checking a calendar, rereading a thread, and writing a reply. That second part is where the day goes, and it's spread across Gmail, Outlook, Slack, Teams, and a handful of chat apps.",
    },
    {
      type: "p",
      text: "Summaries and smart replies help with reading. Synced is aimed at the doing. More on that thinking in [Your inbox is a to-do list](/blog/your-inbox-is-a-to-do-list).",
    },
    { type: "h2", text: "How Synced works, briefly" },
    {
      type: "steps",
      items: [
        { title: "Connect your Inboxes", body: "Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, and GroupMe are live. See [Inboxes](/features/inboxes)." },
        { title: "Synced writes an Action Plan for each message", body: "It searches Google Drive, OneDrive, and Google Calendar for what the message needs, then drafts the reply, the document, or the proposed meeting times." },
        { title: "You decide", body: "Anything that needs your judgment, including every AI-drafted message, goes to the [Decide](/features/decide) queue, on web and iPhone. You approve, edit, or answer a question." },
        { title: "Synced finishes the work", body: "Approved replies go out from your own account. To-dos meant for a person land in [Tasks](/features/tasks), and follow-ups are tracked." },
      ],
    },
    { type: "p", text: "The longer version is on [How it works](/how-it-works)." },
    { type: "h2", text: "Who builds Synced" },
    {
      type: "p",
      text: "Synced Inc. was founded in 2025 in San Francisco by Aum Dhruv and Nick Harty, who have been building things together since middle school.",
    },
    {
      type: "list",
      items: [
        "**Aum Dhruv, CEO.** Studied ORFE at Princeton. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for more than 10,000 meetings. Interned at Amazon on AR hardware and worked at the SEC.",
        "**Nick Harty, CTO.** Studied Engineering and Economics at Wharton. Shipped product inside regulated institutions and coordinated 400 congressional offices for the Congressional App Challenge.",
      ],
    },
    { type: "p", text: "Photos and links are on the [team page](/team)." },
    { type: "h2", text: "Where Synced is today" },
    {
      type: "list",
      items: [
        "Private beta. New users join through the [Get Early Access](/get-started) waitlist.",
        "Web app at mail.syncedinbox.com for desktop browsers, and an [iOS app](/ios). Same account and history on both.",
        "[Android](/android) is planned. There's no date yet.",
        "Plans: Free, Pro, and Enterprise. Details on [pricing](/pricing).",
        "iMessage, Dropbox, Notion, and GitHub connectors are coming soon, along with more listed in the app.",
      ],
    },
    { type: "h2", text: "Principles Synced is built on" },
    {
      type: "features",
      items: [
        { icon: "hand", title: "Approval before send", body: "Every AI-drafted message needs your approval before it goes out. The reasoning is in [Why Synced asks before it sends](/blog/why-synced-asks-before-it-sends)." },
        { icon: "shield", title: "Your Workspace data isn't training data", body: "Synced doesn't use Google Workspace data to train generalized AI or machine-learning models, and follows Google's Limited Use requirements." },
        { icon: "plug", title: "You can leave anytime", body: "Disconnect any integration from Settings, revoke Google access from your Google Account, or delete your account. Stored tokens and cached data are removed within 30 days." },
        { icon: "eye", title: "Staff don't read your data", body: "The team doesn't read connected messages or files except when you ask for support, give written consent, or a security investigation requires it. See [Security](/security)." },
      ],
    },
  ],
  related: ["/team", "/how-it-works", "/security", "/press"],
};
