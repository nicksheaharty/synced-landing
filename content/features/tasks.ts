import type { Page } from "../types";

export const tasks: Page = {
  slug: "/features/tasks",
  cluster: "feature",
  parent: "/features",
  title: "Tasks: To-dos Pulled From Your Email and Chats | Synced",
  h1: "Tasks",
  navLabel: "Tasks",
  cardText: "The to-dos your conversations hand to you, with dates, priority, and a link back to the thread.",
  description:
    "Synced Tasks turns requests in your email, Slack, and texts into to-dos for you, with the sender, a date, a priority, and a link back to the conversation.",
  eyebrow: "Feature",
  intro:
    "Some messages ask for things no assistant can do for you: sign it, pick one, show up. Synced writes those down so they don't live only in a thread you've already read.",
  answer:
    "Tasks in Synced, the AI inbox assistant, are to-dos for you rather than for Synced. When a message in a connected Inbox asks you to do something only a person can do, like signing a document or choosing between options, Synced adds a Task with who asked, a date if the message implied one, a deadline if it named one, and a priority. Each Task links back to the conversation it came from.",
  primaryIntent: "synced tasks",
  related: ["/features/decide", "/features/follow-ups", "/glossary/email-to-task", "/guides/how-to-turn-emails-into-tasks"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "tasks",
  body: [
    { type: "h2", text: "How a message becomes a Task in Synced" },
    {
      type: "p",
      text: "Synced reads every new message and splits the asks into two piles. Work Synced can do (draft the reply, find the file, propose the time) goes into the [Action Plan](/glossary/action-plan). Work only you can do becomes a Task. One message can produce both.",
    },
    {
      type: "message",
      from: "Sam (co-founder)",
      source: "slack",
      time: "4:05 PM",
      text: "Need you to sign the updated SAFE before Friday, legal is waiting. Also can you send Hannah the investor update draft?",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Added a Task for you: sign the updated SAFE, deadline Friday, priority 1",
        "Found the investor update draft in Drive",
        "Drafted a message to Hannah with the file attached",
      ],
      file: "Investor_Update_Sept.docx",
      caption: "An illustration. The signature is yours to do, so it's a Task. The message to Hannah is a draft in Decide.",
    },
    {
      type: "p",
      text: "Synced only creates Tasks from the newest message, not from quoted history further down an email. So an old request that was already handled in a previous reply doesn't come back as a fresh to-do.",
    },
    { type: "h2", text: "Dates, deadlines, and priority on a Task" },
    {
      type: "p",
      text: "Synced separates two kinds of timing that people usually blur together. A date is when you plan to work on it (\"let's aim for Thursday\"). A deadline is a hard cutoff (\"before Friday\"). A message can set one, both, or neither, and Synced won't invent a date the message didn't imply.",
    },
    {
      type: "list",
      items: [
        "Priority runs from 1 (urgent) to 4 (no urgency). Synced raises it for explicit urgency like \"ASAP\" or \"by EOD\", a cutoff within about a day, or a direct request from someone senior.",
        "When a deadline is within a week, the Task shows a countdown like \"2 days left\" or \"Deadline today\".",
        "Overdue Tasks group together, with a one-tap option to move them all to today.",
      ],
    },
    { type: "h2", text: "Working through your Tasks list" },
    {
      type: "p",
      text: "Tasks is its own tab on the web and on the [iOS app](/ios). Each row shows the title, the timing, and a From line with the sender's name that opens the original conversation. Files Synced made for that request sit on the Task too, so the deck you need to review is one tap away.",
    },
    {
      type: "features",
      items: [
        { icon: "list", title: "Sort and group", body: "Sort by date, priority, or your own manual order. Group by date, priority, or label." },
        { icon: "clock", title: "Reschedule fast", body: "Move a Task to today, tomorrow, this weekend, or next week, or clear its date." },
        { icon: "draft", title: "Edit the details", body: "Change the title, add notes, set priority and deadline, and add labels." },
        { icon: "check", title: "Mark done", body: "Completed Tasks collapse into their own section so the open list stays short." },
      ],
    },
    {
      type: "p",
      text: "You can also add a Task by hand with New Task, for the things that came up on a call instead of in a message.",
    },
    { type: "h2", text: "Tasks, Decide, and Action Plans side by side" },
    {
      type: "table",
      head: ["", "Who does the work", "Where it shows up", "Example"],
      rows: [
        ["Action Plan", "Synced", "Behind every message", "Search Drive, check the calendar, draft a reply"],
        ["Decide", "Synced, after your approval", "Decide tab", "Send the drafted reply to Hannah"],
        ["Task", "You", "Tasks tab", "Sign the SAFE by Friday"],
      ],
    },
    {
      type: "p",
      text: "If a thread's Tasks are no longer relevant, you can dismiss them from the conversation's menu in Messages instead of deleting them one at a time.",
    },
    { type: "h2", text: "What Synced Tasks isn't" },
    {
      type: "p",
      text: "Tasks is a personal list, not a project manager. There's no assigning to teammates, no boards, and no sync to Asana, Jira, or Linear today (those connectors are listed as coming soon in the app). If your team already lives in a project tool, treat Synced Tasks as the capture step that makes sure a request in Slack or email doesn't vanish before it gets there.",
    },
  ],
  faqs: [
    {
      q: "Can Synced automatically create to-dos from emails?",
      a: "Yes. When a new message in a connected Inbox asks you to do something, Synced adds a Task with the sender, timing, and priority, and links it to the thread. It works the same for Slack, Teams, texts, and the other Inboxes.",
    },
    {
      q: "Does a Task count toward my weekly Action Plan limit?",
      a: "The Task itself doesn't add anything. The message it came from is one Action Plan, whether that plan produced a Task, a draft, or both. See the [Action Plan page](/glossary/action-plan) for the counting rules.",
    },
    {
      q: "Can I sync Synced Tasks to Todoist, Asana, or Reminders?",
      a: "Not today. Tasks live inside Synced. Asana and several other project tools appear as coming soon in the app's connector list.",
    },
    {
      q: "What if Synced makes a Task I don't need?",
      a: "Delete it, or dismiss all of a conversation's open Tasks from that conversation's menu.",
    },
  ],
};
