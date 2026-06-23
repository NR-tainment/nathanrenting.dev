import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { StealthCard } from "@/components/StealthCard";
import {
  SketchUnderline,
  SketchBox,
  MarkerHighlight,
  MarginNote,
  DrawnArrow,
  SectionReveal,
  Redacted,
  ChalkDoodle,
} from "@/components/sketch";
import { type Locale, HREFLANG } from "@/content/config";
import { hasLocale, getDictionary } from "@/content/dictionaries";
import { buildAlternates, jsonLd, localizedUrl, SITE_URL } from "@/lib/seo";

function PatternLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 border border-zinc-800 rounded px-4 py-3 text-sm text-zinc-200 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
    >
      <span className="group-hover:text-cyan-400 transition-colors">
        {children}
      </span>
      <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors">
        →
      </span>
    </Link>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  // Home root: canonical/hreflang for the locale root ("" path).
  return { alternates: buildAlternates("", locale) };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "home");
  const p = (path: string) => `/${locale}${path}`;

  const homeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${localizedUrl(locale, "")}#webpage`,
        url: localizedUrl(locale, ""),
        name: t.meta.title ?? "Nathan Renting",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#nathan` },
        inLanguage: HREFLANG[locale],
        primaryImageOfPage: `${SITE_URL}/nathan-portret.png`,
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Freelance AI-agent & real-time audio development",
        serviceType: [
          "AI agent development",
          "LLM orchestration",
          "Real-time audio engineering",
        ],
        provider: { "@id": `${SITE_URL}/#nathan` },
        areaServed: "EU (remote)",
        description:
          "Solo freelance ontwikkeling van AI-agent systemen (LLM-orchestratie, tool-calling, RAG) en real-time audio engines. ZZP-inhuur, 2–3 dagen per week, EU remote.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 110,
            maxPrice: 130,
            priceCurrency: "EUR",
            unitText: "HOUR",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${localizedUrl(locale, "")}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.work.heading,
            item: localizedUrl(locale, ""),
          },
        ],
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${localizedUrl(locale, "")}#faq`,
    inLanguage: HREFLANG[locale],
    mainEntity: t.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  // ItemList of the most recent writeups → each a TechArticle ref with real
  // headline + datePublished + author #nathan. Gives answer-engines a citable,
  // dated list of first-party writing surfaced from the home page.
  const writingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${localizedUrl(locale, "")}#writing`,
    name: t.writing.heading,
    inLanguage: HREFLANG[locale],
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: t.writing.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TechArticle",
        "@id": `${localizedUrl(locale, item.href)}#article`,
        headline: item.headline,
        abstract: item.summary,
        url: localizedUrl(locale, item.href),
        datePublished: item.datePublished,
        dateModified: item.datePublished,
        inLanguage: HREFLANG[locale],
        author: { "@id": `${SITE_URL}/#nathan` },
        publisher: { "@id": `${SITE_URL}/#org` },
        isPartOf: { "@id": `${localizedUrl(locale, "")}#webpage` },
      },
    })),
  };

  const cards = t.projects;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(writingSchema) }}
      />
      {/* Hero */}
      <section className="mb-20 relative">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
          <SketchUnderline seed={3}>{t.hero.availability}</SketchUnderline>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight mb-6 [hyphens:auto] sm:[hyphens:none]">
          {t.hero.headlineLead}
          <SketchUnderline seed={5}>{t.hero.headlineUnderline}</SketchUnderline>
          <ChalkDoodle
            type="waveform"
            inline
            className="ml-2 align-middle opacity-80"
          />
          {t.hero.headlineAfterDoodle}
          <span className="text-cyan-400">{t.hero.headlineAccent1}</span>
          {t.hero.headlineMid}
          <span className="text-cyan-400">{t.hero.headlineAccent2}</span>
          {t.hero.headlineTail}
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          {t.hero.intro}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={p("/projects")}
            className="font-mono text-sm bg-cyan-400 text-zinc-950 px-4 py-2 rounded hover:bg-cyan-300 transition-colors"
          >
            {t.hero.ctaPrimary}
          </Link>
          <Link
            href={p("/hire")}
            className="font-mono text-sm border border-zinc-700 text-zinc-200 px-4 py-2 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>

        <MarginNote position="right" rotate={-3}>
          {t.hero.marginNote}
        </MarginNote>
      </section>

      <DrawnArrow className="mb-16" />

      {/* What I do — projects */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline>{t.work.heading}</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          {t.work.marginNote}
        </MarginNote>

        <SketchBox className="rounded-md" seed={11}>
          <ProjectCard
            href={p(cards.echo.href)}
            title={cards.echo.title}
            oneLiner={cards.echo.oneLiner}
            tags={cards.echo.tags}
            status={cards.echo.status}
          />
        </SketchBox>

        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <ProjectCard
            href={p(cards.therapyvault.href)}
            title={cards.therapyvault.title}
            oneLiner={cards.therapyvault.oneLiner}
            tags={cards.therapyvault.tags}
            status={cards.therapyvault.status}
          />
          <ProjectCard
            href={p(cards.audiolab.href)}
            title={cards.audiolab.title}
            oneLiner={cards.audiolab.oneLiner}
            tags={cards.audiolab.tags}
            status={cards.audiolab.status}
            externalUrl={cards.audiolab.externalUrl}
          />
          <ProjectCard
            href={p(cards.captioncompass.href)}
            title={cards.captioncompass.title}
            oneLiner={cards.captioncompass.oneLiner}
            tags={cards.captioncompass.tags}
            status={cards.captioncompass.status}
          />
          <ProjectCard
            href={p(cards.photoflow.href)}
            title={cards.photoflow.title}
            oneLiner={cards.photoflow.oneLiner}
            tags={cards.photoflow.tags}
            status={cards.photoflow.status}
          />
          <ProjectCard
            href={p(cards.familykart.href)}
            title={cards.familykart.title}
            oneLiner={cards.familykart.oneLiner}
            tags={cards.familykart.tags}
            status={cards.familykart.status}
          />
        </div>

        <div className="mt-8 mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-3">
          <ChalkDoodle type="x-mark" className="opacity-60" />
          {t.stealth.label}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <StealthCard
            category={t.stealth.audio.category}
            description={
              <>
                {t.stealth.audio.part1}
                <Redacted variant="wipe">{t.stealth.audio.redacted1}</Redacted>
                {t.stealth.audio.part2}
                <Redacted>{t.stealth.audio.redacted2}</Redacted>
                {t.stealth.audio.part3}
              </>
            }
            status={t.stealth.audio.status}
          />
          <StealthCard
            category={t.stealth.method.category}
            description={
              <>
                {t.stealth.method.part1}
                <Redacted variant="wipe">{t.stealth.method.redacted1}</Redacted>
                {t.stealth.method.part2}
                <Redacted>{t.stealth.method.redacted2}</Redacted>
                {t.stealth.method.part3}
              </>
            }
            status={t.stealth.method.status}
          />
        </div>

        <p className="mt-6 text-xs font-mono text-zinc-500">{t.work.ndaNote}</p>
      </SectionReveal>

      {/* Divider between sections */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* Patterns */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={7}>{t.patterns.heading}</SketchUnderline>
        </h2>

        <MarginNote position="left" rotate={2}>
          {t.patterns.marginNote}
        </MarginNote>

        <p className="text-zinc-400 leading-relaxed mb-6">{t.patterns.intro}</p>
        <div className="grid md:grid-cols-2 gap-3">
          {t.patterns.links.map((link) => (
            <PatternLink key={link.href} href={p(link.href)}>
              {link.label}
            </PatternLink>
          ))}
        </div>
        <Link
          href={p("/patterns")}
          className="inline-block mt-6 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {t.patterns.allLink}
        </Link>
      </SectionReveal>

      {/* Divider between sections */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* Recent writing */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={23}>{t.writing.heading}</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          {t.writing.marginNote}
        </MarginNote>

        <p className="text-zinc-400 leading-relaxed mb-6">{t.writing.intro}</p>
        <ul className="space-y-3">
          {t.writing.items.map((item) => (
            <li key={item.href}>
              <Link
                href={p(item.href)}
                className="group block border border-zinc-800 rounded px-4 py-3 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {item.headline}
                  </span>
                  <time
                    dateTime={item.datePublished}
                    className="shrink-0 font-mono text-xs text-zinc-500"
                  >
                    {item.dateLabel}
                  </time>
                </div>
                <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                  {item.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={p("/patterns")}
          className="inline-block mt-6 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {t.writing.allLink}
        </Link>
      </SectionReveal>

      {/* Divider between sections */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* What I bring */}
      <SectionReveal className="mb-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="star" className="opacity-60" />
          <SketchUnderline seed={13}>{t.bring.heading}</SketchUnderline>
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          <MarkerHighlight>{t.bring.highlight}</MarkerHighlight>
          {t.bring.body}
        </p>
      </SectionReveal>

      {/* Divider between sections */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* FAQ */}
      <SectionReveal className="mb-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={17}>{t.faqHeading}</SketchUnderline>
        </h2>
        <dl className="space-y-6">
          {t.faq.map((item) => (
            <div key={item.q}>
              <dt className="text-zinc-100 font-medium mb-1">{item.q}</dt>
              <dd className="text-zinc-400 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </SectionReveal>

      {/* Quiet CTA */}
      <SectionReveal>
        <section className="border-t border-zinc-800 pt-10">
          <p className="text-zinc-400 mb-4">{t.cta.body}</p>
          <Link
            href={p("/hire")}
            className="font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {t.cta.link}
          </Link>
        </section>
      </SectionReveal>
    </div>
  );
}
