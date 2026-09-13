import type { Page } from "../types";

export const introductionEmail: Page = {
  slug: "/templates/introduction-email",
  cluster: "template",
  parent: "/templates",
  title: "Introduction Email Templates: Connect Two People | Synced",
  h1: "Introduction email",
  navLabel: "Introduction email",
  cardText: "Connect two people with a double opt-in, introduce yourself, or ask for an intro someone can forward.",
  description:
    "Introduction email templates: a double opt-in check, an intro connecting two people, introducing yourself to a new contact, and asking for an introduction.",
  eyebrow: "Email template",
  intro: "A good intro takes the introducer two minutes and saves both people a cold email.",
  answer:
    "A good introduction email says who each person is in one line, why they should talk, and what the next step is, all in under 100 words. When connecting two people, ask each one privately first (a double opt-in) so nobody receives an introduction they didn't want. When asking for an intro, write a short blurb the introducer can forward as-is.",
  primaryIntent: "introduction email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Double opt-in check before an introduction" },
    { type: "p", text: "Send this privately to the person being asked for their time, usually the more senior or busier one." },
    {
      type: "template",
      label: "Opt-in check",
      subject: "Intro to [Name]?",
      text: "Hi [Name],\n\n[Other person], [one-line description], is working on [project] and would like to ask you about [specific topic]. I think you'd find it worthwhile because [reason].\n\nOK if I introduce you? No problem if not.\n\n[Your name]",
    },
    { type: "h2", text: "Introducing two people" },
    { type: "p", text: "Once both have said yes. One line on each person, the reason, then step out of the way." },
    {
      type: "template",
      label: "Connecting two people",
      subject: "Intro: [Name A] <> [Name B]",
      text: "Hi [Name A] and [Name B],\n\nIntroducing you two, as promised.\n\n[Name A] is [role] at [company] and is [working on / looking for] [thing].\n\n[Name B] is [role] and has [relevant experience].\n\nI think a short call about [topic] would be useful for both of you. [Name A], I'll let you take it from here.\n\n[Your name]",
    },
    { type: "h2", text: "Introducing yourself to a new contact or team" },
    { type: "p", text: "For a new client contact, a new team, or someone you'll be working with. Say who you are, why you're writing, and how you'll work together." },
    {
      type: "template",
      label: "Introducing yourself",
      subject: "Introduction: [your name], [role] on [project]",
      text: "Hi [Name],\n\nI'm [your name], the new [role] on [project / account]. I'll be your main contact for [what you'll handle], taking over from [previous person] as of [date].\n\nOver the next couple of weeks I'll [first thing you'll do]. If there's anything open that I should know about, reply here and I'll pick it up.\n\nLooking forward to working together,\n[Your name]\n[Title, phone]",
    },
    { type: "h2", text: "Asking someone for an introduction" },
    { type: "p", text: "Make it easy: include a separate paragraph they can forward without editing." },
    {
      type: "template",
      label: "Asking for an intro",
      subject: "Would you introduce me to [Name]?",
      text: "Hi [Name],\n\nI saw you're connected to [Target name] at [company]. Would you be comfortable introducing us? I've written a short note below you can forward, and it's completely fine to say no.\n\n---\n[Your name] is [one line on who you are]. They're working on [project] and would like 20 minutes with [Target name] to ask about [specific topic].\n---\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "When an introduction email makes sense" },
    {
      type: "list",
      items: [
        "Make the intro when you can say in one sentence why these two people should talk.",
        "Skip it, or ask first, when one person is much busier than the other or has said they're not taking new calls.",
        "Introduce yourself by email when you're taking over a relationship. The other person shouldn't find out from an auto-reply.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Surprise intros to busy people. Use the opt-in check.",
        "Full bios. One line each, and link to a profile if they want more.",
        "Staying on the thread. The person who asked for the intro should move you to BCC when they reply.",
        "A vague reason like \"you two should connect.\" Name the topic.",
      ],
    },
    { type: "h2", text: "How Synced drafts introductions" },
    {
      type: "p",
      text: "When someone emails or messages you asking to be introduced, [Synced](/) pulls who they are and what they want from the thread and drafts the opt-in note or the intro itself. The draft goes to [Decide](/features/decide) so you can check the wording before it reaches anyone.",
    },
  ],
  faqs: [
    {
      q: "What is a double opt-in introduction?",
      a: "It's when you ask each person privately whether they want the introduction before connecting them. Many people only ask the busier person, since the one requesting the intro has already said yes.",
    },
    {
      q: "Who should reply first after an introduction email?",
      a: "Common practice is for the person who asked for the introduction to reply first, thank the introducer, move them to BCC, and suggest times.",
    },
    {
      q: "What subject line should an introduction email have?",
      a: "Something like \"Intro: Name A <> Name B\" or \"Introduction: your name, role.\" Both people can find it later, and the purpose is clear from the inbox.",
    },
  ],
  related: ["/templates/meeting-request", "/templates/delegation-email", "/templates/follow-up-after-meeting", "/for/founders"],
};
