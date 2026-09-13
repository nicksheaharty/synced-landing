import type { Page } from "../types";

export const meetingRequest: Page = {
  slug: "/templates/meeting-request",
  cluster: "template",
  parent: "/templates",
  title: "Meeting Request Email: Templates and Examples | Synced",
  h1: "Meeting request email",
  navLabel: "Meeting request",
  cardText: "Ask for a meeting with a clear reason, a length, and real times: internal, cold, and formal versions.",
  description:
    "Meeting request email templates for colleagues, people you don't know yet, and senior stakeholders. Each one gives a reason, a length, and specific times.",
  eyebrow: "Email template",
  intro: "The easiest meeting request to say yes to is the one that already answers why, how long, and when.",
  answer:
    "A meeting request email states why you want to meet in the first sentence, says how long it will take, and offers two or three specific times with a time zone. Keep it under 120 words. When the person doesn't know you, open with how you're connected and what they get out of the conversation.",
  primaryIntent: "meeting request email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "p", text: "This page is for asking for a meeting. If someone asked you and you're replying with times, use [sharing your availability](/templates/sharing-your-availability). To move a meeting that's already booked, use [reschedule a meeting](/templates/reschedule-meeting)." },
    { type: "h2", text: "Meeting request to a colleague" },
    { type: "p", text: "Internal, low stakes. Say what the meeting is for and what you need them to bring." },
    {
      type: "template",
      label: "Colleague",
      subject: "30 min on [topic] this week?",
      text: "Hi [Name],\n\nCould we get 30 minutes this week to [decide / review / plan] [topic]? I want to [outcome] before [deadline or event].\n\nI'm free [Day] at [time] or [Day] at [time] ([time zone]). If neither works, send me a time and I'll move things around.\n\nIt would help if you could look at [doc link] beforehand.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Meeting request to someone you haven't met" },
    { type: "p", text: "For a cold or warm outreach. Lead with the connection, keep the ask small, and make it easy to say no." },
    {
      type: "template",
      label: "Someone new",
      subject: "[Mutual contact] suggested I reach out",
      text: "Hi [Name],\n\n[Mutual contact] mentioned you [relevant thing they did or know]. I'm [one line on who you are], working on [project].\n\nWould you be open to a 20-minute call to talk about [specific question]? I'm flexible, but [Day] or [Day] afternoon ([time zone]) would work well.\n\nIf now isn't a good time, no problem at all.\n\nBest,\n[Your name]\n[Title, company]",
    },
    { type: "h2", text: "Formal meeting request to a senior stakeholder or client" },
    { type: "p", text: "More structure, same length. Put the purpose and the proposed agenda up front, and copy their assistant if they have one." },
    {
      type: "template",
      label: "Formal",
      subject: "Meeting request: [topic] ahead of [date/milestone]",
      text: "Dear [Name],\n\nI'd like to request a 45-minute meeting to review [topic] before [milestone]. We need your input on [decision] to keep [project] on schedule.\n\nProposed agenda:\n1. [Item]\n2. [Item]\n3. Decision on [item]\n\nWould any of these times suit you? [Date, time], [Date, time], or [Date, time] ([time zone]). I'm happy to work around your calendar.\n\nKind regards,\n[Your name]\n[Title]",
    },
    { type: "h2", text: "When to send a meeting request, and when an email will do" },
    {
      type: "list",
      items: [
        "Ask for a meeting when there's a decision with trade-offs, a sensitive topic, or several people who need to agree.",
        "Don't ask for one when the question has a short answer. Ask the question in the email instead.",
        "For a first meeting with someone senior, ask for less time than you think you need. Twenty minutes is easier to say yes to than an hour.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "\"Let me know when works for you.\" It hands the scheduling work to the other person.",
        "Times without a time zone, especially with anyone outside your office.",
        "A vague subject like \"Quick chat?\" Put the topic in the subject line.",
        "Sending a calendar invite before they've agreed, unless it's a colleague who expects that.",
      ],
    },
    { type: "h2", text: "How Synced drafts a meeting request" },
    {
      type: "p",
      text: "When a message says something like \"we should get time on this,\" [Synced](/) checks your Google Calendar, picks open slots, and drafts the request with the times already written in. The draft goes to Decide, where you edit or approve it before it's sent. More on [scheduling in Synced](/features/scheduling).",
    },
  ],
  faqs: [
    {
      q: "How do you politely ask for a meeting by email?",
      a: "Give the reason in one sentence, say how long you need, and offer two or three specific times with a time zone. Close with an easy out, such as \"if this week is busy, next week works too.\"",
    },
    {
      q: "Should I send a scheduling link or suggest times?",
      a: "Suggesting specific times reads as more personal, particularly with people senior to you or people you haven't met. A booking link is fine as a backup line after the times, or with colleagues who already use them.",
    },
    {
      q: "How long should I wait to follow up on a meeting request?",
      a: "Two to three business days is common for work email. When you follow up, offer new times, since the ones you suggested may have passed. See the [follow-up template](/templates/follow-up-after-no-response).",
    },
  ],
  related: ["/templates/sharing-your-availability", "/templates/reschedule-meeting", "/guides/how-to-schedule-meetings-over-email"],
};
