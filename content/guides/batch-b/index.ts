import type { Page } from "../../types";
import { gmailOauthScopesExplained } from "./gmail-oauth-scopes-explained";
import { isItSafeAiEmailAccess } from "./is-it-safe-to-give-ai-access-to-your-email";
import { evaluateAiEmailAssistant } from "./how-to-evaluate-an-ai-email-assistant";
import { manageWhatsappBusinessMessages } from "./how-to-manage-whatsapp-business-messages";
import { manageInstagramBusinessDms } from "./how-to-manage-instagram-business-dms";
import { catchUpEmailAfterVacation } from "./how-to-catch-up-on-email-after-vacation";
import { batchProcessEmail } from "./how-to-batch-process-email";
import { organizeGmailLabelsFilters } from "./how-to-organize-gmail-with-labels-and-filters";
import { setUpRulesInOutlook } from "./how-to-set-up-rules-in-outlook";
import { findOldEmailAttachment } from "./how-to-find-an-old-email-attachment";

export const pages: Page[] = [
  gmailOauthScopesExplained,
  isItSafeAiEmailAccess,
  evaluateAiEmailAssistant,
  manageWhatsappBusinessMessages,
  manageInstagramBusinessDms,
  catchUpEmailAfterVacation,
  batchProcessEmail,
  organizeGmailLabelsFilters,
  setUpRulesInOutlook,
  findOldEmailAttachment,
];
