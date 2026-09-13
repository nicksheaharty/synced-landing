import type { Page } from "../types";

export const press: Page = {
  slug: "/press",
  cluster: "company",
  title: "Synced Press Kit: Boilerplate, Founders, and Facts | Synced",
  h1: "Press.",
  navLabel: "Press",
  cardText: "Boilerplate, founder names and titles, product facts, and who to contact.",
  description:
    "Press information for Synced, the AI inbox assistant: a boilerplate description, founders and titles, product facts, and the contact for interviews and a logo pack.",
  eyebrow: "Company",
  intro: "Everything a writer needs to describe Synced accurately, in one place.",
  answer:
    "Synced (syncedinbox.com) is an AI inbox assistant founded by Aum Dhruv, CEO, and Nick Harty, CTO. Synced connects to email, messaging apps, cloud storage, and calendar, prepares replies, documents, and meeting times, and asks for approval before sending anything it drafted. It is in private beta on the web and iOS. Press contact: contact@syncedinbox.com.",
  primaryIntent: "synced press kit media information",
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "book",
  body: [
    { type: "h2", text: "Synced boilerplate" },
    {
      type: "p",
      text: "Synced (syncedinbox.com) is an AI inbox assistant. It connects to email and messaging accounts including Gmail, Outlook, Slack, Microsoft Teams, and WhatsApp Business, along with Google Drive, OneDrive, and Google Calendar. For each incoming message, Synced searches connected sources for context, then drafts replies and documents, proposes meeting times, turns requests into tasks, and tracks follow-ups. Instead of waiting for a prompt, Synced brings people only the decisions that need them, and every AI-drafted message requires the user's approval before it is sent. Synced is in private beta on the web and iOS.",
    },
    { type: "h2", text: "Synced founders" },
    {
      type: "list",
      items: [
        "Aum Dhruv, Chief Executive Officer",
        "Nick Harty, Chief Technology Officer",
      ],
    },
    { type: "p", text: "Background for both founders is on the [team page](/team). Company background is on [About](/about)." },
    { type: "h2", text: "Synced product facts" },
    {
      type: "table",
      head: ["Fact", "Detail"],
      rows: [
        ["Company", "Synced Inc."],
        ["Founded", "2025"],
        ["Headquarters", "San Francisco, California"],
        ["Category", "AI inbox assistant"],
        ["Website", "syncedinbox.com"],
        ["Status", "Private beta, waitlist for early access"],
        ["Platforms", "Web (desktop browsers) and iOS. Android is planned."],
        ["Live Inboxes", "Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, GroupMe"],
        ["Output integrations", "Google Drive, OneDrive, Google Calendar, Outlook calendar"],
        ["Plans", "Free ($0, 20 Action Plans a week), Pro ($29.99/user/month, 100 Action Plans a week), Enterprise (contact sales)"],
        ["Approval", "Every AI-drafted message needs user approval before sending"],
        ["Data", "Google Workspace data is not used to train generalized AI models"],
        ["Sign-in", "Phone number and a 6-digit code"],
        ["Social", "linkedin.com/company/syncedinbox, instagram.com/syncedinbox"],
      ],
    },
    { type: "h2", text: "Press contact and logo pack" },
    {
      type: "p",
      text: "For interviews, product access, or a logo pack, email [contact@syncedinbox.com](mailto:contact@syncedinbox.com). On first mention, \"Synced (syncedinbox.com)\" helps readers tell it apart from other products with similar names.",
    },
  ],
  related: ["/about", "/team", "/contact"],
};
