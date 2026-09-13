import type { Page } from "../types";

export const notificationSettings: Page = {
  slug: "/help/notification-settings",
  cluster: "help",
  parent: "/help",
  title: "Turn Synced Notifications On or Off on iPhone | Synced",
  h1: "Notification settings",
  navLabel: "Notification settings",
  cardText: "Synced notifies you about new Primary messages. Turn it on or off in iPhone Settings.",
  description:
    "Turn Synced notifications on or off from the Notifications row in Settings, which opens iPhone Settings. Synced notifies you about new Primary messages.",
  eyebrow: "Help",
  intro: "Synced keeps notifications narrow: it pings you about messages that need you, not about its own busywork.",
  answer:
    "Synced's iPhone app sends a push notification when a new message lands in Primary. To turn notifications on or off, open Settings in Synced and tap Notifications, which opens Synced's page in iPhone Settings, then change Allow Notifications there. The row in Synced shows On or Off to match.",
  primaryIntent: "synced notification settings iphone",
  related: ["/help/filter-your-conversations", "/help/sign-in-with-your-phone-number", "/ios"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "bell",
  body: [
    { type: "h2", text: "Turn notifications on or off" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "Tap **Settings** in the tab bar and scroll to **ABOUT**." },
        { title: "Tap Notifications", body: "The row shows **On** or **Off**. Tapping it opens Synced's page in your iPhone's Settings app." },
        { title: "Change the permission", body: "Open Notifications there and switch notifications on or off. You can also pick banner style, sounds, and lock screen display." },
        { title: "Come back to Synced", body: "The **Notifications** row updates to match as soon as you return." },
      ],
    },
    { type: "h2", text: "What Synced notifies you about" },
    {
      type: "p",
      text: "Synced sends a notification when a new message is sorted into **Primary**, the view for directed, important conversations. It doesn't notify you each time it creates or finishes an Action Plan. To shape what counts as Primary, see [Filter your conversations](/help/filter-your-conversations) and [Star, snooze, and archive](/help/star-snooze-and-archive).",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "Nothing arrives even though the row says **On**: check Focus modes and Scheduled Summary in iPhone Settings, which can hold notifications.",
        "You turned notifications off when first asked: iPhone doesn't let apps ask again. Use the steps above to switch them back on.",
        "Notifications stopped after logging out: **Log Out** turns them off for that phone. Sign back in to get them again.",
        "Using two iPhones: each one has its own permission, so set it on both.",
      ],
    },
  ],
};
