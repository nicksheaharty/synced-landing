"use client";

import {
  PiCheckBold,
  PiArrowRightDuotone,
  PiCaretDownBold,
} from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/user",
    tagline: "Try Synced on your main inbox.",
    featured: false,
    features: [
      "20 Action Plans a week",
      "Unlimited Signals",
      "Gmail, Drive, OneDrive and Calendar",
      "Decide queue and Tasks",
      "Web and mobile apps",
    ],
    cta: "Get Early Access",
    href: WAITLIST_URL,
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "/user/month",
    billingNote: "$24.99/user/month billed annually",
    tagline: "For your inbox, every day.",
    featured: true,
    features: [
      "100 Action Plans a week",
      "Unlimited Signals",
      "All integrations (adds Notion, GitHub, Slack and Teams)",
      "Decide queue and Tasks",
      "Web and mobile apps",
      "Priority support",
    ],
    cta: "Get Early Access",
    href: WAITLIST_URL,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    tagline: "For teams and companies.",
    featured: false,
    features: [
      "Custom Action Plan limits",
      "SSO and admin controls",
      "Security review and custom contract",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    href: "https://forms.gle/tP89zuGpCL1BsR6f6",
  },
];

const comparisonRows = [
  { label: "Pricing", free: "$0 / user", pro: "$29.99 / user / month", enterprise: "Contact us" },
  { label: "Action Plans", free: "20 / week", pro: "100 / week", enterprise: "Custom" },
  { label: "Signals (input connectors)", free: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
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
    a: "Synced keeps collecting your messages. Anything past your weekly limit waits until your count resets, so you never lose a message, you just wait for the next cycle or upgrade to keep going.",
  },
  {
    q: "When does the weekly count reset?",
    a: "Every 7 days from when you connected your first Signal. You can see your usage and reset date any time from Settings.",
  },
  {
    q: "Can I switch between Free and Pro?",
    a: "Yes. Upgrade or downgrade at any time. Changes apply to your next billing cycle, and you keep your Signals and history either way.",
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
    q: "When should we talk to Enterprise instead of using Pro?",
    a: "If your company needs SSO, admin controls over who can connect Signals, a security review, or a custom contract, reach out and we will set that up directly.",
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />

      <Header />

      <main className="flex flex-col flex-1 relative z-2">
        {/* Hero */}
        <section className="pricing-hero-section">
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
            <div className="plans-grid">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-page-card${plan.featured ? " pricing-page-card-featured" : ""}`}
                >
                  {plan.featured ? <span className="pricing-badge">Most popular</span> : null}
                  <div className="pricing-card-head">
                    <div className="pricing-plan-name">{plan.name}</div>
                    <div className="pricing-price">
                      <span className={`pricing-amount${plan.price.length > 5 ? " pricing-amount-sm" : ""}`}>{plan.price}</span>
                      {plan.period ? <span className="pricing-period">{plan.period}</span> : null}
                    </div>
                    <p className="pricing-tagline">{plan.billingNote ?? plan.tagline}</p>
                  </div>
                  <ul className="pricing-features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <PiCheckBold size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.href}
                    className={`${plan.featured ? "btn-primary" : "btn-ghost"} pricing-cta`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
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
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-copy-block">
                <div className="uppercase-label">Ready when you are</div>
                <h2 className="cta-title">
                  Get early access<br />to Synced.
                </h2>
                <p className="cta-sub">Join the waitlist and we&apos;ll let you know the moment you&apos;re in.</p>
              </div>
              <a href={WAITLIST_URL} className="btn-primary btn-lg">
                Get Early Access
                <PiArrowRightDuotone size={18} />
              </a>
            </div>
          </div>
        </section>
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
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1040px;
          margin-inline: auto;
        }
        .pricing-page-card {
          position: relative;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / .75);
          border-radius: 20px;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
        }
        .pricing-page-card-featured {
          border-color: hsl(var(--primary) / .45);
          box-shadow: 0 20px 55px rgba(68, 41, 242, 0.14);
        }
        .pricing-badge {
          position: absolute;
          top: -0.7rem;
          left: 50%;
          transform: translateX(-50%);
          background: hsl(var(--primary));
          color: hsl(248 100% 98%);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
        }
        .pricing-card-head { margin-bottom: 1.5rem; }
        .pricing-plan-name {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.5rem;
        }
        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .pricing-amount {
          font-family: "p22-mackinac-pro", serif;
          font-size: 2.75rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: hsl(var(--fg));
        }
        .pricing-amount-sm { font-size: 1.85rem; }
        .pricing-period {
          font-size: 0.95rem;
          color: hsl(var(--muted-fg));
        }
        .pricing-tagline {
          font-size: 0.82rem;
          color: hsl(var(--muted-fg));
          margin-top: 0.5rem;
        }
        .pricing-features {
          list-style: none;
          margin: 0 0 2rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: hsl(var(--fg));
          line-height: 1.45;
        }
        .pricing-features li svg {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .pricing-cta {
          width: 100%;
          justify-content: center;
        }
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

        .cta-section { padding: 2rem 0 8rem; }
        .cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(2rem, 7vw, 6rem);
          padding: clamp(2.5rem, 5vw, 4rem);
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 32px;
          background:
            radial-gradient(circle at 92% 15%, hsl(var(--primary) / .09), transparent 34%),
            hsl(var(--card) / .78);
          box-shadow: 0 24px 70px rgba(35, 27, 72, .06), inset 0 1px 0 hsl(var(--card));
        }
        .cta-copy-block .uppercase-label { margin-bottom: .8rem; }
        .cta-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2rem, 4vw, 2.85rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0;
        }
        .cta-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 420px;
          line-height: 1.65;
          margin-top: 1rem;
        }
        .cta-inner > .btn-primary { min-width: 190px; justify-content: center; }

        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr; max-width: 400px; }
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
        }
        @media (max-width: 640px) {
          .pricing-hero-section { padding: 8.5rem 0 1.5rem; }
          .plans-section { padding: 2rem 0 1rem; }
          .pricing-page-card { padding: 1.5rem; }
          .compare-section, .faq-section { padding: 3.5rem 0; }
          .cta-section { padding: 1rem 0 4rem; }
          .cta-inner {
            gap: 1.4rem;
            border-radius: 22px;
            padding: 1.75rem 1.25rem 1.25rem;
          }
          .cta-inner > .btn-primary { width: 100%; min-width: 0; }
        }
      `}</style>
    </>
  );
}
