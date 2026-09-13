import type { Page } from "../../types";

export const batchProcessEmail: Page = {
  slug: "/guides/how-to-batch-process-email",
  cluster: "guide",
  parent: "/guides",
  title: "How to Batch Process Email (Gmail and Outlook) | Synced",
  h1: "How to batch process email",
  navLabel: "Batch process email",
  cardText: "Check email at set times, clear it in one pass, and turn off the pings in between. The setup for Gmail and Outlook.",
  description:
    "Batch process email by checking at two to four set times a day, turning off notifications, and making one decision per message in a single pass. Setup included.",
  eyebrow: "Guide",
  intro:
    "Checking email every few minutes feels responsive and mostly produces a morning of half-read messages. Batching means fewer, longer sessions where every message gets a decision.",
  answer:
    "To batch process email, pick two to four fixed times a day to open your inbox, turn off new-mail notifications in between, and handle each session in one pass: archive what needs nothing, reply to anything under two minutes, snooze or schedule what needs later work, and hand off what belongs to someone else. A 2015 study in Computers in Human Behavior found people who limited checking to three times a day reported less daily stress.",
  primaryIntent: "how to batch process email",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "What batching email does, and the evidence for it" },
    {
      type: "p",
      text: "Batching replaces a constant trickle of checking with a few scheduled sessions. In a 2015 study by Kostadin Kushlev and Elizabeth Dunn, 124 adults spent one week checking email only three times a day and another week checking as often as they liked. During the limited week they reported less daily stress and felt less distracted by email.",
    },
    {
      type: "p",
      text: "It's one study, and the effect was modest. The practical case is simpler: a message you open at 10:42 and don't act on has to be read again later. Batching means you read each message once, when you have time to deal with it.",
    },
    { type: "h2", text: "Step 1: choose your email windows" },
    {
      type: "p",
      text: "Pick times that fit how fast people actually need you, not how fast they'd like you. Put them on your calendar as recurring events so meetings don't eat them.",
    },
    {
      type: "table",
      head: ["Your role", "A workable schedule", "Why"],
      rows: [
        ["Deep work (engineering, writing, design)", "Twice: late morning and late afternoon", "Protects the first focused block of the day"],
        ["Most office roles", "Three times: start of day, after lunch, an hour before you finish", "Nothing waits more than about four hours"],
        ["Client-facing, sales, support", "Four times, or every 90 minutes", "Response time is part of the job. Keep sessions short"],
        ["Managers", "Three times, plus a quick scan for your team's blockers", "Other people are waiting on your answers"],
      ],
    },
    {
      type: "p",
      text: "Tell the people who depend on you. One line in your email signature or a note to your team (\"I check email at 9, 1, and 4. For anything urgent, call or message me\") heads off most of the anxiety on both sides.",
    },
    { type: "h2", text: "Step 2: turn off the interruptions between windows" },
    {
      type: "list",
      items: [
        "Gmail on a computer: in Settings, See all settings, General, turn off desktop notifications for new mail, or limit them to important mail only.",
        "Gmail and Outlook on your phone: in the app's notification settings, turn off email notifications or restrict them to high-priority mail. Your phone's system settings can also silence the app during focus hours.",
        "Outlook: turn on Focused Inbox (Settings, Mail, Layout on the web; View, View settings in new Outlook) so the Other tab absorbs newsletters and automated mail until you choose to look.",
        "Close the email tab. A visible unread count is a notification you forgot to turn off.",
      ],
    },
    { type: "h2", text: "Step 3: process each batch in one pass" },
    {
      type: "p",
      text: "Open the inbox, start at the oldest message in the batch, and make one decision per message before moving on. Don't skip around, and don't leave anything \"to look at later\" without a tool that brings it back.",
    },
    {
      type: "table",
      head: ["If the message", "Do this", "In Gmail", "In Outlook"],
      rows: [
        ["Needs nothing from you", "Archive it", "Press `e` (with shortcuts on)", "Archive, or Delete for true junk"],
        ["Takes under two minutes", "Reply now, then archive", "`r` to reply", "Reply, then archive"],
        ["Needs real work later", "Schedule it back or make it a task", "Snooze (`b`) to a specific time", "Flag with a due date"],
        ["Belongs to someone else", "Forward with one line of context", "`f` to forward", "Forward"],
        ["Needs a decision you can't make yet", "Say when you'll answer", "Reply, then Snooze to that day", "Reply, then Flag"],
      ],
    },
    {
      type: "p",
      text: "Turn on Gmail keyboard shortcuts first (Settings, See all settings, Keyboard shortcuts on). With `j` and `k` to move between conversations and `e` to archive, a batch of 40 messages is mostly keystrokes. Press `?` in Gmail to see the full list.",
    },
    { type: "h2", text: "Step 4: stop batches from creating more email" },
    {
      type: "list",
      items: [
        "Schedule replies you write at odd hours. A reply sent at 11 PM invites another at 11:05. In Gmail, use the arrow next to Send and choose Schedule send.",
        "Ask for everything in one message. \"Can you send the contract, the invoice number, and a time for Thursday?\" saves two rounds.",
        "Unsubscribe during batches, not as a separate project. If you archive the same newsletter three times, unsubscribe the fourth time.",
        "Create a filter for anything you archive by reflex. The guide to [Gmail labels and filters](/guides/how-to-organize-gmail-with-labels-and-filters) walks through it.",
      ],
    },
    { type: "h2", text: "When batching email doesn't work" },
    {
      type: "p",
      text: "Batching fails when the inbox is really a queue of live requests: on-call support, a trading desk, a recruiter the week offers go out. In those cases, move urgent traffic to a channel that can interrupt you (phone, Slack, a paging tool) and batch the rest. It also fails if your manager expects replies within 15 minutes and nobody has had that conversation. Have it.",
    },
    { type: "h2", text: "Batching with Synced" },
    {
      type: "p",
      text: "[Synced](/) works well with a batching schedule because it keeps working between your windows. As messages arrive in Gmail, Outlook, Slack, Teams, and your other connected Inboxes, it writes an Action Plan: it drafts replies, finds files, and proposes meeting times. When you open Synced at your next window, those wait in [Decide](/features/decide) as a single queue of approvals, and nothing is sent until you approve it.",
    },
    {
      type: "message",
      from: "Sam (finance)",
      source: "slack",
      time: "11:20 AM",
      text: "Do you have the signed PO for the Denver order? Need it before I can release payment.",
      stepsLabel: "2 Tasks Ready for Approval",
      steps: [
        "Found the signed PO in OneDrive",
        "Drafted a reply with the file attached",
      ],
      caption: "An illustration. It sat in Decide until the 1 PM batch.",
    },
    {
      type: "sources",
      items: [
        { label: "Kushlev and Dunn, Checking email less frequently reduces stress (Computers in Human Behavior, 2015)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0747563214005810", checked: "2026-09-13" },
        { label: "Keyboard shortcuts for Gmail (Gmail Help)", url: "https://support.google.com/mail/answer/6594", checked: "2026-09-13" },
        { label: "Snooze emails until later (Gmail Help)", url: "https://support.google.com/mail/answer/7622010", checked: "2026-09-13" },
        { label: "Change email notifications (Gmail Help)", url: "https://support.google.com/mail/answer/1075549", checked: "2026-09-13" },
        { label: "Focused Inbox for Outlook (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/focused-inbox-for-outlook-f445ad7f-02f4-4294-a82e-71d8964e3978", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How many times a day should I check email?",
      a: "Two to four is a workable range for most jobs. The Kushlev and Dunn study used three times a day. Client-facing roles may need more frequent, shorter sessions.",
    },
    {
      q: "What's the two-minute rule for email?",
      a: "If a reply or action takes less than two minutes, do it the first time you read the message instead of saving it for later. Anything longer gets snoozed, flagged, or turned into a task.",
    },
    {
      q: "Won't people think I'm ignoring them?",
      a: "Usually not, if you tell them when you check email and give them a faster channel for urgent things. Most work email doesn't need a reply within an hour.",
    },
  ],
  related: ["/guides/how-to-catch-up-on-email-after-vacation", "/glossary/email-triage", "/features/decide"],
};
