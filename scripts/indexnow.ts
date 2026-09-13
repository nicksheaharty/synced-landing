// Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver; Bing's index feeds ChatGPT search and Copilot).
//
// One-time setup: pick a key (8–128 hex chars), save it as public/<key>.txt containing only the key, deploy.
// After each deploy:  INDEXNOW_KEY=<key> npx tsx scripts/indexnow.ts
const key = process.env.INDEXNOW_KEY;
const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syncedinbox.com").replace(/\/$/, "");

async function main() {
  if (!key) throw new Error("Set INDEXNOW_KEY (and publish public/<key>.txt first).");
  const xml = await (await fetch(`${site}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/${key}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: submitted ${urls.length} URLs, HTTP ${res.status}`);
  if (!res.ok) process.exitCode = 1;
}

main();

export {};
