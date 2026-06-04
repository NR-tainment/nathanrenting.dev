import type { Metadata } from "next";
import Link from "next/link";
import {
  SketchUnderline,
  MarkerHighlight,
  MarginNote,
  SectionReveal,
  ChalkDoodle,
  DrawnArrow,
} from "@/components/sketch";

export const metadata: Metadata = {
  title: "Nathan Renting — solo dev. English summary.",
  description:
    "Solo dev from Eindhoven (NL) with 12 years of entertainment and audio-production background. Builds agent systems, real-time audio, and supporting infrastructure. Available for contract engineering (ZZP).",
};

export default function EnglishSummary() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20 relative">
        <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
          <SketchUnderline seed={301}>
            Available — 2-3 days/week contract (ZZP, NL)
          </SketchUnderline>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50 leading-tight mb-6">
          Solo dev with an{" "}
          <SketchUnderline seed={303}>audio background</SketchUnderline>
          <ChalkDoodle type="waveform" inline className="ml-2 align-middle opacity-80" />
          . <span className="text-cyan-400">Agent systems</span>,{" "}
          <span className="text-cyan-400">real-time audio</span>, and the
          engineering underneath.
        </h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          Twelve years in entertainment and audio production first, then
          increasingly serious on solo engineering. Now building agent
          orchestration, audio engines, and the supporting infrastructure.
          Solo, AI-augmented, from Eindhoven (NL).
        </p>

        <MarginNote position="right" rotate={-3}>
          (the rest of the site is in Dutch — this page is the executive
          summary)
        </MarginNote>
      </section>

      <DrawnArrow className="mb-16" />

      {/* What I do */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="asterisk" className="opacity-60" />
          <SketchUnderline seed={307}>What I do</SketchUnderline>
        </h2>
        <ul className="space-y-3 text-zinc-300 leading-relaxed">
          <li>
            <strong className="text-zinc-100">Agent systems & multi-agent orchestration.</strong>{" "}
            Tool-dispatch, vault-backed memory, agentskills.io-compatible
            workflow layer (OpenClaw-compatible), three-tier AI fallback.
            Native to the Anthropic Claude stack.
          </li>
          <li>
            <strong className="text-zinc-100">Real-time audio engines.</strong>{" "}
            Rust + FFI, lock-free SPSC ring buffers, allocation-free audio
            paths, cross-platform Android (NDK). 10+ years background as
            an audio producer.
          </li>
          <li>
            <strong className="text-zinc-100">EU-first infrastructure.</strong>{" "}
            Supabase EU-Frankfurt, Sentry EU, GDPR-by-design data flows,
            DPA-chain discipline, Verwerkingsregister maintenance.
          </li>
          <li>
            <strong className="text-zinc-100">Cross-platform mobile.</strong>{" "}
            React Native + Expo, Android NDK with native code,
            cross-architecture builds (arm64 / armv7 / x86_64).
          </li>
        </ul>
      </SectionReveal>

      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* Selected work */}
      <SectionReveal className="mb-20 relative">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="star" className="opacity-60" />
          <SketchUnderline seed={313}>Selected work</SketchUnderline>
        </h2>

        <MarginNote position="left" rotate={2}>
          (deep-dives are in Dutch with English tech terms inline — readable)
        </MarginNote>

        <div className="space-y-5 text-zinc-300 leading-relaxed">
          <div>
            <Link
              href="/projects/echo"
              className="text-zinc-100 font-medium hover:text-cyan-400 transition-colors"
            >
              ECHO →
            </Link>{" "}
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 ml-1">
              in production
            </span>
            <p className="text-sm text-zinc-400 mt-1">
              Personal agent orchestrator. Multi-brain LLM routing,
              tool-dispatch, vault-backed memory, three-tier AI fallback.
              ~24+ Python modules + React HUD. Daily use.
            </p>
          </div>

          <div>
            <Link
              href="/projects/therapyvault"
              className="text-zinc-100 font-medium hover:text-cyan-400 transition-colors"
            >
              TherapyVault →
            </Link>{" "}
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 ml-1">
              v0.1 release candidate
            </span>
            <p className="text-sm text-zinc-400 mt-1">
              Secure video-sharing platform for therapists ↔ clients.
              Auth + MFA, GDPR data-export, signed-URL streaming with
              granular access-grants. Next.js 15 + Prisma + Cloudflare R2.
            </p>
          </div>

          <div>
            <Link
              href="/projects/photoflow"
              className="text-zinc-100 font-medium hover:text-cyan-400 transition-colors"
            >
              PhotoFlow →
            </Link>{" "}
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 ml-1">
              pre-dev · vision locked
            </span>
            <p className="text-sm text-zinc-400 mt-1">
              Lightroom plugin + Tauri desktop + multi-agent publishing
              pipeline for professional photographers. From edited photo
              to online presence in 30 seconds.
            </p>
          </div>

          <div>
            <Link
              href="/projects/familykart"
              className="text-zinc-100 font-medium hover:text-cyan-400 transition-colors"
            >
              FamilyKart →
            </Link>{" "}
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 ml-1">
              side-project
            </span>
            <p className="text-sm text-zinc-400 mt-1">
              Family-friendly kart-racing game. Electron + Three.js, own
              mini-engine, AI rubberbanding, chase camera, hand-built tracks.
            </p>
          </div>

          <div>
            <span className="text-zinc-100 font-medium">Stealth audio product</span>{" "}
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 ml-1">
              live · 8 years · NDA
            </span>
            <p className="text-sm text-zinc-400 mt-1">
              An audio product in development since 2018 — through three
              concept pivots and multiple platform iterations, with a
              production tier since 2024. Live with a small group of early
              adopters; public launch in preparation. EU-first stack,
              GDPR-by-design. Details under NDA — happy to discuss on a call.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs font-mono text-zinc-500">
          Engineering patterns extracted from the work:{" "}
          <Link href="/patterns" className="text-cyan-400 hover:text-cyan-300">
            /patterns →
          </Link>
        </p>
      </SectionReveal>

      <div className="flex justify-center my-12 opacity-40">
        <ChalkDoodle type="divider" color="#52525b" />
      </div>

      {/* Hire me */}
      <SectionReveal className="mb-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-3">
          <ChalkDoodle type="checkmark" className="opacity-60" />
          <SketchUnderline seed={319}>Hire me</SketchUnderline>
        </h2>

        <div className="border border-zinc-800 rounded-md divide-y divide-zinc-800 mb-6">
          <Row label="Availability">2-3 days per week. Open for new work.</Row>
          <Row label="Rate">
            <MarkerHighlight>€110-130/hr</MarkerHighlight>. Longer engagements
            negotiable.
          </Row>
          <Row label="Engagement">
            ZZP-inhuur via my Dutch eenmanszaak (sole proprietorship).
            NL-invoiced with VAT. Equivalent to contract / consultancy
            outside NL.
          </Row>
          <Row label="Location">
            Remote-preferred from Eindhoven (NL). Reachable in-person
            throughout NL for kick-off or critical reviews.
          </Row>
          <Row label="Stack">
            Python, Rust, TypeScript, React Native, agentskills.io-stack
            (OpenClaw-compatible · multi-model: Claude / Perplexity /
            ChatGPT / local), Supabase, Stripe.
          </Row>
          <Row label="Not for">
            Pure consulting without building. Generic CMS work. Fulltime
            employment.
          </Row>
        </div>

        <h3 className="text-zinc-100 font-semibold mb-3">How to start</h3>
        <ol className="list-decimal list-outside ml-6 text-zinc-300 space-y-2 text-sm">
          <li>
            <strong className="text-zinc-100">Send a brief.</strong> One
            paragraph: what the problem is, rough shape of what you need,
            timeline.
          </li>
          <li>
            <strong className="text-zinc-100">Quick call (~30 min).</strong>{" "}
            If it clicks, we scope. If it doesn&apos;t, I&apos;ll say so.
          </li>
          <li>
            <strong className="text-zinc-100">One paid week first</strong>{" "}
            for longer engagements — to verify the working rhythm before
            committing further.
          </li>
        </ol>

        <p className="mt-6 text-zinc-300">
          Mail is fastest:{" "}
          <a
            href="mailto:jdrenting@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
          >
            jdrenting@gmail.com
          </a>
          . Reply usually within one working day.
        </p>
      </SectionReveal>

      {/* Bottom CTA */}
      <section className="border-t border-zinc-800 pt-10">
        <p className="text-zinc-400 text-sm">
          The full site is in Dutch — project deep-dives keep English
          technical terms inline, so they&apos;re readable without Dutch.{" "}
          <Link
            href="/"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            → Dutch homepage
          </Link>
        </p>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 px-4 py-3">
      <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </div>
      <div className="text-zinc-200 text-sm">{children}</div>
    </div>
  );
}
