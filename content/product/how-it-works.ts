import type { Page } from "../types";

export const howItWorks: Page = {
  slug: "/how-it-works",
  cluster: "product",
  title: "How Synced Works: Connect, Action Plan, Decide | Synced",
  h1: "How Synced works",
  navLabel: "How it works",
  cardText: "Connect your Inboxes, let Synced write an Action Plan for each message, then approve what matters.",
  description:
    "How Synced works: connect your Inboxes, Synced writes an Action Plan for each new message, and you approve drafts, invites, and answers in Decide.",
  eyebrow: "Product",
  intro:
    "Synced runs one loop on every message you get. It connects, it plans, and it waits for you on the parts that need a human.",
  answer:
    "Synced, the AI inbox assistant, works in three steps. You connect your Inboxes (Gmail, Outlook, Slack, Teams, and more) along with Google Drive, OneDrive, and Google Calendar. For each new message, Synced writes an Action Plan: it searches for context, drafts the reply, finds the file, or proposes the meeting. Anything that needs your judgment, like sending a message or adding a calendar event, waits in Decide until you approve it.",
  primaryIntent: "how does synced work",
  related: ["/features", "/glossary/action-plan", "/features/decide", "/get-started"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "arrows",
  body: [
    { type: "h2", text: "The Synced loop in three steps" },
    {
      type: "steps",
      items: [
        {
          title: "Connect",
          body: "Link the places messages arrive (your Inboxes) and the places context lives (Drive, OneDrive, Calendar). Setup takes a few minutes; the [get started](/get-started) page walks through it.",
        },
        {
          title: "Action Plan",
          body: "Each new message gets one [Action Plan](/glossary/action-plan): the steps Synced takes or proposes to get it handled. Safe steps, like searching or checking availability, happen right away.",
        },
        {
          title: "Decide",
          body: "Steps that need you show up in Decide as a draft to approve, an invite to review, or a question to answer. Approve, edit, or tell Synced what to change.",
        },
      ],
    },
    { type: "h2", text: "Step 1: Connect the places your work arrives" },
    {
      type: "p",
      text: "Synced splits connections into two kinds. [Inboxes](/features/inboxes) are where messages come in: Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS through Twilio, and GroupMe. Output integrations are where Synced goes for context and to get things done: Google Drive, OneDrive, and Google Calendar.",
    },
    {
      type: "p",
      text: "You sign in with your phone number and a 6-digit code, then connect accounts through each provider's own permission screen. Inboxes are unlimited on every plan, so a work Gmail, a personal Gmail, and a Slack workspace can sit side by side. Per-tool steps live on the [integration pages](/integrations).",
    },
    { type: "h2", text: "Step 2: Synced writes an Action Plan for each message" },
    {
      type: "p",
      text: "When a message lands, Synced reads it with the thread around it and works out what the sender needs. A single email can hold three requests; Synced lists all of them so the second question tacked onto the end doesn't get dropped. Then it does the groundwork: searching your mail and files, opening attachments, checking your calendar.",
    },
    {
      type: "message",
      from: "Marcus (your manager)",
      source: "slack",
      time: "11:58 PM",
      text: "quick thing, can you rework the Q3 deck so the pricing slide leads? and let Priya know we're pushing the review to Thursday",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Pulled Q3_Review.pptx from Drive and built a version with pricing on slide 2",
        "Checked Thursday on your calendar and drafted the updated invite",
        "Drafted a Slack reply to Marcus and a note to Priya",
      ],
      file: "Q3_Review_v2.pptx",
      caption: "An illustration. The invite and both messages wait in Decide until you approve them.",
    },
    {
      type: "p",
      text: "That whole message counts as one Action Plan, however many steps it takes. The counting rules and weekly limits are on the [Action Plan glossary page](/glossary/action-plan).",
    },
    { type: "h2", text: "Step 3: Approve, edit, or reprompt in Decide" },
    {
      type: "p",
      text: "[Decide](/features/decide) is the queue of things only you can sign off on. Each card is one of three kinds: a finished draft to send, a calendar event to create or change, or a question Synced couldn't answer by searching. You can edit the draft yourself, or tap Reprompt and type (or say) what should change, like \"shorter\" or \"make it Friday.\"",
    },
    {
      type: "p",
      text: "Once you approve, Synced sends from your own account in the original thread, or at the time you scheduled. Cards you don't want to deal with yet can be swiped to the back of the stack.",
    },
    { type: "h2", text: "When a message is asking you, not Synced" },
    {
      type: "p",
      text: "Some requests can only be done by a person: sign the lease, pick a venue, review the contract. Synced turns those into [Tasks](/features/tasks) with the sender, a date if the message implied one, and a priority. The task links back to the conversation it came from.",
    },
    { type: "h2", text: "Asking Synced for something yourself" },
    {
      type: "p",
      text: "The loop also runs in reverse. Type or dictate a request, @mention a contact, and Synced treats it like any incoming message: \"Draft a follow-up to the Acme team about pricing\" becomes a plan, and the draft comes back to you for approval.",
    },
    { type: "h2", text: "The features that make up each step" },
    {
      type: "list",
      items: [
        "[Inboxes](/features/inboxes): the email and messaging accounts Synced reads, and how they differ from output integrations.",
        "[Search](/features/search): Synced looks through mail, Slack, Drive, OneDrive, and your calendar for the context a reply needs.",
        "[Drafting](/features/drafting): replies written from the full thread, in your tone, sent only after you approve.",
        "[Documents](/features/documents): Word, PowerPoint, Excel, and PDF files Synced creates or revises from a request.",
        "[Scheduling](/features/scheduling): open times from your calendar and an editable invite for you to confirm.",
        "[Follow-ups](/features/follow-ups): replies merged into the plan they belong to, plus scheduled nudges and reminders.",
        "[Decide](/features/decide): the approval queue where drafts, invites, and questions wait for you.",
        "[Tasks](/features/tasks): the to-dos conversations hand to you, with dates, priorities, and a link back.",
      ],
    },
    { type: "h2", text: "What Synced won't do without you" },
    {
      type: "p",
      text: "Synced doesn't send an AI-drafted message, create a meeting, or change an event until you approve it. It won't guess at a fact it couldn't find; it asks. And if you're on a thread as a bystander, with two other people talking to each other, it summarizes the thread without jumping in.",
    },
  ],
  faqs: [
    {
      q: "Do I have to prompt Synced for it to do anything?",
      a: "No. Synced starts on its own when a message arrives in a connected Inbox. You can also type a request directly when you want something that no message asked for.",
    },
    {
      q: "Does Synced send messages automatically?",
      a: "No. Every AI-drafted message waits for your approval in Decide. After you approve, it goes out from your own account.",
    },
    {
      q: "What counts as one Action Plan?",
      a: "One incoming message is one Action Plan, no matter how many steps Synced takes on it. The full counting rules are on the [Action Plan page](/glossary/action-plan).",
    },
    {
      q: "Can I use Synced on my phone and computer?",
      a: "Yes. The web app runs in desktop browsers at mail.syncedinbox.com and there's an [iOS app](/ios). Both use the same phone-number sign-in and share your account and history. Android is [planned](/android).",
    },
  ],
};
