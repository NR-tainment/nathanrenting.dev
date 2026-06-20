import type { MetadataRoute } from "next";
import { LOCALES, HREFLANG, type Locale } from "@/content/config";
import { localizedUrl } from "@/lib/seo";

/**
 * Localized sitemap — emits every (path × existing-locale) with a per-entry
 * hreflang alternates map, so each locale's URL is discoverable AND its
 * language alternates are declared in the sitemap as well as in <head>.
 *
 * Structured pages exist in all four locales (routing is live; untranslated
 * locales fall back to NL content). The fan-out has now produced EN/DE/FR for
 * every MDX article too, so all 12 articles are listed in all four locales with
 * reciprocal hreflang — every alternate points at a file that exists, never a
 * 404.
 */

type Entry = {
  path: string; // without locale prefix; "" = locale root
  locales: readonly Locale[];
  priority?: number;
  freq?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ALL = LOCALES;

const STRUCTURED: Entry[] = [
  { path: "", locales: ALL, priority: 1.0, freq: "weekly" },
  { path: "/hire", locales: ALL, priority: 0.95, freq: "monthly" },
  { path: "/about", locales: ALL, priority: 0.8, freq: "monthly" },
  { path: "/diensten", locales: ALL, priority: 0.85, freq: "monthly" },
  {
    path: "/diensten/ai-agents-bouwen-nederland",
    locales: ALL,
    priority: 0.8,
    freq: "monthly",
  },
  { path: "/patterns", locales: ALL, priority: 0.7, freq: "monthly" },
  { path: "/projects", locales: ALL, priority: 0.75, freq: "monthly" },
];

const PATTERN_SLUGS = [
  "agentskills-implementation",
  "cross-arch-android",
  "eu-first-infrastructure",
  "multi-brain-routing",
  "real-time-audio-rust",
  "three-tier-fallback",
];

const PROJECT_SLUGS = [
  "audiolab",
  "captioncompass",
  "echo",
  "familykart",
  "photoflow",
  "therapyvault",
];

const ARTICLES: Entry[] = [
  ...PATTERN_SLUGS.map((slug) => ({
    path: `/patterns/${slug}`,
    locales: ALL,
    priority: 0.6,
    freq: "monthly" as const,
  })),
  ...PROJECT_SLUGS.map((slug) => ({
    path: `/projects/${slug}`,
    locales: ALL,
    priority: 0.65,
    freq: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, locales, priority, freq } of [...STRUCTURED, ...ARTICLES]) {
    // hreflang map shared by every locale variant of this path.
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[HREFLANG[locale]] = localizedUrl(locale, path);
    }

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified,
        changeFrequency: freq,
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
