import type { Page } from "../types";

export const instagramBusiness: Page = {
  slug: "/integrations/instagram-business",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Instagram Business DMs | Synced",
  h1: "Synced for Instagram Business",
  navLabel: "Instagram Business",
  cardText: "Reads DMs to your professional account and drafts answers to shipping, stock, and booking questions.",
  description:
    "Synced is an AI assistant for Instagram Business DMs. It reads messages to your professional account, finds the answer, and drafts a DM reply for your approval.",
  eyebrow: "Integration · Inbox",
  intro:
    "Instagram DMs pile up with the same five questions, asked slightly differently each time. Synced reads them, finds the answer in your files, and drafts the DM.",
  answer:
    "Synced, the AI inbox assistant, connects to an Instagram professional account through Meta's login, using the Facebook Page the account is linked to. It reads DMs sent to the account, looks up answers in your connected files and calendar, and drafts a reply that sends as a DM only after you approve it. Instagram only allows replies within 24 hours of the person's last message. Instagram Business is part of the Pro plan.",
  primaryIntent: "ai assistant for instagram business dms",
  related: ["/integrations/messenger", "/integrations/whatsapp-business", "/guides/how-to-manage-instagram-business-dms"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "instagram", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with an Instagram DM" },
    {
      type: "p",
      text: "A small clothing shop gets a DM after posting a restock. One question has a documented answer. The other depends on what's on the shelf right now, and only you know that.",
    },
    {
      type: "message",
      from: "Jess (shopper)",
      source: "instagram",
      time: "9:26 PM",
      text: "do you ship to Canada?? and is the linen set back in medium",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found your shipping policy in Google Drive: Canada is covered, 5 to 8 business days",
        "Asked you in Decide whether the linen set is back in medium, then drafted the DM around your answer",
      ],
      caption: "An example only. Synced answers from your own documents and asks you about anything it can't look up.",
    },
    {
      type: "p",
      text: "You tap \"yes, two left\" in Decide, check the draft, and approve. The DM goes out from your shop's Instagram account.",
    },
    { type: "h2", text: "What you can hand off in Instagram DMs" },
    {
      type: "features",
      items: [
        { icon: "book", title: "Policy questions", body: "Shipping, returns, sizing, and hours get answered from the documents you keep in Drive or OneDrive, so the answer matches what you've published." },
        { icon: "calendar", title: "Booking requests", body: "Salons, studios, and photographers get replies with open times from a connected calendar." },
        { icon: "folder", title: "Files and images", body: "A price sheet or lookbook can be attached to the DM you approve." },
        { icon: "question", title: "Stock, pricing exceptions, collabs", body: "Anything that depends on your judgment is asked in Decide first." },
      ],
    },
    { type: "h2", text: "What to set up on Instagram before connecting" },
    {
      type: "list",
      items: [
        "The Instagram account needs to be a professional account (business or creator), not a personal one.",
        "It needs to be linked to a Facebook Page, because Meta routes Instagram messaging through that Page.",
        "You need access to that Page and its business in Meta, since you'll pick them during login.",
      ],
    },
    { type: "h2", text: "How to connect Instagram Business to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Choose Instagram Business under Inboxes in the web app or on iOS." },
        { title: "Review the permissions sheet", body: "Synced receives and reads DMs sent to your professional account. Sending any DM is listed as needing your direct approval." },
        { title: "Log in with Facebook", body: "Meta's login asks which Pages and Instagram accounts to share. Pick the Page linked to your shop's Instagram." },
        { title: "Test it", body: "Send the account a DM from another profile. It shows up in Synced with the Instagram label." },
      ],
    },
    { type: "h2", text: "Meta permissions Synced requests for Instagram" },
    {
      type: "table",
      head: ["Access on Meta's screen", "What Synced uses it for"],
      rows: [
        ["Show a list of the Pages you manage", "Let you pick the Page your Instagram account is linked to."],
        ["Access your Instagram account's basic info", "Show which account a DM came to."],
        ["Manage and access Instagram messages", "Read incoming DMs and send replies you've approved."],
        ["Manage Page metadata and business assets", "Turn on message notifications for the Page and account you chose."],
      ],
      caption: "Meta shows these on its login screen, and you choose which Pages and accounts to share.",
    },
    { type: "h2", text: "Which Synced plan includes Instagram Business" },
    {
      type: "p",
      text: "Instagram Business is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Each DM Synced acts on counts as one Action Plan, and Pro includes 100 a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can I connect a personal Instagram account?",
      a: "No. Meta only allows apps to handle messages for professional Instagram accounts linked to a Facebook Page. Switching an account to professional is free in Instagram's settings.",
    },
    {
      q: "Why can't Synced reply to an old Instagram DM?",
      a: "Instagram only allows replies within 24 hours of the person's last message. If the window has passed, wait for them to message again.",
    },
    {
      q: "Does connecting Instagram also connect Messenger for my Facebook Page?",
      a: "No. They use the same Meta login but connect separately. Add [Messenger](/integrations/messenger) from Settings if you also want Page conversations in Synced.",
    },
    {
      q: "Will Synced post or comment on my Instagram?",
      a: "No. Synced works with DMs. It doesn't publish posts, stories, or comments.",
    },
  ],
};
