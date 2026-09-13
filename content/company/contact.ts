import type { Page } from "../types";

export const contact: Page = {
  slug: "/contact",
  cluster: "company",
  title: "Contact Synced: Support, Early Access, and Sales | Synced",
  h1: "Contact Synced.",
  navLabel: "Contact",
  cardText: "Email for support, the waitlist for early access, and a form for Enterprise sales.",
  description:
    "Contact Synced by email at contact@syncedinbox.com for support, join the early access waitlist, or use the Enterprise sales form. What to include in a support email.",
  eyebrow: "Company",
  intro: "A real person reads every email. Pick the route that matches what you need.",
  answer:
    "To contact Synced, the AI inbox assistant, email contact@syncedinbox.com for support and general questions. To try Synced, join the early access waitlist. For Enterprise plans with SSO, admin controls, or a security review, use the Contact Sales form.",
  primaryIntent: "contact synced support",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "ContactPage",
  icon: "envelope",
  body: [
    { type: "h2", text: "Where to send your question" },
    {
      type: "table",
      head: ["You want to", "Go here"],
      rows: [
        ["Get help, report a bug, or ask a question", "[contact@syncedinbox.com](mailto:contact@syncedinbox.com)"],
        ["Try Synced during the private beta", "[Get Early Access](https://forms.gle/g64ZQ3Wy7hhp1M6X7)"],
        ["Talk about an Enterprise plan", "[Contact Sales](https://forms.gle/tP89zuGpCL1BsR6f6)"],
        ["Press or partnerships", "[contact@syncedinbox.com](mailto:contact@syncedinbox.com), or see [Press](/press)"],
      ],
    },
    { type: "h2", text: "What to include in a support email" },
    {
      type: "list",
      items: [
        "The phone number you sign in with, so the team can find your account.",
        "Whether you're on the web app or the iOS app.",
        "Which Inbox or integration is involved, like Gmail, Slack, or Google Drive.",
        "What you expected to happen and what happened instead, with a screenshot if you have one.",
        "Roughly when it happened.",
      ],
    },
    {
      type: "callout",
      title: "Don't send passwords or codes",
      text: "Synced never needs your password or a sign-in code to help you. Staff only look at connected data when you ask for support about it. More on [Security](/security).",
    },
    { type: "h2", text: "Answers you can get without writing in" },
    {
      type: "p",
      text: "The [Help center](/help) covers sign-in, connecting and disconnecting Inboxes, weekly limits, and account deletion. Common questions about the product are collected on the [FAQ](/faq).",
    },
  ],
  related: ["/help", "/faq", "/security"],
};
