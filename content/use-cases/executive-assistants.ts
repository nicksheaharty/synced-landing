import type { Page } from "../types";

export const executiveAssistants: Page = {
  slug: "/for/executive-assistants",
  cluster: "use-case",
  parent: "/for",
  title: "AI Inbox Assistant for Executive Assistants | Synced",
  h1: "Synced for executive assistants",
  navLabel: "Executive assistants",
  cardText: "Meeting requests, file asks, and replies in your executive's voice, ready before you open the inbox.",
  description:
    "Synced is an AI inbox for executive assistants. It reads the inboxes you manage, finds times and files, drafts replies in your executive's voice, and waits for approval.",
  eyebrow: "Use case",
  icon: "briefcase",
  intro:
    "Most of an assistant's day is the same few requests in different wording: can we meet, can you send, can you move, did they get back to us. Synced reads everything that comes in for the people you support and gets that work ready before you open it.",
  answer:
    "Synced is an AI inbox built for executive assistants. It reads the email, Slack, Teams, and text messages that come in for the executives you support, finds meeting times on the connected calendar, attaches files from Google Drive or OneDrive, and drafts replies the way your executive writes. You approve each one from a card stack in Decide, and nothing is sent without that approval. Synced is built to help assistants do more, not to replace them.",
  primaryIntent: "ai inbox assistant for executive assistants",
  published: "2026-09-13",
  updated: "2026-11-05",
  related: ["/for/admin-assistants", "/features/scheduling", "/features/decide", "/guides/how-to-delegate-email"],
  body: [
    { type: "h2", text: "What Synced does with an executive's inbox" },
    {
      type: "p",
      text: "Synced reads every new message in the accounts you connect and works out what each one is asking for. For the requests that fill an assistant's day, it does the groundwork before you look:",
    },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "Someone asks to meet", body: "Synced checks the executive's connected calendar, finds times that are open, and prepares the invite and the reply offering them." },
        { icon: "folder", title: "Someone asks for a file", body: "Synced finds the deck, contract, or pre-read in Google Drive or OneDrive and attaches it to the draft." },
        { icon: "draft", title: "A reply is owed", body: "Synced drafts it from the full thread, in the tone your executive uses with that person." },
        { icon: "tasks", title: "Only a person can do it", body: "Sign this, call them, pick the restaurant. Synced turns it into a Task with the sender, a date, and a link back to the thread." },
      ],
    },
    {
      type: "p",
      text: "The aim is that 95% of the work is done before you open the inbox, and your time goes to the messages that need judgment.",
    },
    { type: "h2", text: "A typical morning of requests, prepared by Synced" },
    { type: "h3", text: "A chief of staff wants time with your executive" },
    {
      type: "message",
      from: "Tom (chief of staff, partner company)",
      source: "outlook",
      time: "9:12 AM",
      text: "Looping in Maya's assistant. Could we get 45 minutes with Maya the week of the 22nd? In person if she's in Chicago, otherwise video.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked Maya's connected calendar for 45-minute openings the week of the 22nd",
        "Drafted a reply offering three times and asking which format they prefer",
      ],
      caption: "Illustration. Synced reads availability from the calendar on the account you connected.",
    },
    { type: "h3", text: "Your executive asks for a document in Slack" },
    {
      type: "message",
      from: "Maya (your executive)",
      source: "slack",
      time: "6:48 AM",
      text: "Can you send me the board pre-read from last quarter and draft a note to Daniel pushing our 1:1 to Thursday?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found last quarter's board pre-read in Google Drive",
        "Drafted a Slack reply to Maya with the file",
        "Drafted a short email to Daniel proposing Thursday",
      ],
      file: "Board_PreRead_Q2.pdf",
      caption: "Illustration. Two requests in one message, handled as one Action Plan.",
    },
    { type: "h3", text: "A thread goes quiet" },
    {
      type: "message",
      from: "You",
      source: "gmail",
      time: "Monday 8:45 AM",
      text: "@Synced follow up with Irene on the security questionnaire, we sent the NDA last Monday",
      stepsLabel: "1 Task Ready for Approval",
      steps: ["Drafted a short follow-up asking for the security questionnaire by Wednesday"],
      caption: "Illustration. The Sent filter shows conversations still waiting on the other side; ask Synced to chase any of them.",
    },
    {
      type: "p",
      text: "That's one less spreadsheet of who owes you what. More in the guide on [automating email follow-ups](/guides/how-to-automate-email-follow-ups).",
    },
    { type: "h2", text: "Approving a morning's work from one card stack" },
    {
      type: "p",
      text: "Everything Synced prepares that would send a message or touch a calendar lands in [Decide](/features/decide). On the [iOS app](/ios) it's a stack of cards you clear one at a time: read the draft, tap to approve, edit a line in place, or tap Reprompt and say what to change (\"make it Thursday\", \"warmer\"). Swipe a card to push it to the back for later. Swiping never approves or discards anything.",
    },
    {
      type: "p",
      text: "Meeting changes come in a fixed order: the calendar event first, then the reply that confirms it. Synced won't tell someone \"see you Thursday\" before the Thursday event exists.",
    },
    { type: "h2", text: "Drafts that learn how your executive writes" },
    {
      type: "p",
      text: "Every edit you make teaches Synced a little more about that executive. Cut the greeting on internal notes a few times, or keep sign-offs to initials, and that can become a style note. You can read those notes in Settings under Personal Voice, rewrite them yourself, or switch the feature off. Instructions you give on a single request always win. More on [drafting](/features/drafting).",
    },
    { type: "h2", text: "Connecting the accounts you manage" },
    {
      type: "p",
      text: "You sign in to Synced with your own phone number and a 6-digit code. Then you connect the inboxes you handle. Each Inbox type takes up to 4 accounts, so your Gmail, your executive's Gmail, and a shared Outlook can sit in one list, with Slack or Teams alongside.",
    },
    {
      type: "p",
      text: "Each account connects through Google's or Microsoft's own permission screen, so the account owner approves the connection. Synced has no separate delegate seat that works through Gmail delegation or Outlook delegate access, and there's no shared Decide queue where an executive approves what you prepared in their own app. If that's a requirement, ask about the Enterprise plan through the Contact Sales form on [pricing](/pricing).",
    },
    { type: "h2", text: "Scheduling with other assistants" },
    {
      type: "p",
      text: "Most executive scheduling happens between two assistants, each protecting a calendar. Today Synced handles your side: it reads the other assistant's request, checks your executive's calendar, and drafts the reply. Synced is designed so that when both assistants use it, the booking between them can happen without the back-and-forth.",
    },
    { type: "h2", text: "Which integrations matter for an executive assistant" },
    {
      type: "list",
      items: [
        "[Gmail](/integrations/gmail) or [Outlook](/integrations/outlook): where most scheduling and document requests arrive.",
        "[Slack](/integrations/slack) or [Microsoft Teams](/integrations/microsoft-teams): where your executive and their team ask for things between meetings.",
        "[Google Calendar](/integrations/google-calendar), or the calendar included with Outlook: availability for proposed times, and events once a time is agreed.",
        "[Google Drive](/integrations/google-drive) or [OneDrive](/integrations/onedrive): decks, pre-reads, travel documents, and contracts to attach. Dropbox is coming soon.",
        "[Text messages](/integrations/sms): requests that come in by text to a connected business number.",
      ],
    },
    { type: "h2", text: "Built for assistants, not to replace them" },
    {
      type: "p",
      text: "Several AI products are pitched as a replacement for the assistant. Synced assumes the opposite: the assistant knows the executive, the relationships, and the politics of a calendar, and an AI that does the prep makes that person faster. The same goes for chiefs of staff and office managers who handle messages for someone else. Admin teams with very high volume can also see [Synced for admin assistants](/for/admin-assistants).",
    },
    { type: "h2", text: "Where Synced isn't the right tool for an EA" },
    {
      type: "list",
      items: [
        "Delegate access without the owner's approval. Every connected account goes through the provider's permission screen.",
        "Shared approval between you and your executive. Decide belongs to the person signed in to that Synced account.",
        "Travel and expense booking. Synced drafts messages, finds files, and prepares calendar events. It doesn't book flights or file expenses.",
        "Sending on its own. There's no setting to skip approval for AI-drafted messages.",
      ],
    },
    {
      type: "p",
      text: "For how EAs usually set up delegation in Gmail and Outlook without extra tools, see [how to delegate email](/guides/how-to-delegate-email).",
    },
  ],
  faqs: [
    {
      q: "Can an executive assistant use Synced on their executive's inbox?",
      a: "Yes, by connecting it. Each Inbox type takes up to 4 accounts, and each account connects through the provider's own permission screen, which the account owner approves. Synced doesn't work through Gmail delegation or Outlook delegate access as a separate mode.",
    },
    {
      q: "Will Synced send emails on my executive's behalf without approval?",
      a: "No. Every AI-drafted message waits in Decide for approval from the person signed in to that Synced account.",
    },
    {
      q: "Does Synced learn how my executive writes?",
      a: "Synced drafts from the full thread and keeps style notes learned from the edits you make. You can view, rewrite, or turn off those notes in Settings under Personal Voice.",
    },
    {
      q: "Does Synced work with Outlook calendars?",
      a: "Yes. Connecting an Outlook account includes its calendar, so Synced can propose times from it and prepare events for approval, the same as with Google Calendar. See [Outlook](/integrations/outlook).",
    },
    {
      q: "Is Synced trying to replace executive assistants?",
      a: "No. Synced is built for assistants. It prepares the routine work and the assistant approves, edits, and handles anything that needs judgment.",
    },
  ],
};
