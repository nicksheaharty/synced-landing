import type { Page } from "../../types";

export const manageWhatsappBusinessMessages: Page = {
  slug: "/guides/how-to-manage-whatsapp-business-messages",
  cluster: "guide",
  parent: "/guides",
  title: "How to Manage WhatsApp Business Messages | Synced",
  h1: "How to manage WhatsApp Business messages",
  navLabel: "Manage WhatsApp Business messages",
  cardText: "Labels, quick replies, away messages, and the 24-hour rule, set up so customer chats stop piling up.",
  description:
    "Manage WhatsApp Business messages with labels, quick replies, greeting and away messages, linked devices, and a daily triage routine that clears chats.",
  eyebrow: "Guide",
  intro:
    "WhatsApp is where customers ask \"still available?\" at 10 PM and expect an answer by breakfast. A few settings and a short daily routine keep that manageable.",
  answer:
    "To manage WhatsApp Business messages, set up the WhatsApp Business app's built-in tools first: a complete business profile, greeting and away messages, quick replies for common questions, and lists or labels to sort chats by status. Then work the inbox once or twice a day by status rather than by arrival order. Businesses on the WhatsApp Business Platform also need to reply within the 24-hour customer service window, after which only approved template messages can be sent.",
  primaryIntent: "how to manage whatsapp business messages",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "WhatsApp Business app vs. the WhatsApp Business Platform" },
    {
      type: "p",
      text: "Meta offers two ways to run WhatsApp for a business, and the management advice differs. Most small businesses use the free app. Larger teams, or anyone connecting a help desk or CRM, use the Platform (the Cloud API) through a provider.",
    },
    {
      type: "table",
      head: ["", "WhatsApp Business app", "WhatsApp Business Platform"],
      rows: [
        ["Who it's for", "Owners and small teams replying by hand", "Businesses connecting software or handling high volume"],
        ["Where you reply", "The phone app, plus linked devices like WhatsApp Web", "A connected tool such as a help desk, CRM, or inbox app"],
        ["Built-in organization", "Business profile, catalog, labels and lists, quick replies, greeting and away messages", "Whatever the connected tool provides"],
        ["Reply timing rule", "No API window", "Free-form replies within 24 hours of the customer's last message; templates after that"],
      ],
    },
    { type: "h2", text: "Set up the WhatsApp Business app so chats sort themselves" },
    {
      type: "p",
      text: "These settings live in the app's business tools. Menu names shift between Android and iPhone releases, so look for the feature names below rather than an exact path.",
    },
    {
      type: "steps",
      items: [
        { title: "Fill in the business profile", body: "Add a description, email, website, and address. Every question the profile answers, like hours or where you are, is a message you don't have to type." },
        { title: "Write a greeting message", body: "This goes to customers the first time they message you. Say what you can help with and how fast you usually reply. Skip the paragraph about your founding story." },
        { title: "Set an away message on a schedule", body: "Send it outside business hours instead of leaving it on permanently. A customer who gets \"we're away\" at 11 AM on a Tuesday assumes you've closed." },
        { title: "Build quick replies for your top questions", body: "Pricing, availability, hours and location, shipping times, payment methods, and returns cover most small shops. In a chat, type / to pull up your saved quick replies." },
        { title: "Create lists or labels for status", body: "Sort chats by what happens next, not by who the customer is: New lead, Needs follow-up, Paid, Ready for pickup, Support needed. WhatsApp's own small business guidance suggests this kind of sales-cycle grouping." },
        { title: "Link a computer", body: "WhatsApp supports up to four linked devices per account, so you can reply from WhatsApp Web or desktop with a real keyboard while your phone stays in your pocket." },
      ],
    },
    { type: "h2", text: "A daily routine for a busy WhatsApp Business inbox" },
    {
      type: "p",
      text: "The app shows chats newest first, which rewards whoever messaged last. Work by status instead. Two passes a day, late morning and late afternoon, is enough for most small businesses.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open unread chats and label each one before replying. This takes a few seconds per chat and stops you answering an easy question while an order sits unpaid.",
        "Clear Needs follow-up first. These are people you already owe something to.",
        "Answer New lead chats with a quick reply plus one personal line, like their name or the product they asked about.",
        "Move finished chats to Paid or Ready for pickup, or remove the label. A list that only grows stops being useful.",
        "Before closing the app, scan for anything that needs a photo, a price check, or a teammate. Write it down or assign it, so it doesn't wait for the next pass.",
      ],
    },
    { type: "h2", text: "The 24-hour customer service window on the WhatsApp Business Platform" },
    {
      type: "p",
      text: "If your WhatsApp runs through the Platform, every customer message opens a 24-hour customer service window. Inside it, you can send free-form replies. Once it closes, the only messages you can send are pre-approved templates. A customer who asks a question on Friday afternoon and gets an answer on Monday morning gets a template, or nothing.",
    },
    {
      type: "p",
      text: "Practically, that means Platform users need a same-day routine, especially on Fridays. It also means an unanswered chat costs more than a slow reply: it can force a templated message where a personal one would have worked.",
    },
    { type: "h2", text: "WhatsApp Business rules that affect how you reply" },
    {
      type: "list",
      items: [
        "Only message people who gave you their number and opted in to hear from you. The WhatsApp Business Messaging Policy requires both.",
        "Respect opt-outs, including ones that arrive outside WhatsApp, like a customer telling you in store to stop messaging.",
        "If you automate replies, give people a clear way to reach a human, such as an in-chat handoff, a phone number, or email.",
      ],
    },
    { type: "h2", text: "How Synced handles WhatsApp Business messages" },
    {
      type: "p",
      text: "[Synced](/) connects WhatsApp Business as one of its Inboxes, next to Gmail, Slack, Instagram, and the rest. It receives messages sent to your business number, reads them for context, and prepares the reply. Sending any WhatsApp message always waits for your approval. Replies from Synced only work within 24 hours of the customer's last message, the same window described above, so approve WhatsApp drafts the same day.",
    },
    {
      type: "message",
      from: "Marco (customer)",
      source: "whatsapp",
      time: "9:47 PM",
      text: "Hi, is the oak side table still available? Could I pick it up Saturday morning?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked your calendar for Saturday morning and found an open slot at 10:00",
        "Drafted a reply offering 10:00 pickup, with a blank for you to confirm the table is still in stock",
      ],
      caption: "An illustration. The reply waits in Decide until you approve or edit it.",
    },
    {
      type: "p",
      text: "WhatsApp Business is available on Synced's Pro plan. Setup details are on the [WhatsApp Business integration](/integrations/whatsapp-business) page.",
    },
    {
      type: "sources",
      items: [
        { label: "WhatsApp Business app features (WhatsApp Business)", url: "https://whatsappbusiness.com/resources/resource-library/small-business-use-whatsapp-business-app/", checked: "2026-09-13" },
        { label: "Staying organized using lists and quick replies (WhatsApp Business)", url: "https://whatsappbusiness.com/resources/resource-library/staying-organized-smb-using-lists-quick-replies/", checked: "2026-09-13" },
        { label: "How to use quick replies (WhatsApp Help Center)", url: "https://faq.whatsapp.com/1791149784551042", checked: "2026-09-13" },
        { label: "About linked devices on the WhatsApp Business app (WhatsApp Help Center)", url: "https://faq.whatsapp.com/647349420360876", checked: "2026-09-13" },
        { label: "One WhatsApp account, now across multiple phones (WhatsApp Blog)", url: "https://blog.whatsapp.com/one-whatsapp-account-now-across-multiple-phones", checked: "2026-09-13" },
        { label: "Send service messages (Meta for Developers)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages", checked: "2026-09-13" },
        { label: "Template fundamentals (Meta for Developers)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview", checked: "2026-09-13" },
        { label: "WhatsApp Business Messaging Policy", url: "https://whatsappbusiness.com/policy/", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I organize chats in WhatsApp Business?",
      a: "Use lists or labels to group chats by status, such as New lead, Needs follow-up, and Paid, then filter by them when you work the inbox. Sorting by what happens next beats sorting by customer type.",
    },
    {
      q: "Can I use WhatsApp Business on a computer?",
      a: "Yes. WhatsApp supports up to four linked devices, including WhatsApp Web and the desktop app, alongside your phone.",
    },
    {
      q: "Why can't I send a normal reply to a customer after 24 hours?",
      a: "On the WhatsApp Business Platform, free-form replies are allowed only within 24 hours of the customer's last message. After that, you need an approved template. The rule doesn't apply to replying by hand in the WhatsApp Business app.",
    },
    {
      q: "Can WhatsApp Business reply automatically?",
      a: "The app can send a greeting message to new customers and an away message outside your hours. Anything more conversational needs the Platform and a connected tool, and the Messaging Policy requires a clear path to a human.",
    },
  ],
  related: ["/guides/how-to-manage-instagram-business-dms", "/glossary/unified-inbox", "/integrations/whatsapp-business"],
};
