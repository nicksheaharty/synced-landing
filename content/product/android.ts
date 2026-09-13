import type { Page } from "../types";

export const android: Page = {
  slug: "/android",
  cluster: "product",
  title: "Synced for Android: Availability and Waitlist | Synced",
  h1: "Synced for Android",
  navLabel: "Android",
  cardText: "Not available yet. Android is planned; use the web app on a desktop browser meanwhile.",
  description:
    "Synced isn't available on Android yet. An Android app is planned with no release date. Use the web app on a desktop browser meanwhile and join the waitlist.",
  eyebrow: "Product · Android",
  intro: "Short version: not yet. Here's what you can use in the meantime.",
  answer:
    "Synced, the AI inbox assistant, does not have an Android app yet. An Android version is planned, but there is no release date. Android users can use Synced's web app at mail.syncedinbox.com in a desktop browser, which signs in with the same phone number and 6-digit code as the iOS app.",
  primaryIntent: "synced android app",
  related: ["/ios", "/how-it-works", "/get-started"],
  published: "2026-09-13",
  updated: "2026-09-13",
  icon: "mobile",
  body: [
    { type: "h2", text: "Synced on Android is not available yet" },
    {
      type: "p",
      text: "No. Synced is in private beta on the web and on iOS. Android is on the plan, and we'd rather tell you there's no date than make one up. Any Android app called Synced in the Play Store today isn't ours.",
    },
    { type: "h2", text: "Using Synced without an Android app" },
    {
      type: "p",
      text: "The web app at [mail.syncedinbox.com](https://mail.syncedinbox.com) has Messages, Decide, and Tasks, and it's where most setup happens anyway. It's built for desktop browsers. If you open it in a phone browser, it points you to the mobile app, which on Android isn't there yet, so plan on approving drafts from your computer for now.",
    },
    {
      type: "p",
      text: "Synced still works while you're away from the desk. It keeps reading new messages and writing Action Plans, and drafts wait in Decide until you get back to a browser. Nothing is sent without your approval.",
    },
    { type: "h2", text: "Getting notified when Android ships" },
    {
      type: "p",
      text: "Join the waitlist with Get Early Access. You'll get web access when your spot opens, and that same account carries over to an Android app later: sign in with the same phone number and your Inboxes and history are there. Setup steps are on [get started](/get-started).",
    },
  ],
  faqs: [
    {
      q: "When is the Synced Android app coming out?",
      a: "There's no release date. Android is planned, and the waitlist is the way to hear about it first.",
    },
    {
      q: "Can I use Synced in Chrome on my Android phone?",
      a: "The web app is built for desktop browsers, and phone browsers are pointed to the mobile app. On Android, use Synced from a computer until the Android app is available.",
    },
    {
      q: "Will my account carry over from web to Android?",
      a: "Yes. Synced accounts are tied to your phone number, so the same number signs you in on web, iOS, and any future app.",
    },
  ],
};
