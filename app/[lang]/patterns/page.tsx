import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MarginNote, SectionReveal, ChalkDoodle } from "@/components/sketch";
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
  const t = await getDictionary(locale, "patterns");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: buildAlternates("/patterns", locale),
  };
}

export default async function PatternsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "patterns");
  const p = (path: string) => `/${locale}${path}`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 relative">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4 flex items-center gap-4">
        <ChalkDoodle type="asterisk" className="opacity-60" />
        {t.h1}
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">{t.intro}</p>

      <MarginNote position="right" rotate={-3}>
        {t.marginNote}
      </MarginNote>

      <SectionReveal>
        <div className="grid gap-4">
          {t.items.map((item, i) => (
            <SectionReveal key={item.href} delay={i * 0.05}>
              <Link
                href={p(item.href)}
                className="group block border border-zinc-800 rounded-md p-6 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.oneLiner}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
