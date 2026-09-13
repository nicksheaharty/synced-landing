import type { Page } from "../types";

export const scheduling: Page = {
  slug: "/features/scheduling",
  cluster: "feature",
  parent: "/features",
  title: "AI Meeting Scheduling From Email and Slack | Synced",
  h1: "Meeting scheduling from your messages",
  navLabel: "Scheduling",
  cardText: "Open times from your calendar, an editable invite, and a reply with the final time in it.",
  description:
    "AI meeting scheduling in Synced: it reads a request in email or Slack, checks your calendar, and drafts the invite and reply for you to confirm.",
  eyebrow: "Feature",
  intro:
    "\"Do you have 30 minutes next week?\" costs about four messages when done by hand. Synced checks the calendar and gets the invite and the reply ready in one pass.",
  answer:
    "Synced, the AI inbox assistant, handles meeting requests that arrive in email, Slack, Teams, or other connected Inboxes. It checks your connected calendar for conflicts and open time, then prepares a calendar event with the title, time, time zone, attendees, and an optional Google Meet link. You review and edit the event in Decide before it's created, and the reply confirming the time is drafted only after that, so it always matches the final event.",
  primaryIntent: "ai meeting scheduling from email",
  related: ["/integrations/google-calendar", "/features/decide", "/glossary/calendar-coordination", "/guides/how-to-schedule-meetings-over-email"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "calendar",
  body: [
    { type: "h2", text: "What Synced does with a meeting request" },
    {
      type: "p",
      text: "Scheduling in Synced starts from the message, not a booking link. When someone asks to meet, move a meeting, or add people to one, Synced reads the request, looks at your calendar, and splits the work into an event to confirm and a reply to send.",
    },
    {
      type: "message",
      from: "Aisha (recruiter)",
      source: "gmail",
      time: "3:08 PM",
      text: "The hiring manager would like a 45-minute follow-up with you. Are you free Wednesday or Thursday afternoon? Happy to send a video link.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Wednesday and Thursday afternoon: Wednesday is booked after 1, Thursday 2:00 to 2:45 PM is open",
        "Prepared a 45-minute event for Thursday 2:00 PM with Aisha invited and a Google Meet link",
        "Drafted a reply confirming Thursday, held until you approve the event",
      ],
      caption: "An illustration. You edit or approve the event first. The reply is written against whatever you confirm.",
    },
    { type: "h2", text: "Reviewing the invite before it's created" },
    {
      type: "p",
      text: "The event card in [Decide](/features/decide) opens as a short summary, like the Calendar app shows. Tap it and every field is editable:",
    },
    {
      type: "list",
      items: [
        "Title, date, start and end time, all-day, and time zone.",
        "Attendees, with suggestions from your Google contacts as you type an email.",
        "Location, description, and a reminder before the event.",
        "Repeat rules for a recurring meeting, and a one-tap Add Google Meet.",
        "Which calendar it goes on, if you've connected more than one account.",
      ],
    },
    {
      type: "p",
      text: "Approve and Synced creates the event (or updates the existing one) with your edits. If something's wrong in a way that's faster to say than fix, Reprompt works here too: \"make it 30 minutes\" or \"invite Chris as well.\"",
    },
    { type: "h2", text: "Moving and changing existing meetings" },
    {
      type: "p",
      text: "Reschedules follow the same path. A message like \"can we push Friday's sync to next week?\" becomes an updated-event card showing the change, and then a reply. Synced won't tell the other person a new time before the calendar change is approved, so you don't end up with an email that says Tuesday and a calendar that still says Friday.",
    },
    {
      type: "p",
      text: "Invitations that arrive by email show up in the conversation as an invite card with Accept, Maybe, and Decline. Your answer is sent back to Google Calendar or Outlook.",
    },
    { type: "h2", text: "Which calendars Synced scheduling works with" },
    {
      type: "p",
      text: "Synced reads availability from, and creates events on, [Google Calendar](/integrations/google-calendar), which is included on the Free plan. Connecting an Outlook account also lets Synced work with that account's calendar. Google's `calendar` permission covers reading availability and creating or modifying events; `contacts.readonly` is what powers attendee suggestions.",
    },
    { type: "h2", text: "Where Synced scheduling stops" },
    {
      type: "list",
      items: [
        "No booking pages. Synced doesn't give you a public link for people to self-schedule; it works from the messages you receive.",
        "No Zoom links. Zoom has no connector; the video link Synced can add is Google Meet.",
        "No calendar changes without approval. Synced never creates or modifies a meeting with other people on it until you confirm the event.",
        "It can only see the calendars you've connected. A personal calendar that isn't linked will look free.",
      ],
    },
    {
      type: "p",
      text: "Scheduling a message to send later is a different feature. That's covered under [drafting](/features/drafting).",
    },
  ],
  faqs: [
    {
      q: "Can AI schedule meetings from my emails automatically?",
      a: "Synced reads meeting requests in your email and other Inboxes, finds open time on your calendar, and prepares the event and the reply. You approve the event before it's created and the reply before it's sent.",
    },
    {
      q: "Does Synced send a scheduling link like Calendly?",
      a: "No. Synced proposes specific times from your calendar in a normal reply, so the other person doesn't have to click through a booking page. If you rely on public booking pages, keep your scheduling tool for that.",
    },
    {
      q: "Can Synced add a Zoom link to a meeting?",
      a: "No. Synced doesn't have a Zoom connector. It can add a Google Meet link to events it creates.",
    },
    {
      q: "Does Synced work with Outlook calendar?",
      a: "Synced works with the calendar on a connected Outlook account as well as Google Calendar. See the [Outlook integration page](/integrations/outlook) for what's included.",
    },
  ],
};
