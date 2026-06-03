import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SketchBox, MarginNote, SectionReveal } from "@/components/sketch";

export const metadata: Metadata = {
  title: "Werk",
  description:
    "ECHO — mijn persoonlijke agent-orchestrator. Andere projecten momenteel onder NDA.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        Werk
      </h1>
      <p className="text-zinc-400 mb-10">
        ECHO is op dit moment het enige project dat ik in z&apos;n geheel
        publiek kan laten zien. Er ligt nog werk in stealth en onder NDA —
        daar praat ik graag over op een call. Voor de patterns en
        engineering-beslissingen, zie{" "}
        <a
          href="/patterns"
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
        >
          /patterns
        </a>
        .
      </p>

      <SectionReveal className="relative">
        <MarginNote position="right" rotate={-2}>
          (stealth NDA — vraag ernaar)
        </MarginNote>

        <SketchBox className="rounded-md" seed={11}>
          <ProjectCard
            href="/projects/echo"
            title="ECHO"
            oneLiner="Mijn persoonlijke agent-orchestrator. Multi-brain routing, tool-dispatch, vault-backed memory, lokale + cloud LLM-fallback. Solo gebouwd voor één gebruiker (mezelf), draait dagelijks."
            tags={[
              "Python · FastAPI",
              "Multi-brain routing",
              "agentskills.io",
              "Lokale LLMs",
            ]}
            status="In productie"
          />
        </SketchBox>
      </SectionReveal>

      <p className="mt-8 text-xs font-mono text-zinc-500">
        Aanvullende case studies (stealth product + een herbruikbare
        launch-methodiek) onder NDA beschikbaar.
      </p>
    </div>
  );
}
