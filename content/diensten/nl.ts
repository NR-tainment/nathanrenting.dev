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
    {
      href: "/hire?topic=claude-api",
      title: "Claude API integratie",
      oneLiner:
        "Claude in jouw stack krijgen zonder dat het een speeltje blijft. Streaming, tool use, kosten onder controle. Twee weken, niet twee kwartalen.",
      tags: ["Claude API", "Anthropic", "TypeScript"],
      wip: true,
    },
    {
      href: "/hire?topic=rag",
      title: "RAG op je eigen kennis",
      oneLiner:
        "Je documenten, tickets of FAQ doorzoekbaar voor een LLM. EU-hosted vector store als je AVG serieus neemt. Geen hype, wel antwoorden.",
      tags: ["RAG", "Embeddings", "EU-infra"],
      wip: true,
    },
    {
      href: "/hire?topic=workflows",
      title: "LLM-workflows automatiseren",
      oneLiner:
        "Intake, rapportage, classificatie — het werk dat niemand leuk vindt. Eén agent ervoor, jij doet de rest van je dag.",
      tags: ["Automation", "Workflows", "Agents"],
      wip: true,
    },
    {
      href: "/hire?topic=eu-infra",
      title: "EU-compliante AI-infra",
      oneLiner:
        "Hosting in Frankfurt of Amsterdam, geen data naar de VS. Voor wie AVG niet als checkbox ziet maar als ontwerpkeuze.",
      tags: ["EU", "AVG", "Hosting"],
      wip: true,
    },
    {
      href: "/hire?topic=devflow",
      title: "Claude Code in je dev-flow",
      oneLiner:
        "MCP servers, custom skills, agents die je team echt gebruikt. Geen demo-magie, wel minder repetitief werk per sprint.",
      tags: ["Claude Code", "MCP", "DX"],
      wip: true,
    },
  ],
  wipBadgeLabel: "vraag aan →",
  outro:
    "Eén dienst heeft een uitgewerkte pagina, de rest krijgt die per week. Past iets nu al? Mail of bel via /hire — sneller is altijd een gesprek.",
};

export default nl;
