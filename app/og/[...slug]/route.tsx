import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { CLUSTER_LABEL, getPage, pages } from "@/content/registry";

// Build-time Open Graph cards for every registry page: /og/<slug>.png.
// Mackinac Pro (the site's heading face) is Typekit-only and can't be embedded,
// so cards use Young Serif (OFL), the closest open serif in weight and contrast.
// Everything this route reads lives in assets/, never public/: Next traces these files
// into the server bundle, and Firebase App Hosting skips copying public/ if it already
// exists there, which would drop every other image on the site.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => {
    const parts = p.slug.slice(1).split("/");
    parts[parts.length - 1] += ".png";
    return { slug: parts };
  });
}

const serif = readFileSync(path.join(process.cwd(), "assets/fonts/YoungSerif-Regular.ttf"));
const logo = `data:image/png;base64,${readFileSync(path.join(process.cwd(), "assets/og-logo.png")).toString("base64")}`;

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/").replace(/\.png$/, "")}`);
  if (!page) return new Response("Not found", { status: 404 });

  const title = page.h1.replace(/\.$/, "");
  const size = title.length > 48 ? 58 : title.length > 28 ? 68 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(68,41,242,0.09), rgba(245,245,250,0) 72%), #F5F5FA",
          color: "#0F0A2D",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={44} height={44} style={{ borderRadius: 10 }} alt="" />
          <span style={{ fontFamily: "Young Serif", fontSize: 36, letterSpacing: -0.5 }}>Synced</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#4429F2" }}>
            {CLUSTER_LABEL[page.cluster]}
          </span>
          <span style={{ fontFamily: "Young Serif", fontSize: size, lineHeight: 1.06, letterSpacing: -1.5, maxWidth: 1000 }}>
            {title}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: 72, height: 5, borderRadius: 3, background: "#4429F2" }} />
          <span style={{ fontSize: 22, color: "#5E5889" }}>syncedinbox.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: [{ name: "Young Serif", data: serif, style: "normal", weight: 400 }] },
  );
}
