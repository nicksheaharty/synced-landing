import type { Page } from "../types";

export const recruiters: Page = {
  slug: "/for/recruiters",
  cluster: "use-case",
  parent: "/for",
  title: "AI Email Assistant for Recruiters: Interview Scheduling | Synced",
  h1: "Synced for recruiters",
  navLabel: "Recruiters",
  cardText: "Candidate scheduling, reschedules, and hiring manager nudges drafted for approval. Not an ATS.",
  description:
    "Synced drafts candidate scheduling replies, handles interview reschedules, and chases hiring manager feedback across email, Slack, and Teams. Every reply needs approval.",
  eyebrow: "Use case",
  icon: "users",
  intro:
    "Recruiting is scheduling with feelings attached. Candidates need times, then new times, hiring managers owe feedback, and every thread needs a warm reply within the day. Synced drafts those so you can spend your calls on the people.",
  answer:
    "Synced, the AI inbox assistant, helps recruiters with candidate scheduling, interview reschedules, and follow-ups across Gmail, Outlook, Slack, and Microsoft Teams. It checks Google Calendar for open interview slots, drafts replies to candidates, and tracks threads waiting on a candidate or a hiring manager. Every reply waits for the recruiter's approval, and Synced does not replace an applicant tracking system.",
  primaryIntent: "ai email assistant for recruiters",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/sales", "/for/executive-assistants", "/templates/reschedule-meeting", "/features/scheduling"],
  body: [
    { type: "h2", text: "What fills a recruiter's inbox" },
    {
      type: "p",
      text: "Count a recruiter's messages for a day and most of them fall into a few buckets: a candidate offering availability, a candidate who needs to move, a hiring manager who hasn't sent feedback, and a coordinator asking which panel is confirmed. Each takes two minutes. Forty of them take the afternoon.",
    },
    { type: "h2", text: "Candidate scheduling, reschedules, and feedback chases Synced drafts" },
    { type: "h3", text: "A candidate replies with availability" },
    {
      type: "message",
      from: "Sam (candidate)",
      source: "gmail",
      time: "7:50 PM",
      text: "Thanks for moving me forward. I'm free Tuesday after 1 or anytime Wednesday for the technical interview.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar against Sam's windows and found Tuesday 2:00 and Wednesday 10:30 open",
        "Drafted a reply confirming Tuesday at 2:00, with Wednesday as the backup",
      ],
      caption: "Illustration. Once you approve and the time is agreed, Synced can put it on Google Calendar.",
    },
    { type: "h3", text: "A candidate needs to reschedule" },
    {
      type: "message",
      from: "Nadia (candidate)",
      source: "outlook",
      time: "8:03 AM",
      text: "I'm so sorry, a family thing came up and I can't make today's 3 PM. Would later this week work?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar for openings Thursday and Friday",
        "Drafted a kind reply offering two new times",
        "Prepared the calendar event update for whichever time Nadia picks",
      ],
      caption: "Illustration. For wording ideas, see the reschedule template.",
    },
    { type: "h3", text: "A hiring manager owes feedback" },
    {
      type: "message",
      from: "Synced",
      source: "slack",
      time: "Thursday 9:15 AM",
      text: "Chris hasn't sent feedback on Monday's onsite with Sam. Sam asked for an update yesterday.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Drafted a Slack DM to Chris asking for a hire or no-hire by end of day",
        "Drafted a holding reply to Sam saying you'll have news by Friday",
      ],
      caption: "Illustration. Nothing is sent to the candidate or the manager until you approve.",
    },
    {
      type: "p",
      text: "Synced won't decide the outcome or write a rejection on its own initiative. It drafts what the thread calls for, and you decide what a candidate hears.",
    },
    { type: "h2", text: "Which integrations matter for recruiting" },
    {
      type: "list",
      items: [
        "[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook): candidate outreach replies, scheduling, and offers.",
        "[Google Calendar](/integrations/google-calendar): interview slots and reschedules. Outlook calendars work too, through the [Outlook](/integrations/outlook) connection.",
        "[Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams): hiring manager feedback and interview panel coordination.",
        "[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive): job descriptions, interview guides, and benefits one-pagers to attach.",
        "[SMS](/integrations/sms) or [WhatsApp Business](/integrations/whatsapp-business): for high-volume or hourly hiring where candidates text back instead of emailing.",
      ],
    },
    { type: "h2", text: "Where Synced isn't the right tool for recruiters" },
    {
      type: "list",
      items: [
        "It isn't an ATS. Synced doesn't track candidates through stages, store scorecards, post jobs, or report on time-to-hire, and it doesn't connect to applicant tracking systems today.",
        "It doesn't do bulk outreach. Sourcing campaigns to hundreds of candidates need a sourcing or sequencing tool. Synced drafts one reply per message, each approved by you.",
        "It doesn't run panel scheduling across interviewers' calendars. It checks the Google Calendar connected to your account, not every interviewer's.",
      ],
    },
    {
      type: "p",
      text: "Use your ATS as the record of who's where. Use Synced for the replies that move candidates between stages.",
    },
  ],
  faqs: [
    {
      q: "Does Synced integrate with Greenhouse, Lever, or other ATS tools?",
      a: "No. Synced has no live ATS integrations. It works on the email, Slack, Teams, and messaging threads where candidate and hiring manager conversations happen.",
    },
    {
      q: "Can Synced schedule interviews automatically?",
      a: "Synced proposes open times from your connected Google Calendar and drafts the reply. You approve the reply before it goes out, and once a time is agreed it can add or update the event on Google Calendar.",
    },
    {
      q: "Can candidates text me and have Synced draft the reply?",
      a: "Yes, if candidates text a Twilio number or message a WhatsApp Business account connected to Synced. Texts to a personal cell number aren't supported.",
    },
  ],
};
