import type { Page } from "../types";

export const paymentReminder: Page = {
  slug: "/templates/payment-reminder",
  cluster: "template",
  parent: "/templates",
  title: "Payment Reminder Email Templates for Invoices | Synced",
  h1: "Payment reminder email",
  navLabel: "Payment reminder",
  cardText: "Invoice reminders in three steps: a friendly heads-up, a firmer overdue note, and a final notice.",
  description:
    "Payment reminder email templates for unpaid invoices: a friendly reminder before the due date, an overdue follow-up, and a final notice.",
  eyebrow: "Email template",
  intro: "Most late invoices are forgotten, not disputed. The first reminder should assume that.",
  answer:
    "A payment reminder email names the invoice number, amount, and due date in its first two lines, reattaches the invoice, and makes paying easy with a link or payment details. A common sequence is a friendly reminder around the due date, a firmer note about a week after it passes, and a final notice with a specific next step after that.",
  primaryIntent: "payment reminder email template",
  published: "2026-09-13",
  updated: "2026-09-13",
  body: [
    { type: "h2", text: "Friendly reminder before or on the due date" },
    { type: "p", text: "Send a few days before the due date or on the day. Neutral tone, all the details, nothing to decode." },
    {
      type: "template",
      label: "Before due",
      subject: "Invoice [number] due [date]",
      text: "Hi [Name],\n\nA quick reminder that invoice [number] for [amount] is due on [date]. I've attached it again here.\n\nYou can pay by [link / bank transfer to account details / check to address].\n\nIf it's already on its way, thank you, and please ignore this.\n\nBest,\n[Your name]",
    },
    { type: "h2", text: "Overdue reminder, about a week late" },
    { type: "p", text: "Firmer and more direct. Ask whether something is holding it up, since that often surfaces a missing purchase order or the wrong contact." },
    {
      type: "template",
      label: "Overdue",
      subject: "Overdue: invoice [number], [amount]",
      text: "Hi [Name],\n\nInvoice [number] for [amount] was due on [date] and is now [X] days overdue. The invoice is attached.\n\nCould you let me know when payment will be sent? If there's a problem with the invoice, or it needs to go to someone else in accounts payable, tell me and I'll sort it out today.\n\nThanks,\n[Your name]",
    },
    { type: "h2", text: "Final notice" },
    { type: "p", text: "Short and factual. Only state consequences that are in your contract or terms, such as late fees or paused work, and that you'll actually follow through on." },
    {
      type: "template",
      label: "Final notice",
      subject: "Final notice: invoice [number], [X] days overdue",
      text: "Hi [Name],\n\nThis is a final reminder that invoice [number] for [amount], due [date], remains unpaid despite reminders on [dates].\n\nPlease arrange payment by [date]. After that, per our agreement, [consequence, e.g. a late fee of X applies / work on the project will pause].\n\nIf you'd like to discuss a payment plan, reply today and we can work something out.\n\nRegards,\n[Your name]",
    },
    { type: "h2", text: "When to send a reminder, and when to pick up the phone" },
    {
      type: "list",
      items: [
        "Email works for the first two reminders, since the invoice and payment details sit in the same place.",
        "Call or message your main contact once you're past the final notice, or if the client has gone quiet on everything.",
        "For large or long-overdue amounts, check your contract and consider getting advice before threatening collections.",
      ],
    },
    { type: "h2", text: "What to avoid" },
    {
      type: "list",
      items: [
        "Leaving out the invoice number or amount. Accounts payable teams search by both.",
        "Sending reminders to your project contact only. CC the billing contact if you have one.",
        "Passive-aggressive lines like \"per my last three emails.\" Dates of previous reminders say the same thing, politely.",
        "Threatening consequences you haven't agreed in writing.",
      ],
    },
    { type: "h2", text: "How Synced helps chase invoices" },
    {
      type: "p",
      text: "Payment reminders are follow-ups with an attachment. Ask [Synced](/) to chase an unpaid invoice and it finds the invoice PDF in Google Drive or OneDrive, and drafts the reminder with the number and amount pulled from the thread. The draft waits in Decide for approval. More on [follow-ups](/features/follow-ups).",
    },
  ],
  faqs: [
    {
      q: "How do you politely ask a client for payment by email?",
      a: "Lead with the invoice number, amount, and due date, reattach the invoice, give an easy way to pay, and ask whether anything is holding it up. Assume it was missed until you have reason to think otherwise.",
    },
    {
      q: "When should you send a payment reminder?",
      a: "A common schedule is a reminder a few days before or on the due date, another roughly a week after, and a final notice a couple of weeks after that. Adjust for your payment terms.",
    },
    {
      q: "What should a final payment notice say?",
      a: "The invoice details, the dates you already reminded them, a firm pay-by date, and the specific consequence in your agreement. Offer a payment plan if you're open to one.",
    },
  ],
  related: ["/templates/follow-up-after-no-response", "/templates/polite-decline", "/for/small-business-owners"],
};
