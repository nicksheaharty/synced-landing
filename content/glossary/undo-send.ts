import type { Page } from "../types";

export const undoSend: Page = {
  slug: "/glossary/undo-send",
  cluster: "glossary",
  parent: "/glossary",
  term: "Undo send",
  title: "What Is Undo Send in Email? | Synced",
  h1: "Undo send",
  navLabel: "Undo send",
  cardText: "A short delay after you hit Send, during which you can take the message back.",
  description:
    "Undo send holds an email for a few seconds after you click Send so you can cancel it. Gmail lets you set 5, 10, 20, or 30 seconds. It isn't message recall.",
  eyebrow: "Glossary",
  intro: "The few seconds between clicking Send and noticing the typo in the client's name.",
  answer:
    "Undo send is an email feature that briefly delays delivery after you click Send, giving you a window to cancel the message before it leaves your account. Undo send works by holding the message, not by pulling it back from the recipient: once the window closes, the message is delivered and can't be undone. Gmail lets you set the window to 5, 10, 20, or 30 seconds.",
  primaryIntent: "undo send email meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How undo send works in Gmail and Outlook" },
    {
      type: "p",
      text: "In Gmail, a \"Message sent\" notice appears with an Undo option. The cancellation period is set in Gmail's settings under Undo Send. Outlook on the web and Outlook.com have an Undo send setting under Mail, then Compose, with a delay of up to 30 seconds. Clicking Undo in either returns the message to a draft.",
    },
    { type: "h2", text: "Undo send vs. message recall" },
    {
      type: "p",
      text: "They get confused because both promise to take an email back. Undo send stops a message before it's delivered, so it always works inside the window. Recall, a feature in Outlook for Microsoft 365 accounts, tries to remove a message that was already delivered, and depends on conditions like both people being in the same organization and the message still being unread. Recall can fail; undo send inside its window doesn't.",
    },
    { type: "h2", text: "Undo send vs. scheduled send" },
    {
      type: "p",
      text: "Undo send is a delay of seconds that you set once and apply to every message. [Scheduled send](/glossary/scheduled-send) is a delay you choose for a single message, from minutes to days.",
    },
    {
      type: "p",
      text: "For messages sent through Synced, see [undo a sent message](/help/undo-a-sent-message). Drafts Synced writes already wait for your approval, which catches most mistakes before Send is ever pressed.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Unsend Gmail messages", url: "https://support.google.com/mail/answer/2819488", checked: "2026-09-13" },
        { label: "Microsoft Support: How to recall an email in Outlook", url: "https://support.microsoft.com/en-us/outlook/mail/how-to-recall-an-email-in-outlook-requirements-limitations-steps", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I unsend an email after 30 seconds in Gmail?",
      a: "No. Once the undo window passes, the email has been delivered. The practical option is a quick follow-up correcting the mistake.",
    },
  ],
  related: ["/glossary/scheduled-send", "/glossary/human-in-the-loop-approval", "/help/undo-a-sent-message"],
};
