import type { Page } from "../types";

export const connectAnOutputIntegration: Page = {
  slug: "/help/connect-an-output-integration",
  cluster: "help",
  parent: "/help",
  title: "Connect Google Drive, OneDrive, or Calendar | Synced",
  h1: "Connect an output integration",
  navLabel: "Connect Drive, OneDrive, or Calendar",
  cardText: "Give Synced your files and calendar so its Action Plans can attach and schedule.",
  description:
    "Connect Google Drive or OneDrive to Synced from Settings under Other Connectors. Calendar comes with your Gmail or Outlook account, with no separate step.",
  eyebrow: "Help",
  intro: "Output integrations are where Synced gets work done: files it can search and attach, and a calendar it can check.",
  answer:
    "To connect Google Drive or OneDrive to Synced, open Settings, tap the service under Other Connectors, review the permissions, and tap Connect. Calendar has no separate connect step: it comes with each Gmail or Outlook account you connect as an Inbox. Drive, OneDrive, and Calendar are included on the Free plan.",
  primaryIntent: "connect google drive onedrive calendar to synced",
  related: ["/help/connect-an-inbox", "/help/disconnect-an-integration", "/glossary/output-integration"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "folder",
  body: [
    { type: "h2", text: "Connect Google Drive or OneDrive in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Settings", body: "Tap **Settings** in the tab bar and scroll to **OTHER CONNECTORS**." },
        { title: "Tap Drive or OneDrive", body: "Pick the row that says **Connect**. Tap **See all connectors** to browse or search the full list." },
        { title: "Review what Synced reads", body: "The **Request Permissions** sheet lists what Synced uses automatically: searching your files when they're relevant to a task and reading file contents to use in a document." },
        { title: "Tap Connect", body: "Tap **Connect Google Drive** or **Connect OneDrive** and sign in with the account that holds your files." },
        { title: "Confirm it's connected", body: "Synced opens the service's page with your account listed. The row in Settings now reads **Connected**." },
      ],
    },
    { type: "h2", text: "How Calendar gets connected" },
    {
      type: "p",
      text: "The **Calendar** row in Settings isn't a button. It shows how many Gmail and Outlook accounts are linked, or **No Linked Accounts** if there are none. Connect a Gmail or Outlook account as an Inbox (see [Connect an Inbox](/help/connect-an-inbox)) and its calendar comes along. Creating or changing an event always waits for your approval.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "Dropbox, Notion, and GitHub show **Coming Soon** and can't be connected yet. More connectors are listed as coming soon in the app.",
        "A **Connection Failed** alert usually means the sign-in was cancelled. Try again and approve access on the service's screen.",
        "Synced found the wrong file? Make sure you connected the account that actually owns it. Each service holds up to 4 accounts.",
        "Still stuck: [contact support](/contact). Tool details live on the [Integrations](/integrations) pages.",
      ],
    },
  ],
};
