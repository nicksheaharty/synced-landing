import type { Page } from "../../types";

export const stopMissingSlackMessages: Page = {
  slug: "/guides/how-to-stop-missing-slack-messages",
  cluster: "guide",
  parent: "/guides",
  title: "How to Stop Missing Slack Messages | Synced",
  h1: "How to stop missing Slack messages",
  navLabel: "Stop missing Slack messages",
  cardText: "Use Activity as your inbox, save requests to Later, set keywords and a notification schedule, and quiet the channels that bury the rest.",
  description:
    "How to stop missing Slack messages: use the Activity view, save requests to Later with reminders, add keywords, and tune channel and mobile notifications.",
  eyebrow: "Guide",
  intro:
    "Slack messages rarely get ignored. They get read on a phone in a hallway, marked as seen, and scrolled past by 40 newer ones. The fix is fewer notifications you don't need and a reliable place for the ones you do.",
  answer:
    "To stop missing Slack messages, treat Activity as your Slack inbox and clear it daily, save any request you can't handle right away to Later with a reminder, add channel keywords for your name, projects, and clients, and set busy channels to Just mentions. Then check Preferences, Notifications, When I'm not active on desktop so messages reach your phone when you step away.",
  primaryIntent: "how to stop missing slack messages",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Why Slack messages slip through" },
    {
      type: "list",
      items: [
        "Opening a message marks it as read, even if you meant to come back to it.",
        "Channels with every post notifying you train you to ignore the notification sound.",
        "Replies inside threads don't show up in the channel, and keywords in thread replies don't trigger a notification.",
        "Your phone and your laptop disagree about where you are, so notifications go to the device you're not looking at.",
      ],
    },
    { type: "h2", text: "Step 1: Use Activity as your Slack inbox" },
    {
      type: "p",
      text: "Slack's updated Activity view, introduced in January 2026, pulls DMs, mentions, thread replies, reactions, reminders, and app notifications into one feed. Working through it top to bottom beats clicking through bold channel names.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Open Activity",
          body: "Click Activity in your sidebar.",
        },
        {
          title: "Filter to what needs you",
          body: "Use the tabs or click Filters to narrow to DMs, Mentions, or Threads. Click the plus icon to save a combination as its own tab. Filters for channels, sidebar sections, and VIPs need a paid plan.",
        },
        {
          title: "Clear as you go",
          body: "Press Enter to reply, C to clear an item, and R to mark it as read. Arrow keys move through the list. The Dense layout fits more items on screen.",
        },
      ],
    },
    { type: "h2", text: "Step 2: Save requests to Later instead of remembering them" },
    {
      type: "p",
      text: "If a message asks you for something and you can't do it now, don't leave it as read. Save it.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Save the message",
          body: "Hover over the message and click the save icon. It goes to Later.",
        },
        {
          title: "Add a reminder",
          body: "Hover over the message, click the three dots, and choose Remind me about this. Pick a time or Custom time. For something already in Later, click the reminder icon on the item.",
        },
        {
          title: "Work from Later",
          body: "Click Later to see the In progress, Completed, and Archived tabs. When a reminder comes due, it also shows up in Activity.",
        },
      ],
    },
    {
      type: "p",
      text: "If the request is real work, not a quick answer, it may belong in your task list instead. The guide on [turning emails into tasks](/guides/how-to-turn-emails-into-tasks) covers the same idea for email, including Slack reminders.",
    },
    { type: "h2", text: "Step 3: Add keywords and quiet the noisy channels" },
    {
      type: "list",
      items: [
        "Keywords: click your profile picture, then Preferences, Notifications, and scroll to Channel keywords. Add your name spelled the way people actually type it, your projects, and your biggest clients. Keywords aren't case-sensitive and match exact words only.",
        "Busy channels: open the channel, click the notifications icon at the top of the conversation, and choose Just mentions. Mute channels you only skim.",
        "Important channels: set them to All new posts, or open Advanced options and turn on Follow every thread if the real conversation happens in threads.",
        "Review everything: in Preferences, Notifications, scroll to Exceptions to the defaults to see and reset every channel you've customized.",
      ],
    },
    { type: "h2", text: "Step 4: Make sure notifications reach the right device" },
    {
      type: "table",
      head: ["Setting", "Where", "What to pick"],
      rows: [
        ["When I'm not active on desktop", "Preferences, Notifications", "Send to mobile as soon as you're inactive, or after a short delay"],
        ["Notification schedule", "Preferences, Notifications", "Your working hours. Notifications pause outside them"],
        ["VIP notifications", "Preferences, Notifications, Also notify you about", "A few people who can reach you even when notifications are paused (paid plans)"],
      ],
    },
    {
      type: "p",
      text: "A notification schedule is the part people skip, and it matters in both directions. Without one, you silence Slack manually and forget to turn it back on. With one, anyone messaging at 11 PM gets delivered the next morning, and VIPs still get through.",
    },
    { type: "h2", text: "A daily routine that catches the rest" },
    {
      type: "list",
      ordered: true,
      items: [
        "Morning: clear Activity, filtered to DMs and Mentions, before opening any channel.",
        "Midday: check Later for anything due today.",
        "End of day: clear Activity again and save anything left to Later with a reminder for tomorrow.",
      ],
    },
    { type: "h2", text: "Comparing the ways to catch Slack requests" },
    {
      type: "table",
      head: ["Method", "Catches", "Misses", "Cost"],
      rows: [
        ["Activity view", "DMs, mentions, threads, reminders", "Requests in channels that don't mention you", "Free, some filters on paid plans"],
        ["Keywords", "Your name and topics in channel posts", "Keywords in thread replies", "Free"],
        ["Later and reminders", "Anything you save", "Anything you forget to save", "Free"],
        ["AI inbox assistant (Synced)", "Requests in messages that reach you, turned into drafts or Tasks", "Channels you aren't in", "Slack is on Pro, $29.99/user/month"],
      ],
    },
    { type: "h2", text: "What Synced does with a Slack message" },
    {
      type: "p",
      text: "[Synced](/) connects Slack as an Inbox and reads new messages as they arrive, next to your email. When a message asks you for something, it prepares the reply or creates a Task, so a request doesn't depend on you remembering it. Drafted Slack replies wait for your approval in Decide, like email. See [Synced for Slack](/integrations/slack) for setup. For [follow-up tracking](/glossary/follow-up-tracking), you can ask Synced to follow up on a conversation and it drafts the nudge for approval, and the Sent filter shows conversations still waiting on a reply.",
    },
    {
      type: "message",
      from: "Nina (design lead)",
      source: "slack",
      time: "4:18 PM",
      text: "hey, can you send me the final copy for the pricing page by tomorrow AM? want to get it into the mock tonight if possible",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: ["Found Pricing_page_copy_final.docx in Google Drive", "Drafted a reply to Nina with the file"],
      caption: "An illustration. The reply isn't posted until you approve it.",
    },
    {
      type: "p",
      text: "Slack is a Pro plan integration. If your problem is mostly noise, not missed requests, the free settings above will do more than any tool.",
    },
    {
      type: "sources",
      items: [
        { label: "Slack Help: Introducing the new Activity view in Slack", url: "https://slack.com/help/articles/46751260742035-Introducing-the-new-Activity-view-in-Slack", checked: "2026-09-13" },
        { label: "Slack Help: Save messages and files for later", url: "https://slack.com/help/articles/13453851074067-Save-it-for-Later", checked: "2026-09-13" },
        { label: "Slack Help: Set a reminder", url: "https://slack.com/help/articles/208423427-Set-a-reminder", checked: "2026-09-13" },
        { label: "Slack Help: Configure your Slack notifications", url: "https://slack.com/help/articles/201355156-Configure-your-Slack-notifications", checked: "2026-09-13" },
        { label: "Slack Help: Manage notifications for specific channels and direct messages", url: "https://slack.com/help/articles/360056534254-Manage-notifications-for-specific-channels-and-direct-messages", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Why am I not getting Slack notifications on my phone?",
      a: "Check Preferences, Notifications, When I'm not active on desktop. If it's set to a long delay, or you're active on your laptop, Slack holds mobile notifications. Also check whether a notification schedule or paused notifications are in effect.",
    },
    {
      q: "Do Slack keywords work in threads?",
      a: "No. Slack says keywords in thread replies won't trigger a notification. For threads you care about, reply once or turn on Follow every thread for that channel.",
    },
    {
      q: "Where did Saved items go in Slack?",
      a: "Saved messages and reminders now live together in Later, split into In progress, Completed, and Archived tabs.",
    },
    {
      q: "Can I mark a Slack message to come back to later?",
      a: "Yes. Hover over it and click the save icon to add it to Later, or use the three-dot menu and choose Remind me about this to get notified at a set time.",
    },
  ],
  related: ["/guides/how-to-manage-multiple-email-accounts", "/glossary/follow-up-tracking", "/integrations/slack"],
};
