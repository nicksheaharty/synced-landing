import type { Page } from "../types";

export const notion: Page = {
  slug: "/integrations/notion",
  cluster: "integration",
  parent: "/integrations",
  title: "Notion AI Assistant Integration (Coming Soon) | Synced",
  h1: "Synced for Notion",
  navLabel: "Notion",
  cardText: "Planned: use your Notion docs and wiki as context for replies. Not connectable yet.",
  description:
    "A Notion integration for Synced, the AI inbox assistant, is coming soon. See what it's planned to do and how to give Synced your team's reference docs today.",
  eyebrow: "Integration · Output",
  intro:
    "The answer to \"what's our refund policy?\" is often a Notion page. Synced can't read Notion yet, and the connector is listed as coming soon.",
  answer:
    "A Notion integration for Synced, the AI inbox assistant, is listed as coming soon and isn't available yet. It's planned as an output integration, so Synced could look up your Notion workspace, docs, and wiki pages for context when drafting replies. Today, Synced can use documents stored in Google Drive or OneDrive for the same purpose.",
  primaryIntent: "notion ai assistant integration",
  related: ["/integrations/google-drive", "/integrations/onedrive", "/integrations/slack", "/features/search"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "notion", plans: "pro", kind: "output" },
  body: [
    {
      type: "callout",
      title: "Coming soon",
      text: "Notion appears as Coming Soon in Synced's connector list. There's no launch date, and you can't connect it yet.",
    },
    { type: "h2", text: "What a Notion connection in Synced is planned to do" },
    {
      type: "p",
      text: "Many teams write the answers down once, in Notion: pricing rules, onboarding steps, the process for approving a discount. When a message asks one of those questions, Synced should be able to read the page and draft a reply that matches it. The connector is meant to add your Notion workspace to the places Synced searches while it works.",
    },
    {
      type: "p",
      text: "Exactly what Synced will read and whether it will write anything back to Notion hasn't been published. That will be on this page when the connector is available.",
    },
    { type: "h2", text: "Give Synced your reference docs today" },
    {
      type: "list",
      items: [
        "Export the pages people ask about most (policies, price lists, FAQs) to PDF or Word and keep them in [Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive). Synced reads those files when drafting.",
        "Keep a short answers doc for the questions that come in through [Slack](/integrations/slack) or email, so Synced has one place to find them.",
        "Use Tasks in Synced for to-dos that come out of messages, instead of copying them into a Notion board by hand.",
      ],
    },
    {
      type: "p",
      text: "This is a workaround, and it goes stale when the Notion page changes. If your team's knowledge lives entirely in Notion, it may be worth waiting for the connector.",
    },
    { type: "h2", text: "How to get Notion support when it launches" },
    {
      type: "p",
      text: "[Get early access](/get-started) to join the Synced waitlist. Synced's [pricing](/pricing) lists Notion as part of Pro.",
    },
  ],
  faqs: [
    {
      q: "Does Synced work with Notion today?",
      a: "No. Notion is listed as coming soon in the app. Synced can read documents in Google Drive and OneDrive now.",
    },
    {
      q: "Which plan will include Notion?",
      a: "Synced's pricing page lists Notion among the integrations Pro adds, alongside GitHub, Slack, and Teams.",
    },
  ],
};
