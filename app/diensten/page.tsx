import type { Metadata } from "next";
import Link from "next/link";
import { MarginNote, SectionReveal, ChalkDoodle, SketchUnderline } from "@/components/sketch";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Freelance AI- en software-engineering vanuit Eindhoven. Agent-systemen bouwen, LLM-integratie, Claude API, RAG en EU-compliante infra. ZZP-inhuur, 2-3 dagen per week.",
};

const DIENSTEN = [
  {
    href: "/diensten/ai-agents-bouwen-nederland",
    title: "AI agents bouwen",
    oneLiner:
      "Productie-agents van prompt tot werkend onderdeel van je product. LLM-orchestratie, tool-calling, RAG. ECHO als live referentie.",
    tags: ["AI Agents", "LLM", "Python"],
  },
];

export default function DienstenPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 relative">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4 flex items-center gap-4">
        <ChalkDoodle type="asterisk" className="opacity-60" />
        Diensten
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        Wat ik freelance doe || in concrete vorm. Per dienst één pagina,
        zodat je snel ziet of het past. Voor de afspraak en het tarief: zie{" "}
        <Link href="/hire" className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors">
          /hire
        </Link>
        .
      </p>

      <MarginNote position="right" rotate={-3}>
        (één lijst, geen sales-funnel)
      </MarginNote>

      <SectionReveal>
        <div className="grid gap-4">
          {DIENSTEN.map((d, i) => (
            <SectionReveal key={d.href} delay={i * 0.05}>
              <Link
                href={d.href}
                className="group block border border-zinc-800 rounded-md p-6 hover:border-cyan-700 hover:bg-zinc-900/40 transition-all"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {d.oneLiner}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
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

      <SectionReveal className="mt-16">
        <p className="text-sm text-zinc-500 italic">
          Meer diensten komen er || LLM-integratie, RAG, Claude API. Voor nu:
          één pagina af, één per week erbij. Sneller maakt het niet beter.
        </p>
      </SectionReveal>
    </div>
  );
}
