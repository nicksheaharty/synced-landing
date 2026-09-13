// Fast content check without a full `next build`.
//   npx tsx scripts/check-content.ts                 all pages, links must exist
//   npx tsx scripts/check-content.ts --planned       allow links to URLs in content/manifest.ts
//   npx tsx scripts/check-content.ts --only /guides  only report problems for slugs with this prefix
const args = process.argv.slice(2);
if (args.includes("--planned")) process.env.CONTENT_ALLOW_PLANNED = "1";
const only = args.includes("--only") ? args[args.indexOf("--only") + 1] : "";

async function main() {
  try {
    const { pages } = await import("../content/registry");
    const { ALL_PLANNED } = await import("../content/manifest");
    const mine = pages.filter((p) => !only || p.slug.startsWith(only));
    const unplanned = mine.filter((p) => !ALL_PLANNED.includes(p.slug)).map((p) => p.slug);
    console.log(`OK: ${pages.length} pages total, ${mine.length} matching "${only || "*"}".`);
    if (unplanned.length) console.log(`Note: not in manifest (add them there): ${unplanned.join(", ")}`);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const lines = msg.split("\n");
    const relevant = only ? lines.filter((l, i) => i === 0 || l.includes(`[${only}`)) : lines;
    console.error(relevant.join("\n"));
    if (only && relevant.length <= 1) {
      console.log(`No problems in "${only}" (other clusters have ${lines.length - 1}).`);
      return;
    }
    process.exitCode = 1;
  }
}

main();

export {};
