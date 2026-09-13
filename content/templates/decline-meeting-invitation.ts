import type { Page } from "../types";

export const declineMeetingInvitation: Page = {
  slug: "/templates/decline-meeting-invitation",
  cluster: "template",
  parent: "/templates",
  title: "How to Decline a Meeting Invitation: Templates | Synced",
  h1: "Decline a meeting invitation",
  navLabel: "Decline a meeting invitation",
  cardText: "Say no to a calendar invite and still be useful: send input, a delegate, or another time.",
  description:
    "Templates to decline a meeting invitation politely: send written input instead, suggest a colleague, ask for notes, or propose a different time.",
  eyebrow: "Email template",
  intro: "Declining an invite is fine. Declining it with no note, two minutes before it starts, is how you end up on the agenda anyway.",
  answer:
    "Declining a meeting invitation takes two sentences: say you can't attend, then offer what you can do instead, such as sending input in writing, suggesting a colleague, or proposing another time. Decline in the calendar with a note rather than ignoring the invite, and do it as soon as you know so the organizer can plan around you.",
  primaryIntent: "decline meeting invitation email",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "p", text: "These are for a calendar invite. To turn down a request, a project, or an offer, use the [polite decline template](/templates/polite-decline). Most calendar apps let you add a note when you decline, and that note is usually all you need to write." },
    { type: "h2", text: "Decline and send your input in writing" },
    { type: "p", text: "The most useful decline. The organizer gets what they wanted from you without the hour." },
    {
      type: "template",
      label: "Send input instead",
      subject: "Declined: [meeting name]",
      text: "Hi [Name],\n\nI can't make [meeting name] on [day], but here's my input so you have it:\n\n- [Point or answer]\n- [Point or answer]\n\nIf a decision needs me, ping me after and I'll turn it around the same day.\n\n[Your name]",
    },
    { type: "h2", text: "Decline and suggest someone else" },
    {
      type: "template",
      label: "Suggest a colleague",
      subject: "Declined: [meeting name]",
      text: "Hi [Name],\n\nI won't be able to join on [day]. [Colleague] knows [topic] better than I do and is copied here in case they can attend in my place.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Decline because you're not needed, and ask for notes" },
    { type: "p", text: "For large meetings where you're one of twenty names. Keep it neutral." },
    {
      type: "template",
      label: "Ask for notes",
      subject: "Declined: [meeting name]",
      text: "Hi [Name],\n\nI'm going to skip this one so I can stay on [priority]. Could you send the notes or recording afterward? If anything comes up that needs me, I'm happy to follow up.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Decline this time and propose another" },
    {
      type: "template",
      label: "Propose a new time",
      subject: "[Meeting name]: could we do another time?",
      text: "Hi [Name],\n\nI have a conflict on [day] at [time]. I'd like to be there, so would [day, time] or [day, time] ([time zone]) work? If the time is fixed, go ahead without me and I'll catch up from the notes.\n\n[Your name]",
    },
    { type: "h2", text: "When declining is the right call" },
    {
      type: "list",
      items: [
        "Decline when there's no agenda, you have nothing to contribute, or a written update would cover your part.",
        "Decline recurring meetings you've stopped getting value from, with a note to the organizer, not a silent removal.",
        "Accept, or at least ask first, when you own a decision on the agenda or your manager set it up specifically for you.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Leaving the invite unanswered. The organizer can't tell whether you saw it.",
        "Declining with no note on a small meeting. Two people waiting on a video call will notice.",
        "Accepting and then not showing up. A decline is always better than a no-show.",
        "Over-explaining. \"I have a conflict\" is a complete reason.",
      ],
    },
    { type: "h2", text: "How Synced handles an invite you can't make" },
    {
      type: "p",
      text: "When an invite lands on a time that's already booked, [Synced](/) checks your Google Calendar and drafts the reply, whether that's a decline note or a proposal for another time. The draft waits in [Decide](/features/decide), and nothing goes out until you approve it.",
    },
  ],
  faqs: [
    {
      q: "Is it rude to decline a meeting invitation?",
      a: "No, not when you decline promptly and add a short note. It reads as rude when the invite is ignored, or declined at the last minute with no explanation.",
    },
    {
      q: "Should I decline in the calendar or send an email?",
      a: "Decline in the calendar with a note, so the organizer's attendee list is accurate. Send a separate email only when you're sharing input, suggesting a delegate, or the meeting was set up for you.",
    },
    {
      q: "How do I decline a recurring meeting?",
      a: "Message the organizer first, say why the meeting no longer needs you, and offer a lighter alternative such as reading the notes. Then decline the series so it doesn't just disappear from your calendar without a word.",
    },
  ],
  related: ["/templates/polite-decline", "/templates/reschedule-meeting", "/templates/sharing-your-availability", "/features/decide"],
};
