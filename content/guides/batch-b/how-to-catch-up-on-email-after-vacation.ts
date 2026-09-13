import type { Page } from "../../types";

export const catchUpEmailAfterVacation: Page = {
  slug: "/guides/how-to-catch-up-on-email-after-vacation",
  cluster: "guide",
  parent: "/guides",
  title: "How to Catch Up on Email After Vacation | Synced",
  h1: "How to catch up on email after vacation",
  navLabel: "Catch up on email after vacation",
  cardText: "A search-first method for clearing a week or two of email in a morning, in Gmail or Outlook.",
  description:
    "Catch up on email after vacation by searching instead of scrolling: clear automated mail in bulk, find mail from the people who matter, then answer by thread.",
  eyebrow: "Guide",
  intro:
    "Two weeks away can mean 600 emails, and maybe 30 of them need you. The trick is finding those 30 without reading the other 570 in order.",
  answer:
    "To catch up on email after vacation, don't read top to bottom. First block time and keep your out-of-office on for one extra day. Then use search to clear newsletters and notifications in bulk, pull up messages from your manager, key clients, and other real people, and read long threads from the latest message backward. Reply to what's still open and send one short note to anyone who waited.",
  primaryIntent: "how to catch up on email after vacation",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Before you leave: three settings that shrink the pile" },
    {
      type: "p",
      text: "Most of the catch-up work is decided before the trip. Ten minutes on your last afternoon saves an hour on your first morning back.",
    },
    {
      type: "steps",
      items: [
        { title: "Set an out-of-office that ends a day late", body: "In Gmail, open Settings, See all settings, and on the General tab turn on Vacation responder with a start and end date. In Outlook on the web, go to Settings, Account, Automatic replies, and choose Send replies only during a time period. Set the end date to your first day back, not your last day away, so people don't expect instant answers while you dig out." },
        { title: "Name someone for urgent things", body: "Put a colleague's name in the auto-reply for anything that can't wait. It moves real emergencies out of your inbox entirely. The [out-of-office message template](/templates/out-of-office-message) has wording." },
        { title: "Decline meetings automatically", body: "On a Google Workspace work or school account, create an Out of office event in Google Calendar and it declines meetings during that time. In Outlook, add an event for the dates you're away and show it as Out of office, then decline or hand off the meetings already booked." },
      ],
    },
    { type: "h2", text: "Your first hour back: clear the automated mail in bulk" },
    {
      type: "p",
      text: "Don't open anything yet. Start by removing the messages that never needed you: newsletters, receipts, app notifications, and CC threads that resolved themselves. Searches do this faster than scrolling.",
    },
    {
      type: "table",
      head: ["Goal", "Gmail search", "Outlook"],
      rows: [
        ["Everything since you left", "`after:2026/08/31`", "Filter or search by received date"],
        ["Promotions and social updates", "`category:promotions` or `category:social`", "The Other tab if Focused Inbox is on"],
        ["Unread only", "`is:unread`", "Filter, then Unread"],
        ["Newsletters", "`unsubscribe after:2026/08/31`", "Search `unsubscribe`"],
        ["Tool notifications", "`from:noreply`", "Search the sender address"],
      ],
      caption: "Replace the date with the day you left. In Gmail, select all results, then use \"Select all conversations that match this search\" to act on more than one page.",
    },
    {
      type: "p",
      text: "Archive, don't delete. Archived mail is still searchable if a receipt turns out to matter. In Gmail, `e` archives the selection once keyboard shortcuts are on. In Outlook on the web, right-clicking a folder gives Mark all as read for anything you'd rather keep but not read.",
    },
    { type: "h2", text: "Find the emails that actually need you" },
    {
      type: "p",
      text: "What's left is smaller, but still out of order. Pull the important senders to the top with searches, in this order.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Your manager and your top three clients or partners: `from:name@company.com after:2026/08/31` in Gmail, or a search on their name in Outlook.",
        "Mail from people rather than systems: in Gmail, `after:2026/08/31 -category:promotions -category:social -category:updates` drops most automated senders. In Outlook, stay in the Focused tab.",
        "Threads with your name in the body, where someone asked you something directly: search your first name.",
        "Anything with a deadline word: `deadline OR asap OR \"by friday\"`. Crude, but it surfaces things.",
      ],
    },
    {
      type: "p",
      text: "Star or flag each one that needs action as you go. Don't reply yet. You're building today's list, and the reply you'd write to message 4 might be answered by message 19.",
    },
    { type: "h2", text: "Read long threads backward" },
    {
      type: "p",
      text: "A 22-message thread from your time away usually ended somewhere. Open it, jump to the latest message, and read up only until you understand the current state. If the last message says \"sorted, thanks all,\" archive the thread and move on.",
    },
    {
      type: "p",
      text: "If a thread is still open, write one reply that answers the current question, not a reply to each old message. \"Catching up after time off. On the vendor question, let's go with option B\" does the job of six separate responses.",
    },
    { type: "h2", text: "Reply in order of who's waiting longest on something only you can do" },
    {
      type: "list",
      items: [
        "Blocked people first: anyone who can't move until you answer.",
        "Then deadlines inside the next two days.",
        "Then everything flagged, oldest first.",
        "Last, anything you're only CC'd on that still needs a thumbs-up.",
      ],
    },
    {
      type: "p",
      text: "For replies that are several days late, one line of acknowledgment is enough. The [apology for late reply template](/templates/apology-for-late-reply) covers the wording without groveling. Anything that needs more than 15 minutes becomes a calendar block, not an open tab.",
    },
    { type: "h2", text: "How Synced handles the backlog" },
    {
      type: "p",
      text: "[Synced](/) reads new messages across your connected Inboxes as they arrive, including while you're away, and writes an Action Plan for each. Replies it drafts, meeting times it proposes, and files it finds wait in your Decide queue. So on your first morning back, the pile is a list of decisions rather than 600 unread emails, and nothing was sent while you were gone because each draft needs your approval.",
    },
    {
      type: "message",
      from: "Priya (client)",
      source: "gmail",
      time: "Thursday 3:14 PM",
      text: "Following up on the revised proposal while you're out. Can someone confirm the start date is still the 15th?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the revised proposal in Drive and checked the start date",
        "Drafted a reply confirming the 15th, held for your approval",
      ],
      caption: "An illustration of what waits in Decide when you get back.",
    },
    {
      type: "p",
      text: "One thing to know: on the Free plan, 20 Action Plans a week can run out during a busy absence. The count resets every Monday at 00:00 UTC, and Pro covers 100 a week.",
    },
    {
      type: "sources",
      items: [
        { label: "Send an automatic reply when you're out of office (Gmail Help)", url: "https://support.google.com/mail/answer/25922", checked: "2026-09-13" },
        { label: "Send automatic out of office replies from Outlook (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/send-automatic-out-of-office-replies-from-outlook-9742f476-5348-4f9f-997f-5e208513bd67", checked: "2026-09-13" },
        { label: "Show when you're out of office in Google Calendar (Google Calendar Help)", url: "https://support.google.com/calendar/answer/7638168", checked: "2026-09-13" },
        { label: "Search operators you can use with Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/7190", checked: "2026-09-13" },
        { label: "Keyboard shortcuts for Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/6594", checked: "2026-09-13" },
        { label: "Focused Inbox for Outlook (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/focused-inbox-for-outlook-f445ad7f-02f4-4294-a82e-71d8964e3978", checked: "2026-09-13" },
        { label: "Working with message folders in Outlook on the web (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/working-with-message-folders-in-outlook-on-the-web-ae0f10d6-54e7-4f29-acd3-78cdc3fdcb9f", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Should I declare email bankruptcy after vacation?",
      a: "Rarely. Archiving everything and asking people to resend what matters shifts your work onto them. Clearing automated mail in bulk and searching for direct messages gets most of the benefit without the fallout.",
    },
    {
      q: "How long does it take to catch up on two weeks of email?",
      a: "With the search-first method, a typical backlog takes a focused morning. Block the time on your calendar and keep your out-of-office on until it's done.",
    },
    {
      q: "Should I reply to every email I missed?",
      a: "No. Reply to anything still open or addressed to you directly. Threads that resolved while you were away can be archived without a reply.",
    },
  ],
  related: ["/guides/how-to-batch-process-email", "/templates/out-of-office-message", "/features/decide"],
};
