import "server-only";

import { type Locale, isLocale } from "@/content/config";
import type { CommonDict } from "@/content/common/types";
import type { HomeDict } from "@/content/home/types";
import type { AboutDict } from "@/content/about/types";
import type { DienstenDict } from "@/content/diensten/types";
import type { AiAgentsDict } from "@/content/ai-agents/types";
import type { HireDict } from "@/content/hire/types";
import type { PatternsDict } from "@/content/patterns/types";
import type { ProjectsDict } from "@/content/projects/types";

export type { Locale };

/** Type-guard re-exported under the i18n-doc-conventional name. */
export const hasLocale = (locale: string): locale is Locale =>
  isLocale(locale);

/**
 * Per-namespace, per-locale loaders. NL is the source of truth and the only
 * locale guaranteed to exist for every namespace today. EN exists for `home`
 * (seeded from the retired /en summary) and `common` (chrome). DE/FR — and the
 * rest of EN — are produced in the fan-out.
 *
 * Until a localized file exists, we fall back to NL so the route still renders
 * (NL content) rather than 404-ing. This keeps the four-locale routing,
 * hreflang and sitemap infrastructure live while translation is pending; the
 * page's <html lang>, canonical and hreflang remain correct per locale.
 */
const loaders = {
  common: {
    nl: () => import("@/content/common/nl").then((m) => m.default),
    en: () => import("@/content/common/en").then((m) => m.default),
  },
  home: {
    nl: () => import("@/content/home/nl").then((m) => m.default),
    en: () => import("@/content/home/en").then((m) => m.default),
  },
  about: {
    nl: () => import("@/content/about/nl").then((m) => m.default),
  },
  diensten: {
    nl: () => import("@/content/diensten/nl").then((m) => m.default),
  },
  aiAgents: {
    nl: () => import("@/content/ai-agents/nl").then((m) => m.default),
  },
  hire: {
    nl: () => import("@/content/hire/nl").then((m) => m.default),
  },
  patterns: {
    nl: () => import("@/content/patterns/nl").then((m) => m.default),
  },
  projects: {
    nl: () => import("@/content/projects/nl").then((m) => m.default),
  },
} as const;

type Namespace = keyof typeof loaders;

type NamespaceType = {
  common: CommonDict;
  home: HomeDict;
  about: AboutDict;
  diensten: DienstenDict;
  aiAgents: AiAgentsDict;
  hire: HireDict;
  patterns: PatternsDict;
  projects: ProjectsDict;
};

async function load<N extends Namespace>(
  ns: N,
  locale: Locale,
): Promise<NamespaceType[N]> {
  const nsLoaders = loaders[ns] as Partial<
    Record<Locale, () => Promise<NamespaceType[N]>>
  >;
  const loader = nsLoaders[locale] ?? nsLoaders.nl!;
  return loader();
}

/**
 * Single-namespace dictionary fetch. Usage in a server component/page/layout:
 *   const dict = await getDictionary(lang, "home");
 */
export function getDictionary<N extends Namespace>(
  locale: Locale,
  ns: N,
): Promise<NamespaceType[N]> {
  return load(ns, locale);
}
