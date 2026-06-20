export type StackEntry = { heading: string; body: string };

export type AboutDict = {
  meta: { title: string; description: string };
  portraitAlt: string;
  h1: string;
  // intro paragraphs (some carry an inline <MarkerHighlight>; the highlighted
  // fragment is split out so the markup stays in the page)
  intro: {
    lead1: string; // "Nathan Renting (officieel: Jonathan David Renting). "
    leadHighlight: string; // "Solo dev, Eindhoven"
    lead2: string; // "."
    p1: string; // daily life
    p2: string; // and building agent systems
    p3Highlight: string; // "Stack volgt het probleem."
    p3: string; // text after highlight
    p4: string; // AI tooling
    p5Before: string; // text before the /patterns link
    p5LinkLabel: string; // "/patterns"
    p5After: string; // "."
  };
  origin: {
    heading: string;
    marginNote: string;
    p1: string;
    p2Before: string; // text before highlight
    p2Highlight: string; // "Zelfgeleerd, geen mooi LinkedIn-pad"
    p2After: string; // "."
    p3: string;
    p4: string;
  };
  now: {
    heading: string;
    p1: string;
    p2: string;
  };
  stack: {
    heading: string;
    entries: StackEntry[];
  };
  approach: {
    heading: string;
    marginNote: string;
    p1Before: string;
    p1Highlight: string;
    p1After: string;
    p2: string;
    p3: string;
  };
};
