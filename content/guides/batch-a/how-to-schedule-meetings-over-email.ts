import type { Page } from "../../types";

export const scheduleMeetingsOverEmail: Page = {
  slug: "/guides/how-to-schedule-meetings-over-email",
  cluster: "guide",
  parent: "/guides",
  title: "How to Schedule Meetings Over Email (Gmail, Outlook) | Synced",
  h1: "How to schedule meetings over email",
  navLabel: "Schedule meetings over email",
  cardText: "Offer times people can book, poll a group, or send three specific slots. Gmail and Outlook steps for each.",
  description:
    "How to schedule meetings over email in Gmail and Outlook: propose specific times, send bookable slots, run a scheduling poll, or reply with an invite.",
  eyebrow: "Guide",
  intro:
    "The average scheduling thread is four emails of \"does Tuesday work?\" that could have been one. The fix is to send options people can accept in a single reply or a single click.",
  answer:
    "To schedule a meeting over email in one round, send two or three specific times with the time zone, or use a built-in tool: Gmail's Set up a time to meet inserts slots the other person can book, and Outlook's Scheduling Poll lets a group vote. For a meeting that's already agreed, use Outlook's Reply with Meeting or create the Calendar event directly so the invite replaces the thread.",
  primaryIntent: "how to schedule meetings over email",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Pick the method by how many people are involved" },
    {
      type: "table",
      head: ["Situation", "Best method", "Why"],
      rows: [
        ["One person, outside your company", "Offer bookable times, or three written slots", "They can pick without seeing your calendar"],
        ["Three or more people", "Scheduling poll", "Votes replace a reply-all chain"],
        ["Inside your company, shared calendars", "Send the invite directly", "You can already see who's free"],
        ["Time already agreed in the thread", "Reply with a meeting invite", "Keeps the context attached to the event"],
      ],
    },
    { type: "h2", text: "Method 1: Write out three specific times" },
    {
      type: "p",
      text: "This works in every email client and doesn't ask the other person to click anything. The details are what make it one round instead of three.",
    },
    {
      type: "list",
      items: [
        "Give two or three options across different days, not a range like \"any time Thursday afternoon.\"",
        "Include the time zone on every slot, and theirs too if you know it: \"Tue Oct 7, 2:00 PM ET (11:00 AM PT).\"",
        "State the length and the format: 30 minutes, video call, or phone.",
        "Say what happens if none work: \"If none of these fit, send me two times that do and I'll send the invite.\"",
      ],
    },
    {
      type: "p",
      text: "The [sharing your availability template](/templates/sharing-your-availability) has wording you can copy. The one real downside is that your calendar can change between sending and their reply, so hold the slots or check again before you confirm.",
    },
    { type: "h2", text: "Method 2: Let them book a time from Gmail" },
    {
      type: "p",
      text: "Gmail can insert slots straight from Google Calendar. Which version you get depends on your account: personal Gmail and Workspace Business Starter get Set up a time to meet, while other eligible Workspace and Google AI plans get Help me schedule with Gemini.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Start a reply or new email",
          body: "Open Gmail on your computer and reply to the thread or click Compose.",
        },
        {
          title: "Open the scheduling option",
          body: "At the bottom of the message, click Set up a time to meet and choose Propose times you're free. If you don't see it, check More options. On Gemini-enabled plans, click Help me schedule instead.",
        },
        {
          title: "Choose the slots",
          body: "Pick a duration on the right and select several times in the calendar grid, then click Next. Add a title and details. Help me schedule proposes 4 slots by default, which you can change with Edit in Calendar.",
        },
        {
          title: "Add to email and send",
          body: "Click Add to email, then Send. When the recipient picks a slot, Gmail creates the event on your primary calendar and sends a confirmation.",
        },
      ],
    },
    {
      type: "p",
      text: "Two limits worth knowing. Propose times you're free is built for 1:1 meetings: with several recipients, only the first person to book joins. And the slots stay bookable for 30 days. For a standing link you reuse, create an appointment schedule in Google Calendar and insert the booking page instead.",
    },
    { type: "h2", text: "Method 3: Run a Scheduling Poll in Outlook" },
    {
      type: "p",
      text: "Scheduling Poll is available in Outlook for Microsoft 365 and Microsoft 365 Apps for business. It checks attendees' calendars where it can, suggests times, and gives outside guests a voting link.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Start the poll from the email",
          body: "In Outlook for Windows, select the email and click Reply with Scheduling Poll on the Home tab. In Outlook on the web, choose Scheduling poll from the Message tab while composing.",
        },
        {
          title: "Set time zone and duration",
          body: "Choose the time zone and meeting length. Outlook shows availability for each suggested time, colored by whether attendees are free, busy, out of office, or unknown.",
        },
        {
          title: "Select times and settings",
          body: "Pick at least one option and click Next. You can add a location, include an online meeting, schedule automatically when everyone agrees, and lock the poll so attendees can't suggest new times.",
        },
        {
          title: "Send",
          body: "Outlook inserts the poll and a voting link into the email. Attendees get tentative holds labeled HOLD on their calendars until the meeting is booked.",
        },
      ],
    },
    { type: "h2", text: "Method 4: Reply with a meeting invite" },
    {
      type: "p",
      text: "Once the time is settled, stop emailing. In Outlook, select the message and choose Meeting (new Outlook) or Reply with Meeting (classic Outlook) in the Respond group on the Home tab. Everyone on the To line becomes a required attendee and everyone on Cc becomes optional, and the original email is copied into the invite. This needs a work Exchange account. In Gmail, create the event in Google Calendar and add the thread's participants as guests.",
    },
    { type: "h2", text: "How Synced handles a scheduling request" },
    {
      type: "p",
      text: "[Synced](/) reads scheduling requests as they arrive, checks your connected Google Calendar, and drafts a reply with real open slots. It can also add the event to Google Calendar once a time is agreed. Every reply it drafts waits for your approval before it goes out. More on [scheduling in Synced](/features/scheduling).",
    },
    {
      type: "message",
      from: "Leah (candidate)",
      source: "gmail",
      time: "8:47 AM",
      text: "Thanks for reaching out. I'm free most of next week for a first conversation, what works on your end?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: ["Found three 30-minute openings next Tuesday through Thursday", "Drafted a reply offering the times in her time zone"],
      caption: "An illustration. The reply waits in Decide for your approval.",
    },
    {
      type: "p",
      text: "If most of your meetings are with people who'll happily use a booking page, Gmail's built-in slots may be all you need. Synced is more useful when requests arrive in different places, like email one day and Slack the next.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Offer times to meet in a Gmail message", url: "https://support.google.com/mail/answer/16864784", checked: "2026-09-13" },
        { label: "Gmail Help: Suggest times to meet with Gemini in Gmail", url: "https://support.google.com/mail/answer/16865189", checked: "2026-09-13" },
        { label: "Microsoft Support: Access Scheduling Poll", url: "https://support.microsoft.com/en-us/outlook/access-scheduling-poll", checked: "2026-09-13" },
        { label: "Microsoft Support: Create a Scheduling Poll in Outlook for Windows", url: "https://support.microsoft.com/en-us/outlook/create-a-scheduling-poll-in-outlook-for-windows", checked: "2026-09-13" },
        { label: "Microsoft Support: Respond to an email message with a meeting request", url: "https://support.microsoft.com/en-us/outlook/respond-to-an-email-message-with-a-meeting-request-in-outlook", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I ask for a meeting by email politely?",
      a: "State the purpose in one sentence, say how long it will take, and offer two or three specific times with a time zone. The [meeting request template](/templates/meeting-request) has examples.",
    },
    {
      q: "Can someone book a time with me from a Gmail message?",
      a: "Yes. Personal Gmail and Workspace Business Starter accounts can use Set up a time to meet, then Propose times you're free. The recipient picks a slot and Gmail creates the event on your primary calendar.",
    },
    {
      q: "Can people outside my company vote in an Outlook Scheduling Poll?",
      a: "Yes. The poll includes a link to a voting page that external attendees can open. You can require attendees to verify their identity in the poll settings.",
    },
    {
      q: "How many time options should I offer in a scheduling email?",
      a: "Two or three. One gives no flexibility, and more than four makes people scan a list and often reply with a counter-proposal anyway.",
    },
  ],
  related: ["/guides/how-to-use-ai-to-draft-email-replies", "/templates/meeting-request", "/features/scheduling"],
};
