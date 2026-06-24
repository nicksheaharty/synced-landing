"use client";

import { useEffect, useState } from "react";
import { PiArrowRightDuotone } from "react-icons/pi";

const APP_URL = "https://app.synced.it";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const bgContainer = document.querySelector(".bg-container") as HTMLElement;
    const handleMouseMove = (e: PointerEvent) => {
      if (bgContainer) {
        bgContainer.style.setProperty("--mouse-x", `${e.clientX}px`);
        bgContainer.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", handleMouseMove);

    const cards = document.querySelectorAll(".legal-card");
    const handleCardMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--card-mouse-x", `${x}px`);
      card.style.setProperty("--card-mouse-y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove as any);
    });

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove as any);
      });
    };
  }, []);

  return (
    <>
      {/* Dynamic Background Elements */}
      <div className="bg-container">
        <div className="bg-grid-base" />
        <div className="bg-grid-glow" />
        <div className="cursor-glow" />
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="ambient-blob-3" />
      </div>

      {/* Nav */}
      <nav className={`synced-nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={26} height={26} className="nav-icon" />
            <LogoText />
          </a>
          <nav className="nav-links">
            <a href={`${BASE}/#features`} className="nav-link">Features</a>
            <a href={`${BASE}/#agencies`} className="nav-link">Compliance</a>
            <a href={`${BASE}/#pricing`} className="nav-link">Pricing</a>
            <a href={`${BASE}/#team`} className="nav-link">Team</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <a href="https://meet.synced.it" className="nav-link" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
              Legacy App
            </a>
            <a href={APP_URL} className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="flex flex-col flex-1 relative z-2">
        <section className="legal-section">
          <div className="container">
            <div className="legal-card">
              <div className="legal-header">
                <span className="eyebrow">Last updated: June 23, 2026</span>
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-subtitle">
                  We believe in plain language. Here is a clear breakdown of what data we collect, why we collect it, and how we protect it when you use Synced.
                </p>
              </div>

              <div className="legal-body">
                <h2>1. Overview</h2>
                <p>
                  Synced ("we," "our," or "us") provides coordination and exam readiness infrastructure for banks and fintech companies. To help teams coordinate meetings, manage deadlines, and build a compliance audit trail, we integrate with Google APIs to access calendars and email communications. This Privacy Policy details how we handle that information.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                  We only request and collect the minimal amount of information required to deliver the core scheduling and regulatory deadline tracking services of Synced. Specifically:
                </p>
                <ul>
                  <li>
                    <strong>Account Authentication Details:</strong> When you sign up via Google OAuth, we collect your email address (`userinfo.email`) to authenticate your identity, secure your login, and set up your workspace profile.
                  </li>
                  <li>
                    <strong>Calendar Information:</strong> If you connect your Google Calendar, we check your calendar schedules and events. This allows us to map compliance deadlines, track response windows, check team availability, and coordinate exam meetings automatically.
                  </li>
                  <li>
                    <strong>Email Communications (Gmail):</strong> If you authorize access to your Gmail account (using the `gmail.readonly` and `gmail.modify` scopes), our system indexes incoming messages related to regulatory examinations (e.g., communications from the SEC, OCC, FDIC, or CFPB). This is used to detect regulatory response dates, flag document request lists, and keep compliance managers synced.
                  </li>
                </ul>

                <div className="legal-callout">
                  <h3>Google API Limited Use Disclosure</h3>
                  <p>
                    Synced’s use and transfer of information received from Google APIs to any other app will adhere to the{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Google API Services User Data Policy
                    </a>
                    , including the <strong>Limited Use</strong> requirements.
                  </p>
                </div>

                <h2>3. How We Use Google OAuth Data</h2>
                <p>
                  We process data collected via Google OAuth strictly to support the functionalities of the Synced platform. We follow these strict guardrails:
                </p>
                <ul>
                  <li>
                    <strong>No Ad Targeting:</strong> We will never sell, lease, or rent your personal information or data collected via Google APIs. We do not share this data with any third-party ad networks, data brokers, or advertising platforms.
                  </li>
                  <li>
                    <strong>No AI/ML Model Training:</strong> We do not use personal data received from Google Workspace APIs (including calendar entries or email content) to train, retrain, or fine-tune generalized Artificial Intelligence (AI) or Machine Learning (ML) models.
                  </li>
                  <li>
                    <strong>Limited Human Access:</strong> Our developers and employees will not read your calendar events or emails unless you request support resolving a specific technical bug, you explicitly consent in writing to help us debug an issue, or it is necessary for security investigations (e.g., detecting abuse or responding to malware).
                  </li>
                  <li>
                    <strong>Restricted Sharing:</strong> We only transfer Google user data to third parties if it is necessary to provide or improve our user-facing features (such as secure databases and hosting providers), comply with applicable law, or as part of a merger or acquisition.
                  </li>
                </ul>

                <h2>4. Data Security &amp; Storage</h2>
                <p>
                  All credentials and synced metadata (such as deadline events and email parse logs) are encrypted in transit using industry-standard TLS protocols and encrypted at rest within our secure databases (e.g. Firebase Firestore). We employ strict firewalls, vulnerability logging, and access controls to prevent unauthorized access.
                </p>

                <h2>5. User Controls: Revoking and Deleting</h2>
                <p>
                  You are in full control of your integrations and credentials at all times:
                </p>
                <ul>
                  <li>
                    <strong>Revoking Access:</strong> You can disconnect your Google Calendar or Gmail account at any time directly in your Synced settings. Alternatively, you can revoke Synced's access to your Google account via the{" "}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Google Security Settings page
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Data Deletion:</strong> If you close your account or request data deletion, all stored tokens, credentials, and cached calendar or email meta-records will be permanently expunged from our database records.
                  </li>
                </ul>

                <h2>6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, your data rights, or how to delete your account, please email us directly:
                </p>
                <p className="contact-email">
                  <a href="mailto:nick@storiara.com">nick@storiara.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer relative z-2">
        <div className="container footer-inner">
          <a href={`${BASE}/`} aria-label="Synced home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/icon-light.png`} alt="" width={20} height={20} className="nav-icon" />
            <LogoText small />
          </a>
          <nav className="footer-links">
            <a href="mailto:nick@storiara.com" className="footer-link">Contact</a>
            <a href={`${BASE}/privacy/`} className="footer-link">Privacy</a>
            <a href={`${BASE}/terms/`} className="footer-link">Terms</a>
          </nav>
          <span className="footer-copy">© 2026 Synced.it</span>
        </div>
      </footer>

      <style>{`
        /* ── Page-specific Styles ── */
        .legal-section {
          padding: 8rem 0 5rem;
          position: relative;
        }

        .legal-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 16px;
          padding: clamp(1.5rem, 5vw, 3.5rem);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .legal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(350px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.06), transparent 80%);
          opacity: 1;
          pointer-events: none;
          z-index: 0;
        }

        .legal-card > * {
          position: relative;
          z-index: 1;
        }

        .legal-header {
          border-bottom: 1px solid hsl(var(--border) / 0.6);
          padding-bottom: 2rem;
          margin-bottom: 2.5rem;
        }

        .legal-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: hsl(var(--fg));
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }

        .legal-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: hsl(var(--muted-fg));
          line-height: 1.6;
          max-width: 720px;
        }

        .legal-body {
          color: hsl(var(--fg));
        }

        .legal-body h2 {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: hsl(var(--fg));
        }

        .legal-body p {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          margin-bottom: 1.25rem;
        }

        .legal-body ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .legal-body li {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          margin-bottom: 0.75rem;
          padding-left: 1.25rem;
          position: relative;
        }

        .legal-body li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: hsl(var(--primary));
        }

        .legal-callout {
          background: hsl(var(--primary) / 0.04);
          border-left: 3px solid hsl(var(--primary));
          padding: 1.5rem;
          border-radius: 6px;
          margin: 2rem 0;
        }

        .legal-callout h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: hsl(var(--fg));
        }

        .legal-callout p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .text-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .text-link:hover {
          opacity: 0.8;
        }

        .contact-email {
          font-weight: 600;
          font-size: 1rem !important;
        }

        .contact-email a {
          color: hsl(var(--primary));
          text-decoration: none;
        }
        .contact-email a:hover {
          text-decoration: underline;
        }

      `}</style>
    </>
  );
}

function LogoText({ small }: { small?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "p22-mackinac-pro, serif",
        fontSize: small ? "1rem" : "1.25rem",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        color: "hsl(var(--fg))",
      }}
    >
      Synced<span style={{ color: "hsl(var(--primary))" }}>.</span>It
    </span>
  );
}
