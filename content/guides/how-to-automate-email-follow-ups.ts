import type { Page } from "../types";

export const automateFollowUps: Page = {
  slug: "/guides/how-to-automate-email-follow-ups",
  cluster: "guide",
  parent: "/guides",
  title: "How to Automate Email Follow-ups (Gmail and Outlook) | Synced",
  h1: "How to automate email follow-ups",
  navLabel: "Automate email follow-ups",
  cardText: "Three ways to stop losing threads that went quiet, from built-in reminders to an AI that writes the nudge.",
  description:
    "Three ways to automate follow-ups in Gmail and Outlook: built-in reminders, scheduled nudges, and an AI assistant that drafts the follow-up for you.",
  eyebrow: "Guide",
  intro: "Most dropped threads aren't forgotten, they're just buried. Here are three ways to make follow-ups happen without keeping a list in your head.",
  answer:
    "To automate email follow-ups, pick one of three levels: turn on your email client's reminders (Gmail Nudges or Outlook flags), schedule the follow-up when you send the original, or use an AI inbox assistant like Synced to write the follow-up from the thread's context for your approval. The first two remind you; the third also writes the message.",
  primaryIntent: "how to automate email follow ups",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Why follow-ups slip" },
    {
      type: "p",
      text: "A follow-up is a task with no due date that lives inside a thread you've already read. Nothing in a normal inbox resurfaces it. The fix is to give every sent email that needs a reply a way to come back, either as a reminder or as a drafted message.",
    },
    { type: "h2", text: "Option 1: Use the reminders already in Gmail or Outlook" },
    {
      type: "p",
      text: "Both major clients have something built in. It's free and takes a minute to turn on.",
    },
    {
      type: "steps",
      items: [
        { title: "Gmail: turn on Nudges", body: "Open Settings, then See all settings. On the General tab, find Nudges and check \"Suggest emails to follow up on.\" Gmail will bump sent emails that haven't had a reply to the top of your inbox after a few days." },
        { title: "Gmail: snooze the sent message", body: "For a specific date, open the sent email, choose Snooze, and pick when you want it back. It returns to your inbox that morning." },
        { title: "Outlook: flag with a reminder", body: "Right-click the sent message, choose Follow Up, then Custom or Add Reminder. Outlook shows it in your task list and pops a reminder at the time you set." },
      ],
    },
    {
      type: "p",
      text: "The limit: these tell you a follow-up is due. You still have to reread the thread and write the message.",
    },
    { type: "h2", text: "Option 2: Schedule the follow-up when you send" },
    {
      type: "p",
      text: "If you already know you'll need to chase, write the follow-up right after sending the first email and schedule it. In Gmail, use the arrow next to Send and choose Schedule send. In Outlook, use Delay Delivery or Schedule send.",
    },
    {
      type: "p",
      text: "This works for predictable cases like invoices or proposals. The risk is that the other person replies in the meantime and your scheduled nudge still goes out, so check before the send time.",
    },
    { type: "h2", text: "Option 3: Let an AI assistant write it" },
    {
      type: "p",
      text: "An AI inbox assistant reads the thread and writes the follow-up with the context filled in, so you aren't rereading five emails to remember what you asked. In [Synced](/), you ask in one line (\"follow up with Priya on the vendor contract, need a decision by Friday\") and the draft lands in your Decide queue. Nothing is sent until you approve it, and you can schedule it for later. This works across Gmail, Outlook, Slack, and Teams.",
    },
    {
      type: "message",
      from: "You",
      source: "gmail",
      time: "Monday 9:02 AM",
      text: "@Synced follow up with Priya on the vendor contract, need a decision by Friday",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Pulled the last message and the open question about payment terms",
        "Drafted a short follow-up asking for a decision by Friday",
      ],
    },
    {
      type: "p",
      text: "Because the assistant reads the thread when it writes the draft, the nudge reflects the latest message. One caution applies to any tool: a follow-up scheduled for later still goes out if the other person answers in the meantime, so check scheduled sends when a thread comes back to life. See [follow-ups in Synced](/features/follow-ups) for the details.",
    },
    { type: "h2", text: "Which option to pick" },
    {
      type: "table",
      head: ["Approach", "Writes the message", "Knows if they replied", "Cost"],
      rows: [
        ["Gmail Nudges / Outlook flags", "No", "Gmail Nudges: yes. Flags: no", "Free"],
        ["Scheduled send", "You write it upfront", "No", "Free"],
        ["AI assistant (Synced)", "Yes, for your approval", "Reads the thread when drafting", "Free plan, or Pro at $29.99/user/month"],
      ],
    },
    {
      type: "p",
      text: "If you chase fewer than five threads a week, Nudges is enough. If follow-ups are a real part of your job, like sales, recruiting, or client work, having the draft written for you is where the time goes back. For wording, see the [follow-up email template](/templates/follow-up-after-no-response).",
    },
  ],
  faqs: [
    {
      q: "How long should I wait before following up on an email?",
      a: "Two to three business days is the common default for work email. For time-sensitive requests, one business day is fine if your first message set a deadline.",
    },
    {
      q: "Can Gmail send follow-ups automatically?",
      a: "Gmail on its own can remind you (Nudges, Snooze) and send a message you've scheduled, but it can't write the follow-up for you or cancel a scheduled one when the person replies. Mail-merge add-ons can stop a sequence on reply; an AI assistant can write the message.",
    },
    {
      q: "Will an AI follow-up go out without me seeing it?",
      a: "Not with Synced. Every AI-drafted message waits for your approval in Decide before it's sent.",
    },
  ],
  related: ["/templates/follow-up-after-no-response", "/integrations/gmail", "/glossary/action-plan"],
};
