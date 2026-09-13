import type { Page } from "../types";
import { CHECKED, compareRows, otherCompares } from "./shared";

const SLUG = "/compare/synced-vs-copilot-in-outlook";

export const syncedVsCopilotInOutlook: Page = {
  slug: SLUG,
  cluster: "compare",
  parent: "/compare",
  title: "Synced vs Copilot in Outlook: AI Email Help Compared | Synced",
  h1: "Synced vs Copilot in Outlook",
  navLabel: "Synced vs Copilot in Outlook",
  cardText: "Microsoft's AI built into Outlook and Microsoft 365, compared with an assistant that also covers Gmail, Slack, and WhatsApp.",
  description:
    "Synced vs Copilot in Outlook: Copilot drafts and summarizes inside Microsoft 365 apps. Synced drafts across Outlook, Gmail, Slack, and WhatsApp for approval.",
  eyebrow: "Compare",
  intro:
    "Microsoft 365 Copilot puts drafting and summaries inside Outlook, Word, Teams, and the rest of the Microsoft 365 apps. Synced connects to Outlook as one Inbox among several and prepares replies before you open them.",
  answer:
    "Pick Copilot in Outlook if your organization runs on Microsoft 365, wants AI inside Outlook, Word, Excel, and Teams under one Microsoft agreement, and needs Outlook apps on Windows, Mac, iOS, and Android. Pick Synced, the AI inbox assistant, if you also use Gmail, Slack, or WhatsApp Business, or want each new message turned into a ready draft without prompting. Synced is in private beta; Microsoft 365 Copilot is generally available.",
  primaryIntent: "synced vs copilot in outlook",
  related: ["/compare/synced-vs-gemini-in-gmail", "/integrations/outlook", "/pricing", "/security"],
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Synced and Copilot in Outlook side by side" },
    {
      type: "p",
      text: "Copilot details come from Microsoft's Copilot pricing pages, Microsoft Support articles, and Microsoft Learn, checked on September 13, 2026. Microsoft sells Copilot several ways, so the price row lists the business add-on, the enterprise license, and the consumer plans separately.",
    },
    {
      type: "table",
      head: ["", "Copilot in Outlook", "Synced"],
      rows: compareRows({
        Price: "Microsoft 365 Copilot Business add-on $21/user/month paid yearly (promo price shown: $18), $25.20 paid monthly. Microsoft 365 Copilot (enterprise) $30/user/month paid yearly. Both need a qualifying Microsoft 365 plan. Individuals: Microsoft 365 Personal $9.99/month, Premium $19.99/month",
        "Free plan": "Microsoft lists Microsoft 365 Copilot Chat as included for business users. Copilot Business has a free trial; individual plans list a 1-month trial",
        Platforms: "Outlook for Microsoft 365, new Outlook for Windows, Outlook for Mac, iOS, and Android",
        "Email providers": "Microsoft work or school accounts and Microsoft consumer accounts. Gmail, Yahoo, or iCloud in new Outlook only when linked to a Microsoft 365 subscription on the same email identity",
        "Other channels": "Copilot also works in Microsoft Teams, Word, Excel, and PowerPoint. Slack and WhatsApp not listed",
        "AI drafting": "Yes. Draft with Copilot writes full drafts from a prompt and the thread, with tone and length options",
        "Sends without approval": "No. In Outlook you review the draft, keep it, edit, then select Send",
        "Model training policy": "Prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs",
        Status: "Generally available",
      }),
      caption: "Checked September 13, 2026. Prices in USD. Microsoft's page showed a limited-time promotional price for Copilot Business.",
    },
    { type: "h2", text: "Where Copilot in Outlook is the better pick" },
    {
      type: "list",
      items: [
        "Your company is standardized on Microsoft 365. Copilot uses the same tenant, permissions, and admin tools as the rest of your Microsoft apps, and Microsoft Learn says it only surfaces data a user already has permission to view.",
        "You want AI across your documents too. The same Copilot license covers Word, Excel, PowerPoint, and Teams, not only Outlook.",
        "You need every platform. Copilot in Outlook is documented for new Outlook for Windows, Outlook for Mac, iOS, and Android. Synced is a desktop web app and an iPhone app.",
        "Procurement is easier with an existing vendor. Buying Copilot is an add-on to a Microsoft agreement you already have; Synced is a new vendor with a security review available on its Enterprise plan.",
      ],
    },
    { type: "h2", text: "Where Synced is the better pick" },
    {
      type: "list",
      items: [
        "You use Gmail too. Copilot in Outlook works with Microsoft accounts, and Gmail only through account linking in new Outlook. Synced connects Gmail and Outlook directly as separate Inboxes.",
        "Customer or team messages come in outside Microsoft. Synced reads Slack, WhatsApp Business, Instagram Business DMs, Messenger, SMS via your own Twilio number, and GroupMe, as well as Microsoft Teams chats.",
        "You want the work prepared before you ask. Synced writes an [Action Plan](/glossary/action-plan) for each new message and puts the finished draft in [Decide](/features/decide). Draft with Copilot starts when you open the compose box and enter a prompt.",
        "You're a small team without a Microsoft 365 business plan. Copilot Business requires a qualifying Microsoft 365 license. Synced's Free plan needs a Gmail account and a phone number to start.",
      ],
    },
    { type: "h2", text: "Using Copilot and Synced on the same Outlook account" },
    {
      type: "p",
      text: "Synced connects to Outlook through Microsoft's sign-in and permission screen, the same way other third-party apps do, so it can run alongside Copilot. Some Microsoft 365 admins restrict third-party app consent; if the permission screen is blocked, your admin needs to allow Synced. In practice, Copilot stays your in-app writing tool and Synced handles incoming requests from Outlook and the other channels in one queue.",
    },
    {
      type: "sources",
      items: [
        { label: "Microsoft 365 Copilot plans and pricing (business)", url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing", checked: CHECKED },
        { label: "Microsoft 365 Copilot pricing (enterprise)", url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise", checked: CHECKED },
        { label: "Copilot in Microsoft 365 plans for individuals", url: "https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals", checked: CHECKED },
        { label: "Microsoft Support: Draft an email message with Copilot in Outlook", url: "https://support.microsoft.com/en-us/outlook/copilot-pages/draft-an-email-message-with-copilot-in-outlook", checked: CHECKED },
        { label: "Microsoft Support: Frequently asked questions about Copilot in Outlook", url: "https://support.microsoft.com/en-us/office/frequently-asked-questions-about-copilot-in-outlook-07420c70-099e-4552-8522-7d426712917b", checked: CHECKED },
        { label: "Microsoft Support: Link non-Microsoft email accounts for premium benefits", url: "https://support.microsoft.com/en-us/office/link-non-microsoft-email-accounts-to-your-existing-microsoft-subscription-for-premium-benefits-b9025df4-bac6-4cb5-9155-6f73d2fbe9f6", checked: CHECKED },
        { label: "Microsoft Learn: Data, privacy, and security for Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy", checked: CHECKED },
      ],
    },
    { type: "links", title: "More comparisons", slugs: otherCompares(SLUG) },
  ],
  faqs: [
    {
      q: "How much does Copilot in Outlook cost?",
      a: "For businesses, Microsoft listed Microsoft 365 Copilot Business at $21 per user per month paid yearly ($25.20 paid monthly), on top of a qualifying Microsoft 365 plan, and the enterprise Microsoft 365 Copilot license at $30 per user per month paid yearly. Individual Microsoft 365 plans start at $9.99 a month.",
    },
    {
      q: "Does Copilot in Outlook work with Gmail?",
      a: "Microsoft Support says Gmail, Yahoo, or iCloud accounts in new Outlook can get premium features, including Copilot, only when linked to a Microsoft 365 subscription on a Microsoft account with the same email identity. Synced connects Gmail directly on its Free plan.",
    },
    {
      q: "Does Microsoft train AI on my Outlook email?",
      a: "Microsoft Learn says prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft Copilot. Synced binds its LLM providers not to train on your data. See [Security](/security).",
    },
    {
      q: "Does Synced connect to Microsoft Teams like Copilot does?",
      a: "Synced connects Microsoft Teams chats as an Inbox on the Pro plan and drafts replies for approval. It doesn't read Teams channel posts. See [Synced for Microsoft Teams](/integrations/microsoft-teams).",
    },
  ],
};
