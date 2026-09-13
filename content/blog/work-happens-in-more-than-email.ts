import type { Page } from "../types";

export const workBeyondEmail: Page = {
  slug: "/blog/work-happens-in-more-than-email",
  cluster: "blog",
  parent: "/blog",
  title: "Work Happens in More Than Email | Synced",
  h1: "Work happens in more than email",
  navLabel: "Work happens in more than email",
  cardText: "Why Synced connects Slack, Teams, WhatsApp, Instagram DMs, SMS, and GroupMe, not only Gmail and Outlook.",
  description:
    "Requests arrive in Slack, Teams, WhatsApp, Instagram DMs, SMS, and GroupMe as well as email. Why Synced, the AI inbox assistant, handles them all in one place.",
  eyebrow: "Blog · Product thinking",
  intro:
    "An assistant that only reads email sees part of your work. The rest is in a Slack thread, a Teams chat, a customer's WhatsApp message, and a text from a number you forgot to save.",
  answer:
    "Requests reach people through Slack, Microsoft Teams, WhatsApp Business, Instagram DMs, SMS, and GroupMe as often as through email. Synced, the AI inbox assistant, connects all of these as Inboxes, writes an Action Plan for each incoming message regardless of where it came from, and puts every draft and decision in one Decide queue for your approval.",
  primaryIntent: "ai assistant for email slack teams whatsapp in one place",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    {
      type: "p",
      text: "It's easy to describe an AI assistant for your inbox as an email tool. The trouble with that framing is that the request that matters most on a given day is just as likely to be a Slack DM or a text as an email, and an assistant that ignores those hands you back an incomplete list.",
    },
    { type: "h2", text: "Where requests actually arrive" },
    {
      type: "p",
      text: "Think about the last few things someone needed from you. For a lot of people, the channel depends on who's asking and how urgent it feels, not on what kind of work it is.",
    },
    {
      type: "list",
      items: [
        "Coworkers ask in Slack or Microsoft Teams, often in a thread you were mentioned in once.",
        "Clients and partners email, then text when the email didn't get an answer fast enough.",
        "Customers of a small business message on WhatsApp or through the business's Instagram account, and sometimes leave the question as a comment on a post.",
        "Community groups, clubs, and some teams coordinate in GroupMe.",
        "Facebook Page conversations land in Messenger.",
      ],
    },
    {
      type: "p",
      text: "None of these are exotic. They're the normal spread of a working week. The same request (\"can you send the updated price list?\") can arrive in any of them, and it needs the same work: find the file, write the reply, send it.",
    },
    { type: "h2", text: "Why chat requests get dropped more than email" },
    {
      type: "p",
      text: "Email has decades of tooling for not losing things: unread counts, flags, labels, snooze, and search that mostly works. Chat apps are built for fast back-and-forth. A message you read on your phone between meetings is marked as seen, scrolls up as the conversation continues, and there's no obvious place it waits for you. Channel threads are worse, because the request can be three replies deep in a conversation you weren't following.",
    },
    {
      type: "p",
      text: "So the requests with the least structure around them are often the ones most likely to slip. If an assistant only watches email, it gives the best-organized channel even more help and leaves the messiest ones alone. We cover the manual fixes for this in [How to stop missing Slack messages](/guides/how-to-stop-missing-slack-messages).",
    },
    { type: "h2", text: "One place to approve work, wherever it came from" },
    {
      type: "p",
      text: "Synced treats every connected source as an Inbox. Today that means [Gmail](/integrations/gmail), [Outlook](/integrations/outlook), [Slack](/integrations/slack), [Microsoft Teams](/integrations/microsoft-teams), [WhatsApp Business](/integrations/whatsapp-business), [Instagram Business](/integrations/instagram-business) (DMs), [Messenger](/integrations/messenger), [SMS](/integrations/sms) via Twilio, and [GroupMe](/integrations/groupme). Inboxes are unlimited on every plan. Gmail is on the Free plan; the others are part of Pro.",
    },
    {
      type: "p",
      text: "Every incoming message gets the same treatment no matter where it came from. Synced reads it, searches Google Drive, OneDrive, and Google Calendar for what it needs, and writes an [Action Plan](/glossary/action-plan). The drafts and questions from all of those sources go into one [Decide](/features/decide) queue. You approve a Slack reply and a WhatsApp reply in the same place, one after another, and each goes back out through the channel it came from.",
    },
    {
      type: "message",
      from: "Leo (customer)",
      source: "whatsapp",
      time: "7:26 PM",
      text: "Hi, do you still have the Saturday 10am slot? And can you send the price sheet again, I lost it",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the current price sheet in Google Drive",
        "Checked Saturday on your calendar and drafted a reply confirming 10 AM is open",
      ],
      caption: "An illustration. The reply goes back through WhatsApp after you approve it.",
    },
    {
      type: "p",
      text: "The value isn't only fewer apps to check. It's that the context crosses channels too. The price sheet a customer asks for on WhatsApp is the same file a colleague asked for in Teams, and Synced finds it the same way.",
    },
    { type: "h2", text: "Why this isn't a unified inbox" },
    {
      type: "p",
      text: "A [unified inbox](/glossary/unified-inbox) puts messages from several accounts into one list, which helps with checking but still leaves you to do everything each message asks. Synced's list is organized around work: what's been prepared, what needs your decision, and what's waiting on someone else. You can still open any conversation and read it, in Messages on the web or Home in the iOS app, but the point is that you shouldn't have to read everything to find the requests.",
    },
    { type: "h2", text: "The limits, stated plainly" },
    {
      type: "list",
      items: [
        "iMessage is coming soon and isn't connected today. If most of your work texts come through iMessage, Synced won't see them yet.",
        "WhatsApp and Instagram connect as WhatsApp Business and Instagram Business accounts. Personal accounts aren't listed as supported Inboxes.",
        "SMS works through a Twilio number, meaning texts to that number, not your personal phone number.",
        "Zoom has no connector, so meeting chat and recordings stay outside Synced.",
        "The Free plan covers Gmail, Google Drive, OneDrive, and Google Calendar. Outlook, Slack, Teams, and the messaging Inboxes need Pro.",
      ],
    },
    {
      type: "p",
      text: "We'd rather you know that up front than connect everything and wonder why a message never showed up. The full list of what's live and what's coming soon is on [Integrations](/integrations).",
    },
    { type: "h2", text: "What we're building toward" },
    {
      type: "p",
      text: "The goal is simple to describe: wherever someone asks you for something, Synced notices, does the preparation, and brings you the decision. Email was the obvious first channel. It was never going to be the only one. If your week spans more apps than your email client can see, Synced is in private beta and you can [get early access](/get-started).",
    },
  ],
  faqs: [
    {
      q: "Can one AI assistant handle Slack, Teams, and email together?",
      a: "Synced connects Gmail, Outlook, Slack, and Microsoft Teams as Inboxes, along with WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, and GroupMe. Drafts from all of them wait for approval in one Decide queue. See [Inboxes](/features/inboxes).",
    },
    {
      q: "Does Synced work with personal WhatsApp or iMessage?",
      a: "Synced connects WhatsApp Business accounts; personal WhatsApp isn't listed as a supported Inbox. iMessage is coming soon. See [WhatsApp Business](/integrations/whatsapp-business).",
    },
    {
      q: "Which plan includes Slack and messaging Inboxes?",
      a: "Pro includes all integrations. The Free plan covers Gmail, Google Drive, OneDrive, and Google Calendar. See [pricing](/pricing).",
    },
  ],
  related: ["/features/inboxes", "/integrations", "/guides/how-to-stop-missing-slack-messages", "/blog/your-inbox-is-a-to-do-list"],
};
