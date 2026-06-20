import type { HireDict } from "./types";

const en: HireDict = {
  meta: {
    title: "Hire me",
    description:
      "Freelance hire via sole proprietorship, 2-3 days/week, €110-130/hr. Agent systems, AI automation, audio/mobile, EU-compliant infra.",
  },
  h1: "Hire me",
  availability: "Available · 2-3 days per week",
  what: {
    heading: "What I do for clients",
    lead: "Technical work where the team is small, or where the team is basically just you. The shape I work best in:",
    bullets: [
      {
        strong: "Setting up or extending agent systems.",
        body: "Tool dispatch, the agentskills.io pattern, vault-backed memory, Claude tooling that actually stays maintainable.",
      },
      {
        strong: "AI automation.",
        body: "Internal tooling, integrations, ERP extensions, agent-augmented ops. Python-first.",
      },
      {
        strong: "Real-time audio and mobile.",
        body: "Rust audio engines with FFI, cross-platform Android (NDK), React Native with payment flows. Ten-plus years as an audio producer, so I also get what a musician or producer expects on the UI side.",
      },
      {
        strong: "EU-compliant infrastructure.",
        body: "Supabase EU, Sentry EU, processing-register discipline, DPA practice.",
      },
    ],
  },
  practical: {
    heading: "Practical",
    marginNote: "(this table is the deal. no fine print)",
    rows: [
      {
        label: "Availability",
        body: "2-3 days per week. A slot is currently open.",
      },
      {
        label: "Rate",
        highlight: "€110-130/hr freelance",
        body: ". Longer engagements negotiable with a discount.",
      },
      {
        label: "Engagement model",
        body: "Freelance hire via my sole proprietorship. NL invoices with VAT.",
      },
      {
        label: "Location",
        body: "Remote-preferred from Eindhoven. All of the Netherlands reachable for a kickoff or a critical review.",
      },
      {
        label: "Stack",
        body: "Python, Rust, TypeScript, React Native, agentskills.io stack (OpenClaw-compatible · multi-model: Claude / Perplexity / ChatGPT / local), Supabase, Stripe.",
      },
      {
        label: "What I don't do",
        body: "Pure consulting without building. Generic CMS builds. Full-time staffing placement.",
      },
    ],
  },
  start: {
    heading: "How to start",
    steps: [
      {
        strong: "Drop me a line.",
        body: "What the problem is, the rough shape of what you're after, your timeline. One paragraph is enough.",
      },
      {
        strong: "Short call (~30 min).",
        body: "If it clicks, we scope it. If it doesn't, I'll say so too.",
      },
      {
        strong: "One paid week first.",
        body: "For longer engagements: one week of work to check the rhythm before we commit further.",
      },
    ],
  },
  contact: {
    heading: "Drop me a line",
    body: "One paragraph is enough. What the problem is, the rough shape of what you're after, your timeline. I usually reply within one working day.",
    marginNote: "(everything above is how I work. no sales pitch)",
  },
};

export default en;
