import type { Page } from "../types";

export const emailToTask: Page = {
  slug: "/glossary/email-to-task",
  cluster: "glossary",
  parent: "/glossary",
  term: "Email-to-task",
  title: "What Is Email-to-Task? | Synced",
  h1: "Email-to-task",
  navLabel: "Email-to-task",
  cardText: "Turning a request buried in an email into a to-do with an owner and a date.",
  description:
    "Email-to-task means turning a request inside an email into a separate to-do with an owner, a due date, and a link back to the original message.",
  eyebrow: "Glossary",
  intro: "Most inboxes are to-do lists wearing a disguise. Email-to-task is taking the disguise off.",
  answer:
    "Email-to-task is the process of converting a request contained in an email into a standalone task, with a clear action, an owner, a due date, and a link back to the source message. Email-to-task can be manual (forwarding to a task app or dragging an email into a to-do list) or automatic, where software reads the message and creates the task.",
  primaryIntent: "email to task meaning",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What makes a good task from an email" },
    {
      type: "p",
      text: "\"Re: Q3 planning\" is not a task. \"Send Dana the revised Q3 budget by Thursday\" is. A useful conversion rewrites the subject line into an action with a verb, pulls the deadline out of the body if there is one, and keeps a link to the thread so the context is one click away.",
    },
    { type: "h2", text: "Ways to turn emails into tasks" },
    {
      type: "list",
      items: [
        "Gmail's Add to Tasks option, which creates a Google Tasks item from the email.",
        "Outlook's flag, which puts the message on your To Do list.",
        "Forwarding to a task app's unique email address.",
        "An AI assistant that reads the request and creates the task on its own.",
      ],
    },
    { type: "h2", text: "Email-to-task vs. flagging or starring" },
    {
      type: "p",
      text: "A star or flag marks a message as important without saying what to do about it. Over time a starred folder becomes a second inbox. A task names the action and a date, which is what makes it possible to finish. The manual method is in [how to turn emails into tasks](/guides/how-to-turn-emails-into-tasks).",
    },
    { type: "h2", text: "How Synced handles email-to-task" },
    {
      type: "p",
      text: "Synced turns messages into tasks as part of each [Action Plan](/glossary/action-plan). In Synced, a Task is a to-do for a person: something a conversation delegated that software can't do, like reviewing a contract. Work Synced can do itself, like drafting the reply, goes to Decide instead.",
    },
  ],
  related: ["/glossary/follow-up-tracking", "/glossary/email-delegation", "/guides/how-to-turn-emails-into-tasks"],
};
