import type { Page } from "../types";

export const revokeGoogleAccess: Page = {
  slug: "/help/revoke-google-access",
  cluster: "help",
  parent: "/help",
  title: "Revoke Synced's Access to Your Google Account | Synced",
  h1: "Revoke Google access",
  navLabel: "Revoke Google access",
  cardText: "Remove Synced from your Google Account's third-party access list.",
  description:
    "Revoke Synced's access to Gmail, Calendar, and Drive at myaccount.google.com/permissions, then disconnect the account in Synced to remove its conversations.",
  eyebrow: "Help",
  intro: "Google keeps its own list of apps you've let into your account. You can remove Synced from it without opening Synced at all.",
  answer:
    "To revoke Synced's access to your Google account, go to myaccount.google.com/permissions, find Synced in the list of third-party apps, and remove its access. Synced can no longer read Gmail, Calendar, or Drive for that account. To also remove that account's conversations from Synced, disconnect it in Synced's Settings.",
  primaryIntent: "revoke synced google account access",
  related: ["/help/disconnect-an-integration", "/help/delete-your-account", "/security"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "shield",
  body: [
    { type: "h2", text: "Remove Synced from your Google Account" },
    {
      type: "steps",
      items: [
        { title: "Open Google's permissions page", body: "Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions) and sign in to the Google account you connected to Synced." },
        { title: "Find Synced", body: "Look through the apps with access to your account. If you connected Drive separately from Gmail, Synced may appear with more than one set of permissions." },
        { title: "Remove access", body: "Open the Synced entry and follow Google's prompt to delete the connection." },
        { title: "Disconnect in Synced too", body: "Open Synced, tap **Settings**, tap the Google service, then use the three-dot menu next to the account and choose **Disconnect**. See [Disconnect an integration](/help/disconnect-an-integration)." },
      ],
    },
    { type: "h2", text: "What revoking does, and doesn't do" },
    {
      type: "p",
      text: "Revoking at Google cuts off access immediately. Synced can't read new mail, check your calendar, or search Drive for that account. Once Synced notices, the service's row in Settings shows **Reconnect** and the account is marked **Needs reconnecting**.",
    },
    {
      type: "p",
      text: "Revoking doesn't remove the account's existing conversations from Synced. Disconnecting in Synced does. Doing both is the clean way out. If you want the whole account gone, follow [Delete your account](/help/delete-your-account). Synced's use of Google data follows the Google API Services User Data Policy, including Limited Use; see [Security](/security).",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "Synced isn't in Google's list: check that you're signed in to the right Google account. Each connected Gmail account has to be revoked separately.",
        "A Google Workspace account may be managed by your admin, who can also remove third-party app access for the whole organization.",
        "Changed your mind? In Synced, open the service, tap the account's three-dot menu, and choose **Reconnect**.",
      ],
    },
  ],
};
