import type { AboutDict } from "./types";

const en: AboutDict = {
  meta: {
    title: "About me",
    description:
      "Nathan Renting — solo dev in Eindhoven. 12 years of entertainment and audio-production background, now building agent systems and audio engines.",
  },
  portraitAlt:
    "Hand-drawn chalk portrait of Nathan: bald bust with cyan headphones, friendly smile, small waveform doodle above his head.",
  h1: "About me",
  intro: {
    lead1: "Nathan Renting (officially: Jonathan David Renting). ",
    leadHighlight: "Solo dev, Eindhoven",
    lead2: ".",
    p1: "What I do every day: being a dad. Beyond that, making music, listening, breathing, and watching my aquarium full of African filter shrimp. A postage-stamp garden facing south. I enjoy music more than sleep. ;)",
    p2: "And building agent systems. Solutions for specific functions, niche apps for narrow use cases, and the tech underneath.",
    p3Highlight: "The stack follows the problem.",
    p3: " Python is my comfort zone, Rust for realtime, TypeScript for the UI. That's what I touch most right now. If another foundation makes more sense for a project, I'll drop into it. The constraint is rarely which syntax I know; it's seeing which options exist for a problem and daring to reach for them.",
    p4: "AI tooling always open. Claude for code and chat, Perplexity for research, ChatGPT for prompt work where it fits.",
    p5Before:
      "No team around me, and for most things no need for one either. What took three people a few years ago can now be done solo in a week. That's where the tooling stands in 2026. For the engineering decisions underneath, see ",
    p5LinkLabel: "/patterns",
    p5After: ".",
  },
  origin: {
    heading: "Where I come from",
    marginNote: "(no longer a ghost, for the record)",
    p1: "From age 18 to roughly 30 I worked in the entertainment industry. DJ, event manager, dancer. Alongside that, well over ten years spent on audio production: partly under my own artist names, partly as a ghost producer for other artists. Own artwork and videos on top of it. Multi-disciplinary without it ever being a deliberate choice, simply because the work demanded it.",
    p2Before:
      "Programming grew alongside it. Started with simple HTML and game-engine tutorials, slowly working up to real software. The last eight years intensively: first for my own audio tooling, later for products and client work. ",
    p2Highlight: "Self-taught, no tidy LinkedIn path",
    p2After: ".",
    p3: "Since 2018 I've been working on AudioLaunch, my own audio product. The first years went into building the concept and early website sketches. No production code, but the mental model that underpins everything beneath it. After that came three concept pivots and several rebuilt iterations, with a production tier since 2024. Eight years spent in one problem space yields something you don't learn from a tutorial: a feel for which abstractions hold and which ones you'll tear down again six months later. Now live in public open beta at audio-launch.com.",
    p4: "What all of that yields: I understand audio inside and out. The DSP, and also how a producer runs into something and what a UI has to do to stay out of the way. I try to keep that same broad view in agent work. Engine, infra, and the user experience all in frame at once.",
  },
  now: {
    heading: "What's running now",
    p1: "ECHO is my own orchestrator. Local, voice-first, with Obsidian as memory. Runs on my main workstation (Ryzen 7 with RX 6650 XT, Windows) alongside the HUD, ComfyUI, and the rest of my dev stack. An older AMD machine sits next to it as a Linux testbed for side projects and experiments. See the ECHO page for the architecture and /patterns for the interesting decisions.",
    p2: "On top of that: AudioLaunch, my audio product, is public now. What's not public yet: the reusable launch methodology that came out of it. Under NDA I'm happy to talk about it.",
  },
  stack: {
    heading: "Stack",
    entries: [
      {
        heading: "Backend",
        body: "Python (FastAPI, async I/O), Rust for realtime/FFI, TypeScript for Node and Edge functions.",
      },
      {
        heading: "Audio / mobile",
        body: "Real-time audio engines in Rust with FFI, cross-platform Android (NDK, arm64 / armv7 / x86_64), React Native + Expo.",
      },
      {
        heading: "AI / agents",
        body: "Anthropic Claude (API + Code) primarily, Perplexity for research, ChatGPT for prompt work. Local Ollama (Qwen 2.5, Llama 3.2). agentskills.io standard (OpenClaw-compatible), three-tier fallback pattern, ComfyUI.",
      },
      {
        heading: "Data",
        body: "Supabase (Postgres + RLS, EU-Frankfurt), Cloudflare R2, NDJSON event streams, local vault patterns (Obsidian).",
      },
      {
        heading: "Tooling",
        body: "Claude Code, Cursor, Stripe, EAS Build, Sentry (EU), Vercel.",
      },
      {
        heading: "Hardware",
        body: "Main workstation: Ryzen 7 3700X with RX 6650 XT (8GB), Windows. ECHO + HUD + ComfyUI + dev stack run here. A second, older AMD machine serves as a Linux testbed. For heavy inference I fall back on remote access to more GPU power.",
      },
    ],
  },
  approach: {
    heading: "How I work on projects",
    marginNote: "(honest = fewer surprises later)",
    p1Before:
      "Honest about what works and what doesn't. No “ship it in 2 weeks” promises when it's 4. ",
    p1Highlight:
      "I'd rather get an ugly version into production early than a pretty roadmap that never gets built",
    p1After: ".",
    p2: "Stack breadth over specialism. If I'm deep in audio DSP I still need to be able to set up a Stripe flow, and vice versa. Otherwise the system rattles somewhere at the seams.",
    p3: "EU-first for customer data. Frankfurt Supabase, EU Sentry, a Record of Processing Activities that's actually kept up to date. Not a marketing claim. Just where my users and I live.",
  },
};

export default en;
