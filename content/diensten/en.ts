import type { DienstenDict } from "./types";

const en: DienstenDict = {
  meta: {
    title: "Services",
    description:
      "Freelance AI and software engineering from Eindhoven. Building agent systems, LLM integration, Claude API, RAG and EU-compliant infra. Freelance hire, 2-3 days per week.",
  },
  h1: "Services",
  introBefore:
    "What I do freelance — in concrete terms. One page per service, so you can quickly see if it fits. For the arrangement and the rate: see ",
  introLinkLabel: "/hire",
  introAfter: ".",
  responseTime: "Reply within 2 business days.",
  marginNote: "(one list, no sales funnel)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "Building AI agents",
      oneLiner:
        "Production agents from prompt to working part of your product. LLM orchestration, tool-calling, RAG. ECHO as a live reference.",
      deliverable: "2–4 weeks · prototype to production",
      tags: ["AI Agents", "LLM", "Python"],
    },
    {
      href: "/hire?topic=claude-api",
      title: "Claude API integration",
      oneLiner:
        "Get Claude into your stack without it staying a toy. Streaming, tool use, costs under control. Two weeks, not two quarters.",
      deliverable: "2 weeks · fixed price",
      tags: ["Claude API", "Anthropic", "TypeScript"],
      wip: true,
    },
    {
      href: "/hire?topic=rag",
      title: "RAG on your own knowledge",
      oneLiner:
        "Your docs, tickets or FAQ made searchable for an LLM. EU-hosted vector store if you take GDPR seriously. No hype, just answers.",
      deliverable: "1–3 weeks · your data, your infra",
      tags: ["RAG", "Embeddings", "EU-infra"],
      wip: true,
    },
    {
      href: "/hire?topic=workflows",
      title: "Automating LLM workflows",
      oneLiner:
        "Intake, reporting, classification — the work nobody enjoys. One agent on it, you get the rest of your day back.",
      deliverable: "1–2 weeks per flow",
      tags: ["Automation", "Workflows", "Agents"],
      wip: true,
    },
    {
      href: "/hire?topic=eu-infra",
      title: "EU-compliant AI infra",
      oneLiner:
        "Hosting in Frankfurt or Amsterdam, no data to the US. For teams that treat GDPR as a design choice, not a checkbox.",
      deliverable: "1 week setup · monthly review",
      tags: ["EU", "GDPR", "Hosting"],
      wip: true,
    },
    {
      href: "/hire?topic=devflow",
      title: "Claude Code in your dev flow",
      oneLiner:
        "MCP servers, custom skills, agents your team actually uses. No demo magic, just less repetitive work per sprint.",
      deliverable: "1 week pilot · your repo",
      tags: ["Claude Code", "MCP", "DX"],
      wip: true,
    },
  ],
  wipBadgeLabel: "ask →",
  outro:
    "One service has a full page, the rest get one per week. Something fits already? Email or call via /hire — a conversation is always faster.",
};

export default en;
