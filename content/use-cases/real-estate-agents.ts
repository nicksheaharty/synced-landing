import type { Page } from "../types";

export const realEstateAgents: Page = {
  slug: "/for/real-estate-agents",
  cluster: "use-case",
  parent: "/for",
  title: "AI Assistant for Real Estate Agents: Leads and Showings | Synced",
  h1: "Synced for real estate agents",
  navLabel: "Real estate agents",
  cardText: "Leads from texts, WhatsApp, and Instagram, plus showing requests, drafted for your approval.",
  description:
    "Synced drafts replies to real estate leads from SMS, WhatsApp Business, and Instagram DMs, proposes showing times from Google Calendar, and waits for your approval.",
  eyebrow: "Use case",
  icon: "phone",
  intro:
    "The lead who messages at 9 PM on a Sunday usually goes with whoever answers first. You're at a showing, then an open house, then dinner. Synced reads the message and has the reply and the showing times ready when you look at your phone.",
  answer:
    "Synced, the AI inbox assistant, helps real estate agents answer leads that arrive over SMS through a Twilio number, WhatsApp Business, Instagram Business DMs, Facebook Messenger, and email. It drafts replies, proposes showing times from Google Calendar, and attaches listing sheets or disclosures from Google Drive or OneDrive. Every reply waits for the agent's approval, and Synced is not a real estate CRM.",
  primaryIntent: "ai assistant for real estate agents leads and showings",
  published: "2026-09-13",
  updated: "2026-09-13",
  related: ["/for/small-business-owners", "/for/sales", "/integrations/sms", "/guides/how-to-manage-whatsapp-business-messages"],
  body: [
    { type: "h2", text: "Where real estate leads actually come from" },
    {
      type: "p",
      text: "Buyers text the number on the yard sign, message the brokerage Instagram after a listing post, reply on WhatsApp because that's what their family uses, and email when there's a document involved. A lead is a lead regardless of the app, and the speed of the first reply matters more than its polish.",
    },
    {
      type: "p",
      text: "Synced connects those channels as Inboxes, reads each new message, and drafts a reply with what the lead asked for: a showing time, the listing details, the next step. You approve from the iOS app between appointments.",
    },
    { type: "h2", text: "Lead replies and showing requests Synced drafts for agents" },
    { type: "h3", text: "A buyer asks to see a listing" },
    {
      type: "message",
      from: "Ana (buyer lead)",
      source: "whatsapp",
      time: "Sunday 8:47 PM",
      text: "Hi, saw the 3-bed on Maple St. Is it still available? Could we see it this week, ideally after 5?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Google Calendar and found Tuesday 5:30 and Thursday 6:00 open",
        "Drafted a reply confirming the listing is active and offering both times",
      ],
      caption: "Illustration. You confirm availability and approve before it's sent on WhatsApp.",
    },
    {
      type: "p",
      text: "Synced doesn't know whether a listing is still active unless that's in a connected file or an earlier message. If it isn't, the draft leaves that line for you, and the question shows up in Decide.",
    },
    { type: "h3", text: "A seller emails about disclosures" },
    {
      type: "message",
      from: "Robert (seller client)",
      source: "gmail",
      time: "7:32 AM",
      text: "The buyer's agent is asking for the inspection report and the HOA documents again. Can you send them over and let me know where we are on the counteroffer?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the inspection report and HOA packet in Google Drive",
        "Drafted an email to the buyer's agent with both attached",
        "Drafted a reply to Robert summarizing the last message from the buyer's agent about the counter",
      ],
      file: "HOA_Documents_Maple.pdf",
      caption: "Illustration. Two drafts, each approved separately.",
    },
    { type: "h3", text: "An Instagram DM after a listing post" },
    {
      type: "message",
      from: "Jamal (buyer lead)",
      source: "instagram",
      time: "Saturday 11:09 AM",
      text: "Saw the new listing on Birch Ave. What's the asking price, and which school district is it in?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the list price in the Birch Ave listing sheet in Google Drive",
        "Drafted a DM reply with the price and a question about their timeline, leaving the school district for you to confirm",
      ],
      caption: "Illustration. Instagram only allows free-form replies within 24 hours of the lead's last message.",
    },
    {
      type: "p",
      text: "Synced covers Instagram DMs. One-word \"price?\" comments on listing posts still need a reply from Instagram itself.",
    },
    { type: "h2", text: "Which channels to connect as an agent" },
    {
      type: "table",
      head: ["Connect", "What comes through it"],
      rows: [
        ["[SMS](/integrations/sms)", "Texts to a Twilio number, such as the one on your signs or listing ads. Texts to your personal cell aren't included."],
        ["[WhatsApp Business](/integrations/whatsapp-business)", "Buyers and sellers who prefer WhatsApp, including international clients."],
        ["[Instagram Business](/integrations/instagram-business)", "DMs from people who saw your listing posts."],
        ["[Messenger](/integrations/messenger)", "Conversations with your Facebook Page."],
        ["[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook)", "Portal lead emails, other agents, lenders, and title."],
        ["[Google Calendar](/integrations/google-calendar)", "Showing and listing appointment times."],
        ["[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive)", "Listing sheets, disclosures, and HOA documents to attach."],
      ],
      caption: "SMS, WhatsApp Business, Instagram Business, Messenger, and Outlook are on the Pro plan.",
    },
    { type: "h2", text: "Where Synced isn't the right tool for real estate" },
    {
      type: "list",
      items: [
        "It isn't a real estate CRM. It doesn't store lead records, run drip campaigns, or report on lead sources. Keep your CRM for that; Synced has no CRM integrations today.",
        "It doesn't read the MLS or listing portals. Availability and pricing come from files and messages you've connected, so check anything time-sensitive.",
        "It can't reply on WhatsApp, Instagram, or Messenger after the 24-hour window. Meta only allows free-form replies within 24 hours of the lead's last message, so approve those drafts the same day.",
        "It doesn't cover iMessage or your personal phone number. iMessage is listed as coming soon.",
        "It doesn't handle transaction paperwork or e-signatures.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can Synced reply to real estate leads by text message?",
      a: "Yes, for texts sent to a Twilio number connected as an SMS Inbox. Synced drafts the reply and sends it from that number after you approve it. Texts to a personal cell number aren't supported.",
    },
    {
      q: "Does Synced integrate with real estate CRMs like Follow Up Boss?",
      a: "No. Synced has no live CRM integrations. It handles the conversations; your CRM stays the record of leads and deals.",
    },
    {
      q: "Can I approve replies from my phone?",
      a: "Yes. The iOS app shows the same account and drafts as the web app, so you can review and approve replies between showings. Android is planned without a date.",
    },
  ],
};
