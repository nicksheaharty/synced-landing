"use client";

import Image from "next/image";
import { PiLinkedinLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CtaSection } from "../components/ui/CtaSection";
import { BASE } from "../components/ui/links";
import { PageHeroBackground } from "../components/ui/PageHeroBackground";


const team = [
  {
    name: "Aum Dhruv",
    role: "Chief Executive Officer",
    bio: "Senior at Princeton (ORFE). Turned incoming messages into tasks at the SEC. Built TigerMeet.org, used across Princeton, Penn, UF, and Brandeis for 10,000+ meetings. Two internships at Amazon building AR hardware.",
    photo: `${BASE}/aum.webp`,
    linkedin: "https://www.linkedin.com/in/aumdhruv/",
    instagram: "https://www.instagram.com/aum.dhruv/",
  },
  {
    name: "Nick Harty",
    role: "Chief Technology Officer",
    bio: "Senior at Penn (Engineering & Economics at Wharton). Worked as an assistant to a Hollywood producer. Coordinated with 300+ congressional offices for the Congressional App Challenge. Shipped product inside regulated institutions. Raised $20k non-dilutive.",
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
        <section className="team-hero-section page-hero">
          <PageHeroBackground />
          <div className="container" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>The team</span>
            <h1 className="team-hero-title">Built by people who&apos;ve run someone else&apos;s inbox.</h1>
            <p className="team-hero-sub">Friends since a 6th-grade math team in Florida, building together for a decade.</p>
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
        <CtaSection secondary={null} />
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

        @media (max-width: 768px) {
          .team-hero-section { padding: 7rem 0 3rem; }
        }
        @media (max-width: 640px) {
          .team-hero-section { padding: 8.5rem 0 3rem; }
          .team-section { padding: 1.5rem 0 5rem; }

        }
      `}</style>
    </>
  );
}
