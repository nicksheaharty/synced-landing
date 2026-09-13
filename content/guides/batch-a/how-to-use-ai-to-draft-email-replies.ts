import type { Page } from "../../types";

export const aiDraftEmailReplies: Page = {
  slug: "/guides/how-to-use-ai-to-draft-email-replies",
  cluster: "guide",
  parent: "/guides",
  title: "How to Use AI to Draft Email Replies (Gmail, Outlook) | Synced",
  h1: "How to use AI to draft email replies",
  navLabel: "Use AI to draft email replies",
  cardText: "Gemini's Help me write, Copilot in Outlook, how to prompt for a reply worth sending, and what to check before you hit Send.",
  description:
    "How to use AI to draft email replies: Help me write in Gmail, Draft with Copilot in Outlook, prompts that produce usable replies, and a check before sending.",
  eyebrow: "Guide",
  intro:
    "AI is good at the first 80 percent of a reply: the greeting, the structure, the polite sentence you'd otherwise spend two minutes on. The last 20 percent, the actual decision and the facts, is still yours.",
  answer:
    "To draft an email reply with AI, open the reply and use the built-in assistant: Help me write (Gemini) in Gmail or Draft with Copilot in Outlook. Give it the decision and the facts in your prompt, such as \"say yes to Thursday, 30 minutes, ask for the agenda,\" not just \"reply to this.\" Then read the draft for wrong facts, promises you didn't mean to make, and tone before you send it.",
  primaryIntent: "how to use ai to draft email replies",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Three levels of AI help in an email reply" },
    {
      type: "table",
      head: ["Level", "What it does", "Examples"],
      rows: [
        ["Autocomplete", "Finishes your sentence as you type", "Gmail Smart Compose"],
        ["Suggested replies", "Offers short or full replies to pick from", "Gmail Smart Reply and Suggested Replies"],
        ["Drafting from a prompt", "Writes a full reply from your instructions and the thread", "Gmail Help me write, Copilot in Outlook"],
      ],
    },
    {
      type: "p",
      text: "Short one-tap suggestions are sometimes called [smart replies](/glossary/smart-reply). They're fine for \"Thanks, got it.\" Anything with a decision in it needs the third level, and a good prompt.",
    },
    { type: "h2", text: "Draft a reply with Help me write in Gmail" },
    {
      type: "p",
      text: "Help me write needs an eligible Google Workspace or Google AI plan, or a personal Google Account in the US in a supported language. Google announced in January 2026 that Help me write and Suggested Replies were rolling out to Gmail users at no cost.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Open the reply",
          body: "In Gmail on your computer, open the email and click Reply, or open an existing draft.",
        },
        {
          title: "Write your prompt",
          body: "In the prompt bar at the bottom of the compose window, type your instructions. If you don't see a prompt bar, click Help me write. Then click Create.",
        },
        {
          title: "Refine it",
          body: "Use options like Formalize or Shorten, or type a follow-up instruction such as \"Mention the Friday deadline.\" Undo and Redo switch between versions.",
        },
        {
          title: "Check the sources and edit",
          body: "Gemini can personalize drafts using your other emails and Drive files. When it does, a Sources button shows what it used. Edit the draft directly, then send.",
        },
      ],
    },
    {
      type: "p",
      text: "Smart Compose, the gray autocomplete text, is separate. Turn it on or off under Settings, See all settings, General, Smart Compose. Press Tab to accept a suggestion.",
    },
    { type: "h2", text: "Draft a reply with Copilot in Outlook" },
    {
      type: "steps",
      items: [
        {
          title: "Start the message",
          body: "Open a reply, or select Home, then New mail. Drafting doesn't work in plain text format, so switch to HTML under Settings, Mail, Compose if needed.",
        },
        {
          title: "Choose Draft with Copilot",
          body: "Select the Copilot icon in the toolbar and choose Draft (new Outlook and web) or Draft with Copilot (classic Outlook).",
        },
        {
          title: "Prompt and generate",
          body: "Type your instructions in the Copilot box and select Generate. Use Adjust to change tone or length, or Regenerate to start over.",
        },
        {
          title: "Keep and edit",
          body: "Select Keep it (or Keep) to put the draft in the message. Edit it and send.",
        },
      ],
    },
    {
      type: "p",
      text: "Which Copilot features you see depends on your Microsoft 365 plan and your organization's settings. If the icon is missing on a work account, ask your IT admin.",
    },
    { type: "h2", text: "Prompts that produce a reply worth sending" },
    {
      type: "p",
      text: "The AI can read the thread. It can't read your mind. The biggest quality jump comes from putting your decision in the prompt.",
    },
    {
      type: "table",
      head: ["Vague prompt", "Better prompt"],
      rows: [
        ["Reply to this", "Say yes to the Thursday call, offer 2 PM or 4 PM ET, ask Dana to send the agenda first"],
        ["Decline politely", "Decline the speaking slot, we're at capacity until January, suggest Priya from our team instead"],
        ["Answer his questions", "Confirm the price is $4,200, delivery is 3 weeks, and we can't do net-60, only net-30"],
        ["Make it professional", "Shorter, no exclamation marks, keep the apology to one sentence"],
      ],
    },
    {
      type: "p",
      text: "For replies you send often, like declining a meeting or a late-reply apology, a written template can beat a prompt. See the [polite decline template](/templates/polite-decline).",
    },
    { type: "h2", text: "What to check before sending an AI-drafted reply" },
    {
      type: "list",
      items: [
        "Numbers, dates, and names. Models get these subtly wrong more often than anything else.",
        "Commitments. Look for \"I'll send it today\" or \"happy to\" sentences you didn't ask for.",
        "Recipients. A reply-all draft on a sensitive thread is still a reply-all.",
        "Tone. AI drafts lean formal and a bit long. Cut the first and last sentence and see if it reads better.",
        "Attachments. If the reply says \"attached,\" make sure something is.",
      ],
    },
    { type: "h2", text: "How Synced drafts a reply before you open the email" },
    {
      type: "p",
      text: "Help me write and Copilot start drafting when you open an email and ask. [Synced](/), an AI inbox assistant, drafts when the message arrives. It reads the thread, searches connected Drive or OneDrive for any file being requested, checks your calendar if times come up, and leaves the draft in Decide. Every AI-drafted message needs your approval before it's sent. More on [drafting in Synced](/features/drafting), and a direct comparison in [Synced vs. Gemini in Gmail](/compare/synced-vs-gemini-in-gmail).",
    },
    {
      type: "message",
      from: "Dana (client)",
      source: "outlook",
      time: "7:32 AM",
      text: "Can we move Thursday's review to next week? And could you send the latest mockups beforehand?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the latest mockups in Google Drive",
        "Checked next week's calendar for open 30-minute slots",
        "Drafted a reply proposing Tuesday or Wednesday with the files attached",
      ],
      file: "Homepage_mockups_v4.pdf",
      caption: "An illustration. You can edit the draft before approving it.",
    },
    {
      type: "p",
      text: "If you only want help with the occasional reply, the assistant already in your email client is the simpler choice. Synced fits when most of your day is replies that need context from other places.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail Help: Draft emails with Gemini in Gmail", url: "https://support.google.com/mail/answer/13955415", checked: "2026-09-13" },
        { label: "Gmail Help: Smart Compose in Gmail", url: "https://support.google.com/mail/answer/9116836", checked: "2026-09-13" },
        { label: "Google blog: Gmail is entering the Gemini era", url: "https://blog.google/products-and-platforms/products/gmail/gmail-is-entering-the-gemini-era/", checked: "2026-09-13" },
        { label: "Microsoft Support: Draft an email message with Copilot in Outlook", url: "https://support.microsoft.com/en-us/office/draft-an-email-message-with-copilot-in-outlook-3eb1d053-89b8-491c-8a6e-746015238d9b", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Is it OK to send AI-written emails at work?",
      a: "Usually, as long as you've read and edited the draft and your company allows the tool. You're still responsible for what the email says, so treat the draft as a first version, not a finished one.",
    },
    {
      q: "Can people tell when an email reply was written by AI?",
      a: "Often, when it's unedited. Common tells are an overly formal opening, restating the question back, and a closing line offering further help. Cutting those makes most drafts read like you.",
    },
    {
      q: "Does Gmail's Help me write use my other emails?",
      a: "It can. Google says Gemini may personalize drafts using your other emails and Drive files, and shows a Sources button listing what it used.",
    },
    {
      q: "Why can't I see Draft with Copilot in Outlook?",
      a: "Common reasons are a plain text message format (switch to HTML), a Microsoft 365 plan without Copilot, or an admin setting that turns it off. Ask your IT admin on a work account.",
    },
  ],
  related: ["/guides/how-to-reply-to-emails-faster", "/glossary/smart-reply", "/features/drafting"],
};
