import type { Page } from "../types";

export const actionPlan: Page = {
  slug: "/glossary/action-plan",
  cluster: "glossary",
  parent: "/glossary",
  term: "Action Plan",
  title: "What Is an Action Plan in Synced? | Synced",
  h1: "Action Plan",
  cardText: "The steps Synced takes, or proposes, to get one message handled.",
  description:
    "An Action Plan is what Synced writes for one incoming message: the steps it takes or proposes to get it done. It's also how Synced plans are measured.",
  eyebrow: "Glossary · Synced term",
  intro: "The unit of work in Synced, and the unit Synced's plans are measured in.",
  answer:
    "An Action Plan is the set of steps Synced, the AI inbox assistant, takes or proposes for a single incoming message. One message produces one Action Plan, whether that plan is a single drafted reply or four steps that find a file, check a calendar, and write a response. Synced's Free plan includes 20 Action Plans a week and Pro includes 100.",
  primaryIntent: "synced action plan definition",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How an Action Plan works" },
    {
      type: "p",
      text: "When a new message lands in a connected Inbox, Synced reads it along with the thread around it and decides what the sender needs. It then writes out the steps. Steps Synced can finish safely, like searching Drive or checking calendar availability, it does right away. Steps that need your judgment, like sending a reply, go to your Decide queue.",
    },
    {
      type: "p",
      text: "An email asking \"can you send the Q3 numbers and find time Thursday?\" becomes one plan with three steps: find the file, pick open slots, draft the reply. You see the finished draft and approve it.",
    },
    { type: "h2", text: "How Action Plans are counted" },
    {
      type: "list",
      items: [
        "One message Synced reads and acts on is one Action Plan.",
        "The number of steps inside the plan doesn't change the count.",
        "A plan counts whether Synced finishes the work or hands it to you in Decide.",
        "The count resets every Monday at 00:00 UTC. Settings shows how many you've used this week.",
        "Past the limit, messages still arrive and nothing is lost. New requests go to your Tasks list as to-dos for you, and replies on plans already in progress keep going.",
      ],
    },
    { type: "h2", text: "Action Plan vs. task" },
    {
      type: "p",
      text: "They're easy to mix up. An Action Plan is Synced's work on a message. A Task, in Synced, is a to-do for you: something a conversation delegated to a person. A plan can create a Task, but most plans end with an approval in Decide.",
    },
  ],
  related: ["/pricing", "/integrations/gmail", "/get-started"],
};
