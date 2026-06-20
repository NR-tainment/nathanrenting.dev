import type { DienstenDict } from "./types";

const fr: DienstenDict = {
  meta: {
    title: "Services",
    description:
      "Ingénierie IA et logicielle en freelance depuis Eindhoven. Construction de systèmes d'agents, intégration de LLM, Claude API, RAG et infrastructure conforme à l'UE. Mission freelance, 2-3 jours par semaine.",
  },
  h1: "Services",
  introBefore:
    "Ce que je fais en freelance || concrètement. Une page par service, pour que tu voies vite si ça colle. Pour les modalités et le tarif : voir ",
  introLinkLabel: "/hire",
  introAfter: ".",
  marginNote: "(une seule liste, pas de tunnel de vente)",
  items: [
    {
      href: "/diensten/ai-agents-bouwen-nederland",
      title: "Construire des agents IA",
      oneLiner:
        "Des agents de production, du prompt jusqu'à un composant qui marche dans ton produit. Orchestration de LLM, tool-calling, RAG. ECHO comme référence en direct.",
      tags: ["AI Agents", "LLM", "Python"],
    },
  ],
  outro:
    "D'autres services arrivent || intégration de LLM, RAG, Claude API. Pour l'instant : une page finie, une de plus chaque semaine. Aller plus vite ne le rend pas meilleur.",
};

export default fr;
