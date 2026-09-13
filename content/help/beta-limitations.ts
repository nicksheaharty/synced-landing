import type { Page } from "../types";

export const betaLimitations: Page = {
  slug: "/help/beta-limitations",
  cluster: "help",
  parent: "/help",
  title: "Synced Private Beta: Known Limitations | Synced",
  h1: "Beta limitations",
  navLabel: "Beta limitations",
  cardText: "What Synced doesn't do yet during the private beta, and the workaround for each.",
  description:
    "Known limits of the Synced private beta: no Android app, desktop-only web, coming-soon connectors, and account deletion by email.",
  eyebrow: "Help",
  intro: "Synced is in private beta. Some things you'd expect aren't built yet, and it's better to know before you go looking for them.",
  answer:
    "Synced, the AI inbox assistant, is in private beta with a few known limits: there's no Android app yet, the web app is desktop-only, and iMessage, Dropbox, Notion, and GitHub are still coming soon. Account deletion is by email request, and each service holds up to 4 connected accounts.",
  primaryIntent: "synced beta limitations",
  related: ["/help/supported-browsers-and-devices", "/help/delete-your-account", "/integrations"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "question",
  body: [
    { type: "h2", text: "Known limitations and workarounds" },
    {
      type: "table",
      head: ["Limitation", "What to do instead"],
      rows: [
        ["Access is invite-only", "Tap Get Early Access on the [home page](/) to join the waitlist."],
        ["No Android app", "Use the web app on a computer. Android is planned, with no date yet."],
        ["The web app doesn't run in phone browsers", "Use the iPhone app on your phone."],
        ["iMessage, Dropbox, Notion, and GitHub are coming soon", "Connect a live service instead. See [Integrations](/integrations)."],
        ["No Zoom connector", "Synced doesn't read Zoom. Meeting invites in Gmail or Outlook still come through as email."],
        ["Up to 4 accounts per service", "Pick the 4 accounts that matter most for each service."],
        ["No in-app account deletion", "Email a request. See [Delete your account](/help/delete-your-account)."],
        ["No in-app phone number change", "[Contact support](/contact) from your current number."],
        ["Old conversations don't come back after reconnecting", "Disconnect only when you mean it. New messages start arriving again once you reconnect."],
      ],
    },
    { type: "h2", text: "Report a problem during the beta" },
    {
      type: "steps",
      items: [
        { title: "Note what happened", body: "Write down what you tapped, what you expected, and what you saw. A screenshot helps." },
        { title: "Check the Version", body: "In the iOS app, **Settings** lists **Version** under **ABOUT**." },
        { title: "Send it in", body: "Use the email on the [contact page](/contact), or tap **Get Support** in Settings. Include the phone number you sign in with." },
      ],
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "p",
      text: "If something here is blocking you from using Synced at all, say so in the subject line of your email. More connectors are listed as coming soon in the app.",
    },
  ],
};
