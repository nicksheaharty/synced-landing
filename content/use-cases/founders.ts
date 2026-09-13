import type { Page } from "../types";

export const founders: Page = {
  slug: "/for/founders",
  cluster: "use-case",
  parent: "/for",
  title: "AI Email Assistant for Startup Founders | Synced",
  h1: "Synced for founders",
  navLabel: "Founders",
  cardText: "Investor updates, candidate intros, and customer asks across Gmail and Slack, drafted for your approval.",
  description:
    "Synced is an AI email assistant for startup founders. It drafts replies to investors, candidates, and customers across Gmail and Slack, and waits for your approval.",
  eyebrow: "Use case",
  icon: "lightning",
  intro:
    "You're the default owner of every thread nobody else can answer: the investor asking for the latest deck, the candidate who needs a time, the customer who only talks to you. Synced gets those replies ready so you spend your time deciding, not typing.",
  answer:
    "Synced, the AI inbox assistant, helps startup founders keep up with investor, hiring, and customer messages across Gmail, Outlook, Slack, and Microsoft Teams. For each new message it searches Google Drive or OneDrive for the right file, checks Google Calendar for open times, and drafts a reply. Every draft waits in Decide until the founder approves it.",
  primaryIntent: "ai email assistant for startup founders",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/small-business-owners", "/for/executive-assistants", "/features/decide", "/guides/how-to-stop-missing-slack-messages"],
  body: [
    { type: "h2", text: "What a founder's inbox is actually full of" },
    {
      type: "p",
      text: "Early on, the founder is the company's switchboard. Investors email about the round, candidates reply to recruiter intros, a design partner pings you in Slack at 10 PM, and your cofounder drops a question in a DM that needs a number from last month's model. None of it is hard. All of it needs a reply from you, today.",
    },
    {
      type: "p",
      text: "Synced reads each new message, writes an [Action Plan](/glossary/action-plan) for it, and does the parts that don't need your judgment: finding the file, checking the calendar, pulling the context from older threads. What's left for you is a short queue of drafts to approve.",
    },
    { type: "h2", text: "Investor, hiring, and customer messages Synced drafts for founders" },
    { type: "h3", text: "An investor asks for the deck and a call" },
    {
      type: "message",
      from: "Marcus (investor)",
      source: "gmail",
      time: "7:14 AM",
      text: "Enjoyed the chat last week. Could you send the updated deck with the new retention numbers? Happy to find 30 min with my partner before Friday.",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the most recent pitch deck in Google Drive and attached it",
        "Checked Google Calendar and picked three open slots before Friday",
        "Drafted a reply with the deck, the times, and a one-line note on retention",
      ],
      file: "Seed_Deck_v7.pdf",
      caption: "Illustration. The draft waits in Decide until you approve it.",
    },
    {
      type: "p",
      text: "Synced won't invent numbers. If the retention figure isn't in a connected file or an earlier thread, the draft leaves it for you to fill in, and the question shows up in Decide.",
    },
    { type: "h3", text: "A candidate needs an interview time" },
    {
      type: "message",
      from: "Leah (candidate)",
      source: "outlook",
      time: "12:40 PM",
      text: "Thanks for reaching out. I'm interested in the founding engineer role. What does your availability look like next week?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar for open 45-minute blocks next week",
        "Drafted a reply offering three times and a short note on what the first call covers",
      ],
      caption: "Illustration. You approve before anything is sent.",
    },
    { type: "h3", text: "A customer asks something in Slack you'd normally answer at midnight" },
    {
      type: "message",
      from: "Priya (design partner)",
      source: "slack",
      time: "10:02 PM",
      text: "Quick one: is the CSV export shipping this sprint? Our ops lead wants to plan around it.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Searched connected Slack and email threads for the latest update on CSV export",
        "Drafted a reply with the status from the last engineering thread, flagged for you to confirm the date",
      ],
      caption: "Illustration. Synced drafts, you decide what gets promised.",
    },
    { type: "h2", text: "Which integrations matter for a founder" },
    {
      type: "p",
      text: "Most founders need four things connected. Start with email, add the chat tool your team lives in, then storage and calendar so drafts come with the file and the times already attached.",
    },
    {
      type: "table",
      head: ["Connect", "Why it matters for founders"],
      rows: [
        ["[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook)", "Investor, candidate, and customer email. Connect personal and company accounts side by side; Inboxes are unlimited."],
        ["[Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams)", "DMs and channels where your team and early customers ask you things."],
        ["[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive)", "Decks, data rooms, offer letters, and the model. Synced searches these to attach the right file."],
        ["[Google Calendar](/integrations/google-calendar)", "Real open slots for investor calls and interviews, instead of a back-and-forth."],
      ],
      caption: "Gmail, Drive, OneDrive, and Google Calendar are on the Free plan. Outlook, Slack, and Teams need Pro.",
    },
    { type: "h2", text: "Where Synced isn't the right tool for a founder" },
    {
      type: "list",
      items: [
        "It isn't a CRM or an investor-tracking tool. It won't keep a pipeline of funds, stages, and check sizes. Keep that in a spreadsheet or a dedicated tool and let Synced handle the replies.",
        "It isn't an applicant tracking system. It can draft candidate emails and propose interview times, but it doesn't manage stages, scorecards, or offers.",
        "It doesn't send on its own. If you want fully automated outbound sequences, Synced deliberately won't do that; every AI draft needs your approval.",
        "It's in private beta. Integrations like Notion and GitHub are listed as coming soon, and Android is planned without a date.",
      ],
    },
    {
      type: "p",
      text: "If most of your week is the same 30 people asking for a file, a time, or an answer, that's the fit. If your bottleneck is a process problem that needs a system of record, fix that first.",
    },
    { type: "h2", text: "How many Action Plans a founder uses" },
    {
      type: "p",
      text: "One message is one Action Plan, however many steps it takes. The Free plan covers 20 a week, which is enough to try Synced on your main Gmail account. Founders who connect Slack or Teams usually need Pro, which covers 100 a week and all integrations. Details on [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can Synced reply to investors without me seeing the email?",
      a: "No. Synced drafts replies, but every AI-drafted message waits in Decide for your approval. You can edit the draft before it goes out from your own account.",
    },
    {
      q: "Does Synced work with both Gmail and Slack at the same time?",
      a: "Yes. Connect Gmail and Slack as separate Inboxes and Synced handles messages from both in one list. Slack requires the Pro plan.",
    },
    {
      q: "Can my cofounder and I share one Synced account?",
      a: "Synced accounts are per person, signed in with a phone number. Each founder connects their own Inboxes. Pro and Enterprise are priced per user.",
    },
    {
      q: "Will Synced find the right version of our pitch deck?",
      a: "Synced searches connected Google Drive or OneDrive and attaches the file that best matches the request. You see the attachment on the draft before approving, so swap it if it picked an older version.",
    },
  ],
};
