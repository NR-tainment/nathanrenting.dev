import type { HomeDict } from "./types";

const nl: HomeDict = {
  meta: {
    title: "Nathan Renting — AI-agent & real-time audio developer",
  },
  hero: {
    availability: "Beschikbaar · 2-3 dagen per week ZZP",
    headlineLead: "Solo dev met ",
    headlineUnderline: "audio-achtergrond",
    headlineAfterDoodle: ". ",
    headlineAccent1: "Agent-systemen",
    headlineMid: ", ",
    headlineAccent2: "real-time audio",
    headlineTail: ", en de techniek eronder.",
    intro:
      "Twaalf jaar entertainment en audio-productie eerst, daarna steeds zwaarder op solo-engineering. Nu bouw ik agent-orchestratie, audio-engines en de techniek eronder. Solo, AI-augmented, vanuit Eindhoven.",
    ctaPrimary: "Bekijk het werk →",
    ctaSecondary: "Huur me in",
    marginNote: "(whiteboard-portfolio. patterns en projecten verderop)",
  },
  work: {
    heading: "Werk dat publiek mag",
    marginNote: "(rest is onder NDA. vraag gerust)",
    ndaNote: "Wat onder NDA staat kan ik op een call wel doornemen.",
  },
  projects: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mijn eigen agent-orchestrator. Lokaal, voice-first, met een Obsidian-vault als geheugen. Multi-brain routing, tool-dispatch, drie-tier AI-fallback. Draait dagelijks.",
      tags: ["Python · FastAPI", "Multi-brain routing", "agentskills.io", "Lokale LLMs"],
      status: "In productie",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Beveiligd video-platform voor therapeuten ↔ cliënten. Granulaire access-controls, GDPR-export, MFA. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "Auth + MFA", "GDPR"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority-platform op het snijvlak audio + AI + DSP + Android + toegankelijkheid. Real tools, deep docs. Astro + React + Tailwind v4.",
      tags: ["Astro", "Content platform", "Audio + AI"],
      status: "Live · in opbouw",
      externalUrl: "https://audiolab.tools",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Accessibility-app voor doven en slechthorende Android-gebruikers. Live captions + direction-of-arrival (alleen als betrouwbaar). Kotlin + Compose + GCC-PHAT.",
      tags: ["Android", "Kotlin", "Accessibility", "DSP"],
      status: "MVP scaffold",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "Van bewerkte foto naar online in 30 seconden. Lightroom plugin + Tauri-desktop + multi-agent publishing-pipeline voor fotografen.",
      tags: ["Tauri", "Lightroom plugin", "Multi-agent"],
      status: "Pre-dev",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart voor m'n kids. Eigen 3D-engine bovenop Three.js, AI-tegenstanders, powerups, chase-camera. Electron desktop-app.",
      tags: ["Electron", "Three.js", "Side-project"],
      status: "In ontwikkeling",
    },
  },
  stealth: {
    label: "Stealth",
    audio: {
      category: "Stealth · audio · 8 jaar",
      status: "Live · sinds 2018 · NDA",
      part1: "Een ",
      redacted1: "product voor creators",
      part2:
        ", gebouwd vanuit tien jaar audio-productie-ervaring. Sinds 2018 in ontwikkeling, productie-tier sinds 2024. Cross-platform mobile met een ",
      redacted2: "eigen audio-engine",
      part3: ". Live met early adopters.",
    },
    method: {
      category: "Stealth · methodiek",
      status: "In toepassing · NDA",
      part1: "Een herbruikbare ",
      redacted1: "launch-aanpak",
      part2:
        ", uitgekristalliseerd tijdens het bouwen van project één.",
      redacted2: " Tools, sequencing, en eigen content-pipeline.",
      part3: " In toepassing op het volgende project.",
    },
  },
  patterns: {
    heading: "Patterns",
    marginNote: "(lees wat je interesseert, geen huiswerk)",
    intro:
      "Engineering-beslissingen die ik onderweg ben tegengekomen. Korte writeups, ~3-5 min per stuk.",
    links: [
      { href: "/patterns/multi-brain-routing", label: "Multi-brain LLM routing" },
      { href: "/patterns/three-tier-fallback", label: "Three-tier AI fallback" },
      { href: "/patterns/real-time-audio-rust", label: "Real-time audio in Rust" },
      { href: "/patterns/cross-arch-android", label: "Cross-architecture Android builds" },
      { href: "/patterns/eu-first-infrastructure", label: "EU-first infrastructure" },
      { href: "/patterns/agentskills-implementation", label: "agentskills.io implementation" },
    ],
    allLink: "→ Alle patterns",
  },
  writing: {
    heading: "Uit de praktijk",
    marginNote: "(recente writeups, met datum)",
    intro:
      "Het meest recente werk dat ik openbaar heb opgeschreven — korte writeups uit echte projecten, niet uit een blogkalender.",
    items: [
      {
        href: "/patterns/multi-brain-routing",
        headline: "Multi-brain LLM routing",
        summary:
          "Goedkope heuristieken eerst, een LLM-classifier als fallback. Per request de juiste model-tier kiezen zonder kosten of kwaliteit te verbranden.",
        datePublished: "2026-06-20",
        dateLabel: "20 juni 2026",
      },
      {
        href: "/patterns/three-tier-fallback",
        headline: "Three-tier AI fallback",
        summary:
          "Claude → regels → hardcoded. Een degradatie-patroon dat het product werkend houdt als de API dat niet doet.",
        datePublished: "2026-06-20",
        dateLabel: "20 juni 2026",
      },
      {
        href: "/patterns/real-time-audio-rust",
        headline: "Real-time audio in Rust",
        summary:
          "Lock-free ring buffers, allocatie-vrije audiopaden, FFI-patronen. Waarom Rust de realtime-deadline overleeft.",
        datePublished: "2026-06-20",
        dateLabel: "20 juni 2026",
      },
    ],
    allLink: "→ Alle patterns",
  },
  bring: {
    heading: "Wat ik meeneem",
    highlight: "Vreemde combo",
    body:
      ": ruim tien jaar audio-DNA én iemand die agent-systemen dagelijks bouwt en gebruikt. Voor audio-producten zit ik in beide werelden tegelijk. Voor pure AI-engineering ben ik ingespeeld op de tooling. Geen opstart-tijd nodig. Geen team. Weinig drama.",
  },
  faqHeading: "Veelgestelde vragen",
  faq: [
    {
      q: "Wat doet Nathan Renting?",
      a: "Ik ben een solo developer uit Eindhoven die AI-agent systemen (LLM-orchestratie, tool-calling, RAG) en real-time audio engines bouwt — van prototype tot productie.",
    },
    {
      q: "Is Nathan beschikbaar voor freelance / ZZP-inhuur?",
      a: "Ja. Ik ben beschikbaar voor ZZP-inhuur, 2-3 dagen per week, EU remote. Ik zit in Eindhoven en ben heel NL bereikbaar voor een kickoff of kritische review.",
    },
    {
      q: "Welke technologieën gebruikt Nathan?",
      a: "Voor AI-agents pak ik Python, FastAPI, Claude API, MCP, LangGraph en RAG. Voor real-time audio: Rust, Kotlin, Android NDK en DSP. Voor product: Next.js, TypeScript en React Native.",
    },
    {
      q: "Wat kost het om Nathan in te huren?",
      a: "Indicatief €110-130 per uur. Projectprijzen houd ik bespreekbaar, afhankelijk van scope en duur.",
    },
    {
      q: "Werkt Nathan remote of on-site?",
      a: "Ik werk het liefst remote binnen de EU. On-site in Nederland kan voor een kickoff of een kritische review.",
    },
    {
      q: "Wat maakt Nathan's profiel uniek?",
      a: "Ik combineer 10+ jaar audio- en DSP-achtergrond met het dagelijks bouwen van agent-systemen. Voor audio-AI-producten zit ik in beide werelden tegelijk.",
    },
  ],
  cta: {
    body:
      "Open voor freelance / ZZP-inhuur, 2-3 dagen per week. Remote-preferred vanuit Eindhoven, heel NL bereikbaar voor kickoff of een kritische review.",
    link: "→ Hoe je me inhuurt",
  },
};

export default nl;
