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
  form: ContactFormDict;
};

// Strings for components/BlackboardContactForm (the form on /hire).
export type ContactFormDict = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  honeypot: string;
  submit: string;
  submitting: string;
  altMail: string;
  altMailLink: string;
  successTitle: string;
  successBody: string;
  urgent: string;
  errorMail: string;
  // Chosen by HTTP status in the component: 429, 400, anything else.
  errors: { rateLimited: string; invalid: string; failed: string };
};
