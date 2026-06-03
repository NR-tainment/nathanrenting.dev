import type { Metadata } from "next";

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

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          Wat ik voor klanten doe
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
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Praktisch</h2>
        <div className="border border-zinc-800 rounded-md divide-y divide-zinc-800">
          <Row label="Beschikbaarheid">
            2-3 dagen per week. Plek is op dit moment open.
          </Row>
          <Row label="Tarief">
            €110-130/u ZZP. Langere engagements bespreekbaar met korting.
          </Row>
          <Row label="Inhuurvorm">
            ZZP-inhuur via mijn eenmanszaak. NL-facturen met BTW.
          </Row>
          <Row label="Locatie">
            Remote-preferred vanuit Eindhoven. Heel NL bereikbaar voor
            kickoff of een kritische review.
          </Row>
          <Row label="Stack">
            Python, Rust, TypeScript, React Native, Claude /
            agentskills.io-stack, Supabase, Stripe.
          </Row>
          <Row label="Wat ik niet doe">
            Pure consulting zonder bouwen. Generieke CMS-bouw. Fulltime
            detachering.
          </Row>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          Hoe te starten
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
      </section>

      <section className="border-t border-zinc-800 pt-10">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Contact</h2>
        <p className="text-zinc-300 mb-4">
          Mail is het snelste pad:{" "}
          <a
            href="mailto:contact@nathanrenting.dev"
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
          >
            contact@nathanrenting.dev
          </a>
          .
        </p>
        <p className="text-zinc-500 text-sm">
          Reactie meestal binnen één werkdag.
        </p>
      </section>
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
