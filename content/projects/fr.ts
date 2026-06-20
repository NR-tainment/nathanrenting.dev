import type { ProjectsDict } from "./types";

const fr: ProjectsDict = {
  meta: {
    title: "Travaux",
    description:
      "ECHO — mon orchestrateur d'agents personnel. Autres projets actuellement sous NDA.",
  },
  h1: "Travaux",
  introBefore:
    "ECHO, TherapyVault et FamilyKart sont ceux que je peux montrer publiquement. Mon plus gros projet est en Stealth : un produit audio que je construis depuis 2018, à travers plusieurs pivots de concept et itérations de plateforme, avec un tier de production depuis 2024. J'en parle volontiers lors d'un call. Pour les patterns d'ingénierie que l'on retrouve partout, voir ",
  introLinkLabel: "/patterns",
  introAfter: ".",
  cards: {
    echo: {
      href: "/projects/echo",
      title: "ECHO",
      oneLiner:
        "Mon orchestrateur d'agents personnel. Routage multi-brain, dispatch d'outils, mémoire adossée à un vault, fallback LLM local + cloud. Construit en solo pour un seul utilisateur (moi), tourne chaque jour.",
      tags: ["Python · FastAPI", "Routage multi-brain", "agentskills.io", "LLMs locaux"],
      status: "En production",
    },
    therapyvault: {
      href: "/projects/therapyvault",
      title: "TherapyVault",
      oneLiner:
        "Plateforme vidéo sécurisée pour thérapeutes et leurs patients. Le thérapeute téléverse les séances, contrôles d'accès granulaires par patient, export RGPD et suppression planifiée, MFA pour les admins. Next.js 15 + Prisma + Cloudflare R2.",
      tags: ["Next.js 15", "TypeScript", "Auth + MFA", "RGPD", "Stripe / Mollie"],
      status: "v0.1 RC",
    },
    audiolab: {
      href: "/projects/audiolab",
      title: "AudioLab.tools",
      oneLiner:
        "Plateforme de référence au croisement de l'audio + AI + DSP + Android + accessibilité. De vrais outils, une doc approfondie, zéro remplissage. Astro + React + Tailwind v4, structure en clusters (MixLab, HearLab, Engineering).",
      tags: ["Astro", "Plateforme de contenu", "Audio + AI", "DSP"],
      status: "En ligne · en construction",
      externalUrl: "https://audiolab.tools",
    },
    captioncompass: {
      href: "/projects/captioncompass",
      title: "CaptionCompass",
      oneLiner:
        "Application d'accessibilité pour les utilisateurs Android sourds et malentendants. Sous-titres en direct toujours visibles ; un indice directionnel vers la personne qui parle n'apparaît que lorsqu'il est fiable. Kotlin + Jetpack Compose + AAudio stéréo + GCC-PHAT DoA.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Accessibilité", "DSP"],
      status: "Scaffold MVP · Phase 1",
    },
    photoflow: {
      href: "/projects/photoflow",
      title: "PhotoFlow",
      oneLiner:
        "De la photo retouchée à la présence en ligne en moins de 30 secondes, pour les photographes professionnels. Plugin Lightroom + desktop Tauri + stack de publication cloud. Architecture multi-agents (Vision / Copy / Publishing / Analytics).",
      tags: ["Tauri", "Plugin Lightroom", "Multi-agents", "Photographie"],
      status: "Pré-dev · vision arrêtée",
    },
    familykart: {
      href: "/projects/familykart",
      title: "FamilyKart",
      oneLiner:
        "Mario Kart pour mes enfants. Moteur 3D maison par-dessus Three.js, adversaires IA, power-ups, caméra de poursuite. Application desktop Electron. Un projet annexe qui avance en parallèle du travail sérieux.",
      tags: ["Electron", "Three.js", "3D", "Projet annexe"],
      status: "En développement",
    },
  },
  stealth: {
    label: "Stealth",
    timelineAlt:
      "Chronologie dessinée à la main sur un tableau noir : 8 ANS — ONE PROBLEM. Cinq phases entre 2018 et aujourd'hui : concept + vision (2018), premières esquisses (2020), pivot mobile (2022), tier de production (2024), en ligne · stealth (maintenant).",
    timelineCaption: "Esquisse sur whiteboard · huit ans dans un seul espace-problème",
    marginNote: "(sous NDA. lors d'un call je peux en dire plus)",
    audio: {
      category: "Stealth · audio · 8 ans",
      status: "En ligne · depuis 2018 · NDA",
      part1: "Un ",
      redacted1: "produit pour les créateurs",
      part2:
        ", construit sur plus de dix ans d'expérience en production audio. Depuis 2018 : les premières années en construction de concept et esquisses de plateforme, puis trois pivots de concept et plusieurs itérations reconstruites, avec un tier de production depuis 2024. Mobile cross-platform avec un ",
      redacted2: "moteur audio maison",
      part3: ", un fallback AI à trois niveaux, et un ",
      redacted3: "pipeline de samples maison",
      part4:
        ". En ligne auprès d'un petit groupe d'early adopters, lancement public en préparation. Stack EU-first, RGPD by design.",
    },
    method: {
      category: "Stealth · méthodologie",
      status: "En application · 2025-aujourd'hui · NDA",
      part1: "Une ",
      redacted1: "approche de lancement",
      part2:
        " réutilisable pour les produits indé et stealth en route vers une release publique. Cristallisée pendant le premier projet stealth. ",
      redacted2:
        "Outils, séquençage, pipeline de contenu maison, syndication sociale.",
      part3:
        " Actuellement en application sur le projet suivant. Plus qu'une liste de tactiques, moins qu'un framework public.",
    },
    note: "Je peux passer les deux projets en revue en détail lors d'un call. Si le courant passe, on poursuit sous MNDA.",
  },
};

export default fr;
