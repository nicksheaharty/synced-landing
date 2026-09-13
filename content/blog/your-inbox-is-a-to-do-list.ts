import type { Page } from "../types";

export const inboxIsToDoList: Page = {
  slug: "/blog/your-inbox-is-a-to-do-list",
  cluster: "blog",
  parent: "/blog",
  title: "Your Inbox Is a To-Do List, So Treat It Like One | Synced",
  h1: "Your inbox is a to-do list",
  navLabel: "Your inbox is a to-do list",
  cardText: "Most messages are requests. Why Synced writes Action Plans instead of summaries.",
  description:
    "Most messages in your inbox are requests, not reading material. Why Synced, the AI inbox assistant, writes Action Plans that do the work instead of summaries.",
  eyebrow: "Blog · Product thinking",
  intro:
    "Your inbox isn't a reading list. It's a list of things other people want you to do, written in their words, in no particular order.",
  answer:
    "Most messages people receive at work are requests: send a file, pick a time, answer a question, make a decision. Summaries shorten the reading, but the time goes into doing what the message asks. Synced, the AI inbox assistant, writes an Action Plan for each message that prepares the reply, file, or meeting times, and brings you only the decisions that need you.",
  primaryIntent: "inbox as a to do list ai action plans vs summaries",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    {
      type: "p",
      text: "Scroll through yesterday's inbox and sort each message into two piles: things you read and were done with, and things that asked you to do something. For most people with a job that involves other people, the second pile wins. That observation is the reason Synced exists, and the reason it works the way it does.",
    },
    { type: "h2", text: "Most messages are requests in disguise" },
    {
      type: "p",
      text: "Very few work messages say \"please do the following task.\" They say \"any update on the proposal?\" or \"are you around Thursday?\" or \"did the contract ever get signed?\" Each of those is a request with a hidden to-do list behind it. \"Any update on the proposal\" means find the latest version, check what changed, and write two sentences about where it stands.",
    },
    {
      type: "p",
      text: "The same thing happens in Slack, in Teams, and in a WhatsApp Business chat with a customer. The phrasing is shorter and the punctuation is optional, but the structure is the same: someone needs something, and you're the path to it.",
    },
    { type: "h2", text: "The gap between reading a message and doing what it asks" },
    {
      type: "p",
      text: "Reading \"can you send the Q3 deck and find 30 minutes next week?\" takes about four seconds. Doing it looks like this: open Drive, search for the deck, figure out which of the three files named Q3 is the current one, open your calendar, find slots that don't collide with anything, switch back to email, write a reply that includes the file and the times, and send it.",
    },
    {
      type: "p",
      text: "That's a few minutes for a simple one. Multiply by the number of requests in a day, add the context switching between apps, and you get the familiar feeling of spending all day in your inbox without finishing anything. The reading was never the bottleneck.",
    },
    { type: "h2", text: "Why summaries don't close the gap" },
    {
      type: "p",
      text: "The first wave of AI in email mostly went after reading. Summarize this thread. Give me the gist of these twelve messages. Suggest a two-word reply. Those are useful, and [email summarization](/glossary/email-summarization) is a real time saver for long threads you only need to understand.",
    },
    {
      type: "p",
      text: "But a summary of \"can you send the Q3 deck and find 30 minutes next week\" is \"they want the Q3 deck and a meeting.\" You still have to open Drive, open your calendar, and write the reply. For a message that's a request, a summary compresses the part that was already fast and leaves the slow part exactly where it was.",
    },
    {
      type: "p",
      text: "There's a second problem. Summaries and chat assistants usually wait for you to ask. You have to notice the message, decide it's worth delegating, open a side panel, and write a prompt. That's another item on the to-do list, just with an AI at the end of it.",
    },
    { type: "h2", text: "What an Action Plan does instead" },
    {
      type: "p",
      text: "Synced treats each incoming message as a unit of work. For every message, it writes an [Action Plan](/glossary/action-plan): the steps needed to get that message handled. Then it does the steps it can do safely, like searching Google Drive or OneDrive for the file and checking Google Calendar for open time, and drafts the reply with the results in it.",
    },
    {
      type: "message",
      from: "Priya (manager)",
      source: "slack",
      time: "8:41 AM",
      text: "can you send me the Q3 deck before the board prep, and grab 30 min with me next week to go over it",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the most recent Q3 deck in Google Drive",
        "Checked your calendar and picked three open 30-minute slots next week",
        "Drafted a reply with the deck and the times",
      ],
      caption: "An illustration of the shape of an Action Plan, not a real conversation.",
    },
    {
      type: "p",
      text: "What reaches you is a decision rather than a chore: here's the reply, with the file and the times, approve or edit. Anything Synced can't settle on its own becomes a question in [Decide](/features/decide). Anything that genuinely needs a person to go do something, like sign a form in person, becomes an entry in [Tasks](/features/tasks). Threads waiting on someone else get tracked, so the follow-up doesn't depend on your memory.",
    },
    {
      type: "p",
      text: "It's also why Synced's plans count Action Plans rather than prompts or chat messages. One message is one Action Plan, whether it needs one step or five. The Free plan includes 20 a week and Pro includes 100.",
    },
    { type: "h2", text: "Synced prompts you, not the other way around" },
    {
      type: "p",
      text: "If your inbox is a to-do list, the natural job for an assistant is to work the list and come back with what's left. That flips the usual relationship with AI tools. You don't open Synced to ask it for help. Synced opens the conversation with the few decisions only you can make, and every drafted message waits for your approval before it goes out. We wrote about that rule in [Why Synced asks before it sends](/blog/why-synced-asks-before-it-sends).",
    },
    { type: "h2", text: "Where this approach doesn't fit" },
    {
      type: "p",
      text: "Not every inbox is mostly requests. If your mail is largely newsletters, notifications, and FYIs, you have a filtering problem more than a doing problem, and good [email triage](/glossary/email-triage) rules or a summary tool may serve you better. And some requests need thinking only you can do, like how to respond to a hard negotiation. Synced can find the context and draft a starting point, but the judgment stays with you, which is the point of asking.",
    },
    {
      type: "p",
      text: "If you want to try treating your inbox this way without any software, the manual version is in [How to turn emails into tasks](/guides/how-to-turn-emails-into-tasks). If you want the list worked for you, Synced is in private beta, and you can [get early access](/get-started).",
    },
  ],
  faqs: [
    {
      q: "What is the difference between an email summary and an Action Plan?",
      a: "A summary tells you what a message says. An Action Plan in Synced lists the steps needed to handle the message, does the safe ones like finding files and checking your calendar, and drafts the reply for your approval.",
    },
    {
      q: "Does Synced turn emails into tasks?",
      a: "Yes. When a message needs a person to do something Synced can't, it becomes an entry in Tasks. Everything else is handled through the message's Action Plan. See [email to task](/glossary/email-to-task).",
    },
  ],
  related: ["/glossary/action-plan", "/guides/how-to-turn-emails-into-tasks", "/features/tasks", "/blog/why-synced-asks-before-it-sends"],
};
