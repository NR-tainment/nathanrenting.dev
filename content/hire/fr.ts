import type { HireDict } from "./types";

const fr: HireDict = {
  meta: {
    title: "Faites appel à moi",
    description:
      "Mission en freelance via entreprise individuelle, 2-3 jours par semaine, 110-130 €/h. Systèmes d'agents, automatisation IA, audio/mobile, infra conforme UE.",
  },
  h1: "Faites appel à moi",
  availability: "Disponible · 2-3 jours par semaine",
  what: {
    heading: "Ce que je fais pour mes clients",
    lead: "Des missions techniques où l'équipe est réduite, ou où l'équipe, c'est en fait juste toi. La forme dans laquelle je travaille le mieux :",
    bullets: [
      {
        strong: "Mettre en place ou étendre des systèmes d'agents.",
        body: "Dispatch d'outils, le pattern agentskills.io, mémoire adossée à un vault, du tooling Claude qui reste vraiment maintenable.",
      },
      {
        strong: "Automatisation IA.",
        body: "Outils internes, intégrations, extensions ERP, ops augmentées par les agents. Python d'abord.",
      },
      {
        strong: "Audio temps réel et mobile.",
        body: "Moteurs audio en Rust avec FFI, Android multiplateforme (NDK), React Native avec flux de paiement. Plus de dix ans d'expérience comme producteur audio, donc je comprends aussi ce qu'un musicien ou un producteur attend côté UI.",
      },
      {
        strong: "Infrastructure conforme UE.",
        body: "Supabase EU, Sentry EU, rigueur sur le registre des traitements, pratique des DPA.",
      },
    ],
  },
  practical: {
    heading: "En pratique",
    marginNote: "(ce tableau, c'est l'accord. pas de petites lignes)",
    rows: [
      {
        label: "Disponibilité",
        body: "2-3 jours par semaine. Un créneau est ouvert en ce moment.",
      },
      {
        label: "Tarif",
        highlight: "110-130 €/h freelance",
        body: ". Engagements plus longs négociables avec une remise.",
      },
      {
        label: "Forme de la mission",
        body: "Mission en freelance via mon entreprise individuelle. Factures NL avec TVA.",
      },
      {
        label: "Localisation",
        body: "Remote de préférence depuis Eindhoven. Toute la Hollande joignable pour un kickoff ou une revue critique.",
      },
      {
        label: "Stack",
        body: "Python, Rust, TypeScript, React Native, stack agentskills.io (compatible OpenClaw · multi-modèle : Claude / Perplexity / ChatGPT / local), Supabase, Stripe.",
      },
      {
        label: "Ce que je ne fais pas",
        body: "Du conseil pur sans construire. La création de CMS génériques. Le placement en régie à temps plein.",
      },
    ],
  },
  start: {
    heading: "Comment démarrer",
    steps: [
      {
        strong: "Écris-moi un mot.",
        body: "Quel est le problème, la forme grossière de ce que tu cherches, ton horizon de temps. Un paragraphe suffit.",
      },
      {
        strong: "Court échange (~30 min).",
        body: "Si ça matche, on cadre. Si ça ne matche pas, je te le dis aussi.",
      },
      {
        strong: "Une semaine payée d'abord.",
        body: "Pour les engagements plus longs : une semaine de travail pour vérifier le rythme avant d'aller plus loin.",
      },
    ],
  },
  contact: {
    heading: "Écris-moi un mot",
    body: "Un paragraphe suffit. Quel est le problème, la forme grossière de ce que tu cherches, ton horizon de temps. Je réponds généralement sous un jour ouvré.",
    marginNote: "(tout ce qui précède, c'est ma façon de travailler. pas de baratin commercial)",
  },
};

export default fr;
