import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SketchUnderline,
  SketchBox,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
} from "@/components/sketch";
import { type Locale, HREFLANG } from "@/content/config";
import { hasLocale, getDictionary } from "@/content/dictionaries";
import { buildAlternates, jsonLd, localizedUrl } from "@/lib/seo";

const PATH = "/diensten/ai-agents-bouwen-nederland";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  const t = await getDictionary(locale, "aiAgents");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: buildAlternates(PATH, locale),
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: localizedUrl(locale, PATH),
      type: "website",
    },
  };
}

export default async function AiAgentsBouwenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "aiAgents");
  const p = (path: string) => `/${locale}${path}`;

  // Service markup — shared @id, per-locale inLanguage + URL.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${localizedUrl(locale, PATH)}#service`,
    name: "AI agents bouwen — freelance",
    alternateName: [
      "AI agent development",
      "LLM agent ontwikkeling",
      "AI agent ontwikkelaar Nederland",
    ],
    description:
      "Productie-ready AI agent systemen bouwen voor het MKB en SaaS. LLM-orchestratie, tool-calling, RAG, Claude API integratie. Solo, EU remote, 2-3 dagen per week.",
    inLanguage: HREFLANG[locale],
    provider: {
      "@type": "Person",
      "@id": "https://nathanrenting.dev/#nathan",
      name: "Nathan Renting",
    },
    areaServed: [
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Place", name: "European Union" },
    ],
    serviceType: "AI agent development",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "SMB, SaaS, MKB",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "110-130",
        priceCurrency: "EUR",
        unitText: "HOUR",
      },
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI agent diensten",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LLM-orchestratie" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tool-calling en MCP integratie" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG (Retrieval-Augmented Generation)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Claude API integratie" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-LLM routing (lokaal + cloud)" } },
      ],
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />

      <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
        <SketchUnderline seed={203}>{t.eyebrow}</SketchUnderline>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight mb-6">
        {t.h1Lead}
        <span className="text-cyan-400">{t.h1Accent}</span>
        {t.h1Tail}
      </h1>

      <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
        {t.intro}
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-16">
        <Link
          href={p("/hire")}
          className="font-mono text-sm bg-cyan-400 text-zinc-950 px-4 py-2 rounded hover:bg-cyan-300 transition-colors"
        >
          {t.ctaPrimary}
        </Link>
        <Link
          href={p("/projects/echo")}
          className="font-mono text-sm border border-zinc-700 text-zinc-200 px-4 py-2 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        >
          {t.ctaSecondary}
        </Link>
      </div>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={211}>{t.help.heading}</SketchUnderline>
        </h2>

        <p className="text-zinc-300 leading-relaxed mb-4">{t.help.lead}</p>

        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-3">
          {t.help.bullets.map((b) => (
            <li key={b.strong}>
              <strong className="text-zinc-100">{b.strong}</strong> {b.body}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={223}>{t.stack.heading}</SketchUnderline>
        </h2>

        <p className="text-zinc-400 leading-relaxed mb-4">
          <MarkerHighlight>{t.stack.leadHighlight}</MarkerHighlight>
          {t.stack.leadAfter}
        </p>

        <SketchBox className="rounded-md" seed={227}>
          <div className="divide-y divide-zinc-800/60">
            {t.stack.rows.map((row) => (
              <Row key={row.label} label={row.label}>
                {row.body}
              </Row>
            ))}
          </div>
        </SketchBox>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="star" className="opacity-60" />
          <SketchUnderline seed={233}>{t.proof.heading}</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          {t.proof.marginNote}
        </MarginNote>

        <p className="text-zinc-300 leading-relaxed mb-4">{t.proof.p1}</p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          {t.proof.p2Before}
          <MarkerHighlight>{t.proof.p2Highlight}</MarkerHighlight>
          {t.proof.p2After}
        </p>

        <Link
          href={p("/projects/echo")}
          className="inline-block mt-2 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {t.proof.link}
        </Link>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="arrow-curve" className="opacity-60" />
          <SketchUnderline seed={241}>{t.forWho.heading}</SketchUnderline>
        </h2>

        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-3">
          {t.forWho.bullets.map((b) => (
            <li key={b.strong}>
              <strong className="text-zinc-100">{b.strong}</strong>
              {b.body}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={251}>{t.how.heading}</SketchUnderline>
        </h2>

        <MarginNote position="left" rotate={2}>
          {t.how.marginNote}
        </MarginNote>

        <ol className="list-decimal list-outside ml-6 text-zinc-300 space-y-3">
          {t.how.steps.map((s) => (
            <li key={s.strong}>
              <strong className="text-zinc-100">{s.strong}</strong> {s.body}
            </li>
          ))}
        </ol>
      </SectionReveal>

      <SectionReveal>
        <section className="border-t border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <ChalkDoodle type="scribble" className="opacity-60" />
            <SketchUnderline seed={263}>{t.cta.heading}</SketchUnderline>
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">{t.cta.body}</p>

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

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 px-4 py-3">
      <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </div>
      <div className="text-zinc-200">{children}</div>
    </div>
  );
}
