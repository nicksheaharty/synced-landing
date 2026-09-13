import type { Page } from "../types";

export const useSyncedOnWebAndMobile: Page = {
  slug: "/help/use-synced-on-web-and-mobile",
  cluster: "help",
  parent: "/help",
  title: "Use Synced on Web and iPhone With One Account | Synced",
  h1: "Use Synced on web and mobile",
  navLabel: "Use Synced on web and mobile",
  cardText: "Sign in with the same phone number and your Inboxes and history follow you.",
  description:
    "Use Synced on the web and the iOS app with one account: sign in with the same phone number and your Inboxes and history are already there. No pairing step.",
  eyebrow: "Help",
  intro: "There's one Synced account per phone number. Whichever device you open, it's the same inbox.",
  answer:
    "To use Synced on both the web and your iPhone, sign in on each with the same phone number. Synced has no separate pairing step: your connected Inboxes, conversations, and history appear on both. The web app runs at mail.syncedinbox.com in a desktop browser, and the mobile app is on iOS, with Android planned.",
  primaryIntent: "synced web and mobile same account",
  related: ["/help/sign-in-with-your-phone-number", "/help/supported-browsers-and-devices", "/get-started"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "mobile",
  body: [
    { type: "h2", text: "Add a second device" },
    {
      type: "steps",
      items: [
        { title: "Check which number you use", body: "In the iOS app, **Settings** shows the last four digits of your number under your name." },
        { title: "Open the other platform", body: "On a computer, go to [mail.syncedinbox.com](https://mail.syncedinbox.com). On an iPhone, open the Synced app." },
        { title: "Sign in with that same number", body: "Enter the number and the 6-digit code Synced texts you." },
        { title: "Skip setup", body: "An account that already has Inboxes goes straight to your conversations. There's nothing to reconnect." },
      ],
    },
    { type: "h2", text: "What carries over, and what stays on one device" },
    {
      type: "table",
      head: ["Carries over", "Stays on the device"],
      rows: [
        ["Connected Inboxes and integrations", "Appearance (Light, Dark, System)"],
        ["Conversations, drafts in Decide, and Tasks", "Undo Send window"],
        ["Weekly Action Plan usage", "The last filter you picked in Messages"],
        ["Your name and plan", "Notification and microphone permissions"],
      ],
      caption: "The right-hand column lists settings in the iOS app that are saved on that phone only.",
    },
    {
      type: "p",
      text: "For first-time setup on either platform, see [Get started](/get-started).",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "The account looks empty: you probably signed in with a different number, which creates a separate account. Log out and use the original.",
        "A phone browser pointed you to the app instead of opening the web app: that's expected. Synced on the web is built for desktop screens.",
        "Looking for Android: it's planned, with no date yet. See [Supported browsers and devices](/help/supported-browsers-and-devices).",
      ],
    },
  ],
};
