"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
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

      <Header />

      <main className="flex flex-col flex-1 relative z-2">
        <section className="legal-section">
          <div className="container">
            <div className="legal-card">
              <div className="legal-header">
                <span className="eyebrow">Last updated: September 3, 2026</span>
                <h1 className="legal-title">Terms of Service</h1>
                <p className="legal-subtitle">
                  By using Synced, you agree to these Terms. Let's make sure we are aligned on rules, responsibilities, and disclaimers.
                </p>
              </div>

              <div className="legal-body">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing, registering for, or using Synced through syncedinbox.com, mail.syncedinbox.com, or an official Synced application (the "Platform" or "Service"), you agree to these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                  Synced is an AI inbox assistant that can search connected messages and files, summarize conversations, draft replies, coordinate calendars, and manage follow-ups. Some features may be offered as part of a private beta, may vary by platform or connected service, and may change as the product develops.
                </p>

                <h2>3. Account Registration &amp; Google Integrations</h2>
                <p>
                  To use inbox search, scheduling, drafting, and related automation features, you may need to sign in or connect an account using Google OAuth.
                </p>
                <ul>
                  <li>
                    <strong>Credential Security:</strong> You represent that you have the authority to link your professional Google account. You are solely responsible for maintaining security around your credentials and workspace permissions.
                  </li>
                  <li>
                    <strong>Authorization Scope:</strong> By authorizing Synced to connect to your Google account, you grant us permission to access specific integrations:
                    <br />
                    - <em>Email (Gmail):</em> To search emails, retrieve thread details, compile context for summaries, draft replies, and send user-approved email responses.
                    <br />
                    - <em>Calendar:</em> To retrieve calendar availability to find conflict-free meeting times, and to create or modify calendar events per your request.
                    <br />
                    - <em>Contacts (Read-only):</em> To search and retrieve contact details via the People API to autocomplete email addresses and prevent typos when scheduling.
                    <br />
                    - <em>Drive (Read-only):</em> To search, retrieve, and read content from files in your Google Drive to answer queries or use as source context for tasks you request.
                  </li>
                  <li>
                    <strong>Revocation:</strong> You can disconnect these integration permissions at any point through your Synced dashboard or your Google Account Security dashboard.
                  </li>
                </ul>

                <h2>4. AI Output Disclaimer &amp; User Responsibilities</h2>
                <p>
                  <strong>IMPORTANT:</strong> Synced is an administrative and organizational utility tool.
                </p>
                <ul>
                  <li>
                    <strong>Review AI Output:</strong> AI-generated summaries, drafts, suggested actions, dates, and other output may be incomplete or incorrect. You are responsible for reviewing output before relying on it or sending, scheduling, or approving an action.
                  </li>
                  <li>
                    <strong>Final Verification:</strong> You retain responsibility for your communications, files, meetings, deadlines, and decisions. Verify important information against the original message, file, calendar, or other authoritative source.
                  </li>
                </ul>

                <h2>5. Acceptable Use Policy</h2>
                <p>
                  You agree not to misuse the Service. You shall not:
                </p>
                <ul>
                  <li>
                    Attempt to breach or bypass security, rate limits, or access controls.
                  </li>
                  <li>
                    Use the Service to process, store, or transmit illegal or malicious material, or violate privacy rights.
                  </li>
                  <li>
                    Reverse engineer, duplicate, or lease components of the Synced platform, designs, or underlying code.
                  </li>
                </ul>

                <h2>6. Intellectual Property</h2>
                <p>
                  Synced retains all right, title, and interest in and to the Platform, including code, design systems, layouts, brand logos, assets, and documentation. You retain all ownership rights in any data, emails, or calendar items you sync or upload to the Platform.
                </p>

                <h2>7. Limitation of Liability &amp; Disclaimers</h2>
                <p>
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNCED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, MISSED COMMUNICATIONS OR DEADLINES, OR DATA LOSS RESULTING FROM (I) USE OF OR INABILITY TO USE THE PLATFORM; (II) RELIANCE ON AI-GENERATED OR SURFACED INFORMATION; OR (III) SERVICE DOWNTIME OR DATA CORRUPTION.
                </p>

                <h2>8. Governing Law</h2>
                <p>
                  These Terms and any dispute arising from your use of the Platform shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.
                </p>

                <h2>9. Term and Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your workspace access at any time, with or without cause or notice, if we believe you are in violation of these Terms or engaged in activities harmful to other Platform users. You may terminate your account at any time by requesting deletion at <a href="mailto:nick@storiara.com" className="text-link">nick@storiara.com</a>.
                </p>

                <h2>10. Changes to Terms</h2>
                <p>
                  We may periodically revise these Terms. If a revision is material, we will notify you by email or via a banner in the application dashboard. Your continued use of Synced after modifications take effect indicates your acceptance of the updated Terms.
                </p>

                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions or feedback regarding these Terms, please contact us at:
                </p>
                <p className="contact-email">
                  <a href="mailto:nick@storiara.com">nick@storiara.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
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
