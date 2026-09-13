import type { Page } from "../types";

export const slack: Page = {
  slug: "/integrations/slack",
  cluster: "integration",
  parent: "/integrations",
  title: "AI Assistant for Slack DMs and Channels | Synced",
  h1: "Synced for Slack",
  navLabel: "Slack",
  cardText: "Reads your DMs and channels, finds the file or answer, and drafts the Slack reply.",
  description:
    "Synced is an AI assistant for Slack that reads your DMs, group DMs, and channels you're in, then drafts replies with the right file attached for your approval.",
  eyebrow: "Integration · Inbox",
  intro:
    "Slack asks are short and assume you know the context. Synced finds that context in your Drive, calendar, and past Slack messages, then writes the reply.",
  answer:
    "Synced, the AI inbox assistant, connects to Slack through Slack's authorization page and reads your direct messages, group DMs, and the public and private channels you're a member of. For each message that needs something from you, Synced searches for context, drafts a reply, and can attach files. Replies post from your own Slack account only after you approve them. Slack is part of the Pro plan.",
  primaryIntent: "ai assistant for slack",
  related: ["/integrations/microsoft-teams", "/integrations/google-drive", "/guides/how-to-stop-missing-slack-messages"],
  published: "2026-09-13",
  updated: "2026-09-13",
  integration: { brand: "slack", plans: "pro", kind: "inbox" },
  body: [
    { type: "h2", text: "What Synced does with a Slack DM" },
    {
      type: "p",
      text: "A sales rep pings you 20 minutes before a call. No greeting, no file name, just the ask. In Slack that usually means dropping what you're doing to dig through Drive. Synced does the digging.",
    },
    {
      type: "message",
      from: "Marcus (sales)",
      source: "slack",
      time: "1:40 PM",
      text: "do you have the final pricing one-pager? on with the Northwind buyer at 2",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Searched Drive and picked the most recent pricing one-pager over two older drafts",
        "Drafted a short reply in the same DM with the PDF attached",
      ],
      file: "Pricing_OnePager_final.pdf",
      caption: "Approve from Decide on your phone and the file lands in Marcus's DM before 2.",
    },
    {
      type: "p",
      text: "The reply reads like a Slack message, short and plain, not like an email pasted into chat. When Synced can't tell which file is the final one, it can ask you in Decide.",
    },
    { type: "h2", text: "Which Slack conversations Synced reads" },
    {
      type: "list",
      items: [
        "Direct messages to you.",
        "Group DMs you're part of.",
        "Public channels you've joined. Channels you haven't joined stay invisible to Synced.",
        "Private channels you're a member of.",
      ],
    },
    {
      type: "p",
      text: "Synced can also search your past Slack messages when a new one refers to something earlier, like \"the numbers Priya posted last week.\"",
    },
    { type: "h2", text: "What you can hand off in Slack" },
    {
      type: "features",
      items: [
        { icon: "folder", title: "File requests", body: "Synced finds the file in [Google Drive](/integrations/google-drive) or OneDrive and attaches it to the Slack reply." },
        { icon: "calendar", title: "\"Got 15 minutes?\"", body: "Synced checks your calendar and replies with open times you can approve or edit." },
        { icon: "search", title: "Questions about old threads", body: "Past Slack messages get searched before the draft is written, so the answer matches what was already said." },
        { icon: "tasks", title: "Asks meant for someone else", body: "When a message is really a to-do for a person, Synced can turn it into a Task instead of a reply." },
      ],
    },
    { type: "h2", text: "How to connect Slack to Synced" },
    {
      type: "steps",
      items: [
        { title: "Open Settings in Synced", body: "On the web app or iOS, open Settings and choose Slack under Inboxes. Free accounts are sent to the upgrade screen first." },
        { title: "Check the permissions sheet", body: "Synced reads your messages automatically for context. Sending any Slack message on your behalf is listed as needing your direct approval." },
        { title: "Allow access on Slack's page", body: "Pick the workspace and approve the access Slack lists. If your workspace requires admin approval for apps, Slack tells you here." },
        { title: "Add more workspaces if you need them", body: "Each workspace is its own account in Settings under Slack. Choose one as the default." },
      ],
    },
    { type: "h2", text: "Slack permissions Synced requests" },
    {
      type: "table",
      head: ["Access on Slack's screen", "What Synced uses it for"],
      rows: [
        ["View messages in your DMs, group DMs, and channels you're in", "Read new messages and search older ones for context."],
        ["View basic channel and people info", "Show channel names and who a message is from."],
        ["Start DMs and send messages as you", "Post replies you've approved, from your own account."],
        ["View and upload files", "Read files shared in a conversation and attach files to approved replies."],
      ],
      caption: "Slack shows the full list on its authorization page before you approve.",
    },
    { type: "h2", text: "Which Synced plan includes Slack" },
    {
      type: "p",
      text: "Slack is a Pro integration, also included on Enterprise. Pro is $29.99/user/month or $24.99 billed annually and covers 100 Action Plans a week. A Slack message Synced acts on counts as one Action Plan, same as an email. Details on [pricing](/pricing).",
    },
  ],
  faqs: [
    {
      q: "Will my teammates see a Synced bot in Slack?",
      a: "No bot joins your channels. Replies you approve post from your own Slack account, in the DM or channel the message came from.",
    },
    {
      q: "Does Synced read every channel in my Slack workspace?",
      a: "No. It reads DMs, group DMs, and channels you're already a member of. A public channel you've never joined isn't included.",
    },
    {
      q: "Can I connect more than one Slack workspace?",
      a: "Yes. Add each workspace from Settings under Slack. Messages from all of them show up in the same list, and replies go back to the workspace they came from.",
    },
    {
      q: "Can Synced send a Slack message without me approving it?",
      a: "No. Every AI-drafted Slack message waits in Decide. You can edit the text before approving, or dismiss it.",
    },
  ],
};
