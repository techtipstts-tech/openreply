import { zhTW } from "./zh-TW";

/**
 * Tiny UI dictionary. No library, no routing, no cookies.
 *
 * The source string in the component stays English and doubles as the lookup
 * key, so upstream diffs remain readable and any string we have not translated
 * yet simply renders in English instead of breaking. Set NEXT_PUBLIC_LOCALE=en
 * to get the original interface back.
 *
 *   t("Go Live")                           -> "上線"
 *   t("{count} campaigns", { count: 3 })   -> "3 條自動回覆"
 */
const dictionaries: Record<string, Record<string, string>> = {
  "zh-TW": zhTW,
};

export const locale: string = process.env.NEXT_PUBLIC_LOCALE || "zh-TW";

type Vars = Record<string, string | number>;

export function t(text: string, vars?: Vars): string {
  const translated =
    locale === "en" ? text : (dictionaries[locale]?.[text] ?? text);
  if (!vars) return translated;
  return translated.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match
  );
}

/** BCP 47 tag for <html lang>. */
export const htmlLang = locale === "en" ? "en" : "zh-Hant-TW";
