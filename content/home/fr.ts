import type { HomeDict } from "./types";

// FR home dictionary. Produced in the fan-out against the same HomeDict
// contract as NL (source) and EN (reference). Same JSX/structure — only the
// human-readable strings differ.
const fr: HomeDict = {
  meta: {
    title: "Nathan Renting — développeur agents IA & audio temps réel",
    description:
      "Solo dev d'Eindhoven (NL) : conçoit des systèmes d'agents IA (orchestration LLM, tool-calling, RAG) et des moteurs audio temps réel. Disponible en freelance / indépendant.",
  },
  hero: {
    availability: "Disponible · 2-3 jours/semaine en freelance",
    headlineLead: "Solo dev avec un ",
    headlineUnderline: "background audio",
    headlineAfterDoodle: ". ",
    headlineAccent1: "Systèmes d'agents",
    headlineMid: ", ",
    headlineAccent2: "audio temps réel",
    headlineTail: ", et la technique derrière.",
    intro:
      "D'abord douze ans dans le divertissement et la production audio, puis de plus en plus sérieusement dans l'ingénierie en solo. Aujourd'hui je construis de l'orchestration d'agents, des moteurs audio et la technique qui les soutient. En solo, augmenté par l'IA, depuis Eindhoven.",
    ctaPrimary: "Voir le travail →",
    ctaSecondary: "Travaillons ensemble",
    marginNote: "(portfolio whiteboard. patterns et projets plus bas)",
  },
  work: {
    heading: "Le travail que je peux montrer",
    marginNote: "(le reste est sous NDA. demandez)",
    ndaNote: "Ce qui est sous NDA, je peux le détailler lors d'un appel.",
  },
  projects: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mon propre orchestrateur d'agents. Local, voice-first, avec un vault Obsidian comme mémoire. Routage multi-brain, tool-dispatch, fallback IA à trois niveaux. Utilisé au quotidien.",
      tags: ["Python · FastAPI", "Routage multi-brain", "agentskills.io", "LLM locaux"],
      status: "En production",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Plateforme vidéo sécurisée pour thérapeutes ↔ clients. Contrôles d'accès granulaires, export RGPD, MFA. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "Auth + MFA", "RGPD"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Plateforme de référence à l'intersection audio + AI + DSP + Android + accessibilité. De vrais outils, une documentation approfondie. Astro + React + Tailwind v4.",
      tags: ["Astro", "Plateforme de contenu", "Audio + AI"],
      status: "En ligne · en construction",
      externalUrl: "https://audiolab.tools",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Application d'accessibilité pour les utilisateurs Android sourds et malentendants. Sous-titres en direct + direction d'arrivée du son (uniquement si fiable). Kotlin + Compose + GCC-PHAT.",
      tags: ["Android", "Kotlin", "Accessibilité", "DSP"],
      status: "Squelette MVP",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "De la photo retouchée à la mise en ligne en 30 secondes. Plugin Lightroom + bureau Tauri + pipeline de publication multi-agent pour photographes.",
      tags: ["Tauri", "Plugin Lightroom", "Multi-agent"],
      status: "Pré-dev",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart pour mes enfants. Moteur 3D maison au-dessus de Three.js, adversaires IA, power-ups, caméra de poursuite. Application de bureau Electron.",
      tags: ["Electron", "Three.js", "Projet perso"],
      status: "En développement",
    },
  },
  stealth: {
    label: "Stealth",
    audio: {
      category: "Stealth · audio · 8 ans",
      status: "En ligne · depuis 2018 · NDA",
      part1: "Un ",
      redacted1: "produit pour les créateurs",
      part2:
        ", bâti sur dix ans d'expérience en production audio. En développement depuis 2018, palier production depuis 2024. Mobile cross-platform avec un ",
      redacted2: "moteur audio maison",
      part3: ". En ligne avec des early adopters.",
    },
    method: {
      category: "Stealth · méthode",
      status: "En application · NDA",
      part1: "Une ",
      redacted1: "approche de lancement",
      part2: " réutilisable, cristallisée pendant la construction du premier projet.",
      redacted2: " Outils, séquençage et pipeline de contenu maison.",
      part3: " En application sur le projet suivant.",
    },
  },
  patterns: {
    heading: "Patterns",
    marginNote: "(lis ce qui t'intéresse, pas de devoirs)",
    intro:
      "Des décisions d'ingénierie rencontrées en chemin. Des writeups courts, ~3-5 min chacun.",
    links: [
      { href: "/patterns/multi-brain-routing", label: "Routage LLM multi-brain" },
      { href: "/patterns/three-tier-fallback", label: "Fallback IA à trois niveaux" },
      { href: "/patterns/real-time-audio-rust", label: "Audio temps réel en Rust" },
      { href: "/patterns/cross-arch-android", label: "Builds Android cross-architecture" },
      { href: "/patterns/eu-first-infrastructure", label: "Infrastructure EU-first" },
      { href: "/patterns/agentskills-implementation", label: "Implémentation agentskills.io" },
    ],
    allLink: "→ Tous les patterns",
  },
  bring: {
    heading: "Ce que j'apporte",
    highlight: "Combo étrange",
    body:
      " : plus de dix ans d'ADN audio et quelqu'un qui construit et utilise des systèmes d'agents au quotidien. Pour les produits audio, je suis dans les deux mondes à la fois. Pour l'ingénierie IA pure, je maîtrise parfaitement l'outillage. Opérationnel tout de suite. Pas d'équipe. Sans chichis.",
  },
  faqHeading: "Questions fréquentes",
  faq: [
    {
      q: "Que fait Nathan Renting ?",
      a: "Je suis un développeur solo d'Eindhoven qui conçoit des systèmes d'agents IA (orchestration LLM, tool-calling, RAG) et des moteurs audio temps réel — du prototype à la production.",
    },
    {
      q: "Nathan est-il disponible pour des missions en freelance / indépendant ?",
      a: "Oui. Je suis disponible en freelance, 2-3 jours par semaine, en remote dans l'UE. Je suis basé à Eindhoven et joignable dans toute la NL pour un kickoff ou une revue critique.",
    },
    {
      q: "Quelles technologies Nathan utilise-t-il ?",
      a: "Pour les agents IA, je privilégie Python, FastAPI, Claude API, MCP, LangGraph et RAG. Pour l'audio temps réel : Rust, Kotlin, Android NDK et DSP. Pour le produit : Next.js, TypeScript et React Native.",
    },
    {
      q: "Combien coûte l'engagement de Nathan ?",
      a: "À titre indicatif, €110-130 de l'heure. Je garde les tarifs au projet négociables selon la portée et la durée.",
    },
    {
      q: "Nathan travaille-t-il en remote ou sur site ?",
      a: "Je préfère le remote au sein de l'UE. Le sur-site aux Pays-Bas est possible pour un kickoff ou une revue critique.",
    },
    {
      q: "Qu'est-ce qui rend le profil de Nathan unique ?",
      a: "Je combine plus de 10 ans de background audio et DSP avec la construction quotidienne de systèmes d'agents. Pour les produits audio-IA, je suis dans les deux mondes à la fois.",
    },
  ],
  cta: {
    body:
      "Ouvert aux missions en freelance / indépendant, 2-3 jours par semaine. Remote de préférence depuis Eindhoven, joignable dans toute la NL pour un kickoff ou une revue critique.",
    link: "→ Comment m'engager",
  },
};

export default fr;
