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
 * Per-namespace, per-locale loaders. NL is the source of truth; the fan-out has
 * now produced EN/DE/FR for every namespace, so all four locales are registered
 * here and getDictionary returns the real locale rather than the NL fallback.
 *
 * The NL fallback in `load` is retained as a safety net: if a locale loader is
 * ever absent for a namespace, the route still renders (NL content) rather than
 * 404-ing, keeping the four-locale routing, hreflang and sitemap infrastructure
 * live. The page's <html lang>, canonical and hreflang remain correct per
 * locale regardless.
 */
const loaders = {
  common: {
    nl: () => import("@/content/common/nl").then((m) => m.default),
    en: () => import("@/content/common/en").then((m) => m.default),
    de: () => import("@/content/common/de").then((m) => m.default),
    fr: () => import("@/content/common/fr").then((m) => m.default),
  },
  home: {
    nl: () => import("@/content/home/nl").then((m) => m.default),
    en: () => import("@/content/home/en").then((m) => m.default),
    de: () => import("@/content/home/de").then((m) => m.default),
    fr: () => import("@/content/home/fr").then((m) => m.default),
  },
  about: {
    nl: () => import("@/content/about/nl").then((m) => m.default),
    en: () => import("@/content/about/en").then((m) => m.default),
    de: () => import("@/content/about/de").then((m) => m.default),
    fr: () => import("@/content/about/fr").then((m) => m.default),
  },
  diensten: {
    nl: () => import("@/content/diensten/nl").then((m) => m.default),
    en: () => import("@/content/diensten/en").then((m) => m.default),
    de: () => import("@/content/diensten/de").then((m) => m.default),
    fr: () => import("@/content/diensten/fr").then((m) => m.default),
  },
  aiAgents: {
    nl: () => import("@/content/ai-agents/nl").then((m) => m.default),
    en: () => import("@/content/ai-agents/en").then((m) => m.default),
    de: () => import("@/content/ai-agents/de").then((m) => m.default),
    fr: () => import("@/content/ai-agents/fr").then((m) => m.default),
  },
  hire: {
    nl: () => import("@/content/hire/nl").then((m) => m.default),
    en: () => import("@/content/hire/en").then((m) => m.default),
    de: () => import("@/content/hire/de").then((m) => m.default),
    fr: () => import("@/content/hire/fr").then((m) => m.default),
  },
  patterns: {
    nl: () => import("@/content/patterns/nl").then((m) => m.default),
    en: () => import("@/content/patterns/en").then((m) => m.default),
    de: () => import("@/content/patterns/de").then((m) => m.default),
    fr: () => import("@/content/patterns/fr").then((m) => m.default),
  },
  projects: {
    nl: () => import("@/content/projects/nl").then((m) => m.default),
    en: () => import("@/content/projects/en").then((m) => m.default),
    de: () => import("@/content/projects/de").then((m) => m.default),
    fr: () => import("@/content/projects/fr").then((m) => m.default),
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
