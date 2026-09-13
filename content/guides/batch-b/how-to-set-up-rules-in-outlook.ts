import type { Page } from "../../types";

export const setUpRulesInOutlook: Page = {
  slug: "/guides/how-to-set-up-rules-in-outlook",
  cluster: "guide",
  parent: "/guides",
  title: "How to Set Up Rules in Outlook (New, Classic, and Web) | Synced",
  h1: "How to set up rules in Outlook",
  navLabel: "Set up rules in Outlook",
  cardText: "Step-by-step rules for new Outlook, Outlook on the web, and classic Outlook, plus the limits that break them.",
  description:
    "Set up rules in Outlook to move, flag, or forward email automatically. Steps for new Outlook, the web, and classic Outlook, plus rule order and limits.",
  eyebrow: "Guide",
  intro:
    "An Outlook rule is an if-this-then-that for incoming mail. The steps depend on which Outlook you have, and there are three of them in common use.",
  answer:
    "To set up a rule in new Outlook or Outlook on the web, go to Settings, Mail, Rules, select Add new rule, name it, choose a condition and an action, and save. In classic Outlook for Windows, right-click a message and choose Rules, then Create Rule, or use File, Manage Rules & Alerts, New Rule for more options. Rules run in order, and in Exchange Online all enabled rules share a 256 KB size limit.",
  primaryIntent: "how to set up rules in outlook",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Which Outlook you're using decides the steps" },
    {
      type: "table",
      head: ["Version", "How to recognize it", "Where rules live"],
      rows: [
        ["New Outlook for Windows", "A desktop app with a simplified ribbon and a switch back to classic", "Settings, Mail, Rules"],
        ["Outlook on the web / Outlook.com", "Opened in a browser", "Settings, Mail, Rules"],
        ["Classic Outlook for Windows", "A File tab in the ribbon", "File, Manage Rules & Alerts"],
      ],
    },
    {
      type: "p",
      text: "New Outlook and Outlook on the web share the same rules screen. One limitation from Microsoft's documentation: new Outlook doesn't support rules for third-party accounts like Gmail or Yahoo added to it.",
    },
    { type: "h2", text: "Set up a rule in new Outlook or Outlook on the web" },
    {
      type: "steps",
      items: [
        { title: "Open the rules settings", body: "Select Settings (the gear), then Mail, then Rules. Select Add new rule." },
        { title: "Name the rule", body: "Use a name you'll understand in a year, like \"Acme to Clients folder\", not \"Rule 7\"." },
        { title: "Add a condition", body: "Pick from the dropdown, such as From, Subject includes, or Sent to. Use Add a condition for more than one; all of them must match." },
        { title: "Add an action", body: "Choose what happens, such as moving to a folder, marking as read, flagging, categorizing, or forwarding. Use Add an action for more than one." },
        { title: "Add exceptions if needed", body: "Select Add exception, for example \"except if the subject includes invoice\"." },
        { title: "Decide on Stop processing more rules", body: "In Outlook on the web this is checked by default. Leave it on for rules that should be final, like moving mail to a folder. Turn it off if later rules should also act on the same message." },
        { title: "Save", body: "Select Save. Rules can be toggled on and off, edited, or deleted from the same list." },
      ],
    },
    {
      type: "p",
      text: "Quicker route in new Outlook: right-click a message, hover over Rules, and select Create rule. Pick a folder to move similar mail to, or select More options for the full editor. Use the run icon next to a rule in the Rules list to apply it to messages already in your inbox.",
    },
    { type: "h2", text: "Set up a rule in classic Outlook for Windows" },
    {
      type: "steps",
      items: [
        { title: "Start from a message", body: "Right-click an email, select Rules, then Create Rule. Choose conditions like the sender or subject and an action like moving to a folder, then select OK." },
        { title: "Run it on existing mail", body: "Check Run this new rule now on messages already in the current folder if you want it to clean up the backlog too." },
        { title: "Or start from a template", body: "For more options, select File, Manage Rules & Alerts, New Rule. Pick a template such as Flag messages from someone for follow-up, edit the underlined values, select Next through the steps, name the rule, and select Finish." },
        { title: "Run rules manually later", body: "In Manage Rules & Alerts, select Run Rules Now, choose the rules and the folder, and select Run Now." },
      ],
    },
    {
      type: "callout",
      title: "Client-only rules in classic Outlook",
      text: "Microsoft notes that a rule with a custom action runs only on the computer where it's installed, and only while Outlook is running. If a rule works at your desk but not on your phone, this is usually why. Rules built from standard actions, such as moving mail to a folder, don't have that restriction.",
    },
    { type: "h2", text: "Outlook rules worth setting up first" },
    {
      type: "table",
      head: ["Rule", "Condition", "Action"],
      rows: [
        ["Client folders", "From contains @clientdomain.com", "Move to Clients/[Name]; keep Stop processing on"],
        ["CC'd mail out of the way", "Sent to or CC includes me, but I'm not in To", "Move to a CC folder or categorize"],
        ["Automated reports", "From is the reporting system address", "Move to Reports, mark as read"],
        ["Your boss stands out", "From is your manager", "Categorize with a red category; stop processing off"],
        ["Newsletters", "Message includes unsubscribe", "Move to Reading"],
      ],
      caption: "Condition names vary slightly between versions. Look for the closest match in the dropdown.",
    },
    { type: "h2", text: "Why Outlook rules stop working" },
    {
      type: "list",
      items: [
        "Rule order. Rules run top to bottom. A broad rule with Stop processing more rules above a specific one means the specific rule never runs. Reorder with the up and down arrows in Settings, Mail, Rules.",
        "The size limit. In Exchange Online, all enabled inbox rules in a mailbox share 256 KB. Long rule names and many conditions use it up faster. Disabled rules don't count, and admins can lower the quota but not raise it.",
        "Client-only actions in classic Outlook, which only run while that computer has Outlook open.",
        "Third-party accounts in new Outlook, where rules aren't supported.",
        "A changed sender address. If a vendor moves from billing@ to invoices@, the rule silently misses.",
      ],
    },
    {
      type: "p",
      text: "Before adding a new rule, check whether an existing one can take another condition. Fewer, broader rules are easier to debug than 60 narrow ones, and they stay under the size limit. For the Gmail equivalent, see [how to organize Gmail with labels and filters](/guides/how-to-organize-gmail-with-labels-and-filters).",
    },
    { type: "h2", text: "Where Outlook rules stop and Synced picks up" },
    {
      type: "p",
      text: "Rules are good at sorting by sender and subject. They can't read a message and tell that a client is asking for last month's report and a call next week. [Synced](/) connects to Outlook as an Inbox and does that part: it reads each new message, drafts the reply, finds files in OneDrive, and proposes open times. Replies go out from your Outlook account only after you approve them in Decide.",
    },
    {
      type: "message",
      from: "Jordan (client)",
      source: "outlook",
      time: "8:15 AM",
      text: "Could you send over the March utilization report before our check-in? Also, can we move the check-in to Thursday afternoon?",
      stepsLabel: "3 Tasks Ready for Approval",
      steps: [
        "Found the March utilization report in OneDrive",
        "Picked two open slots on Thursday afternoon",
        "Drafted a reply with the report and the times",
      ],
      caption: "An illustration. Your folder rules keep running as usual.",
    },
    {
      type: "p",
      text: "Outlook is included on Synced's Pro plan. Setup is on the [Outlook integration](/integrations/outlook) page.",
    },
    {
      type: "sources",
      items: [
        { label: "Manage email messages by using rules in Outlook (Microsoft Support)", url: "https://support.microsoft.com/en-us/office/manage-email-messages-by-using-rules-in-outlook-c24f5dea-9465-4df4-ad17-a50704d66c59", checked: "2026-09-13" },
        { label: "Modify the space used by Inbox rules in Exchange Online (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/increase-the-space-used-by-inbox-rules", checked: "2026-09-13" },
        { label: "Exchange Online limits (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I make an Outlook rule apply to emails already in my inbox?",
      a: "In new Outlook, go to Settings, Mail, Rules and select the run icon next to the rule. In classic Outlook, check Run this new rule now when you create it, or use Run Rules Now in Manage Rules & Alerts.",
    },
    {
      q: "What does Stop processing more rules mean in Outlook?",
      a: "Once a message matches that rule, Outlook skips every rule below it. It's useful for final actions like moving mail to a folder, and the most common reason a later rule seems to do nothing.",
    },
    {
      q: "Is there a limit on how many rules I can have in Outlook?",
      a: "The limit is size, not count. In Exchange Online, enabled inbox rules share 256 KB per mailbox, so the number you can create depends on how long and complex each rule is.",
    },
    {
      q: "Why does my Outlook rule only work when my computer is on?",
      a: "It probably has a client-only action in classic Outlook, which runs only on the computer where it was created and only while Outlook is open. Rewrite it with actions the mailbox can run, like moving or flagging.",
    },
  ],
  related: ["/guides/how-to-organize-gmail-with-labels-and-filters", "/glossary/email-triage", "/integrations/outlook"],
};
