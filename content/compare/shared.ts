// Shared facts for the compare cluster. Synced values come only from content/AUTHORING.md.
// Competitor facts live in each page file next to their sources block.

export const CHECKED = "2026-09-13";

export type RowKey =
  | "Price"
  | "Free plan"
  | "Platforms"
  | "Email providers"
  | "Other channels"
  | "AI drafting"
  | "Sends without approval"
  | "Model training policy"
  | "Status";

export const ROW_ORDER: RowKey[] = [
  "Price",
  "Free plan",
  "Platforms",
  "Email providers",
  "Other channels",
  "AI drafting",
  "Sends without approval",
  "Model training policy",
  "Status",
];

export const SYNCED: Record<RowKey, string> = {
  Price: "Listed on the pricing page: Free $0. Pro $29.99/user/month, or $24.99/user/month billed annually. Enterprise: contact sales",
  "Free plan": "Yes. 20 Action Plans a week with Gmail, Google Drive, OneDrive, and Google Calendar",
  Platforms: "Web app for desktop browsers, and iPhone (iOS 16.4+). No iPad app. Android is planned, no date",
  "Email providers": "Gmail (Free and up), Outlook (Pro)",
  "Other channels": "Slack, Microsoft Teams chats, WhatsApp Business, Instagram Business DMs, Messenger (Facebook Pages), SMS via your own Twilio number, GroupMe (Pro)",
  "AI drafting": "Yes. Replies and documents, with context from connected Drive, OneDrive, and Calendar",
  "Sends without approval": "No. Every AI-drafted message waits for your approval",
  "Model training policy": "Google Workspace data isn't used to train generalized AI/ML models. LLM providers are bound not to train on the data",
  Status: "Private beta (waitlist)",
};

/** Build the standard 3-column comparison table rows. */
export function compareRows(competitor: Record<RowKey, string>): string[][] {
  return ROW_ORDER.map((k) => [k, competitor[k], SYNCED[k]]);
}

export const COMPARE_SLUGS = [
  "/compare/synced-vs-superhuman",
  "/compare/synced-vs-shortwave",
  "/compare/synced-vs-fyxer",
  "/compare/synced-vs-gemini-in-gmail",
  "/compare/synced-vs-copilot-in-outlook",
  "/compare/synced-vs-sanebox",
  "/compare/synced-vs-chatgpt",
  "/compare/synced-vs-spark",
];

/** Other compare pages, for the in-body links block. */
export function otherCompares(self: string): string[] {
  return COMPARE_SLUGS.filter((s) => s !== self);
}
