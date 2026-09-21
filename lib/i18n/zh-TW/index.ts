import { common } from "./common";
import { auth } from "./auth";
import { campaigns } from "./campaigns";
import { campaignPages } from "./campaign-pages";
import { settings } from "./settings";
import { inboxLogs } from "./inbox-logs";
import { overview } from "./overview";

// One file per area so parallel edits never collide. Later entries win, so
// keep a string in exactly one file.
export const zhTW: Record<string, string> = {
  ...common,
  ...auth,
  ...campaigns,
  ...campaignPages,
  ...settings,
  ...inboxLogs,
  ...overview,
};
