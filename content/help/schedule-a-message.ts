import type { Page } from "../types";

export const scheduleAMessage: Page = {
  slug: "/help/schedule-a-message",
  cluster: "help",
  parent: "/help",
  title: "Schedule a Message to Send Later in Synced | Synced",
  h1: "Schedule a message",
  navLabel: "Schedule a message",
  cardText: "Pick a send time from the clock button, then edit or cancel it before it goes out.",
  description:
    "Schedule a message in Synced with the clock button on a draft: pick a time and tap Schedule. Edit or unschedule it any time before it sends.",
  eyebrow: "Help",
  intro: "Approve the draft now, send it when the other person will actually read it.",
  answer:
    "To schedule a message in Synced, open the draft, tap the clock button, pick a quick option like Tomorrow 9 AM or set a date and time, and tap Schedule. The send time has to be at least a minute away. Scheduled messages show under the Scheduled filter in Messages, where you can edit or cancel them before they send.",
  primaryIntent: "schedule message send later synced",
  related: ["/help/approve-or-edit-a-draft", "/help/undo-a-sent-message", "/glossary/scheduled-send"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "calendar",
  body: [
    { type: "h2", text: "Schedule a draft in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open the draft", body: "Open a draft card in **Decide**, or start a new email from **Assign** with **Or write an email yourself**." },
        { title: "Tap the clock button", body: "It sits at the top of the draft, next to the three-dot menu. The **Schedule send** screen opens." },
        { title: "Pick a time", body: "Tap a **QUICK PICK** option (**In 1 hour**, **This evening**, **Tomorrow 9 AM**, **Monday 9 AM**) or set **Date** and **Time** yourself." },
        { title: "Check the preview line", body: "It spells out when the message goes, like \"Sends Tue, Sep 16 · 9:00 AM\"." },
        { title: "Tap Schedule", body: "The message joins the conversation marked **Scheduled** with its date and time under the bubble." },
      ],
    },
    { type: "h2", text: "Change or cancel a scheduled message" },
    {
      type: "list",
      items: [
        "Open the conversation and tap the scheduled bubble to edit the text, recipients, or time. Tap **Save** to keep it scheduled with your changes.",
        "In that same editor, tap **Unschedule** and confirm to cancel it.",
        "To see everything queued, open **Messages**, tap the filter name at the top, and choose **Scheduled**. Swipe a conversation there to cancel all of its scheduled sends.",
      ],
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "**Schedule** won't tap and the preview says **Pick a time at least a minute from now**: move the time later.",
        "No clock button: scheduling is offered on drafts ready to send, not on questions or calendar invites.",
        "The bubble says **Failed to send · Tap to edit**: tap it, check the recipients, and reschedule or send. If the account shows **Reconnect** in Settings, reconnect it first.",
      ],
    },
  ],
};
