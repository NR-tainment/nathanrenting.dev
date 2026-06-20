import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/content/config";
import { hasLocale } from "@/content/dictionaries";
import { buildAlternates } from "@/lib/seo";

/**
 * Dynamic MDX loader for /[lang]/projects/[slug]. Same pattern as the patterns
 * loader: explicit per-(locale, slug) import map, NL source today, fan-out adds
 * EN/DE/FR files (content/projects/<slug>.<locale>.mdx). hreflang is emitted
 * only for locales that actually have a file.
 */

type MdxModule = {
  default: React.ComponentType;
  metadata: { title: string; description: string };
};

const SLUGS = [
  "audiolab",
  "captioncompass",
  "echo",
  "familykart",
  "photoflow",
  "therapyvault",
] as const;

type Slug = (typeof SLUGS)[number];

const projects: Record<Slug, Partial<Record<Locale, () => Promise<MdxModule>>>> =
  {
    audiolab: {
      nl: () => import("@/content/projects/audiolab.nl.mdx"),
      en: () => import("@/content/projects/audiolab.en.mdx"),
      de: () => import("@/content/projects/audiolab.de.mdx"),
      fr: () => import("@/content/projects/audiolab.fr.mdx"),
    },
    captioncompass: {
      nl: () => import("@/content/projects/captioncompass.nl.mdx"),
      en: () => import("@/content/projects/captioncompass.en.mdx"),
      de: () => import("@/content/projects/captioncompass.de.mdx"),
      fr: () => import("@/content/projects/captioncompass.fr.mdx"),
    },
    echo: {
      nl: () => import("@/content/projects/echo.nl.mdx"),
      en: () => import("@/content/projects/echo.en.mdx"),
      de: () => import("@/content/projects/echo.de.mdx"),
      fr: () => import("@/content/projects/echo.fr.mdx"),
    },
    familykart: {
      nl: () => import("@/content/projects/familykart.nl.mdx"),
      en: () => import("@/content/projects/familykart.en.mdx"),
      de: () => import("@/content/projects/familykart.de.mdx"),
      fr: () => import("@/content/projects/familykart.fr.mdx"),
    },
    photoflow: {
      nl: () => import("@/content/projects/photoflow.nl.mdx"),
      en: () => import("@/content/projects/photoflow.en.mdx"),
      de: () => import("@/content/projects/photoflow.de.mdx"),
      fr: () => import("@/content/projects/photoflow.fr.mdx"),
    },
    therapyvault: {
      nl: () => import("@/content/projects/therapyvault.nl.mdx"),
      en: () => import("@/content/projects/therapyvault.en.mdx"),
      de: () => import("@/content/projects/therapyvault.de.mdx"),
      fr: () => import("@/content/projects/therapyvault.fr.mdx"),
    },
  };

function isSlug(value: string): value is Slug {
  return (SLUGS as readonly string[]).includes(value);
}

function availableLocalesFor(slug: Slug): Locale[] {
  return LOCALES.filter((l) => projects[slug][l]);
}

function loadProject(slug: Slug, locale: Locale): Promise<MdxModule> {
  const byLocale = projects[slug];
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

  const { metadata } = await loadProject(slug, locale);
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: buildAlternates(
      `/projects/${slug}`,
      locale,
      availableLocalesFor(slug),
    ),
  };
}

export default async function ProjectArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isSlug(slug)) notFound();
  const locale = lang as Locale;

  const { default: Project } = await loadProject(slug, locale);
  return <Project />;
}
