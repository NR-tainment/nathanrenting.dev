/**
 * Shared UI chrome (nav, footer, language switcher). This is the only
 * namespace whose non-NL translations are needed *now* for the architecture
 * to function — the switcher and nav must render in every locale. NL is the
 * source + the type contract; EN/DE/FR fill the same shape in the fan-out.
 */
export type CommonDict = {
  nav: {
    home: string;
    work: string;
    services: string;
    patterns: string;
    about: string;
    hire: string;
  };
  footer: {
    inhuur: string;
    builtWith: string; // text before the source link
    sourceLinkLabel: string; // the linked github text
    builtWithSuffix: string; // text after the source link (e.g. ".")
  };
  switcher: {
    /** aria-label, parameterised by target language name */
    switchTo: Record<"nl" | "en" | "de" | "fr", string>;
  };
};
