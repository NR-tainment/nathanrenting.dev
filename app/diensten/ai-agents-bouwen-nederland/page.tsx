import type { Metadata } from "next";
import Link from "next/link";
import {
  SketchUnderline,
  SketchBox,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
} from "@/components/sketch";

export const metadata: Metadata = {
  title: "AI agents bouwen || freelance, Nederland en EU remote",
  description:
    "AI agent ontwikkelaar voor het MKB. LLM-orchestratie, tool-calling, RAG en Claude API. Productie-agents van prompt tot werkend onderdeel van je product. ZZP-inhuur, Eindhoven en EU remote.",
  alternates: {
    canonical: "https://nathanrenting.dev/diensten/ai-agents-bouwen-nederland",
  },
  openGraph: {
    title: "AI agents bouwen || freelance, Nederland en EU remote",
    description:
      "AI agent ontwikkelaar voor het MKB. LLM-orchestratie, tool-calling, RAG. Productie-agents van prompt tot werkend onderdeel.",
    url: "https://nathanrenting.dev/diensten/ai-agents-bouwen-nederland",
    type: "website",
  },
};

// Schema.org Service markup || helpt AI's deze pagina koppelen
// aan service-intent zoekopdrachten (AI agent developer NL, LLM freelance, etc.)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://nathanrenting.dev/diensten/ai-agents-bouwen-nederland#service",
  name: "AI agents bouwen || freelance",
  alternateName: [
    "AI agent development",
    "LLM agent ontwikkeling",
    "AI agent ontwikkelaar Nederland",
  ],
  description:
    "Productie-ready AI agent systemen bouwen voor het MKB en SaaS. LLM-orchestratie, tool-calling, RAG, Claude API integratie. Solo, EU remote, 2-3 dagen per week.",
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
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LLM-orchestratie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tool-calling en MCP integratie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RAG (Retrieval-Augmented Generation)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Claude API integratie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-LLM routing (lokaal + cloud)",
        },
      },
    ],
  },
};

export default function AiAgentsBouwenPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
        <SketchUnderline seed={203}>
          Dienst · freelance AI engineer
        </SketchUnderline>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight mb-6">
        AI agents bouwen.{" "}
        <span className="text-cyan-400">Productie || niet demo</span>.
      </h1>

      <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
        Ik bouw AI agent systemen die echt draaien || end-to-end. LLM-orchestratie,
        tool-calling, RAG, en de integratie in je bestaande stack. Solo, vanuit
        Eindhoven, beschikbaar 2-3 dagen per week voor klanten in Nederland en de EU.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-16">
        <Link
          href="/hire"
          className="font-mono text-sm bg-cyan-400 text-zinc-950 px-4 py-2 rounded hover:bg-cyan-300 transition-colors"
        >
          Plan een call →
        </Link>
        <Link
          href="/projects/echo"
          className="font-mono text-sm border border-zinc-700 text-zinc-200 px-4 py-2 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
        >
          Zie ECHO als referentie
        </Link>
      </div>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={211}>Waar ik mee help</SketchUnderline>
        </h2>

        <p className="text-zinc-300 leading-relaxed mb-4">
          De projecten waar ik het meeste waarde toevoeg:
        </p>

        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-3">
          <li>
            <strong className="text-zinc-100">Agent vanaf nul opzetten.</strong>{" "}
            LLM-orchestratie || tool-calling || geheugen-laag || de hele
            architectuur. Niet een chatbot die alleen praat, wel een agent die
            taken uitvoert en doorgaat waar je gisteren stopte.
          </li>
          <li>
            <strong className="text-zinc-100">Bestaande LLM-integratie verbeteren.</strong>{" "}
            Routing tussen modellen, kosten omlaag, latency omlaag,
            betrouwbaarheid omhoog. Vaak met multi-tier fallback en lokale
            modellen voor de goedkope vragen.
          </li>
          <li>
            <strong className="text-zinc-100">RAG opzetten op je eigen documenten.</strong>{" "}
            Embeddings, chunking, retrieval-strategie, evaluatie. Geen
            generieke "load and chat" || wel geconfigureerd op jouw corpus
            en jouw vragen.
          </li>
          <li>
            <strong className="text-zinc-100">Claude API integratie.</strong>{" "}
            Tool-use, MCP-servers, streaming, prompt caching. Voor teams die
            van een prototype naar productie willen zonder de standaard
            valkuilen tegen te komen.
          </li>
          <li>
            <strong className="text-zinc-100">Workflow-automatisering met agents.</strong>{" "}
            SDR-agents, support-flows, factuurverwerking, content-pipelines.
            Met de juiste guardrails en monitoring zodat het niet stilletjes
            kapot gaat.
          </li>
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={223}>De stack die ik pak</SketchUnderline>
        </h2>

        <p className="text-zinc-400 leading-relaxed mb-4">
          <MarkerHighlight>Stack volgt het probleem</MarkerHighlight>, maar dit
          is wat ik in praktijk het meeste raak voor agent-werk:
        </p>

        <SketchBox className="rounded-md" seed={227}>
          <div className="divide-y divide-zinc-800/60">
            <Row label="LLM">
              Anthropic Claude (Sonnet || Haiku || Opus). Lokaal Ollama (Qwen
              2.5, Llama 3.2) voor goedkope routes en offline-fallback.
            </Row>
            <Row label="Backend">
              Python en FastAPI. Async I/O || tool-registry || streaming.
              Rust waar latency telt.
            </Row>
            <Row label="Tooling">
              Tool-calling || MCP || agentskills.io-patroon (OpenClaw-compatibel).
              Multi-tier fallback voor productie-betrouwbaarheid.
            </Row>
            <Row label="Memory">
              Obsidian-vault als context-repository (Letta-stijl), ADD-only
              extraction, optionele Qdrant voor vector-recall.
            </Row>
            <Row label="Infra">
              Supabase EU || Cloudflare R2 || Sentry EU || Stripe. Vercel
              of een eigen VPS met Coolify als het past.
            </Row>
            <Row label="Niet">
              Geen vendor lock-in zonder reden. Geen LangChain-spaghetti.
              Geen agent-framework als 100 regels Python het ook doet.
            </Row>
          </div>
        </SketchBox>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="star" className="opacity-60" />
          <SketchUnderline seed={233}>Bewijs || ECHO</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          (geen pitch-deck || live in een call)
        </MarginNote>

        <p className="text-zinc-300 leading-relaxed mb-4">
          Ik bouw niet alleen voor klanten || ik bouw voor mezelf. ECHO is mijn
          eigen agent-orchestrator die dagelijks draait op mijn bureau.
          Voice-first, routed tussen lokaal Ollama en Claude, eigen geheugen
          in een Obsidian-vault, live HUD met system stats. Tien jaar audio-DNA
          eronder voor de voice-laag.
        </p>

        <p className="text-zinc-400 leading-relaxed mb-4">
          Wat ECHO bewijst voor klantwerk:{" "}
          <MarkerHighlight>
            ik weet waar agents breken in productie, en hoe je dat voorkomt
          </MarkerHighlight>
          . De architectuur-keuzes die je vroeg maakt (memory-laag, routing,
          tool-registry, fallback-strategie) bepalen of je over zes maanden nog
          steeds blij bent met de codebase || of dat je opnieuw begint.
        </p>

        <Link
          href="/projects/echo"
          className="inline-block mt-2 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          → Lees over ECHO
        </Link>
      </SectionReveal>

      <SectionReveal className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="arrow-curve" className="opacity-60" />
          <SketchUnderline seed={241}>
            Voor wie dit het beste werkt
          </SketchUnderline>
        </h2>

        <ul className="list-disc list-outside ml-6 text-zinc-300 space-y-3">
          <li>
            <strong className="text-zinc-100">SaaS-bedrijven</strong> die een
            AI-feature naar productie willen krijgen zonder een vast team aan
            te nemen. Eén of twee sprints van mij is vaak genoeg om het werkend
            te krijgen.
          </li>
          <li>
            <strong className="text-zinc-100">MKB met interne automatisering.</strong>{" "}
            Agents voor support, sales-development, factuurverwerking,
            content-flows. Werk dat anders blijft liggen omdat er geen team
            voor is.
          </li>
          <li>
            <strong className="text-zinc-100">Solo founders en kleine teams</strong>{" "}
            die de AI-laag onder hun product willen, maar liever niet zelf
            de hele LLM-economie hoeven uit te zoeken.
          </li>
        </ul>
      </SectionReveal>

      <SectionReveal className="mb-12 relative">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={251}>Hoe het werkt</SketchUnderline>
        </h2>

        <MarginNote position="left" rotate={2}>
          (eerlijk = minder verrassingen later)
        </MarginNote>

        <ol className="list-decimal list-outside ml-6 text-zinc-300 space-y-3">
          <li>
            <strong className="text-zinc-100">Korte mail of bericht.</strong>{" "}
            Wat het probleem is, ruwe vorm van wat je zoekt, tijdshorizon. Eén
            alinea is genoeg.
          </li>
          <li>
            <strong className="text-zinc-100">Call van 30 minuten.</strong>{" "}
            Klikt het, scopen we het. Klikt het niet, zeg ik dat ook. ECHO
            laat ik live zien als je dat wil.
          </li>
          <li>
            <strong className="text-zinc-100">Eén betaalde week eerst.</strong>{" "}
            Voor langere engagements: één week werken om het ritme te checken
            voordat we doortrekken.
          </li>
        </ol>
      </SectionReveal>

      <SectionReveal>
        <section className="border-t border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-3">
            <ChalkDoodle type="scribble" className="opacity-60" />
            <SketchUnderline seed={263}>Klaar om te starten?</SketchUnderline>
          </h2>

          <p className="text-zinc-300 leading-relaxed mb-6">
            Tarief, beschikbaarheid en het formulier staan op de hire-pagina.
            Beschikbaar voor klanten in Nederland en EU remote, 2-3 dagen per
            week, vanuit Eindhoven.
          </p>

          <Link
            href="/hire"
            className="font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            → Naar /hire (tarief + contact)
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
