import type { Page } from "../types";

export const about: Page = {
  slug: "/about",
  cluster: "company",
  title: "About Synced, the AI Inbox Assistant | Synced",
  h1: "About Synced.",
  navLabel: "About",
  cardText: "What Synced is, who it's built for, who builds it, and where the product stands today.",
  description:
    "Synced (syncedinbox.com) is an AI inbox for high-volume admin assistants. It gets replies, meeting times, and files ready for approval. Who builds it and why.",
  eyebrow: "Company",
  intro:
    "Synced (syncedinbox.com) is an AI inbox for high-volume admin assistants. It reads everything that comes in for the people an assistant supports and gets the work ready before the assistant opens it.",
  answer:
    "Synced (syncedinbox.com) is an AI inbox for high-volume admin assistants, made by Synced Inc., a San Francisco company founded in 2025 by Aum Dhruv (CEO) and Nick Harty (CTO). Synced reads incoming email, Slack, Microsoft Teams, and text messages, finds meeting times that are open, attaches the files people ask for, and drafts replies the way the sender's boss writes. The assistant approves each one, and nothing is sent without that approval. Synced is in private beta on the web and iOS.",
  primaryIntent: "about synced ai inbox assistant company",
  published: "2026-09-13",
  updated: "2026-11-05",
  schema: "AboutPage",
  icon: "user",
  body: [
    { type: "h2", text: "What Synced is" },
    {
      type: "p",
      text: "Synced is an AI inbox for assistants who handle a lot of messages for other people, and the name refers to that product at syncedinbox.com. It connects to the email, Slack, Teams, and text accounts an assistant covers, plus Google Calendar, Google Drive, and OneDrive. When a message arrives, Synced writes an [Action Plan](/glossary/action-plan) and does the prep: someone asks to meet, Synced finds a time that's open; someone asks for a file, Synced finds it and attaches it; a reply is owed, Synced drafts it in the executive's voice.",
    },
    {
      type: "p",
      text: "The assistant clears that prepared work from a card stack in [Decide](/features/decide), approving, editing, or redirecting each item. Nothing sends without approval, and every edit teaches Synced more about how that executive writes. Busy professionals who run their own inbox use it the same way, with one fewer person in the loop.",
    },
    { type: "h2", text: "Built for assistants, not to replace them" },
    {
      type: "p",
      text: "A lot of AI products in this space are pitched as a replacement for the assistant. Others, like AI email clients, help one person get through their own mail faster, or only work for the account owner inside Gmail or Outlook. Synced is built for the person who handles someone else's inbox and calendar, across every app the requests come through.",
    },
    {
      type: "p",
      text: "The goal is that 95% of the work is done before the assistant opens the inbox. Assistants mostly schedule with other assistants, so Synced is also designed so that when both sides use it, booking between them can happen without the back-and-forth. More on the thinking in [Your inbox is a to-do list](/blog/your-inbox-is-a-to-do-list).",
    },
    { type: "h2", text: "How Synced works, briefly" },
    {
      type: "steps",
      items: [
        { title: "Connect the inboxes you handle", body: "Gmail, Outlook, Slack, Microsoft Teams, and text messages, plus a few other messaging apps. See [Inboxes](/features/inboxes)." },
        { title: "Synced writes an Action Plan for each message", body: "It checks Google Calendar, Google Drive, and OneDrive for what the message needs, then drafts the reply, the document, or the proposed meeting times." },
        { title: "You decide", body: "Anything that needs a person's judgment, including every AI-drafted message, goes to the [Decide](/features/decide) queue, on web and iPhone. You approve, edit, or answer a question." },
        { title: "Synced finishes the work", body: "Approved replies go out from your own account. To-dos meant for a person land in [Tasks](/features/tasks), and follow-ups are tracked." },
      ],
    },
    { type: "p", text: "The longer version is on [How it works](/how-it-works)." },
    { type: "h2", text: "Who builds Synced" },
    {
      type: "p",
      text: "Synced Inc. was founded in 2025 in San Francisco by Aum Dhruv and Nick Harty. They met on a 6th-grade math team in Florida and have been building things together for about a decade. Both have done the job Synced is built for: turning a stream of messages into finished tasks for someone else.",
    },
    {
      type: "list",
      items: [
        "**Aum Dhruv, CEO.** Princeton (ORFE). Did message-to-task work at the SEC, interned at Amazon on AR hardware, and built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for more than 10,000 meetings.",
        "**Nick Harty, CTO.** Penn (Engineering and Economics at Wharton). Worked as an assistant to a Hollywood producer and coordinated with more than 300 congressional offices for the Congressional App Challenge.",
      ],
    },
    { type: "p", text: "Photos and links are on the [team page](/team)." },
    { type: "h2", text: "Where Synced is today" },
    {
      type: "list",
      items: [
        "Private beta. New users join through the [Get Early Access](/get-started) waitlist.",
        "More than 70% of the messages sent by people using Synced go through it, and Synced has completed more than 11,000 tasks.",
        "Web app at mail.syncedinbox.com for desktop browsers, and an [iOS app](/ios). Same account and history on both.",
        "[Android](/android) is planned. There's no date yet.",
        "Plans: Free, Pro, and Enterprise. Details on [pricing](/pricing).",
        "Dropbox is coming soon for files, alongside iMessage, Notion, GitHub, and more connectors listed in the app.",
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
