export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://syncedinbox.com").replace(/\/$/, "");
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const WAITLIST_URL = "https://forms.gle/g64ZQ3Wy7hhp1M6X7";
export const SALES_URL = "https://forms.gle/tP89zuGpCL1BsR6f6";
export const WEB_APP_URL = "https://mail.syncedinbox.com";
export const CONTACT_EMAIL = "contact@syncedinbox.com";

export const SITE_DESCRIPTION =
  "Synced is an AI inbox assistant that searches your email and files, drafts replies, coordinates calendars, and manages follow-ups automatically.";

export const PEOPLE = {
  aum: {
    id: `${SITE_URL}/team#aum-dhruv`,
    name: "Aum Dhruv",
    jobTitle: "Chief Executive Officer",
    url: "https://www.linkedin.com/in/aumdhruv/",
  },
  nick: {
    id: `${SITE_URL}/team#nick-harty`,
    name: "Nick Harty",
    jobTitle: "Chief Technology Officer",
    url: "https://www.linkedin.com/in/nicksheaharty/",
  },
} as const;

/** Prefix an internal path with the deploy base path. External URLs pass through. */
export function href(path: string) {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${BASE}${path}`;
}
