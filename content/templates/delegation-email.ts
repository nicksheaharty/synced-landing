import type { Page } from "../types";

export const delegationEmail: Page = {
  slug: "/templates/delegation-email",
  cluster: "template",
  parent: "/templates",
  title: "Delegation Email Template: Assign Work Clearly | Synced",
  h1: "Delegation email",
  navLabel: "Delegation email",
  cardText: "Hand off a task with the outcome, deadline, and decision rights spelled out, plus a client handoff.",
  description:
    "Delegation email templates to assign a task to a teammate, hand a client thread to a colleague, and give quick recurring tasks to an assistant.",
  eyebrow: "Email template",
  intro: "Most delegated tasks come back half-done for the same reason: the email said what to do but not what done looks like.",
  answer:
    "A delegation email names the task, the outcome you want, the deadline, and how much the person can decide without checking back with you. Link everything they need and say when you'll check in. If the task came from an email thread, forward the thread or add them to it, so they aren't working from your summary.",
  primaryIntent: "delegation email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Assigning a task to a teammate" },
    { type: "p", text: "The full version for anything that takes more than an hour or touches other people." },
    {
      type: "template",
      label: "Assign a task",
      subject: "Can you own [task]? Due [date]",
      text: "Hi [Name],\n\nCould you take on [task]? Here's what I need.\n\nOutcome: [what done looks like, e.g. a one-page summary the client can approve]\nDeadline: [date and time]\nContext: [link to thread / doc / brief]\nYou can decide: [what they can decide alone, e.g. format, which vendor to call]\nCheck with me on: [what needs sign-off, e.g. anything over $500]\n\nI'll check in on [day] to see how it's going. If the deadline looks tight once you've started, tell me early and we'll adjust.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Handing a client or partner thread to a colleague" },
    { type: "p", text: "Reply in the existing thread so the client sees the handoff and your colleague gets the history in one place." },
    {
      type: "template",
      label: "Client handoff",
      subject: "Re: [existing thread subject]",
      text: "Hi [Client name],\n\nI'm bringing in [Colleague], who's copied here. [Colleague] will handle [scope] from here on and is fully up to speed on [the open item].\n\n[Colleague], [Client name] is waiting on [specific thing] by [date].\n\nI'm still around for [what you keep, e.g. contract questions].\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "Quick delegation to an assistant" },
    { type: "p", text: "For recurring tasks with someone who already knows how you work. Short is fine as long as the deadline and the output are clear." },
    {
      type: "template",
      label: "Assistant",
      subject: "[Task] by [day]",
      text: "Hi [Name],\n\nCould you [task, e.g. book a table for 6 near the office for Thursday at 7]? Same as last time is fine. Send me the confirmation when it's done.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "When to delegate by email" },
    {
      type: "list",
      items: [
        "Use email when the task needs links, files, or a record of what was agreed.",
        "Talk first, then send the email as a written summary, for anything new to the person or politically sensitive.",
        "If your team tracks work in a project tool, create the task there and send the email only for context the tool can't hold.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "\"Can you look into this?\" Look into it and do what, by when?",
        "Forwarding a long thread with \"see below.\" Add two lines on what you actually need from it.",
        "Delegating the task but keeping every decision. Say what they can decide.",
        "No check-in date. Without one, the first status update comes on the deadline.",
      ],
    },
    { type: "h2", text: "How Synced helps hand work off" },
    {
      type: "p",
      text: "When a message is really a to-do for someone else, [Synced](/) can draft the handoff with the ask, the deadline, and the thread details filled in, and send it to Decide for your approval. Work that lands on you shows up in [Tasks](/features/tasks). The [guide to delegating email](/guides/how-to-delegate-email) covers handing off whole categories of email, beyond single tasks.",
    },
  ],
  faqs: [
    {
      q: "How do you delegate a task by email without micromanaging?",
      a: "Be specific about the outcome and the deadline, then give the person clear decision rights and one check-in date. The detail goes into what done looks like, not into how to do each step.",
    },
    {
      q: "Should I CC my manager when delegating a task?",
      a: "Usually not. CC them only when the task was assigned to you by that manager, or when the handoff changes who a stakeholder should contact.",
    },
    {
      q: "How do you hand off a client to a colleague by email?",
      a: "Reply in the client's existing thread, introduce the colleague, state exactly what they now own and the next open item, and say what you're still available for.",
    },
  ],
  related: ["/templates/introduction-email", "/templates/project-kickoff-email", "/templates/out-of-office-message", "/guides/how-to-delegate-email"],
};
