import { Threads } from "./lazy-bits";
import { Button } from "./Button";
import { BASE, WAITLIST_URL } from "./links";

/** Closing call to action shared by every page. */
export function CtaSection({
  title = "Try it on tomorrow's inbox.",
  sub = "Free plan. No credit card.",
  secondary = { label: "Meet the founders", href: `${BASE}/team` },
}: {
  title?: string;
  sub?: string;
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="cta-block">
      <div className="cta-block-bg" aria-hidden="true">
        <Threads color={[0.27, 0.16, 0.95]} amplitude={1.2} distance={0.3} lineCount={60} thickness={0.5} speed={0.35} brightness={1.1} opacity={0.55} />
      </div>
      <div className="container">
        <h2 className="cta-block-title">{title}</h2>
        {sub ? <p className="cta-block-sub">{sub}</p> : null}
        <div className="cta-block-actions">
          <Button href={WAITLIST_URL} size="lg" arrow>Get Early Access</Button>
          {secondary ? <Button href={secondary.href} variant="secondary" size="lg">{secondary.label}</Button> : null}
        </div>
      </div>
    </section>
  );
}
