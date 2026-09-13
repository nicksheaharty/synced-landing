import type { Page } from "../../types";
import { getToInboxZero } from "./how-to-get-to-inbox-zero";
import { summarizeLongThreads } from "./how-to-summarize-long-email-threads";
import { scheduleMeetingsOverEmail } from "./how-to-schedule-meetings-over-email";
import { turnEmailsIntoTasks } from "./how-to-turn-emails-into-tasks";
import { searchEmailAndFiles } from "./how-to-search-email-and-files-together";
import { aiDraftEmailReplies } from "./how-to-use-ai-to-draft-email-replies";
import { delegateEmail } from "./how-to-delegate-email";
import { manageMultipleEmailAccounts } from "./how-to-manage-multiple-email-accounts";
import { stopMissingSlackMessages } from "./how-to-stop-missing-slack-messages";
import { replyToEmailsFaster } from "./how-to-reply-to-emails-faster";

export const pages: Page[] = [
  getToInboxZero,
  summarizeLongThreads,
  scheduleMeetingsOverEmail,
  turnEmailsIntoTasks,
  searchEmailAndFiles,
  aiDraftEmailReplies,
  delegateEmail,
  manageMultipleEmailAccounts,
  stopMissingSlackMessages,
  replyToEmailsFaster,
];
