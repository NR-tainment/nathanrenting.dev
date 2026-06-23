import type { ProjectsDict } from "./types";

const en: ProjectsDict = {
  meta: {
    title: "Work",
    description:
      "ECHO — my personal agent orchestrator. Other projects currently under NDA.",
  },
  h1: "Work",
  introBefore:
    "ECHO, TherapyVault and FamilyKart are the ones I can show publicly. My biggest project is in Stealth: an audio product I've been building since 2018, through several concept pivots and platform iterations, with a production tier since 2024. I'm happy to walk you through it on a call. For the engineering patterns that keep recurring across all of them, see ",
  introLinkLabel: "/patterns",
  introAfter: ".",
  cards: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "My personal agent orchestrator. Multi-brain routing, tool dispatch, vault-backed memory, local + cloud LLM fallback. Built solo for a single user (me), runs every day.",
      tags: ["Python · FastAPI", "Multi-brain routing", "agentskills.io", "Local LLMs"],
      status: "In production",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Secure video platform for therapists and their clients. Therapists upload sessions, with granular per-client access controls, GDPR export and scheduled deletion, MFA for admins. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "TypeScript", "Auth + MFA", "GDPR", "Stripe / Mollie"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority platform at the intersection of audio + AI + DSP + Android + accessibility. Real tools, deep docs, no slop. Astro + React + Tailwind v4, cluster structure (MixLab, HearLab, Engineering).",
      tags: ["Astro", "Content platform", "Audio + AI", "DSP"],
      status: "Live · in progress",
      externalUrl: "https://audiolab.tools",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Accessibility app for deaf and hard-of-hearing Android users. Live captions always visible; a directional hint toward the speaker appears only when it's reliable. Kotlin + Jetpack Compose + stereo AAudio + GCC-PHAT DoA.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Accessibility", "DSP"],
      status: "MVP scaffold · Phase 1",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "From edited photo to online presence in under 30 seconds, for professional photographers. Lightroom plugin + Tauri desktop + cloud publishing stack. Multi-agent architecture (Vision / Copy / Publishing / Analytics).",
      tags: ["Tauri", "Lightroom plugin", "Multi-agent", "Photography"],
      status: "Pre-dev · vision locked",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart for my kids. Custom 3D engine on top of Three.js, AI opponents, power-ups, chase camera. Electron desktop app. A side project that runs alongside the serious work.",
      tags: ["Electron", "Three.js", "3D", "Side project"],
      status: "In development",
    },
  },
  stealth: {
    label: "Stealth",
    timelineAlt:
      "Hand-drawn timeline on a blackboard: 8 YEARS — ONE PROBLEM. Five phases between 2018 and now: concept + vision (2018), first sketches (2020), mobile pivot (2022), production tier (2024), live · stealth (now).",
    timelineCaption: "Whiteboard sketch · eight years in a single problem space",
    marginNote: "(under NDA. I can say more on a call)",
    audio: {
      category: "Stealth · audio · 8 years",
      status: "Live · since 2018 · NDA",
      part1: "A ",
      redacted1: "product for creators",
      part2:
        ", built on more than ten years of audio-production experience. Since 2018: the first years spent on concept work and platform sketches, then three concept pivots and several rebuilt iterations, with a production tier since 2024. Cross-platform mobile with a ",
      redacted2: "custom audio engine",
      part3: ", three-tier AI fallback, and a ",
      redacted3: "custom sample pipeline",
      part4:
        ". Live with a small group of early adopters, public launch in preparation. EU-first stack, GDPR by design.",
    },
    method: {
      category: "Stealth · methodology",
      status: "In use · 2025–now · NDA",
      part1: "A reusable ",
      redacted1: "launch approach",
      part2:
        " for indie and stealth products heading toward public release. Crystallized during the first stealth project. ",
      redacted2:
        "Tools, sequencing, a custom content pipeline, social syndication.",
      part3:
        " Now being applied to the next project. More than a list of tactics, less than a public framework.",
    },
    note: "I'm happy to go through both projects in detail on a call. If it clicks, we take it further under MNDA.",
  },
};

export default en;
