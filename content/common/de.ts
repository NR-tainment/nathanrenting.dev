import type { CommonDict } from "./types";

// DE chrome — needed now so the nav/footer/switcher render in German on /de.
const de: CommonDict = {
  nav: {
    home: "Start",
    work: "Arbeiten",
    services: "Leistungen",
    patterns: "Patterns",
    about: "Über mich",
    hire: "Buchen",
  },
  footer: {
    inhuur: "Buchen",
    kvkLabel: "KvK-Nr.",
    vatLabel: "USt-IdNr.",
    builtWith: "Im Alleingang gebaut. Next.js, MDX, Kaffee. Source auf ",
    sourceLinkLabel: "github.com/NR-tainment",
    builtWithSuffix: ".",
  },
  switcher: {
    switchTo: {
      nl: "Zu Niederländisch wechseln",
      en: "Zu Englisch wechseln",
      de: "Auf Deutsch wechseln",
      fr: "Zu Französisch wechseln",
    },
  },
};

export default de;
