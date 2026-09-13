import type { Page } from "../types";

export const sharingYourAvailability: Page = {
  slug: "/templates/sharing-your-availability",
  cluster: "template",
  parent: "/templates",
  title: "How to Share Your Availability by Email: Templates | Synced",
  h1: "Sharing your availability",
  navLabel: "Sharing your availability",
  cardText: "Reply to a meeting ask with times that are easy to pick from, including across time zones.",
  description:
    "Email templates for replying with your availability: specific time slots, a version across time zones, and what to send when your calendar is full.",
  eyebrow: "Email template",
  intro: "Someone asked when you're free. The best reply lets them answer with one word.",
  answer:
    "When someone asks to meet, reply with two to four specific time slots across at least two days, include the time zone, and say how long you have. Number the options so they can reply \"2 works.\" A booking link can go underneath as a backup, but specific times are easier to answer quickly.",
  primaryIntent: "how to share availability for a meeting by email",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "p", text: "This page covers replying with times after someone asks to meet. To ask for the meeting yourself, see the [meeting request template](/templates/meeting-request). To move a meeting that's already booked, see [reschedule a meeting](/templates/reschedule-meeting)." },
    { type: "h2", text: "Replying with specific times" },
    { type: "p", text: "The everyday version. Numbered options, one time zone, a clear length." },
    {
      type: "template",
      label: "Specific times",
      subject: "Re: [their subject]",
      text: "Hi [Name],\n\nHappy to meet. Any of these work for [30 minutes]:\n\n1. [Tuesday, May 12], [10:00–10:30 AM]\n2. [Wednesday, May 13], [2:00–2:30 PM]\n3. [Thursday, May 14], [11:00–11:30 AM]\n\nAll times [ET]. Pick one and I'll send an invite. If none of these work, send a couple of times that do.\n\n[Your name]",
    },
    { type: "h2", text: "Sharing availability across time zones" },
    { type: "p", text: "Write both time zones out. It saves them doing the math and catches mistakes around daylight saving changes." },
    {
      type: "template",
      label: "Across time zones",
      subject: "Re: [their subject]",
      text: "Hi [Name],\n\nHere are a few times that should fall in working hours for both of us:\n\n1. [Mon, date]: [9:00 AM PT] / [5:00 PM London]\n2. [Tue, date]: [8:00 AM PT] / [4:00 PM London]\n3. [Thu, date]: [9:30 AM PT] / [5:30 PM London]\n\nLet me know which works, or if early mornings on your side are easier and I'll send later options.\n\n[Your name]",
    },
    { type: "h2", text: "When your calendar is full this week" },
    { type: "p", text: "Be honest about the wait and offer the earliest real option, or hand the choice back with a range." },
    {
      type: "template",
      label: "Limited availability",
      subject: "Re: [their subject]",
      text: "Hi [Name],\n\nThis week is packed, but I'd like to find time. The earliest I have is:\n\n1. [Day, date] at [time]\n2. [Day, date] at [time]\n\n([time zone]). If this can't wait until then, I can do a quick 15 minutes on [day] at [time], or answer by email today if you send your questions.\n\n[Your name]",
    },
    { type: "h2", text: "When to send times, and when to send a link" },
    {
      type: "list",
      items: [
        "Send specific times to external contacts, anyone senior, and people meeting you for the first time.",
        "A booking link is fine with colleagues and people who've asked for one. Add a line so it doesn't feel like a brush-off.",
        "If they've already sent you times, pick one of theirs before offering your own.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "\"I'm pretty open next week.\" It sounds generous and creates three more emails.",
        "Offering times you haven't checked. If they pick one that's gone, you're back to rescheduling.",
        "Times without a time zone, even with people in the same city. Calendars travel.",
        "Ten options. Two to four is easier to choose from.",
      ],
    },
    { type: "h2", text: "How Synced shares your availability" },
    {
      type: "p",
      text: "When a message asks \"when are you free?\", [Synced](/) checks your Google Calendar, picks open slots, and drafts the reply with the times written out. You approve it in Decide before it's sent. See [scheduling](/features/scheduling), or the [guide to scheduling meetings over email](/guides/how-to-schedule-meetings-over-email) for the manual approach.",
    },
  ],
  faqs: [
    {
      q: "How do you write your availability in an email?",
      a: "List two to four specific slots with day, date, start and end time, and time zone, ideally numbered. Then say what happens next, such as \"pick one and I'll send an invite.\"",
    },
    {
      q: "Should I send a scheduling link or specific times?",
      a: "Specific times are more personal and easier to answer for external or senior contacts. A link works with colleagues or as a fallback line under the times.",
    },
    {
      q: "How many time options should I give?",
      a: "Two to four, spread across at least two days. Fewer can miss their schedule entirely, and more makes the choice slower.",
    },
  ],
  related: ["/templates/meeting-request", "/templates/reschedule-meeting", "/templates/decline-meeting-invitation", "/features/scheduling"],
};
