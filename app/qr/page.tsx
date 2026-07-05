"use client";

import { QRCodeSVG } from "qrcode.react";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function QRPage() {
  return (
    <>
      <div className="bg-container">
        <div className="bg-grid-base" />
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <main className="qr-main">
        <div className="qr-card">
          <div className="qr-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={36} height={36} className="qr-icon" />
            <span className="qr-brand">Synced</span>
          </div>

          <div className="qr-wrap">
            <QRCodeSVG
              value={WAITLIST_URL}
              size={260}
              bgColor="transparent"
              fgColor="hsl(248, 89%, 55%)"
              level="M"
              includeMargin={false}
            />
          </div>

          <p className="qr-label">Scan to join the waitlist</p>
          <p className="qr-url">{WAITLIST_URL}</p>
        </div>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { min-height: 100dvh; }

        .bg-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .bg-grid-base {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(hsl(248 30% 70% / 0.12) 1.2px, transparent 1.2px);
          background-size: 32px 32px;
        }

        .ambient-blob-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, hsl(248 89% 65% / 0.14) 0%, transparent 70%);
          filter: blur(50px);
          animation: drift-slow 25s infinite alternate ease-in-out;
        }

        .ambient-blob-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, hsl(280 80% 65% / 0.1) 0%, transparent 70%);
          filter: blur(60px);
          animation: drift-slower 35s infinite alternate-reverse ease-in-out;
        }

        @keyframes drift-slow {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(80px, -60px) scale(1.15); }
          100% { transform: translate(-60px, 80px) scale(0.9); }
        }
        @keyframes drift-slower {
          0%   { transform: translate(0, 0) scale(0.95); }
          50%  { transform: translate(-70px, 80px) scale(1.1); }
          100% { transform: translate(60px, -60px) scale(1); }
        }

        .qr-main {
          position: relative;
          z-index: 2;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .qr-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.75rem;
          background: color-mix(in srgb, hsl(var(--card)) 70%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 24px;
          padding: 3rem 3.5rem;
          box-shadow:
            0 0 0 1px hsl(var(--border) / 0.3),
            0 32px 80px -20px hsl(248 89% 55% / 0.15);
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
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: hsl(var(--fg));
        }

        .qr-wrap {
          padding: 1.25rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(68, 41, 242, 0.12);
          line-height: 0;
        }

        .qr-label {
          font-size: 1rem;
          font-weight: 600;
          color: hsl(var(--fg));
          letter-spacing: -0.01em;
        }

        .qr-url {
          font-size: 0.75rem;
          color: hsl(var(--muted-fg));
          opacity: 0.7;
          font-family: monospace;
        }
      `}</style>
    </>
  );
}
