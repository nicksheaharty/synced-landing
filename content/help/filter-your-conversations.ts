import type { Page } from "../types";

export const filterYourConversations: Page = {
  slug: "/help/filter-your-conversations",
  cluster: "help",
  parent: "/help",
  title: "Filter Your Conversations in Synced Messages | Synced",
  h1: "Filter your conversations",
  navLabel: "Filter your conversations",
  cardText: "Switch Messages between Primary, Action Needed, Inbox, Sent, Scheduled, and more.",
  description:
    "Filter conversations in Synced by tapping the filter name atop Messages: Primary, Action Needed, Inbox, Sent, Scheduled, Starred, Snoozed, or Trash.",
  eyebrow: "Help",
  intro: "Messages starts out on Primary. The filter at the top switches to any other view in two taps.",
  answer:
    "To filter conversations in Synced, open Messages and tap the filter name at the top center of the screen. A sheet lists Primary, Action Needed, Inbox, Sent, and Scheduled, with Starred, Snoozed, and Trash below them. Tap one to switch. Synced reopens on the last filter you picked.",
  primaryIntent: "filter conversations synced",
  related: ["/help/star-snooze-and-archive", "/help/schedule-a-message", "/glossary/email-triage"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "list",
  body: [
    { type: "h2", text: "Switch filters in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Messages", body: "Tap **Messages** in the tab bar." },
        { title: "Tap the filter name", body: "It's in the middle of the top bar, with a small arrow, and shows the current view, like **Primary**." },
        { title: "Pick a view", body: "The **FILTER** sheet opens. Tap any row or chip. A check mark shows the one you're on." },
      ],
    },
    { type: "h2", text: "What each filter shows" },
    {
      type: "table",
      head: ["Filter", "Shows"],
      rows: [
        ["Primary", "Directed, important conversations"],
        ["Action Needed", "Conversations with something to act on"],
        ["Inbox", "Every conversation, including archived"],
        ["Sent", "Conversations you started, awaiting a reply"],
        ["Scheduled", "Messages queued to send later"],
        ["Starred", "Conversations you starred"],
        ["Snoozed", "Hidden until their snooze ends"],
        ["Trash", "Trashed and spam, where you can restore or delete forever"],
      ],
      caption: "Descriptions match the ones shown in the filter sheet.",
    },
    { type: "h2", text: "Search instead of filtering" },
    {
      type: "p",
      text: "To find one conversation, tap the magnifying glass at the top right of Messages. The top bar turns into a **Search conversations** field. Tap the X to clear it or close search.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "A conversation is missing from Primary: it may be archived or snoozed. Check **Inbox** or **Snoozed**, then long-press it and choose **Move to Primary** or **Unsnooze**.",
        "The top bar says **Updating…**: Synced is refreshing the list. The filter name comes back when it's done.",
        "**Couldn't load this view**: pull to refresh, or switch filters and back. If a new view says it's still being set up, try again in a few minutes.",
      ],
    },
  ],
};
