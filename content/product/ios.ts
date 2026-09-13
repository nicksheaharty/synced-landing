import type { Page } from "../types";

export const ios: Page = {
  slug: "/ios",
  cluster: "product",
  title: "Synced for iPhone: AI Inbox Assistant iOS App | Synced",
  h1: "Synced for iPhone",
  navLabel: "iOS app",
  cardText: "Approve drafts, answer questions, and work through Tasks from your phone. In private beta.",
  description:
    "The Synced iOS app is in private beta. Approve AI-drafted replies, review invites, and clear Tasks from your iPhone with the same phone-number sign-in as web.",
  eyebrow: "Product · iOS",
  intro:
    "Most of what Synced needs from you is a yes, a no, or a quick edit. The iPhone app is built for exactly that, in the thirty seconds between meetings.",
  answer:
    "Synced's iOS app is available in private beta to people on the early-access list. It shows the same account as the web app: your conversations, the Decide queue of drafts and questions waiting for approval, and your Tasks. You sign in with your phone number and a 6-digit code, and nothing Synced drafts is sent until you approve it on either device.",
  primaryIntent: "synced ios app",
  related: ["/how-it-works", "/features/decide", "/android", "/get-started"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "MobileApplication",
  icon: "mobile",
  body: [
    { type: "h2", text: "How to get the Synced iOS app" },
    {
      type: "p",
      text: "Synced is in private beta, and the iOS app is part of it. Join the waitlist with Get Early Access and you'll hear from us when your spot opens. There's no public App Store listing to link to yet, so treat any \"Synced\" app you find by searching as someone else's until we send you the link.",
    },
    {
      type: "steps",
      items: [
        { title: "Request early access", body: "Use Get Early Access on this site to join the waitlist." },
        { title: "Install from your invite", body: "When your spot opens, the invite tells you how to install the beta on your iPhone." },
        { title: "Sign in with your phone number", body: "Enter your number and the 6-digit code Synced texts you. There's no password. If you already use Synced on the web, the same number opens the same account." },
        { title: "Connect an Inbox", body: "New accounts connect Gmail first, then can add Outlook, Slack, Teams, and the rest from Settings. Full setup is on [get started](/get-started)." },
      ],
    },
    { type: "h2", text: "The Messages, Decide, and Tasks tabs on iPhone" },
    {
      type: "p",
      text: "The app has four tabs: Messages, Decide, Tasks, and Settings. They match the web app, so nothing needs relearning when you switch devices.",
    },
    {
      type: "features",
      items: [
        {
          icon: "chat",
          title: "Messages",
          body: "Every conversation from every Inbox in one list, with a summary of what each thread wants. Filter to Primary, Action Needed, Sent, Scheduled, Starred, Snoozed, or Trash.",
        },
        {
          icon: "hand",
          title: "Decide",
          body: "A stack of cards, one per decision. Tap to approve, edit, or reprompt. Swipe a card to skip it for now. When the stack is empty, it says All caught up.",
        },
        {
          icon: "tasks",
          title: "Tasks",
          body: "Things conversations handed to you, with dates, priorities, and a link back to the thread. Sort and group by date, priority, or label.",
        },
        {
          icon: "folder",
          title: "Files",
          body: "Documents Synced created for you (Word, PowerPoint, Excel, PDF) in one place, searchable and shareable from the phone.",
        },
      ],
    },
    { type: "h2", text: "What approving a draft looks like on a phone" },
    {
      type: "p",
      text: "A Decide card shows the message Synced is responding to, then the draft underneath. Recipients, subject, and attachments are editable in place, and the email body opens a full editor with formatting. If the draft is close but wrong, tap Reprompt and dictate the fix: \"say Friday, not Thursday.\"",
    },
    {
      type: "message",
      from: "Jordan (landlord)",
      source: "gmail",
      time: "7:41 AM",
      text: "Can you send over renter's insurance proof before move-in on the 1st?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the insurance declaration page in Drive and attached it",
        "Drafted a short reply confirming the move-in date",
      ],
      file: "Renters_Insurance_Declaration.pdf",
      caption: "An illustration of a Decide card. Nothing is sent until you tap Send.",
    },
    {
      type: "p",
      text: "Tap the clock to schedule the send instead (in 1 hour, this evening, tomorrow at 9, Monday at 9, or a custom time). Messages you write or forward yourself get a short undo countdown, adjustable in Settings.",
    },
    { type: "h2", text: "Other things the iPhone app handles" },
    {
      type: "list",
      items: [
        "Long-press a conversation to star it, snooze it, mark it read or unread, archive it, or move it to Trash. Archive and Trash carry over to Gmail and Outlook.",
        "Ask Synced for something new by typing or dictating a request and @mentioning a contact.",
        "Answer calendar invites that arrive by email with Accept, Maybe, or Decline.",
        "Set an email signature (or import it from Gmail), turn on an out-of-office auto-reply, and pick brand colors and fonts for documents Synced creates.",
        "Turn notifications on or off, and choose light, dark, or system appearance.",
      ],
    },
    { type: "h2", text: "What the iOS beta doesn't do yet" },
    {
      type: "p",
      text: "The app is iPhone-only during the beta; there's no iPad layout. iMessage shows up in the Inbox list as coming soon, not connectable. And because it's a beta, expect updates to change screens now and then. If you use a phone browser to visit the web app, it will point you to the app instead.",
    },
  ],
  faqs: [
    {
      q: "Is the Synced iOS app free?",
      a: "Synced's Free plan costs $0 and includes 20 Action Plans a week. Pro is $29.99 per user per month, or $24.99 billed annually, with 100 Action Plans a week. The plan is tied to your account, not the device. Details on [pricing](/pricing).",
    },
    {
      q: "Is Synced on the App Store?",
      a: "Not as a public listing yet. The iOS app is in private beta; request early access and the invite explains how to install it.",
    },
    {
      q: "Do the iPhone app and the web app stay in sync?",
      a: "Yes. Both sign in with the same phone number and show the same account, Inboxes, history, Decide queue, and Tasks. Approve a draft on your phone and it leaves the queue on the web too.",
    },
    {
      q: "Is there a Synced app for Android?",
      a: "Not yet. Android is planned with no date. Until then, use the web app on a desktop browser. More on the [Android page](/android).",
    },
  ],
};
