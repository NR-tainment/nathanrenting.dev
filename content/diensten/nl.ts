import type { DienstenDict } from "./types";

const nl: DienstenDict = {
  meta: {
    title: "Diensten",
    description:
      "Freelance AI- en software-engineering vanuit Eindhoven. Agent-systemen bouwen, LLM-integratie, Claude API, RAG en EU-compliante infra. ZZP-inhuur, 2-3 dagen per week.",
  },
  h1: "Diensten",
  introBefore:
    "Wat ik freelance doe — in concrete vorm. Per dienst één pagina, zodat je snel ziet of het past. Voor de afspraak en het tarief: zie ",
  introLinkLabel: "/hire",
  introAfter: ".",
  marginNote: "(één lijst, geen sales-funnel)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "AI agents bouwen",
      oneLiner:
        "Productie-agents van prompt tot werkend onderdeel van je product. LLM-orchestratie, tool-calling, RAG. ECHO als live referentie.",
      tags: ["AI Agents", "LLM", "Python"],
    },
  ],
  outro:
    "Meer dienstenpagina's komen er zodra ik ze schrijf — LLM-integratie, RAG, Claude API. Liever één pagina die klopt dan een lijst beloftes.",
};

export default nl;
