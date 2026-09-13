import type { Page } from "../types";

export const whatsappBusiness: Page = {
  slug: "/integrations/whatsapp-business",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for WhatsApp Business Messages | Synced",
  h1: "Synced for WhatsApp Business",
  navLabel: "WhatsApp Business",
  cardText: "Reads messages to your business number and drafts WhatsApp replies with prices, times, and files.",
  description:
    "Synced is an AI assistant for WhatsApp Business. It reads messages sent to your business number and drafts replies with files and open times for approval.",
  eyebrow: "Integration · Inbox",
  intro:
    "Customer messages on WhatsApp arrive at all hours and usually ask for something specific. Synced reads each message to your business number and has the reply, the price list, or the booking time ready for you to approve.",
  answer:
    "Synced, the AI inbox assistant, connects to a WhatsApp Business number through Meta's business login. It reads messages customers send to that number, checks your calendar and files for the answer, and drafts a WhatsApp reply that sends only after you approve it. Replies follow WhatsApp's 24-hour rule for free-form messages. WhatsApp Business is part of the Pro plan.",
  primaryIntent: "ai assistant for whatsapp business",
  related: ["/integrations/instagram-business", "/integrations/messenger", "/guides/how-to-manage-whatsapp-business-messages"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "whatsapp", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a WhatsApp Business message" },
    {
      type: "p",
      text: "A regular customer of a small studio asks two things in one message. One answer lives in your calendar, the other in a PDF you've sent a hundred times.",
    },
    {
      type: "message",
      from: "Luis (customer)",
      source: "whatsapp",
      time: "7:03 AM",
      text: "Hi, is the 10am slot on Saturday still free? Also can you send the price list again, I lost it",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Checked your calendar: Saturday 10:00 is open",
        "Found Price_List_Autumn.pdf in Google Drive",
        "Drafted a WhatsApp reply holding the slot, with the price list attached",
      ],
      file: "Price_List_Autumn.pdf",
      caption: "The draft waits in Decide. Approve it before your first coffee and Luis has an answer.",
    },
    {
      type: "p",
      text: "WhatsApp replies are written like WhatsApp messages: short, plain text, no email-style sign-off. Files go out as documents, and images go out as images.",
    },
    { type: "h2", text: "What you can hand off on WhatsApp" },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "Booking questions", body: "Synced checks your connected calendar before saying a slot is free, and can suggest other times when it isn't." },
        { icon: "folder", title: "Menus, price lists, forms", body: "The file a customer asks for gets found in Drive or OneDrive and attached to the reply." },
        { icon: "question", title: "Questions only you can answer", body: "Refunds, discounts, and exceptions can go to Decide as a question for you before any reply is drafted." },
        { icon: "chat", title: "One list with your other Inboxes", body: "WhatsApp conversations sit next to email, Instagram, and Messenger in Synced, so you're not checking four apps." },
      ],
    },
    { type: "h2", text: "WhatsApp's 24-hour reply window" },
    {
      type: "p",
      text: "WhatsApp only allows free-form business replies within 24 hours of the customer's last message. Synced works inside that rule, so once the window closes it can't send a free-form reply for you. The customer needs to message you again, or you can send an approved message template yourself from WhatsApp Manager.",
    },
    { type: "h2", text: "How to connect WhatsApp Business to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Choose WhatsApp Business under Inboxes, in the web app or on iOS." },
        { title: "Review the permissions sheet", body: "Synced receives and reads messages sent to your business number. Sending any WhatsApp message is listed as needing your direct approval." },
        { title: "Log in with Facebook and pick your business", body: "Meta's login asks which business and WhatsApp Business account to share. Choose the one that owns the number customers message." },
        { title: "Send yourself a test message", body: "Message the business number from another phone and it shows up in Synced's conversation list." },
      ],
    },
    { type: "h2", text: "Meta permissions Synced requests for WhatsApp" },
    {
      type: "table",
      head: ["Access on Meta's screen", "What Synced uses it for"],
      rows: [
        ["Manage your WhatsApp Business accounts", "Find the business number you chose and receive its messages."],
        ["Send and receive WhatsApp messages", "Read incoming messages and send replies you've approved."],
        ["Business management", "See which business and WhatsApp account you picked during login."],
      ],
      caption: "Meta lists these on its login screen. You choose which business assets to share.",
    },
    { type: "h2", text: "Which Synced plan includes WhatsApp Business" },
    {
      type: "p",
      text: "WhatsApp Business is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Each customer message Synced acts on is one Action Plan, and Pro includes 100 a week. Messages past the limit still arrive and wait for the weekly reset. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Does Synced connect to my personal WhatsApp?",
      a: "No. Synced connects to a WhatsApp Business number through Meta's business login. Personal WhatsApp chats aren't part of it.",
    },
    {
      q: "Why couldn't Synced reply to a customer who messaged two days ago?",
      a: "WhatsApp blocks free-form business replies more than 24 hours after the customer's last message. Ask them to message you, or send an approved template from WhatsApp Manager.",
    },
    {
      q: "Can Synced send photos and PDFs on WhatsApp?",
      a: "Yes. Files you approve with the reply are sent after the text, as images or documents depending on the file type.",
    },
    {
      q: "What does the number need before I can connect it?",
      a: "It needs to be a WhatsApp Business number under a Meta business account you manage, since that's what Meta's login lets you share. If you can't find it during login, check that the number is set up in WhatsApp Manager.",
    },
  ],
};
