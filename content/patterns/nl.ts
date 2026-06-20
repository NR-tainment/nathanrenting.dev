import type { PatternsDict } from "./types";

// NOTE: The source site's patterns index copy is authored in English (the
// articles use English-inline-tech-term Dutch prose). Kept verbatim as the NL
// source so the live output stays byte-stable; translators localise per locale.
const nl: PatternsDict = {
  meta: {
    title: "Patterns",
    description:
      "Engineering writeups on specific patterns: multi-brain LLM routing, three-tier AI fallback, real-time audio in Rust, cross-architecture Android, EU-first infrastructure, agentskills.io implementation.",
  },
  h1: "Patterns",
  intro:
    "Engineering decisions extracted from real work. Each writeup is short (3-5 min read), focused on one pattern, and grounded in code I actually shipped. Read what interests you. No reading order.",
  marginNote: "(no homework, just notes from the trenches)",
  items: [
    {
      href: "/patterns/multi-brain-routing",
      title: "Multi-brain LLM routing",
      oneLiner:
        "Cheap heuristics first, LLM classifier as fallback. How to pick the right model tier per request without burning cost or quality.",
      tags: ["LLM", "Routing", "Cost"],
    },
    {
      href: "/patterns/three-tier-fallback",
      title: "Three-tier AI fallback",
      oneLiner:
        "Claude → rules → hardcoded. A degradation pattern that keeps the product working when the API doesn't.",
      tags: ["LLM", "Reliability"],
    },
    {
      href: "/patterns/real-time-audio-rust",
      title: "Real-time audio in Rust",
      oneLiner:
        "Lock-free SPSC ring buffers, allocation-free audio paths, FFI patterns. Why Rust survives the real-time deadline.",
      tags: ["Rust", "Audio DSP", "FFI"],
    },
    {
      href: "/patterns/cross-arch-android",
      title: "Cross-architecture Android builds",
      oneLiner:
        "Single APK across arm64/armv7/x86_64. Alignment bugs, NDK version pinning, libc++_shared dupe traps.",
      tags: ["Android", "NDK", "Builds"],
    },
    {
      href: "/patterns/eu-first-infrastructure",
      title: "EU-first infrastructure",
      oneLiner:
        "Why EU jurisdiction matters and how to stack Supabase EU + Sentry EU + GDPR-by-design without bolt-on overhead.",
      tags: ["GDPR", "Architecture"],
    },
    {
      href: "/patterns/agentskills-implementation",
      title: "agentskills.io implementation",
      oneLiner:
        "Why a skills layer above tools. SKILL.md format, progressive disclosure, when to graduate from raw tools.",
      tags: ["Agents", "Anthropic"],
    },
  ],
};

export default nl;
