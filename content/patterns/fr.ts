import type { PatternsDict } from "./types";

// FR translation of the patterns index copy.
const fr: PatternsDict = {
  meta: {
    title: "Patterns",
    description:
      "Retours d’ingénierie sur des patterns précis : routage LLM multi-cerveaux, fallback IA à trois niveaux, audio temps réel en Rust, Android multi-architecture, infrastructure EU-first, implémentation agentskills.io.",
  },
  h1: "Patterns",
  intro:
    "Des décisions d’ingénierie tirées de projets réels. Chaque article est court (3 à 5 min de lecture), centré sur un seul pattern, et ancré dans du code que j’ai réellement livré. Lis ce qui t’intéresse. Aucun ordre de lecture imposé.",
  marginNote: "(pas de devoirs, juste des notes prises sur le terrain)",
  items: [
    {
      href: "/patterns/multi-brain-routing",
      title: "Routage LLM multi-cerveaux",
      oneLiner:
        "D’abord des heuristiques peu coûteuses, un classifieur LLM en fallback. Comment choisir le bon palier de modèle par requête sans brûler ni le budget ni la qualité.",
      tags: ["LLM", "Routage", "Coût"],
    },
    {
      href: "/patterns/three-tier-fallback",
      title: "Fallback IA à trois niveaux",
      oneLiner:
        "Claude → règles → codé en dur. Un pattern de dégradation qui maintient le produit en marche quand l’API ne répond plus.",
      tags: ["LLM", "Fiabilité"],
    },
    {
      href: "/patterns/real-time-audio-rust",
      title: "Audio temps réel en Rust",
      oneLiner:
        "Buffers circulaires SPSC lock-free, chemins audio sans allocation, patterns FFI. Pourquoi Rust tient l’échéance du temps réel.",
      tags: ["Rust", "Audio DSP", "FFI"],
    },
    {
      href: "/patterns/cross-arch-android",
      title: "Builds Android multi-architecture",
      oneLiner:
        "Un seul APK pour arm64/armv7/x86_64. Bugs d’alignement, épinglage de version du NDK, pièges de doublons libc++_shared.",
      tags: ["Android", "NDK", "Builds"],
    },
    {
      href: "/patterns/eu-first-infrastructure",
      title: "Infrastructure EU-first",
      oneLiner:
        "Pourquoi la juridiction européenne compte et comment empiler Supabase EU + Sentry EU + RGPD-by-design sans surcharge rapportée après coup.",
      tags: ["RGPD", "Architecture"],
    },
    {
      href: "/patterns/agentskills-implementation",
      title: "Implémentation agentskills.io",
      oneLiner:
        "Pourquoi une couche de skills au-dessus des outils. Format SKILL.md, divulgation progressive, quand passer des outils bruts à autre chose.",
      tags: ["Agents", "Anthropic"],
    },
  ],
};

export default fr;
