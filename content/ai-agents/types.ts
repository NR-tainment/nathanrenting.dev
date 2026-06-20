export type Row = { label: string; body: string };
export type Bullet = { strong: string; body: string };
export type Step = { strong: string; body: string };

export type AiAgentsDict = {
  meta: { title: string; description: string };
  eyebrow: string;
  h1Lead: string; // "AI agents bouwen. "
  h1Accent: string; // "Productie || niet demo"
  h1Tail: string; // "."
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  help: {
    heading: string;
    lead: string;
    bullets: Bullet[];
  };
  stack: {
    heading: string;
    leadHighlight: string; // "Stack volgt het probleem"
    leadAfter: string; // text after highlight
    rows: Row[];
  };
  proof: {
    heading: string;
    marginNote: string;
    p1: string;
    p2Before: string; // before highlight
    p2Highlight: string;
    p2After: string;
    link: string;
  };
  forWho: {
    heading: string;
    bullets: Bullet[];
  };
  how: {
    heading: string;
    marginNote: string;
    steps: Step[];
  };
  cta: {
    heading: string;
    body: string;
    link: string;
  };
};
