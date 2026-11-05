import { PiCheckBold } from "react-icons/pi";
import { Button } from "./Button";
import { SALES_URL, WAITLIST_URL } from "./links";
import "./pricing.css";

export const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/user",
    note: "Try Synced on your main inbox.",
    featured: false,
    features: [
      "20 Action Plans a week",
      "Unlimited Inboxes, 4 accounts each",
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
    note: "$24.99/user/month billed annually.",
    featured: true,
    features: [
      "100 Action Plans a week",
      "Unlimited Inboxes, 4 accounts each",
      "All integrations, including Outlook, Slack and Teams",
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
    note: "For assistant teams and whole firms.",
    featured: false,
    features: [
      "Custom Action Plan limits",
      "SSO and admin controls",
      "Security review and custom contract",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    href: SALES_URL,
  },
];

/** The three plan cards, shared by the homepage and /pricing. */
export function PricingCards() {
  return (
    <div className="plan-grid">
      {PLANS.map((p) => (
        <div key={p.name} className={`plan-card${p.featured ? " is-featured" : ""}`}>
          {p.featured ? <span className="plan-badge">Most popular</span> : null}
          <div className="plan-name">{p.name}</div>
          <div className="plan-price">
            <span className={`plan-amount${p.period ? "" : " sm"}`}>{p.price}</span>
            {p.period ? <span className="plan-period">{p.period}</span> : null}
          </div>
          <p className="plan-note">{p.note}</p>
          <ul className="plan-features">
            {p.features.map((f) => (
              <li key={f}><PiCheckBold size={13} />{f}</li>
            ))}
          </ul>
          <Button href={p.href} variant={p.featured ? "primary" : "secondary"} block>{p.cta}</Button>
        </div>
      ))}
    </div>
  );
}
