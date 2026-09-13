import type { Page } from "../types";

export const projectStatusUpdate: Page = {
  slug: "/templates/project-status-update",
  cluster: "template",
  parent: "/templates",
  title: "Project Status Update Email Template | Synced",
  h1: "Project status update email",
  navLabel: "Project status update",
  cardText: "A weekly update people actually read, a three-line version for executives, and one for when it's slipping.",
  description:
    "Project status update email templates: a weekly update with done, next, and blockers, a three-line version for executives, and an at-risk update.",
  eyebrow: "Email template",
  intro: "A status update is working when people stop messaging you to ask where things are.",
  answer:
    "A project status update email opens with the overall status in a word or two (on track, at risk, blocked), then covers what got done, what's next, and anything you need from the reader. Keep it scannable and under 200 words. Sending it on the same day each week sets an expectation, so fewer people ask for ad hoc updates.",
  primaryIntent: "project status update email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Weekly project status update" },
    { type: "p", text: "The standard format for a team or stakeholder list. Status goes in the subject so people who only read subjects still get it." },
    {
      type: "template",
      label: "Weekly update",
      subject: "[Project] update, week of [date]: [On track / At risk / Blocked]",
      text: "Hi all,\n\nStatus: [On track]. [One sentence on where things stand, e.g. Beta build is on schedule for the 24th.]\n\nDone this week\n- [Item]\n- [Item]\n\nNext week\n- [Item], [owner]\n- [Item], [owner]\n\nRisks and blockers\n- [Risk or blocker, and what you're doing about it]\n\nNeeded from you\n- [Name]: [decision or input] by [date]\n\nFull tracker: [link]\n\n[Your name]",
    },
    { type: "h2", text: "Three-line update for executives" },
    { type: "p", text: "Senior readers want the status, the date, and whether they need to do anything. Link to detail rather than including it." },
    {
      type: "template",
      label: "Executive summary",
      subject: "[Project]: [On track] for [milestone date]",
      text: "Hi [Name],\n\n[Project] is on track for [milestone] on [date]. This week we [biggest progress].\nOne thing to watch: [risk], which we're handling by [action].\nNothing needed from you right now. Details are in [link].\n\n[Your name]",
    },
    { type: "h2", text: "Status update when the project is at risk" },
    { type: "p", text: "Send this as soon as you know, not at the next scheduled update. Lead with the new date and the options." },
    {
      type: "template",
      label: "At risk",
      subject: "[Project] at risk: [milestone] likely moving to [new date]",
      text: "Hi [Name / all],\n\n[Milestone] is at risk. [One-sentence cause, e.g. the vendor API we depend on is two weeks late.]\n\nOptions:\n1. Move [milestone] to [new date], full scope.\n2. Keep [original date], cut [feature or scope].\n3. [Other option, e.g. add a contractor], cost [amount].\n\nI recommend option [number] because [reason]. I need a decision by [date] to keep the new plan realistic.\n\n[Your name]",
    },
    { type: "h2", text: "When a status email helps, and when a dashboard is enough" },
    {
      type: "list",
      items: [
        "Send an email when stakeholders don't open the project tool, or when a decision is needed from them.",
        "If everyone already works in a shared tracker, a two-line email linking to it is enough.",
        "Don't wait for the weekly update to report bad news. Send the at-risk version the day you know.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Listing every task. Include what changed, not everything that exists.",
        "\"Green\" status on a project that everyone privately knows is late. It costs trust at the next update.",
        "Requests buried in paragraph four. Put asks in their own section with names.",
        "Changing the format every week. The same headings make it faster to read.",
      ],
    },
    { type: "h2", text: "How Synced drafts a status update" },
    {
      type: "p",
      text: "When someone asks \"where are we on this?\", [Synced](/) searches your connected email, Slack, Teams, and Drive for the latest on that project and drafts the reply from what it finds. You review and edit it in Decide before it goes out. See [search](/features/search) for which sources it looks through.",
    },
  ],
  faqs: [
    {
      q: "How often should you send a project status update?",
      a: "Weekly is the common default for active projects. Fast projects with daily changes may need twice-weekly updates, and slow, long projects can move to every two weeks.",
    },
    {
      q: "What should a project status update email include?",
      a: "Overall status, what's done, what's next with owners, risks or blockers, and any decisions you need from the reader. A link to the full tracker covers everything else.",
    },
    {
      q: "How do you report a project delay by email?",
      a: "Say what's late and why in two sentences, give the realistic new date, and lay out options with your recommendation. Send it as soon as you know.",
    },
  ],
  related: ["/templates/project-kickoff-email", "/templates/follow-up-after-meeting", "/templates/deadline-extension-request", "/features/search"],
};
