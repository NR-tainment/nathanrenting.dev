import type { PatternsDict } from "./types";

// DE translation of the patterns index copy.
const de: PatternsDict = {
  meta: {
    title: "Patterns",
    description:
      "Engineering-Writeups zu konkreten Patterns: Multi-Brain-LLM-Routing, dreistufiges KI-Fallback, Echtzeit-Audio in Rust, architekturübergreifende Android-Builds, EU-first-Infrastruktur, agentskills.io-Umsetzung.",
  },
  h1: "Patterns",
  intro:
    "Engineering-Entscheidungen aus echter Arbeit. Jedes Writeup ist kurz (3–5 Min. Lesezeit), auf ein Pattern fokussiert und basiert auf Code, den ich tatsächlich ausgeliefert habe. Lies, was dich interessiert. Keine vorgegebene Reihenfolge.",
  marginNote: "(keine Hausaufgaben, nur Notizen aus der Praxis)",
  items: [
    {
      href: "/patterns/multi-brain-routing",
      title: "Multi-Brain-LLM-Routing",
      oneLiner:
        "Erst günstige Heuristiken, ein LLM-Classifier als Fallback. Wie man pro Request die richtige Modellstufe wählt, ohne Kosten oder Qualität zu verheizen.",
      tags: ["LLM", "Routing", "Kosten"],
    },
    {
      href: "/patterns/three-tier-fallback",
      title: "Dreistufiges KI-Fallback",
      oneLiner:
        "Claude → Regeln → hartcodiert. Ein Degradationsmuster, das das Produkt am Laufen hält, wenn die API es nicht tut.",
      tags: ["LLM", "Zuverlässigkeit"],
    },
    {
      href: "/patterns/real-time-audio-rust",
      title: "Echtzeit-Audio in Rust",
      oneLiner:
        "Lock-freie SPSC-Ringpuffer, allokationsfreie Audio-Pfade, FFI-Patterns. Warum Rust die Echtzeit-Deadline übersteht.",
      tags: ["Rust", "Audio DSP", "FFI"],
    },
    {
      href: "/patterns/cross-arch-android",
      title: "Architekturübergreifende Android-Builds",
      oneLiner:
        "Ein einziges APK für arm64/armv7/x86_64. Alignment-Bugs, NDK-Versionspinning, libc++_shared-Dubletten-Fallen.",
      tags: ["Android", "NDK", "Builds"],
    },
    {
      href: "/patterns/eu-first-infrastructure",
      title: "EU-first-Infrastruktur",
      oneLiner:
        "Warum die EU-Jurisdiktion zählt und wie man Supabase EU + Sentry EU + DSGVO-by-Design ohne nachträglichen Overhead stapelt.",
      tags: ["DSGVO", "Architektur"],
    },
    {
      href: "/patterns/agentskills-implementation",
      title: "agentskills.io-Umsetzung",
      oneLiner:
        "Warum eine Skills-Schicht über den Tools. SKILL.md-Format, progressive Disclosure, wann man von reinen Tools aufsteigt.",
      tags: ["Agents", "Anthropic"],
    },
  ],
};

export default de;
