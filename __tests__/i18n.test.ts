import { describe, expect, it } from "vitest";
import { t } from "@/lib/i18n";
import { zhTW } from "@/lib/i18n/zh-TW";
import { common } from "@/lib/i18n/zh-TW/common";
import { auth } from "@/lib/i18n/zh-TW/auth";
import { campaigns } from "@/lib/i18n/zh-TW/campaigns";
import { campaignPages } from "@/lib/i18n/zh-TW/campaign-pages";
import { settings } from "@/lib/i18n/zh-TW/settings";
import { inboxLogs } from "@/lib/i18n/zh-TW/inbox-logs";
import { overview } from "@/lib/i18n/zh-TW/overview";

const FILES: Array<[string, Record<string, string>]> = [
  ["common", common],
  ["auth", auth],
  ["campaigns", campaigns],
  ["campaign-pages", campaignPages],
  ["settings", settings],
  ["inbox-logs", inboxLogs],
  ["overview", overview],
];

describe("t()", () => {
  it("falls back to the English source when a string is untranslated", () => {
    expect(t("__not_in_dictionary__")).toBe("__not_in_dictionary__");
  });

  it("interpolates {vars} in both translated and fallback strings", () => {
    expect(t("{count} left", { count: 2 })).toMatch(/2/);
    expect(t("{a}-{b}", { a: "x", b: 1 })).toBe("x-1");
  });

  it("leaves unknown placeholders untouched", () => {
    expect(t("{a}-{b}", { a: "x" })).toBe("x-{b}");
  });

  it("dictionary never contains the em dash the project bans in copy", () => {
    const offenders = Object.entries(zhTW).filter(([, v]) => v.includes("——"));
    expect(offenders).toEqual([]);
  });

  // The dictionary files are merged by spreading them in a fixed order, so a
  // key defined twice silently resolves to whichever file spreads last. Same
  // key, same translation is harmless; same key, different translations means
  // one screen is quietly showing the other screen's wording.
  it("no key is translated two different ways across dictionary files", () => {
    const seen = new Map<string, { file: string; value: string }>();
    const conflicts: string[] = [];
    for (const [file, dict] of FILES) {
      for (const [key, value] of Object.entries(dict)) {
        const prev = seen.get(key);
        if (prev && prev.value !== value) {
          conflicts.push(
            `"${key}": ${prev.file}="${prev.value}" vs ${file}="${value}"`
          );
        } else if (!prev) {
          seen.set(key, { file, value });
        }
      }
    }
    expect(conflicts).toEqual([]);
  });

  it("dictionary values are Traditional Chinese, not Simplified", () => {
    // A handful of characters that only appear in Simplified spellings.
    const simplified = /[务应发关设账链录营时间际这们个为进对种说]/;
    const offenders = Object.entries(zhTW).filter(([, v]) => simplified.test(v));
    expect(offenders).toEqual([]);
  });
});
