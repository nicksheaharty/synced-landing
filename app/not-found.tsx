const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";

export default function NotFound() {
  return (
    <>
      <div className="bg-container">
        <div className="bg-grid-base" />
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      <main className="nf-main">
        <a href={`${BASE}/`} className="nf-logo" aria-label="Synced home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/icon-light.png`} alt="" width={28} height={28} style={{ borderRadius: 6 }} />
          <span className="nf-brand">Synced</span>
        </a>

        <div className="nf-body">
          <span className="nf-code">404</span>
          <h1 className="nf-title">Page not found</h1>
          <p className="nf-sub">This page doesn&apos;t exist, or it moved.</p>
          <div className="nf-actions">
            <a href={`${BASE}/`} className="btn-primary">Go home</a>
            <a href={WAITLIST_URL} className="btn-ghost">Get Early Access</a>
          </div>
        </div>
      </main>

      <style>{`
        .nf-main {
          position: relative;
          z-index: 2;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          padding: 2rem;
          text-align: center;
        }

        .nf-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          position: absolute;
          top: 1.5rem;
          left: 2rem;
        }

        .nf-brand {
          font-family: "p22-mackinac-pro", serif;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: hsl(var(--fg));
        }

        .nf-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .nf-code {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(5rem, 18vw, 9rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: hsl(var(--primary) / 0.15);
          user-select: none;
        }

        .nf-title {
          font-family: "p22-mackinac-pro", serif;
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: hsl(var(--fg));
          margin: 0;
        }

        .nf-sub {
          font-size: 1rem;
          color: hsl(var(--muted-fg));
          margin: 0;
        }

        .nf-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
