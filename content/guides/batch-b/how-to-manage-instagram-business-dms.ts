import type { Page } from "../../types";

export const manageInstagramBusinessDms: Page = {
  slug: "/guides/how-to-manage-instagram-business-dms",
  cluster: "guide",
  parent: "/guides",
  title: "How to Manage Instagram Business DMs | Synced",
  h1: "How to manage Instagram business DMs",
  navLabel: "Manage Instagram business DMs",
  cardText: "Primary and General tabs, message requests, saved replies, and Meta Business Suite automations for a DM inbox that keeps up.",
  description:
    "Manage Instagram business DMs with the Primary and General tabs, message requests, saved replies, and Meta Business Suite's inbox and automations.",
  eyebrow: "Guide",
  intro:
    "An Instagram business inbox mixes real customers, collab pitches, spam, and people replying to a story with a single fire emoji. The goal is to see the first group fast and spend almost no time on the rest.",
  answer:
    "To manage Instagram business DMs, switch to a professional account, use the Primary tab for conversations that need a reply and General for everything else, and review message requests on a schedule. Create saved replies for common questions. If you also run a Facebook Page or have a team, use the Inbox in Meta Business Suite, which puts Instagram, Messenger, and comments in one place and adds automated responses and conversation assignment.",
  primaryIntent: "how to manage instagram business dms",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Switch to a professional account first" },
    {
      type: "p",
      text: "Most inbox tools on Instagram, including the two-tab inbox, saved replies, and Meta Business Suite, are only available on professional accounts (Business or Creator). If you sell or book work through Instagram and still run a personal account, switching is free and comes before everything else in this guide.",
    },
    { type: "h2", text: "Use the Primary and General tabs as a triage line" },
    {
      type: "p",
      text: "A professional account's inbox has two tabs, Primary and General, and you can move conversations between them. New conversations from followers start in Primary. You can filter either tab by read, unread, or flagged.",
    },
    {
      type: "p",
      text: "Give the tabs a rule and stick to it. A simple one: Primary is for anyone who might pay you or who you owe a reply. General is for friends, fans, and collab pitches you'll read when you have time. When you've answered a customer and the conversation is done, move it to General so Primary stays short.",
    },
    {
      type: "table",
      head: ["Tab or filter", "Put here", "Check"],
      rows: [
        ["Primary", "Customers, active leads, bookings, anyone waiting on you", "Twice a day"],
        ["General", "Finished conversations, fans, low-priority pitches", "Once or twice a week"],
        ["Flagged", "Anything needing a follow-up, a quote, or a teammate", "Every time you open Primary"],
        ["Message requests", "People you don't follow who messaged you for the first time", "Once a day"],
      ],
    },
    { type: "h2", text: "Handle message requests without losing customers" },
    {
      type: "p",
      text: "Messages from accounts you don't follow and haven't accepted before land in message requests. You can accept or decline each one, and the sender isn't shown that you've seen the message until you accept. For a business, a lot of first-time customers arrive here.",
    },
    {
      type: "list",
      items: [
        "Check requests daily. A customer who asks about stock and hears nothing for a week has bought it somewhere else.",
        "Accept real inquiries and move them to Primary right away.",
        "Use Instagram's hidden-requests controls to filter offensive messages rather than scrolling through them.",
        "Decline obvious spam in bulk. Don't reply to it, including to say no.",
      ],
    },
    { type: "h2", text: "Create saved replies for the questions you answer every day" },
    {
      type: "p",
      text: "Professional accounts can save reusable replies in the app's business or creator tools and insert them in a conversation with a short shortcut. Start with the five questions you typed most last week. Typical ones: price, availability or sizes, shipping or turnaround, how to book, and where to find you.",
    },
    {
      type: "template",
      label: "Saved reply: pricing",
      text: "Hi, thanks for asking. [Product/service] starts at [price], and [what's included]. You can order at [link], or tell me [size/date] and I'll check it for you.",
    },
    {
      type: "p",
      text: "Keep each saved reply to two or three sentences with one next step. Then add one personal line before sending, like their name or the photo they asked about. People can tell when the whole message is canned.",
    },
    { type: "h2", text: "Use Meta Business Suite Inbox for teams and Facebook Pages" },
    {
      type: "p",
      text: "If more than one person answers messages, or you also have a Facebook Page, the phone app gets cramped. Meta Business Suite's Inbox shows Instagram messages, Messenger conversations, and comments from both in one place, on desktop.",
    },
    {
      type: "steps",
      items: [
        { title: "Connect your Instagram account to Meta Business Suite", body: "Link the professional account to the Business Suite that manages your Facebook Page, so both inboxes show up together." },
        { title: "Assign conversations", body: "Assign each conversation to the teammate who owns it. Assignment stops two people answering the same customer and makes it obvious when something has no owner." },
        { title: "Set up automations", body: "Under Automations, Meta offers an instant reply to someone's first message, an away message outside business hours, suggested answers for up to 5 frequently asked questions, and custom keyword replies." },
        { title: "Work comments from the same screen", body: "Comments asking \"price?\" or \"DM me\" are leads too. Reply, or move them to DMs, from the same inbox instead of opening every post." },
      ],
    },
    {
      type: "callout",
      title: "About third-party DM tools and the 24-hour window",
      text: "Apps that send Instagram messages through Meta's API have a 24-hour standard messaging window after a person's last message. Meta's Human Agent feature lets a person, not an automation, reply up to 7 days after. If you use a help desk or scheduling tool for DMs, this is why late replies sometimes fail to send.",
    },
    { type: "h2", text: "A 15-minute Instagram DM routine" },
    {
      type: "list",
      ordered: true,
      items: [
        "Open message requests. Accept customers, decline spam.",
        "Open Primary, filter to unread. Answer with saved replies plus one personal line.",
        "Flag anything that needs a quote, a photo, or a teammate, and do those next or assign them.",
        "Move finished conversations to General.",
        "Open comments on your last three posts and answer the questions buried there.",
      ],
    },
    { type: "h2", text: "How Synced handles Instagram Business DMs" },
    {
      type: "p",
      text: "[Synced](/) connects Instagram Business as an Inbox for DMs. It receives DMs sent to your professional account, reads them for context alongside your other Inboxes, and drafts the reply. Sending any DM always waits for your approval in Decide, and because Meta's 24-hour window applies, replies from Synced only go out within 24 hours of the person's last message. Comments still need Instagram or Meta Business Suite.",
    },
    {
      type: "p",
      text: "For example, a DM at 11 PM asking \"do you have a slot for a consult next Thursday?\" becomes a drafted reply with open times from your connected calendar, ready to approve in the morning, well inside the window. Instagram Business is available on Synced's Pro plan. More on the [Instagram Business integration](/integrations/instagram-business) page.",
    },
    {
      type: "sources",
      items: [
        { label: "About professional features in Instagram Direct (Meta Business Help Center)", url: "https://www.facebook.com/business/help/1264898753662278", checked: "2026-09-13" },
        { label: "Manage message requests on Instagram (Instagram Help Center)", url: "https://help.instagram.com/585369912141614", checked: "2026-09-13" },
        { label: "Hide comments or message requests you don't want to see (Instagram Help Center)", url: "https://help.instagram.com/700284123459336", checked: "2026-09-13" },
        { label: "Manage messages with Inbox in Meta Business Suite (Meta Business Help Center)", url: "https://www.facebook.com/business/help/294426838452244", checked: "2026-09-13" },
        { label: "About automated responses in Meta Business Suite Inbox (Meta Business Help Center)", url: "https://www.facebook.com/business/help/395965998733706", checked: "2026-09-13" },
        { label: "Assign conversations in Inbox (Meta Business Help Center)", url: "https://www.facebook.com/business/help/1200925110276123", checked: "2026-09-13" },
        { label: "Messenger Platform and Instagram Messaging API policy (Meta for Developers)", url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy", checked: "2026-09-13" },
        { label: "Human Agent feature (Meta for Developers)", url: "https://developers.facebook.com/docs/features-reference/human-agent", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "What's the difference between Primary and General on Instagram?",
      a: "Both are tabs in a professional account's inbox. New conversations from followers start in Primary, and you can move any conversation to General. Most businesses use Primary for people waiting on a reply and General for everything else.",
    },
    {
      q: "Why am I not seeing some Instagram DMs?",
      a: "Messages from accounts you don't follow go to message requests, and some are filtered into hidden requests. Check both, especially if you expect first-time customers.",
    },
    {
      q: "Can I auto-reply to Instagram DMs?",
      a: "Yes, through Meta Business Suite's Inbox automations: an instant reply to first messages, an away message, answers to frequently asked questions, and keyword-based replies.",
    },
    {
      q: "Can more than one person manage an Instagram business inbox?",
      a: "Yes. Meta Business Suite lets people with access to your business manage the Inbox, and conversations can be assigned to specific teammates so nothing is answered twice.",
    },
  ],
  related: ["/guides/how-to-manage-whatsapp-business-messages", "/glossary/inbox-connector", "/integrations/instagram-business"],
};
