import type { Page } from "../types";

export const weeklyLimitReached: Page = {
  slug: "/help/weekly-limit-reached",
  cluster: "help",
  parent: "/help",
  title: "Synced Weekly Action Plan Limit Reached | Synced",
  h1: "Weekly limit reached",
  navLabel: "Weekly limit reached",
  cardText: "What changes in the app when you've used this week's Action Plans, and your options.",
  description:
    "Hit your weekly Action Plan limit in Synced? Messages keep arriving, and new requests land in Tasks for you to handle until Monday's reset.",
  eyebrow: "Help",
  intro: "Each plan includes a set number of Action Plans a week. Here's what you'll notice when they're used up, and what to do about it.",
  answer:
    "When you reach your weekly Action Plan limit in Synced, new messages still arrive in Messages. Instead of Synced doing the work, each new request is added to your Tasks list with its steps written out, so nothing is dropped. Replies to requests Synced is already working on still continue. The Assign button disappears until the count resets on Monday at 00:00 UTC. You can see your count under Usage in Settings. To get more each week, upgrade from Free (20 a week) to Pro (100 a week).",
  primaryIntent: "synced weekly action plan limit reached",
  related: ["/glossary/action-plan", "/pricing", "/help/delegate-a-task"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "clock",
  body: [
    { type: "h2", text: "What you'll see in the app" },
    {
      type: "list",
      items: [
        "The **Assign** button in Messages is gone. It comes back when your count resets on Monday at 00:00 UTC.",
        "New messages keep landing in Messages as usual. Nothing is lost.",
        "New requests show up in **Tasks** as to-dos for you, with the steps Synced would have taken, instead of as drafts in Decide.",
        "Replies on a request Synced is already working on still merge into it and don't count against the limit.",
        "Drafts that were already in Decide are still there to approve.",
      ],
    },
    { type: "h2", text: "Check your usage" },
    {
      type: "steps",
      items: [
        { title: "Open Settings", body: "Tap **Settings** in the tab bar." },
        { title: "Find Usage", body: "The **USAGE** card at the top shows **Action Plans this week** as a count out of your limit, with a progress bar." },
        { title: "Read the footer", body: "**Resets weekly** reminds you the count starts over. On Free, an **Upgrade to Pro** link sits next to it." },
      ],
    },
    { type: "h2", text: "Your options" },
    {
      type: "p",
      text: "Work through the new to-dos in Tasks yourself, wait for Monday's reset, or move to a plan with a higher limit. Free includes 20 Action Plans a week and Pro includes 100; plan details are on [pricing](/pricing). For how Action Plans are counted, including why one message is one Action Plan no matter how many steps it takes, see [Action Plan](/glossary/action-plan).",
    },
    {
      type: "p",
      text: "You can still handle messages yourself in the meantime: open a conversation and reply from the reply box.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "Usage shows you under the limit but Assign is missing: close and reopen the app so it picks up your current count.",
        "The limit looks wrong for your plan: [contact support](/contact) with the number you sign in with.",
      ],
    },
  ],
};
