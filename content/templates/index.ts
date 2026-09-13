import type { Page } from "../types";
import { followUpNoResponse } from "./follow-up-after-no-response";
import { followUpAfterMeeting } from "./follow-up-after-meeting";
import { meetingRequest } from "./meeting-request";
import { rescheduleMeeting } from "./reschedule-meeting";
import { declineMeetingInvitation } from "./decline-meeting-invitation";
import { politeDecline } from "./polite-decline";
import { introductionEmail } from "./introduction-email";
import { outOfOfficeMessage } from "./out-of-office-message";
import { delegationEmail } from "./delegation-email";
import { projectStatusUpdate } from "./project-status-update";
import { paymentReminder } from "./payment-reminder";
import { thankYouAfterInterview } from "./thank-you-after-interview";
import { projectKickoffEmail } from "./project-kickoff-email";
import { apologyForLateReply } from "./apology-for-late-reply";
import { sharingYourAvailability } from "./sharing-your-availability";
import { deadlineExtensionRequest } from "./deadline-extension-request";

const hub: Page = {
  slug: "/templates",
  cluster: "template",
  title: "Email Templates for Work: Follow-ups, Meetings, Replies | Synced",
  h1: "Email templates.",
  navLabel: "Templates",
  description:
    "Free, copyable email templates for everyday work: follow-ups, meeting requests, reschedules, polite declines, introductions, and status updates.",
  eyebrow: "Resources",
  intro: "Short, copyable templates for the emails you write every week. Each one has a variant and notes on when not to use it.",
  primaryIntent: "work email templates",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "envelope",
  body: [{ type: "index", clusters: ["template"] }],
};

export const pages: Page[] = [
  hub,
  followUpNoResponse,
  followUpAfterMeeting,
  meetingRequest,
  rescheduleMeeting,
  sharingYourAvailability,
  declineMeetingInvitation,
  politeDecline,
  introductionEmail,
  outOfOfficeMessage,
  delegationEmail,
  projectKickoffEmail,
  projectStatusUpdate,
  deadlineExtensionRequest,
  apologyForLateReply,
  paymentReminder,
  thankYouAfterInterview,
];
