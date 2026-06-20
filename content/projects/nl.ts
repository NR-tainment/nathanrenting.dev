import type { ProjectsDict } from "./types";

const nl: ProjectsDict = {
  meta: {
    title: "Werk",
    description:
      "ECHO — mijn persoonlijke agent-orchestrator. Andere projecten momenteel onder NDA.",
  },
  h1: "Werk",
  introBefore:
    "ECHO, TherapyVault en FamilyKart kan ik publiek laten zien. Mijn grootste project staat onder Stealth: een audio-product waar ik sinds 2018 aan bouw, door meerdere concept-pivots en platform-iteraties heen, met een productie-tier sinds 2024. Daar praat ik graag over op een call. Voor de engineering-patronen die overal terugkomen, zie ",
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
        "Beveiligd video-platform voor therapeuten en hun cliënten. Therapist uploadt sessies, granulaire access-controls per cliënt, GDPR-export en scheduled-deletion, MFA voor admins. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "TypeScript", "Auth + MFA", "GDPR", "Stripe / Mollie"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority-platform op het snijvlak van audio + AI + DSP + Android + toegankelijkheid. Real tools, deep docs, no slop. Astro + React + Tailwind v4, cluster-structuur (MixLab, HearLab, Engineering).",
      tags: ["Astro", "Content platform", "Audio + AI", "DSP"],
      status: "Live · in opbouw",
      externalUrl: "https://audiolab.tools",
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
    timelineAlt:
      "Hand-getekende tijdlijn op blackboard: 8 JAAR — ONE PROBLEM. Vijf fases tussen 2018 en nu: concept + visie (2018), eerste schetsen (2020), mobile pivot (2022), productie-tier (2024), live · stealth (nu).",
    timelineCaption: "Whiteboard-schets · acht jaar in één probleemruimte",
    marginNote: "(onder NDA. op een call kan ik meer kwijt)",
    audio: {
      category: "Stealth · audio · 8 jaar",
      status: "Live · sinds 2018 · NDA",
      part1: "Een ",
      redacted1: "product voor creators",
      part2:
        ", gebouwd vanuit ruim tien jaar audio-productie-ervaring. Sinds 2018: eerste jaren in concept-opbouw en platform-schetsen, daarna drie concept-pivots en meerdere herbouwde iteraties, met een productie-tier sinds 2024. Cross-platform mobile met een ",
      redacted2: "eigen audio-engine",
      part3: ", drie-tier AI-fallback, en een ",
      redacted3: "eigen sample-pipeline",
      part4:
        ". Live met een kleine groep early adopters, public launch in voorbereiding. EU-first stack, GDPR-by-design.",
    },
    method: {
      category: "Stealth · methodiek",
      status: "In toepassing · 2025-nu · NDA",
      part1: "Een herbruikbare ",
      redacted1: "launch-aanpak",
      part2:
        " voor indie- en stealth-products richting publieke release. Uitgekristalliseerd tijdens het eerste stealth-project. ",
      redacted2:
        "Tools, sequencing, eigen content-pipeline, social-syndication.",
      part3:
        " In toepassing op het volgende project. Meer dan een lijstje tactieken, minder dan een publiek framework.",
    },
    note: "Beide projecten kan ik op een call wel inhoudelijk doornemen. Klikt het, dan praten we verder onder MNDA.",
  },
};

export default nl;
