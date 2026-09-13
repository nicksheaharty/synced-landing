import type { Page } from "../types";

export const undoASentMessage: Page = {
  slug: "/help/undo-a-sent-message",
  cluster: "help",
  parent: "/help",
  title: "Undo a Sent Message in Synced | Synced",
  h1: "Undo a sent message",
  navLabel: "Undo a sent message",
  cardText: "Tap Undo under a message while it still says Sending. The window is 8 seconds by default.",
  description:
    "Undo a message in Synced by tapping Undo next to Sending under the bubble. The default window is 8 seconds; change it under Undo Send in Settings.",
  eyebrow: "Help",
  intro: "Every message you send from Synced waits a few seconds before it actually goes out, in case you spot the typo right after tapping send.",
  answer:
    "To undo a message in Synced, tap Undo in the \"Sending… · Undo\" line under the message bubble before the countdown ends. The message is cancelled and your text goes back into the reply box. The undo window is 8 seconds by default and can be set to Off, 5, 10, 20, or 30 seconds under Undo Send in Settings.",
  primaryIntent: "undo sent message synced",
  related: ["/help/schedule-a-message", "/help/approve-or-edit-a-draft", "/glossary/undo-send"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "clock",
  body: [
    { type: "h2", text: "Undo a message in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Watch the status line", body: "Right after you send, the line under your bubble reads **Sending… · Undo 8**, with the number counting down." },
        { title: "Tap Undo", body: "Tap **Undo** while the number is still showing. The message disappears from the conversation." },
        { title: "Fix and resend", body: "Your text and any attachments go back into the reply box. Edit them and send again, or leave it." },
      ],
    },
    {
      type: "p",
      text: "The countdown ends a moment before the real deadline, so a tap on Undo never races a message that's already on its way. Once the number is gone, the line just says **Sending…** and the message can't be pulled back.",
    },
    { type: "h2", text: "Which messages have an undo window" },
    {
      type: "list",
      items: [
        "Replies you type in a conversation, on email, Slack, or Teams. For email, the window starts after you confirm the send.",
        "Emails you forward, and new emails you write yourself.",
        "Drafts written by Synced don't get one. They already waited in Decide for your approval, so review them there before tapping Send.",
        "Scheduled messages don't need one. Change or cancel them any time before they send; see [Schedule a message](/help/schedule-a-message).",
      ],
    },
    { type: "h2", text: "Change the undo window" },
    {
      type: "p",
      text: "Open **Settings** and find **Undo Send** under **CUSTOMIZATION**. The current value shows on the right. Each tap moves to the next option: **Off**, **5s**, **10s**, **20s**, **30s**. The setting is saved on that device.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "No Undo appeared: **Undo Send** may be set to **Off**, or the window had already closed.",
        "Missed the window on an email: once Sending… is gone, the email has been sent. A short correction is the only fix.",
        "Undo seemed to do nothing: check your connection, then look at the conversation again. [Contact support](/contact) if the message went out anyway.",
      ],
    },
  ],
};
