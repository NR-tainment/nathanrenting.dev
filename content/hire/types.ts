export type Bullet = { strong: string; body: string };
export type Row = { label: string; body: string; highlight?: string };
export type Step = { strong: string; body: string };

export type HireDict = {
  meta: { title: string; description: string };
  h1: string;
  availability: string;
  what: {
    heading: string;
    lead: string;
    bullets: Bullet[];
  };
  practical: {
    heading: string;
    marginNote: string;
    // Tarief row carries an inline <MarkerHighlight>; split into highlight + body
    rows: {
      label: string;
      // for the highlighted row, `highlight` is the marked text and `body` the rest
      body: string;
      highlight?: string;
    }[];
  };
  start: {
    heading: string;
    steps: Step[];
  };
  contact: {
    heading: string;
    body: string;
    marginNote: string;
  };
};
