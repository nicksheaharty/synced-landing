import type { Page } from "../types";
import { signInWithYourPhoneNumber } from "./sign-in-with-your-phone-number";
import { didntGetAVerificationCode } from "./didnt-get-a-verification-code";
import { connectAnInbox } from "./connect-an-inbox";
import { connectAnOutputIntegration } from "./connect-an-output-integration";
import { disconnectAnIntegration } from "./disconnect-an-integration";
import { revokeGoogleAccess } from "./revoke-google-access";
import { approveOrEditADraft } from "./approve-or-edit-a-draft";
import { undoASentMessage } from "./undo-a-sent-message";
import { scheduleAMessage } from "./schedule-a-message";
import { delegateATask } from "./delegate-a-task";
import { weeklyLimitReached } from "./weekly-limit-reached";
import { useSyncedOnWebAndMobile } from "./use-synced-on-web-and-mobile";
import { deleteYourAccount } from "./delete-your-account";
import { supportedBrowsersAndDevices } from "./supported-browsers-and-devices";
import { notificationSettings } from "./notification-settings";
import { filterYourConversations } from "./filter-your-conversations";
import { starSnoozeAndArchive } from "./star-snooze-and-archive";
import { betaLimitations } from "./beta-limitations";

const hub: Page = {
  slug: "/help",
  cluster: "help",
  title: "Synced Help Center | Synced",
  h1: "Help center.",
  navLabel: "Help",
  description:
    "Step-by-step help for Synced: signing in with your phone number, connecting Inboxes, approving drafts in Decide, plan limits, and deleting your account.",
  eyebrow: "Help",
  intro: "Short answers for specific tasks. For first-time setup, start with the [get started guide](/get-started).",
  primaryIntent: "synced help support",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "question",
  body: [{ type: "index", clusters: ["help"] }],
};

export const pages: Page[] = [
  hub,
  signInWithYourPhoneNumber,
  didntGetAVerificationCode,
  connectAnInbox,
  connectAnOutputIntegration,
  disconnectAnIntegration,
  revokeGoogleAccess,
  approveOrEditADraft,
  undoASentMessage,
  scheduleAMessage,
  delegateATask,
  weeklyLimitReached,
  useSyncedOnWebAndMobile,
  deleteYourAccount,
  supportedBrowsersAndDevices,
  notificationSettings,
  filterYourConversations,
  starSnoozeAndArchive,
  betaLimitations,
];
