import type { AiAgentsDict } from "./types";

const fr: AiAgentsDict = {
  meta: {
    title: "Créer des agents IA — freelance, Pays-Bas et EU remote",
    description:
      "Développeur d'agents IA pour les PME. Orchestration de LLM, tool-calling, RAG et API Claude. Des agents de production, du prompt jusqu'à un composant qui fonctionne dans ton produit. Mission freelance, Eindhoven et EU remote.",
  },
  eyebrow: "Prestation · AI engineer freelance",
  h1Lead: "Créer des agents IA. ",
  h1Accent: "Production — pas une démo",
  h1Tail: ".",
  intro:
    "Je construis des systèmes d'agents IA qui tournent vraiment — de bout en bout. Orchestration de LLM, tool-calling, RAG, et l'intégration dans ton stack existant. En solo, depuis Eindhoven, disponible 2-3 jours par semaine pour des clients aux Pays-Bas et dans l'UE.",
  ctaPrimary: "Réserver un appel →",
  ctaSecondary: "Voir ECHO comme référence",
  help: {
    heading: "Ce sur quoi j'interviens",
    lead: "Les projets où j'apporte le plus de valeur :",
    bullets: [
      {
        strong: "Mettre en place un agent de zéro.",
        body: "Orchestration de LLM · tool-calling · couche mémoire · toute l'architecture. Pas un chatbot qui se contente de parler, mais un agent qui exécute des tâches et reprend là où tu t'étais arrêté hier.",
      },
      {
        strong: "Améliorer une intégration LLM existante.",
        body: "Routage entre modèles, coûts en baisse, latence en baisse, fiabilité en hausse. Souvent avec un fallback multi-niveaux et des modèles locaux pour les requêtes peu coûteuses.",
      },
      {
        strong: "Mettre en place du RAG sur tes propres documents.",
        body: 'Embeddings, chunking, stratégie de retrieval, évaluation. Pas un « load and chat » générique — mais configuré pour ton corpus et tes questions.',
      },
      {
        strong: "Intégration de l'API Claude.",
        body: "Tool-use, serveurs MCP, streaming, prompt caching. Pour les équipes qui veulent passer d'un prototype à la production sans tomber dans les pièges habituels.",
      },
      {
        strong: "Automatisation de workflows avec des agents.",
        body: "Agents SDR, flux de support, traitement de factures, pipelines de contenu. Avec les bons garde-fous et le monitoring qui va avec, pour que ça ne casse pas en silence.",
      },
    ],
  },
  stack: {
    heading: "La stack que je privilégie",
    leadHighlight: "La stack suit le problème",
    leadAfter:
      ", mais voici ce que je touche le plus en pratique pour le travail d'agents :",
    rows: [
      {
        label: "LLM",
        body: "Anthropic Claude (Sonnet · Haiku · Opus). En local Ollama (Qwen 2.5, Llama 3.2) pour les routes peu coûteuses et le fallback hors ligne.",
      },
      {
        label: "Backend",
        body: "Python et FastAPI. I/O asynchrone · registre d'outils · streaming. Rust là où la latence compte.",
      },
      {
        label: "Tooling",
        body: "Tool-calling · MCP · le pattern agentskills.io (compatible OpenClaw). Fallback multi-niveaux pour la fiabilité en production.",
      },
      {
        label: "Memory",
        body: "Vault Obsidian comme dépôt de contexte (style Letta), extraction ADD-only, Qdrant en option pour le rappel vectoriel.",
      },
      {
        label: "Infra",
        body: "Supabase EU · Cloudflare R2 · Sentry EU · Stripe. Vercel ou un VPS auto-hébergé avec Coolify quand cela convient.",
      },
      {
        label: "Pas",
        body: "Pas de vendor lock-in sans raison. Pas de spaghetti LangChain. Pas de framework d'agents quand 100 lignes de Python suffisent.",
      },
    ],
  },
  proof: {
    heading: "Preuve — ECHO",
    marginNote: "(pas de pitch deck — en direct pendant un appel)",
    p1: "Je ne construis pas seulement pour des clients — je construis pour moi-même. ECHO est mon propre orchestrateur d'agents qui tourne chaque jour sur mon bureau. Voice-first, routé entre Ollama en local et Claude, sa propre mémoire dans un vault Obsidian, un HUD en direct avec les stats système. Dix ans d'ADN audio en dessous pour la couche voix.",
    p2Before: "Ce qu'ECHO prouve pour le travail client : ",
    p2Highlight:
      "je sais où les agents cassent en production, et comment l'éviter",
    p2After:
      ". Les choix d'architecture faits tôt (couche mémoire, routage, registre d'outils, stratégie de fallback) déterminent si, dans six mois, tu seras encore satisfait de la codebase — ou si tu repars de zéro.",
    link: "→ Lire à propos d'ECHO",
  },
  forWho: {
    heading: "Pour qui cela fonctionne le mieux",
    bullets: [
      {
        strong: "Les entreprises SaaS",
        body: " qui veulent mettre une fonctionnalité IA en production sans embaucher une équipe permanente. Un ou deux sprints de ma part suffisent souvent à la rendre opérationnelle.",
      },
      {
        strong: "Les PME avec de l'automatisation interne.",
        body: " Des agents pour le support, le développement commercial, le traitement de factures, les flux de contenu. Du travail qui reste sinon en suspens faute d'équipe.",
      },
      {
        strong: "Les solo founders et petites équipes",
        body: " qui veulent la couche IA sous leur produit, mais préfèrent ne pas avoir à décortiquer eux-mêmes toute l'économie des LLM.",
      },
    ],
  },
  how: {
    heading: "Comment ça se passe",
    marginNote: "(honnête = moins de surprises plus tard)",
    steps: [
      {
        strong: "Un court e-mail ou message.",
        body: "Quel est le problème, la forme générale de ce que tu cherches, l'horizon temporel. Un paragraphe suffit.",
      },
      {
        strong: "Un appel de 30 minutes.",
        body: "Si le courant passe, on cadre le projet. Sinon, je te le dis aussi. Je montre ECHO en direct si tu veux.",
      },
      {
        strong: "Une semaine payée d'abord.",
        body: "Pour les missions plus longues : une semaine de travail pour vérifier le rythme avant de poursuivre.",
      },
    ],
  },
  cta: {
    heading: "Prêt à démarrer ?",
    body: "Le tarif, la disponibilité et le formulaire se trouvent sur la page hire. Disponible pour des clients aux Pays-Bas et en EU remote, 2-3 jours par semaine, depuis Eindhoven.",
    link: "→ Vers /hire (tarif + contact)",
  },
};

export default fr;
