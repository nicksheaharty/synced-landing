import type { Page } from "../../types";

export const gmailOauthScopesExplained: Page = {
  slug: "/guides/gmail-oauth-scopes-explained",
  cluster: "guide",
  parent: "/guides",
  title: "Gmail OAuth Scopes Explained: What Each One Allows | Synced",
  h1: "Gmail OAuth scopes explained",
  navLabel: "Gmail OAuth scopes explained",
  cardText: "Every Gmail API scope, what Google lets it do, and which ones trigger a security assessment.",
  description:
    "What each Gmail OAuth scope allows, which are sensitive or restricted, what Google's verification and CASA assessment require, and how to revoke app access.",
  eyebrow: "Guide",
  intro:
    "The permission screen says \"Read, compose, and send emails from your Gmail account.\" Here's what that sentence maps to, how Google grades it, and what an app has to go through before it can ask you.",
  answer:
    "Gmail OAuth scopes are the named permissions an app requests to use your Gmail data, such as `gmail.readonly` (view messages and settings) or `gmail.send` (send only). Google sorts scopes into non-sensitive, sensitive, and restricted. Most Gmail scopes, including `gmail.readonly` and `gmail.modify`, are restricted, which means an app serving the public must pass Google's verification and, if it handles the data on its own servers, an annual CASA security assessment. You can review and remove any app's access at myaccount.google.com/permissions.",
  primaryIntent: "gmail oauth scopes explained",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "What a Gmail scope is, in one paragraph" },
    {
      type: "p",
      text: "When an app asks to connect to your Google Account, it sends Google a list of scopes: strings like `https://www.googleapis.com/auth/gmail.readonly`, each granting one kind of access. Google's consent screen turns them into plain sentences. The general idea is covered in the [OAuth scopes](/glossary/oauth-scopes) glossary entry. This guide is the Gmail-specific version: every scope, Google's own description, and the review each one triggers.",
    },
    { type: "h2", text: "Google's three scope categories: non-sensitive, sensitive, restricted" },
    {
      type: "p",
      text: "Google grades every scope by how much user data it exposes. The grade decides how much review a developer has to pass before strangers can grant the scope. Apps that skip review show an \"unverified app\" screen and are capped at 100 new users in total.",
    },
    {
      type: "table",
      head: ["Category", "What Google says it covers", "What the developer has to do"],
      rows: [
        ["Non-sensitive", "Narrow access, such as managing labels or acting only inside an add-on you're using", "No sensitive or restricted scope review"],
        ["Sensitive", "Access Google reviews before any account can grant it. Google's examples include reading Calendar events and storing a new contact", "A written justification for each scope, an explanation of why a narrower scope won't work, a demo video of the consent flow, a verified domain, and a public privacy policy. Google says this typically takes 3 to 5 business days"],
        ["Restricted", "\"Wide access to Google user data\"", "Everything required for sensitive scopes, proof the app is a permitted application type, and, for apps that access the data through their own servers, a CASA security assessment by a Google-approved assessor, repeated at least every 12 months"],
      ],
      caption: "Summarized from Google's sensitive and restricted scope verification pages. Exceptions apply for personal-use, testing, and internal Workspace apps.",
    },
    { type: "h2", text: "Every Gmail API scope and what it allows" },
    {
      type: "p",
      text: "All Gmail scopes start with `https://www.googleapis.com/auth/` except the full-access one, which is `https://mail.google.com/`. Descriptions below are Google's own wording.",
    },
    {
      type: "table",
      head: ["Scope", "Google's description", "Category"],
      rows: [
        ["`gmail.labels`", "See and edit your email labels.", "Non-sensitive"],
        ["`gmail.addons.current.action.compose`", "Manage drafts and send emails when you interact with the add-on.", "Non-sensitive"],
        ["`gmail.addons.current.message.action`", "View your email messages when you interact with the add-on.", "Non-sensitive"],
        ["`gmail.addons.current.message.metadata`", "View your email message metadata when the add-on is running.", "Sensitive"],
        ["`gmail.addons.current.message.readonly`", "View your email messages when the add-on is running.", "Sensitive"],
        ["`gmail.send`", "Send email on your behalf.", "Sensitive"],
        ["`gmail.metadata`", "View your email message metadata such as labels and headers, but not the email body.", "Restricted"],
        ["`gmail.readonly`", "View your email messages and settings.", "Restricted"],
        ["`gmail.compose`", "Manage drafts and send emails.", "Restricted"],
        ["`gmail.insert`", "Add emails into your Gmail mailbox.", "Restricted"],
        ["`gmail.modify`", "Read, compose, and send emails from your Gmail account.", "Restricted"],
        ["`gmail.settings.basic`", "See, edit, create, or change your email settings and filters in Gmail.", "Restricted"],
        ["`gmail.settings.sharing`", "Manage your sensitive mail settings, including who can manage your mail.", "Restricted"],
        ["`https://mail.google.com/`", "Read, compose, send, and permanently delete all your email from Gmail.", "Restricted"],
      ],
    },
    {
      type: "p",
      text: "Two things stand out. First, `gmail.send` is only sensitive, which fits: an app that can send but not read never sees your existing mail. Second, `gmail.metadata` is restricted even though it excludes message bodies, because headers alone reveal who you talk to and when. The one scope to be wary of is `https://mail.google.com/`: it's the only Gmail scope that includes permanent deletion, and few apps that read and draft email need it.",
    },
    { type: "h2", text: "What the CASA security assessment involves for restricted scopes" },
    {
      type: "p",
      text: "CASA stands for Cloud Application Security Assessment, the framework Google uses to standardize its reviews. If an app reads restricted Gmail or Drive data from or through a server it runs, a Google-approved third-party assessor has to evaluate it. The app must recertify at least every 12 months after the assessor's Letter of Assessment approval date.",
    },
    {
      type: "p",
      text: "Google lists four exceptions to verification: apps for personal use by you or a few people you know, apps in development with a limited set of test users, service accounts that only touch data the service owns, and apps used only inside one Google Workspace organization. In practice, a public app that asks for `gmail.readonly` without an unverified-app warning has been through Google's review. It doesn't tell you how the vendor behaves beyond what Google checks, which is why the vendor's own policies still matter.",
    },
    { type: "h2", text: "Other Google scopes that often come with Gmail access" },
    {
      type: "p",
      text: "Email assistants rarely stop at Gmail. These are the Drive, Calendar, Contacts, and identity scopes you'll see alongside it.",
    },
    {
      type: "table",
      head: ["Scope", "What it allows", "Category"],
      rows: [
        ["`drive.readonly`", "View and download all your Drive files.", "Restricted"],
        ["`drive.file`", "Create or modify only files you open with the app or share with it through a file picker.", "Non-sensitive"],
        ["`calendar`", "See, edit, share, and permanently delete all the calendars you can access using Google Calendar.", "Not on Google's restricted list. Reading Calendar events is Google's own example of a sensitive scope"],
        ["`contacts.readonly`", "Read the contacts saved in your Google Contacts.", "Not on Google's restricted list"],
        ["`contacts.other.readonly`", "Read your \"other contacts\", the people you've interacted with who aren't saved as contacts.", "Not on Google's restricted list"],
        ["`userinfo.email`, `userinfo.profile`", "See your email address and basic profile info.", "Basic sign-in scopes"],
      ],
    },
    { type: "h2", text: "Limited Use: the rules attached to Gmail data" },
    {
      type: "p",
      text: "Scopes decide what an app can reach. Google's API Services User Data Policy decides what the app may do with it. The [Limited Use](/glossary/google-limited-use-policy) requirements say apps may use sensitive and restricted data only to provide or improve user-facing features that are prominent in the app. They can't sell or transfer it to ad platforms or data brokers, and staff may read it only with your agreement, for security investigations, for legal reasons, or in aggregated form.",
    },
    {
      type: "p",
      text: "Google's Workspace API policy adds an AI rule: developers may not use the data to create, train, or improve a machine-learning or AI model beyond that specific user's personalized model. If a vendor's privacy policy doesn't mention Limited Use, ask why.",
    },
    { type: "h2", text: "How to see and revoke what apps can access your Gmail" },
    {
      type: "steps",
      items: [
        { title: "Open your Google Account connections", body: "Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions) while signed in to the account you want to check." },
        { title: "Filter to apps with account access", body: "Choose Access to your Google Account." },
        { title: "Open an app and read its permissions", body: "Select the app, then See details. Google lists what it can access, in the same language as the consent screen." },
        { title: "Remove what you don't use", body: "Select Remove access, then Confirm. The app loses access to your account right away. Data it already copied is governed by that vendor's retention policy, so check it or request deletion." },
      ],
    },
    {
      type: "p",
      text: "On a Google Workspace account, your admin may already decide this for you. In the Admin console under Security, Access and data control, API controls, admins can mark apps as trusted, limited, or blocked, and can restrict high-risk Gmail and Drive actions such as sending mail or deleting files.",
    },
    { type: "h2", text: "The Google scopes Synced requests, and what each is used for" },
    {
      type: "p",
      text: "Synced, the AI inbox assistant, lists its Google scopes in its [privacy policy](/privacy) and has completed Google's restricted-scope verification, including the CASA security assessment. Drive, Calendar, and Contacts scopes apply when you connect those services.",
    },
    {
      type: "table",
      head: ["Scope", "Category", "What Synced uses it for"],
      rows: [
        ["`gmail.readonly`", "Restricted", "Search messages, read message details and headers, and summarize threads"],
        ["`gmail.modify`", "Restricted", "Create drafts and send emails you've approved"],
        ["`gmail.settings.basic`", "Restricted", "Read and update your Gmail out-of-office auto-reply when you set it from Synced"],
        ["`drive.readonly`", "Restricted", "Search and read Drive files for context, like finding the file an email asks for"],
        ["`calendar`", "Not restricted", "Read availability and create or modify events"],
        ["`contacts.readonly`, `contacts.other.readonly`", "Not restricted", "Autocomplete invitees through the People API"],
        ["`userinfo.email`, `userinfo.profile`", "Basic", "Identify the connected account"],
      ],
    },
    {
      type: "callout",
      title: "The scope allows sending. The product asks first.",
      text: "Google describes `gmail.modify` as \"Read, compose, and send emails.\" Nothing in the scope itself requires your approval. Synced's rule that every AI-drafted message waits in Decide until you approve it is a product decision on top of the permission. Security details are on the [Security](/security) page.",
    },
    {
      type: "sources",
      items: [
        { label: "Gmail API scopes (Google for Developers)", url: "https://developers.google.com/workspace/gmail/api/auth/scopes", checked: "2026-09-13" },
        { label: "Sensitive scope verification (Google for Developers)", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification", checked: "2026-09-13" },
        { label: "Restricted scope verification (Google for Developers)", url: "https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification", checked: "2026-09-13" },
        { label: "Restricted scopes list (Google Cloud Help)", url: "https://support.google.com/cloud/answer/13464325", checked: "2026-09-13" },
        { label: "Unverified apps (Google Cloud Help)", url: "https://support.google.com/cloud/answer/7454865", checked: "2026-09-13" },
        { label: "Drive API scopes (Google for Developers)", url: "https://developers.google.com/workspace/drive/api/guides/api-specific-auth", checked: "2026-09-13" },
        { label: "Calendar API scopes (Google for Developers)", url: "https://developers.google.com/workspace/calendar/api/auth", checked: "2026-09-13" },
        { label: "People API otherContacts.search (Google for Developers)", url: "https://developers.google.com/people/api/rest/v1/otherContacts/search", checked: "2026-09-13" },
        { label: "Google API Services User Data Policy", url: "https://developers.google.com/terms/api-services-user-data-policy", checked: "2026-09-13" },
        { label: "Google Workspace API User Data and Developer Policy", url: "https://developers.google.com/workspace/workspace-api-user-data-developer-policy", checked: "2026-09-13" },
        { label: "Manage links between your Google Account and apps (Google Account Help)", url: "https://support.google.com/accounts/answer/13533235", checked: "2026-09-13" },
        { label: "Control which apps access Google Workspace data (Admin Help)", url: "https://support.google.com/a/answer/7281227", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "What's the difference between gmail.send and gmail.modify?",
      a: "`gmail.send` can only send mail and is classed as sensitive. `gmail.modify` can also read messages and manage drafts, so it's restricted. An app that reads threads and prepares drafts for you needs read access plus draft access, which `gmail.send` doesn't provide.",
    },
    {
      q: "What does \"Google hasn't verified this app\" mean?",
      a: "The app requests sensitive or restricted scopes and hasn't completed Google's verification. Unverified apps are capped at 100 new users. It can be legitimate (a developer testing, or an internal tool), but for a public product it's a reason to stop and ask.",
    },
    {
      q: "Does removing an app's access delete my data?",
      a: "No. Revoking access at myaccount.google.com/permissions stops future access. Anything the app already stored is covered by its own retention policy, so request deletion from the vendor if you want it gone.",
    },
    {
      q: "Is gmail.readonly safer than gmail.modify?",
      a: "It can't send, draft, or change labels, so the damage from misuse is smaller. It still exposes every message body, which is why Google classifies both as restricted.",
    },
  ],
  related: ["/guides/is-it-safe-to-give-ai-access-to-your-email", "/glossary/oauth-scopes", "/integrations/gmail"],
};
