import type { Page } from "../types";

export const starSnoozeAndArchive: Page = {
  slug: "/help/star-snooze-and-archive",
  cluster: "help",
  parent: "/help",
  title: "Star, Snooze, and Archive Conversations in Synced | Synced",
  h1: "Star, snooze, and archive",
  navLabel: "Star, snooze, and archive",
  cardText: "Long-press a conversation to star it, snooze it until later, or archive it out of Primary.",
  description:
    "Star, snooze, or archive a Synced conversation by long-pressing it in Messages. Starring and archiving sync to Gmail and Outlook. Snooze brings it back later.",
  eyebrow: "Help",
  intro: "Three ways to get a conversation out of your way without losing it.",
  answer:
    "To star, snooze, or archive a conversation in Synced, long-press it in Messages and choose Star, Snooze…, or Archive to Inbox. Archiving takes it out of Primary but keeps it under the Inbox filter. For Gmail and Outlook conversations, starring and archiving also apply in your mailbox. Snooze hides the conversation until the time you pick.",
  primaryIntent: "star snooze archive conversation synced",
  related: ["/help/filter-your-conversations", "/help/notification-settings", "/glossary/inbox-zero"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "hand",
  body: [
    { type: "h2", text: "Use the long-press menu in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Messages", body: "Tap **Messages** in the tab bar and find the conversation." },
        { title: "Long-press it", body: "Hold your finger on the row until the menu appears." },
        { title: "Star it", body: "Tap **Star**. It now appears under the **Starred** filter. Tap **Unstar** to undo." },
        { title: "Snooze it", body: "Tap **Snooze…** and pick **Later today**, **Tomorrow**, **This weekend**, or **Next week**. Each option shows the exact time it returns." },
        { title: "Archive it", body: "Tap **Archive to Inbox**. The conversation leaves Primary but stays in **Inbox**." },
      ],
    },
    {
      type: "p",
      text: "The same actions are in the three-dot menu at the top of an open conversation, along with **Move to Trash**. Email conversations also get **Mark as Unread**, **Open in Gmail** or **Open in Outlook**, and **Report Spam**.",
    },
    { type: "h2", text: "What syncs to your mailbox" },
    {
      type: "table",
      head: ["Action", "In Synced", "In Gmail or Outlook"],
      rows: [
        ["Star", "Shows under Starred", "Starred there too"],
        ["Archive to Inbox", "Out of Primary, still in Inbox", "Archived there too"],
        ["Move to Trash", "Shows under Trash", "Moved to trash there too"],
        ["Mark as Read or Unread", "Updates the conversation", "Updated there too"],
        ["Snooze", "Hidden until the time you pick", "No change"],
      ],
    },
    { type: "h2", text: "Undo any of these" },
    {
      type: "list",
      items: [
        "Starred: long-press and choose **Unstar**.",
        "Snoozed: open the **Snoozed** filter, long-press, and choose **Unsnooze**.",
        "Archived: open **Inbox**, long-press, and choose **Move to Primary**.",
        "Trashed: open **Trash**, long-press, and choose **Restore**. **Delete Forever** can't be undone.",
      ],
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "p",
      text: "No menu on long-press: the row pinned to the very top of Messages doesn't have one. If a change doesn't show up in Gmail or Outlook, give it a minute, then check that the account doesn't show **Reconnect** in Settings.",
    },
  ],
};
