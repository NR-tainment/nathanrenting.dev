export type PatternItem = {
  href: string; // path without locale prefix
  title: string;
  oneLiner: string;
  tags: string[];
};

export type PatternsDict = {
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  marginNote: string;
  items: PatternItem[];
};
