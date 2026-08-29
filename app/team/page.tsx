"use client";

import Image from "next/image";
import { PiArrowRightDuotone, PiLinkedinLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const team = [
  {
    name: "Aum Dhruv",
    role: "Chief Executive Officer",
    bio: "ORFE at Princeton. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware. Worked at the SEC.",
    photo: `${BASE}/aum.webp`,
    linkedin: "https://www.linkedin.com/in/aumdhruv/",
    instagram: "https://www.instagram.com/aum.dhruv/",
  },
  {
    name: "Nick Harty",
    role: "Chief Technology Officer",
    bio: "Engineering & Economics at Wharton. Shipped product inside regulated institutions. Raised $20k non-dilutive. Coordinated 400 congressional offices for the Congressional App Challenge.",
    photo: `${BASE}/nick.webp`,
    linkedin: "https://www.linkedin.com/in/nicksheaharty/",
    instagram: "https://www.instagram.com/nicksheaharty/",
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="bg-container" aria-hidden="true" />

      <Header />

      <main className="flex flex-col flex-1 relative z-2">
        {/* Hero */}
        <section className="team-hero-section">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>The team</span>
            <h1 className="team-hero-title">Built by people who know the pain of inbox overload.</h1>
            <p className="team-hero-sub">Building together since middle school.</p>
          </div>
        </section>

        {/* Team */}
        <section className="team-section">
          <div className="container">
            <div className="team-grid">
              {team.map(({ name, role, bio, photo, linkedin, instagram }) => (
                <div key={name} className="team-card">
                  <div className="team-card-top">
                    <Image src={photo} alt={name} width={52} height={52} sizes="52px" className="team-photo" />
                    <div className="team-info">
                      <div className="team-name">{name}</div>
                      <div className="team-role">{role}</div>
                    </div>
                    <div className="team-social-links">
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label={`${name} on LinkedIn`}>
                        <PiLinkedinLogoDuotone size={22} />
                      </a>
                      <a href={instagram} target="_blank" rel="noopener noreferrer" className="team-social-btn" aria-label={`${name} on Instagram`}>
                        <PiInstagramLogoDuotone size={22} />
                      </a>
                    </div>
                  </div>
                  <p className="team-bio">{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-copy-block">
                <div className="uppercase-label">Get started</div>
                <h2 className="cta-title">
                  Make your inbox<br />work for you.
                </h2>
                <p className="cta-sub">Join thousands ready to reclaim their time. Synced handles the busywork, you focus on what matters.</p>
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
        main, nav, footer { position: relative; z-index: 2; }

        /* ── Hero ── */
        .eyebrow {
          padding: 0;
          margin-bottom: 1.35rem;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          letter-spacing: .08em;
        }
        .team-hero-section {
          padding: 10rem 0 4rem;
        }
        .team-hero-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0 auto 0.9rem;
          max-width: 760px;
        }
        .team-hero-sub {
          font-size: 1.05rem;
          color: hsl(var(--muted-fg));
          max-width: 460px;
          line-height: 1.6;
          margin-inline: auto;
        }

        /* ── Team ── */
        .team-section {
          padding: 2rem 0 8rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          border-top: 1px solid hsl(var(--border));
          border-bottom: 1px solid hsl(var(--border));
        }
        @media (max-width: 520px) {
          .team-grid { grid-template-columns: 1fr; }
        }
        .team-card {
          padding: 2rem 2rem 2rem 0;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .team-card + .team-card {
          padding-left: 2rem;
          border-left: 1px solid hsl(var(--border));
        }
        @media (max-width: 520px) {
          .team-card { padding: 1.5rem 0; }
          .team-card + .team-card { padding-left: 0; border-left: 0; border-top: 1px solid hsl(var(--border)); }
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .team-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 0;
          flex-shrink: 0;
          cursor: url('${BASE}/icon-cursor.png') 16 16, pointer;
        }
        .team-info {
          flex: 1;
          min-width: 0;
        }
        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: hsl(var(--fg));
          line-height: 1.2;
        }
        .team-role {
          font-size: 0.78rem;
          font-weight: 500;
          color: hsl(var(--muted-fg));
          margin-top: 0.15rem;
        }
        .team-social-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          margin-left: auto;
        }
        .team-social-btn {
          color: hsl(var(--primary));
          opacity: 0.7;
          min-width: 36px;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background-color .18s ease, opacity .18s ease, transform 80ms ease;
        }
        .team-social-btn:hover { opacity: 1; background: hsl(var(--primary) / .08); }
        .team-social-btn:active { transform: scale(.92); }
        .team-bio {
          font-size: 0.82rem;
          line-height: 1.6;
          color: hsl(var(--muted-fg));
        }

        /* ── CTA (matches homepage) ── */
        .uppercase-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          margin-bottom: 0.75rem;
        }
        .cta-section { padding: 4rem 0 8rem; border-top: 0; }
        .cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: clamp(2rem, 7vw, 6rem);
          text-align: left;
          padding: clamp(2.5rem, 5vw, 4rem);
          border: 1px solid hsl(var(--border) / .7);
          border-radius: 32px;
          background:
            radial-gradient(circle at 92% 15%, hsl(var(--primary) / .09), transparent 34%),
            hsl(var(--card) / .78);
          box-shadow: 0 24px 70px rgba(35, 27, 72, .06), inset 0 1px 0 hsl(var(--card));
        }
        .cta-copy-block { min-width: 0; }
        .cta-copy-block .uppercase-label { margin-bottom: .8rem; }
        .cta-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(2.25rem, 4.5vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: hsl(var(--fg));
          margin: 0;
        }
        .cta-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          max-width: 520px;
          line-height: 1.65;
          margin-top: 1rem;
        }
        .cta-inner > .btn-primary { min-width: 190px; justify-content: center; flex-shrink: 0; }

        @media (max-width: 900px) {
          .cta-inner { grid-template-columns: 1fr; justify-items: start; }
        }
        @media (max-width: 768px) {
          .team-hero-section { padding: 7rem 0 3rem; }
        }
        @media (max-width: 640px) {
          .team-hero-section { padding: 8.5rem 0 3rem; }
          .team-section { padding: 1.5rem 0 5rem; }
          .cta-section { padding: 2rem 0 4rem; }
          .cta-section > .container { padding-inline: 1.5rem; }
          .cta-inner {
            gap: 1.4rem;
            border-radius: 22px;
            padding: 1.75rem 1.25rem 1.25rem;
            background:
              radial-gradient(circle at 100% 0%, hsl(var(--primary) / .075), transparent 42%),
              hsl(var(--card) / .82);
          }
          .cta-copy-block .uppercase-label { margin-bottom: .55rem; font-size: .66rem; }
          .cta-title { font-size: clamp(1.9rem, 10vw, 2.45rem); line-height: 1.03; letter-spacing: -.035em; }
          .cta-sub { margin-top: .75rem; font-size: .92rem; line-height: 1.5; }
          .cta-inner > .btn-primary { width: 100%; min-width: 0; }
        }
      `}</style>
    </>
  );
}
