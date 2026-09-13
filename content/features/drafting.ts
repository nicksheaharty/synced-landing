import type { Page } from "../types";

export const drafting: Page = {
  slug: "/features/drafting",
  cluster: "feature",
  parent: "/features",
  title: "AI Email Drafting: Replies You Approve Before Sending | Synced",
  h1: "AI drafted replies",
  navLabel: "Drafting",
  cardText: "Replies written from the whole thread, in your tone, and sent only after you approve them.",
  description:
    "Synced's AI email drafting writes replies from the full thread and your files, in your voice, for Gmail, Outlook, and Slack. Nothing sends until you approve.",
  eyebrow: "Feature",
  intro:
    "A good draft answers the question that was actually asked, attaches the thing they wanted, and sounds like you. Synced writes that draft and then waits for you.",
  answer:
    "Synced, the AI inbox assistant, drafts replies to messages in your connected Inboxes, including Gmail, Outlook, Slack, Microsoft Teams, and WhatsApp Business. It reads the full thread and searches your mail and files first, so the draft includes the right details and attachments. Every AI-drafted message waits in Decide for your approval, where you can edit it or tell Synced what to change. Synced also learns style notes from your edits, like keeping replies short.",
  primaryIntent: "ai email drafting",
  related: ["/features/decide", "/features/search", "/glossary/smart-reply", "/guides/how-to-use-ai-to-draft-email-replies"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "draft",
  body: [
    { type: "h2", text: "How Synced writes a reply" },
    {
      type: "steps",
      items: [
        { title: "Read the whole thread", body: "Synced reads the newest message with the thread around it, so \"does Tuesday still work?\" gets an answer about the right Tuesday." },
        { title: "List every ask", body: "Messages often bundle two or three requests. Synced lists each one so the question tacked onto the last line gets answered too." },
        { title: "Gather what the reply needs", body: "It [searches](/features/search) your mail, Slack, Drive, OneDrive, and calendar, and opens attachments on the incoming message." },
        { title: "Draft and hand it to you", body: "The draft goes to [Decide](/features/decide) with recipients, subject, and attachments filled in, ready to send or fix." },
      ],
    },
    { type: "h2", text: "A drafted reply that answers two questions" },
    {
      type: "message",
      from: "Tom (client)",
      source: "outlook",
      time: "5:47 PM",
      text: "Thanks for the proposal. Two things: does the price include onboarding, and could you send the case study you mentioned on the call?",
      stepsLabel: "1 Task Ready for Approval",
      steps: [
        "Checked the proposal you sent: onboarding is listed as included for the first 30 days",
        "Found Retail_Case_Study.pdf in OneDrive and attached it",
        "Drafted a reply answering both questions in the same thread",
      ],
      file: "Retail_Case_Study.pdf",
      caption: "An illustration. The reply stays in Decide until you send it.",
    },
    {
      type: "p",
      text: "The draft goes out from your own Outlook address in Tom's thread, not from a Synced address. The same works across Inboxes: a Slack DM gets a Slack reply, a WhatsApp message gets a WhatsApp reply.",
    },
    { type: "h2", text: "Editing and reprompting a draft" },
    {
      type: "p",
      text: "When a draft is 90% right, fix the 10% yourself. The email editor has bold, italics, underline, lists, and links, and you can change To, Cc, Bcc, the subject, and the From account, or add photos and files. On a group thread, Reply All widens the recipient list if Synced picked too few people.",
    },
    {
      type: "p",
      text: "When it's further off, tap Reprompt and say what's wrong: \"shorter\", \"too formal\", \"wrong date, it's Friday.\" You can type it or dictate it. Synced starts from the draft as you left it, keeps your manual edits, and makes the targeted change instead of rewriting from scratch.",
    },
    { type: "h2", text: "Drafts that sound like you" },
    {
      type: "p",
      text: "Synced keeps a short list of style notes, learned from the edits you make to its drafts. Cut the greeting on quick threads a few times and that can become a note. You can read the notes in Settings under Personal Voice, rewrite them yourself (up to 8 lines), or switch the feature off. Instructions you give on a specific request always win over the general notes.",
    },
    {
      type: "p",
      text: "Two other settings shape outgoing mail: an email signature, which you can type or import from Gmail, and an out-of-office auto-reply for Gmail or Outlook, with optional start and end dates.",
    },
    { type: "h2", text: "Sending now or scheduling for later" },
    {
      type: "list",
      items: [
        "Send now, and it goes out from your account in the original thread. Read the draft before tapping Send: an approved draft doesn't get an undo window.",
        "Schedule it instead: in 1 hour, this evening, tomorrow at 9 AM, Monday at 9 AM, or a custom time. Scheduled messages sit under the Scheduled filter, where you can edit or unschedule them.",
        "Write your own email from scratch with the compose option. Messages you write or forward yourself get an undo countdown, set in Settings: off, 5, 10, 20, or 30 seconds.",
      ],
    },
    { type: "h2", text: "What Synced drafting won't do" },
    {
      type: "p",
      text: "Synced won't send an AI-drafted message without your approval, and there's no setting that turns that off. It won't fill a gap with a guess: if the reply needs a price or date it couldn't find, you get a question in Decide instead of a confident-sounding draft. And it stays quiet on threads where a message is aimed at someone else, rather than drafting a reply that jumps into another person's conversation.",
    },
    {
      type: "p",
      text: "If what you want is a longer document (a deck, a one-pager, a spreadsheet) rather than a reply, see [documents](/features/documents).",
    },
  ],
  faqs: [
    {
      q: "Can AI write email replies in my own writing style?",
      a: "Synced learns style notes from the edits you make to its drafts, such as keeping replies to two or three sentences. You can view, edit, or turn off those notes in Settings under Personal Voice.",
    },
    {
      q: "Does Synced send drafts automatically?",
      a: "No. Every AI-drafted message waits in Decide until you approve it, and then it goes out from your own account.",
    },
    {
      q: "Which apps can Synced draft replies for?",
      a: "Any connected Inbox: Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS through Twilio, and GroupMe. The reply goes back through the app the message came from.",
    },
    {
      q: "Can I undo a message after approving it?",
      a: "Not an approved AI draft. Those send when you tap Send, so edit or schedule them first. Messages you write or forward yourself show an undo countdown whose length you set in Settings. See [Undo a sent message](/help/undo-a-sent-message).",
    },
  ],
};
