import type { Page } from "../types";

export const decide: Page = {
  slug: "/features/decide",
  cluster: "feature",
  parent: "/features",
  title: "Decide: The Approval Queue for AI Drafts and Invites | Synced",
  h1: "Decide",
  navLabel: "Decide",
  cardText: "The queue where drafted replies, calendar invites, and open questions wait for your yes.",
  description:
    "Decide is Synced's approval queue. AI-drafted replies, calendar invites, and questions wait there until you approve, edit, reprompt, or dismiss them.",
  eyebrow: "Feature",
  intro:
    "Decide holds the few things Synced won't do without you. Everything else in an Action Plan is already done by the time a card shows up.",
  answer:
    "Decide is the queue in Synced, the AI inbox assistant, where work that needs human judgment waits. Each card is a drafted message to send, a calendar event to create or change, or a question Synced couldn't answer from your connected sources. You can approve it, edit it, tell Synced what to change, or dismiss it. Nothing drafted by Synced is sent until you approve it in Decide.",
  primaryIntent: "synced decide queue",
  related: ["/features/drafting", "/features/tasks", "/glossary/human-in-the-loop-approval", "/how-it-works"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "hand",
  body: [
    { type: "h2", text: "The three kinds of card in Decide" },
    {
      type: "p",
      text: "Synced sorts everything that needs you into one of three shapes. Knowing them makes the queue fast to clear, because each one asks for a different kind of attention.",
    },
    {
      type: "features",
      items: [
        {
          icon: "draft",
          title: "A draft to send",
          body: "A finished email, Slack message, Teams message, or text, with recipients, subject, and attachments already filled in. You read it and send it, or fix it first.",
        },
        {
          icon: "calendar",
          title: "An event to confirm",
          body: "A new or changed calendar event: title, time, time zone, attendees, location, reminder, and a video link if needed. Every field is editable before it's created.",
        },
        {
          icon: "question",
          title: "A question to answer",
          body: "Something Synced searched for and couldn't find, or a choice with more than one reasonable answer. Pick an option or type your own reply.",
        },
      ],
    },
    { type: "h2", text: "What a Decide card looks like for one email" },
    {
      type: "p",
      text: "A card shows the message Synced is responding to at the top and its proposed action below. Here's a request that turns into two cards: the event first, then the reply that confirms it.",
    },
    {
      type: "message",
      from: "Elena (vendor)",
      source: "outlook",
      time: "2:14 PM",
      text: "Could we move Tuesday's install check-in to later in the week? Anything after 1 works on our side.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked your calendar and found Thursday 2:00 PM open",
        "Prepared the updated invite for Thursday for you to confirm",
        "Drafted a reply to Elena with the new time, held until the invite is approved",
      ],
      caption: "An illustration. Synced asks you to confirm the event first, then shows the reply with the final time in it.",
    },
    {
      type: "p",
      text: "The order matters. Synced won't send a reply that says \"see you Thursday\" before the Thursday event actually exists, so a meeting change always reaches you as the event card first and the message card second.",
    },
    { type: "h2", text: "Approve, edit, reprompt, or dismiss" },
    {
      type: "list",
      items: [
        "Approve sends the draft from your own account in the original thread, or creates the event on your calendar.",
        "Edit changes it yourself: To, Cc, Bcc, subject, attachments, the send-from account, and the body, which opens a full editor with bold, lists, and links.",
        "Reprompt tells Synced what's wrong in plain words (\"shorter\", \"wrong date, should be Friday\", \"less formal\"). You can type or dictate it. Synced keeps your manual edits and changes only what you asked.",
        "Dismiss stops that request and discards the pending card.",
      ],
    },
    {
      type: "p",
      text: "Two small things save a lot of rework. On a group thread, a Reply All control widens the recipients if Synced picked too narrow an audience. And a draft you started editing is still there if you close the card and come back.",
    },
    { type: "h2", text: "Clearing Decide on the web and on iPhone" },
    {
      type: "p",
      text: "On the web, Decide is a tab next to Messages and Tasks. On the [iOS app](/ios) it's a stack of cards with a counter (3 / 7): tap the buttons to answer, or swipe a card to push it to the back of the stack for later. Swiping never approves or discards anything. When the stack is empty, Decide says All caught up.",
    },
    {
      type: "p",
      text: "Conversations with a card waiting also show up under the Action Needed filter in Messages, with a Review and Approve button on the thread. Approving from either place clears it everywhere.",
    },
    { type: "h2", text: "What never lands in Decide" },
    {
      type: "p",
      text: "Decide is for Synced's work that needs your sign-off. Work that only a person can do, like signing a form or making a call, goes to [Tasks](/features/tasks) instead. Searching your mail, reading attachments, and checking availability also don't show up, because those steps don't change anything and Synced does them right away.",
    },
    {
      type: "p",
      text: "Bystander threads stay out too. When a message in a group thread is clearly aimed at someone else, Synced summarizes it and doesn't draft a reply that would butt into the conversation.",
    },
    { type: "h2", text: "Limits worth knowing" },
    {
      type: "p",
      text: "Every card came from an [Action Plan](/glossary/action-plan), and Action Plans count toward your weekly limit whether Synced finishes the work or hands it to Decide. Synced also has no setting to skip approval for AI-drafted messages. If you want an assistant that sends on its own, Synced isn't that tool.",
    },
  ],
  faqs: [
    {
      q: "Can Synced send replies without my approval?",
      a: "No. Every AI-drafted message waits in Decide until you approve it. You can edit it first, or schedule it to send later.",
    },
    {
      q: "What happens if I ignore a card in Decide?",
      a: "It stays in the queue. Synced doesn't send or create anything on a timeout. You can swipe it to the back of the stack or dismiss it.",
    },
    {
      q: "Can I schedule a draft from Decide instead of sending it now?",
      a: "Yes. Choose schedule send on the card and pick a preset like tomorrow at 9 AM or a custom date and time. See [scheduling](/features/scheduling) for meetings, which work differently.",
    },
  ],
};
