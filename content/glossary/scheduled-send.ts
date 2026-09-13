import type { Page } from "../types";

export const scheduledSend: Page = {
  slug: "/glossary/scheduled-send",
  cluster: "glossary",
  parent: "/glossary",
  term: "Scheduled send",
  title: "What Is Scheduled Send in Email? | Synced",
  h1: "Scheduled send",
  navLabel: "Scheduled send",
  cardText: "Writing a message now and having it delivered at a time you choose.",
  description:
    "Scheduled send lets you write an email or message now and have it delivered automatically at a set date and time, like 8 AM in the recipient's morning.",
  eyebrow: "Glossary",
  intro: "For the 11 PM email that shouldn't look like an 11 PM email.",
  answer:
    "Scheduled send is an email and messaging feature that holds a finished message and delivers it automatically at a date and time you choose. Scheduled send is built into Gmail, Outlook, and Slack, and is commonly used to reach people during their working hours or to avoid sending late-night messages.",
  primaryIntent: "scheduled send email meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How scheduled send works" },
    {
      type: "p",
      text: "You write the message, choose a send time instead of sending, and the service stores it until then. In Gmail, the arrow next to Send offers Schedule send, and scheduled messages wait in a Scheduled folder where you can edit or cancel them. Gmail allows up to 100 scheduled emails at a time and notes they may go out a few minutes after the chosen time.",
    },
    { type: "h2", text: "When scheduled send helps" },
    {
      type: "list",
      items: [
        "Reaching someone in another time zone at the start of their day.",
        "Working late without training your team to answer at midnight.",
        "Queuing a follow-up that should arrive in three days.",
        "Timing an announcement to go out at a set hour.",
      ],
    },
    { type: "h2", text: "Scheduled send vs. undo send" },
    {
      type: "p",
      text: "Both delay a message, but for different reasons. [Undo send](/glossary/undo-send) holds a message for a few seconds so you can take it back. Scheduled send holds it for as long as you choose so it arrives at the right time. A scheduled message can still be canceled up until it goes out.",
    },
    {
      type: "p",
      text: "One catch: a scheduled follow-up still goes out if the other person replies first. Check the thread before the send time, or use a tool that reads the thread. Synced lets you schedule approved replies; the steps are in [schedule a message](/help/schedule-a-message).",
    },
    {
      type: "sources",
      items: [{ label: "Gmail Help: Schedule emails to send later", url: "https://support.google.com/mail/answer/9214606", checked: "2026-09-13" }],
    },
  ],
  related: ["/glossary/undo-send", "/glossary/follow-up-tracking", "/help/schedule-a-message"],
};
