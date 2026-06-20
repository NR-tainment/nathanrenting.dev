import type { AiAgentsDict } from "./types";

const en: AiAgentsDict = {
  meta: {
    title: "Building AI agents || freelance, Netherlands and EU remote",
    description:
      "AI agent developer for SMEs. LLM orchestration, tool-calling, RAG and the Claude API. Production agents from prompt to a working part of your product. Freelance hire, Eindhoven and EU remote.",
  },
  eyebrow: "Service · freelance AI engineer",
  h1Lead: "Building AI agents. ",
  h1Accent: "Production || not demo",
  h1Tail: ".",
  intro:
    "I build AI agent systems that actually run || end-to-end. LLM orchestration, tool-calling, RAG, and the integration into your existing stack. Solo, from Eindhoven, available 2-3 days a week for clients in the Netherlands and the EU.",
  ctaPrimary: "Book a call →",
  ctaSecondary: "See ECHO as a reference",
  help: {
    heading: "What I help with",
    lead: "The projects where I add the most value:",
    bullets: [
      {
        strong: "Standing up an agent from scratch.",
        body: "LLM orchestration || tool-calling || memory layer || the whole architecture. Not a chatbot that only talks, but an agent that gets tasks done and picks up where you left off yesterday.",
      },
      {
        strong: "Improving an existing LLM integration.",
        body: "Routing between models, lower costs, lower latency, higher reliability. Often with multi-tier fallback and local models for the cheap queries.",
      },
      {
        strong: "Setting up RAG on your own documents.",
        body: 'Embeddings, chunking, retrieval strategy, evaluation. No generic "load and chat" || configured for your corpus and your questions.',
      },
      {
        strong: "Claude API integration.",
        body: "Tool-use, MCP servers, streaming, prompt caching. For teams that want to go from a prototype to production without running into the usual pitfalls.",
      },
      {
        strong: "Workflow automation with agents.",
        body: "SDR agents, support flows, invoice processing, content pipelines. With the right guardrails and monitoring so it doesn't quietly break.",
      },
    ],
  },
  stack: {
    heading: "The stack I reach for",
    leadHighlight: "Stack follows the problem",
    leadAfter:
      ", but this is what I touch most in practice for agent work:",
    rows: [
      {
        label: "LLM",
        body: "Anthropic Claude (Sonnet || Haiku || Opus). Local Ollama (Qwen 2.5, Llama 3.2) for cheap routes and offline fallback.",
      },
      {
        label: "Backend",
        body: "Python and FastAPI. Async I/O || tool registry || streaming. Rust where latency matters.",
      },
      {
        label: "Tooling",
        body: "Tool-calling || MCP || the agentskills.io pattern (OpenClaw-compatible). Multi-tier fallback for production reliability.",
      },
      {
        label: "Memory",
        body: "Obsidian vault as a context repository (Letta-style), ADD-only extraction, optional Qdrant for vector recall.",
      },
      {
        label: "Infra",
        body: "Supabase EU || Cloudflare R2 || Sentry EU || Stripe. Vercel or a self-hosted VPS with Coolify when it fits.",
      },
      {
        label: "Not",
        body: "No vendor lock-in without a reason. No LangChain spaghetti. No agent framework when 100 lines of Python will do.",
      },
    ],
  },
  proof: {
    heading: "Proof || ECHO",
    marginNote: "(no pitch deck || live in a call)",
    p1: "I don't only build for clients || I build for myself. ECHO is my own agent orchestrator that runs on my desk every day. Voice-first, routed between local Ollama and Claude, its own memory in an Obsidian vault, a live HUD with system stats. Ten years of audio DNA underneath for the voice layer.",
    p2Before: "What ECHO proves for client work: ",
    p2Highlight:
      "I know where agents break in production, and how to prevent it",
    p2After:
      ". The architecture choices you make early (memory layer, routing, tool registry, fallback strategy) decide whether you're still happy with the codebase six months from now || or whether you start over.",
    link: "→ Read about ECHO",
  },
  forWho: {
    heading: "Who this works best for",
    bullets: [
      {
        strong: "SaaS companies",
        body: " that want to get an AI feature into production without hiring a permanent team. One or two sprints from me is often enough to get it working.",
      },
      {
        strong: "SMEs with internal automation.",
        body: " Agents for support, sales development, invoice processing, content flows. Work that otherwise stays on the shelf because there's no team for it.",
      },
      {
        strong: "Solo founders and small teams",
        body: " that want the AI layer under their product, but would rather not figure out the whole LLM economy themselves.",
      },
    ],
  },
  how: {
    heading: "How it works",
    marginNote: "(honest = fewer surprises later)",
    steps: [
      {
        strong: "A short email or message.",
        body: "What the problem is, a rough shape of what you're after, your time horizon. One paragraph is enough.",
      },
      {
        strong: "A 30-minute call.",
        body: "If it clicks, we scope it. If it doesn't, I'll tell you that too. I'll show ECHO live if you want.",
      },
      {
        strong: "One paid week first.",
        body: "For longer engagements: one week of work to check the rhythm before we go further.",
      },
    ],
  },
  cta: {
    heading: "Ready to start?",
    body: "Rate, availability and the form are on the hire page. Available for clients in the Netherlands and EU remote, 2-3 days a week, from Eindhoven.",
    link: "→ To /hire (rate + contact)",
  },
};

export default en;
