import type { Page } from "../types";

export const disconnectAnIntegration: Page = {
  slug: "/help/disconnect-an-integration",
  cluster: "help",
  parent: "/help",
  title: "Disconnect an Inbox or Integration in Synced | Synced",
  h1: "Disconnect an integration",
  navLabel: "Disconnect an integration",
  cardText: "Remove one account from Synced, and what happens to its conversations.",
  description:
    "Disconnect Gmail, Slack, Drive, or any integration in Synced from Settings. Open the service, tap the menu next to the account, and choose Disconnect.",
  eyebrow: "Help",
  intro: "You can remove any connected account whenever you want. Other accounts on the same service stay connected.",
  answer:
    "To disconnect an integration in Synced, open Settings, tap the connected service, tap the three-dot menu next to the account, and choose Disconnect. Synced stops reading that account, and conversations that came from it are removed from Synced. Disconnecting doesn't delete anything in the service itself.",
  primaryIntent: "disconnect integration from synced",
  related: ["/help/revoke-google-access", "/help/connect-an-inbox", "/help/delete-your-account", "/security"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "plug",
  body: [
    { type: "h2", text: "Disconnect an account in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Settings", body: "Tap **Settings** in the tab bar. Connected services show **Connected** under **INBOXES** or **OTHER CONNECTORS**." },
        { title: "Tap the service", body: "This opens its page, with every connected account listed under **ACCOUNTS**." },
        { title: "Open the account menu", body: "Tap the three-dot button next to the account you want to remove." },
        { title: "Choose Disconnect", body: "Synced asks you to confirm, for example **Disconnect Google Account**, and says what will stop working. Tap **Disconnect**." },
      ],
    },
    { type: "h2", text: "What disconnecting removes" },
    {
      type: "list",
      items: [
        "Synced stops reading new messages or files from that account.",
        "Conversations that came from that account, along with their Tasks, are removed from Synced. Reconnecting later doesn't bring the old ones back.",
        "Removing a Google account also removes its Calendar access. Removing an Outlook account does the same for its calendar.",
        "Nothing is deleted from Gmail, Outlook, Slack, Drive, or any other service.",
        "If you had more than one account on that service, the others stay connected.",
      ],
    },
    {
      type: "callout",
      title: "Google keeps its own record",
      text: "Google lists apps you've granted access to on your Google Account. To remove Synced there too, see [Revoke Google access](/help/revoke-google-access).",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "No three-dot button, just a spinner: Synced is still finishing the last change. Wait a moment and reopen the page.",
        "SMS (Twilio) and GroupMe need one extra step outside Synced. The confirmation explains it: change the number's SMS webhook in the Twilio console, or remove the listener bot from each GroupMe group.",
        "To stop using Synced entirely, see [Delete your account](/help/delete-your-account).",
        "Still stuck: [contact support](/contact).",
      ],
    },
  ],
};
