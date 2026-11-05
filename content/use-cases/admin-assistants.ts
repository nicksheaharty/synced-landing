import type { Page } from "../types";

export const adminAssistants: Page = {
  slug: "/for/admin-assistants",
  cluster: "use-case",
  parent: "/for",
  title: "AI Inbox for Admin Assistants and Office Managers | Synced",
  h1: "Synced for admin assistants and office managers",
  navLabel: "Admin assistants",
  cardText: "High-volume scheduling, file requests, and vendor messages for several people, prepared for your approval.",
  description:
    "Synced is an AI inbox for high-volume admin assistants and office managers. It reads the inboxes you cover, prepares times, files, and replies, and waits for approval.",
  eyebrow: "Use case",
  icon: "users",
  intro:
    "If you support a team instead of one executive, the volume is the problem. Synced reads what comes in for everyone you cover and has the routine replies ready by the time you sit down.",
  answer:
    "Synced is an AI inbox for high-volume admin assistants and office managers. It reads messages from the Gmail, Outlook, Slack, Microsoft Teams, and text accounts you connect, finds open times on the connected calendars, attaches files from Google Drive or OneDrive, and drafts each reply. You clear the prepared work one card at a time in Decide, and nothing Synced drafted is sent until you approve it.",
  primaryIntent: "ai inbox for admin assistants and office managers",
  published: "2026-11-05",
  updated: "2026-11-05",
  related: ["/for/executive-assistants", "/features/decide", "/features/tasks", "/integrations/microsoft-teams"],
  body: [
    { type: "h2", text: "What an admin assistant's inbox looks like at 8 AM" },
    {
      type: "p",
      text: "Twenty unread emails, half of them for someone else. A partner wants to move Thursday's meeting. A new hire needs the onboarding packet. A vendor asks when they can come service the printer. Two Teams messages ask whether a conference room is free. None of it is hard, and all of it takes three tabs to answer.",
    },
    {
      type: "p",
      text: "Synced reads those messages as they arrive and prepares the work each one asks for. When you open it, the replies are drafted, the files are attached, and the meeting changes are waiting as events to confirm.",
    },
    { type: "h2", text: "Requests Synced prepares for an admin team" },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "Meeting moves and new meetings", body: "Synced checks the connected calendar, prepares the new or changed event, and drafts the reply. You confirm the event first, then the reply." },
        { icon: "folder", title: "\"Can you send the...\"", body: "Forms, policies, packets, and decks found in Google Drive or OneDrive and attached to the draft." },
        { icon: "chat", title: "Quick questions from the team", body: "Slack and Teams DMs get a drafted answer from the thread and the files Synced can search." },
        { icon: "tasks", title: "Things only you can do", body: "Order supplies, book the caterer, call the landlord. Synced turns them into Tasks with a date and a link back." },
      ],
    },
    { type: "h3", text: "A reschedule that touches two calendars" },
    {
      type: "message",
      from: "Priya (partner firm)",
      source: "gmail",
      time: "8:03 AM",
      text: "Hi, something came up on our end. Could we move Thursday's 2 PM with David and Lauren to Friday morning?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Checked David's and Lauren's connected calendars: Friday 10:00 to 11:00 AM is open for both",
        "Prepared the updated event for Friday 10:00 AM",
        "Drafted a reply to Priya confirming Friday, held until the event is approved",
      ],
      caption: "Illustration. Synced can only check calendars on accounts you've connected.",
    },
    { type: "h3", text: "A file request from a new hire" },
    {
      type: "message",
      from: "Jordan (new hire)",
      source: "teams",
      time: "8:20 AM",
      text: "Morning, could you send me the benefits enrollment form and the parking policy? HR said you'd have them.",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Found Benefits_Enrollment_2026.pdf and Parking_Policy.pdf in OneDrive",
        "Drafted a Teams reply to Jordan with both files",
      ],
      file: "Benefits_Enrollment_2026.pdf",
      caption: "Illustration. One message, one Action Plan.",
    },
    { type: "h2", text: "Clearing the queue fast" },
    {
      type: "p",
      text: "Volume is why Decide is a card stack. On the [iOS app](/ios) you go through prepared drafts and events one at a time: approve with a tap, fix a line in place, or tap Reprompt and say what to change. Swipe a card to push it to the back for later; swiping never approves or discards anything. On the web, Decide is a tab next to Messages and Tasks, and approving in either place clears it everywhere.",
    },
    {
      type: "p",
      text: "Each correction you make teaches Synced a little more about how each reply should sound. The style notes it keeps are readable and editable in Settings under Personal Voice. More on [drafting](/features/drafting).",
    },
    { type: "h2", text: "How many accounts and messages one Synced login covers" },
    {
      type: "p",
      text: "Inboxes are unlimited on every plan, with up to 4 accounts per Inbox type. Each account connects through Google's or Microsoft's own permission screen, so the account owner approves it. What's limited is Action Plans: one incoming message is one Action Plan, with 20 a week on Free and 100 a week on Pro ($29.99 per user per month). Past the limit, messages still arrive and new requests become to-dos in Tasks until the count resets on Monday at 00:00 UTC.",
    },
    {
      type: "p",
      text: "For an office handling more than that, Enterprise has custom limits, SSO, and admin controls. See [pricing](/pricing).",
    },
    { type: "h2", text: "Where Synced isn't the right fit for an office" },
    {
      type: "list",
      items: [
        "A shared team inbox with assignment rules. Synced is one person's queue, not a help desk with tickets and handoffs.",
        "Room and resource booking systems. Synced works with calendars on connected Google and Outlook accounts, not separate room-booking tools.",
        "Purchasing and expenses. Synced drafts messages and finds files; it doesn't place orders or file expenses.",
        "Sending without review. Every AI-drafted message needs approval.",
      ],
    },
    {
      type: "p",
      text: "If you support one or two executives closely, [Synced for executive assistants](/for/executive-assistants) goes deeper on that workflow.",
    },
  ],
  faqs: [
    {
      q: "Can one admin assistant connect inboxes for several people?",
      a: "Yes, up to 4 accounts per Inbox type, each approved by its owner on the provider's permission screen. Synced reads them all in one Messages list.",
    },
    {
      q: "Does Synced work with Outlook and Microsoft Teams?",
      a: "Yes. Outlook (with its calendar) and Microsoft Teams one-on-one and group chats are live Inboxes. Teams channel posts aren't covered. See [Microsoft Teams](/integrations/microsoft-teams).",
    },
    {
      q: "What happens when an office goes over the weekly Action Plan limit?",
      a: "Messages still arrive. New requests become to-dos in Tasks instead of agent work until the count resets on Monday at 00:00 UTC. See [Weekly limit reached](/help/weekly-limit-reached).",
    },
    {
      q: "Does Synced send anything without approval?",
      a: "No. Every AI-drafted message and every calendar change waits in Decide until you approve it.",
    },
  ],
};
