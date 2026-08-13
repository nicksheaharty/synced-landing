"use client";

import {
  PiChatCircleTextDuotone,
  PiListChecksDuotone,
  PiHandTapDuotone,
  PiDeviceMobileDuotone,
  PiDesktopDuotone,
  PiArrowRightDuotone,
  PiPhoneDuotone,
  PiUserCircleDuotone,
  PiPlugsConnectedDuotone,
  PiCheckCircleDuotone,
  PiClockDuotone,
} from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const coreLoop = [
  { icon: PiPlugsConnectedDuotone, label: "Connect a Signal" },
  { icon: PiListChecksDuotone, label: "Synced drafts an Action Plan" },
  { icon: PiHandTapDuotone, label: "You clear Decide" },
];

const webSteps = [
  {
    title: "Open mail.synced.it",
    body: "Synced on the web is a desktop app. Use a full-size screen.",
  },
  {
    title: "Verify your number",
    body: "Enter your phone number. Synced texts you a 6-digit code.",
  },
  {
    title: "Add your name",
    body: "First time only, so your AI agent knows what to call you.",
  },
  {
    title: "Connect Gmail",
    body: "Add more Signals like Outlook, Slack, or Teams anytime from Settings.",
  },
  {
    title: "Check Messages, Decide, and Tasks",
    body: "Messages is your inbox. Decide holds approvals. Tasks tracks what's delegated to you.",
  },
];

const mobileSteps = [
  {
    title: "Install Synced",
    body: "iOS today, with Android on the way.",
  },
  {
    title: "Verify your number",
    body: "Same sign-in as web. Enter your number, then the code Synced texts you.",
  },
  {
    title: "Add your name",
    body: "First time only, so your AI agent knows what to call you.",
  },
  {
    title: "Connect Gmail",
    body: "Required to finish setup. Add Outlook, Slack, or Teams whenever you're ready.",
  },
  {
    title: "Open Home",
    body: "Home is your conversation list. Tasks holds what's delegated to you. Answer is Decide, built for on the go.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />

      <Header />

      <main className="flex flex-col flex-1 relative z-2">
        {/* Intro */}
        <section className="learn-hero-section">
          <div className="container">
            <span className="eyebrow">Get started</span>
            <h1 className="learn-title">Set up Synced in under 5 minutes.</h1>
            <p className="learn-sub">
              Sign in, connect Gmail, and start reviewing what Synced already handled for you.
              Pick your platform below.
            </p>
            <div className="loop-strip">
              {coreLoop.map(({ icon: Icon, label }, i) => (
                <div key={label} className="loop-pill">
                  <Icon size={16} />
                  <span>{label}</span>
                  {i < coreLoop.length - 1 ? <PiArrowRightDuotone size={13} className="loop-arrow" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting started */}
        <section className="start-section">
          <div className="container">
            <div className="platform-grid">
              {/* Web */}
              <div className="platform-card">
                <div className="platform-card-head">
                  <div className="platform-icon-wrap">
                    <PiDesktopDuotone size={24} />
                  </div>
                  <div>
                    <h2 className="platform-name">Web</h2>
                    <p className="platform-tagline">
                      <PiClockDuotone size={13} /> 3 minutes, desktop only
                    </p>
                  </div>
                </div>
                <ol className="step-list">
                  {webSteps.map((step, i) => (
                    <li key={step.title} className="step-item">
                      <span className="step-num">{i + 1}</span>
                      <div className="step-copy">
                        <div className="step-title">{step.title}</div>
                        <p className="step-body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="platform-note">
                  On a phone browser, you&apos;ll be pointed to the mobile app instead.
                </p>
              </div>

              {/* Mobile */}
              <div className="platform-card">
                <div className="platform-card-head">
                  <div className="platform-icon-wrap">
                    <PiDeviceMobileDuotone size={24} />
                  </div>
                  <div>
                    <h2 className="platform-name">Mobile</h2>
                    <p className="platform-tagline">
                      <PiClockDuotone size={13} /> 3 minutes, iOS
                    </p>
                  </div>
                </div>
                <ol className="step-list">
                  {mobileSteps.map((step, i) => (
                    <li key={step.title} className="step-item">
                      <span className="step-num">{i + 1}</span>
                      <div className="step-copy">
                        <div className="step-title">{step.title}</div>
                        <p className="step-body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="platform-note">
                  Same phone number as web. Your Signals and history carry over, no separate
                  pairing step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className="glossary-section">
          <div className="container">
            <div className="section-header">
              <div className="uppercase-label">Good to know</div>
              <h2 className="section-heading">A few terms you&apos;ll see.</h2>
            </div>
            <div className="glossary-grid">
              <div className="glossary-item">
                <PiPlugsConnectedDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">Signals</div>
                  <p className="glossary-def">The inboxes and channels you connect: Gmail, Outlook, Slack, Teams, and more.</p>
                </div>
              </div>
              <div className="glossary-item">
                <PiListChecksDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">Action Plan</div>
                  <p className="glossary-def">What Synced generates from a message: the steps it takes, or proposes taking, to get it done.</p>
                </div>
              </div>
              <div className="glossary-item">
                <PiHandTapDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">Decide</div>
                  <p className="glossary-def">Your queue of pending approvals and questions. Anything Synced needs your judgment on.</p>
                </div>
              </div>
              <div className="glossary-item">
                <PiCheckCircleDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">Tasks</div>
                  <p className="glossary-def">Human to-dos. Work a conversation delegates to you directly, tracked in one list.</p>
                </div>
              </div>
              <div className="glossary-item">
                <PiUserCircleDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">One account, every device</div>
                  <p className="glossary-def">Sign in with the same phone number on web and mobile and your Signals and history follow you.</p>
                </div>
              </div>
              <div className="glossary-item">
                <PiPhoneDuotone size={20} className="glossary-icon" />
                <div>
                  <div className="glossary-term">Phone verification</div>
                  <p className="glossary-def">Synced uses your phone number, not a password, to sign you in on either platform.</p>
                </div>
              </div>
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
        .learn-hero-section {
          padding: 9rem 0 3.5rem;
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
        .learn-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: hsl(var(--fg));
          margin-bottom: 1.1rem;
          max-width: 720px;
        }
        .learn-sub {
          font-size: clamp(1rem, 1.8vw, 1.1rem);
          line-height: 1.6;
          color: hsl(var(--muted-fg));
          max-width: 560px;
          margin-bottom: 2rem;
        }

        .loop-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.6rem;
        }
        .loop-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
          border: 1px solid hsl(var(--border) / .8);
          border-radius: 999px;
          background: hsl(var(--card) / .7);
          font-size: 0.8rem;
          font-weight: 600;
          color: hsl(var(--fg));
        }
        .loop-pill svg:first-child { color: hsl(var(--primary)); flex-shrink: 0; }
        .loop-arrow { color: hsl(var(--muted-fg)); margin-left: 0.3rem; flex-shrink: 0; }

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
          margin-bottom: 0.65rem;
          color: hsl(var(--fg));
        }
        .section-sub {
          font-size: 0.98rem;
          color: hsl(var(--muted-fg));
          max-width: 480px;
          line-height: 1.65;
        }

        .start-section {
          padding: 1rem 0 6rem;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .platform-card {
          position: relative;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 22px;
          padding: clamp(1.5rem, 3vw, 2.25rem);
        }
        .platform-card-head {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid hsl(var(--border) / .7);
        }
        .platform-icon-wrap {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--primary) / .1);
          border-radius: 12px;
          color: hsl(var(--primary));
        }
        .platform-name {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: hsl(var(--fg));
          line-height: 1.2;
        }
        .platform-tagline {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: hsl(var(--primary));
          margin-top: 0.25rem;
        }

        .step-list {
          list-style: none;
          margin: 0 0 1.5rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .step-item {
          display: flex;
          gap: 0.9rem;
        }
        .step-num {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: hsl(var(--primary) / .1);
          color: hsl(var(--primary));
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.25rem;
        }
        .step-body {
          font-size: 0.85rem;
          line-height: 1.58;
          color: hsl(var(--muted-fg));
        }
        .platform-note {
          font-size: 0.8rem;
          line-height: 1.55;
          color: hsl(var(--muted-fg));
          opacity: 0.85;
          padding-top: 1.25rem;
          border-top: 1px solid hsl(var(--border) / .7);
        }

        .glossary-section {
          padding: 5rem 0;
          border-top: 1px solid hsl(var(--border) / .7);
        }
        .glossary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem 2.5rem;
        }
        .glossary-item {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
        }
        .glossary-icon {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .glossary-term {
          font-size: 0.9rem;
          font-weight: 700;
          color: hsl(var(--fg));
          margin-bottom: 0.3rem;
        }
        .glossary-def {
          font-size: 0.83rem;
          line-height: 1.55;
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
          .platform-grid { grid-template-columns: 1fr; }
          .glossary-grid { grid-template-columns: 1fr 1fr; }
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
        }
        @media (max-width: 640px) {
          .learn-hero-section { padding: 8.5rem 0 2.5rem; }
          .loop-strip { gap: 0.5rem; }
          .loop-pill { font-size: 0.76rem; padding: 0.45rem 0.75rem; }
          .start-section { padding: 0.5rem 0 4rem; }
          .glossary-section { padding: 3.5rem 0; }
          .glossary-grid { grid-template-columns: 1fr; gap: 1.5rem; }
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
