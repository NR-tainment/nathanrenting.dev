import type { ProjectsDict } from "./types";

const nl: ProjectsDict = {
  meta: {
    title: "Werk",
    description:
      "ECHO — mijn persoonlijke agent-orchestrator. AudioLaunch — mobiele muziekstudio, live in open beta.",
  },
  h1: "Werk",
  introBefore:
    "ECHO, TherapyVault, AudioLaunch en FamilyKart kan ik publiek laten zien. Wat nog onder NDA staat: een herbruikbare launch-methodiek, uitgekristalliseerd tijdens de AudioLaunch-launch. Daar praat ik graag over op een call. Voor de engineering-patronen die overal terugkomen, zie ",
  introLinkLabel: "/patterns",
  introAfter: ".",
  cards: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mijn persoonlijke agent-orchestrator. Multi-brain routing, tool-dispatch, vault-backed memory, lokale + cloud LLM-fallback. Solo gebouwd voor één gebruiker (mezelf), draait dagelijks.",
      tags: ["Python · FastAPI", "Multi-brain routing", "agentskills.io", "Lokale LLMs"],
      status: "In productie",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Beveiligd video-platform voor therapeuten en hun cliënten. De therapeut uploadt sessies, granulaire access-controls per cliënt, GDPR-export en geplande verwijdering, MFA voor admins. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "TypeScript", "Auth + MFA", "GDPR", "Stripe / Mollie"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority-platform op het snijvlak van audio + AI + DSP + Android + toegankelijkheid. Echte tools, diepgaande docs, geen flauwekul. Astro + React + Tailwind v4, cluster-structuur (MixLab, HearLab, Engineering).",
      tags: ["Astro", "Content platform", "Audio + AI", "DSP"],
      status: "Live · in opbouw",
      externalUrl: "https://audiolab.tools",
    },
    audiolaunch: {
      href: "/projects/audiolaunch",
      title: "AudioLaunch",
      oneLiner:
        "Mobiele muziekstudio (Studio) plus Resonara, een gamified wereld waarin je sound design leert spelenderwijs. Eigen native Rust audio-engine voor low-latency DSP op Android (NDK + JNI + React Native FFI). Acht jaar solo gebouwd, sinds kort in publieke open beta.",
      tags: ["React Native", "Rust · eigen audio-engine", "Android NDK", "Mobile DAW"],
      status: "Live · open beta",
      externalUrl: "https://audio-launch.com",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Accessibility-app voor doven en slechthorende Android-gebruikers. Live captions altijd zichtbaar; richting-hint van de spreker verschijnt alleen als betrouwbaar. Kotlin + Jetpack Compose + stereo AAudio + GCC-PHAT DoA.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Accessibility", "DSP"],
      status: "MVP scaffold · Phase 1",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "Van bewerkte foto naar online aanwezigheid binnen 30 seconden, voor professionele fotografen. Lightroom-plugin + Tauri-desktop + cloud-publishing-stack. Multi-agent architectuur (Vision / Copy / Publishing / Analytics).",
      tags: ["Tauri", "Lightroom plugin", "Multi-agent", "Photography"],
      status: "Pre-dev · vision locked",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart voor m'n kids. Eigen 3D-engine bovenop Three.js, AI-tegenstanders, powerups, chase-camera. Electron desktop-app. Side-project dat naast het serieuze werk loopt.",
      tags: ["Electron", "Three.js", "3D", "Side-project"],
      status: "In ontwikkeling",
    },
  },
  stealth: {
    label: "Stealth",
    marginNote: "(onder NDA. op een call kan ik meer kwijt)",
    method: {
      category: "Stealth · methodiek",
      status: "In toepassing · 2025-nu · NDA",
      part1: "Een herbruikbare ",
      redacted1: "launch-aanpak",
      part2:
        " voor indie- en stealth-products richting publieke release. Uitgekristalliseerd tijdens het bouwen en lanceren van AudioLaunch. ",
      redacted2:
        "Tools, sequencing, eigen content-pipeline, social-syndication.",
      part3:
        " In toepassing op het volgende project. Meer dan een lijstje tactieken, minder dan een publiek framework.",
    },
    note: "Dit project kan ik op een call wel inhoudelijk doornemen. Klikt het, dan praten we verder onder MNDA.",
  },
};

export default nl;
