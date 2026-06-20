/**
 * i18n configuration — single source of truth for locale routing + SEO.
 *
 * Architecture (Option A): one `app/[lang]` dynamic segment, PREFIXED default.
 * Every public URL carries a locale prefix: /nl, /en, /de, /fr.
 * Source language = NL (the live Dutch site). EN/DE/FR content is translated
 * in a later fan-out; this file already declares all four so the routing,
 * hreflang and sitemap infrastructure is locale-complete from day one.
 */

export const LOCALES = ["nl", "en", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "nl";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * hreflang attribute values emitted in <link rel="alternate" hreflang="...">
 * and in JSON-LD `inLanguage`. NL is region-qualified (nl-NL) because the
 * audience is specifically the Dutch market; the others stay language-only.
 */
export const HREFLANG: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en",
  de: "de",
  fr: "fr",
};

/** Open Graph `og:locale` values (underscore form, region-qualified). */
export const OG_LOCALE: Record<Locale, string> = {
  nl: "nl_NL",
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
};

/** Human-readable label for the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  de: "DE",
  fr: "FR",
};
