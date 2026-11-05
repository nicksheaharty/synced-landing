"use client";

import {
  PiCaretDownBold,
} from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CtaSection } from "../components/ui/CtaSection";
import { PricingCards } from "../components/ui/PricingCards";
import { PageHeroBackground } from "../components/ui/PageHeroBackground";


const comparisonRows = [
  { label: "Pricing", free: "$0 / user", pro: "$29.99 / user / month", enterprise: "Contact us" },
  { label: "Action Plans", free: "20 / week", pro: "100 / week", enterprise: "Custom" },
  { label: "Inboxes (input connectors)", free: "Unlimited, 4 accounts each", pro: "Unlimited, 4 accounts each", enterprise: "Unlimited, 4 accounts each" },
  { label: "Output integrations", free: "Drive, OneDrive, Calendar", pro: "Drive, OneDrive, Dropbox, Notion, GitHub, Calendar", enterprise: "All, plus custom" },
  { label: "Decide queue", free: "Included", pro: "Included", enterprise: "Included" },
  { label: "Tasks", free: "Included", pro: "Included", enterprise: "Included" },
  { label: "Web and mobile apps", free: "Included", pro: "Included", enterprise: "Included" },
  { label: "SSO and admin controls", free: "Not included", pro: "Not included", enterprise: "Included" },
  { label: "Support", free: "Standard", pro: "Priority", enterprise: "Dedicated" },
];

const faqs = [
  {
    q: "What counts as one Action Plan?",
    a: "One Action Plan is one message Synced reads and acts on, whether it finishes the task itself or hands you an item to approve in Decide. A single email that becomes three completed steps still counts as one Action Plan, not three.",
  },
  {
    q: "What happens if I hit my weekly limit?",
    a: "Synced keeps collecting your messages, so you never lose one. New requests past your weekly limit go to your Tasks list as to-dos for you to handle, with the steps written out. Replies on requests Synced is already working on keep going. Your count resets Monday at 00:00 UTC, or upgrade to keep Synced doing the work.",
  },
  {
    q: "When does the weekly count reset?",
    a: "Every Monday at 00:00 UTC. You can see how many Action Plans you've used this week any time from Settings.",
  },
  {
    q: "Can I switch between Free and Pro?",
    a: "Yes. Upgrade or downgrade at any time. Changes apply to your next billing cycle, and you keep your Inboxes and history either way.",
  },
  {
    q: "Is there a discount for paying yearly?",
    a: "Yes. Pro is $24.99 per user per month when billed annually, instead of $29.99 per user per month billed monthly.",
  },
  {
    q: "Is pricing per user?",
    a: "Yes. Free and Pro are both priced per user, per month. Every teammate you add is billed at the same rate on their own plan.",
  },
  {
    q: "I'm an assistant. Do I need a plan for each executive I support?",
    a: "No. One Synced login can connect up to 4 accounts per Inbox type, so your inbox and the inboxes you manage sit in one place. Each incoming message across all of them counts as one Action Plan toward your weekly limit. Outlook, Slack, and Teams need Pro.",
  },
  {
    q: "When should we talk to Enterprise instead of using Pro?",
    a: "If your company needs SSO, admin controls over who can connect Inboxes, a security review, or a custom contract, reach out and we will set that up directly.",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />

      <Header />

      <main className="flex flex-col flex-1 relative z-2">
        {/* Hero */}
        <section className="pricing-hero-section page-hero">
          <PageHeroBackground />
          <div className="container" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Pricing</span>
            <h1 className="pricing-title">Simple pricing, no surprises.</h1>
            <p className="pricing-sub">
              Start free. Upgrade when Synced becomes part of how you work. No credit card
              to try it, no confusing usage credits to track.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="plans-section">
          <div className="container">
            <PricingCards />
            <p className="pricing-footnote">
              An Action Plan is one message Synced reads and acts on, whether it finishes the
              task or hands it to you in Decide. See the FAQ below for details.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="compare-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginInline: "auto" }}>
              <div className="uppercase-label">Compare plans</div>
              <h2 className="section-heading">Everything, side by side.</h2>
            </div>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Free</th>
                    <th>Pro</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="compare-label">{row.label}</td>
                      <td>{row.free}</td>
                      <td className="compare-pro">{row.pro}</td>
                      <td>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginInline: "auto" }}>
              <div className="uppercase-label">Questions</div>
              <h2 className="section-heading">Frequently asked.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary className="faq-question">
                    {f.q}
                    <PiCaretDownBold size={14} className="faq-caret" />
                  </summary>
                  <p className="faq-answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaSection />
      </main>

      <Footer />

      <style>{`
        .pricing-hero-section {
          padding: 9rem 0 2rem;
          position: relative;
        }
        .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .pricing-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: hsl(var(--fg));
          margin-bottom: 1.1rem;
        }
        .pricing-sub {
          font-size: clamp(1rem, 1.8vw, 1.1rem);
          line-height: 1.6;
          color: hsl(var(--muted-fg));
          max-width: 560px;
          margin-inline: auto;
        }

        .plans-section { padding: 3rem 0 2rem; }

        .pricing-footnote {
          text-align: center;
          font-size: 0.8rem;
          color: hsl(var(--muted-fg));
          max-width: 560px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }

        .compare-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border) / .75);
        }
        .section-header { margin-bottom: 2.75rem; max-width: 640px; }
        .uppercase-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 0.75rem;
        }
        .section-heading {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(1.75rem, 4vw, 2.35rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.15;
          color: hsl(var(--fg));
        }

        .compare-table-wrap {
          overflow-x: auto;
          border: 1px solid hsl(var(--border) / .8);
          border-radius: 16px;
          background: hsl(var(--card) / .6);
        }
        .compare-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.88rem;
          min-width: 680px;
        }
        .compare-table th {
          text-align: left;
          padding: 1rem 1.5rem;
          font-family: "p22-mackinac-pro", serif;
          font-size: 1rem;
          font-weight: 700;
          color: hsl(var(--fg));
          border-bottom: 1px solid hsl(var(--border) / .8);
        }
        .compare-table td {
          padding: 0.9rem 1.5rem;
          color: hsl(var(--muted-fg));
          border-bottom: 1px solid hsl(var(--border) / .5);
        }
        .compare-table tr:last-child td { border-bottom: 0; }
        .compare-label { font-weight: 600; color: hsl(var(--fg)); }
        .compare-pro { color: hsl(var(--fg)); font-weight: 500; }

        .faq-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border) / .75);
        }
        .faq-list {
          max-width: 700px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq-item {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 14px;
          padding: 1.1rem 1.4rem;
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: hsl(var(--fg));
          cursor: pointer;
          list-style: none;
        }
        .faq-question::-webkit-details-marker { display: none; }
        .faq-caret {
          color: hsl(var(--primary));
          flex-shrink: 0;
          transition: transform .2s ease;
        }
        .faq-item[open] .faq-caret { transform: rotate(180deg); }
        .faq-answer {
          margin-top: 0.75rem;
          font-size: 0.86rem;
          line-height: 1.6;
          color: hsl(var(--muted-fg));
        }

        @media (max-width: 640px) {
          .pricing-hero-section { padding: 8.5rem 0 1.5rem; }
          .plans-section { padding: 2rem 0 1rem; }
          
          .compare-section, .faq-section { padding: 3.5rem 0; }

        }
      `}</style>
    </>
  );
}
