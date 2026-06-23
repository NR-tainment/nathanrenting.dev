import type { AboutDict } from "./types";

const de: AboutDict = {
  meta: {
    title: "Über mich",
    description:
      "Nathan Renting — Solo-Dev in Eindhoven. 12 Jahre Hintergrund in Entertainment und Audio-Produktion, heute Entwickler von Agenten-Systemen und Audio-Engines.",
  },
  portraitAlt:
    "Handgezeichnetes Kreide-Porträt von Nathan: kahle Büste mit cyanfarbenen Kopfhörern, freundliches Lächeln, kleine Waveform-Kritzelei über dem Kopf.",
  h1: "Über mich",
  intro: {
    lead1: "Nathan Renting (offiziell: Jonathan David Renting). ",
    leadHighlight: "Solo-Dev, Eindhoven",
    lead2: ".",
    p1: "Was ich jeden Tag mache: Papa sein. Daneben Musik machen, hören, atmen und mein Aquarium mit afrikanischen Filtergarnelen beobachten. Ein Briefmarken-Garten mit Sonne im Süden. Ich genieße Musik mehr als Schlaf. ;)",
    p2: "Und Agenten-Systeme bauen. Lösungen für spezifische Funktionen, Nischen-Apps für schmale Use-Cases und die Technik darunter.",
    p3Highlight: "Der Stack folgt dem Problem.",
    p3: " Python ist meine Komfortzone, Rust für Realtime, TypeScript für die UI. Das fasse ich gerade am meisten an. Wenn für ein Projekt eine andere Grundlage sinnvoller ist, steige ich dort ein. Die Einschränkung ist selten, welche Syntax ich kenne; sondern zu erkennen, welche Optionen es für ein Problem gibt, und sich zu trauen, sie zu greifen.",
    p4: "KI-Tooling permanent offen. Claude für Code und Chat, Perplexity für Recherche, ChatGPT für Prompt-Arbeit, wo es passt.",
    p5Before:
      "Kein Team um mich herum, und für die meisten Dinge auch kein Bedarf an einem Team. Was vor ein paar Jahren noch drei Leute brauchte, geht heute solo in einer Woche. Da steht das Tooling 2026. Für die Engineering-Entscheidungen darunter siehe ",
    p5LinkLabel: "/patterns",
    p5After: ".",
  },
  origin: {
    heading: "Wo ich herkomme",
    marginNote: "(kein Ghost mehr, der Klarheit halber)",
    p1: "Von meinem 18. bis etwa zu meinem 30. Lebensjahr habe ich in der Entertainment-Branche gearbeitet. DJ, Eventmanager, Dancer. Daneben gut zehn Jahre lang mit Audio-Produktion beschäftigt: teils unter eigenen Künstlernamen, teils als Ghostproducer für andere Künstler. Eigenes Artwork und eigene Videos obendrauf. Multidisziplinär, ohne dass das je eine bewusste Entscheidung war, einfach weil die Arbeit es verlangte.",
    p2Before:
      "Das Programmieren wuchs nebenher. Begonnen mit einfachem HTML und Game-Engine-Tutorials, langsam zu echter Software hochgearbeitet. Die letzten acht Jahre intensiv: erst für eigenes Audio-Tooling, später für Produkte und Kundenarbeit. ",
    p2Highlight: "Autodidakt, kein hübscher LinkedIn-Werdegang",
    p2After: ".",
    p3: "Seit 2018 arbeite ich an meinem eigenen Audio-Produkt. Die ersten Jahre gingen in den Aufbau des Konzepts und erste Website-Skizzen. Kein Produktionscode, aber das mentale Modell, das alles darunter trägt. Danach drei Konzept-Pivots und mehrere neu gebaute Iterationen, mit einer Produktions-Stufe seit 2024. Acht Jahre in einem Problemraum bringen etwas hervor, das man aus keinem Tutorial lernt: ein Gespür dafür, welche Abstraktionen halten und welche man sechs Monate später wieder einreißt. Das Produkt bleibt bis zum Launch unter NDA.",
    p4: "Was das alles bringt: Ich verstehe Audio von innen und außen. Das DSP, und auch, wo ein Producer ansteht und was eine UI tun muss, um nicht im Weg zu sein. Denselben breiten Blick versuche ich in der Agenten-Arbeit zu behalten. Engine, Infra und die Nutzererfahrung gleichzeitig im Blick.",
  },
  now: {
    heading: "Was gerade läuft",
    p1: "ECHO ist mein eigener Orchestrator. Lokal, voice-first, mit Obsidian als Gedächtnis. Läuft auf meinem Haupt-Arbeitsplatz (Ryzen 7 mit RX 6650 XT, Windows) neben dem HUD, ComfyUI und dem Rest meines Dev-Stacks. Eine ältere AMD-Maschine steht daneben als Linux-Testbed für Side-Projects und Experimente. Siehe die ECHO-Seite für die Architektur und /patterns für die interessanten Entscheidungen.",
    p2: "Daneben: ein Produkt im Stealth-Modus und eine wiederverwendbare Launch-Methodik. Beides noch nicht öffentlich. Unter NDA spreche ich gern darüber.",
  },
  stack: {
    heading: "Stack",
    entries: [
      {
        heading: "Backend",
        body: "Python (FastAPI, async I/O), Rust für Realtime/FFI, TypeScript für Node- und Edge-Functions.",
      },
      {
        heading: "Audio / Mobile",
        body: "Echtzeit-Audio-Engines in Rust mit FFI, plattformübergreifendes Android (NDK, arm64 / armv7 / x86_64), React Native + Expo.",
      },
      {
        heading: "AI / Agenten",
        body: "Anthropic Claude (API + Code) primär, Perplexity für Recherche, ChatGPT für Prompt-Arbeit. Lokal Ollama (Qwen 2.5, Llama 3.2). agentskills.io-Standard (OpenClaw-kompatibel), Drei-Tier-Fallback-Muster, ComfyUI.",
      },
      {
        heading: "Daten",
        body: "Supabase (Postgres + RLS, EU-Frankfurt), Cloudflare R2, NDJSON-Event-Streams, lokale Vault-Muster (Obsidian).",
      },
      {
        heading: "Tooling",
        body: "Claude Code, Cursor, Stripe, EAS Build, Sentry (EU), Vercel.",
      },
      {
        heading: "Hardware",
        body: "Haupt-Arbeitsplatz: Ryzen 7 3700X mit RX 6650 XT (8 GB), Windows. ECHO + HUD + ComfyUI + Dev-Stack laufen hier. Eine zweite, ältere AMD-Maschine dient als Linux-Testbed. Für schwere Inferenz greife ich per Remote-Zugriff auf mehr GPU-Power zurück.",
      },
    ],
  },
  approach: {
    heading: "Wie ich in Projekten arbeite",
    marginNote: "(ehrlich = weniger Überraschungen später)",
    p1Before:
      "Ehrlich darüber, was funktioniert und was nicht. Keine „ship it in 2 Wochen“-Versprechen, wenn es 4 sind. ",
    p1Highlight:
      "Lieber früh eine hässliche Version in Produktion als eine schöne Roadmap, die nie gebaut wird",
    p1After: ".",
    p2: "Stack-Breite vor Spezialisierung. Wenn ich tief im Audio-DSP stecke, muss ich trotzdem noch einen Stripe-Flow aufsetzen können, und umgekehrt. Sonst klappert das System irgendwo an den Nähten.",
    p3: "EU-first für Kundendaten. Frankfurt-Supabase, EU-Sentry, ein Verarbeitungsverzeichnis, das auch wirklich gepflegt wird. Keine Marketing-Behauptung. Einfach dort, wo meine Nutzer und ich wohnen.",
  },
};

export default de;
