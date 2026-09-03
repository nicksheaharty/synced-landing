import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syncedinbox.com").replace(/\/$/, "");
const title = "Your AI Inbox on Autopilot | Synced";
const description =
  "Synced is an AI inbox that searches your email and files, drafts replies, coordinates calendars, and manages follow-ups automatically.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  applicationName: "Synced",
  authors: [{ name: "Synced", url: siteUrl }],
  creator: "Synced",
  publisher: "Synced",
  keywords: [
    "AI inbox assistant",
    "email assistant",
    "AI email automation",
    "calendar scheduling assistant",
    "automated follow-ups",
    "inbox management",
  ],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Synced",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/social-preview.png`,
        width: 1200,
        height: 630,
        alt: "Synced AI inbox assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/social-preview.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Synced",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-light.png`,
          width: 440,
          height: 440,
        },
        sameAs: [
          "https://www.linkedin.com/company/syncedinbox/",
          "https://www.instagram.com/syncedinbox/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Synced",
        description,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "Synced",
        url: siteUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
        <link rel="icon" href={`${base}/favicon-light.png`} media="(prefers-color-scheme: light)" />
        <link rel="icon" href={`${base}/favicon-dark.png`} media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
