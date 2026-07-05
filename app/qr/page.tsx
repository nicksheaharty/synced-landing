"use client";

import { QRCodeSVG } from "qrcode.react";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function QRPage() {
  return (
    <>
      <main className="qr-main">
        <div className="qr-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/icon-light.png`} alt="" width={36} height={36} className="qr-icon" />
          <span className="qr-brand">Synced</span>
        </div>

        <div className="qr-wrap">
          <QRCodeSVG
            value={WAITLIST_URL}
            size={280}
            bgColor="transparent"
            fgColor="#3d22e8"
            level="M"
            includeMargin={false}
          />
        </div>

        <p className="qr-label">Scan to get early access</p>
      </main>

      <style>{`
        :root { color-scheme: light only; }

        html, body {
          height: 100%;
          background: #f5f4fc !important;
          color: #0f0b2e !important;
        }

        .qr-main {
          min-height: 100dvh;
          background: #f5f4fc;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          padding: 2rem;
        }

        .qr-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .qr-icon {
          border-radius: 8px;
          display: block;
        }

        .qr-brand {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0f0b2e;
        }

        .qr-wrap {
          line-height: 0;
        }

        .qr-label {
          font-size: 0.95rem;
          font-weight: 500;
          color: #6b6490;
          letter-spacing: 0.02em;
        }
      `}</style>
    </>
  );
}
