import type { Page } from "../types";

export const smallBusinessOwners: Page = {
  slug: "/for/small-business-owners",
  cluster: "use-case",
  parent: "/for",
  title: "AI Assistant for Small Business Customer Messages | Synced",
  h1: "Synced for small business owners",
  navLabel: "Small business owners",
  cardText: "Customer questions from WhatsApp, Instagram DMs, Messenger, texts, and email, answered from one place.",
  description:
    "Synced drafts replies to customer messages from WhatsApp Business, Instagram DMs, Messenger, SMS, and email in one place, so small business owners stop missing bookings.",
  eyebrow: "Use case",
  icon: "chat",
  intro:
    "Your customers don't pick one channel. One books on Instagram, one texts, one sends a WhatsApp voice-note-length paragraph, and your supplier still uses email. Synced pulls those into one list and drafts the replies.",
  answer:
    "Synced, the AI inbox assistant, helps small business owners answer customers across WhatsApp Business, Instagram Business DMs, Facebook Messenger, SMS through a Twilio number, Gmail, and Outlook from one place. For each message it drafts a reply, checks Google Calendar when someone asks for a time, and finds files in Google Drive or OneDrive. Nothing is sent until the owner approves it.",
  primaryIntent: "ai assistant for small business customer messages",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/real-estate-agents", "/for/founders", "/integrations/whatsapp-business", "/guides/how-to-manage-instagram-business-dms"],
  body: [
    { type: "h2", text: "Why customer messages slip at a small business" },
    {
      type: "p",
      text: "A salon, a bakery with custom orders, a two-van plumbing company: the owner is also the front desk. Messages come in between appointments, on four apps, and the one that gets missed is usually a paying customer asking \"are you open Saturday?\" on a channel you checked this morning.",
    },
    {
      type: "p",
      text: "Most inbox tools stop at email. Synced also connects the messaging apps local and service businesses actually get customers on, and treats every message the same way: read it, work out what the customer needs, and have a reply ready.",
    },
    { type: "h2", text: "Customer messages Synced handles for a small business" },
    { type: "h3", text: "A booking request on WhatsApp Business" },
    {
      type: "message",
      from: "Rosa (customer)",
      source: "whatsapp",
      time: "8:21 PM",
      text: "Hi, do you have anything Thursday afternoon for a color touch-up? Around 3 would be ideal.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar: 3:00 is booked, 3:45 and 4:30 are open",
        "Drafted a reply offering 3:45 or 4:30 on Thursday",
      ],
      caption: "Illustration. You approve the reply before it's sent back on WhatsApp.",
    },
    { type: "h3", text: "A price question from an Instagram DM" },
    {
      type: "message",
      from: "Mia (customer)",
      source: "instagram",
      time: "1:16 PM",
      text: "Love the cake in your last post. How much would something like that be for 20 people?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Searched Google Drive and found your custom cake price sheet",
        "Drafted a DM reply with the price range for 20 servings and a question about the date",
      ],
      caption: "Illustration. Meta only allows free-form replies within 24 hours of the customer's last message, so approve this one the same day.",
    },
    {
      type: "p",
      text: "Synced covers Instagram DMs. Questions left as comments on a post still need a reply from Instagram or Meta Business Suite.",
    },
    { type: "h3", text: "A supplier email with an invoice question" },
    {
      type: "message",
      from: "Dev (supplier)",
      source: "gmail",
      time: "10:05 AM",
      text: "Can you confirm the order quantity on invoice 2231 before we ship? We have 40 cases listed.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the purchase order in Google Drive showing 48 cases",
        "Drafted a reply pointing out the difference and asking them to correct the invoice",
      ],
      file: "PO_June_order.pdf",
      caption: "Illustration. Synced flags the mismatch; you decide what to send.",
    },
    { type: "h2", text: "Which channels to connect for a local or service business" },
    {
      type: "p",
      text: "Connect the channels your customers already use. Inboxes are unlimited on every plan, so there's no reason to leave one out.",
    },
    {
      type: "table",
      head: ["Connect", "What comes through it"],
      rows: [
        ["[WhatsApp Business](/integrations/whatsapp-business)", "Booking requests, order updates, and customers who prefer chat to calling."],
        ["[Instagram Business](/integrations/instagram-business)", "DMs, often price and availability questions about a post."],
        ["[Messenger](/integrations/messenger)", "Conversations with your Facebook Page."],
        ["[SMS](/integrations/sms)", "Texts sent to your Twilio number. Texts to a personal cell number aren't included."],
        ["[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook)", "Suppliers, invoices, landlords, and the customers who still email."],
        ["[Google Calendar](/integrations/google-calendar)", "Open slots when someone asks for an appointment."],
        ["[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive)", "Price sheets, menus, and purchase orders Synced can quote from or attach."],
      ],
      caption: "The Free plan covers Gmail, Google Drive, OneDrive, and Google Calendar. WhatsApp Business, Instagram Business, Messenger, SMS, and Outlook need Pro.",
    },
    {
      type: "callout",
      title: "You need business accounts for the social channels",
      text: "Synced connects to WhatsApp Business, Instagram Business accounts, and Facebook Page conversations in Messenger. Personal WhatsApp, a personal Instagram profile, and iMessage aren't supported today; iMessage is listed as coming soon.",
    },
    { type: "h2", text: "Where Synced isn't the right tool for a small business" },
    {
      type: "list",
      items: [
        "It isn't a booking system. It proposes open times from Google Calendar, but it doesn't take deposits, send reminders, or replace your appointment software.",
        "It isn't a point-of-sale or invoicing tool. Payment and accounting apps like Stripe and QuickBooks are only listed as coming soon in the app.",
        "It doesn't auto-reply. If you want a bot that answers instantly at 2 AM without you, Synced isn't built for that. Every draft waits for your approval.",
        "It can't restart a cold conversation on Meta's apps. WhatsApp, Instagram, and Messenger only allow free-form replies within 24 hours of the customer's last message, so a reply you approve on day two won't go through there. Answer those the same day, or move the customer to email or text.",
        "It isn't a shared team inbox. Each person connects their own accounts, so a front desk team working one WhatsApp number together isn't the use case it's designed around.",
      ],
    },
    { type: "h2", text: "What it costs a small business" },
    {
      type: "p",
      text: "Free is $0 with 20 Action Plans a week, but it only covers Gmail, Drive, OneDrive, and Calendar. To bring in WhatsApp, Instagram, Messenger, or texts, you need Pro at $29.99 a month, or $24.99 a month billed annually, which covers 100 Action Plans a week. One customer message is one Action Plan. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Can I manage WhatsApp Business and Instagram DMs in one app?",
      a: "Yes. Connect both as Inboxes in Synced and their messages show up in one list alongside email, Messenger, and texts. Each reply goes back out on the channel it came from after you approve it.",
    },
    {
      q: "Does Synced answer customers automatically?",
      a: "No. Synced drafts each reply and waits for you to approve or edit it. That keeps prices, promises, and appointment times under your control.",
    },
    {
      q: "Can Synced read texts to my personal phone number?",
      a: "Not today. The SMS connector works with texts sent to a Twilio number. iMessage is listed as coming soon.",
    },
    {
      q: "Does it work with Instagram comments, or only DMs?",
      a: "DMs. The Instagram Business connector brings in direct messages to your business account. Reply to post comments in Instagram or Meta Business Suite.",
    },
  ],
};
