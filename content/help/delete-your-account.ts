import type { Page } from "../types";

export const deleteYourAccount: Page = {
  slug: "/help/delete-your-account",
  cluster: "help",
  parent: "/help",
  title: "Delete Your Synced Account and Data | Synced",
  h1: "Delete your account",
  navLabel: "Delete your account",
  cardText: "Account deletion is by email request. Stored tokens and cached data are gone within 30 days.",
  description:
    "Delete your Synced account by emailing support from the contact page. Stored tokens, credentials, and cached email and calendar data are deleted within 30 days.",
  eyebrow: "Help",
  intro: "There's no delete button in the app yet. Deletion is handled by email request.",
  answer:
    "To delete a Synced account, email a deletion request through the Synced contact page, including the phone number you sign in with. Synced then permanently deletes the account's stored tokens, credentials, and cached email and calendar records within 30 days, as the privacy policy describes. Logging out of the app does not delete an account.",
  primaryIntent: "delete synced account",
  related: ["/help/disconnect-an-integration", "/help/revoke-google-access", "/privacy"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "trash",
  body: [
    { type: "h2", text: "Request account deletion" },
    {
      type: "steps",
      items: [
        { title: "Disconnect your Inboxes first (optional)", body: "Disconnecting stops Synced reading them right away, while your request is processed. See [Disconnect an integration](/help/disconnect-an-integration)." },
        { title: "Email a deletion request", body: "Use the support email on the [contact page](/contact). Put \"Delete my account\" in the subject." },
        { title: "Include your phone number", body: "The number you sign in with is how the team finds your account. Don't send a sign-in code." },
        { title: "Revoke access at Google, if you connected Google", body: "Remove Synced at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). See [Revoke Google access](/help/revoke-google-access)." },
      ],
    },
    { type: "h2", text: "What gets deleted, and when" },
    {
      type: "p",
      text: "Per the [privacy policy](/privacy), when you close your account or request deletion, stored tokens, credentials, and cached calendar and email records are permanently deleted from Synced's servers and databases within 30 days.",
    },
    {
      type: "p",
      text: "Nothing is deleted from Gmail, Outlook, Slack, Drive, or other services you connected. Emails Synced sent for you stay in those mailboxes.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "No reply after a few business days: send the request again from the [contact page](/contact) and mention the date of your first email.",
        "Only want a break: tap **Log Out** in Settings instead. Your account and Inboxes stay as they are.",
      ],
    },
  ],
};
