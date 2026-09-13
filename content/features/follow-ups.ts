import type { Page } from "../types";

export const followUps: Page = {
  slug: "/features/follow-ups",
  cluster: "feature",
  parent: "/features",
  title: "Automated Email Follow-ups You Approve First | Synced",
  h1: "Follow-ups",
  navLabel: "Follow-ups",
  cardText: "Replies merged into the work they belong to, drafted nudges, scheduled sends, and reminders.",
  description:
    "Synced handles email follow-ups: replies merge into the open request, nudges are drafted for your approval, and scheduled sends and snoozes bring threads back.",
  eyebrow: "Feature",
  intro:
    "A follow-up is two jobs: keeping track of what's still open, and writing the message that moves it along. Synced helps with both and leaves the send button to you.",
  answer:
    "Synced, the AI inbox assistant, keeps follow-ups attached to the work they belong to. When someone replies to a thread where Synced is still waiting on something, the new message is added to that open request instead of starting over. You can ask Synced to draft a follow-up in plain words, schedule it to send later, snooze a conversation until you need it, and track what you owe others in Tasks. Every follow-up Synced drafts waits for your approval before it's sent.",
  primaryIntent: "automated email follow ups",
  related: ["/guides/how-to-automate-email-follow-ups", "/templates/follow-up-after-no-response", "/features/tasks", "/glossary/follow-up-tracking"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "clock",
  body: [
    { type: "h2", text: "When a reply lands on something already in progress" },
    {
      type: "p",
      text: "Most follow-ups aren't new conversations. They're \"still good for Thursday?\" or \"also, can you add Maya?\" on a thread Synced is already working. Synced checks for an open request on the thread first. If it finds one, the new message is merged into it, so the plan picks up where it left off with the extra detail instead of producing a second, conflicting draft.",
    },
    {
      type: "message",
      from: "Leo (partner)",
      source: "gmail",
      time: "8:12 AM",
      text: "Actually, can we do the kickoff at 11 instead of 10? And add Maya from our side.",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Matched this to the kickoff invite still waiting in Decide",
        "Updated the draft event to 11:00 AM and added Maya",
        "Rewrote the confirmation reply to match",
      ],
      caption: "An illustration. The new details go into the plan that was already waiting, instead of starting a second one.",
    },
    {
      type: "p",
      text: "Synced also reads only the newest reply for new work. Requests sitting in the quoted history further down an email don't come back as fresh to-dos every time someone hits reply.",
    },
    { type: "h2", text: "Drafting a follow-up nudge in one line" },
    {
      type: "p",
      text: "When a thread has gone quiet and you want to chase it, tell Synced what you want in plain words and @mention the person: \"Draft a follow-up to Priya asking for a decision on the vendor contract by Friday.\" Synced pulls the context from the thread, writes a short nudge in the same thread, and puts it in [Decide](/features/decide). You can type the request or dictate it.",
    },
    {
      type: "p",
      text: "For wording you'd rather write yourself, the [follow-up email template](/templates/follow-up-after-no-response) has a first nudge, a firmer second one, and a close-the-loop version.",
    },
    { type: "h2", text: "Scheduling the follow-up for later" },
    {
      type: "p",
      text: "Some follow-ups shouldn't go out yet. From the approval card, schedule the send for in 1 hour, this evening, tomorrow at 9 AM, Monday at 9 AM, or any date and time. Scheduled messages stay under the Scheduled filter in Messages, where you can open one to edit it or unschedule it if the other person answers first.",
    },
    { type: "h2", text: "Snooze and Tasks for the follow-ups you owe" },
    {
      type: "features",
      items: [
        { icon: "bell", title: "Snooze a conversation", body: "Hide a thread until later today, tomorrow, this weekend, or next week. It returns to the list when the snooze ends." },
        { icon: "tasks", title: "Tasks with deadlines", body: "When a message asks you to do something, it becomes a [Task](/features/tasks) with a deadline countdown and an Overdue group." },
        { icon: "list", title: "Action Needed filter", body: "Shows only the conversations where Synced is working or waiting on your answer." },
        { icon: "eye", title: "Star what matters", body: "Star threads you want to keep an eye on and find them under the Starred filter." },
      ],
    },
    { type: "h2", text: "What Synced won't do with follow-ups" },
    {
      type: "p",
      text: "Synced doesn't run drip sequences or send a string of automatic reminders on a timer. It won't send any follow-up it drafted without your approval. One thing to watch: a follow-up you've scheduled isn't cancelled automatically when the other person replies first, so glance at the Scheduled filter when a chased thread comes back to life. If your job is high-volume outbound with multi-step sequences, a dedicated sales engagement tool is a better fit, and Synced can handle the replies that come back.",
    },
    {
      type: "p",
      text: "For the manual options in Gmail and Outlook (Nudges, snooze, flags, scheduled send) and how they compare, see the guide to [automating email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
  ],
  faqs: [
    {
      q: "Can Synced send follow-up emails automatically?",
      a: "Synced drafts follow-ups, but it doesn't send them without your approval. Once approved, you can send right away or schedule the follow-up for a later time.",
    },
    {
      q: "What happens if they reply before my scheduled follow-up goes out?",
      a: "The reply shows up in the conversation, but the scheduled message isn't cancelled automatically. It stays under the Scheduled filter until its send time, and you can open it there to edit or unschedule it.",
    },
    {
      q: "Does Synced work for follow-ups in Slack and Teams, not just email?",
      a: "Yes. Replies in any connected Inbox are matched to the open request on that conversation, and follow-up drafts go back through the same app.",
    },
  ],
};
