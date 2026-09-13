import type { Page } from "../types";

export const github: Page = {
  slug: "/integrations/github",
  cluster: "integration",
  parent: "/integrations",
  title: "GitHub AI Assistant Integration (Coming Soon) | Synced",
  h1: "Synced for GitHub",
  navLabel: "GitHub",
  cardText: "Planned: repository context for messages about code and releases. Not available yet.",
  description:
    "A GitHub integration for Synced, the AI inbox assistant, is coming soon. Here's what it's planned to do and how engineering teams can use Synced for now.",
  eyebrow: "Integration · Output",
  intro:
    "\"Did the fix ship?\" is a question GitHub can answer. Synced can't look there yet, and the GitHub connector is listed as coming soon.",
  answer:
    "A GitHub integration for Synced, the AI inbox assistant, is listed as coming soon and can't be connected yet. It's planned as an output integration for engineering context, so Synced could draw on your repositories when a message asks about code or a release. Today, engineering teams can connect Slack, Microsoft Teams, and email as Inboxes, and Google Drive or OneDrive for documents.",
  primaryIntent: "github ai assistant integration",
  related: ["/integrations/slack", "/integrations/microsoft-teams", "/integrations/notion", "/features/tasks"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "github", plans: "pro", kind: "output" },
  body: [
    {
      type: "callout",
      title: "Coming soon",
      text: "GitHub appears as Coming Soon in Synced's connector list, under Engineering. There's no release date yet.",
    },
    { type: "h2", text: "What a GitHub connection in Synced is planned to do" },
    {
      type: "p",
      text: "Engineering leads get the same questions all week in Slack and email: is it merged, is it deployed, who's on it. The answers sit in GitHub. The connector is meant to let Synced use your repositories as context, the way it already uses Drive files and calendar events, so the reply it drafts reflects what actually happened in the code.",
    },
    {
      type: "p",
      text: "Which repository data Synced will read, and what it will be allowed to do there, hasn't been published. In every Synced integration that's live today, anything that sends or changes something on your behalf needs your approval first.",
    },
    { type: "h2", text: "How engineering teams can use Synced before GitHub support" },
    {
      type: "list",
      items: [
        "Connect [Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams) so questions from product, sales, and support land in one list with drafted replies.",
        "Keep release notes and specs in Google Drive or OneDrive, where Synced can read them when someone asks what changed.",
        "Let Synced turn \"can someone look at this?\" messages into Tasks assigned to a person, so they don't sit unread in a DM.",
      ],
    },
    {
      type: "p",
      text: "If most of your inbound questions need live repository status to answer, Synced will draft less than you'd want until this connector ships. More connectors for engineering tools, like Jira and Linear, are also listed as coming soon in the app.",
    },
    { type: "h2", text: "How to get GitHub support when it launches" },
    {
      type: "p",
      text: "[Get early access](/get-started) to join the Synced waitlist. Synced's [pricing](/pricing) lists GitHub as part of Pro.",
    },
  ],
  faqs: [
    {
      q: "Can Synced read my GitHub repositories today?",
      a: "No. GitHub is listed as coming soon. Synced's live integrations are email, chat, and messaging Inboxes plus Google Drive, OneDrive, and Google Calendar.",
    },
    {
      q: "Will the GitHub integration be on the Free plan?",
      a: "Synced's pricing page lists GitHub among the integrations Pro adds.",
    },
  ],
};
