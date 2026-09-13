import type { Page } from "../types";

export const projectKickoffEmail: Page = {
  slug: "/templates/project-kickoff-email",
  cluster: "template",
  parent: "/templates",
  title: "Project Kickoff Email Template: Internal and Client | Synced",
  h1: "Project kickoff email",
  navLabel: "Project kickoff email",
  cardText: "Start a project with goals, owners, dates, and the kickoff meeting in one email, for a team or a client.",
  description:
    "Project kickoff email templates for an internal team, a client project, and a small project. Each covers goals, owners, key dates, and the kickoff meeting.",
  eyebrow: "Email template",
  intro: "The kickoff email is the thing people search for three weeks later when they can't remember who owns what.",
  answer:
    "A project kickoff email tells everyone involved what the project is, why it's happening, who owns what, the key dates, and when the kickoff meeting is. Send it a few business days before the kickoff so people can read the brief first. Keep the goal and the first deadline in the opening lines, and put links at the bottom.",
  primaryIntent: "project kickoff email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Internal project kickoff email" },
    { type: "p", text: "For a cross-functional team. Owners by name, so nobody assumes someone else has it." },
    {
      type: "template",
      label: "Internal kickoff",
      subject: "Kickoff: [project name], meeting [day, date]",
      text: "Hi all,\n\nWe're starting [project name] on [date]. The goal: [one sentence, e.g. launch self-serve billing by March 31 so sales stops handling plan changes by hand].\n\nWho owns what\n- [Name]: project lead\n- [Name]: [area]\n- [Name]: [area]\n\nKey dates\n- [Date]: kickoff meeting\n- [Date]: [first milestone]\n- [Date]: [launch / delivery]\n\nKickoff meeting: [day, date, time, location or link]. Please read the brief beforehand: [link]. Bring questions and any risks you already see.\n\nUpdates will go out every [day] in [channel or email].\n\n[Your name]",
    },
    { type: "h2", text: "Client project kickoff email" },
    { type: "p", text: "Warmer, and focused on what the client needs to provide. Confirm scope in writing so there's a reference point later." },
    {
      type: "template",
      label: "Client kickoff",
      subject: "[Client] x [Your company]: kickoff on [date]",
      text: "Hi [Client name],\n\nWe're looking forward to getting started on [project]. Here's a summary before we meet.\n\nWhat we're delivering: [scope in one or two sentences]\nTimeline: [start date] to [end date], with [milestone] on [date]\nYour team: [Name] as main contact, [Name] for approvals\nOur team: [Name] (lead), [Name] ([role])\n\nTo start on time, we'll need from you by [date]:\n- [Access, assets, or information]\n- [Item]\n\nKickoff call: [day, date, time, link]. We'll walk through the plan and confirm how you'd like to receive updates.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "Short kickoff for a small project" },
    { type: "p", text: "For two or three people and a few weeks of work. Skip the meeting if the email covers it." },
    {
      type: "template",
      label: "Small project",
      subject: "Starting [project] this week",
      text: "Hi [Name] and [Name],\n\nWe're kicking off [project] this week. Goal: [outcome] by [date].\n\n[Name] owns [part], [Name] owns [part], and I'll handle [part]. The working doc is here: [link].\n\nFirst check-in is [day]. If anything in the plan looks off, reply here before then.\n\n[Your name]",
    },
    { type: "h2", text: "When a kickoff email is worth writing" },
    {
      type: "list",
      items: [
        "Write one for any project with more than two people, an external client, or a deadline more than two weeks out.",
        "Send it even if you're holding a kickoff meeting. The email is the written record the meeting isn't.",
        "Skip the full format for a task one person can finish in a few days. A [delegation email](/templates/delegation-email) fits better.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Pasting the whole project brief into the email. Link it.",
        "Owners listed as teams (\"Design\") instead of people.",
        "Leaving out what you need from the client and when. It's the usual reason week one slips.",
        "Sending it the morning of the kickoff. People need time to read the brief.",
      ],
    },
    { type: "h2", text: "How Synced drafts a kickoff email" },
    {
      type: "p",
      text: "When a signed proposal or a \"let's go\" message comes in, [Synced](/) can find the brief or SOW in Drive, propose kickoff times from Google Calendar, and draft the email with dates and names from the thread. It waits in Decide for your edits and approval. More on [drafting documents and emails](/features/drafting).",
    },
  ],
  faqs: [
    {
      q: "What should a project kickoff email include?",
      a: "The project goal, who owns each area, key dates and milestones, the kickoff meeting details, links to the brief, and anything you need from recipients before you start.",
    },
    {
      q: "Should the kickoff email go out before or after the kickoff meeting?",
      a: "Before, typically a few business days ahead, so people come to the meeting having read the plan. After the meeting, send a short recap with any changes.",
    },
    {
      q: "Who should receive the project kickoff email?",
      a: "Everyone who owns part of the work, the key stakeholders who approve it, and on client projects, the client's main contact and approver.",
    },
  ],
  related: ["/templates/project-status-update", "/templates/delegation-email", "/templates/follow-up-after-meeting", "/for/agencies"],
};
