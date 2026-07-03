import type { HomeDict } from "./types";

// DE home dictionary. Produced in the fan-out against the same HomeDict
// contract as NL (source) and EN (reference). Same JSX/structure — only the
// human-readable strings differ.
const de: HomeDict = {
  meta: {
    title: "Nathan Renting — Entwickler für KI-Agenten & Echtzeit-Audio",
    description:
      "Solo-Dev aus Eindhoven (NL): baut KI-Agenten-Systeme (LLM-Orchestrierung, Tool-Calling, RAG) und Echtzeit-Audio-Engines. Verfügbar für freiberufliche Engineering-Projekte (Freelancer).",
  },
  hero: {
    availability: "Verfügbar · 2-3 Tage/Woche freiberuflich",
    headlineLead: "Solo-Dev mit ",
    headlineUnderline: "Audio-Hintergrund",
    headlineAfterDoodle: ". ",
    headlineAccent1: "Agentensysteme",
    headlineMid: ", ",
    headlineAccent2: "Echtzeit-Audio",
    headlineTail: ", und die Technik darunter.",
    intro:
      "Erst zwölf Jahre Entertainment und Audio-Produktion, dann zunehmend ernsthaft im Solo-Engineering. Heute baue ich Agenten-Orchestrierung, Audio-Engines und die Technik darunter. Solo, KI-gestützt, aus Eindhoven.",
    ctaPrimary: "Zu den Arbeiten →",
    ctaSecondary: "Engagiere mich",
    marginNote: "(Whiteboard-Portfolio. Patterns und Projekte weiter unten)",
  },
  work: {
    heading: "Arbeiten, die ich zeigen darf",
    marginNote: "(der Rest steht unter NDA. frag einfach)",
    ndaNote: "Was unter NDA fällt, gehe ich gerne in einem Call mit dir durch.",
  },
  projects: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mein eigener Agenten-Orchestrator. Lokal, voice-first, mit einem Obsidian-Vault als Gedächtnis. Multi-Brain-Routing, Tool-Dispatch, dreistufiges AI-Fallback. Täglich im Einsatz.",
      tags: ["Python · FastAPI", "Multi-Brain-Routing", "agentskills.io", "Lokale LLMs"],
      status: "In Produktion",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Sichere Video-Plattform für Therapeuten ↔ Klienten. Granulare Zugriffsrechte, DSGVO-Export, MFA. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "Auth + MFA", "DSGVO"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Authority-Plattform an der Schnittstelle von Audio + AI + DSP + Android + Barrierefreiheit. Echte Tools, fundierte Docs. Astro + React + Tailwind v4.",
      tags: ["Astro", "Content-Plattform", "Audio + AI"],
      status: "Live · im Aufbau",
      externalUrl: "https://audiolab.tools",
    },
    audiolaunch: {
      href: "/projects/audiolaunch",
      title: "AudioLaunch",
      oneLiner:
        "Mobile Musikstudio-App + Resonara (gamifiziertes Sound-Design). Eigene Rust-Audio-Engine für Low-Latency-DSP auf Android. Acht Jahre solo gebaut, jetzt in öffentlicher Open Beta.",
      tags: ["React Native", "Rust-Audio-Engine", "Mobile DAW"],
      status: "Live · Open Beta",
      externalUrl: "https://audio-launch.com",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Barrierefreiheits-App für gehörlose und schwerhörige Android-Nutzer. Live-Untertitel + Richtungsbestimmung (nur wenn zuverlässig). Kotlin + Compose + GCC-PHAT.",
      tags: ["Android", "Kotlin", "Barrierefreiheit", "DSP"],
      status: "MVP-Scaffold",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "Vom bearbeiteten Foto in 30 Sekunden online. Lightroom-Plugin + Tauri-Desktop + Multi-Agent-Publishing-Pipeline für Fotografen.",
      tags: ["Tauri", "Lightroom-Plugin", "Multi-Agent"],
      status: "Pre-Dev",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart für meine Kids. Eigene 3D-Engine auf Three.js, KI-Gegner, Powerups, Verfolger-Kamera. Electron-Desktop-App.",
      tags: ["Electron", "Three.js", "Side-Project"],
      status: "In Entwicklung",
    },
  },
  stealth: {
    label: "Stealth",
    method: {
      category: "Stealth · Methodik",
      status: "In Anwendung · NDA",
      part1: "Ein wiederverwendbarer ",
      redacted1: "Launch-Ansatz",
      part2: ", herauskristallisiert beim Bau und Launch von AudioLaunch.",
      redacted2: " Tools, Sequencing und eine eigene Content-Pipeline.",
      part3: " Wird auf das nächste Projekt angewendet.",
    },
  },
  patterns: {
    heading: "Patterns",
    marginNote: "(lies, was dich interessiert, keine Hausaufgaben)",
    intro:
      "Engineering-Entscheidungen, die mir unterwegs begegnet sind. Kurze Writeups, ~3-5 Min. pro Stück.",
    links: [
      { href: "/patterns/multi-brain-routing", label: "Multi-Brain LLM-Routing" },
      { href: "/patterns/three-tier-fallback", label: "Dreistufiges AI-Fallback" },
      { href: "/patterns/real-time-audio-rust", label: "Echtzeit-Audio in Rust" },
      { href: "/patterns/cross-arch-android", label: "Cross-Architecture Android-Builds" },
      { href: "/patterns/eu-first-infrastructure", label: "EU-First-Infrastruktur" },
      { href: "/patterns/agentskills-implementation", label: "agentskills.io-Implementierung" },
    ],
    allLink: "→ Alle Patterns",
  },
  writing: {
    heading: "Aus der Praxis",
    marginNote: "(neueste Writeups, mit Datum)",
    intro:
      "Die jüngsten Arbeiten, die ich öffentlich aufgeschrieben habe — kurze Writeups aus echten Projekten, nicht aus einem Redaktionskalender.",
    items: [
      {
        href: "/patterns/multi-brain-routing",
        headline: "Multi-Brain-LLM-Routing",
        summary:
          "Erst günstige Heuristiken, ein LLM-Classifier als Fallback. Pro Request die richtige Modellstufe wählen, ohne Kosten oder Qualität zu verheizen.",
        datePublished: "2026-06-20",
        dateLabel: "20. Juni 2026",
      },
      {
        href: "/patterns/three-tier-fallback",
        headline: "Dreistufiges KI-Fallback",
        summary:
          "Claude → Regeln → hartcodiert. Ein Degradationsmuster, das das Produkt am Laufen hält, wenn die API es nicht tut.",
        datePublished: "2026-06-20",
        dateLabel: "20. Juni 2026",
      },
      {
        href: "/patterns/real-time-audio-rust",
        headline: "Echtzeit-Audio in Rust",
        summary:
          "Lock-freie Ringpuffer, allokationsfreie Audio-Pfade, FFI-Patterns. Warum Rust die Echtzeit-Deadline übersteht.",
        datePublished: "2026-06-20",
        dateLabel: "20. Juni 2026",
      },
    ],
    allLink: "→ Alle Patterns",
  },
  bring: {
    heading: "Was ich mitbringe",
    highlight: "Seltsame Kombi",
    body:
      ": über zehn Jahre Audio-DNA und jemand, der Agentensysteme täglich baut und nutzt. Bei Audio-Produkten bin ich in beiden Welten gleichzeitig zu Hause. Für reines AI-Engineering bin ich mit dem Tooling bestens vertraut. Keine Einarbeitungszeit nötig. Kein Team. Wenig Drama.",
  },
  faqHeading: "Häufig gestellte Fragen",
  faq: [
    {
      q: "Was macht Nathan Renting?",
      a: "Ich bin ein Solo-Entwickler aus Eindhoven, der KI-Agenten-Systeme (LLM-Orchestrierung, Tool-Calling, RAG) und Echtzeit-Audio-Engines baut — vom Prototyp bis zur Produktion.",
    },
    {
      q: "Ist Nathan für freiberufliche Aufträge verfügbar?",
      a: "Ja. Ich bin verfügbar für freiberufliches Engineering, 2-3 Tage pro Woche, EU-remote. Ich sitze in Eindhoven und bin in den ganzen Niederlanden erreichbar für einen Kickoff oder ein kritisches Review.",
    },
    {
      q: "Welche Technologien nutzt Nathan?",
      a: "Für KI-Agenten greife ich zu Python, FastAPI, Claude API, MCP, LangGraph und RAG. Für Echtzeit-Audio: Rust, Kotlin, Android NDK und DSP. Für Produkt: Next.js, TypeScript und React Native.",
    },
    {
      q: "Was kostet es, Nathan zu engagieren?",
      a: "Richtwert €110-130 pro Stunde. Projektpreise halte ich verhandelbar, abhängig von Umfang und Dauer.",
    },
    {
      q: "Arbeitet Nathan remote oder vor Ort?",
      a: "Ich arbeite am liebsten remote innerhalb der EU. Vor Ort in den Niederlanden geht für einen Kickoff oder ein kritisches Review.",
    },
    {
      q: "Was macht Nathans Profil einzigartig?",
      a: "Ich kombiniere über 10 Jahre Audio- und DSP-Hintergrund mit dem täglichen Bau von Agentensystemen. Bei Audio-KI-Produkten bin ich in beiden Welten gleichzeitig zu Hause.",
    },
  ],
  cta: {
    body:
      "Offen für freiberufliche Aufträge, 2-3 Tage pro Woche. Remote bevorzugt aus Eindhoven, in den ganzen Niederlanden erreichbar für einen Kickoff oder ein kritisches Review.",
    link: "→ Wie du mich engagierst",
  },
};

export default de;
