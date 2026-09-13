import type { Page } from "../types";

export const signInWithYourPhoneNumber: Page = {
  slug: "/help/sign-in-with-your-phone-number",
  cluster: "help",
  parent: "/help",
  title: "Sign In to Synced With Your Phone Number | Synced",
  h1: "Sign in with your phone number",
  navLabel: "Sign in with your phone number",
  cardText: "No password. Enter your number, then the 6-digit code Synced texts you.",
  description:
    "Sign in to Synced with your phone number and a 6-digit code sent by text. No password. The same number opens the same account on web and iOS.",
  eyebrow: "Help",
  intro: "Synced has no passwords. Your phone number is your account, and each sign-in is confirmed with a code sent by text.",
  answer:
    "To sign in to Synced, the AI inbox assistant, enter your phone number and type the 6-digit code Synced texts you. There is no password. The same phone number opens the same account, Inboxes, and history on the web app and the iOS app.",
  primaryIntent: "synced sign in phone number",
  related: ["/help/didnt-get-a-verification-code", "/help/use-synced-on-web-and-mobile", "/get-started"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "phone",
  body: [
    { type: "h2", text: "Sign in on the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Tap Get Started", body: "It's the button on the first screen after you open the app." },
        { title: "Enter your number", body: "On the **Your number** screen, type your number and tap **Send Code**." },
        { title: "Type the code", body: "On **Enter Code**, type the 6 digits from the text. Synced checks the code as soon as the sixth digit is in. You can also tap **Verify & Continue**." },
        { title: "Add your name the first time", body: "New accounts see **Your name**. Enter your full name and tap **Continue**. Returning accounts skip this." },
        { title: "Finish setup if you haven't connected anything", body: "If the account has no Inboxes yet, Synced opens **Inboxes** so you can connect Gmail. Otherwise you land straight in Messages." },
      ],
    },
    { type: "h2", text: "Sign in on the web" },
    {
      type: "p",
      text: "Open [mail.syncedinbox.com](https://mail.syncedinbox.com) in a desktop browser and use the same phone number. Your Inboxes and history are already there. Phone browsers are pointed to the app instead. For first-time setup on either platform, follow [Get started](/get-started).",
    },
    { type: "h2", text: "Signing out of the iOS app" },
    {
      type: "p",
      text: "Open **Settings** and tap **Log Out** at the bottom, then confirm. Logging out ends the session on that phone and stops its notifications. It doesn't delete your account or disconnect any Inbox.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "The code never arrived: see [Didn't get a verification code](/help/didnt-get-a-verification-code).",
        "A **Verification Failed** message after typing the code means the code was wrong or expired. The boxes clear so you can try again, or request a new code.",
        "Signed in with a different number than usual? That's a separate, empty account. Log out and use the original number.",
        "Still stuck: [contact support](/contact) with the number you sign in with.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Synced have a password?",
      a: "No. Synced signs you in with your phone number and a one-time 6-digit code sent by text. There's no password to reset.",
    },
    {
      q: "Can I change the phone number on my Synced account?",
      a: "There's no setting for it in the app today. [Contact support](/contact) from your current number and ask.",
    },
  ],
};
