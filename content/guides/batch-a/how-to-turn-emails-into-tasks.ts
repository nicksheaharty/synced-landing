import type { Page } from "../../types";

export const turnEmailsIntoTasks: Page = {
  slug: "/guides/how-to-turn-emails-into-tasks",
  cluster: "guide",
  parent: "/guides",
  title: "How to Turn Emails Into Tasks (Gmail, Outlook, Slack) | Synced",
  h1: "How to turn emails into tasks",
  navLabel: "Turn emails into tasks",
  cardText: "Gmail's Add to Tasks, Outlook flags and To Do, Slack reminders, and how to word a task so you can act on it later.",
  description:
    "How to turn emails into tasks: use Add to Tasks in Gmail, flag messages into Microsoft To Do in Outlook, set Slack reminders, and write tasks you can act on.",
  eyebrow: "Guide",
  intro:
    "Half the email that sits in an inbox for a week is really a to-do that had nowhere else to go. Moving it into a task list, with a date and a clear next action, is what lets you archive the email.",
  answer:
    "To turn an email into a task, open the message and click Add to Tasks in Gmail, or flag it in Outlook so it shows up in your task list and Microsoft To Do. Then rename the task as a specific action with a due date, like \"Send Dana revised SOW by Thu,\" and archive the email. The task keeps the work visible; the inbox no longer has to.",
  primaryIntent: "how to turn emails into tasks",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Which emails should become tasks" },
    {
      type: "p",
      text: "Not every email needs one. If you can reply in two minutes, reply. If it's information you might need, archive it and trust search. An email becomes a task when it asks for work that takes longer than a reply, or when the reply depends on something you have to do first. The general pattern is sometimes called [email-to-task](/glossary/email-to-task).",
    },
    { type: "h2", text: "Gmail: Add to Tasks" },
    {
      type: "p",
      text: "Gmail sends tasks to Google Tasks, which also shows up in the side panel on the right of Gmail and Google Calendar, and at tasks.google.com.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Open the email",
          body: "Open the message in Gmail on your computer.",
        },
        {
          title: "Click Add to Tasks",
          body: "At the top of the message, click Add to Tasks. If you don't see it, click More, then Add to Tasks. You can also drag the email into the Tasks panel on the right side of Gmail.",
        },
        {
          title: "Fix the title and add a date",
          body: "The task opens in the side panel. Rewrite the title as an action, then add a date and time, a deadline, subtasks, or a repeat schedule.",
        },
        {
          title: "Archive the email",
          body: "Once the task exists, archive the message. The task is now what reminds you, not the unread count.",
        },
      ],
    },
    {
      type: "p",
      text: "On the Gmail app for Android, iPhone, or iPad, open the email and tap More options, then Add to Tasks. Gmail's AI Overview summaries can also spot a task with a due date inside a thread and show a Remind me option next to it.",
    },
    { type: "h2", text: "Outlook: flag the message" },
    {
      type: "p",
      text: "Outlook's version of a task is a flagged email. Flags come with a due date and show up in your task views.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Flag it with a date",
          body: "Click the flag next to the message in your inbox for a default flag, or right-click the flag and pick Today, Tomorrow, This Week, Next Week, or Custom.",
        },
        {
          title: "Find it in your task list",
          body: "In classic Outlook, flagged messages appear in the To-Do Bar, in Tasks, and in the Calendar's Daily Task List.",
        },
        {
          title: "Use Microsoft To Do on other devices",
          body: "In Microsoft To Do, turn on the Flagged email list from the list menu. Flagged Outlook messages then appear as tasks on every device. Microsoft says this works with accounts hosted by Microsoft, such as Outlook.com, Hotmail.com, and Live.com, including custom domains hosted there.",
        },
        {
          title: "Close it out",
          body: "When you're done, choose Mark Complete, which keeps a struck-through record, or Clear Flag, which removes it entirely.",
        },
      ],
    },
    {
      type: "p",
      text: "You can also flag a message you're sending: on the Message tab, in the Tags group, choose Follow Up before you click Send. That's handy for requests where you're the one waiting, though [automating email follow-ups](/guides/how-to-automate-email-follow-ups) covers that case in more depth.",
    },
    { type: "h2", text: "Slack: save it for Later or set a reminder" },
    {
      type: "p",
      text: "Requests in Slack disappear faster than email. Hover over the message and click the save icon to add it to Later, or click the three dots and choose Remind me about this, then pick a time or Custom time. Your saved items live under Later in the In progress tab, and due reminders show up in Activity.",
    },
    { type: "h2", text: "Write the task so future you can act on it" },
    {
      type: "p",
      text: "The most common failure is a task list full of email subject lines. \"Re: Q3 planning\" tells you nothing on Thursday morning. Rewrite each one before you save it.",
    },
    {
      type: "table",
      head: ["Weak task (from the subject line)", "Useful task"],
      rows: [
        ["Re: Q3 planning", "Send Priya Q3 headcount numbers by Wed"],
        ["Contract", "Redline section 4 of the Acme MSA and return to legal"],
        ["Quick question", "Answer Sam: can we move the demo to Oct 9"],
        ["Fwd: invoice", "Approve October invoice in the billing portal"],
      ],
      caption: "Start with a verb, name the person or thing, and add a date if one exists.",
    },
    {
      type: "list",
      items: [
        "Put the due date on the task, not in your head. If the email didn't give one, set the date you'll check on it.",
        "Keep the link to the original email, or search for it by sender when you start. Don't copy the whole message into the task notes.",
        "If the task belongs to someone else, it isn't your task. Forward it with a clear ask, and see the guide on [delegating email](/guides/how-to-delegate-email).",
      ],
    },
    { type: "h2", text: "Comparing the ways to capture a task" },
    {
      type: "table",
      head: ["Method", "Works in", "Due dates", "Who writes the task"],
      rows: [
        ["Gmail Add to Tasks", "Gmail, Google Calendar, Google Tasks", "Yes, plus repeats and subtasks", "You"],
        ["Outlook flags and To Do", "Outlook, Microsoft To Do", "Yes", "You"],
        ["Slack Later and reminders", "Slack", "Reminder times", "You"],
        ["AI inbox assistant (Synced)", "Connected email and chat Inboxes", "When the message includes one", "Synced, from the message"],
      ],
    },
    { type: "h2", text: "How Synced turns a message into a Task" },
    {
      type: "p",
      text: "[Synced](/) reads each new message and sorts out what kind of work it is. Anything it can prepare, like a draft reply or a file from Drive, goes to Decide for your approval. When a message asks a person to do something Synced can't draft, it becomes an item in [Tasks](/features/tasks), written as an action and linked back to the conversation it came from.",
    },
    {
      type: "message",
      from: "Priya (manager)",
      source: "slack",
      time: "11:20 AM",
      text: "Can you pull together the Q3 headcount numbers before Wednesday's planning meeting? Also let finance know we're pushing the offsite.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Added a Task: Send Priya Q3 headcount numbers by Wednesday",
        "Drafted a short note to finance about moving the offsite",
      ],
      caption: "An illustration. The note to finance isn't sent until you approve it.",
    },
    {
      type: "p",
      text: "Synced's Tasks live in Synced. Google Tasks and Microsoft To Do aren't among its integrations, so if your team already runs everything through a project tool, that tool's own email forwarding may fit better. More connectors are listed as coming soon in the app.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Create a task in Gmail", url: "https://support.google.com/mail/answer/9920317", checked: "2026-09-13" },
        { label: "Google Tasks Help: Add or edit a task", url: "https://support.google.com/tasks/answer/7675838", checked: "2026-09-13" },
        { label: "Microsoft Support: Flag email messages for follow up", url: "https://support.microsoft.com/en-us/outlook/flag-email-messages-for-follow-up", checked: "2026-09-13" },
        { label: "Microsoft Support: Using Microsoft To Do with flagged email from Outlook", url: "https://support.microsoft.com/en-us/office/using-microsoft-to-do-with-flagged-email-from-outlook-f90c37b0-4453-4756-a6d5-e2ef8d33b395", checked: "2026-09-13" },
        { label: "Slack Help: Save messages and files for later", url: "https://slack.com/help/articles/13453851074067-Save-it-for-Later", checked: "2026-09-13" },
        { label: "Slack Help: Set a reminder", url: "https://slack.com/help/articles/208423427-Set-a-reminder", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Why don't I see Add to Tasks in Gmail?",
      a: "Look under the More menu at the top of the open email. If it's missing there too, open the Tasks icon in the right side panel (click Show side panel at the bottom right if the panel is hidden) and drag the email into it.",
    },
    {
      q: "Do flagged emails in Outlook show up in Microsoft To Do?",
      a: "Yes, once you turn on the Flagged email list in To Do. Microsoft lists this as available for accounts hosted by Microsoft, such as Outlook.com, Hotmail.com, and Live.com, including Microsoft-hosted accounts on a custom domain.",
    },
    {
      q: "Should I keep the email in my inbox after making a task?",
      a: "No. Archive it. Keeping both means you track the same work in two places, and the inbox copy is the one that gets buried.",
    },
  ],
  related: ["/guides/how-to-get-to-inbox-zero", "/glossary/email-to-task", "/features/tasks"],
};
