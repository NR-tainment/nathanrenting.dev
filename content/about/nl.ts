import type { AboutDict } from "./types";

const nl: AboutDict = {
  meta: {
    title: "Over mij",
    description:
      "Nathan Renting — solo dev in Eindhoven. 12 jaar entertainment- en audio-productie-achtergrond, nu bouwer van agent-systemen en audio-engines.",
  },
  portraitAlt:
    "Hand-getekend chalk-portret van Nathan: kale buste met cyan headphones, vriendelijke smile, kleine waveform-doodle boven het hoofd.",
  h1: "Over mij",
  intro: {
    lead1: "Nathan Renting (officieel: Jonathan David Renting). ",
    leadHighlight: "Solo dev, Eindhoven",
    lead2: ".",
    p1: "Wat ik dagelijks doe: papa zijn. Daarbuiten muziek maken, luisteren, ademen, en kijken naar mijn aquarium met Afrikaanse weef-garnalen. Postzegeltuin met zon op het zuiden. Geniet meer van muziek dan van slaap. ;)",
    p2: "En agent-systemen bouwen. Oplossingen voor specifieke functies, niche-apps voor smalle use-cases, en de techniek eronder.",
    p3Highlight: "Stack volgt het probleem.",
    p3: " Python is comfort zone, Rust voor realtime, TypeScript voor de UI. Dat is wat ik nu het meeste raak. Als een andere basis logischer is voor een project, val ik daar in. De beperking is zelden welke syntax ik ken; het zien welke opties er bestaan voor een probleem, en die durven pakken, wel.",
    p4: "AI-tooling permanent open. Claude voor code en chat, Perplexity voor onderzoek, ChatGPT voor prompt-werk waar het past.",
    p5Before:
      "Geen team om me heen, en voor de meeste dingen ook geen behoefte aan een team. Wat een paar jaar terug nog drie mensen nodig had kan nu in een week solo. Dat is waar de tooling staat in 2026. Voor de engineering-beslissingen eronder, zie ",
    p5LinkLabel: "/patterns",
    p5After: ".",
  },
  origin: {
    heading: "Waar ik vandaan kom",
    marginNote: "(geen ghost meer, voor de duidelijkheid)",
    p1: "Van mijn 18e tot ongeveer mijn 30e werkte ik in de entertainment-industrie. DJ, eventmanager, dancer. Daarnaast ruim tien jaar bezig geweest met audio-productie: deels onder eigen artiestennamen, deels als ghostproducer voor andere artiesten. Eigen artwork en video's erbij. Multi-disciplinair zonder dat dat ooit een bewuste keuze was, gewoon omdat het werk dat vroeg.",
    p2Before:
      "Het programmeren groeide daarnaast. Begonnen met simpele HTML en game-engine-tutorials, langzaam doorgegroeid naar echte software. De laatste acht jaar intensief: eerst voor eigen audio-tooling, later voor producten en klantwerk. ",
    p2Highlight: "Zelfgeleerd, geen mooi LinkedIn-pad",
    p2After: ".",
    p3: "Sinds 2018 werk ik aan mijn eigen audio-product. De eerste jaren gingen in concept-opbouw en eerste website-schetsen. Geen productie-code, wel het mentale model dat alles eronder schraagt. Daarna drie concept-pivots en meerdere herbouwde iteraties, met een productie-tier sinds 2024. Acht jaar tijd in één probleemruimte levert iets op wat je niet uit een tutorial leert: een gevoel voor welke abstracties houden en welke je zes maanden later weer afbreekt. Het product blijft onder NDA tot launch.",
    p4: "Wat dat alles oplevert: ik snap audio van binnen en buiten. De DSP, en ook hoe een producer ergens tegenaan loopt en wat een UI moet doen om niet in de weg te zitten. Diezelfde brede blik probeer ik in agent-werk te houden. Engine, infra en de gebruikerservaring tegelijk in beeld.",
  },
  now: {
    heading: "Wat er nu draait",
    p1: "ECHO is mijn eigen orchestrator. Lokaal, voice-first, met Obsidian als geheugen. Draait op mijn main werkplek (Ryzen 7 met RX 6650 XT, Windows) naast de HUD, ComfyUI en de rest van mijn dev-stack. Een oudere AMD-machine staat ernaast als Linux-testbed voor side-projects en experimenten. Zie de ECHO-page voor de architectuur en /patterns voor de interessante beslissingen.",
    p2: "Daarnaast: een product in stealth en een herbruikbare launch-methodiek. Beide nog niet publiek. Onder NDA praat ik er graag over.",
  },
  stack: {
    heading: "Stack",
    entries: [
      {
        heading: "Backend",
        body: "Python (FastAPI, async I/O), Rust voor realtime/FFI, TypeScript voor Node en Edge functions.",
      },
      {
        heading: "Audio / mobile",
        body: "Real-time audio engines in Rust met FFI, cross-platform Android (NDK, arm64 / armv7 / x86_64), React Native + Expo.",
      },
      {
        heading: "AI / agents",
        body: "Anthropic Claude (API + Code) primair, Perplexity voor onderzoek, ChatGPT voor prompt-werk. Lokaal Ollama (Qwen 2.5, Llama 3.2). agentskills.io-standaard (OpenClaw-compatibel), drie-tier fallback-patroon, ComfyUI.",
      },
      {
        heading: "Data",
        body: "Supabase (Postgres + RLS, EU-Frankfurt), Cloudflare R2, NDJSON-event-streams, lokale vault-patronen (Obsidian).",
      },
      {
        heading: "Tooling",
        body: "Claude Code, Cursor, Stripe, EAS Build, Sentry (EU), Vercel.",
      },
      {
        heading: "Hardware",
        body: "Main werkplek: Ryzen 7 3700X met RX 6650 XT (8GB), Windows. ECHO + HUD + ComfyUI + dev-stack draaien hier. Een tweede oudere AMD-machine fungeert als Linux-testbed. Voor zware inference val ik terug op remote-toegang tot meer GPU-power.",
      },
    ],
  },
  approach: {
    heading: "Hoe ik in projecten zit",
    marginNote: "(eerlijk = minder verrassingen later)",
    p1Before:
      "Eerlijk over wat werkt en wat niet. Geen “ship it in 2 weken”-beloftes als het 4 weken is. ",
    p1Highlight:
      "Liever vroeg een lelijke versie in productie dan een mooie roadmap die nooit gebouwd wordt",
    p1After: ".",
    p2: "Stack-breedte boven specialisme. Als ik in audio-DSP zit moet ik ook nog een Stripe-flow kunnen opzetten, en omgekeerd. Anders rammelt het systeem ergens aan de naden.",
    p3: "EU-eerst voor klantdata. Frankfurt-Supabase, EU-Sentry, een Verwerkingsregister dat ook echt bijgehouden wordt. Geen marketing-claim. Gewoon waar mijn gebruikers en ik wonen.",
  },
};

export default nl;
