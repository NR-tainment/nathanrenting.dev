import type { HireDict } from "./types";

const en: HireDict = {
  meta: {
    title: "Hire me",
    description:
      "Freelance hire via sole proprietorship, 2-3 days/week, €110-130/hr. Agent systems, AI automation, audio/mobile, EU-compliant infra. Also open to a full-time role.",
  },
  h1: "Hire me",
  availability: "Available · 2-3 days per week · open to full-time",
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
        body: "Freelance hire via my sole proprietorship. NL invoices with VAT. I'm also open to a full-time role at the right team.",
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
        body: "Pure consulting without building. Generic CMS builds.",
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
  form: {
    nameLabel: "name",
    namePlaceholder: "what's your name?",
    emailLabel: "email",
    emailPlaceholder: "so I can reply",
    messageLabel: "what you need",
    messagePlaceholder: "short: what the problem is, rough shape of what you're after, timeline...",
    honeypot: "Website (leave empty)",
    submit: "send →",
    submitting: "sending...",
    altMail: "or email",
    altMailLink: "directly",
    successTitle: "✓ received",
    successBody: "I usually reply within one working day.",
    urgent: "If it's urgent:",
    errorMail: "Or email directly:",
    errors: {
      rateLimited: "Too many attempts. Wait a moment and try again.",
      invalid: "Please check your name, email and message (at least 10 characters).",
      failed: "Sending failed.",
    },
  },
};

export default en;
