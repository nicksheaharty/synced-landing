import type { Page } from "../types";

export const sales: Page = {
  slug: "/for/sales",
  cluster: "use-case",
  parent: "/for",
  title: "AI Email Assistant for Sales Reps | Synced",
  h1: "Synced for sales",
  navLabel: "Sales",
  cardText: "Prospect replies, pricing questions, and demo scheduling drafted for approval. Not a CRM.",
  description:
    "Synced is an AI email assistant for sales reps. It drafts replies to prospects, attaches the right one-pager, books demo times, and drafts nudges on quiet deals.",
  eyebrow: "Use case",
  icon: "arrows",
  intro:
    "The reply that loses a deal is rarely the hard one. It's the \"can you send pricing and a couple of times?\" that sat for a day because you were on calls. Synced has that reply written, with the file and the times, when you get off the call.",
  answer:
    "Synced, the AI inbox assistant, helps sales reps answer inbound prospect messages across Gmail, Outlook, Slack, and Microsoft Teams. It drafts replies, attaches pricing sheets and case documents from Google Drive or OneDrive, proposes demo times from Google Calendar, and tracks threads waiting on a prospect. Every draft needs the rep's approval, and Synced is not a CRM or a sequencing tool.",
  primaryIntent: "ai email assistant for sales reps",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/recruiters", "/for/real-estate-agents", "/features/follow-ups", "/templates/follow-up-after-no-response"],
  body: [
    { type: "h2", text: "The sales messages that sit too long" },
    {
      type: "p",
      text: "Inbound replies in sales are mostly the same shapes: send me pricing, what's the difference between plans, can we move the demo, looping in my boss. Each one needs the right attachment, a calendar check, and a few sentences in your voice. None of them should wait until 6 PM.",
    },
    {
      type: "p",
      text: "Synced reads the message and the thread history, does the lookups, and leaves a finished draft in Decide. You read it between calls and approve it.",
    },
    { type: "h2", text: "Prospect replies, reschedules, and stalled deals Synced drafts" },
    { type: "h3", text: "A prospect asks for pricing and a demo" },
    {
      type: "message",
      from: "Kevin (prospect, ops director)",
      source: "gmail",
      time: "11:36 AM",
      text: "Thanks for the overview. Can you send pricing for 40 seats and set up a demo for me and our IT lead next week?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the current pricing sheet in Google Drive and attached it",
        "Checked Google Calendar and picked three 30-minute slots next week",
        "Drafted a reply with the sheet, the times, and a question about the IT lead's security requirements",
      ],
      file: "Pricing_2026_Team.pdf",
      caption: "Illustration. The reply waits in Decide until you approve it.",
    },
    { type: "h3", text: "Your champion wants to move the call" },
    {
      type: "message",
      from: "Alicia (champion)",
      source: "outlook",
      time: "4:55 PM",
      text: "Our CFO got pulled into budget review tomorrow. Any chance we can push to Monday or Tuesday?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar for Monday and Tuesday openings",
        "Drafted a reply offering two times and confirming the CFO will join",
      ],
      caption: "Illustration. Once a time is agreed, Synced can update the event on Google Calendar.",
    },
    { type: "h3", text: "A deal goes quiet after the proposal" },
    {
      type: "message",
      from: "You",
      source: "gmail",
      time: "Tuesday 8:30 AM",
      text: "@Synced nudge Jordan on the proposal, he never answered on contract length",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Pulled the open question from the last email about contract length",
        "Drafted a short follow-up offering a 12-month or month-to-month option",
      ],
      caption: "Illustration. You ask in one line; Synced reads the thread and writes the follow-up for approval.",
    },
    { type: "h3", text: "An internal deal question in Slack" },
    {
      type: "message",
      from: "Erin (your sales manager)",
      source: "slack",
      time: "2:22 PM",
      text: "Did Northwind ever send their redlines back? Legal is asking.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Searched connected email and found the redlines arrived Friday",
        "Drafted a Slack reply to Erin with the date and the attachment name",
      ],
      caption: "Illustration. Deal context lives in two places for most reps; Synced searches both.",
    },
    { type: "h2", text: "Which integrations matter for sales" },
    {
      type: "table",
      head: ["Connect", "Why it matters for a rep"],
      rows: [
        ["[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook)", "Prospect threads, proposals, and scheduling."],
        ["[Google Calendar](/integrations/google-calendar)", "Demo and discovery call times without a booking-link back-and-forth."],
        ["[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive)", "Pricing sheets, security documents, and case studies to attach."],
        ["[Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams)", "Deal questions from your manager, solutions engineer, or a shared customer channel."],
        ["[SMS](/integrations/sms) or [WhatsApp Business](/integrations/whatsapp-business)", "For reps whose buyers text, through a Twilio number or a WhatsApp Business account."],
      ],
    },
    { type: "h2", text: "Where Synced isn't the right tool for sales" },
    {
      type: "list",
      items: [
        "It isn't a CRM. Synced doesn't log activities, update deal stages, or produce pipeline reports, and it doesn't connect to CRMs today. HubSpot is listed as coming soon in the app. Keep your CRM as the system of record.",
        "It isn't a sequencing or cold outbound tool. It won't send a five-step cadence to 500 contacts. Every draft needs your approval, one message at a time.",
        "It doesn't forecast. There's no quota tracking or revenue reporting.",
      ],
    },
    {
      type: "p",
      text: "The fit is the inbound side of a rep's week: replies to people who already wrote to you. Pair Synced with your CRM for records and with your outbound tool for volume.",
    },
    { type: "h2", text: "Plan fit for a sales rep" },
    {
      type: "p",
      text: "Free covers Gmail, Drive, OneDrive, and Google Calendar with 20 Action Plans a week, enough for a rep who mostly lives in Gmail to test it. Outlook, Slack, Teams, and the messaging Inboxes are on Pro, with 100 Action Plans a week. Sales teams that need SSO or a security review can use Enterprise. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Does Synced integrate with Salesforce or HubSpot?",
      a: "Not today. Synced has no live CRM integrations. HubSpot appears in the app's connector catalog as coming soon. Synced handles the replies; your CRM stays the record.",
    },
    {
      q: "Can Synced send follow-up sequences automatically?",
      a: "No. Synced drafts follow-ups when you ask, but each one needs your approval before it's sent. It isn't built for automated cadences.",
    },
    {
      q: "Will the drafts sound like me?",
      a: "Synced reads the thread before drafting, so replies match the conversation. You can edit any draft in Decide before approving it.",
    },
  ],
};
