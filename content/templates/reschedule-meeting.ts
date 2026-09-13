import type { Page } from "../types";

export const rescheduleMeeting: Page = {
  slug: "/templates/reschedule-meeting",
  cluster: "template",
  parent: "/templates",
  title: "Reschedule Meeting Email: Templates | Synced",
  h1: "Reschedule a meeting email",
  navLabel: "Reschedule a meeting",
  cardText: "Move a booked meeting without making it awkward: standard, last-minute, and client versions.",
  description:
    "Email templates to reschedule a meeting: a standard version with new times, a last-minute same-day version, and a more formal note for clients.",
  eyebrow: "Email template",
  intro: "Moving a meeting is normal. Making the other person do the work of finding a new time is the part people remember.",
  answer:
    "A reschedule meeting email should go out as soon as you know, ideally a day or more before the meeting. Apologize once, give a short reason if it helps, and offer two or three new times so the other person can pick one instead of starting over. Then update the calendar invite so the old slot doesn't linger.",
  primaryIntent: "reschedule meeting email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "p", text: "Use this for a meeting that's already on the calendar. If you're asking for a new meeting, see the [meeting request template](/templates/meeting-request). If you're not going at all, see [declining a meeting invitation](/templates/decline-meeting-invitation)." },
    { type: "h2", text: "Standard reschedule with new times" },
    { type: "p", text: "Send this a day or more ahead. Reply in the thread where the meeting was set up, if there is one." },
    {
      type: "template",
      label: "Standard",
      subject: "Moving our [meeting name] on [day]",
      text: "Hi [Name],\n\nSomething came up and I need to move our [meeting name] on [day]. Sorry for the shuffle.\n\nWould any of these work instead?\n- [Day, date] at [time]\n- [Day, date] at [time]\n- [Day, date] at [time]\n([time zone])\n\nOnce you pick one, I'll update the invite.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Last-minute reschedule on the same day" },
    { type: "p", text: "Shorter, and more apologetic because it costs them something. If the meeting is within the hour, a text or chat message usually reaches them faster than email." },
    {
      type: "template",
      label: "Last-minute",
      subject: "Need to move today's [time] call",
      text: "Hi [Name],\n\nI'm sorry for the late notice, but I can't make our [time] today. [One-line reason, e.g. a client issue needs me this afternoon.]\n\nCould we do [tomorrow at time] or [day at time] instead? I'll work around whatever suits you.\n\n[Your name]",
    },
    { type: "h2", text: "Formal reschedule for a client or senior stakeholder" },
    { type: "p", text: "Acknowledge the inconvenience, keep the agenda intact, and give them control of the new time." },
    {
      type: "template",
      label: "Client",
      subject: "Rescheduling our [date] meeting on [topic]",
      text: "Dear [Name],\n\nI need to ask to reschedule our meeting on [date] about [topic]. I apologize for the change.\n\nI can offer [date, time], [date, time], or [date, time] ([time zone]). If none of these suit you, please send a few times that do and I'll make one work.\n\nWe'll cover the same agenda, and I'll send [materials] ahead of the new date.\n\nKind regards,\n[Your name]",
    },
    { type: "h2", text: "When to reschedule by email, and when to just update the invite" },
    {
      type: "list",
      items: [
        "Write an email for external meetings, meetings with more than two people, and anything you've already moved once.",
        "For a routine internal one-on-one, proposing a new time in the calendar with a one-line note is usually enough.",
        "If you've moved the same meeting twice, say so plainly and ask whether it still makes sense to meet.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "\"Can we push this?\" with no new time. Now they have to open their calendar and write back.",
        "A long explanation. One line of reason is plenty, and none is fine for internal meetings.",
        "Leaving the old invite in place. Decline or update it so their calendar is accurate.",
        "Apologizing three times. Once, then move on to the new times.",
      ],
    },
    { type: "h2", text: "How Synced drafts a reschedule" },
    {
      type: "p",
      text: "When a conflict shows up, or someone emails asking to move a meeting, [Synced](/) checks Google Calendar for open slots and drafts the reschedule email with new times filled in. You review it in Decide and approve it before anything is sent. See [scheduling](/features/scheduling) for how the times are picked.",
    },
  ],
  faqs: [
    {
      q: "How do you politely reschedule a meeting by email?",
      a: "Say you need to move it, apologize once, and offer two or three specific new times with a time zone. Then update the calendar invite once they choose.",
    },
    {
      q: "Is it rude to reschedule a meeting?",
      a: "Not when you give reasonable notice and offer alternatives. It starts to read as rude when it's last-minute, repeated, or leaves the other person to find a new slot.",
    },
    {
      q: "Should I send a new invite or update the existing one?",
      a: "Update the existing invite when you're the organizer. The attendees keep the same event, notes, and video link, and there's no stale entry left on anyone's calendar.",
    },
  ],
  related: ["/templates/meeting-request", "/templates/sharing-your-availability", "/templates/decline-meeting-invitation", "/features/scheduling"],
};
