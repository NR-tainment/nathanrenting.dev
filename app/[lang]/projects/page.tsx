import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { StealthCard } from "@/components/StealthCard";
import {
  SketchBox,
  MarginNote,
  SectionReveal,
  Redacted,
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
  const t = await getDictionary(locale, "projects");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: buildAlternates("/projects", locale),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const locale = lang as Locale;
  const t = await getDictionary(locale, "projects");
  const p = (path: string) => `/${locale}${path}`;
  const c = t.cards;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        {t.h1}
      </h1>
      <p className="text-zinc-400 mb-10">
        {t.introBefore}
        <a
          href={p("/patterns")}
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
        >
          {t.introLinkLabel}
        </a>
        {t.introAfter}
      </p>

      <SectionReveal className="relative">
        <SketchBox className="rounded-md" seed={11}>
          <ProjectCard
            href={p(c.echo.href)}
            title={c.echo.title}
            oneLiner={c.echo.oneLiner}
            tags={c.echo.tags}
            status={c.echo.status}
          />
        </SketchBox>
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href={p(c.therapyvault.href)}
          title={c.therapyvault.title}
          oneLiner={c.therapyvault.oneLiner}
          tags={c.therapyvault.tags}
          status={c.therapyvault.status}
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href={p(c.audiolab.href)}
          title={c.audiolab.title}
          oneLiner={c.audiolab.oneLiner}
          tags={c.audiolab.tags}
          status={c.audiolab.status}
          externalUrl={c.audiolab.externalUrl}
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href={p(c.captioncompass.href)}
          title={c.captioncompass.title}
          oneLiner={c.captioncompass.oneLiner}
          tags={c.captioncompass.tags}
          status={c.captioncompass.status}
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href={p(c.photoflow.href)}
          title={c.photoflow.title}
          oneLiner={c.photoflow.oneLiner}
          tags={c.photoflow.tags}
          status={c.photoflow.status}
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href={p(c.familykart.href)}
          title={c.familykart.title}
          oneLiner={c.familykart.oneLiner}
          tags={c.familykart.tags}
          status={c.familykart.status}
        />
      </SectionReveal>

      {/* Divider before stealth section */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      <SectionReveal className="relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-3">
          <ChalkDoodle type="x-mark" className="opacity-60" />
          {t.stealth.label}
        </h2>

        <figure className="my-8 -mx-2 md:-mx-8">
          <img
            src="/stealth-timeline.png"
            alt={t.stealth.timelineAlt}
            className="w-full rounded border border-zinc-800"
            loading="lazy"
          />
          <figcaption className="mt-3 text-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
            {t.stealth.timelineCaption}
          </figcaption>
        </figure>

        <MarginNote position="right" rotate={-2}>
          {t.stealth.marginNote}
        </MarginNote>

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
                <Redacted variant="wipe">{t.stealth.audio.redacted3}</Redacted>
                {t.stealth.audio.part4}
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

        <p className="mt-6 text-xs font-mono text-zinc-500">{t.stealth.note}</p>
      </SectionReveal>
    </div>
  );
}
