import type { Page } from "../types";
import { CHECKED, compareRows, otherCompares } from "./shared";

const SLUG = "/compare/synced-vs-shortwave";

export const syncedVsShortwave: Page = {
  slug: SLUG,
  cluster: "compare",
  parent: "/compare",
  title: "Synced vs Shortwave: Gmail AI Assistant Comparison | Synced",
  h1: "Synced vs Shortwave",
  navLabel: "Synced vs Shortwave",
  cardText: "A Gmail-only AI email client with an AI search assistant, compared with a multi-channel assistant that asks before it sends.",
  description:
    "Synced vs Shortwave: Shortwave is a Gmail-only email client with an AI assistant and a free plan. Synced covers Gmail, Outlook, Slack, and Teams with approvals.",
  eyebrow: "Compare",
  intro:
    "Shortwave replaces the Gmail interface with its own client and puts an AI assistant in the sidebar. Synced sits behind your existing accounts and prepares the reply, the file, and the meeting time for you to approve.",
  answer:
    "Pick Shortwave if you use Gmail or Google Workspace, want a full email client with AI search, AI filters, and a free plan, and like asking an assistant questions about your mail. Pick Synced, the AI inbox assistant, if you need Outlook or Microsoft 365, or if your requests also come in through Slack, Teams, or WhatsApp. Shortwave does not support Microsoft 365 or Exchange accounts. Synced is in private beta.",
  primaryIntent: "synced vs shortwave",
  related: ["/compare/synced-vs-superhuman", "/best-ai-email-assistants", "/pricing", "/security"],
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Synced and Shortwave side by side" },
    {
      type: "p",
      text: "Shortwave details come from Shortwave's pricing page and documentation, checked on September 13, 2026. Shortwave's pricing page has Individual and Business tabs; the prices below are the Business-tab prices shown on the page.",
    },
    {
      type: "table",
      head: ["", "Shortwave", "Synced"],
      rows: compareRows({
        Price: "Business $30/seat/month, Premier $45/seat/month, Max $120/seat/month. Docs say new subscriptions are billed monthly",
        "Free plan": "Yes. Docs say the free plan includes most productivity features and the AI assistant. Paid plans have a 14-day free trial",
        Platforms: "Web, Mac, Windows, iOS, Android",
        "Email providers": "Gmail and Google Workspace. Outlook.com by forwarding only (can't send from that address). Microsoft 365 and Exchange not supported",
        "Other channels": "Not as inboxes. The AI can connect to Slack (access channels, send messages), Notion, Asana, Linear, Zapier, and custom MCP servers",
        "AI drafting": "Yes. Instant AI replies and writing that learns your style from sent mail",
        "Sends without approval": "Not stated in the docs we checked. Automatic drafting is offered through its sister product, Tasklet",
        "Model training policy": "Your data is never used to train third-party LLMs. Most AI workloads run on open-source models on Shortwave-controlled hardware",
        Status: "Generally available",
      }),
      caption: "Checked September 13, 2026. Prices in USD.",
    },
    { type: "h2", text: "Where Shortwave is the better pick" },
    {
      type: "list",
      items: [
        "You want to try an AI email client for free. Shortwave has a free plan that includes its AI assistant. Synced's Free plan is also $0, but access to Synced is through a waitlist during the private beta.",
        "You want to ask questions of your whole mailbox. Shortwave's AI search can load up to 50 to 150 threads into context depending on plan, and answer things like which customers haven't replied since last week.",
        "You want a replacement for the Gmail interface. Shortwave has splits, bundles, delivery schedules, todos, read statuses, and keyboard shortcuts for everything. Synced is an assistant, and your mail still lives in Gmail.",
        "Your team collaborates inside email. Shared threads, private team comments, assignees, and shared labels are on Shortwave's paid plans.",
        "You need Android or Windows apps now. Shortwave has both. Synced is a desktop web app and an iPhone app today.",
      ],
    },
    { type: "h2", text: "Where Synced is the better pick" },
    {
      type: "list",
      items: [
        "Your work email is on Microsoft 365 or Exchange. Shortwave's docs say those accounts aren't supported, with no timeline. Synced connects Outlook on the Pro plan.",
        "Messages you have to act on arrive in Slack, Microsoft Teams chats, WhatsApp Business, Instagram Business DMs, or SMS. Synced reads those as Inboxes and writes an [Action Plan](/glossary/action-plan) for each new message, without you opening a chat and asking.",
        "You want a fixed approval rule. Every AI-drafted message in Synced waits in [Decide](/features/decide) until you approve it.",
        "You'd rather not switch email clients. Synced connects through Google's or Microsoft's permission screen and leaves Gmail and Outlook as they are.",
      ],
    },
    { type: "h2", text: "Moving between Shortwave and Synced" },
    {
      type: "p",
      text: "Shortwave syncs with Gmail and doesn't replace it, so mail, labels, and archive state stay in your Google account either way. Connecting that same Gmail account to Synced is a normal Google sign-in. Some people keep Shortwave as the client they read mail in and use Synced for the requests that need a file attached, a meeting time found, or a Slack thread answered.",
    },
    {
      type: "sources",
      items: [
        { label: "Shortwave pricing", url: "https://www.shortwave.com/pricing/", checked: CHECKED },
        { label: "Shortwave homepage (platforms, free sign-up)", url: "https://www.shortwave.com/", checked: CHECKED },
        { label: "Shortwave docs: Billing", url: "https://www.shortwave.com/docs/guides/billing/", checked: CHECKED },
        { label: "Shortwave docs: Use Shortwave with other email providers", url: "https://www.shortwave.com/docs/how-tos/microsoft-outlook-exchange-other-sign-in-support/", checked: CHECKED },
        { label: "Shortwave docs: The Shortwave AI Assistant", url: "https://www.shortwave.com/docs/guides/ai-assistant/", checked: CHECKED },
        { label: "Shortwave docs: Security and Privacy", url: "https://www.shortwave.com/docs/guides/security/", checked: CHECKED },
        { label: "Shortwave download page", url: "https://www.shortwave.com/download/", checked: CHECKED },
      ],
    },
    { type: "links", title: "More comparisons", slugs: otherCompares(SLUG) },
  ],
  faqs: [
    {
      q: "Does Shortwave work with Outlook?",
      a: "Only partly. Shortwave's docs say Outlook.com, Hotmail, and Live mail can be forwarded to a Gmail account but can't send from the original address, and Microsoft 365 and Exchange accounts aren't supported. Synced connects Outlook directly on the Pro plan.",
    },
    {
      q: "Is Shortwave free?",
      a: "Shortwave has a free plan that its docs say includes most productivity features and the AI assistant. Paid plans on its Business tab start at $30 per seat per month, with a 14-day free trial.",
    },
    {
      q: "Does Shortwave train AI on my email?",
      a: "Shortwave's security page says your data is never used to train third-party LLMs and that most of its AI workloads use open-source models on hardware it controls. Synced doesn't use Google Workspace data to train generalized models and binds its LLM providers not to train on your data. More on [Security](/security).",
    },
  ],
};
