import type { Page } from "../types";
import { actionPlan } from "./action-plan";
import { agenticEmail } from "./agentic-email";
import { aiAgent } from "./ai-agent";
import { aiInboxAssistant } from "./ai-inbox-assistant";
import { calendarCoordination } from "./calendar-coordination";
import { decideQueue } from "./decide-queue";
import { emailDelegation } from "./email-delegation";
import { emailSummarization } from "./email-summarization";
import { emailThread } from "./email-thread";
import { emailToTask } from "./email-to-task";
import { emailTriage } from "./email-triage";
import { encryptionAtRest } from "./encryption-at-rest";
import { followUpTracking } from "./follow-up-tracking";
import { googleLimitedUsePolicy } from "./google-limited-use-policy";
import { humanInTheLoopApproval } from "./human-in-the-loop-approval";
import { inboxConnector } from "./inbox-connector";
import { inboxZero } from "./inbox-zero";
import { largeLanguageModel } from "./large-language-model";
import { naturalLanguageSearch } from "./natural-language-search";
import { oauthScopes } from "./oauth-scopes";
import { outputIntegration } from "./output-integration";
import { promptInjection } from "./prompt-injection";
import { retrievalAugmentedGeneration } from "./retrieval-augmented-generation";
import { scheduledSend } from "./scheduled-send";
import { sharedInbox } from "./shared-inbox";
import { smartReply } from "./smart-reply";
import { undoSend } from "./undo-send";
import { unifiedInbox } from "./unified-inbox";

const hub: Page = {
  slug: "/glossary",
  cluster: "glossary",
  title: "AI Inbox and Email Assistant Glossary | Synced",
  h1: "Glossary.",
  navLabel: "Glossary",
  description:
    "Plain-English definitions for AI email and inbox terms: Action Plans, email triage, human-in-the-loop approval, OAuth scopes, Limited Use, and more.",
  eyebrow: "Resources",
  intro: "Short, plain definitions of the terms that come up when an AI works in your inbox. Some are Synced's own; most are industry terms.",
  primaryIntent: "ai email assistant glossary terms",
  published: "2026-09-13",
  updated: "2026-09-13",
  schema: "CollectionPage",
  icon: "book",
  body: [{ type: "index", clusters: ["glossary"], group: "letter" }],
};

export const pages: Page[] = [
  hub,
  actionPlan,
  agenticEmail,
  aiAgent,
  aiInboxAssistant,
  calendarCoordination,
  decideQueue,
  emailDelegation,
  emailSummarization,
  emailThread,
  emailToTask,
  emailTriage,
  encryptionAtRest,
  followUpTracking,
  googleLimitedUsePolicy,
  humanInTheLoopApproval,
  inboxConnector,
  inboxZero,
  largeLanguageModel,
  naturalLanguageSearch,
  oauthScopes,
  outputIntegration,
  promptInjection,
  retrievalAugmentedGeneration,
  scheduledSend,
  sharedInbox,
  smartReply,
  undoSend,
  unifiedInbox,
];
