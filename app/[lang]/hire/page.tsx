import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SketchUnderline,
  SketchBox,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
} from "@/components/sketch";
import { BlackboardContactForm } from "@/components/BlackboardContactForm";
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
  const t = await getDictionary(locale, "hire");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: buildAlternates("/hire", locale),
  };
}

export default async function HirePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "hire");

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        {t.h1}
      </h1>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-10">
        {t.availability}
      </p>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={71}>{t.what.heading}</SketchUnderline>
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-4">{t.what.lead}</p>
        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-2">
          {t.what.bullets.map((b) => (
            <li key={b.strong}>
              <strong className="text-zinc-100">{b.strong}</strong> {b.body}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={83}>{t.practical.heading}</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          {t.practical.marginNote}
        </MarginNote>

        <SketchBox className="rounded-md" seed={89}>
          <div className="divide-y divide-zinc-800/60">
            {t.practical.rows.map((row) => (
              <Row key={row.label} label={row.label}>
                {row.highlight ? (
                  <>
                    <MarkerHighlight>{row.highlight}</MarkerHighlight>
                    {row.body}
                  </>
                ) : (
                  row.body
                )}
              </Row>
            ))}
          </div>
        </SketchBox>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="arrow-curve" className="opacity-60" />
          <SketchUnderline seed={97}>{t.start.heading}</SketchUnderline>
        </h2>
        <ol className="list-decimal list-outside ml-6 text-zinc-300 space-y-3">
          {t.start.steps.map((s) => (
            <li key={s.strong}>
              <strong className="text-zinc-100">{s.strong}</strong> {s.body}
            </li>
          ))}
        </ol>
      </SectionReveal>

      <SectionReveal className="relative">
        <section className="border-t border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <ChalkDoodle type="scribble" className="opacity-60" />
            <SketchUnderline seed={103}>{t.contact.heading}</SketchUnderline>
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">{t.contact.body}</p>

          <MarginNote position="right" rotate={-3}>
            {t.contact.marginNote}
          </MarginNote>

          <BlackboardContactForm />
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
