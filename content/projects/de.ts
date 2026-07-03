import type { ProjectsDict } from "./types";

const de: ProjectsDict = {
  meta: {
    title: "Arbeit",
    description:
      "ECHO — mein persönlicher Agent-Orchestrator. AudioLaunch — mobile Musikstudio-App, live in Open Beta.",
  },
  h1: "Arbeit",
  introBefore:
    "ECHO, TherapyVault, AudioLaunch und FamilyKart kann ich öffentlich zeigen. Was noch unter NDA steht: eine wiederverwendbare Launch-Methodik, herauskristallisiert beim Bau und Launch von AudioLaunch. Darüber spreche ich gern in einem Call. Für die Engineering-Muster, die überall wiederkehren, siehe ",
  introLinkLabel: "/patterns",
  introAfter: ".",
  cards: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mein persönlicher Agent-Orchestrator. Multi-Brain-Routing, Tool-Dispatch, Vault-gestützter Speicher, lokaler + Cloud-LLM-Fallback. Solo gebaut für einen einzigen Nutzer (mich), läuft täglich.",
      tags: ["Python · FastAPI", "Multi-Brain-Routing", "agentskills.io", "Lokale LLMs"],
      status: "In Produktion",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Sichere Video-Plattform für Therapeuten und ihre Klienten. Therapeuten laden Sitzungen hoch, granulare Zugriffskontrollen pro Klient, DSGVO-Export und geplante Löschung, MFA für Admins. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "TypeScript", "Auth + MFA", "DSGVO", "Stripe / Mollie"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority-Plattform an der Schnittstelle von Audio + AI + DSP + Android + Barrierefreiheit. Echte Tools, fundierte Doku, kein Geschwafel. Astro + React + Tailwind v4, Cluster-Struktur (MixLab, HearLab, Engineering).",
      tags: ["Astro", "Content-Plattform", "Audio + AI", "DSP"],
      status: "Live · im Aufbau",
      externalUrl: "https://audiolab.tools",
    },
    audiolaunch: {
      href: "/projects/audiolaunch",
      title: "AudioLaunch",
      oneLiner:
        "Mobile Musikstudio-App (Studio) plus Resonara, eine gamifizierte Welt, in der man Sound-Design spielend lernt. Eigene native Rust-Audio-Engine für Low-Latency-DSP auf Android (NDK + JNI + React Native FFI). Acht Jahre solo gebaut, seit Kurzem in öffentlicher Open Beta.",
      tags: ["React Native", "Rust · eigene Audio-Engine", "Android NDK", "Mobile DAW"],
      status: "Live · Open Beta",
      externalUrl: "https://audio-launch.com",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Barrierefreiheits-App für gehörlose und schwerhörige Android-Nutzer. Live-Untertitel immer sichtbar; ein Richtungshinweis zum Sprecher erscheint nur, wenn er zuverlässig ist. Kotlin + Jetpack Compose + Stereo-AAudio + GCC-PHAT DoA.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Barrierefreiheit", "DSP"],
      status: "MVP-Scaffold · Phase 1",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "Vom bearbeiteten Foto zur Online-Präsenz in unter 30 Sekunden, für professionelle Fotografen. Lightroom-Plugin + Tauri-Desktop + Cloud-Publishing-Stack. Multi-Agent-Architektur (Vision / Copy / Publishing / Analytics).",
      tags: ["Tauri", "Lightroom-Plugin", "Multi-Agent", "Fotografie"],
      status: "Pre-Dev · Vision steht",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart für meine Kinder. Eigene 3D-Engine auf Basis von Three.js, KI-Gegner, Power-ups, Chase-Kamera. Electron-Desktop-App. Ein Nebenprojekt, das parallel zur ernsten Arbeit läuft.",
      tags: ["Electron", "Three.js", "3D", "Nebenprojekt"],
      status: "In Entwicklung",
    },
  },
  stealth: {
    label: "Stealth",
    marginNote: "(unter NDA. in einem Call kann ich mehr sagen)",
    method: {
      category: "Stealth · Methodik",
      status: "In Anwendung · 2025–heute · NDA",
      part1: "Ein wiederverwendbarer ",
      redacted1: "Launch-Ansatz",
      part2:
        " für Indie- und Stealth-Produkte auf dem Weg zum öffentlichen Release. Herauskristallisiert beim Bau und Launch von AudioLaunch. ",
      redacted2:
        "Tools, Sequencing, eigene Content-Pipeline, Social-Syndication.",
      part3:
        " Aktuell in Anwendung auf das nächste Projekt. Mehr als eine Liste von Taktiken, weniger als ein öffentliches Framework.",
    },
    note: "Dieses Projekt kann ich in einem Call inhaltlich durchgehen. Passt es, dann sprechen wir unter MNDA weiter.",
  },
};

export default de;
