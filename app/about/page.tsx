import type { Metadata } from "next";
import {
  SketchUnderline,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
} from "@/components/sketch";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Nathan Renting — solo dev in Eindhoven. 12 jaar entertainment- en audio-productie-achtergrond, nu bouwer van agent-systemen en audio-engines.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-8">
        Over mij
      </h1>

      <div className="prose-invert max-w-none">
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          Nathan Renting (officieel: Jonathan David Renting).{" "}
          <MarkerHighlight>Solo dev, Eindhoven</MarkerHighlight>.
        </p>

        <p className="text-zinc-400 leading-relaxed mb-6">
          Wat ik dagelijks doe: ik bouw agent-systemen, real-time audio en de
          techniek eronder. Python is mijn comfort zone, Rust pak ik erbij
          voor realtime-werk, TypeScript voor de UI. AI-tooling permanent
          open — Claude voor code en chat, Perplexity voor onderzoek,
          ChatGPT voor prompt-werk waar het past. Best tool for the job.
        </p>

        <p className="text-zinc-400 leading-relaxed mb-10">
          Geen team om me heen, en voor de meeste dingen ook geen behoefte
          aan een team. Wat een paar jaar terug nog drie mensen nodig had
          kan nu in een week solo. Dat is geen opscheppen, gewoon waar de
          tooling is in 2026. Voor de engineering-beslissingen eronder,
          zie{" "}
          <a
            href="/patterns"
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
          >
            /patterns
          </a>
          .
        </p>

        <SectionReveal className="relative">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="musical-note" className="opacity-60" />
            <SketchUnderline seed={21}>Waar ik vandaan kom</SketchUnderline>
          </h2>

          <MarginNote position="right" rotate={-3}>
            (geen ghost meer — voor de duidelijkheid)
          </MarginNote>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Van mijn 18e tot ongeveer mijn 30e werkte ik in de
            entertainment-industrie. DJ, eventmanager, dancer. Daarnaast
            ruim tien jaar bezig geweest met audio-productie: deels onder
            eigen artiestennamen, deels als ghostproducer voor andere
            artiesten. Eigen artwork en video&apos;s erbij. Multi-disciplinair
            zonder dat dat ooit een bewuste keuze was, gewoon omdat het werk
            dat vroeg.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            Het programmeren groeide daarnaast. Begonnen met simpele HTML en
            game-engine-tutorials, langzaam doorgegroeid naar echte software.
            De laatste acht jaar intensief: eerst voor eigen audio-tooling,
            later voor producten en klantwerk.{" "}
            <MarkerHighlight>Zelfgeleerd, geen mooi LinkedIn-pad</MarkerHighlight>.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Sinds 2018 werk ik aan mijn eigen audio-product. De eerste jaren
            gingen in concept-opbouw en eerste website-schetsen — niet de
            productie-code, wel het mentale model dat alles eronder
            schraagt. Daarna drie concept-pivots en meerdere herbouwde
            iteraties, met een productie-tier sinds 2024. Acht jaar tijd in
            één probleemruimte levert iets op wat je niet uit een tutorial
            leert: een gevoel voor welke abstracties houden en welke je
            zes maanden later weer afbreekt. Het product blijft onder NDA
            tot launch.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            Wat dat alles oplevert: ik snap audio van binnen en buiten.
            Niet alleen de DSP, ook hoe een producer ergens tegenaan loopt
            en wat een UI moet doen om niet in de weg te zitten. Diezelfde
            brede blik probeer ik in agent-werk te houden: engine, infra
            en de gebruikerservaring tegelijk in beeld, niet als losse
            afdelingen.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="arrow-curve" className="opacity-60" />
            <SketchUnderline seed={31}>Wat er nu draait</SketchUnderline>
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            ECHO is mijn eigen orchestrator. Lokaal, voice-first, met
            Obsidian als geheugen. Draait op mijn main werkplek (Ryzen 7
            met RX 6650 XT, Windows) naast de HUD, ComfyUI en de rest van
            mijn dev-stack. Een oudere AMD-machine staat ernaast als
            Linux-testbed voor side-projects en experimenten. Zie de
            ECHO-page voor de architectuur en /patterns voor de
            interessante beslissingen.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            Daarnaast: een product in stealth en een herbruikbare
            launch-methodiek. Beide nog niet publiek. Onder NDA praat ik
            er graag over.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="asterisk" className="opacity-60" />
            <SketchUnderline seed={41}>Stack</SketchUnderline>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm mb-10">
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                Backend
              </h3>
              <p className="text-zinc-400">
                Python (FastAPI, async I/O), Rust voor realtime/FFI,
                TypeScript voor Node en Edge functions.
              </p>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                Audio / mobile
              </h3>
              <p className="text-zinc-400">
                Real-time audio engines in Rust met FFI, cross-platform
                Android (NDK, arm64 / armv7 / x86_64), React Native + Expo.
              </p>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                AI / agents
              </h3>
              <p className="text-zinc-400">
                Anthropic Claude (API + Code) primair, Perplexity voor
                onderzoek, ChatGPT voor prompt-werk. Lokaal Ollama (Qwen 2.5,
                Llama 3.2). agentskills.io-standaard, drie-tier
                fallback-patroon, ComfyUI.
              </p>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                Data
              </h3>
              <p className="text-zinc-400">
                Supabase (Postgres + RLS, EU-Frankfurt), Cloudflare R2,
                NDJSON-event-streams, lokale vault-patronen (Obsidian).
              </p>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                Tooling
              </h3>
              <p className="text-zinc-400">
                Claude Code, Cursor, Stripe, EAS Build, Sentry (EU), Vercel.
              </p>
            </div>
            <div>
              <h3 className="text-zinc-200 font-medium mb-1 font-mono text-xs uppercase tracking-widest">
                Hardware
              </h3>
              <p className="text-zinc-400">
                Main werkplek: Ryzen 7 3700X met RX 6650 XT (8GB), Windows.
                ECHO + HUD + ComfyUI + dev-stack draaien hier. Een tweede
                oudere AMD-machine fungeert als Linux-testbed. Voor zware
                inference val ik terug op remote-toegang tot meer GPU-power.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="relative">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="checkmark" className="opacity-60" />
            <SketchUnderline seed={53}>Hoe ik in projecten zit</SketchUnderline>
          </h2>

          <MarginNote position="left" rotate={2}>
            (eerlijk = minder verrassingen later)
          </MarginNote>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Eerlijk over wat werkt en wat niet. Geen &ldquo;ship it in 2 weken&rdquo;-
            beloftes als het 4 weken is.{" "}
            <MarkerHighlight>
              Liever vroeg een lelijke versie in productie dan een mooie
              roadmap die nooit gebouwd wordt
            </MarkerHighlight>
            .
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Stack-breedte boven specialisme. Als ik in audio-DSP zit moet
            ik ook nog een Stripe-flow kunnen opzetten, en omgekeerd. Anders
            rammelt het systeem ergens aan de naden.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            EU-eerst voor klantdata. Frankfurt-Supabase, EU-Sentry, een
            Verwerkingsregister dat ook echt bijgehouden wordt. Geen
            marketingding, gewoon waar mijn gebruikers en ik zitten.
          </p>
        </SectionReveal>

        <SectionReveal className="relative">
          <h2 className="text-xl font-semibold text-zinc-100 mb-4 mt-12 flex items-center gap-3">
            <ChalkDoodle type="star" className="opacity-60" />
            <SketchUnderline seed={67}>Buiten het scherm</SketchUnderline>
          </h2>

          <MarginNote position="right" rotate={-2}>
            (geen pitch hier ;)
          </MarginNote>

          <p className="text-zinc-400 leading-relaxed mb-4">
            Twee jonge kids. Trotse solo papa. Postzegeltuin, maar zon op het
            zuiden. Geniet meer van muziek dan van slaap. ;)
          </p>
        </SectionReveal>
      </div>
    </div>
  );
}
