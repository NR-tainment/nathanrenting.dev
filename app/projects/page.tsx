import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { StealthCard } from "@/components/StealthCard";
import { SketchBox, MarginNote, SectionReveal, Redacted, ChalkDoodle } from "@/components/sketch";

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
        ECHO, TherapyVault en FamilyKart kan ik publiek laten zien. Mijn
        grootste project staat onder Stealth: een audio-product waar ik
        sinds 2018 aan bouw, door meerdere concept-pivots en
        platform-iteraties heen, met een productie-tier sinds 2024. Daar
        praat ik graag over op een call. Voor de engineering-patronen die
        overal terugkomen, zie{" "}
        <a
          href="/patterns"
          className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
        >
          /patterns
        </a>
        .
      </p>

      <SectionReveal className="relative">
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

      <SectionReveal className="mt-4">
        <ProjectCard
          href="/projects/therapyvault"
          title="TherapyVault"
          oneLiner="Beveiligd video-platform voor therapeuten en hun cliënten. Therapist uploadt sessies, granulaire access-controls per cliënt, GDPR-export en scheduled-deletion, MFA voor admins. Next.js 15 + Prisma + Cloudflare R2."
          tags={["Next.js 15", "TypeScript", "Auth + MFA", "GDPR", "Stripe / Mollie"]}
          status="v0.1 RC"
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href="/projects/audiolab"
          title="AudioLab.tools"
          oneLiner="Authority-platform op het snijvlak van audio + AI + DSP + Android + toegankelijkheid. Real tools, deep docs, no slop. Astro + React + Tailwind v4, cluster-structuur (MixLab, HearLab, Engineering)."
          tags={["Astro", "Content platform", "Audio + AI", "DSP"]}
          status="Live · in opbouw"
          externalUrl="https://audiolab.tools"
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href="/projects/captioncompass"
          title="CaptionCompass"
          oneLiner="Accessibility-app voor doven en slechthorende Android-gebruikers. Live captions altijd zichtbaar; richting-hint van de spreker verschijnt alleen als betrouwbaar. Kotlin + Jetpack Compose + stereo AAudio + GCC-PHAT DoA."
          tags={["Android", "Kotlin", "Jetpack Compose", "Accessibility", "DSP"]}
          status="MVP scaffold · Phase 1"
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href="/projects/photoflow"
          title="PhotoFlow"
          oneLiner="Van bewerkte foto naar online aanwezigheid binnen 30 seconden, voor professionele fotografen. Lightroom-plugin + Tauri-desktop + cloud-publishing-stack. Multi-agent architectuur (Vision / Copy / Publishing / Analytics)."
          tags={["Tauri", "Lightroom plugin", "Multi-agent", "Photography"]}
          status="Pre-dev · vision locked"
        />
      </SectionReveal>

      <SectionReveal className="mt-4">
        <ProjectCard
          href="/projects/familykart"
          title="FamilyKart"
          oneLiner="Mario Kart voor m'n kids. Eigen 3D-engine bovenop Three.js, AI-tegenstanders, powerups, chase-camera. Electron desktop-app. Side-project dat naast het serieuze werk loopt."
          tags={["Electron", "Three.js", "3D", "Side-project"]}
          status="In ontwikkeling"
        />
      </SectionReveal>

      {/* Divider before stealth section */}
      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      <SectionReveal className="relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-3">
          <ChalkDoodle type="x-mark" className="opacity-60" />
          Stealth
        </h2>

        <figure className="my-8 -mx-2 md:-mx-8">
          <img
            src="/stealth-timeline.png"
            alt="Hand-getekende tijdlijn op blackboard: 8 JAAR — ONE PROBLEM. Vijf fases tussen 2018 en nu: concept + visie (2018), eerste schetsen (2020), mobile pivot (2022), productie-tier (2024), live · stealth (nu)."
            className="w-full rounded border border-zinc-800"
            loading="lazy"
          />
          <figcaption className="mt-3 text-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Whiteboard-schets · acht jaar in één probleemruimte
          </figcaption>
        </figure>

        <MarginNote position="right" rotate={-2}>
          (onder NDA. op een call kan ik meer kwijt)
        </MarginNote>

        <div className="grid md:grid-cols-2 gap-3">
          <StealthCard
            category="Stealth · audio · 8 jaar"
            description={
              <>
                Een <Redacted variant="wipe">product voor creators</Redacted>,
                gebouwd vanuit ruim tien jaar audio-productie-ervaring. Sinds
                2018: eerste jaren in concept-opbouw en platform-schetsen,
                daarna drie concept-pivots en meerdere herbouwde iteraties,
                met een productie-tier sinds 2024. Cross-platform mobile met
                een <Redacted>eigen audio-engine</Redacted>, drie-tier
                AI-fallback, en een{" "}
                <Redacted variant="wipe">eigen sample-pipeline</Redacted>.
                Live met een kleine groep early adopters, public launch in
                voorbereiding. EU-first stack, GDPR-by-design.
              </>
            }
            status="Live · sinds 2018 · NDA"
          />
          <StealthCard
            category="Stealth · methodiek"
            description={
              <>
                Een herbruikbare <Redacted variant="wipe">launch-aanpak</Redacted>
                {" "}voor indie- en stealth-products richting publieke release.
                Uitgekristalliseerd tijdens het eerste stealth-project.{" "}
                <Redacted>
                  Tools, sequencing, eigen content-pipeline, social-syndication.
                </Redacted>
                {" "}In toepassing op het volgende project. Meer dan een
                lijstje tactieken, minder dan een publiek framework.
              </>
            }
            status="In toepassing · 2025-nu · NDA"
          />
        </div>

        <p className="mt-6 text-xs font-mono text-zinc-500">
          Beide projecten kan ik op een call wel inhoudelijk doornemen.
          Klikt het, dan praten we verder onder MNDA.
        </p>
      </SectionReveal>
    </div>
  );
}
