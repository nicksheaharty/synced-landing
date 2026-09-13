import type { Page } from "../../types";

export const manageMultipleEmailAccounts: Page = {
  slug: "/guides/how-to-manage-multiple-email-accounts",
  cluster: "guide",
  parent: "/guides",
  title: "How to Manage Multiple Email Accounts (Gmail, Outlook) | Synced",
  h1: "How to manage multiple email accounts",
  navLabel: "Manage multiple email accounts",
  cardText: "Switch between accounts, add them all to Outlook, or forward into one inbox. What changed in Gmail in 2026, and how not to reply from the wrong address.",
  description:
    "How to manage multiple email accounts: add them to one Outlook app, switch Google accounts in Gmail, or forward mail, plus Gmail's POP and Gmailify changes.",
  eyebrow: "Guide",
  intro:
    "Work, personal, the side project, the old address you still get invoices at. Four inboxes is normal now. The trick is choosing one place to read them and never replying from the wrong one.",
  answer:
    "To manage multiple email accounts, either add them all to one app, such as Outlook (Settings, Accounts, Add account) or the Gmail mobile app, or sign in to several Google accounts and switch from your profile picture in Gmail on the web. Google is phasing out POP fetching and Gmailify for third-party accounts in Gmail on the web, with new setups blocked in 2026 and existing ones ending in January 2027, so automatic forwarding or a desktop client is now the way to pull other providers' mail into one place.",
  primaryIntent: "how to manage multiple email accounts",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "Article",
  author: "team",
  body: [
    { type: "h2", text: "Three setups, and who each one suits" },
    {
      type: "table",
      head: ["Setup", "How it works", "Good for", "Watch out for"],
      rows: [
        ["Separate tabs or profiles", "Each account open on its own", "Two accounts you keep strictly apart", "Checking one and forgetting the other"],
        ["One app, several accounts", "Outlook, the Gmail app, or a desktop client holds every account", "Three or more accounts you check daily", "Replying from the wrong address"],
        ["Forward into one inbox", "Old or minor addresses forward to your main one", "Addresses that get occasional mail", "Replies come from your main address unless set up otherwise"],
      ],
    },
    { type: "h2", text: "Switch between Google accounts in Gmail on the web" },
    {
      type: "steps",
      items: [
        {
          title: "Add the second account",
          body: "In Gmail or any Google page, select your profile picture or initial at the top right, choose Add account, and sign in.",
        },
        {
          title: "Switch when you need to",
          body: "Select your profile picture again and pick the other account. You can keep each account open in its own browser tab.",
        },
        {
          title: "Know which one is the default",
          body: "The first account you signed in with is usually your default. Google says settings from the default account can apply when it can't tell which account you're using, so sign in to your main account first.",
        },
      ],
    },
    {
      type: "p",
      text: "This keeps accounts separate, which is what you want for work and personal. It doesn't combine them into one inbox.",
    },
    { type: "h2", text: "Add all your accounts to Outlook" },
    {
      type: "p",
      text: "Outlook can hold Outlook.com, Hotmail, Microsoft 365 work or school, Gmail, Yahoo, iCloud, and Exchange accounts in one app.",
    },
    {
      type: "steps",
      items: [
        {
          title: "New Outlook for Windows",
          body: "On the View tab, select View settings, then Accounts, Your accounts. Under Email accounts, select Add account, enter the address, and select Continue. You can also select Add account at the bottom of the folder list.",
        },
        {
          title: "Classic Outlook",
          body: "Select File, then Add Account. Enter the email address, select Connect, and follow the prompts to Finish.",
        },
        {
          title: "Allow access at the other provider",
          body: "Gmail, Yahoo, and iCloud may ask you to approve the sign-in or change a setting on their site first. Some providers require an app password.",
        },
      ],
    },
    {
      type: "p",
      text: "Each account gets its own folder list. Before you send, check the From field at the top of the message. It usually follows the account you're viewing, which is exactly how people answer a client from their personal address.",
    },
    { type: "h2", text: "What changed for other accounts inside Gmail" },
    {
      type: "p",
      text: "For years, the standard advice was Gmail's Check mail from other accounts, which pulled mail from another provider over POP, or Gmailify, which added Gmail's spam filtering to a Yahoo or Outlook address. Google is retiring both on the web. New users lost access after the first quarter of 2026, and existing users keep them until January 2027. Google has also announced changes to sending as a third-party address from Gmail.",
    },
    {
      type: "list",
      items: [
        "On your phone, the Gmail app for Android, iPhone, and iPad can still add Yahoo, Outlook, and other accounts over IMAP.",
        "On a computer, set up automatic forwarding at the other provider so new mail lands in Gmail.",
        "For a one-time move, use Gmail's import tool. Mail you've already imported stays in Gmail.",
        "Or read the other account in its own web interface, or in a desktop client like Outlook.",
      ],
    },
    { type: "h2", text: "Habits that keep several inboxes manageable" },
    {
      type: "list",
      items: [
        "Give each account a different signature, and use a color or profile picture you notice at a glance.",
        "Turn off notifications on low-priority accounts. Check those once a day on purpose.",
        "Use the same filters and folders or labels across accounts, so \"Receipts\" means the same thing everywhere.",
        "Retire addresses you don't need. Forward them for six months, update anything that still sends there, then close them.",
        "If most of your volume is in one account, apply the steps in [how to get to inbox zero](/guides/how-to-get-to-inbox-zero) there first.",
      ],
    },
    {
      type: "p",
      text: "A combined view of several accounts is usually called a [unified inbox](/glossary/unified-inbox). It saves clicks, but it makes the wrong-address problem worse, so make checking the From line a habit.",
    },
    { type: "h2", text: "How Synced handles several accounts and apps" },
    {
      type: "p",
      text: "[Synced](/) treats every connected account as an Inbox, with up to 4 accounts per integration. You can connect two Gmail accounts, an Outlook account, and Slack, and new messages from all of them show up in one Messages list. When Synced drafts a reply, it goes out from the account the message came in on, in the same thread, after you approve it. More on [connecting Inboxes](/features/inboxes).",
    },
    {
      type: "message",
      from: "Alex (landlord)",
      source: "gmail",
      time: "9:05 PM",
      text: "Reminder the lease renewal is due by the 30th. Can you confirm you're renewing?",
      stepsLabel: "1 Task Ready for Approval",
      steps: ["Drafted a reply from your personal Gmail confirming the renewal and asking for the updated lease"],
      caption: "An illustration. It arrived next to work email from Outlook, and the reply stays on the personal account.",
    },
    {
      type: "p",
      text: "The Free plan connects Gmail. Outlook, Slack, and the other Inboxes need Pro. If you only want to read two accounts without replies drafted for you, the free options above are enough.",
    },
    {
      type: "sources",
      items: [
        { label: "Google Account Help: Sign in to multiple accounts at once", url: "https://support.google.com/accounts/answer/1721977", checked: "2026-09-13" },
        { label: "Microsoft Support: Add an email account to Outlook for Windows", url: "https://support.microsoft.com/en-us/outlook/getstarted/add-an-email-account-to-outlook-for-windows", checked: "2026-09-13" },
        { label: "Gmail Help: Learn about upcoming changes to Gmailify and POP in Gmail", url: "https://support.google.com/mail/answer/16604719", checked: "2026-09-13" },
        { label: "Gmail Help: Learn about changes to third-party email account support in Gmail", url: "https://support.google.com/mail/answer/17101213", checked: "2026-09-13" },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I have two Gmail accounts open at the same time?",
      a: "Yes. Sign in to both from your profile picture menu, then switch between them. You can keep each one open in a separate browser tab.",
    },
    {
      q: "Can I still add a Yahoo or Outlook account to Gmail?",
      a: "In the Gmail mobile app, yes, over IMAP. On the web, Google is retiring Check mail from other accounts (POP) and Gmailify, so use automatic forwarding from the other provider instead.",
    },
    {
      q: "Does new Outlook support Gmail accounts?",
      a: "Yes. Microsoft lists Gmail among the accounts you can add to Outlook for Windows, along with Yahoo, iCloud, Outlook.com, and Microsoft 365 work or school accounts.",
    },
    {
      q: "How do I stop replying from the wrong email account?",
      a: "Check the From field before every send, use a distinct signature per account, and in apps that let you choose, set replies to come from the address the message was sent to.",
    },
  ],
  related: ["/guides/how-to-stop-missing-slack-messages", "/glossary/unified-inbox", "/features/inboxes"],
};
