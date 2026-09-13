import type { Page } from "../types";

export const decideQueue: Page = {
  slug: "/glossary/decide-queue",
  cluster: "glossary",
  parent: "/glossary",
  term: "Decide queue",
  title: "What Is the Decide Queue in Synced? | Synced",
  h1: "Decide queue",
  navLabel: "Decide queue",
  cardText: "The list of approvals and questions Synced needs you to answer.",
  description:
    "The Decide queue is where Synced puts the approvals and questions only you can answer, like a drafted reply to send. It's the same queue on web and iPhone.",
  eyebrow: "Glossary · Synced term",
  intro: "The one place in Synced where work waits on you.",
  answer:
    "The Decide queue is the list in Synced, the AI inbox assistant, that holds every approval and question Synced needs a person to answer before it can finish an Action Plan. A drafted reply waiting to be sent, a question about which option you prefer, or a detail Synced couldn't find all land in Decide. On the iOS app the same queue is called Answer.",
  primaryIntent: "synced decide queue definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What goes into the Decide queue" },
    {
      type: "p",
      text: "Synced splits each [Action Plan](/glossary/action-plan) into steps it can finish on its own and steps that need your judgment. Searching Drive or checking your calendar happens right away. Anything that speaks for you, or anything Synced can't know, goes to Decide. More on the [Decide feature page](/features/decide).",
    },
    {
      type: "list",
      items: [
        "An AI-drafted email or message that needs your approval before it's sent.",
        "A question Synced can't answer from your connected sources, like which of two quotes to accept.",
        "A reply proposing meeting times from your calendar, which you check before it goes out.",
      ],
    },
    { type: "h2", text: "How a Decide item gets resolved" },
    {
      type: "p",
      text: "Each item shows the original message and what Synced has already done. You approve it, edit it first, or answer the question in your own words. Once you respond, Synced finishes the rest of the plan. Nothing Synced drafted is sent until you approve it.",
    },
    { type: "h2", text: "Decide queue vs. Tasks" },
    {
      type: "p",
      text: "Both are lists of things waiting on a person, so they get confused. Decide holds short decisions that unblock Synced's work: approve, edit, pick one. Tasks hold to-dos a conversation handed to a human, like \"review the contract by Friday,\" which you do outside Synced. A Decide item usually takes seconds. A Task can take an afternoon.",
    },
  ],
  faqs: [
    {
      q: "Does Synced ever send a reply without going through Decide?",
      a: "No. Every AI-drafted message waits in Decide for your approval before it's sent.",
    },
    {
      q: "Is Decide the same on web and iPhone?",
      a: "Yes. The tab is called Decide in both apps, and the items and your responses to them are shared between web and mobile.",
    },
  ],
  related: ["/glossary/action-plan", "/glossary/human-in-the-loop-approval", "/features/decide"],
};
