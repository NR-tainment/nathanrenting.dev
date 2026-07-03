import type { ProjectsDict } from "./types";

const en: ProjectsDict = {
  meta: {
    title: "Work",
    description:
      "ECHO — my personal agent orchestrator. AudioLaunch — mobile music studio, live in open beta.",
  },
  h1: "Work",
  introBefore:
    "ECHO, TherapyVault, AudioLaunch and FamilyKart are the ones I can show publicly. What's still under NDA: a reusable launch methodology, crystallised while building and launching AudioLaunch. I'm happy to walk you through it on a call. For the engineering patterns that keep recurring across all of them, see ",
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
    audiolaunch: {
      href: "/projects/audiolaunch",
      title: "AudioLaunch",
      oneLiner:
        "Mobile music studio (Studio) plus Resonara, a gamified world that teaches sound design as you play. Custom native Rust audio engine for low-latency DSP on Android (NDK + JNI + React Native FFI). Eight years solo-built, now in public open beta.",
      tags: ["React Native", "Rust · custom audio engine", "Android NDK", "Mobile DAW"],
      status: "Live · open beta",
      externalUrl: "https://audio-launch.com",
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
    marginNote: "(under NDA. I can say more on a call)",
    method: {
      category: "Stealth · methodology",
      status: "In use · 2025–now · NDA",
      part1: "A reusable ",
      redacted1: "launch approach",
      part2:
        " for indie and stealth products heading toward public release. Crystallized while building and launching AudioLaunch. ",
      redacted2:
        "Tools, sequencing, a custom content pipeline, social syndication.",
      part3:
        " Now being applied to the next project. More than a list of tactics, less than a public framework.",
    },
    note: "I'm happy to go through this project in detail on a call. If it clicks, we take it further under MNDA.",
  },
};

export default en;
