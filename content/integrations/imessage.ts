import type { Page } from "../types";

export const imessage: Page = {
  slug: "/integrations/imessage",
  cluster: "integration",
  parent: "/integrations",
  title: "iMessage AI Assistant Integration (Coming Soon) | Synced",
  h1: "Synced for iMessage",
  navLabel: "iMessage",
  cardText: "Planned: bring personal texts into Synced alongside email and chat. Not available yet.",
  description:
    "An iMessage integration for Synced, the AI inbox assistant, is coming soon. Here's what it's planned to do and which texting Inboxes you can connect today.",
  eyebrow: "Integration · Inbox",
  intro:
    "iMessage is where a lot of real requests arrive, from clients who have your cell number to family logistics. It isn't connectable in Synced yet.",
  answer:
    "An iMessage integration for Synced, the AI inbox assistant, is listed as coming soon and isn't available today. The plan is for iMessage to work as another Inbox, so texts that ask something of you get the same drafted replies and approvals as email. Until then, Synced connects to business texting through SMS via Twilio and WhatsApp Business.",
  primaryIntent: "imessage ai assistant integration",
  related: ["/integrations/sms", "/integrations/whatsapp-business", "/features/inboxes"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "imessage", plans: "pro", kind: "inbox" },
  body: [
    {
      type: "callout",
      title: "Coming soon",
      text: "iMessage shows as Coming Soon in Synced's Inbox list. There's no release date, and you can't connect it yet.",
    },
    { type: "h2", text: "What an iMessage Inbox in Synced is planned to do" },
    {
      type: "p",
      text: "Synced treats every Inbox the same way. A new message comes in, Synced works out what it's asking, gathers what's needed from your files and calendar, and puts a drafted reply in Decide for you to approve. The iMessage connector is meant to bring your texts into that same flow, next to Gmail, Slack, and the rest.",
    },
    {
      type: "p",
      text: "Picture a client texting \"can you send the invoice again?\" at 9 PM. With iMessage connected, that text would be treated like the same request by email: find the file, draft the reply, wait for your tap. As with every Inbox, nothing would send without your approval.",
    },
    { type: "h2", text: "Texting Inboxes you can connect in Synced today" },
    {
      type: "list",
      items: [
        "[SMS via Twilio](/integrations/sms) reads texts sent to a Twilio business number you own and replies from that number.",
        "[WhatsApp Business](/integrations/whatsapp-business) covers messages to your business number on WhatsApp.",
        "[GroupMe](/integrations/groupme) follows group chats you pick, which is where a lot of club and team texting happens.",
      ],
    },
    {
      type: "p",
      text: "None of these read the personal texts on your iPhone. If most of your requests arrive as iMessages, Synced won't see them yet, and it's fair to wait for this connector before relying on Synced for texting.",
    },
    { type: "h2", text: "How to hear when iMessage support is ready" },
    {
      type: "p",
      text: "Synced is in private beta. [Get early access](/get-started) to join the waitlist, and connect Gmail, Drive, and Calendar on the Free plan in the meantime. Plan availability for iMessage will be listed on [pricing](/pricing) when it ships.",
    },
  ],
  faqs: [
    {
      q: "Can Synced read my iMessages today?",
      a: "No. iMessage is listed as coming soon. The texting Inboxes available now are SMS via Twilio, WhatsApp Business, and GroupMe.",
    },
    {
      q: "Will iMessage work on the Synced web app as well as iOS?",
      a: "Details haven't been announced. Synced's web app and iOS app share the same account and history, so connected Inboxes normally show up in both.",
    },
  ],
};
