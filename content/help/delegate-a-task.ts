import type { Page } from "../types";

export const delegateATask: Page = {
  slug: "/help/delegate-a-task",
  cluster: "help",
  parent: "/help",
  title: "Delegate a Task to Synced With Assign | Synced",
  h1: "Delegate a task to Synced",
  navLabel: "Delegate a task",
  cardText: "Tap Assign, say what you need in a sentence, and approve the result in Decide.",
  description:
    "Delegate a task to Synced with the Assign button: type or dictate the request, mention people with @, attach files, and approve anything it sends.",
  eyebrow: "Help",
  intro: "Most of Synced's work starts from incoming messages. Assign is for the times you want to start the work yourself.",
  answer:
    "To delegate a task to Synced, the AI inbox assistant, tap Assign in Messages, describe what you want in a sentence (for example \"Draft a follow-up to the Acme team about pricing\"), and send it. Type @ to mention a contact. Anything Synced drafts to send waits in Decide for your approval.",
  primaryIntent: "delegate task to synced assign",
  related: ["/help/approve-or-edit-a-draft", "/help/weekly-limit-reached", "/glossary/email-delegation"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "tasks",
  body: [
    { type: "h2", text: "Hand off a task in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Tap Assign", body: "It's the floating button above the tab bar in **Messages**." },
        { title: "Say what you need", body: "The box reads **New Agent Task**. Write the request in plain language. Tap the microphone to dictate instead." },
        { title: "Mention people with @", body: "Type **@** and pick a contact so Synced knows exactly who you mean." },
        { title: "Attach anything it needs", body: "Add **Photos** or **Files** if the task depends on them." },
        { title: "Send the request", body: "Tap the round send button. Synced reads the request and starts working on it." },
        { title: "Approve the result", body: "Replies, emails, and calendar invites land in **Decide** for you to review, edit, or dismiss." },
      ],
    },
    { type: "h2", text: "Delegate from inside a conversation" },
    {
      type: "p",
      text: "In a conversation, tap the **+** button next to the reply box and choose **Reply with Agent**. The request is tied to that person and thread, so \"say yes to Thursday and attach the deck\" is enough.",
    },
    { type: "h2", text: "Tasks for Synced vs. Tasks for you" },
    {
      type: "p",
      text: "Assign hands work to Synced. The **Tasks** tab is the other direction: to-dos a conversation delegated to you, plus any you add with **New Task**. If you only want to write an email yourself, tap **Or write an email yourself** under the Assign box.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "No Assign button: it's hidden once you've used your weekly Action Plans. See [Weekly limit reached](/help/weekly-limit-reached).",
        "Synced messaged the wrong person: use @ to pick the contact instead of typing a name, then dismiss the old draft in Decide.",
        "Microphone does nothing: allow microphone access. **Settings** shows **Microphone** as On or Off, and tapping it opens your phone's settings.",
      ],
    },
  ],
};
