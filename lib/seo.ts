/**
 * SEO / GEO helpers for the i18n site.
 *
 * - buildAlternates: per-locale canonical + reciprocal hreflang map (with
 *   x-default), restricted to the locales that actually have a page. This is
 *   the GEO contract: every hreflang/canonical points only to a URL that
 *   exists, so answer-engines never index a 404 alternate.
 * - entityGraph: the shared WebSite + Organization + Person @graph. The @id's
 *   are stable across locales (#website / #org / #nathan) so assistants can
 *   merge the entity; only inLanguage varies per locale.
 * - jsonLd: serialize + XSS-scrub for safe inline <script> injection.
 */

import {
  type Locale,
  DEFAULT_LOCALE,
  HREFLANG,
  LOCALES,
} from "@/content/config";

export const SITE_URL = "https://nathanrenting.dev";

/** Build the absolute, locale-prefixed URL for a path. */
export function localizedUrl(locale: Locale, path = ""): string {
  // path is "" for the locale root, or "/about", "/projects/echo", ...
  const clean = path === "/" ? "" : path;
  return `${SITE_URL}/${locale}${clean}`;
}

export type Alternates = {
  canonical: string;
  languages: Record<string, string>;
};

/**
 * @param path        route path WITHOUT locale prefix, e.g. "" (root), "/about",
 *                    "/projects/echo".
 * @param currentLocale  the locale of the page these alternates belong to.
 * @param availableLocales  which locales actually have this page (defaults to
 *                    all four). hreflang + x-default are emitted ONLY for these.
 */
export function buildAlternates(
  path: string,
  currentLocale: Locale,
  availableLocales: readonly Locale[] = LOCALES,
): Alternates {
  const languages: Record<string, string> = {};
  for (const locale of availableLocales) {
    languages[HREFLANG[locale]] = localizedUrl(locale, path);
  }

  // x-default points at the default locale if it exists for this page,
  // otherwise the first available locale — never a non-existent URL.
  const xDefaultLocale = availableLocales.includes(DEFAULT_LOCALE)
    ? DEFAULT_LOCALE
    : availableLocales[0];
  if (xDefaultLocale) {
    languages["x-default"] = localizedUrl(xDefaultLocale, path);
  }

  return {
    canonical: localizedUrl(currentLocale, path),
    languages,
  };
}

const SAME_AS = [
  "https://www.linkedin.com/in/nathanrenting/",
  "https://github.com/NR-tainment",
  "https://www.malt.nl/profile/jdrenting",
  "https://audiolab.tools",
] as const;

/**
 * Shared identity @graph (WebSite + Organization + Person). Stable @id's across
 * locales; inLanguage varies per locale so answer-engines see the right
 * language for the active page while still merging the entity.
 */
export function entityGraph(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "nathanrenting.dev",
        alternateName: "Nathan Renting",
        inLanguage: HREFLANG[locale],
        publisher: { "@id": `${SITE_URL}/#org` },
        about: { "@id": `${SITE_URL}/#nathan` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "NathanRenting.Dev",
        url: SITE_URL,
        logo: `${SITE_URL}/nathan-portret.png`,
        email: "info@nathanrenting.dev",
        founder: { "@id": `${SITE_URL}/#nathan` },
        sameAs: SAME_AS,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant",
          addressCountry: "NL",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#nathan`,
        name: "Nathan Renting",
        alternateName: ["Jonathan David Renting", "Jd Renting"],
        givenName: "Jonathan David",
        familyName: "Renting",
        description:
          "Solo developer from Eindhoven, Netherlands. Builds AI agent systems (LLM orchestration, tool-calling, RAG) and real-time audio engines.",
        jobTitle: [
          "Solo AI Engineer",
          "Audio/DSP Engineer",
          "Software Developer",
        ],
        url: SITE_URL,
        image: `${SITE_URL}/nathan-portret.png`,
        email: "info@nathanrenting.dev",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant",
          addressCountry: "NL",
        },
        knowsAbout: [
          "AI Agents",
          "Large Language Models",
          "LLM orchestration",
          "Python",
          "FastAPI",
          "RAG (Retrieval-Augmented Generation)",
          "Tool-calling",
          "LangChain",
          "LangGraph",
          "Claude API",
          "Anthropic",
          "MCP (Model Context Protocol)",
          "Real-time audio",
          "Digital Signal Processing (DSP)",
          "Rust",
          "Kotlin",
          "Android NDK",
          "Next.js",
          "TypeScript",
          "React Native",
        ],
        sameAs: SAME_AS,
        worksFor: { "@id": `${SITE_URL}/#org` },
      },
    ],
  };
}

/**
 * Serialize a JSON-LD object for safe inline injection. The `<` scrub prevents
 * a `</script>` (or any tag) inside string values from breaking out of the
 * script element — the standard XSS guard for dangerouslySetInnerHTML JSON-LD.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
