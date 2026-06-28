import type { DienstenDict } from "./types";

const fr: DienstenDict = {
  meta: {
    title: "Services",
    description:
      "Ingénierie IA et logicielle en freelance depuis Eindhoven. Construction de systèmes d'agents, intégration de LLM, Claude API, RAG et infrastructure conforme à l'UE. Mission freelance, 2-3 jours par semaine.",
  },
  h1: "Services",
  introBefore:
    "Ce que je fais en freelance — concrètement. Une page par service, pour que tu voies vite si ça colle. Pour les modalités et le tarif : voir ",
  introLinkLabel: "/hire",
  introAfter: ".",
  responseTime: "Réponse sous 2 jours ouvrés.",
  marginNote: "(une seule liste, pas de tunnel de vente)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "Construire des agents IA",
      oneLiner:
        "Des agents de production, du prompt jusqu'à un composant qui marche dans ton produit. Orchestration de LLM, tool-calling, RAG. ECHO comme référence en direct.",
      deliverable: "2–4 semaines · du prototype à la production",
      tags: ["AI Agents", "LLM", "Python"],
    },
    {
      href: "/hire?topic=claude-api",
      title: "Intégration de l'API Claude",
      oneLiner:
        "Mettre Claude dans ton stack sans qu'il reste un gadget. Streaming, tool use, coûts maîtrisés. Deux semaines, pas deux trimestres.",
      deliverable: "2 semaines · prix fixe",
      tags: ["Claude API", "Anthropic", "TypeScript"],
      wip: true,
    },
    {
      href: "/hire?topic=rag",
      title: "RAG sur tes propres connaissances",
      oneLiner:
        "Tes documents, tickets ou FAQ rendus consultables par un LLM. Vector store hébergé dans l'UE si tu prends le RGPD au sérieux. Pas de hype, des réponses.",
      deliverable: "1–3 semaines · tes données, ton infra",
      tags: ["RAG", "Embeddings", "EU-infra"],
      wip: true,
    },
    {
      href: "/hire?topic=workflows",
      title: "Automatiser les workflows LLM",
      oneLiner:
        "Saisie, reporting, classification — le travail que personne n'aime. Un agent s'en charge, tu récupères ta journée.",
      deliverable: "1–2 semaines par flow",
      tags: ["Automation", "Workflows", "Agents"],
      wip: true,
    },
    {
      href: "/hire?topic=eu-infra",
      title: "Infra IA conforme à l'UE",
      oneLiner:
        "Hébergement à Francfort ou Amsterdam, pas de données aux États-Unis. Pour les équipes qui voient le RGPD comme un choix de conception, pas une case à cocher.",
      deliverable: "1 semaine setup · revue mensuelle",
      tags: ["UE", "RGPD", "Hosting"],
      wip: true,
    },
    {
      href: "/hire?topic=devflow",
      title: "Claude Code dans ton dev-flow",
      oneLiner:
        "Serveurs MCP, skills sur mesure, agents que ton équipe utilise vraiment. Pas de magie de démo, juste moins de travail répétitif par sprint.",
      deliverable: "1 semaine pilote · ton repo",
      tags: ["Claude Code", "MCP", "DX"],
      wip: true,
    },
  ],
  wipBadgeLabel: "demander →",
  outro:
    "Un service a une page complète, les autres suivent une par semaine. Quelque chose colle déjà ? Mail ou appel via /hire — une conversation va toujours plus vite.",
};

export default fr;
