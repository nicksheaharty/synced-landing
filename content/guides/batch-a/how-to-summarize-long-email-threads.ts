import type { Page } from "../../types";

export const summarizeLongThreads: Page = {
  slug: "/guides/how-to-summarize-long-email-threads",
  cluster: "guide",
  parent: "/guides",
  title: "How to Summarize Long Email Threads (Gmail, Outlook) | Synced",
  h1: "How to summarize long email threads",
  navLabel: "Summarize long email threads",
  cardText: "The built-in summary buttons in Gmail and Outlook, a manual method that works anywhere, and what to check before trusting either.",
  description:
    "How to summarize a long email thread: Gmail's Summarize this email, Copilot's Summarize in Outlook, and a five-minute manual method for any inbox.",
  eyebrow: "Guide",
  intro:
    "You've been cc'd on a 38-message thread and someone just asked for your opinion in message 39. Here's how to get the gist in a minute, with or without AI.",
  answer:
    "To summarize a long email thread, click Summarize this email at the top of the thread in Gmail (powered by Gemini) or Summarize / Summary by Copilot in Outlook. Without AI, read the first and last messages, then scan the middle only for decisions, open questions, and anything addressed to you by name. Either way, check dates and numbers against the original messages before you act on them.",
  primaryIntent: "how to summarize long email threads",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "What a useful thread summary contains" },
    {
      type: "p",
      text: "A thread summary isn't a shorter version of every message. It answers four questions: what was decided, what's still open, who owns each open item, and what, if anything, is being asked of you. If a summary doesn't tell you whether you need to reply, it hasn't done the job. More on the concept in [email summarization](/glossary/email-summarization).",
    },
    { type: "h2", text: "Summarize a thread in Gmail with Gemini" },
    {
      type: "p",
      text: "Gmail can summarize a conversation at the top of the thread. Google calls these AI Overview conversation summaries, and they need Gmail's smart features turned on. They're available in some languages only.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Open the thread on your computer",
          body: "Open the conversation in Gmail on the web. On long threads, Gmail may show a summary card at the top automatically.",
        },
        {
          title: "Click Summarize this email",
          body: "If no summary is showing, click Summarize this email at the top of the thread. The overview lists the key points and replies. Click the up arrow to hide it again.",
        },
        {
          title: "Act on suggested reminders",
          body: "If the summary spots a task with a due date, it can show a Remind me option next to it. Click it to create a reminder.",
        },
        {
          title: "Ask follow-up questions in the side panel",
          body: "On an eligible Google Workspace or Google AI plan, click Ask Gemini at the top right and ask something specific, like \"What did Priya agree to on pricing?\"",
        },
      ],
    },
    {
      type: "p",
      text: "If you see an error in the summary, click Bad suggestion below the card. That feedback goes to Google, and it's also a reminder that the card can be wrong.",
    },
    { type: "h2", text: "Summarize a thread in Outlook with Copilot" },
    {
      type: "p",
      text: "Copilot can summarize threads in new Outlook, classic Outlook, Outlook on the web, Outlook for Mac, and the iOS and Android apps. Microsoft has also added a one-click summary through Copilot Chat for some users without a full Copilot license, so what you see depends on your plan and your admin's settings.",
    },
    {
      type: "steps",
      items: [
        { title: "Select the conversation", body: "Open the thread in the reading pane." },
        {
          title: "Choose Summarize",
          body: "At the top of the email, select Summary by Copilot or Summarize, depending on your version. The summary appears above the thread.",
        },
        {
          title: "Check the citations",
          body: "Summaries can include numbered citations. Select one to jump to the message it came from, which is the fastest way to verify a claim.",
        },
        {
          title: "Summarize attachments separately",
          body: "In new Outlook, if the thread has a PDF, Word, or PowerPoint attachment, you can choose Summarize a file.",
        },
      ],
    },
    { type: "h2", text: "The manual method, for any inbox" },
    {
      type: "p",
      text: "Built-in summaries aren't on every account, and some companies turn them off. This takes about five minutes on a 30-message thread.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Read the first message. It tells you what the thread was originally about, which is often not what it's about now.",
        "Read the last two messages. They tell you where things stand.",
        "Search inside the thread for your name, and in Gmail press Ctrl+F (Cmd+F on Mac) for words like \"decided\", \"agreed\", \"can you\", and \"by Friday\".",
        "Scan the middle for new attachments and for new people joining the cc line. Both usually mark a turn in the conversation.",
        "Write three lines for yourself: decided, still open, asked of me.",
      ],
    },
    {
      type: "callout",
      title: "About pasting threads into a chatbot",
      text: "Copying a thread into a general AI chat tool works, but you're moving someone else's email into a separate service. Check your company's policy first, and strip out anything like contract terms or personal details the thread doesn't need.",
    },
    { type: "h2", text: "When you're the one writing the summary" },
    {
      type: "p",
      text: "If you're catching someone up, put the summary at the top of your reply, not buried under it. Lead with the decision and the one thing you need from them. The [project status update template](/templates/project-status-update) has a structure that works for this. Once you know what's being asked, the guide on [replying to emails faster](/guides/how-to-reply-to-emails-faster) covers the next step.",
    },
    { type: "h2", text: "Comparing the ways to summarize a thread" },
    {
      type: "table",
      head: ["Method", "Where it works", "Links back to sources", "Tells you what to do next"],
      rows: [
        ["Gmail Summarize this email", "Gmail with smart features on, supported languages", "No per-line citations", "Can suggest reminders for dated tasks"],
        ["Copilot Summarize in Outlook", "Outlook apps, depending on license and admin", "Yes, numbered citations", "No"],
        ["Manual skim", "Any inbox", "You read the originals", "Yes, if you write the three lines"],
        ["AI inbox assistant (Synced)", "Connected Gmail, Outlook, Slack, Teams, and more", "Works from the full thread", "Drafts the reply or task for approval"],
      ],
    },
    { type: "h2", text: "What Synced does with a long thread" },
    {
      type: "p",
      text: "[Synced](/) reads the whole thread when a new message arrives, so the summary is a means to an end: it works out what the latest message is asking and prepares the response. You get the decision instead of the recap.",
    },
    {
      type: "message",
      from: "Jordan (project lead)",
      source: "outlook",
      time: "3:41 PM",
      text: "Looping you in on the launch thread below. Can you weigh in on the date by tomorrow?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Read the 27 earlier messages: design wants Oct 14, legal needs review until Oct 18",
        "Drafted a reply proposing Oct 21 and asking legal to confirm",
      ],
      caption: "An illustration. Nothing is sent until you approve it.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Catch up on email threads with AI Overview conversation summaries", url: "https://support.google.com/mail/answer/16561387", checked: "2026-09-13" },
        { label: "Gmail Help: Collaborate with Gemini in Gmail", url: "https://support.google.com/mail/answer/14355636", checked: "2026-09-13" },
        { label: "Microsoft Support: Summarize an email thread with Copilot in Outlook", url: "https://support.microsoft.com/en-us/office/summarize-an-email-thread-with-copilot-in-outlook-a79873f2-396b-46dc-b852-7fe5947ab640", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Is Gmail's email summary free?",
      a: "Google says AI Overview conversation summaries are available to personal and work Gmail accounts in supported languages, with smart features turned on. Asking Gemini open-ended questions in the side panel requires an eligible Google Workspace or Google AI plan.",
    },
    {
      q: "Why don't I see Summarize this email in Gmail?",
      a: "Check that Smart features in Gmail, Chat, and Meet and Smart features in Google Workspace are on in Gmail settings. It also depends on your language, and Workspace admins can turn Gemini features off for an organization.",
    },
    {
      q: "Can I summarize an email thread in Outlook without Copilot?",
      a: "Not with a built-in button unless your account has Copilot or Copilot Chat enabled. The manual method in this guide works in any version of Outlook.",
    },
    {
      q: "How accurate are AI email summaries?",
      a: "Good at the gist, less reliable on specifics like dates, amounts, and who agreed to what. Verify those against the original message, which Outlook's citations make quick.",
    },
  ],
  related: ["/guides/how-to-reply-to-emails-faster", "/glossary/email-summarization", "/integrations/outlook"],
};
