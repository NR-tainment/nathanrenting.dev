import type { ProjectsDict } from "./types";

const de: ProjectsDict = {
  meta: {
    title: "Arbeit",
    description:
      "ECHO — mein persönlicher Agent-Orchestrator. Weitere Projekte derzeit unter NDA.",
  },
  h1: "Arbeit",
  introBefore:
    "ECHO, TherapyVault und FamilyKart kann ich öffentlich zeigen. Mein größtes Projekt steht unter Stealth: ein Audio-Produkt, an dem ich seit 2018 baue, durch mehrere Konzept-Pivots und Plattform-Iterationen hindurch, mit einem Produktions-Tier seit 2024. Darüber spreche ich gern in einem Call. Für die Engineering-Muster, die überall wiederkehren, siehe ",
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
    timelineAlt:
      "Handgezeichnete Zeitleiste auf einer Tafel: 8 JAHRE — ONE PROBLEM. Fünf Phasen zwischen 2018 und heute: Konzept + Vision (2018), erste Skizzen (2020), Mobile-Pivot (2022), Produktions-Tier (2024), live · stealth (jetzt).",
    timelineCaption: "Whiteboard-Skizze · acht Jahre in einem Problemraum",
    marginNote: "(unter NDA. in einem Call kann ich mehr sagen)",
    audio: {
      category: "Stealth · Audio · 8 Jahre",
      status: "Live · seit 2018 · NDA",
      part1: "Ein ",
      redacted1: "Produkt für Creators",
      part2:
        ", aufgebaut auf über zehn Jahren Audio-Produktionserfahrung. Seit 2018: die ersten Jahre im Konzeptaufbau und in Plattform-Skizzen, danach drei Konzept-Pivots und mehrere neu gebaute Iterationen, mit einem Produktions-Tier seit 2024. Cross-Platform-Mobile mit einer ",
      redacted2: "eigenen Audio-Engine",
      part3: ", dreistufigem AI-Fallback und einer ",
      redacted3: "eigenen Sample-Pipeline",
      part4:
        ". Live mit einer kleinen Gruppe von Early Adopters, Public Launch in Vorbereitung. EU-first-Stack, DSGVO-by-Design.",
    },
    method: {
      category: "Stealth · Methodik",
      status: "In Anwendung · 2025–heute · NDA",
      part1: "Ein wiederverwendbarer ",
      redacted1: "Launch-Ansatz",
      part2:
        " für Indie- und Stealth-Produkte auf dem Weg zum öffentlichen Release. Herauskristallisiert während des ersten Stealth-Projekts. ",
      redacted2:
        "Tools, Sequencing, eigene Content-Pipeline, Social-Syndication.",
      part3:
        " Aktuell in Anwendung auf das nächste Projekt. Mehr als eine Liste von Taktiken, weniger als ein öffentliches Framework.",
    },
    note: "Beide Projekte kann ich in einem Call inhaltlich durchgehen. Passt es, dann sprechen wir unter MNDA weiter.",
  },
};

export default de;
