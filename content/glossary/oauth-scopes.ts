import type { Page } from "../types";

export const oauthScopes: Page = {
  slug: "/glossary/oauth-scopes",
  cluster: "glossary",
  parent: "/glossary",
  term: "OAuth scopes",
  title: "What Are OAuth Scopes? | Synced",
  h1: "OAuth scopes",
  navLabel: "OAuth scopes",
  cardText: "The named permissions an app requests when you sign in with Google or Microsoft.",
  description:
    "OAuth scopes are the named permissions an app requests when you connect an account, like read-only email access. They set what the app can see and do.",
  eyebrow: "Glossary",
  intro: "The list on the \"This app wants to\" screen, and what it actually controls.",
  answer:
    "OAuth scopes are named permissions that define what an app is allowed to access or do in your account after you approve an OAuth sign-in, such as reading email, creating calendar events, or viewing files. The app requests specific scopes, you see them on the consent screen, and the access token it receives works only within those scopes.",
  primaryIntent: "what are oauth scopes",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "DefinedTerm",
  body: [
    { type: "h2", text: "How OAuth scopes work" },
    {
      type: "p",
      text: "OAuth 2.0 (RFC 6749) lets an app ask for access to your account without ever seeing your password. The app sends you to the provider, such as Google or Microsoft, with a list of scopes. You approve or cancel. If you approve, the provider gives the app an access token limited to those scopes. Each scope is a string defined by the provider, like Google's `gmail.readonly`. A scope-by-scope walkthrough for Google is in [Gmail OAuth scopes explained](/guides/gmail-oauth-scopes-explained).",
    },
    { type: "h2", text: "Why the scope names matter" },
    {
      type: "p",
      text: "Scopes are the most honest description of an app's access. Marketing copy might say \"reads your email to help you,\" but the scope tells you whether the app can only read, or can also send, modify, or delete. Narrower is better: an app that only needs your calendar availability shouldn't request full Drive access.",
    },
    {
      type: "p",
      text: "Google groups scopes by risk. Restricted scopes, which include Gmail's read and modify scopes, require verification before an app can request them. Apps that can access that data from or through their own servers also need a security assessment by a Google-empanelled assessor at least every 12 months.",
    },
    { type: "h2", text: "OAuth scopes vs. account passwords" },
    {
      type: "p",
      text: "Giving an app your password hands over everything. OAuth scopes hand over only what's listed, and you can revoke the grant without changing your password, in Google's case at myaccount.google.com/permissions.",
    },
    {
      type: "p",
      text: "Synced lists every Google scope it requests, and what each is used for, in its [privacy policy](/privacy).",
    },
    {
      type: "sources",
      items: [
        { label: "RFC 6749: The OAuth 2.0 Authorization Framework, section 3.3", url: "https://datatracker.ietf.org/doc/html/rfc6749#section-3.3", checked: "2026-09-13" },
        { label: "Google: Restricted scope verification", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can an app get more access than the scopes I approved?",
      a: "Not through that token. If an app needs more later, it has to request the additional scopes, and you see a new consent screen.",
    },
    {
      q: "How do I remove an app's OAuth access to my Google account?",
      a: "Go to myaccount.google.com/permissions, select the app, and remove its access. The app's existing tokens stop working.",
    },
  ],
  related: ["/glossary/google-limited-use-policy", "/glossary/encryption-at-rest", "/guides/gmail-oauth-scopes-explained"],
};
