import type { Page } from "../types";

export const didntGetAVerificationCode: Page = {
  slug: "/help/didnt-get-a-verification-code",
  cluster: "help",
  parent: "/help",
  title: "Didn't Get a Synced Verification Code | Synced",
  h1: "Didn't get a verification code",
  navLabel: "Didn't get a verification code",
  cardText: "Wait out the 30-second timer, check the number, then tap Resend code.",
  description:
    "Not getting the Synced verification code by text? Check the number, wait 30 seconds, tap Resend code, and look in your filtered messages. What to try next.",
  eyebrow: "Help",
  intro: "Most missing codes come down to a mistyped number, a weak signal, or a text that landed in a filtered folder.",
  answer:
    "If the Synced sign-in code doesn't arrive, wait for the 30-second timer on the Enter Code screen to finish and tap Resend code. Check that the number shown on that screen is right. Also look in your phone's filtered or unknown-sender messages.",
  primaryIntent: "synced verification code not received",
  related: ["/help/sign-in-with-your-phone-number", "/help/beta-limitations", "/contact"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "phone",
  body: [
    { type: "h2", text: "Get a new code in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Check the number on screen", body: "The **Enter Code** screen says where the code went. If the number is wrong, tap the back arrow, fix it on **Your number**, and tap **Send Code** again." },
        { title: "Wait for the timer", body: "Under the code boxes, **Resend code in 30s** counts down. Codes often arrive within that window." },
        { title: "Tap Resend code", body: "When the countdown ends, tap **Resend code**. A **Code Sent** message confirms a new code is on the way. Use the newest code you receive." },
        { title: "Look in filtered messages", body: "If your Messages app separates texts from unknown senders, the code may be sitting there instead of your main list." },
      ],
    },
    { type: "h2", text: "Things that block sign-in texts" },
    {
      type: "list",
      items: [
        "No cellular signal, or Wi-Fi calling that isn't set up for texts.",
        "Carrier or third-party spam filters that hold short automated texts.",
        "A number that can't receive texts, like some VoIP or landline numbers.",
      ],
    },
    {
      type: "p",
      text: "The **Your number** screen notes that standard messaging rates may apply, so a plan without texting can also stop the code.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "p",
      text: "A **Verification Failed** alert right after **Send Code** means the text couldn't be sent to that number, so check it for typos first. If codes still don't come through after a resend and a restart of your phone, [contact support](/contact) with the number you're trying to use. Never share the code itself with anyone, including support.",
    },
  ],
};
