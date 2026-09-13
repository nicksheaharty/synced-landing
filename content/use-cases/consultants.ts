import type { Page } from "../types";

export const consultants: Page = {
  slug: "/for/consultants",
  cluster: "use-case",
  parent: "/for",
  title: "AI Inbox Assistant for Consultants and Freelancers | Synced",
  h1: "Synced for consultants",
  navLabel: "Consultants",
  cardText: "Client document requests, scope questions, and status check-ins across several client inboxes.",
  description:
    "Synced helps independent consultants answer client document requests, scope questions, and status check-ins across multiple email and Teams accounts, with approval.",
  eyebrow: "Use case",
  icon: "briefcase",
  intro:
    "Consultants often end up with an email address and a Teams login per client, plus their own. The work is billable; keeping four inboxes current isn't. Synced reads all of them and drafts the replies in one place.",
  answer:
    "Synced, the AI inbox assistant, helps independent consultants handle client email and chat across several accounts at once, including multiple Gmail and Outlook addresses, Slack workspaces, and Microsoft Teams. It finds deliverables in Google Drive or OneDrive, drafts replies to client requests, and proposes meeting times from Google Calendar. Inboxes are unlimited on every plan, and every draft waits for approval.",
  primaryIntent: "ai inbox assistant for consultants",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/agencies", "/for/executive-assistants", "/guides/how-to-manage-multiple-email-accounts", "/features/documents"],
  body: [
    { type: "h2", text: "Why consultants end up with five inboxes" },
    {
      type: "p",
      text: "A client gives you their email address so you can join their calendar invites and see internal docs. Another adds you to their Teams tenant. Your own business runs on Gmail. Each account has its own notifications, and the client who wrote to the address you check least is the one who feels ignored.",
    },
    {
      type: "p",
      text: "Synced treats each of those as an Inbox. Connect as many as you have (Inboxes are unlimited on every plan) and new messages from all of them land in one list, with the reply drafted from the right account.",
    },
    { type: "h2", text: "Client requests Synced drafts for a consultant" },
    { type: "h3", text: "A client asks for last month's deliverable" },
    {
      type: "message",
      from: "Helen (client, VP operations)",
      source: "outlook",
      time: "5:12 PM",
      text: "Our CFO wants to see the vendor assessment you did in August before tomorrow's meeting. Can you resend it, and flag anything that's changed?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the August vendor assessment in OneDrive and attached it",
        "Drafted a reply with the file and a note that pricing on two vendors is from August and should be rechecked",
      ],
      file: "Vendor_Assessment_Aug.pdf",
      caption: "Illustration. Synced can find the file; you confirm what's changed.",
    },
    { type: "h3", text: "A scope question in Teams" },
    {
      type: "message",
      from: "Omar (client project lead)",
      source: "teams",
      time: "10:27 AM",
      text: "Is the data migration plan part of phase 1, or would that be a change order?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Searched connected Drive and OneDrive for the signed statement of work and found the phase 1 scope list",
        "Drafted a reply quoting the scope section and noting migration planning isn't listed",
      ],
      caption: "Illustration. You approve the wording before it goes to the client.",
    },
    {
      type: "p",
      text: "Scope answers are where a hasty reply costs money. Synced drafts from the signed document rather than memory, and leaves the final call to you.",
    },
    { type: "h3", text: "A Friday status check-in" },
    {
      type: "message",
      from: "Helen (client, VP operations)",
      source: "outlook",
      time: "Friday 2:40 PM",
      text: "Before the weekend, can you send a quick note on where things stand?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Pulled this week's threads with Helen's team",
        "Drafted a short status update listing what shipped and what's waiting on them",
      ],
      caption: "Illustration. The update waits in Decide until you approve it.",
    },
    {
      type: "p",
      text: "For structure, the [project status update template](/templates/project-status-update) works well as a baseline.",
    },
    { type: "h2", text: "Which integrations matter for consultants" },
    {
      type: "table",
      head: ["Connect", "Why it matters for client work"],
      rows: [
        ["[Gmail](/integrations/gmail) and [Outlook](/integrations/outlook)", "Your own address and each client-issued address, side by side."],
        ["[Microsoft Teams](/integrations/microsoft-teams) and [Slack](/integrations/slack)", "Client workspaces where day-to-day questions land."],
        ["[Google Drive](/integrations/google-drive) and [OneDrive](/integrations/onedrive)", "Deliverables, SOWs, and working files Synced searches and attaches."],
        ["[Google Calendar](/integrations/google-calendar)", "Open times for client calls. Outlook calendars work too, through the [Outlook](/integrations/outlook) connection."],
      ],
      caption: "Client-issued Microsoft 365 and Google Workspace accounts may need the client's IT admin to allow third-party apps.",
    },
    { type: "h2", text: "Where Synced isn't the right tool for consultants" },
    {
      type: "list",
      items: [
        "It doesn't track time or bill clients. Invoicing and accounting tools like QuickBooks are only listed as coming soon in the app.",
        "It isn't a project management tool. Tasks in Synced are to-dos pulled from conversations, not a plan with dependencies and milestones.",
        "It doesn't bypass client IT policy. If a client's admin blocks third-party apps on the account they gave you, Synced can't connect to it, and you should respect that.",
        "It won't keep client data separated into different Synced accounts for you. All connected Inboxes sit under one login, so check your client agreements before connecting a client-issued account.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I connect several client email accounts to one Synced account?",
      a: "Yes. Inboxes are unlimited on every plan, so you can connect multiple Gmail and Outlook accounts. Outlook, Slack, and Teams are on the Pro plan.",
    },
    {
      q: "Does Synced reply from the right email address?",
      a: "Approved replies go out from the account the message arrived in, in the original thread.",
    },
    {
      q: "Is it safe to connect a client's Microsoft 365 account?",
      a: "Synced connects through the provider's own permission screen, encrypts data in transit and at rest, and doesn't let staff read connected data except for support you request, written consent, or security investigations. Your client's IT policy still decides whether you're allowed to connect. See [Security](/security).",
    },
  ],
};
