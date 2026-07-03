/**
 * Home page content contract. NL (./nl.ts) is the source of truth and defines
 * this shape; EN is seeded now (from the retired app/en summary), DE/FR follow
 * in the fan-out. All JSX/components stay in the page — only these strings vary.
 */
export type Faq = { q: string; a: string };

export type ProjectCardContent = {
  href: string; // path WITHOUT locale prefix, e.g. "/projects/echo"
  title: string;
  oneLiner: string;
  tags: string[];
  status: string;
  externalUrl?: string;
};

export type HomeDict = {
  meta: {
    /** Used for the WebPage JSON-LD `name`. Title/description come from layout
     *  defaults unless a locale overrides them here. */
    title?: string;
    description?: string;
  };
  hero: {
    availability: string;
    // headline is split around inline <SketchUnderline>/<ChalkDoodle> markup
    headlineLead: string; // "Solo dev met "
    headlineUnderline: string; // "audio-achtergrond"
    headlineAfterDoodle: string; // ". " (punctuation between doodle and accents)
    headlineAccent1: string; // "Agent-systemen"
    headlineMid: string; // ", "
    headlineAccent2: string; // "real-time audio"
    headlineTail: string; // ", en de techniek eronder."
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    marginNote: string;
  };
  work: {
    heading: string;
    marginNote: string;
    ndaNote: string;
  };
  projects: {
    echo: ProjectCardContent;
    therapyvault: ProjectCardContent;
    audiolab: ProjectCardContent;
    audiolaunch: ProjectCardContent;
    captioncompass: ProjectCardContent;
    photoflow: ProjectCardContent;
    familykart: ProjectCardContent;
  };
  stealth: {
    label: string;
    // each stealth card has plain-text fragments around <Redacted> markup
    method: {
      category: string;
      status: string;
      part1: string;
      redacted1: string;
      part2: string;
      redacted2: string;
      part3: string;
    };
  };
  patterns: {
    heading: string;
    marginNote: string;
    intro: string;
    links: { href: string; label: string }[];
    allLink: string;
  };
  /**
   * "Recent writing" — 2–3 real patterns surfaced on the home page with their
   * real publish dates. Drives both the visible section and the home ItemList
   * JSON-LD (each item → TechArticle ref with headline + datePublished +
   * author #nathan). href is locale-less; datePublished is ISO (YYYY-MM-DD).
   */
  writing: {
    heading: string;
    marginNote: string;
    intro: string;
    items: {
      href: string;
      headline: string;
      summary: string;
      datePublished: string;
      dateLabel: string;
    }[];
    allLink: string;
  };
  bring: {
    heading: string;
    highlight: string; // "Vreemde combo"
    body: string; // text after the highlight
  };
  faqHeading: string;
  faq: Faq[];
  cta: {
    body: string;
    link: string;
  };
};
