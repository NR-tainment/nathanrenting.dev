import type { ProjectsDict } from "./types";

const fr: ProjectsDict = {
  meta: {
    title: "Travaux",
    description:
      "ECHO — mon orchestrateur d'agents personnel. AudioLaunch — studio de musique mobile, en ligne en open beta.",
  },
  h1: "Travaux",
  introBefore:
    "ECHO, TherapyVault, AudioLaunch et FamilyKart sont ceux que je peux montrer publiquement. Ce qui reste sous NDA : une méthodologie de lancement réutilisable, cristallisée en construisant et en lançant AudioLaunch. J'en parle volontiers lors d'un call. Pour les patterns d'ingénierie que l'on retrouve partout, voir ",
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
    audiolaunch: {
      href: "/projects/audiolaunch",
      title: "AudioLaunch",
      oneLiner:
        "Studio de musique mobile (Studio) et Resonara, un monde gamifié où l'on apprend le sound design en jouant. Moteur audio Rust maison pour du DSP low-latency sur Android (NDK + JNI + React Native FFI). Construit en solo depuis huit ans, désormais en open beta publique.",
      tags: ["React Native", "Rust · moteur audio maison", "Android NDK", "Mobile DAW"],
      status: "En ligne · open beta",
      externalUrl: "https://audio-launch.com",
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
    marginNote: "(sous NDA. lors d'un call je peux en dire plus)",
    method: {
      category: "Stealth · méthodologie",
      status: "En application · 2025-aujourd'hui · NDA",
      part1: "Une ",
      redacted1: "approche de lancement",
      part2:
        " réutilisable pour les produits indé et stealth en route vers une release publique. Cristallisée en construisant et en lançant AudioLaunch. ",
      redacted2:
        "Outils, séquençage, pipeline de contenu maison, syndication sociale.",
      part3:
        " Actuellement en application sur le projet suivant. Plus qu'une liste de tactiques, moins qu'un framework public.",
    },
    note: "Je peux passer ce projet en revue en détail lors d'un call. Si le courant passe, on poursuit sous MNDA.",
  },
};

export default fr;
