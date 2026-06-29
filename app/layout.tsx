import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nicksheaharty.github.io/synced-landing";

export const metadata: Metadata = {
  title: "Synced | Your Automated Inbox",
  description:
    "Synced is an automated inbox that connects to your email, messages, cloud storage, and calendar to handle the busywork for you. Scan, draft, schedule, and follow up — all from your conversations.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Synced | Your Automated Inbox",
    description:
      "Synced connects to your email, messages, cloud storage, and calendar to complete work within your conversations. Make email as easy as texting.",
    type: "website",
    url: siteUrl,
    siteName: "Synced",
    images: [{ url: `${siteUrl}/social-preview.png`, width: 1200, height: 630, alt: "Synced" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synced | Your Automated Inbox",
    description: "Synced connects to your email, messages, cloud storage, and calendar to complete work within your conversations. Make email as easy as texting.",
    images: [`${siteUrl}/social-preview.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
        <link rel="icon" href={`${base}/favicon-light.png`} media="(prefers-color-scheme: light)" />
        <link rel="icon" href={`${base}/favicon-dark.png`} media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
