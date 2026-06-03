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

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20 relative">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
          <SketchUnderline seed={3}>
            Beschikbaar — 2-3 dagen per week ZZP
          </SketchUnderline>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight mb-6 [hyphens:auto] sm:[hyphens:none]">
          Solo dev met{" "}
          <SketchUnderline seed={5}>audio-achtergrond</SketchUnderline>
          <ChalkDoodle type="waveform" inline className="ml-2 align-middle opacity-80" />
          .{" "}
          <span className="text-cyan-400">Agent-systemen</span>,{" "}
          <span className="text-cyan-400">real-time audio</span>, en de
          techniek eronder.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          Twaalf jaar entertainment en audio-productie eerst, daarna steeds
          zwaarder op solo-engineering. Nu bouw ik agent-orchestratie,
          audio-engines en de techniek eronder. Solo, AI-augmented, vanuit
          Eindhoven.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="font-mono text-sm bg-cyan-400 text-zinc-950 px-4 py-2 rounded hover:bg-cyan-300 transition-colors"
          >
            Bekijk het werk →
          </Link>
          <Link
            href="/hire"
            className="font-mono text-sm border border-zinc-700 text-zinc-200 px-4 py-2 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            Huur me in
          </Link>
        </div>

        <MarginNote position="right" rotate={-3}>
          (whiteboard-portfolio — patterns en projecten verderop)
        </MarginNote>
      </section>

      {/* Drawn arrow — appears as user scrolls past hero */}
      <DrawnArrow className="mb-16" />

      {/* What I do — projects */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline>Werk dat publiek mag</SketchUnderline>
        </h2>

        <MarginNote position="right" rotate={-2}>
          (rest is onder NDA — vraag ernaar)
        </MarginNote>

        <SketchBox className="rounded-md" seed={11}>
          <ProjectCard
            href="/projects/echo"
            title="ECHO"
            oneLiner="Mijn eigen agent-orchestrator. Lokaal, voice-first, met een Obsidian-vault als geheugen. Multi-brain routing, tool-dispatch, drie-tier AI-fallback. Draait dagelijks."
            tags={["Python · FastAPI", "Multi-brain routing", "agentskills.io", "Lokale LLMs"]}
            status="In productie"
          />
        </SketchBox>

        <div className="mt-6 grid md:grid-cols-2 gap-3">
          <StealthCard
            category="Stealth · audio"
            description={
              <>
                Een <Redacted variant="wipe">product voor creators</Redacted>,
                gebouwd vanuit tien jaar audio-productie-ervaring. Cross-platform
                mobile met een{" "}
                <Redacted>eigen audio-engine</Redacted>. Live met een kleine
                groep gebruikers. Public launch in voorbereiding.
              </>
            }
            status="Live · NDA"
          />
          <StealthCard
            category="Stealth · methodiek"
            description={
              <>
                Een herbruikbare <Redacted variant="wipe">launch-aanpak</Redacted>,
                uitgekristalliseerd tijdens het bouwen van project één.
                <Redacted> Tools, sequencing, en eigen content-pipeline.</Redacted>{" "}
                In toepassing op het volgende project.
              </>
            }
            status="In toepassing · NDA"
          />
        </div>

        <p className="mt-6 text-xs font-mono text-zinc-500">
          Wat onder NDA staat kan ik op een call wel doornemen.
        </p>
      </SectionReveal>

      {/* Divider between sections */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* Patterns */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={7}>Patterns</SketchUnderline>
        </h2>

        <MarginNote position="left" rotate={2}>
          (lees wat je interesseert, geen huiswerk)
        </MarginNote>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Engineering-beslissingen die ik onderweg ben tegengekomen. Korte
          writeups, ~3-5 min per stuk.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <PatternLink href="/patterns/multi-brain-routing">
            Multi-brain LLM routing
          </PatternLink>
          <PatternLink href="/patterns/three-tier-fallback">
            Three-tier AI fallback
          </PatternLink>
          <PatternLink href="/patterns/real-time-audio-rust">
            Real-time audio in Rust
          </PatternLink>
          <PatternLink href="/patterns/cross-arch-android">
            Cross-architecture Android builds
          </PatternLink>
          <PatternLink href="/patterns/eu-first-infrastructure">
            EU-first infrastructure
          </PatternLink>
          <PatternLink href="/patterns/agentskills-implementation">
            agentskills.io implementation
          </PatternLink>
        </div>
        <Link
          href="/patterns"
          className="inline-block mt-6 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          → Alle patterns
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
          <SketchUnderline seed={13}>Wat ik meeneem</SketchUnderline>
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          <MarkerHighlight>Vreemde combo</MarkerHighlight>: ruim tien jaar
          audio-DNA én iemand die agent-systemen dagelijks bouwt en
          gebruikt. Voor producten waar audio een rol speelt zit ik tegelijk
          in beide werelden. Voor pure AI-engineering ben ik ingespeeld op
          de tooling. Geen opstart-tijd, geen team,{" "}
          <MarkerHighlight>weinig drama</MarkerHighlight>.
        </p>
      </SectionReveal>

      {/* Quiet CTA */}
      <SectionReveal>
        <section className="border-t border-zinc-800 pt-10">
          <p className="text-zinc-400 mb-4">
            Open voor ZZP-inhuur, 2-3 dagen per week. Remote-preferred vanuit
            Eindhoven, heel NL bereikbaar voor kickoff of een kritische review.
          </p>
          <Link
            href="/hire"
            className="font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            → Hoe je me inhuurt
          </Link>
        </section>
      </SectionReveal>
    </div>
  );
}
