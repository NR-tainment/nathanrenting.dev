import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/content/config";
import { hasLocale } from "@/content/dictionaries";
import { buildAlternates } from "@/lib/seo";

/**
 * Dynamic MDX loader for /[lang]/patterns/[slug].
 *
 * MDX files can't receive route params, so each localized article is a separate
 * file (content/patterns/<slug>.<locale>.mdx). We keep an explicit per-(locale,
 * slug) import map so:
 *   - Turbopack can statically resolve every import,
 *   - generateMetadata can read each file's exported `metadata`,
 *   - missing translations fall back to the NL source (route still renders)
 *     while the page's lang/canonical/hreflang stay correct for the locale.
 */

type MdxModule = {
  default: React.ComponentType;
  metadata: { title: string; description: string };
};

const SLUGS = [
  "agentskills-implementation",
  "cross-arch-android",
  "eu-first-infrastructure",
  "multi-brain-routing",
  "real-time-audio-rust",
  "three-tier-fallback",
] as const;

type Slug = (typeof SLUGS)[number];

// NL is the source; the fan-out has added EN/DE/FR for every slug. Each
// localized file is wired here as content/patterns/<slug>.<locale>.mdx so
// Turbopack can statically resolve every import.
const articles: Record<Slug, Partial<Record<Locale, () => Promise<MdxModule>>>> =
  {
    "agentskills-implementation": {
      nl: () => import("@/content/patterns/agentskills-implementation.nl.mdx"),
      en: () => import("@/content/patterns/agentskills-implementation.en.mdx"),
      de: () => import("@/content/patterns/agentskills-implementation.de.mdx"),
      fr: () => import("@/content/patterns/agentskills-implementation.fr.mdx"),
    },
    "cross-arch-android": {
      nl: () => import("@/content/patterns/cross-arch-android.nl.mdx"),
      en: () => import("@/content/patterns/cross-arch-android.en.mdx"),
      de: () => import("@/content/patterns/cross-arch-android.de.mdx"),
      fr: () => import("@/content/patterns/cross-arch-android.fr.mdx"),
    },
    "eu-first-infrastructure": {
      nl: () => import("@/content/patterns/eu-first-infrastructure.nl.mdx"),
      en: () => import("@/content/patterns/eu-first-infrastructure.en.mdx"),
      de: () => import("@/content/patterns/eu-first-infrastructure.de.mdx"),
      fr: () => import("@/content/patterns/eu-first-infrastructure.fr.mdx"),
    },
    "multi-brain-routing": {
      nl: () => import("@/content/patterns/multi-brain-routing.nl.mdx"),
      en: () => import("@/content/patterns/multi-brain-routing.en.mdx"),
      de: () => import("@/content/patterns/multi-brain-routing.de.mdx"),
      fr: () => import("@/content/patterns/multi-brain-routing.fr.mdx"),
    },
    "real-time-audio-rust": {
      nl: () => import("@/content/patterns/real-time-audio-rust.nl.mdx"),
      en: () => import("@/content/patterns/real-time-audio-rust.en.mdx"),
      de: () => import("@/content/patterns/real-time-audio-rust.de.mdx"),
      fr: () => import("@/content/patterns/real-time-audio-rust.fr.mdx"),
    },
    "three-tier-fallback": {
      nl: () => import("@/content/patterns/three-tier-fallback.nl.mdx"),
      en: () => import("@/content/patterns/three-tier-fallback.en.mdx"),
      de: () => import("@/content/patterns/three-tier-fallback.de.mdx"),
      fr: () => import("@/content/patterns/three-tier-fallback.fr.mdx"),
    },
  };

function isSlug(value: string): value is Slug {
  return (SLUGS as readonly string[]).includes(value);
}

/** Which locales actually have a file for this slug (for accurate hreflang). */
function availableLocalesFor(slug: Slug): Locale[] {
  return LOCALES.filter((l) => articles[slug][l]);
}

function loadArticle(slug: Slug, locale: Locale): Promise<MdxModule> {
  const byLocale = articles[slug];
  const loader = byLocale[locale] ?? byLocale.nl!;
  return loader();
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => SLUGS.map((slug) => ({ lang, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isSlug(slug)) return {};
  const locale = lang as Locale;

  const { metadata } = await loadArticle(slug, locale);
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: buildAlternates(
      `/patterns/${slug}`,
      locale,
      availableLocalesFor(slug),
    ),
  };
}

export default async function PatternArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isSlug(slug)) notFound();
  const locale = lang as Locale;

  const { default: Article } = await loadArticle(slug, locale);
  return <Article />;
}
