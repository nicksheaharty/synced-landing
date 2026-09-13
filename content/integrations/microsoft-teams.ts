import type { Page } from "../types";

export const microsoftTeams: Page = {
  slug: "/integrations/microsoft-teams",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Microsoft Teams Chats | Synced",
  h1: "Synced for Microsoft Teams",
  navLabel: "Microsoft Teams",
  cardText: "Reads your Teams chats, pulls files from OneDrive, and drafts replies you approve.",
  description:
    "Synced is an AI assistant for Microsoft Teams chats. It reads one-on-one and group chats, finds OneDrive files, and drafts replies that send after you approve.",
  eyebrow: "Integration · Inbox",
  intro:
    "Teams chats are where the quick work requests land between meetings. Synced reads them, gathers what's needed, and has a reply waiting for your approval.",
  answer:
    "Synced, the AI inbox assistant, connects to Microsoft Teams with a work or school Microsoft 365 account and reads your one-on-one and group chats. It searches connected files and your calendar for context, drafts a reply in the same chat, and sends it only after you approve. Teams connects separately from Outlook and is part of the Pro plan.",
  primaryIntent: "ai assistant for microsoft teams",
  related: ["/integrations/outlook", "/integrations/onedrive", "/integrations/slack", "/features/decide"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "teams", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a Teams chat message" },
    {
      type: "p",
      text: "A colleague in finance messages you between two back-to-back meetings. She needs a file and your opinion on it, and she needs both before 2:00.",
    },
    {
      type: "message",
      from: "Priya (finance)",
      source: "teams",
      time: "11:52 AM",
      text: "Before the 2pm with procurement, can you send me the vendor comparison? And which of the three would you go with?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found Vendor_Comparison_Q3.xlsx in OneDrive and read the scoring tab",
        "Asked you in Decide which vendor you'd recommend",
        "Drafted a reply in the chat with the file and your pick",
      ],
      file: "Vendor_Comparison_Q3.xlsx",
      caption: "Synced finds the file on its own. The opinion is yours, so it asks before writing it.",
    },
    {
      type: "p",
      text: "Once you answer and approve, the reply posts in the same Teams chat from your account.",
    },
    { type: "h2", text: "What Synced covers in Microsoft Teams" },
    {
      type: "list",
      items: [
        "One-on-one chats and group chats.",
        "Searching your past chats when a message refers to something earlier.",
        "Starting a new one-on-one chat when a task calls for messaging someone first, after you approve the message.",
      ],
    },
    {
      type: "p",
      text: "Posts inside a team's channels aren't part of the Teams connection today. If most of your work happens in channels rather than chats, Synced will only see part of it.",
    },
    { type: "h2", text: "What you can hand off in Teams" },
    {
      type: "features",
      items: [
        { icon: "folder", title: "\"Can you send me the deck?\"", body: "With [OneDrive](/integrations/onedrive) connected, Synced attaches the existing file rather than rebuilding it." },
        { icon: "calendar", title: "Quick syncs", body: "Synced checks your calendar and replies with times that are actually open." },
        { icon: "question", title: "Questions that need you", body: "When a chat asks for a judgment call, Synced puts the question in Decide and writes the reply around your answer." },
        { icon: "draft", title: "Chat-length replies", body: "Drafts stay short and conversational, because a Teams reply that reads like a memo gets skimmed." },
      ],
    },
    { type: "h2", text: "How to connect Microsoft Teams to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Choose Microsoft Teams under Inboxes in the web app or on iOS. Free accounts see the upgrade screen first." },
        { title: "Review the permissions sheet", body: "Synced reads your chats automatically for context. Sending any Teams message is listed as needing your direct approval." },
        { title: "Sign in with your work or school account", body: "Use the Microsoft 365 account you use for Teams and accept Microsoft's consent screen." },
        { title: "Confirm it in Settings", body: "The account appears under Microsoft Teams. Connecting Teams doesn't change your Outlook connection, and the reverse is true too." },
      ],
    },
    { type: "h2", text: "Microsoft permissions Synced requests for Teams" },
    {
      type: "table",
      head: ["Access", "What Synced uses it for"],
      rows: [
        ["Read your chat messages", "Understand new chat messages and search older ones for context."],
        ["Send chat messages", "Post replies you've approved into the chat."],
        ["Create chats", "Start a one-on-one chat when an approved message goes to someone new."],
        ["Sign you in, read your profile, keep access", "Identify the account and stay connected until you disconnect."],
      ],
      caption: "Microsoft lists these on its consent screen. Some organizations require an IT admin to approve the app first.",
    },
    { type: "h2", text: "Which Synced plan includes Microsoft Teams" },
    {
      type: "p",
      text: "Microsoft Teams is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Pro includes 100 Action Plans a week, and a Teams chat message counts as one, the same as an email. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can I connect Teams with a personal Microsoft account?",
      a: "No. Microsoft only makes Teams chats available to apps for work or school Microsoft 365 accounts, so Synced shows an error if you sign in with a personal account.",
    },
    {
      q: "Does Synced read Teams channel posts?",
      a: "Not today. The Teams connection covers one-on-one and group chats only.",
    },
    {
      q: "Do I need Outlook connected to use Teams with Synced?",
      a: "No. Teams is its own connection. Using Gmail for mail and Teams for chat works too.",
    },
    {
      q: "Can Synced join or transcribe Teams meetings?",
      a: "No. Synced works with Teams chat messages. It doesn't join calls or record meetings.",
    },
  ],
};
