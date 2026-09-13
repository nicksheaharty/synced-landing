import type { Page } from "../types";

export const outlook: Page = {
  slug: "/integrations/outlook",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Outlook: Replies, Calendar, Files | Synced",
  h1: "Synced for Outlook",
  navLabel: "Outlook",
  cardText: "Reads Outlook mail, checks your Outlook calendar, and drafts replies you approve.",
  description:
    "Synced is an AI assistant for Outlook that drafts replies, proposes times from your Outlook calendar, and attaches OneDrive files. Sends wait for approval.",
  eyebrow: "Integration · Inbox",
  intro:
    "Connect a Microsoft 365 or Outlook.com account and Synced reads each new email, checks your Outlook calendar, and has the reply ready before you get to it.",
  answer:
    "Synced, the AI inbox assistant, connects to Outlook through Microsoft's sign-in and permission screen. It reads new mail, searches past messages for context, proposes meeting times from your Outlook calendar, and drafts replies that go out from your own address only after you approve them. Work, school, and personal Outlook.com accounts can connect. Outlook is part of the Pro plan.",
  primaryIntent: "ai assistant for outlook",
  related: ["/integrations/microsoft-teams", "/integrations/onedrive", "/features/scheduling"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "outlook", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with an Outlook email" },
    {
      type: "p",
      text: "Outlook mail tends to come with meetings attached. A partner asks to push Thursday's review and wants the updated budget before then. That's a calendar change, a file, and a reply, and Synced treats it as one [Action Plan](/glossary/action-plan).",
    },
    {
      type: "message",
      from: "Gregory (finance partner)",
      source: "outlook",
      time: "8:14 AM",
      text: "Can we move Thursday's budget review to next week? Please send the revised FY budget beforehand so the team can mark it up.",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the Thursday review on your Outlook calendar and three open slots next week",
        "Found FY_Budget_revised.xlsx in OneDrive and attached it",
        "Drafted a reply with the file and the new times",
      ],
      file: "FY_Budget_revised.xlsx",
      caption: "The reply and the calendar change both wait in Decide. Nothing moves until you approve.",
    },
    {
      type: "p",
      text: "Approve the draft and it sends from your Outlook address in the same conversation. Approve the calendar change separately, or edit the time first.",
    },
    { type: "h2", text: "What you can hand off in Outlook" },
    {
      type: "features",
      items: [
        { icon: "draft", title: "Replies from your own address", body: "Drafts are written after Synced reads the full conversation, and approved replies send from the Outlook account the email came to." },
        { icon: "calendar", title: "Outlook calendar, included", body: "Connecting Outlook also lets Synced check your Outlook calendar for open time and prepare new or changed events for your approval." },
        { icon: "search", title: "Search across old mail", body: "When an email refers to \"the numbers from March,\" Synced searches your past Outlook messages to find what that means." },
        { icon: "folder", title: "OneDrive attachments", body: "Connect [OneDrive](/integrations/onedrive) too and Synced can attach the actual file someone asked for, unchanged." },
      ],
    },
    { type: "h2", text: "How to connect Outlook to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Sign in at [mail.syncedinbox.com](https://mail.syncedinbox.com) or in the iOS app, then open Settings and find Outlook under Inboxes." },
        { title: "Review the permissions sheet", body: "Synced lists what it reads automatically (your inbox, past email, your calendar) and what always needs your approval (sending email, creating or changing events)." },
        { title: "Sign in with Microsoft", body: "Pick the work, school, or personal account to connect and accept Microsoft's consent screen." },
        { title: "Check the account in Settings", body: "The account shows up under Outlook. Add more accounts there and pick which one is the default." },
      ],
    },
    { type: "h2", text: "Microsoft permissions Synced requests for Outlook" },
    {
      type: "p",
      text: "Microsoft shows each of these on its consent screen before you connect. In plain terms:",
    },
    {
      type: "table",
      head: ["Access", "What Synced uses it for"],
      rows: [
        ["Read your mail", "Understand new emails and search older ones for context."],
        ["Read and write your mail", "Create drafts, and archive or mark messages read when you do that in Synced."],
        ["Send mail as you", "Send replies you've approved, from your own address."],
        ["Read and write your calendars", "Check availability and create or update events you've approved."],
        ["Read and write mailbox settings", "Set an out-of-office auto-reply when you ask Synced to."],
        ["Sign you in, read your profile, keep access", "Identify the account and stay connected until you disconnect it."],
      ],
      caption: "Microsoft Teams and OneDrive are separate connections with their own consent screens.",
    },
    {
      type: "callout",
      title: "If your organization blocks the consent screen",
      text: "Some Microsoft 365 organizations require an admin to approve third-party apps. If Microsoft shows an approval-required message instead of the permissions list, your IT admin needs to allow Synced first.",
    },
    { type: "h2", text: "Which Synced plan includes Outlook" },
    {
      type: "p",
      text: "Outlook is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. The Free plan's email Inbox is [Gmail](/integrations/gmail). Inboxes are unlimited on every plan, and Pro covers 100 Action Plans a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Does Synced work with personal Outlook.com and Hotmail accounts?",
      a: "Yes. Personal Outlook.com accounts connect through the same Microsoft sign-in as work and school Microsoft 365 accounts.",
    },
    {
      q: "Does connecting Outlook also connect Teams and OneDrive?",
      a: "No. Outlook covers mail and your Outlook calendar. [Microsoft Teams](/integrations/microsoft-teams) and [OneDrive](/integrations/onedrive) each connect separately, and disconnecting one doesn't affect the others.",
    },
    {
      q: "Can Synced move or accept meetings in my Outlook calendar on its own?",
      a: "No. Synced reads your calendar freely to find open time, but creating or changing an event always waits for your approval in Decide.",
    },
    {
      q: "Can I connect Outlook and Gmail at the same time?",
      a: "Yes. Both show up in the same Messages list, and each reply sends from whichever account the original email came to.",
    },
  ],
};
