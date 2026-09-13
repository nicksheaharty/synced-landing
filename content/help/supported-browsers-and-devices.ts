import type { Page } from "../types";

export const supportedBrowsersAndDevices: Page = {
  slug: "/help/supported-browsers-and-devices",
  cluster: "help",
  parent: "/help",
  title: "Synced Supported Browsers and Devices | Synced",
  h1: "Supported browsers and devices",
  navLabel: "Supported browsers and devices",
  cardText: "Desktop browsers for the web app, iPhone on iOS 16.4 or later for mobile. Android is planned.",
  description:
    "Synced runs in desktop browsers at mail.syncedinbox.com and on iPhone with iOS 16.4 or later. Android is planned. Phone browsers are pointed to the app.",
  eyebrow: "Help",
  intro: "Synced is a desktop web app and an iPhone app. Here's what each needs.",
  answer:
    "Synced, the AI inbox assistant, runs as a web app at mail.syncedinbox.com in desktop browsers and as an iPhone app that needs iOS 16.4 or later. Phone browsers are pointed to the mobile app instead of the web app. An Android app is planned, with no release date yet.",
  primaryIntent: "synced supported browsers devices",
  related: ["/help/use-synced-on-web-and-mobile", "/help/beta-limitations", "/ios"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "desktop",
  body: [
    { type: "h2", text: "Where Synced runs today" },
    {
      type: "table",
      head: ["Platform", "Status", "Notes"],
      rows: [
        ["Web, desktop browser", "Available", "Open [mail.syncedinbox.com](https://mail.syncedinbox.com) on a computer with a full-size screen."],
        ["Web, phone browser", "Not supported", "You're pointed to the mobile app."],
        ["iPhone", "Available", "iOS 16.4 or later. Private-beta access."],
        ["iPad", "Not a supported device", "The app is built for iPhone."],
        ["Android", "Planned", "No release date yet. See [Android](/android)."],
      ],
    },
    { type: "h2", text: "Keep the iPhone app current" },
    {
      type: "p",
      text: "Synced can require a newer version when something important changes. If that happens, the app shows **Update Required** with your version and the version needed. Update Synced to continue; your account and Inboxes are unaffected. The installed version is listed as **Version** in **Settings**.",
    },
    { type: "h2", text: "Get set up on a supported device" },
    {
      type: "steps",
      items: [
        { title: "Pick a platform", body: "Use a desktop browser, an iPhone, or both. One account covers both." },
        { title: "Sign in with your phone number", body: "Enter your number and the 6-digit code Synced texts you. See [Sign in with your phone number](/help/sign-in-with-your-phone-number)." },
        { title: "Connect an Inbox", body: "Follow [Get started](/get-started) for the full first-run setup." },
      ],
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "The web app won't open on your phone: that's by design. Use the iPhone app.",
        "The app won't install: check that your iPhone runs iOS 16.4 or later in Settings, General, About.",
        "Don't have access yet: Synced is in private beta. Tap Get Early Access on the [home page](/) to join the waitlist.",
      ],
    },
  ],
};
