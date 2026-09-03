"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-subtitle">
                  We believe in plain language. Here is a clear breakdown of what data we collect, why we collect it, and how we protect it when you use Synced.
                </p>
              </div>

              <div className="legal-body">
                <h2>1. Overview</h2>
                <p>
                  Synced ("we," "our," or "us") is an AI inbox assistant that helps users search connected messages and files, draft replies, coordinate calendars, and manage follow-ups. When you choose to connect Google services, Synced accesses only the data needed to provide the features you enable. This Privacy Policy explains what we access, how we use it, and the controls available to you.
                </p>

                <h2>2. Information We Collect and Access (Data Access)</h2>
                <p>
                  We request the minimum information needed to provide Synced&apos;s inbox, scheduling, search, drafting, and follow-up features. The information available to Synced depends on the services and permissions you choose to enable. Specifically:
                </p>
                <ul>
                  <li>
                    <strong>Account Authentication &amp; Profile Details:</strong> When you sign up via Google OAuth, we collect your primary email address (<code>userinfo.email</code>) and profile information (<code>userinfo.profile</code>) to authenticate your identity, secure your login, and set up your workspace profile.
                  </li>
                  <li>
                    <strong>Calendar Information (Read &amp; Write):</strong> If you connect your Google Calendar (using the <code>.../auth/calendar</code> scope), we retrieve calendar availability to find conflict-free meeting times, and create or modify calendar events per your request. Write access is necessary for the app's core feature of scheduling and updating meetings.
                  </li>
                  <li>
                    <strong>Contacts Information (Read-only):</strong> If you connect your contacts (using the <code>.../auth/contacts.readonly</code> and <code>.../auth/contacts.other.readonly</code> scopes), we retrieve your contacts via the People API to automatically autocomplete and fill invitee email addresses when scheduling meetings or sending invites.
                  </li>
                  <li>
                    <strong>Drive Files (Read-only):</strong> If you authorize access to Google Drive (using the <code>.../auth/drive.readonly</code> scope), our AI assistant searches your Drive files to locate relevant existing materials and reads or extracts content from them to answer your queries or compile context for your tasks.
                  </li>
                  <li>
                    <strong>Email Communications (Gmail Read &amp; Write):</strong> If you connect your Gmail account (using the <code>.../auth/gmail.readonly</code> and <code>.../auth/gmail.modify</code> scopes), our system searches messages and retrieves message details/headers to compile context, summarize email threads, and answer your questions. We also use these scopes to create draft replies and send emails, with each draft requiring your explicit approval before sending.
                  </li>
                </ul>

                <div className="legal-callout">
                  <h3>Google Workspace API Limited Use Disclosure</h3>
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
                  <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
                    The use of raw or derived user data received from Workspace APIs will adhere to the Google User Data Policy, including the Limited Use requirements.
                  </p>
                </div>

                <h2>3. How We Use and Share Google User Data (Data Use, Transfer, and AI/ML Training Restrictions)</h2>
                <p>
                  We process, use, and transfer raw, derived, or aggregated/anonymized Google user data strictly to deliver and improve the user-facing features of the Synced platform. We adhere to the following strict guardrails:
                </p>
                <ul>
                  <li>
                    <strong>Data Use:</strong> We use Google user data solely to enable critical app services: authenticating your profile, finding conflict-free meeting times on your calendar, scheduling and modifying calendar events, autocompleting recipient contacts, summarizing emails, and enabling our AI assistant to answer your questions using context from your Google Drive and Gmail.
                  </li>
                  <li>
                    <strong>Prohibited Data Use:</strong> Raw, derived, or aggregated/anonymized Google user data is never used for any purpose other than to provide or improve user-facing features. Any use of this data for targeted advertising, serving ads, or lending purposes is strictly prohibited.
                  </li>
                  <li>
                    <strong>Data Transfer &amp; Types of Parties Shared With:</strong> We only share or transfer raw, derived, or aggregated/anonymized Google user data with third-party service providers (such as secure cloud hosting and database providers like Google Cloud Firebase/Firestore, and LLM processing APIs like OpenAI or Anthropic) as necessary to execute the app's user-facing services. These third parties are bound by strict confidentiality agreements and developer terms that prohibit them from using or retaining your data for any other purposes, including training their own AI models.
                  </li>
                  <li>
                    <strong>Prohibited Data Transfer:</strong> Transfer or sale of raw, derived, or aggregated/anonymized Google user data to data brokers, advertisers, ad networks, or any other third parties for purposes other than providing or improving our service is strictly prohibited.
                  </li>
                  <li>
                    <strong>AI/ML Model Training Restrictions:</strong> We strictly prohibit using raw, derived, or aggregated/anonymized Google Workspace APIs user data (including email contents, calendar entries, files, or contacts) to develop, improve, or train any generalized Artificial Intelligence (AI) or Machine Learning (ML) models. No data received from Workspace APIs will be transferred to third-party services that use it for their own model training.
                  </li>
                  <li>
                    <strong>Limited Human Access:</strong> Our developers and employees do not access or read your Google user data (calendar events, emails, files, or contacts) unless you explicitly request support to debug a specific issue, you provide written consent, or it is necessary for security investigations (such as detecting abuse or responding to malware).
                  </li>
                </ul>

                <h2>4. Data Security &amp; Storage (Data Protection)</h2>
                <p>
                  We are committed to securing and protecting your Google user data. All credentials, tokens, and synced metadata (such as deadline events and email logs) are encrypted in transit using industry-standard TLS protocols and encrypted at rest within our secure databases. We employ strict firewalls, continuous vulnerability logging, and restricted access controls to prevent unauthorized access and ensure your Google user data is protected against loss, misuse, or alteration.
                </p>

                <h2>5. User Controls, Retention, and Deletion (Data Retention &amp; Deletion)</h2>
                <p>
                  You are in full control of your integrations, credentials, and data at all times:
                </p>
                <ul>
                  <li>
                    <strong>Data Retention Policy:</strong> We retain account data, authorization tokens, and cached service data only while your Synced account is active or for as long as needed to provide the features you enable, meet legal obligations, resolve disputes, and protect the Service.
                  </li>
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
                    <strong>Data Deletion Policy &amp; Practice:</strong> If you close your account or submit a request for data deletion, all associated stored tokens, credentials, and cached calendar or email records will be permanently and securely deleted from our servers and databases within 30 days.
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
