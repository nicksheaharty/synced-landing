import type { Page } from "../types";

export const googleCalendar: Page = {
  slug: "/integrations/google-calendar",
  cluster: "integration",
  parent: "/integrations",
  title: "Google Calendar AI Scheduling Assistant | Synced",
  h1: "Synced for Google Calendar",
  navLabel: "Google Calendar",
  cardText: "Checks your Google Calendar for real open time and prepares events you approve.",
  description:
    "Synced uses Google Calendar to answer scheduling requests with real open times and prepare invites for your approval. It connects when you connect Gmail.",
  eyebrow: "Integration · Output",
  intro:
    "Most scheduling emails are three messages of \"does Tuesday work?\" Synced reads your Google Calendar and answers with times that are actually free.",
  answer:
    "Synced, the AI inbox assistant, uses Google Calendar to check your availability when a message asks to meet, then drafts a reply with open times. When a time is agreed, Synced prepares the calendar event and invitees for your approval before creating it. Google Calendar access comes with connecting a Gmail or Google Workspace account and is included on the Free plan.",
  primaryIntent: "google calendar ai scheduling assistant",
  related: ["/integrations/gmail", "/integrations/outlook", "/guides/how-to-schedule-meetings-over-email", "/features/scheduling"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "calendar", plans: "free", kind: "output" },
  body: [
    { type: "h2", text: "What Synced does with Google Calendar when someone asks to meet" },
    {
      type: "p",
      text: "A recruiter wants a 45-minute panel interview and gives a three-day window. Doing it by hand means opening your calendar, finding gaps that are long enough, and typing them out without a typo in the dates.",
    },
    {
      type: "message",
      from: "Hannah (recruiter)",
      source: "gmail",
      time: "2:36 PM",
      text: "Would you be up for a 45-minute interview with our hiring panel next week? Tuesday to Thursday works best on our end.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar Tuesday to Thursday and found three open 45-minute slots",
        "Drafted a reply offering all three",
      ],
      caption: "When Hannah picks one, Synced prepares the event with her as an invitee. That waits for your approval too.",
    },
    {
      type: "p",
      text: "Synced reads your calendar freely. It never adds, moves, or deletes an event without you approving it first, and you can change the time, title, or guests before you do.",
    },
    { type: "h2", text: "What you can hand off to Synced with Google Calendar" },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "Offering times", body: "Replies to \"when are you free?\" list real openings from your calendar, whether the ask came by email, Slack, or text." },
        { icon: "check", title: "Booking the agreed time", body: "Once someone picks a slot, Synced drafts the event with the title, time, and invitees for you to approve." },
        { icon: "arrows", title: "Rescheduling", body: "\"Can we push to Friday?\" gets new open times and a prepared change to the existing event, which you approve." },
        { icon: "users", title: "Invitees from your contacts", body: "When you review an event, invitee names autocomplete from your Google contacts and people you've emailed." },
      ],
    },
    { type: "h2", text: "How Google Calendar connects to Synced" },
    {
      type: "p",
      text: "Google Calendar doesn't have a separate connect button. Its permission is part of the same Google screen you approve when you connect Gmail.",
    },
    {
      type: "steps",
      items: [
        { title: "Connect Gmail", body: "Open Settings in the web app or on iOS and connect [Gmail](/integrations/gmail) under Inboxes." },
        { title: "Approve Google's permission screen", body: "Calendar and Contacts access are listed there alongside Gmail. The permissions sheet in Synced also notes that creating or changing calendar events always needs your approval." },
        { title: "Check Calendar in Settings", body: "Settings shows Calendar with the number of linked accounts. Each connected Gmail account adds its calendar." },
      ],
    },
    { type: "h2", text: "Google OAuth scopes Synced uses for Calendar" },
    {
      type: "table",
      head: ["Scope", "What Synced uses it for"],
      rows: [
        ["`calendar`", "Read your availability, and create or modify events you've approved."],
        ["`contacts.readonly`", "Look up invitees from your Google contacts."],
        ["`contacts.other.readonly`", "Look up people you've emailed who aren't saved as contacts, for invitee autocomplete."],
      ],
      caption: "These are requested on the same Google screen as the Gmail scopes. See the [Gmail page](/integrations/gmail) for those.",
    },
    {
      type: "callout",
      title: "Google Workspace data isn't used for model training",
      text: "Synced doesn't use Calendar or Contacts data to train generalized AI or machine-learning models, and follows the Google API Services User Data Policy, including the Limited Use requirements. More on [Security](/security).",
    },
    { type: "h2", text: "Which Synced plan includes Google Calendar" },
    {
      type: "p",
      text: "Google Calendar is included on Free, Pro, and Enterprise. Each incoming message counts as one Action Plan, however many calendar checks Synced makes for it. Free includes 20 a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Do I need to connect Google Calendar separately from Gmail?",
      a: "No. Calendar access is part of the Google permission screen you approve when connecting Gmail. Settings then shows Calendar as linked to that account.",
    },
    {
      q: "Can Synced create or move meetings without asking me?",
      a: "No. Creating or changing a calendar event always waits for your approval in Decide. Checking availability happens automatically.",
    },
    {
      q: "Does Synced work with Outlook Calendar instead?",
      a: "Yes, through the [Outlook](/integrations/outlook) connection, which includes your Outlook calendar. Outlook is a Pro integration.",
    },
    {
      q: "Can Synced see other people's Google Calendars?",
      a: "Synced works from your own calendar. It proposes times based on your availability and leaves the other person to pick one.",
    },
    {
      q: "Does Synced add a Zoom link to the invite?",
      a: "No. Synced doesn't have a Zoom integration. If you use a standing video link, paste it into the reply before you approve.",
    },
  ],
};
