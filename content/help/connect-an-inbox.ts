import type { Page } from "../types";

export const connectAnInbox: Page = {
  slug: "/help/connect-an-inbox",
  cluster: "help",
  parent: "/help",
  title: "Connect an Inbox to Synced | Synced",
  h1: "Connect an Inbox",
  navLabel: "Connect an Inbox",
  cardText: "Add Gmail, Outlook, Slack, or another message source from Settings.",
  description:
    "Connect an Inbox to Synced from Settings: pick Gmail, Outlook, Slack, or another source, review the permissions, and sign in. Up to 4 accounts per service.",
  eyebrow: "Help",
  intro: "An Inbox is any message source Synced reads: an email account, a chat workspace, or a business messaging account.",
  answer:
    "To connect an Inbox in Synced, the AI inbox assistant, open Settings, tap the service under Inboxes, review the permissions sheet, and tap the Connect button to sign in with that service. Inboxes are unlimited on every plan, and each service takes up to 4 accounts. Slack and Microsoft Teams need the Pro plan.",
  primaryIntent: "connect inbox to synced",
  related: ["/help/connect-an-output-integration", "/help/disconnect-an-integration", "/integrations"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "plug",
  body: [
    { type: "h2", text: "Connect an Inbox in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Settings", body: "Tap **Settings** in the tab bar and scroll to the **INBOXES** section." },
        { title: "Pick the service", body: "Tap a row that says **Connect**. Only a couple of services are listed directly, plus any you've already connected. For everything else, tap the **More** row at the bottom of the section to open the full list on its **Inboxes** tab." },
        { title: "Review the permissions", body: "A **Request Permissions** sheet lists what Synced reads on its own (**Used Automatically in Discovery**) and what always waits for you (**Needs Your Direct Approval**), like sending a message." },
        { title: "Tap Connect", body: "The button names the service, for example **Connect Gmail**. Sign in on the service's own screen and approve access." },
        { title: "Check the account page", body: "Synced opens that Inbox's page with your account under **ACCOUNTS**. The Settings row now reads **Connected**." },
      ],
    },
    {
      type: "p",
      text: "New messages start showing up in Messages as they arrive. Each service has its own sign-in quirks, so check its page under [Integrations](/integrations) for specifics.",
    },
    { type: "h2", text: "Add a second account for the same service" },
    {
      type: "p",
      text: "Tap the connected row in Settings, then tap **Add Gmail account** (or the matching service name). Each service holds up to 4 accounts. The first one is marked **Default**, the fallback when nothing else says which account a message belongs to.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "Tapping Slack or Teams on the Free plan opens the **Synced Pro** screen instead of connecting. Those Inboxes are Pro-only; see [pricing](/pricing).",
        "Rows marked **Coming Soon**, like iMessage, can't be connected yet.",
        "A **Connection Failed** alert usually means the sign-in was cancelled or the service refused access. Try again, and check whether a work admin restricts third-party apps.",
        "A row showing **Reconnect** means an existing account lost access. Tap it, then choose **Reconnect** from the account's menu.",
        "Still stuck: [contact support](/contact) and name the service.",
      ],
    },
  ],
};
