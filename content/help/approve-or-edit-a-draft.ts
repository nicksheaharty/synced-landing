import type { Page } from "../types";

export const approveOrEditADraft: Page = {
  slug: "/help/approve-or-edit-a-draft",
  cluster: "help",
  parent: "/help",
  title: "Approve or Edit a Draft in Synced's Decide Queue | Synced",
  h1: "Approve or edit a draft",
  navLabel: "Approve or edit a draft",
  cardText: "Review what Synced wrote in Decide, change it, then send, reprompt, or dismiss.",
  description:
    "Approve a Synced draft in Decide by tapping Send. Tap the message to edit it, use Reprompt to have Synced rewrite it, or Dismiss it from the menu.",
  eyebrow: "Help",
  intro: "Nothing Synced writes goes out until you say so. Decide is where those drafts wait.",
  answer:
    "Drafts from Synced, the AI inbox assistant, wait in the Decide tab until you act. Tap Send to approve a draft as written, tap the message body to edit it first, or tap Reprompt to tell Synced what to change. To throw a draft away, open the three-dot menu and choose Dismiss.",
  primaryIntent: "approve edit synced draft",
  related: ["/help/schedule-a-message", "/help/undo-a-sent-message", "/glossary/decide-queue"],
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "TechArticle",
  icon: "check",
  body: [
    { type: "h2", text: "Review a draft in the iOS app" },
    {
      type: "steps",
      items: [
        { title: "Open Decide", body: "Tap **Decide** in the tab bar. Drafts and questions appear as a stack of cards with a counter above them. An empty queue says **All caught up**." },
        { title: "Check the recipients", body: "Review the To field, and for email, Cc, Bcc, and which of your accounts it's sent from. Tap a field to change it." },
        { title: "Edit the message", body: "Tap the draft. Email drafts open a full editor with formatting; Slack and Teams drafts edit in place. Use the attach button to add **Photos** or **Files**." },
        { title: "Or ask for a rewrite", body: "Tap **Reprompt** and describe the change in the **What should change?** box, like \"shorter, and move the call to Thursday.\"" },
        { title: "Send it", body: "Tap **Send**. The card confirms with **Sent** and the next one slides up." },
      ],
    },
    { type: "h2", text: "Skip, dismiss, or send later" },
    {
      type: "list",
      items: [
        "Swipe a card to skip it for now. It moves to the back of the stack.",
        "Tap the three-dot button and choose **Dismiss** to drop it. Synced asks you to confirm, then stops working on it.",
        "Tap the clock button to pick a send time instead. See [Schedule a message](/help/schedule-a-message).",
      ],
    },
    {
      type: "p",
      text: "Calendar invites work the same way: the card shows **Review calendar invite** and nothing is created until you approve. Questions from Synced show a **Next** or **Submit** button instead of **Send**.",
    },
    { type: "h2", text: "If that didn't work" },
    {
      type: "list",
      items: [
        "**Send** doesn't respond: the draft has no valid recipient yet. Add an email address, or a recipient for Slack.",
        "Sent something by mistake? A draft you approve doesn't have an undo window, so review before tapping Send. For messages you write yourself, see [Undo a sent message](/help/undo-a-sent-message).",
        "Decide is empty but you expected a draft: Synced may still be working, or the weekly limit may be reached. See [Weekly limit reached](/help/weekly-limit-reached).",
      ],
    },
  ],
};
