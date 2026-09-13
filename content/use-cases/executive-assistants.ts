import type { Page } from "../types";

export const executiveAssistants: Page = {
  slug: "/for/executive-assistants",
  cluster: "use-case",
  parent: "/for",
  title: "AI Inbox Assistant for Executive Assistants | Synced",
  h1: "Synced for executive assistants",
  navLabel: "Executive assistants",
  cardText: "Scheduling requests, document asks, and follow-ups drafted for you, with an honest note on delegated access.",
  description:
    "How executive assistants can use Synced to draft scheduling replies, find documents, and track follow-ups, and what it doesn't do yet for delegated inbox access.",
  eyebrow: "Use case",
  icon: "briefcase",
  intro:
    "Half your day is the same four requests in different wording: can we meet, can you send, can you move, did they get back to us. Synced drafts those so you can spend your judgment on the ones that need it. Read the section on delegated access before you sign up.",
  answer:
    "Synced, the AI inbox assistant, drafts scheduling replies, finds files in Google Drive or OneDrive, and tracks threads waiting on a response, with every draft held for approval. Synced connects accounts per user: each person signs in with their own phone number and connects Inboxes through the provider's own permission screen. It does not currently advertise a delegated or shared-access mode for an assistant working inside an executive's account, so executive assistants should confirm fit with the Synced team first.",
  primaryIntent: "ai inbox assistant for executive assistants",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/founders", "/for/consultants", "/guides/how-to-delegate-email", "/glossary/email-delegation"],
  body: [
    { type: "h2", text: "How Synced connects accounts, and what that means for an EA" },
    {
      type: "p",
      text: "Start here, because it decides whether Synced fits your setup. A Synced account belongs to one person. That person signs in with their phone number and a 6-digit code, then connects Gmail, Outlook, Slack, or another Inbox by approving that provider's permission screen. Synced then acts on the accounts connected to that login.",
    },
    {
      type: "p",
      text: "Synced doesn't advertise a delegate mode today: no \"assistant seat\" that works inside an executive's mailbox under the assistant's own login, no shared Decide queue between an executive and an EA, and no per-person permissions on one account. If your work depends on Gmail delegation or Outlook delegate access, that part of your workflow isn't covered yet. Enterprise lists admin controls, so ask sales what's on the way through the Contact Sales form on [pricing](/pricing).",
    },
    {
      type: "callout",
      title: "What does work today",
      text: "Synced handles the messages that land in the accounts connected to your own login. For many EAs that's a lot: the scheduling threads you're cc'd on, the Slack or Teams DMs where your executive asks for things, and requests sent straight to you from the executive's team and outside contacts.",
    },
    { type: "h2", text: "Scheduling, document, and follow-up requests Synced drafts for an EA" },
    { type: "h3", text: "Someone asks for time with your executive" },
    {
      type: "message",
      from: "Tom (chief of staff, partner company)",
      source: "outlook",
      time: "9:12 AM",
      text: "Looping in Maya's assistant. Could we get 45 minutes with Maya the week of the 22nd? In person if she's in Chicago, otherwise video.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked the connected Google Calendar for 45-minute openings the week of the 22nd",
        "Drafted a reply offering three times and asking which format they prefer",
      ],
      caption: "Illustration. Synced reads availability from the Google Calendar connected to your Synced account.",
    },
    {
      type: "p",
      text: "The calendar Synced checks is the one on the Google or Outlook account you connect. If you manage your executive's schedule from a separate calendar, the proposed times will only be as accurate as what that connected calendar shows.",
    },
    { type: "h3", text: "Your executive asks for a document in Slack" },
    {
      type: "message",
      from: "Maya (your executive)",
      source: "slack",
      time: "6:48 AM",
      text: "Can you send me the board pre-read from last quarter and draft a note to Daniel pushing our 1:1 to Thursday?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found last quarter's board pre-read in Google Drive",
        "Drafted a Slack reply to Maya with the file",
        "Drafted a short email to Daniel proposing Thursday",
      ],
      file: "Board_PreRead_Q2.pdf",
      caption: "Illustration. Two requests in one message, handled as one Action Plan.",
    },
    { type: "h3", text: "A thread goes quiet" },
    {
      type: "message",
      from: "You",
      source: "gmail",
      time: "Monday 8:45 AM",
      text: "@Synced follow up with Irene on the security questionnaire, we sent the NDA last Monday",
      stepsLabel: "1 Task Ready for Approval",
      steps: ["Drafted a short follow-up asking for the security questionnaire by Wednesday"],
      caption: "Illustration. The Sent filter shows conversations still waiting on the other side; ask Synced to chase any of them.",
    },
    {
      type: "p",
      text: "That's one less spreadsheet of who owes you what. More in the guide on [automating email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
    { type: "h2", text: "Which integrations matter for an executive assistant" },
    {
      type: "list",
      items: [
        "[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook): the inbox where scheduling and document requests reach you.",
        "[Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams): where your executive and their team ask you for things between meetings.",
        "[Google Calendar](/integrations/google-calendar): availability for proposed times, and events once a time is agreed.",
        "[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive): decks, pre-reads, travel documents, and contracts to attach.",
      ],
    },
    { type: "h2", text: "Where Synced isn't the right tool for an EA" },
    {
      type: "list",
      items: [
        "Delegated mailbox access. If you work inside your executive's Gmail or Outlook as a delegate, Synced doesn't advertise support for that today.",
        "Shared approval between you and your executive. Decide is per account, so there's no built-in handoff where you prepare a draft and they approve it in their own app.",
        "Travel and expense booking. Synced drafts messages and finds files. It doesn't book flights or file expenses.",
      ],
    },
    {
      type: "p",
      text: "For how EAs usually set up delegation in Gmail and Outlook without extra tools, see [how to delegate email](/guides/how-to-delegate-email).",
    },
  ],
  faqs: [
    {
      q: "Can an executive assistant use Synced on their executive's inbox?",
      a: "Synced connects accounts per user and doesn't currently advertise a delegated or shared-access mode for assistants. It works on the accounts connected to your own Synced login. Ask the Synced team through Contact Sales if delegated access is a requirement.",
    },
    {
      q: "Will Synced send emails on my executive's behalf without approval?",
      a: "No. Every AI-drafted message waits in Decide for approval from the person signed in to that Synced account.",
    },
    {
      q: "Does Synced work with Outlook calendars?",
      a: "Yes. Connecting an Outlook account includes its calendar, so Synced can propose times from it and prepare events for approval, the same as with Google Calendar. See [Outlook](/integrations/outlook).",
    },
    {
      q: "Can Synced turn a request into a to-do for me?",
      a: "Yes. When a message delegates something to a person rather than something Synced can draft, it can become a Task in your Tasks list.",
    },
  ],
};
