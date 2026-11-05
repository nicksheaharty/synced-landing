import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syncedinbox.com").replace(/\/$/, "");
const title = "Synced | Your Inbox on Autopilot";
const description =
  "Synced is the AI inbox for executive and admin assistants. It reads every message for the people you support, books meetings, finds files and drafts replies in their voice. You approve every send.";

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
        legalName: "Synced Inc.",
        foundingDate: "2025",
        foundingLocation: { "@type": "Place", name: "San Francisco, California" },
        address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" },
        email: "contact@syncedinbox.com",
        description: "Synced (syncedinbox.com) makes an AI inbox for executive and admin assistants, and for professionals who run their own busy inbox.",
        founder: [
          { "@id": `${siteUrl}/team#aum-dhruv` },
          { "@id": `${siteUrl}/team#nick-harty` },
        ],
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
        operatingSystem: "Web, iOS",
        description,
        publisher: { "@id": `${siteUrl}/#organization` },
        offers: [
          { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: `${siteUrl}/pricing` },
          {
            "@type": "Offer",
            name: "Pro",
            price: "29.99",
            priceCurrency: "USD",
            url: `${siteUrl}/pricing`,
            priceSpecification: { "@type": "UnitPriceSpecification", price: "29.99", priceCurrency: "USD", unitText: "user per month" },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased" style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/pxn1uhe.css" />
        <link rel="icon" href={`${base}/favicon.ico`} sizes="any" />
        <link rel="icon" type="image/png" href={`${base}/favicon-2026-light.png`} media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href={`${base}/favicon-2026-dark.png`} media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href={`${base}/apple-touch-icon.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
