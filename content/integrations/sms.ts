import type { Page } from "../types";

export const sms: Page = {
  slug: "/integrations/sms",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Business Texts via Twilio SMS | Synced",
  h1: "Synced for SMS",
  navLabel: "SMS (Twilio)",
  cardText: "Reads texts sent to your Twilio number and drafts SMS replies you approve.",
  description:
    "Synced's SMS integration reads texts sent to your Twilio business number and drafts replies, with times and files, that send from that number after you approve.",
  eyebrow: "Integration · Inbox",
  intro:
    "If customers, tenants, or clients text a Twilio number you own, Synced can read those texts and have the reply drafted before you've found your phone.",
  answer:
    "Synced, the AI inbox assistant, connects to SMS through a Twilio phone number you already have. Once connected, texts sent to that number show up in Synced, which drafts replies using your calendar and files and sends them from the same Twilio number after you approve. The SMS integration doesn't read the personal texts on your phone. SMS is part of the Pro plan.",
  primaryIntent: "ai sms assistant twilio",
  related: ["/integrations/whatsapp-business", "/integrations/groupme", "/features/tasks"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "sms", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a text to your Twilio number" },
    {
      type: "p",
      text: "A property manager's maintenance line gets a text in the middle of a workday. The tenant wants a person, a time, and some reassurance. Synced drafts the reply and hands the repair to whoever does it.",
    },
    {
      type: "message",
      from: "Rae (tenant, 4B)",
      source: "sms",
      time: "12:17 PM",
      text: "Hot water is out again in 4B. Can someone come today?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Checked your calendar and found this afternoon open from 2 to 4",
        "Created a Task to get the plumber to 4B today",
        "Drafted a text back to Rae with the 2 to 4 PM window",
      ],
      caption: "The text sends from your Twilio number once you approve it, not from your personal phone.",
    },
    {
      type: "p",
      text: "SMS drafts stay short and plain, because a text that reads like an email feels strange on a phone. Files you approve go out as picture messages (MMS) where the carrier supports them.",
    },
    { type: "h2", text: "What the SMS integration is, and what it isn't" },
    {
      type: "p",
      text: "This connects a business phone number you rent from Twilio, the messaging company. It's a good fit for a support line, a booking number, or the number printed on your signs. It isn't a way to get your iPhone or Android texts into Synced. For personal texts, [iMessage](/integrations/imessage) is listed as coming soon.",
    },
    { type: "h2", text: "What you can hand off by text" },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "Scheduling by text", body: "\"Can you do Thursday?\" gets a reply with times that are open on your connected calendar." },
        { icon: "tasks", title: "Requests for someone else", body: "A repair, a delivery, a callback: Synced can turn it into a Task while drafting the reply to the person who texted." },
        { icon: "folder", title: "Forms and confirmations", body: "A lease addendum or an intake form from Drive or OneDrive can go out with the text you approve." },
        { icon: "phone", title: "One number, one list", body: "Texts to the number sit in Synced beside your email and chat Inboxes, instead of on a shared phone in a drawer." },
      ],
    },
    { type: "h2", text: "How to connect a Twilio number to Synced" },
    {
      type: "steps",
      items: [
        { title: "Have a Twilio account and number ready", body: "You need a Twilio account with a phone number that can receive SMS. Synced doesn't sell or provision numbers." },
        { title: "Open Settings and choose SMS (Twilio)", body: "It's under Inboxes. The permissions sheet shows that Synced receives and reads texts to the number, and that sending any text needs your approval." },
        { title: "Enter three values from the Twilio Console", body: "Your Account SID (it starts with AC), your Auth Token, and the Twilio number in international format, like +14155551234. Synced links straight to the Twilio Console from this screen." },
        { title: "Let Synced check and finish setup", body: "Synced confirms the credentials, checks that the number belongs to that account, and sets the number to deliver incoming texts to Synced. Then text the number to test it." },
      ],
    },
    { type: "h2", text: "What access the Twilio connection gives Synced" },
    {
      type: "p",
      text: "Twilio doesn't have a sign-in-and-approve screen like Google or Microsoft. You paste an Auth Token instead, and that token works for your whole Twilio account, so treat it like a password. Synced uses it for three things:",
    },
    {
      type: "table",
      head: ["What Synced does", "When"],
      rows: [
        ["Looks up the number you entered and updates where its incoming texts go", "Once, when you connect"],
        ["Receives and reads texts sent to that number", "Automatically, as they arrive"],
        ["Sends a text (or picture message) from that number", "Only after you approve the draft"],
      ],
      caption: "Texts sent through Twilio are billed to your Twilio account at Twilio's rates.",
    },
    {
      type: "callout",
      title: "Disconnecting leaves the Twilio setting in place",
      text: "When you disconnect SMS in Synced, texts stop showing up there, but the number keeps pointing its incoming messages at Synced until you change that in the Twilio Console. If you rotate your Auth Token in Twilio, reconnect SMS in Synced with the new one.",
    },
    { type: "h2", text: "Which Synced plan includes SMS" },
    {
      type: "p",
      text: "SMS via Twilio is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Each text Synced acts on counts as one Action Plan, and Pro includes 100 a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can Synced read the text messages on my iPhone?",
      a: "No. The SMS integration only covers texts sent to a Twilio number you connect. Personal iMessage support is listed as coming soon.",
    },
    {
      q: "Do I need my own Twilio account?",
      a: "Yes. Synced connects to a Twilio account and number you already have. Twilio bills you directly for the number and for messages sent.",
    },
    {
      q: "Can I connect more than one Twilio number?",
      a: "Yes. Add each number from Settings under SMS. Replies go out from whichever number received the text.",
    },
    {
      q: "Why aren't texts to my Twilio number showing up in Synced?",
      a: "Check the number's messaging settings in the Twilio Console. If another app or a change there points incoming texts somewhere else, reconnect SMS in Synced to set it back.",
    },
  ],
};
