import type { Page } from "../types";

export const googleLimitedUsePolicy: Page = {
  slug: "/glossary/google-limited-use-policy",
  cluster: "glossary",
  parent: "/glossary",
  term: "Google Limited Use policy",
  title: "What Is Google's Limited Use Policy? | Synced",
  h1: "Google Limited Use policy",
  navLabel: "Google Limited Use policy",
  cardText: "Google's rules on what apps may do with Gmail, Drive, and other sensitive user data.",
  description:
    "Google's Limited Use policy restricts what third-party apps can do with data from sensitive Google scopes: user-facing features only, no ads, no data sales.",
  eyebrow: "Glossary",
  intro: "The rules an app agrees to before Google lets it read your Gmail or Drive.",
  answer:
    "Google's Limited Use requirements are part of the Google API Services User Data Policy and govern how apps may use data obtained through specified Google API scopes, including Gmail and Drive. Apps must limit their use of that data to \"providing or improving user-facing features that are prominent in the requesting application's user interface,\" and may not transfer or sell it for advertising, to data brokers, or for credit decisions.",
  primaryIntent: "google limited use policy explained",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "What the Limited Use requirements allow and prohibit" },
    {
      type: "list",
      items: [
        "**Use:** only for user-facing features that are prominent in the app's interface.",
        "**Transfers:** not allowed, except to provide those features with the user's consent, for security purposes such as investigating abuse, to comply with law, or as part of a merger or acquisition with the user's explicit consent.",
        "**Human reading:** not allowed unless the user affirmatively agrees to let someone view specific data, it's needed for security (such as investigating a bug or abuse), it's required by law, or the data is aggregated for internal operations.",
        "**Prohibited:** transferring or selling data to advertising platforms or data brokers, using it to serve ads (including retargeting and interest-based ads), and using it to determine credit-worthiness.",
      ],
    },
    { type: "h2", text: "Limited Use and AI model training" },
    {
      type: "p",
      text: "Google's separate Workspace API User Data and Developer Policy adds a rule aimed at AI: apps may not use Workspace API data \"to create, train, or improve a machine learning or artificial intelligence model beyond that specific user's personalized model for the appropriate use case or user-facing feature.\" In practice, an AI email tool can use your Gmail to help you, but not to train a general model for everyone.",
    },
    { type: "h2", text: "Limited Use vs. OAuth verification" },
    {
      type: "p",
      text: "Limited Use is the set of rules. [OAuth scope](/glossary/oauth-scopes) verification is how Google checks an app before it can request sensitive or restricted scopes from the public. Apps using restricted scopes, such as Gmail's read and modify scopes, and able to access that data through their own servers also have to pass a security assessment by a Google-empanelled assessor at least every 12 months.",
    },
    {
      type: "p",
      text: "Synced follows the Google API Services User Data Policy, including the Limited Use requirements, and doesn't use Google Workspace data to train generalized AI or machine-learning models. Details are on the [Security](/security) page.",
    },
    {
      type: "sources",
      items: [
        { label: "Google API Services User Data Policy", url: "https://developers.google.com/terms/api-services-user-data-policy", checked: "2026-09-13" },
        { label: "Google Workspace API User Data and Developer Policy", url: "https://developers.google.com/workspace/workspace-api-user-data-developer-policy", checked: "2026-09-13" },
        { label: "Google: Restricted scope verification", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "How can I tell if an app follows Google's Limited Use policy?",
      a: "Check the app's privacy policy. Apps that follow the rules commonly include a sentence saying their use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Google also checks apps that request restricted scopes during verification.",
    },
  ],
  related: ["/glossary/oauth-scopes", "/glossary/encryption-at-rest", "/guides/gmail-oauth-scopes-explained"],
};
