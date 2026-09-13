import type { Page } from "../types";

export const groupme: Page = {
  slug: "/integrations/groupme",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for GroupMe Group Chats | Synced",
  h1: "Synced for GroupMe",
  navLabel: "GroupMe",
  cardText: "Follows the GroupMe groups you pick and drafts replies to the messages that need you.",
  description:
    "Synced's GroupMe integration follows the group chats you choose, spots messages that need an answer from you, and drafts replies that post after you approve.",
  eyebrow: "Integration · Inbox",
  intro:
    "GroupMe groups move fast and most of it isn't for you. Synced follows the groups you choose and surfaces the messages that actually need your answer.",
  answer:
    "Synced, the AI inbox assistant, connects to GroupMe through GroupMe's own sign-in, then follows only the groups you pick. It reads new messages in those groups, checks your calendar and files when a message asks something of you, and drafts a reply that posts to the group only after you approve it. Members will see a bot named Synced added to each followed group. GroupMe is part of the Pro plan.",
  primaryIntent: "ai assistant for groupme",
  related: ["/integrations/sms", "/integrations/google-calendar", "/integrations/slack", "/features/decide"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "groupme", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a GroupMe message" },
    {
      type: "p",
      text: "The parents' group for a youth soccer team has 40 messages about snacks. Then the coach posts the one that needs a yes or no from you.",
    },
    {
      type: "message",
      from: "Coach Dave (U12 parents group)",
      source: "groupme",
      time: "Thu 8:31 PM",
      text: "Need 3 drivers for Saturday's away game, leaving the lot at 8:15. Who can take kids?",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Checked your calendar: Saturday morning is clear until 1 PM",
        "Drafted a short reply offering to drive, with room for two more kids",
      ],
      caption: "Approve it and the reply posts to the group under your name. Dismiss it and nothing is posted.",
    },
    {
      type: "p",
      text: "The drafts sound like a group chat: a sentence or two, no greeting, no sign-off. In a busy group, the point is the few messages that ask something of you, not a reply to every photo of the snack table.",
    },
    { type: "h2", text: "What you can hand off in GroupMe" },
    {
      type: "features",
      items: [
        { icon: "calendar", title: "\"Who's free Saturday?\"", body: "Synced checks your connected calendar before drafting a yes, or a no with a reason." },
        { icon: "users", title: "Club, team, and class groups", body: "Student organizations, rec leagues, and volunteer groups where the real asks get buried in banter." },
        { icon: "folder", title: "\"Can someone repost the sign-up sheet?\"", body: "If the file is in your Drive or OneDrive, Synced can draft the reply that shares it." },
        { icon: "bell", title: "Less scrolling back", body: "Messages from followed groups land in Synced's list with your other Inboxes, so a missed ask doesn't mean reading 200 messages." },
      ],
    },
    { type: "h2", text: "How to connect GroupMe to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings and choose GroupMe", body: "It's under Inboxes in the web app and on iOS. The permissions sheet shows Synced reads messages in the groups you choose, and that posting always needs your approval." },
        { title: "Sign in on GroupMe's page", body: "A GroupMe sign-in window opens. Log in with the account you use for your groups." },
        { title: "Pick the groups to follow", body: "Synced lists your groups with member counts. Tick the ones you want, up to 20 at a time." },
        { title: "Tap Connect", body: "Synced adds a bot named Synced to each group you picked, which is how it receives new messages. Replies you approve post as you." },
      ],
    },
    { type: "h2", text: "What GroupMe access Synced gets" },
    {
      type: "table",
      head: ["Access", "What Synced uses it for"],
      rows: [
        ["Your GroupMe account and group list", "Show your groups so you can choose which ones to follow."],
        ["A listener bot in each chosen group", "Receive new messages in those groups, and nothing from groups you didn't pick."],
        ["Group members", "Know who's who when a message mentions someone."],
        ["Posting to the group", "Send replies you've approved. Nothing posts without approval."],
      ],
      caption: "You sign in on GroupMe's own page, so Synced never sees your GroupMe password.",
    },
    {
      type: "callout",
      title: "The Synced bot stays until you remove it",
      text: "Disconnecting GroupMe in Synced stops Synced from reading your groups. The bot stays listed in each group until you or a group admin remove it in GroupMe.",
    },
    { type: "h2", text: "Which Synced plan includes GroupMe" },
    {
      type: "p",
      text: "GroupMe is included on Pro ($29.99/user/month, or $24.99 billed annually) and Enterprise. Each message Synced writes an Action Plan for counts toward Pro's 100 a week. See [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Will people in my GroupMe group know I use Synced?",
      a: "They'll see a bot named Synced added to the group, since that's how GroupMe lets apps receive group messages. Replies you approve post under your own name.",
    },
    {
      q: "Does Synced read my GroupMe direct messages?",
      a: "No. Synced follows the groups you pick during setup. Direct messages and groups you didn't pick aren't included.",
    },
    {
      q: "How do I add or remove groups later?",
      a: "Connect GroupMe again from Settings and pick the groups you want followed. To stop following a group completely, remove the Synced bot from that group in GroupMe.",
    },
    {
      q: "Does Synced reply to every message in the group?",
      a: "Synced is built to surface the messages that ask something of you, and any reply it drafts waits for your approval. Nothing posts to the group on its own.",
    },
  ],
};
