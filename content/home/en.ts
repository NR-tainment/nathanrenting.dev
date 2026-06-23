import type { HomeDict } from "./types";

// Seeded from the retired app/en/page.tsx English summary. The EN home reuses
// the NL home's JSX/structure (same HomeDict shape); copy is the English
// equivalent. DE/FR are produced in the fan-out against this same contract.
const en: HomeDict = {
  meta: {
    title: "Nathan Renting — AI agent & real-time audio developer",
    description:
      "Solo dev from Eindhoven (NL): builds AI-agent systems (LLM orchestration, tool-calling, RAG) and real-time audio engines. Available for contract engineering (ZZP).",
  },
  hero: {
    availability: "Available · 2-3 days/week contract (ZZP, NL)",
    headlineLead: "Solo dev with an ",
    headlineUnderline: "audio background",
    headlineAfterDoodle: ". ",
    headlineAccent1: "Agent systems",
    headlineMid: ", ",
    headlineAccent2: "real-time audio",
    headlineTail: ", and the engineering underneath.",
    intro:
      "Twelve years in entertainment and audio production first, then increasingly serious on solo engineering. Now building agent orchestration, audio engines, and the supporting infrastructure. Solo, AI-augmented, from Eindhoven (NL).",
    ctaPrimary: "See the work →",
    ctaSecondary: "Hire me",
    marginNote: "(whiteboard portfolio. patterns and projects further down)",
  },
  work: {
    heading: "Work I can show",
    marginNote: "(the rest is under NDA. just ask)",
    ndaNote: "What's under NDA I'm happy to walk through on a call.",
  },
  projects: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "My own agent orchestrator. Local, voice-first, with an Obsidian vault as memory. Multi-brain routing, tool-dispatch, three-tier AI fallback. Daily use.",
      tags: ["Python · FastAPI", "Multi-brain routing", "agentskills.io", "Local LLMs"],
      status: "In production",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Secure video-sharing platform for therapists ↔ clients. Granular access-grants, GDPR data-export, MFA. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "Auth + MFA", "GDPR"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority platform at the intersection of audio + AI + DSP + Android + accessibility. Real tools, deep docs. Astro + React + Tailwind v4.",
      tags: ["Astro", "Content platform", "Audio + AI"],
      status: "Live · in progress",
      externalUrl: "https://audiolab.tools",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Accessibility app for deaf and hard-of-hearing Android users. Live captions + direction-of-arrival (only when reliable). Kotlin + Compose + GCC-PHAT.",
      tags: ["Android", "Kotlin", "Accessibility", "DSP"],
      status: "MVP scaffold",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "From edited photo to online in 30 seconds. Lightroom plugin + Tauri desktop + multi-agent publishing pipeline for photographers.",
      tags: ["Tauri", "Lightroom plugin", "Multi-agent"],
      status: "Pre-dev",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart for my kids. Own 3D engine on top of Three.js, AI opponents, powerups, chase camera. Electron desktop app.",
      tags: ["Electron", "Three.js", "Side-project"],
      status: "In development",
    },
  },
  stealth: {
    label: "Stealth",
    audio: {
      category: "Stealth · audio · 8 years",
      status: "Live · since 2018 · NDA",
      part1: "A ",
      redacted1: "product for creators",
      part2:
        ", built on ten years of audio-production experience. In development since 2018, production tier since 2024. Cross-platform mobile with a ",
      redacted2: "custom audio engine",
      part3: ". Live with early adopters.",
    },
    method: {
      category: "Stealth · method",
      status: "In use · NDA",
      part1: "A reusable ",
      redacted1: "launch approach",
      part2: ", crystallised while building project one.",
      redacted2: " Tools, sequencing, and a custom content pipeline.",
      part3: " Being applied to the next project.",
    },
  },
  patterns: {
    heading: "Patterns",
    marginNote: "(read what interests you, no homework)",
    intro:
      "Engineering decisions I hit along the way. Short writeups, ~3-5 min each.",
    links: [
      { href: "/patterns/multi-brain-routing", label: "Multi-brain LLM routing" },
      { href: "/patterns/three-tier-fallback", label: "Three-tier AI fallback" },
      { href: "/patterns/real-time-audio-rust", label: "Real-time audio in Rust" },
      { href: "/patterns/cross-arch-android", label: "Cross-architecture Android builds" },
      { href: "/patterns/eu-first-infrastructure", label: "EU-first infrastructure" },
      { href: "/patterns/agentskills-implementation", label: "agentskills.io implementation" },
    ],
    allLink: "→ All patterns",
  },
  bring: {
    heading: "What I bring",
    highlight: "Strange combo",
    body:
      ": over ten years of audio DNA and someone who builds and uses agent systems daily. For audio products I'm in both worlds at once. For pure AI engineering I'm fluent with the tooling. No ramp-up time. No team. Little drama.",
  },
  faqHeading: "Frequently asked questions",
  faq: [
    {
      q: "What does Nathan Renting do?",
      a: "I'm a solo developer from Eindhoven who builds AI-agent systems (LLM orchestration, tool-calling, RAG) and real-time audio engines — from prototype to production.",
    },
    {
      q: "Is Nathan available for freelance / contract work?",
      a: "Yes. I'm available for contract engineering (ZZP), 2-3 days/week, EU remote. I'm based in Eindhoven and reachable throughout NL for a kickoff or critical review.",
    },
    {
      q: "Which technologies does Nathan use?",
      a: "For AI agents I reach for Python, FastAPI, Claude API, MCP, LangGraph and RAG. For real-time audio: Rust, Kotlin, Android NDK and DSP. For product: Next.js, TypeScript and React Native.",
    },
    {
      q: "What does it cost to hire Nathan?",
      a: "Indicative €110-130 per hour. I keep project pricing negotiable depending on scope and duration.",
    },
    {
      q: "Does Nathan work remote or on-site?",
      a: "I prefer remote within the EU. On-site in the Netherlands works for a kickoff or a critical review.",
    },
    {
      q: "What makes Nathan's profile unique?",
      a: "I combine 10+ years of audio and DSP background with building agent systems daily. For audio-AI products I'm in both worlds at once.",
    },
  ],
  cta: {
    body:
      "Open for freelance / contract work (ZZP), 2-3 days/week. Remote-preferred from Eindhoven, reachable throughout NL for a kickoff or a critical review.",
    link: "→ How to hire me",
  },
};

export default en;
