import type { Metadata } from "next";
import Link from "next/link";
import { MarginNote, SectionReveal } from "@/components/sketch";

export const metadata: Metadata = {
  title: "Patterns",
  description:
    "Engineering writeups on specific patterns: multi-brain LLM routing, three-tier AI fallback, real-time audio in Rust, cross-architecture Android, EU-first infrastructure, agentskills.io implementation.",
};

const PATTERNS = [
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
];

export default function PatternsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 relative">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">
        Patterns
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        Engineering decisions extracted from real work. Each writeup is short
        (3-5 min read), focused on one pattern, and grounded in code I
        actually shipped. Read what interests you — they don&apos;t need to be
        read in order.
      </p>

      <MarginNote position="right" rotate={-3}>
        (no homework, just notes from the trenches)
      </MarginNote>

      <SectionReveal>
        <div className="grid gap-4">
          {PATTERNS.map((p, i) => (
            <SectionReveal key={p.href} delay={i * 0.05}>
              <Link
                href={p.href}
                className="group block border border-zinc-800 rounded-md p-6 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {p.oneLiner}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
