import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Synced | Coordination infrastructure for regulated meetings",
  description:
    "Bulletproof meeting coordination, statutory deadline tracking, and compliance audit trail for SEC, OCC, and CFPB exams.",
  openGraph: {
    title: "Synced | Coordination infrastructure for regulated meetings",
    description:
      "Bulletproof meeting coordination, statutory deadline tracking, and compliance audit trail for SEC, OCC, and CFPB exams.",
    type: "website",
    images: [{ url: `${base}/social-preview.png`, width: 1200, height: 630 }],
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
