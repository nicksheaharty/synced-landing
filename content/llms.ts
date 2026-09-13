import type { Block, Cluster, Page } from "./types";
import { CLUSTER_LABEL, pages, staticPages } from "./registry";
import { SITE_DESCRIPTION, SITE_URL } from "./site";

const md = (t: string) => t.replace(/\]\((\/[^)]*)\)/g, (_, p) => `](${SITE_URL}${p})`);
const flat = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

const FACTS = [
  "Synced is an AI inbox assistant made by Synced (syncedinbox.com). It is not affiliated with other products named Synced.",
  "Status: private beta on web (mail.syncedinbox.com, desktop browsers) and iOS. Android is planned.",
  "Sign-in uses a phone number and a 6-digit SMS code. The same account works on web and mobile.",
  "Live Inboxes (message sources): Gmail, Outlook, Slack, Microsoft Teams, WhatsApp Business, Instagram Business, Messenger, SMS via Twilio, GroupMe.",
  "Live output integrations: Google Drive, OneDrive, Google Calendar, and Outlook calendar (included with an Outlook connection). Coming soon: iMessage, Dropbox, Notion, GitHub.",
  "An Action Plan is the set of steps Synced takes or proposes for one incoming message. One message is one Action Plan regardless of step count.",
  "Pricing: Free $0 with 20 Action Plans a week. Pro $29.99 per user per month, or $24.99 billed annually, with 100 Action Plans a week. Enterprise is custom, with SSO and admin controls.",
  "Inboxes are unlimited on every plan, 4 accounts each. The Action Plan count resets every Monday at 00:00 UTC; the current count is shown under Usage in Settings.",
  "Synced does not send an AI-drafted message without the user's approval. Approvals happen in the Decide queue.",
  "Google Workspace data is not used to train generalized AI or machine-learning models. Synced follows the Google API Services User Data Policy, including Limited Use, and has completed Google's restricted-scope verification including the CASA security assessment.",
  "Data is encrypted in transit (TLS) and at rest. Users can disconnect integrations and request account deletion; deletion completes within 30 days.",
  "Company: Synced Inc., founded in 2025, based in San Francisco. Founders: Aum Dhruv (CEO) and Nick Harty (CTO).",
];

const ORDER: Cluster[] = ["product", "feature", "integration", "use-case", "compare", "alternatives", "guide", "template", "glossary", "help", "blog", "company"];

function indexed() {
  return pages.filter((p) => p.index !== false);
}

export function llmsTxt() {
  const lines = [
    "# Synced",
    "",
    `> ${SITE_DESCRIPTION} Private beta on web and iOS.`,
    "",
    "## Canonical pages",
    "",
    ...staticPages.map((p) => `- [${p.title}](${SITE_URL}${p.slug || "/"}): ${p.description}`),
  ];
  for (const c of ORDER) {
    const group = indexed().filter((p) => p.cluster === c);
    if (!group.length) continue;
    lines.push("", `## ${CLUSTER_LABEL[c]}`, "");
    for (const p of group) lines.push(`- [${p.navLabel ?? p.h1}](${SITE_URL}${p.slug}): ${p.cardText ?? p.description}`);
  }
  lines.push("", "## Important facts", "", ...FACTS.map((f) => `- ${f}`), "", `Full text of every page: ${SITE_URL}/llms-full.txt`, "");
  return lines.join("\n");
}

function blockMd(b: Block): string {
  switch (b.type) {
    case "h2": return `### ${flat(b.text)}`;
    case "h3": return `#### ${flat(b.text)}`;
    case "p": return md(b.text);
    case "list": return b.items.map((t, i) => `${b.ordered ? `${i + 1}.` : "-"} ${md(t)}`).join("\n");
    case "steps": return b.items.map((s, i) => `${i + 1}. **${flat(s.title)}**: ${md(s.body)}`).join("\n");
    case "table": return [`| ${b.head.join(" | ")} |`, `| ${b.head.map(() => "---").join(" | ")} |`, ...b.rows.map((r) => `| ${r.map(flat).join(" | ")} |`)].join("\n");
    case "template": return ["```", b.subject ? `Subject: ${b.subject}\n` : "", b.text, "```"].join("\n");
    case "callout": return `> ${b.title ? `**${b.title}.** ` : ""}${md(b.text)}`;
    case "features": return b.items.map((f) => `- **${f.title}**: ${md(f.body)}`).join("\n");
    case "message": return `Example (${b.source} message from ${b.from}): "${b.text}"\n${b.steps.map((s) => `- ${s}`).join("\n")}`;
    case "sources": return b.items.map((s) => `- ${s.label}: ${s.url} (checked ${s.checked})`).join("\n");
    default: return "";
  }
}

function pageMd(p: Page) {
  const parts = [`## ${p.h1}`, "", `URL: ${SITE_URL}${p.slug}  `, `Updated: ${p.updated}`, "", p.answer ? md(p.answer) : md(p.intro), ""];
  for (const b of p.body) {
    const s = blockMd(b);
    if (s) parts.push(s, "");
  }
  if (p.faqs?.length) {
    parts.push("### Questions", "");
    for (const f of p.faqs) parts.push(`**${f.q}**`, md(f.a), "");
  }
  return parts.join("\n");
}

export function llmsFullTxt() {
  const out = [
    "# Synced: full site content",
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## Important facts",
    "",
    ...FACTS.map((f) => `- ${f}`),
    "",
  ];
  for (const c of ORDER) for (const p of indexed().filter((x) => x.cluster === c)) out.push(pageMd(p), "---", "");
  return out.join("\n");
}
