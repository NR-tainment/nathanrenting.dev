import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SketchUnderline,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
} from "@/components/sketch";
import { type Locale } from "@/content/config";
import { hasLocale, getDictionary } from "@/content/dictionaries";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  const t = await getDictionary(locale, "about");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: buildAlternates("/about", locale),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "about");
  const p = (path: string) => `/${locale}${path}`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-center gap-6 mb-8 flex-col sm:flex-row">
        <img
          src="/nathan-portret.png"
          alt={t.portraitAlt}
          width={144}
          height={144}
          className="rounded-full border border-zinc-800 w-28 h-28 sm:w-36 sm:h-36 shrink-0"
        />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">
          {t.h1}
        </h1>
      </div>

      <div className="prose-invert max-w-none">
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          {t.intro.lead1}
          <MarkerHighlight>{t.intro.leadHighlight}</MarkerHighlight>
          {t.intro.lead2}
        </p>

        <p className="text-zinc-400 leading-relaxed mb-6">{t.intro.p1}</p>

        <p className="text-zinc-400 leading-relaxed mb-6">{t.intro.p2}</p>

        <p className="text-zinc-400 leading-relaxed mb-6">
          <MarkerHighlight>{t.intro.p3Highlight}</MarkerHighlight>
          {t.intro.p3}
        </p>

        <p className="text-zinc-400 leading-relaxed mb-6">{t.intro.p4}</p>

        <p className="text-zinc-400 leading-relaxed mb-10">
          {t.intro.p5Before}
          <a
            href={p("/patterns")}
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
          >
            {t.intro.p5LinkLabel}
          </a>
          {t.intro.p5After}
        </p>

        <SectionReveal className="relative">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="musical-note" className="opacity-60" />
            <SketchUnderline seed={21}>{t.origin.heading}</SketchUnderline>
          </h2>

          <MarginNote position="right" rotate={-3}>
            {t.origin.marginNote}
          </MarginNote>

          <p className="text-zinc-400 leading-relaxed mb-4">{t.origin.p1}</p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            {t.origin.p2Before}
            <MarkerHighlight>{t.origin.p2Highlight}</MarkerHighlight>
            {t.origin.p2After}
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">{t.origin.p3}</p>

          <p className="text-zinc-400 leading-relaxed mb-10">{t.origin.p4}</p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="arrow-curve" className="opacity-60" />
            <SketchUnderline seed={31}>{t.now.heading}</SketchUnderline>
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">{t.now.p1}</p>

          <p className="text-zinc-400 leading-relaxed mb-10">{t.now.p2}</p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="asterisk" className="opacity-60" />
            <SketchUnderline seed={41}>{t.stack.heading}</SketchUnderline>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm mb-10">
            {t.stack.entries.map((entry) => (
              <div key={entry.heading}>
                <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                  {entry.heading}
                </h3>
                <p className="text-zinc-400">{entry.body}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="relative">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="checkmark" className="opacity-60" />
            <SketchUnderline seed={53}>{t.approach.heading}</SketchUnderline>
          </h2>

          <MarginNote position="left" rotate={2}>
            {t.approach.marginNote}
          </MarginNote>

          <p className="text-zinc-400 leading-relaxed mb-4">
            {t.approach.p1Before}
            <MarkerHighlight>{t.approach.p1Highlight}</MarkerHighlight>
            {t.approach.p1After}
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">{t.approach.p2}</p>

          <p className="text-zinc-400 leading-relaxed mb-10">{t.approach.p3}</p>
        </SectionReveal>
      </div>
    </div>
  );
}
