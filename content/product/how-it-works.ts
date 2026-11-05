import type { Page } from "../types";

export const howItWorks: Page = {
  slug: "/how-it-works",
  cluster: "product",
  title: "How Synced Works: Reads, Prepares, You Approve | Synced",
  h1: "How Synced works",
  navLabel: "How it works",
  cardText: "Synced reads what comes in, gets the work ready, and you approve each item from a card stack.",
  description:
    "How Synced works: it reads every message to the inboxes you handle, prepares the reply, meeting time, or file, and you approve each one in Decide before it sends.",
  eyebrow: "Product",
  intro:
    "Synced is an AI inbox for assistants who handle a lot of messages, and for anyone running their own busy inbox. It reads what comes in, gets the work ready, and waits for you to approve it.",
  answer:
    "Synced, the AI inbox assistant, works in three steps. It reads every new message in the inboxes you connect (Gmail, Outlook, Slack, Microsoft Teams, and texts), including the ones you manage for an executive. For each message it prepares the work: a time that's open for everyone, the file someone asked for, and a reply written the way the sender expects to hear from you or your boss. You clear those items one card at a time in Decide, and nothing Synced drafted is sent until you approve it.",
  primaryIntent: "how does synced work",
  related: ["/for/executive-assistants", "/features/decide", "/glossary/action-plan", "/get-started"],
  published: "2026-09-13",
  updated: "2026-11-05",
  icon: "arrows",
  body: [
    { type: "h2", text: "Synced reads, prepares, and waits for your approval" },
    {
      type: "steps",
      items: [
        {
          title: "Reads",
          body: "Connect the inboxes you handle: your own, and the ones you run for the people you support. Synced reads every new message there, along with the thread it belongs to.",
        },
        {
          title: "Prepares",
          body: "Each message gets an [Action Plan](/glossary/action-plan). Someone asks to meet, Synced finds a time that's open. Someone asks for a file, Synced finds it in Drive or OneDrive and attaches it. Then it drafts the reply.",
        },
        {
          title: "You approve",
          body: "Everything that would send a message or change a calendar waits in Decide, one card at a time. Approve it, edit it, or tell Synced what to change. The goal is that most of the work is done before you open the inbox.",
        },
      ],
    },
    { type: "h2", text: "Step 1: Connect the inboxes you handle" },
    {
      type: "p",
      text: "[Inboxes](/features/inboxes) are where requests arrive. For most assistants that's Gmail or Outlook, plus Slack or Microsoft Teams, plus texts. Synced also connects to Google Calendar (Outlook calendar comes with an Outlook connection) and to Google Drive and OneDrive, which is where it finds availability and files. Dropbox is coming soon.",
    },
    {
      type: "p",
      text: "Each Inbox type takes up to 4 accounts, so your own Gmail and the executive's Gmail can sit side by side in one list. Every account connects through the provider's own permission screen, which means the account owner, or someone with their sign-in, approves it. You sign in to Synced itself with a phone number and a 6-digit code. Setup steps are on [get started](/get-started), and each tool has its own [integration page](/integrations).",
    },
    { type: "h2", text: "Step 2: Synced prepares the work each message asks for" },
    {
      type: "p",
      text: "When a message lands, Synced works out what the sender needs. One email can hold three requests; Synced lists all of them so the question tacked onto the end doesn't get dropped. Then it does the groundwork: checks the calendar, searches files, opens attachments, rereads the thread.",
    },
    {
      type: "message",
      from: "Tom (chief of staff, partner company)",
      source: "gmail",
      time: "7:42 AM",
      text: "Hi, could we get 30 minutes with Maya next week to go over the renewal? Also, could you resend the signed MSA? I can't find it.",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found three 30-minute openings next week on Maya's calendar",
        "Found Signed_MSA_Final.pdf in Google Drive and attached it",
        "Drafted a reply in Maya's usual tone offering the three times",
      ],
      file: "Signed_MSA_Final.pdf",
      caption: "An illustration. The invite and the reply wait in Decide until you approve them.",
    },
    {
      type: "p",
      text: "That whole message counts as one Action Plan, however many steps it takes. The counting rules and weekly limits are on the [Action Plan glossary page](/glossary/action-plan).",
    },
    { type: "h3", text: "Replies that sound like the person they come from" },
    {
      type: "p",
      text: "Drafts are written from the full thread, in the tone of the account they'll be sent from. Synced also keeps a short list of style notes learned from the edits you make, so every correction teaches it a little more about how your executive writes. You can read and rewrite those notes in Settings under Personal Voice. More on [drafting](/features/drafting).",
    },
    { type: "h2", text: "Step 3: Clear the stack in Decide" },
    {
      type: "p",
      text: "[Decide](/features/decide) is the queue of things that need a person's sign-off. Each card is one of three kinds: a draft to send, a calendar event to create or change, or a question Synced couldn't answer by searching. On the [iOS app](/ios) it's a stack you go through one card at a time: approve with a tap, edit in place, or tap Reprompt and say what should change, like \"shorter\" or \"make it Friday.\"",
    },
    {
      type: "p",
      text: "Swiping a card pushes it to the back of the stack for later. Swiping never approves or discards anything. Once you approve, Synced sends from the connected account in the original thread, or at the time you scheduled.",
    },
    { type: "h2", text: "When a message is asking a person, not Synced" },
    {
      type: "p",
      text: "Some requests can only be done by a human: sign the lease, pick a venue, call the caterer. Synced turns those into [Tasks](/features/tasks) with the sender, a date if the message implied one, and a priority. The task links back to the conversation it came from.",
    },
    { type: "h2", text: "Asking Synced for something yourself" },
    {
      type: "p",
      text: "The loop also runs in reverse. Type or dictate a request, @mention a contact, and Synced treats it like any incoming message: \"Draft a follow-up to the Acme team about pricing\" becomes a plan, and the draft comes back to you for approval.",
    },
    { type: "h2", text: "Built for assistants, and for people running their own inbox" },
    {
      type: "p",
      text: "Some AI tools are pitched as a replacement for the assistant. Synced is built the other way around: it does the prep, and the assistant keeps the judgment and the relationships. Most of a high-volume assistant's scheduling is with other assistants, and Synced is designed so that when both sides use it, booking between them can happen without the usual back-and-forth.",
    },
    {
      type: "p",
      text: "If you handle your own inbox (founders, sales, recruiters, consultants), the loop is the same with one fewer person in it. See [who Synced is for](/for).",
    },
    { type: "h2", text: "The features behind each step" },
    {
      type: "list",
      items: [
        "[Inboxes](/features/inboxes): the email and messaging accounts Synced reads.",
        "[Scheduling](/features/scheduling): open times from the connected calendar and an editable invite to confirm.",
        "[Documents](/features/documents): files found in Drive or OneDrive, and Word, PowerPoint, Excel, or PDF files created or revised from a request.",
        "[Drafting](/features/drafting): replies written from the full thread, in the sender's tone, sent only after approval.",
        "[Search](/features/search): Synced looks through messages, Drive, OneDrive, and the calendar for the context a reply needs.",
        "[Follow-ups](/features/follow-ups): replies merged into the plan they belong to, plus scheduled nudges you ask for.",
        "[Decide](/features/decide): the approval queue where drafts, invites, and questions wait.",
        "[Tasks](/features/tasks): the to-dos conversations hand to a person, with dates, priorities, and a link back.",
      ],
    },
    { type: "h2", text: "What Synced won't do without you" },
    {
      type: "p",
      text: "Synced doesn't send an AI-drafted message, create a meeting, or change an event until you approve it. It won't guess at a fact it couldn't find; it asks. And if the connected account is only cc'd on a thread where two other people are talking, it summarizes the thread without jumping in.",
    },
  ],
  faqs: [
    {
      q: "Can an executive assistant use Synced for the inboxes they manage?",
      a: "Yes. Connect the accounts you handle, up to 4 per Inbox type, through each provider's permission screen. Synced reads them in one list and every draft waits for your approval. Details are on [Synced for executive assistants](/for/executive-assistants).",
    },
    {
      q: "Do I have to prompt Synced for it to do anything?",
      a: "No. Synced starts on its own when a message arrives in a connected Inbox. You can also type a request directly when you want something that no message asked for.",
    },
    {
      q: "Does Synced send messages automatically?",
      a: "No. Every AI-drafted message waits for approval in Decide. After you approve, it goes out from the connected account it was drafted for.",
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
