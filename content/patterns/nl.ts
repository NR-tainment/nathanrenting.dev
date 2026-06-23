import type { PatternsDict } from "./types";

const nl: PatternsDict = {
  meta: {
    title: "Patterns",
    description:
      "Engineering writeups on specific patterns: multi-brain LLM routing, three-tier AI fallback, real-time audio in Rust, cross-architecture Android, EU-first infrastructure, agentskills.io implementation.",
  },
  h1: "Patterns",
  intro:
    "Engineering-beslissingen die uit echt werk komen. Elke writeup is kort (3-5 min lezen), gaat over één patroon, en staat op code die ik daadwerkelijk heb uitgebracht. Lees wat je interesseert. Er is geen leesvolgorde.",
  marginNote: "(geen huiswerk, gewoon aantekeningen uit de praktijk)",
  items: [
    {
      href: "/patterns/multi-brain-routing",
      title: "Multi-brain LLM routing",
      oneLiner:
        "Eerst goedkope heuristieken, LLM-classifier als fallback. Hoe je per request de juiste model-tier kiest zonder kosten of kwaliteit te verbranden.",
      tags: ["LLM", "Routing", "Cost"],
    },
    {
      href: "/patterns/three-tier-fallback",
      title: "Three-tier AI fallback",
      oneLiner:
        "Claude → regels → hardcoded. Een degradatie-patroon dat het product werkend houdt als de API dat niet doet.",
      tags: ["LLM", "Reliability"],
    },
    {
      href: "/patterns/real-time-audio-rust",
      title: "Real-time audio in Rust",
      oneLiner:
        "Lock-free SPSC ring buffers, allocatie-vrije audiopaden, FFI-patronen. Waarom Rust de realtime-deadline overleeft.",
      tags: ["Rust", "Audio DSP", "FFI"],
    },
    {
      href: "/patterns/cross-arch-android",
      title: "Cross-architecture Android builds",
      oneLiner:
        "Eén APK over arm64/armv7/x86_64. Alignment-bugs, NDK-versies vastpinnen, libc++_shared dubbele-kopie-valkuilen.",
      tags: ["Android", "NDK", "Builds"],
    },
    {
      href: "/patterns/eu-first-infrastructure",
      title: "EU-first infrastructure",
      oneLiner:
        "Waarom EU-jurisdictie ertoe doet en hoe je Supabase EU + Sentry EU + GDPR-by-design stapelt zonder bolt-on overhead.",
      tags: ["GDPR", "Architecture"],
    },
    {
      href: "/patterns/agentskills-implementation",
      title: "agentskills.io implementation",
      oneLiner:
        "Waarom een skills-laag boven tools. SKILL.md-formaat, progressive disclosure, wanneer je van rauwe tools af stapt.",
      tags: ["Agents", "Anthropic"],
    },
  ],
};

export default nl;
