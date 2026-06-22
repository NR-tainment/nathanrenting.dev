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
  marginNote: "(one list, no sales funnel)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "Building AI agents",
      oneLiner:
        "Production agents from prompt to working part of your product. LLM orchestration, tool-calling, RAG. ECHO as a live reference.",
      tags: ["AI Agents", "LLM", "Python"],
    },
  ],
  outro:
    "More service pages as I write them — LLM integration, RAG, Claude API. I'd rather have one page that's right than a list of promises.",
};

export default en;
