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
            fgColor="#ffffff"
            level="M"
            includeMargin={false}
          />
        </div>

        <p className="qr-label">Scan to join the waitlist</p>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body { height: 100%; }

        .qr-main {
          min-height: 100dvh;
          background: #0a0a0f;
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
          color: #ffffff;
        }

        .qr-wrap {
          line-height: 0;
        }

        .qr-label {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.02em;
        }
      `}</style>
    </>
  );
}
