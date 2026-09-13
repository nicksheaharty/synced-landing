import type { Page } from "../types";

export const messenger: Page = {
  slug: "/integrations/messenger",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Facebook Page Messages | Synced",
  h1: "Synced for Messenger",
  navLabel: "Messenger",
  cardText: "Reads Messenger conversations on your Facebook Page and drafts quotes, answers, and booking replies.",
  description:
    "Synced is an AI assistant for Facebook Page messages. It reads Messenger conversations on your Page and drafts replies, with files and times, for approval.",
  eyebrow: "Integration · Inbox",
  intro:
    "People message local businesses on Facebook the way they used to call. Synced reads each Page conversation and drafts the quote, the hours, or the booking reply for you to approve.",
  answer:
    "Synced, the AI inbox assistant, connects to Messenger for the Facebook Pages you manage through Meta's login. It reads messages people send to your Page, pulls answers from your connected files and calendar, and drafts a Messenger reply that sends from the Page only after you approve it. Messenger only allows replies within 24 hours of the person's last message. Messenger is part of the Pro plan.",
  primaryIntent: "ai assistant for facebook page messages",
  related: ["/integrations/instagram-business", "/integrations/whatsapp-business", "/integrations/google-calendar", "/features/drafting"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "messenger", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a Facebook Page message" },
    {
      type: "p",
      text: "A landscaping company's Page gets a quote request on a Sunday evening. The rates are in a spreadsheet, the site-visit times are in the calendar, and the owner is at dinner.",
    },
    {
      type: "message",
      from: "Tom (homeowner)",
      source: "messenger",
      time: "Sun 6:48 PM",
      text: "Hi, how much for weekly mowing? Corner lot, roughly a quarter acre. Could someone come look this week?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the quarter-acre weekly rate in Service_Rates.xlsx in Google Drive",
        "Checked your calendar and picked two open site-visit windows this week",
        "Drafted a Messenger reply with the price range and both times",
      ],
      caption: "The reply sends from your Page, not your personal profile, and only after you approve it.",
    },
    {
      type: "p",
      text: "Monday morning you open Decide, change \"Wednesday 4 PM\" to Thursday, and approve. Tom gets an answer before he messages the next company on his list.",
    },
    { type: "h2", text: "What you can hand off in Page conversations" },
    {
      type: "features",
      items: [
        { icon: "list", title: "Quotes from your own rates", body: "Synced reads the price sheet you keep in Drive or OneDrive, so quotes come from your numbers." },
        { icon: "calendar", title: "Appointments and visits", body: "Open times come from a connected calendar. Creating the event still waits for your approval." },
        { icon: "clock", title: "Hours, directions, policies", body: "The questions every Page gets daily are answered from your documents, in a short Messenger-style reply." },
        { icon: "users", title: "More than one Page", body: "Share several Pages during Meta's login and their conversations all arrive in Synced, labeled by source." },
      ],
    },
    { type: "h2", text: "Messenger's 24-hour reply window" },
    {
      type: "p",
      text: "Meta only lets a Page reply within 24 hours of the person's last message. Synced follows that rule. For a Sunday message, that means approving by Monday evening. If you miss the window, the conversation stays in Synced, but the reply has to wait until the person writes again.",
    },
    { type: "h2", text: "How to connect Messenger to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Choose Messenger under Inboxes in the web app or on iOS." },
        { title: "Review the permissions sheet", body: "Synced receives and reads messages sent to your Facebook Page. Sending any Messenger reply is listed as needing your direct approval." },
        { title: "Log in with Facebook and choose Pages", body: "Meta asks which Pages to share with Synced. You need to manage a Page for it to appear." },
        { title: "Message the Page to test", body: "Send your Page a message from another account and watch it show up in Synced." },
      ],
    },
    { type: "h2", text: "Meta permissions Synced requests for Messenger" },
    {
      type: "table",
      head: ["Access on Meta's screen", "What Synced uses it for"],
      rows: [
        ["Show a list of the Pages you manage", "Let you pick which Pages to connect."],
        ["Manage and access Page conversations in Messenger", "Read incoming messages and send replies you've approved."],
        ["Manage Page metadata", "Turn on new-message notifications for the Pages you picked."],
        ["Business management", "Read the business the Page belongs to, when there is one."],
      ],
      caption: "Meta shows these during login, and you choose which Pages to share.",
    },
    { type: "h2", text: "Which Synced plan includes Messenger" },
    {
      type: "p",
      text: "Messenger is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Every Page message Synced acts on counts as one Action Plan, and Pro includes 100 a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Does Synced read my personal Facebook Messenger chats?",
      a: "No. The Messenger connection covers conversations sent to Facebook Pages you manage. Chats on your personal profile aren't included.",
    },
    {
      q: "Can I connect more than one Facebook Page?",
      a: "Yes. Pick every Page you want during Meta's login. Conversations from each Page show up in Synced, and replies go out from the Page that received the message.",
    },
    {
      q: "Why can't Synced answer a Page message from last week?",
      a: "Messenger only allows a Page to reply within 24 hours of the person's last message. After that, the reply waits until they write again.",
    },
    {
      q: "What happens when I disconnect Messenger?",
      a: "Messages to your Page stop showing up in Synced. Your Page and its inbox in Meta Business Suite aren't changed.",
    },
  ],
};
