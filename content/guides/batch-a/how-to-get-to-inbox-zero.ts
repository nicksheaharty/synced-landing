import type { Page } from "../../types";

export const getToInboxZero: Page = {
  slug: "/guides/how-to-get-to-inbox-zero",
  cluster: "guide",
  parent: "/guides",
  title: "How to Get to Inbox Zero in Gmail and Outlook | Synced",
  h1: "How to get to inbox zero",
  navLabel: "Get to inbox zero",
  cardText: "Clear the backlog once, cut what comes in, then give every new message a decision in one pass.",
  description:
    "How to get to inbox zero in Gmail or Outlook: archive the backlog in one pass, cut incoming noise with filters, then decide on each new email once.",
  eyebrow: "Guide",
  intro:
    "Getting to inbox zero is two separate jobs: clearing the pile you already have, and keeping new mail from turning into a pile again. The first takes an afternoon. The second takes a habit.",
  answer:
    "To get to inbox zero, archive everything older than a few weeks in one bulk action, unsubscribe and filter the senders that don't need you, then process new email in set sessions where every message gets one decision: archive, reply now, turn it into a task, or hand it off. Inbox zero is about each email having a next step, not about a message count of zero.",
  primaryIntent: "how to get to inbox zero",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "What you're aiming for" },
    {
      type: "p",
      text: "The term comes from Merlin Mann, and the [original idea of inbox zero](/glossary/inbox-zero) is that your inbox shouldn't hold your attention hostage. An empty inbox is the visible result. The real goal is that nothing in it is waiting on a decision you haven't made yet.",
    },
    {
      type: "p",
      text: "That matters for the method. Marking 3,000 emails as read gets you a clean-looking inbox and no idea which of them had a question in it. The steps below get you to zero without losing the handful of messages that still matter.",
    },
    { type: "h2", text: "Step 1: Clear the backlog without reading it" },
    {
      type: "p",
      text: "If something from six weeks ago was urgent, someone has already followed up. Archive old mail in bulk rather than reading it. Archiving isn't deleting, so everything stays searchable.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Gmail: search, select, archive",
          body: "In the search bar, type `in:inbox older_than:30d` and press Enter. Check the select-all box above the list. Gmail only selects the visible page at first, so use the option it shows to select every conversation matching the search, then click Archive.",
        },
        {
          title: "Outlook: archive by date",
          body: "Sort the inbox by date, click the first message older than a month, Shift-click the last one, and choose Archive. Archived mail moves to the Archive folder under Folders.",
        },
        {
          title: "Rescue anything recent and real",
          body: "Before archiving, run a quick search for your manager, your top clients, or `is:starred` in Gmail. Flag or star what still needs you and leave it in the inbox.",
        },
      ],
    },
    { type: "h2", text: "Step 2: Cut what arrives before it lands" },
    {
      type: "p",
      text: "Most inboxes refill with newsletters, receipts, and notifications. Deal with the sender once instead of the message every day.",
    },
    {
      type: "list",
      items: [
        "Gmail: click More in the left menu, then Manage subscriptions. It lists senders by how often they email you, with an Unsubscribe button next to each. Google notes this is still rolling out, so you may not see it yet.",
        "Gmail: for mail you want to keep but not see, click Show search options in the search bar, enter the sender, choose Create filter, and pick an action such as skipping the inbox and applying a label.",
        "Outlook: select a message from a noisy sender and choose Sweep. You can move or delete everything from that sender, keep only the latest email, or remove messages older than 10 days.",
        "Outlook: turn on Focused Inbox under View, View settings, Mail, Layout, then Sort messages into Focused and Other. It works with Microsoft 365, Exchange, and Outlook.com accounts.",
      ],
    },
    { type: "h2", text: "Step 3: Process new email in sessions, one decision per message" },
    {
      type: "p",
      text: "Checking email constantly is how an inbox fills back up, because you open things you aren't ready to act on and leave them there. Pick two or three times a day. In each session, open messages top to bottom and don't close one without a decision.",
    },
    {
      type: "table",
      head: ["If the email...", "Do this", "Where it goes"],
      rows: [
        ["Needs nothing from you", "Archive it", "Archive"],
        ["Needs a reply that takes under two minutes", "Reply now, then archive", "Sent"],
        ["Needs real work or a longer reply", "Turn it into a task with a date", "Your task list"],
        ["Belongs to someone else", "Forward it with one line of context", "Their inbox"],
        ["Needs an answer from someone else first", "Archive and track the follow-up", "A follow-up reminder"],
      ],
    },
    {
      type: "p",
      text: "The third row is the one people skip. An email you plan to deal with later is a task wearing a disguise, and it stays in the inbox because there's nowhere else for it to go. The guide on [turning emails into tasks](/guides/how-to-turn-emails-into-tasks) covers Gmail's Add to Tasks and Outlook flags. For the last row, see [automating email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
    { type: "h3", text: "Speed up the session with keyboard shortcuts" },
    {
      type: "p",
      text: "In Gmail, turn on shortcuts under Settings, See all settings, then Keyboard shortcuts on. After that, `e` archives, `r` replies, `j` and `k` move between conversations, and `b` snoozes. Press `?` to see the full list. Snooze is useful for mail that genuinely can't be handled until a later date, like a shipping notice.",
    },
    { type: "h2", text: "Keeping it at zero after week one" },
    {
      type: "list",
      items: [
        "Close the email tab between sessions. Turning off desktop notifications helps more than any filter.",
        "When the same kind of email shows up three times, write a filter or a template for it.",
        "Once a week, check your task list and follow-ups, not the inbox. That's where the work actually lives now.",
        "Don't chase zero on a bad day. Twenty messages with a clear next step is fine.",
      ],
    },
    { type: "h2", text: "How Synced handles the processing step" },
    {
      type: "p",
      text: "The slow part of inbox zero is the middle column of that table: writing the reply, finding the attachment, creating the task. [Synced](/), an AI inbox assistant, does that prep for each new message and puts only the decisions in front of you in its [Decide queue](/features/decide).",
    },
    {
      type: "message",
      from: "Marcus (vendor)",
      source: "gmail",
      time: "10:14 AM",
      text: "Can you confirm the delivery address for the October order and send over the updated PO?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: ["Found the updated PO in Drive and attached it", "Drafted a reply confirming the address from your last order"],
      file: "PO_October_rev2.pdf",
      caption: "An illustration. The reply waits for your approval before it's sent.",
    },
    {
      type: "p",
      text: "It won't decide for you what to archive or unsubscribe from, and if your inbox is mostly newsletters, Gmail's own tools will do more. Where it helps is the mail that needs a real response.",
    },
    {
      type: "table",
      head: ["Approach", "Clears the backlog", "Handles new mail", "Cost"],
      rows: [
        ["Bulk archive plus filters", "Yes", "Only the mail your filters match", "Free"],
        ["Daily processing sessions", "No", "Yes, if you stick to it", "Free, costs time"],
        ["AI inbox assistant (Synced)", "No", "Drafts replies and creates tasks for your approval", "Free plan, or Pro at $29.99/user/month"],
      ],
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Search operators you can use with Gmail", url: "https://support.google.com/mail/answer/7190", checked: "2026-09-13" },
        { label: "Gmail Help: Manage your subscriptions in Gmail", url: "https://support.google.com/mail/answer/15621070", checked: "2026-09-13" },
        { label: "Gmail Help: Create rules to filter your emails", url: "https://support.google.com/mail/answer/6579", checked: "2026-09-13" },
        { label: "Gmail Help: Keyboard shortcuts for Gmail", url: "https://support.google.com/mail/answer/6594", checked: "2026-09-13" },
        { label: "Microsoft Support: Organize your inbox with Archive, Sweep, and other tools", url: "https://support.microsoft.com/en-us/outlook/organize-your-inbox-with-archive-sweep-and-other-tools-in-outlook-on-the-web", checked: "2026-09-13" },
        { label: "Microsoft Support: Focused Inbox for Outlook", url: "https://support.microsoft.com/en-us/outlook/mail/focused-inbox-for-outlook", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Is it OK to archive thousands of unread emails at once?",
      a: "Yes. Archiving removes mail from the inbox but keeps it in All Mail (Gmail) or the Archive folder (Outlook), so search still finds it. Anything truly urgent from weeks ago has usually been followed up already.",
    },
    {
      q: "How often should I check email to keep inbox zero?",
      a: "Two to three set sessions a day works for most jobs. Roles that need fast replies, like support or sales, may need more, but each check should still end with every opened message decided.",
    },
    {
      q: "What's the difference between archiving and deleting?",
      a: "Archived email leaves the inbox and stays searchable. Deleted email goes to Trash, which Gmail empties after 30 days. For inbox zero, archive by default and delete only true junk.",
    },
    {
      q: "Does inbox zero work with a shared or team inbox?",
      a: "The same decisions apply, but someone has to own each message. Assign or forward the email before archiving it, or it can disappear for everyone.",
    },
  ],
  related: ["/guides/how-to-turn-emails-into-tasks", "/glossary/inbox-zero", "/features/decide"],
};
