import type { Page } from "../types";

export const calendarCoordination: Page = {
  slug: "/glossary/calendar-coordination",
  cluster: "glossary",
  parent: "/glossary",
  term: "Calendar coordination",
  title: "What Is Calendar Coordination? | Synced",
  h1: "Calendar coordination",
  navLabel: "Calendar coordination",
  cardText: "The back-and-forth of finding a meeting time that works for everyone.",
  description:
    "Calendar coordination is the work of finding a meeting time that suits everyone involved: checking availability, proposing times, and sending the invite.",
  eyebrow: "Glossary",
  intro: "Six emails to schedule a 30-minute call. Calendar coordination is the name for those six emails.",
  answer:
    "Calendar coordination is the process of arranging a meeting across two or more people's schedules: checking availability, proposing times, handling counter-proposals and time zones, confirming a slot, and sending the calendar invite. Calendar coordination is done by hand over email, with booking links, with shared free/busy calendars, or by an assistant, human or AI.",
  primaryIntent: "calendar coordination meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "The steps in calendar coordination" },
    {
      type: "steps",
      items: [
        { title: "Check availability", body: "Look at your own calendar, and the other person's if you can see their free/busy status." },
        { title: "Propose times", body: "Offer two or three specific slots, with the time zone written out." },
        { title: "Resolve the reply", body: "They pick one, suggest another, or add a third person who has their own constraints." },
        { title: "Confirm and invite", body: "Send the calendar invite with the meeting link, agenda, and the right attendees." },
      ],
    },
    { type: "h2", text: "Common calendar coordination methods" },
    {
      type: "p",
      text: "**Email back-and-forth** works for anyone but takes the most messages. **Booking links** let the other person pick from your open slots, which is fast but pushes the work onto them, and some people find it abrupt for senior or external contacts. **Shared calendars** inside one company let you see free/busy directly, but not across organizations. **Assistants** read the request, check the calendar, and propose times in a normal reply.",
    },
    { type: "h2", text: "Calendar coordination vs. scheduling software" },
    {
      type: "p",
      text: "Scheduling software is one tool for coordination, usually a booking page. Coordination is the whole task, including the parts a booking page doesn't cover: the colleague who has to be included, the client in another time zone, the meeting that needs moving twice.",
    },
    {
      type: "p",
      text: "Synced handles the email version of this. When a message asks to meet, Synced checks your connected Google Calendar, picks open slots, and drafts a reply proposing them for your approval. The manual approach is in [how to schedule meetings over email](/guides/how-to-schedule-meetings-over-email).",
    },
  ],
  faqs: [
    {
      q: "How many times should you offer when scheduling a meeting over email?",
      a: "Two or three specific slots across different days is enough for most meetings. Include the time zone, and hold the times loosely on your calendar until the other person replies.",
    },
  ],
  related: ["/glossary/output-integration", "/glossary/scheduled-send", "/guides/how-to-schedule-meetings-over-email"],
};
