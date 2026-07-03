import type { AboutDict } from "./types";

const fr: AboutDict = {
  meta: {
    title: "À propos",
    description:
      "Nathan Renting — dev solo à Eindhoven. 12 ans d'expérience dans l'entertainment et la production audio, aujourd'hui concepteur de systèmes d'agents et de moteurs audio.",
  },
  portraitAlt:
    "Portrait à la craie dessiné à la main de Nathan : buste chauve avec un casque cyan, sourire amical, petit gribouillis de waveform au-dessus de la tête.",
  h1: "À propos",
  intro: {
    lead1: "Nathan Renting (officiellement : Jonathan David Renting). ",
    leadHighlight: "Dev solo, Eindhoven",
    lead2: ".",
    p1: "Ce que je fais au quotidien : être papa. À côté de ça, faire de la musique, écouter, respirer et regarder mon aquarium rempli de crevettes filtreuses africaines. Un jardin grand comme un timbre, exposé plein sud. J'apprécie la musique plus que le sommeil. ;)",
    p2: "Et construire des systèmes d'agents. Des solutions pour des fonctions spécifiques, des applis de niche pour des cas d'usage étroits, et la technique qui se cache dessous.",
    p3Highlight: "La stack suit le problème.",
    p3: " Python est ma zone de confort, Rust pour le temps réel, TypeScript pour l'UI. C'est ce que je touche le plus en ce moment. Si une autre base a plus de sens pour un projet, j'y bascule. La contrainte, c'est rarement la syntaxe que je connais ; c'est plutôt de voir quelles options existent pour un problème, et d'oser les saisir.",
    p4: "Outils d'IA ouverts en permanence. Claude pour le code et le chat, Perplexity pour la recherche, ChatGPT pour le travail de prompt là où ça convient.",
    p5Before:
      "Pas d'équipe autour de moi, et pour la plupart des choses, pas besoin d'équipe non plus. Ce qui demandait trois personnes il y a quelques années peut maintenant se faire en solo en une semaine. C'est là qu'en est l'outillage en 2026. Pour les décisions d'ingénierie qui se cachent dessous, voir ",
    p5LinkLabel: "/patterns",
    p5After: ".",
  },
  origin: {
    heading: "D'où je viens",
    marginNote: "(plus de ghost, pour être clair)",
    p1: "De mes 18 ans à environ mes 30 ans, j'ai travaillé dans l'industrie de l'entertainment. DJ, event manager, danseur. En parallèle, plus de dix ans passés sur la production audio : en partie sous mes propres noms d'artiste, en partie comme ghostproducer pour d'autres artistes. Avec mes propres artworks et vidéos en plus. Multidisciplinaire sans que ça ait jamais été un choix délibéré, simplement parce que le travail l'exigeait.",
    p2Before:
      "La programmation a grandi à côté. J'ai commencé avec du HTML simple et des tutoriels de moteurs de jeu, en évoluant lentement vers du vrai logiciel. Les huit dernières années de façon intensive : d'abord pour mon propre outillage audio, puis pour des produits et du travail client. ",
    p2Highlight: "Autodidacte, pas de joli parcours LinkedIn",
    p2After: ".",
    p3: "Depuis 2018, je travaille sur AudioLaunch, mon propre produit audio. Les premières années sont passées dans la construction du concept et les premières esquisses du site. Pas de code de production, mais le modèle mental qui soutient tout ce qu'il y a en dessous. Ensuite, trois pivots de concept et plusieurs itérations reconstruites, avec un niveau de production depuis 2024. Huit ans passés dans un même espace de problème produisent quelque chose qu'aucun tutoriel n'enseigne : un sens de quelles abstractions tiennent et lesquelles tu démoliras à nouveau six mois plus tard. Désormais en ligne en open beta publique sur audio-launch.com.",
    p4: "Ce que tout ça apporte : je comprends l'audio de fond en comble. Le DSP, et aussi ce sur quoi un producteur bute et ce qu'une UI doit faire pour ne pas gêner. J'essaie de garder ce même regard large dans le travail sur les agents. Le moteur, l'infra et l'expérience utilisateur, tout en vue en même temps.",
  },
  now: {
    heading: "Ce qui tourne en ce moment",
    p1: "ECHO est mon propre orchestrateur. Local, voice-first, avec Obsidian comme mémoire. Il tourne sur mon poste principal (Ryzen 7 avec RX 6650 XT, Windows) à côté du HUD, de ComfyUI et du reste de ma stack de dev. Une machine AMD plus ancienne se trouve à côté, en banc de test Linux pour mes side-projects et mes expérimentations. Voir la page ECHO pour l'architecture et /patterns pour les décisions intéressantes.",
    p2: "En plus de ça : AudioLaunch, mon produit audio, est désormais public. Ce qui n'est pas encore public : la méthodologie de lancement réutilisable qui en est issue. Sous NDA, j'en parle volontiers.",
  },
  stack: {
    heading: "Stack",
    entries: [
      {
        heading: "Backend",
        body: "Python (FastAPI, I/O asynchrone), Rust pour le temps réel/FFI, TypeScript pour Node et les Edge functions.",
      },
      {
        heading: "Audio / mobile",
        body: "Moteurs audio temps réel en Rust avec FFI, Android cross-platform (NDK, arm64 / armv7 / x86_64), React Native + Expo.",
      },
      {
        heading: "IA / agents",
        body: "Anthropic Claude (API + Code) en priorité, Perplexity pour la recherche, ChatGPT pour le travail de prompt. Ollama en local (Qwen 2.5, Llama 3.2). Standard agentskills.io (compatible OpenClaw), pattern de fallback à trois niveaux, ComfyUI.",
      },
      {
        heading: "Données",
        body: "Supabase (Postgres + RLS, EU-Frankfurt), Cloudflare R2, flux d'événements NDJSON, patterns de vault local (Obsidian).",
      },
      {
        heading: "Tooling",
        body: "Claude Code, Cursor, Stripe, EAS Build, Sentry (EU), Vercel.",
      },
      {
        heading: "Matériel",
        body: "Poste principal : Ryzen 7 3700X avec RX 6650 XT (8 Go), Windows. ECHO + HUD + ComfyUI + stack de dev tournent ici. Une seconde machine AMD plus ancienne sert de banc de test Linux. Pour l'inférence lourde, je me rabats sur un accès distant à davantage de puissance GPU.",
      },
    ],
  },
  approach: {
    heading: "Comment j'aborde les projets",
    marginNote: "(honnête = moins de surprises plus tard)",
    p1Before:
      "Honnête sur ce qui marche et ce qui ne marche pas. Pas de promesses « livré en 2 semaines » quand c'est 4. ",
    p1Highlight:
      "Je préfère mettre tôt une version moche en production qu'une belle roadmap qui ne sera jamais construite",
    p1After: ".",
    p2: "L'étendue de la stack avant la spécialisation. Si je suis plongé dans du DSP audio, je dois quand même être capable de monter un flow Stripe, et inversement. Sinon le système finit par lâcher quelque part aux jointures.",
    p3: "L'UE d'abord pour les données clients. Supabase à Frankfurt, Sentry en UE, un registre des traitements qui est réellement tenu à jour. Pas un argument marketing. Juste là où mes utilisateurs et moi vivons.",
  },
};

export default fr;
