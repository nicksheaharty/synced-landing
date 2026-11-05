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
    "Synced (syncedinbox.com) is an AI inbox for high-volume admin assistants, founded by Aum Dhruv, CEO, and Nick Harty, CTO. Synced reads incoming email, Slack, Teams, and text messages, prepares replies, files, and meeting times, and asks for approval before sending anything it drafted. It is in private beta on the web and iOS. Press contact: contact@syncedinbox.com.",
  primaryIntent: "synced press kit media information",
  published: "2026-09-13",
  updated: "2026-11-05",
  icon: "book",
  body: [
    { type: "h2", text: "Synced boilerplate" },
    {
      type: "p",
      text: "Synced (syncedinbox.com) is an AI inbox for high-volume admin assistants. It reads everything that comes in for the people an assistant supports, across Gmail, Outlook, Slack, Microsoft Teams, and text messages, and gets the work ready before the assistant opens it. When someone asks to meet, Synced finds a time that's open; when someone asks for a file, it finds the file in Google Drive or OneDrive and attaches it; replies are drafted the way the executive writes. The assistant approves each item from a card stack, and nothing is sent without approval. Synced is built for assistants rather than to replace them, and busy professionals use it for their own inbox too. Synced is in private beta on the web and iOS.",
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
        ["Category", "AI inbox for admin assistants"],
        ["Audience", "Executive and admin assistants, office managers, chiefs of staff; also founders, sales, recruiters, and consultants"],
        ["Website", "syncedinbox.com"],
        ["Status", "Private beta, waitlist for early access"],
        ["Usage", "More than 70% of users' sent messages go through Synced; more than 11,000 tasks completed"],
        ["Platforms", "Web (desktop browsers) and iOS. Android is planned."],
        ["Live Inboxes", "Gmail, Outlook, Slack, Microsoft Teams, SMS via Twilio; also WhatsApp Business, Instagram Business, Messenger, GroupMe"],
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
