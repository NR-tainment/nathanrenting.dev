import type { Metadata } from "next";
import {
  SketchUnderline,
  SketchBox,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
} from "@/components/sketch";
import { BlackboardContactForm } from "@/components/BlackboardContactForm";

export const metadata: Metadata = {
  title: "Huur me in",
  description:
    "ZZP-inhuur via eenmanszaak, 2-3 dagen per week, €110-130/u. Agent-systemen, AI-automatisering, audio/mobile, EU-compliante infra.",
};

export default function HirePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        Huur me in
      </h1>
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-10">
        Beschikbaar — 2-3 dagen per week
      </p>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          <SketchUnderline seed={71}>Wat ik voor klanten doe</SketchUnderline>
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          Technische klussen waar het team klein is, of waar het team eigenlijk
          gewoon jij bent. De vorm waarin ik het beste werk:
        </p>
        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-2">
          <li>
            <strong className="text-zinc-100">Agent-systemen opzetten of uitbreiden.</strong>{" "}
            Tool-dispatch, agentskills.io-patroon, vault-backed memory,
            Claude-tooling die ook echt onderhoudbaar blijft.
          </li>
          <li>
            <strong className="text-zinc-100">AI-automatisering.</strong>{" "}
            Interne tooling, integraties, ERP-extensies, agent-augmented
            ops. Python-first.
          </li>
          <li>
            <strong className="text-zinc-100">Realtime audio en mobile.</strong>{" "}
            Rust audio-engines met FFI, cross-platform Android (NDK),
            React Native met betaal-flows. Tien jaar plus achtergrond als
            audio-producer, dus ik snap ook wat een muzikant of producer
            aan de UI-kant verwacht.
          </li>
          <li>
            <strong className="text-zinc-100">EU-compliante infrastructuur.</strong>{" "}
            Supabase EU, Sentry EU, Verwerkingsregister-discipline,
            DPA-praktijk.
          </li>
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          <SketchUnderline seed={83}>Praktisch</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          (deze tabel is de afspraak — geen kleine lettertjes)
        </MarginNote>

        <SketchBox className="rounded-md" seed={89}>
          <div className="divide-y divide-zinc-800/60">
            <Row label="Beschikbaarheid">
              2-3 dagen per week. Plek is op dit moment open.
            </Row>
            <Row label="Tarief">
              <MarkerHighlight>€110-130/u ZZP</MarkerHighlight>. Langere
              engagements bespreekbaar met korting.
            </Row>
            <Row label="Inhuurvorm">
              ZZP-inhuur via mijn eenmanszaak. NL-facturen met BTW.
            </Row>
            <Row label="Locatie">
              Remote-preferred vanuit Eindhoven. Heel NL bereikbaar voor
              kickoff of een kritische review.
            </Row>
            <Row label="Stack">
              Python, Rust, TypeScript, React Native, agentskills.io-stack
              (multi-model: Claude / Perplexity / ChatGPT / lokaal),
              Supabase, Stripe.
            </Row>
            <Row label="Wat ik niet doe">
              Pure consulting zonder bouwen. Generieke CMS-bouw. Fulltime
              detachering.
            </Row>
          </div>
        </SketchBox>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          <SketchUnderline seed={97}>Hoe te starten</SketchUnderline>
        </h2>
        <ol className="list-decimal list-outside ml-6 text-zinc-300 space-y-3">
          <li>
            <strong className="text-zinc-100">Stuur een brief.</strong> Wat
            het probleem is, ruwe vorm van wat je nodig hebt, tijdshorizon.
            Eén alinea is genoeg.
          </li>
          <li>
            <strong className="text-zinc-100">Korte call (~30 min).</strong>{" "}
            Klikt het, scopen we het. Klikt het niet, zeg ik dat ook.
          </li>
          <li>
            <strong className="text-zinc-100">Eén betaalde week eerst.</strong>{" "}
            Voor langere engagements: één week werken om het ritme te
            checken voordat we doortrekken.
          </li>
        </ol>
      </SectionReveal>

      <SectionReveal className="relative">
        <section className="border-t border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4">
            <SketchUnderline seed={103}>Stuur een brief</SketchUnderline>
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Eén alinea is genoeg. Wat het probleem is, ruwe vorm van wat je
            zoekt, tijdshorizon. Ik reageer meestal binnen één werkdag.
          </p>

          <MarginNote position="right" rotate={-3}>
            (alles op deze pagina is hoe ik werk, niet hoe ik klink in
            een verkooppraat)
          </MarginNote>

          <BlackboardContactForm />
        </section>
      </SectionReveal>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 px-4 py-3">
      <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </div>
      <div className="text-zinc-200">{children}</div>
    </div>
  );
}
