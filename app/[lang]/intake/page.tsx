import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntakeForm } from "@/components/IntakeForm";
import { MarginNote } from "@/components/sketch";
import { hasLocale } from "@/content/dictionaries";

// Link-only pagina: ik stuur 'm naar een prospect, hij hoeft niet vindbaar te zijn.
export const metadata: Metadata = {
  title: "Intake",
  description:
    "Vragenlijst vooraf, zodat een eerste gesprek over de inhoud gaat in plaats van over de basis.",
  robots: { index: false, follow: false },
};

export default async function IntakePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        Intake
      </h1>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-10">
        ± 10 minuten · niets is verplicht behalve je contactgegevens
      </p>

      <div className="relative mb-12">
        <MarginNote position="right" rotate={-2}>
          &ldquo;dat weten we nog niet&rdquo; is ook een antwoord
        </MarginNote>

        <p className="text-zinc-300 leading-relaxed mb-4">
          Zodat ons eerste gesprek over de inhoud gaat in plaats van over de
          basis. Sla gerust vragen over waar je het antwoord nog niet op weet —
          juist die lege plekken vertellen me waar het werk zit.
        </p>
        <p className="text-zinc-400 leading-relaxed text-sm">
          Je antwoorden komen als één mail bij mij binnen. Ze worden nergens
          anders opgeslagen en gaan niet naar derden.
        </p>
      </div>

      <IntakeForm />
    </div>
  );
}
