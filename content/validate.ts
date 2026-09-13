import type { Block, Page } from "./types";

// Build-time guardrails. Any violation throws, which fails `next build`.
// 1. One intent, one URL (plus slug hygiene).
// 2. No AI-slop copy.

const MODIFIERS = new Set([
  "best", "top", "vs", "versus", "for", "the", "a", "an", "to", "of", "and", "in", "on", "with", "how", "what", "is", "your", "ai", "app", "tool", "tools", "software",
]);

function normalizeIntent(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((w) => w && !MODIFIERS.has(w))
    .map((w) => w.replace(/s$/, ""))
    .sort()
    .join(" ");
}

const BANNED_WORDS = [
  "unlock", "unlocks", "unlocking", "supercharge", "supercharges", "revolutionize", "revolutionizes", "revolutionary",
  "transform", "transforms", "transformative", "empower", "empowers", "empowering", "elevate", "elevates",
  "seamless", "seamlessly", "game-changer", "game changer", "cutting-edge", "robust", "leverage", "leverages",
  "harness", "harnesses", "delve", "delves", "landscape", "realm", "tapestry", "look no further",
  "fast-paced world", "digital age", "it's important to note", "it is important to note", "at the end of the day",
  "in conclusion", "final thoughts", "streamline", "streamlines", "unleash", "effortlessly", "embark", "journey",
  "testament", "boasts", "myriad", "plethora", "whether you're a",
];
const BANNED_RE = new RegExp(`\\b(${BANNED_WORDS.map((w) => w.replace(/[-']/g, (c) => `\\${c}`)).join("|")})\\b`, "i");
const EMOJI_RE = new RegExp("\\p{Extended_Pictographic}", "u");
const GENERIC_H2 = /^(benefits|features|overview|introduction|conclusion|final thoughts|summary|why (it|this) matters\??)$/i;

function blockText(b: Block): string[] {
  switch (b.type) {
    case "h2":
    case "h3":
    case "p":
      return [b.text];
    case "list":
      return b.items;
    case "steps":
      return b.items.flatMap((i) => [i.title, i.body]);
    case "table":
      return [...b.head, ...b.rows.flat(), b.caption ?? ""];
    case "callout":
      return [b.title ?? "", b.text];
    case "features":
      return b.items.flatMap((i) => [i.title, i.body]);
    case "message":
      return [b.text, ...b.steps, b.caption ?? ""];
    default:
      return [];
  }
}

function copyFields(p: Page): { field: string; text: string }[] {
  const out = [
    { field: "title", text: p.title },
    { field: "h1", text: p.h1 },
    { field: "description", text: p.description },
    { field: "intro", text: p.intro },
    { field: "answer", text: p.answer ?? "" },
  ];
  p.body.forEach((b, i) => {
    // Email/message templates are user-facing samples and may legitimately contain "!" etc.
    if (b.type === "template") return;
    blockText(b).forEach((t) => out.push({ field: `body[${i}].${b.type}`, text: t }));
  });
  (p.faqs ?? []).forEach((f, i) => {
    out.push({ field: `faqs[${i}].q`, text: f.q });
    out.push({ field: `faqs[${i}].a`, text: f.a });
  });
  return out;
}

export function validatePages(pages: Page[], extraKnown: string[] = []) {
  const errors: string[] = [];
  const slugs = new Map<string, Page>();
  const intents = new Map<string, string>();

  for (const p of pages) {
    const at = `[${p.slug}]`;
    if (slugs.has(p.slug)) errors.push(`${at} duplicate slug`);
    slugs.set(p.slug, p);

    if (!/^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(p.slug)) errors.push(`${at} slug must be lowercase, hyphenated, no trailing slash`);
    if (/(19|20)\d{2}/.test(p.slug)) errors.push(`${at} slug must not contain a year (use an evergreen URL)`);

    const key = normalizeIntent(p.primaryIntent);
    const clash = intents.get(key);
    if (clash) errors.push(`${at} primaryIntent "${p.primaryIntent}" duplicates ${clash}; extend that page instead`);
    intents.set(key, p.slug);

    if (p.updated < p.published) errors.push(`${at} updated is before published`);
    if (p.title.length > 65) errors.push(`${at} title is ${p.title.length} chars (max 65)`);
    if (p.description.length < 90 || p.description.length > 170) errors.push(`${at} description is ${p.description.length} chars (want 90–170)`);

    for (const { field, text } of copyFields(p)) {
      const m = text.match(BANNED_RE);
      if (m) errors.push(`${at} ${field}: banned phrase "${m[0]}"`);
      if (EMOJI_RE.test(text)) errors.push(`${at} ${field}: emoji`);
      if (/!(?!\[)/.test(text.replace(/\[[^\]]*\]\([^)]*\)/g, ""))) errors.push(`${at} ${field}: exclamation mark`);
      if ((text.match(/—/g) ?? []).length > 1) errors.push(`${at} ${field}: more than one em dash`);
    }
    p.body.forEach((b, i) => {
      if (b.type === "h2" && GENERIC_H2.test(b.text.trim())) errors.push(`${at} body[${i}] generic H2 "${b.text}"`);
    });
  }

  // Referential integrity (after all slugs are known).
  const known = new Set([...slugs.keys(), ...extraKnown, "/", "/pricing", "/get-started", "/security", "/team", "/privacy", "/terms"]);
  for (const p of pages) {
    const at = `[${p.slug}]`;
    if (p.parent && !known.has(p.parent)) errors.push(`${at} parent ${p.parent} does not exist`);
    for (const r of p.related ?? []) if (!known.has(r)) errors.push(`${at} related ${r} does not exist`);
    p.body.forEach((b, i) => {
      if (b.type === "links") for (const s of b.slugs) if (!known.has(s)) errors.push(`${at} body[${i}] links ${s} does not exist`);
    });
    for (const { field, text } of copyFields(p)) {
      for (const m of text.matchAll(/\]\((\/[^)#]*)(#[^)]*)?\)/g)) {
        if (!known.has(m[1])) errors.push(`${at} ${field}: internal link ${m[1]} does not exist`);
      }
    }
  }

  if (errors.length) {
    throw new Error(`Content registry has ${errors.length} problem(s):\n  ${errors.join("\n  ")}`);
  }
}
