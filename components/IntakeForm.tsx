"use client";

import { useState } from "react";
import { SketchBox, SketchUnderline } from "@/components/sketch";

type Field = {
  q: string;
  type: "text" | "textarea" | "select";
  hint?: string;
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

// ponytail: Nederlands-only, want dit formulier deel ik per link met een prospect —
// het wordt niet gevonden via zoekmachines. Verhuis naar content/dictionaries zodra
// er een niet-Nederlandse klant mee moet werken.
const SECTIONS: { heading: string; fields: Field[] }[] = [
  {
    heading: "over jullie",
    fields: [
      { q: "Organisatie", type: "text", placeholder: "bedrijfsnaam" },
      {
        q: "Contactpersoon",
        type: "text",
        required: true,
        placeholder: "naam en rol",
      },
      {
        q: "E-mail",
        type: "text",
        required: true,
        placeholder: "zodat ik kan reageren",
      },
      { q: "Telefoon", type: "text" },
      { q: "Website", type: "text" },
    ],
  },
  {
    heading: "het project",
    fields: [
      {
        q: "Wat bouwen jullie",
        type: "textarea",
        hint: "een paar zinnen is genoeg",
        required: true,
      },
      {
        q: "Fase",
        type: "select",
        options: [
          "Idee, nog niets gebouwd",
          "Ontwerp of onderzoek",
          "Prototype",
          "Pilot bij echte gebruikers",
          "Live in productie",
        ],
      },
      {
        q: "Wat bestaat er al",
        type: "textarea",
        hint: "code, hardware, ontwerpen, documentatie — wat er ligt en wat nog niet",
      },
      {
        q: "Deadline of mijlpaal",
        type: "text",
        hint: "demo, pilot, investeringsronde, aanbesteding",
      },
      { q: "Waar loopt het vast", type: "textarea" },
    ],
  },
  {
    heading: "techniek",
    fields: [
      { q: "Stack", type: "textarea", hint: "talen, frameworks, hosting" },
      {
        q: "AI of spraakherkenning",
        type: "textarea",
        hint: "welke modellen of diensten gebruiken jullie?",
      },
      {
        q: "Waar draait dat",
        type: "select",
        options: [
          "Volledig op eigen infrastructuur",
          "Externe dienst binnen de EU",
          "Externe dienst buiten de EU",
          "Op het apparaat zelf",
          "Combinatie / weten we nog niet",
        ],
      },
      {
        q: "Audio of realtime signaal",
        type: "textarea",
        hint: "opnameomstandigheden, achtergrondgeluid, aantal sprekers, hardware",
      },
    ],
  },
  {
    heading: "data en privacy",
    fields: [
      {
        q: "Persoonsgegevens",
        type: "select",
        options: [
          "Nee",
          "Ja, gewone persoonsgegevens",
          "Ja, ook bijzondere categorieën (gezondheid, biometrie)",
          "Weten we nog niet zeker",
        ],
      },
      {
        q: "Identifiers naar externe diensten",
        type: "textarea",
        hint: "gaat er een klant-, gebruikers- of device-id mee de deur uit, of blijft de koppeling bij jullie?",
      },
      { q: "Opslag en bewaartermijn", type: "textarea" },
      {
        q: "Wat is al geregeld",
        type: "textarea",
        hint: "verwerkersovereenkomsten, DPIA, ISO 27001 of NEN 7510, AI Act-classificatie, pentest",
      },
      { q: "Verantwoordelijke privacy en security", type: "text" },
    ],
  },
  {
    heading: "integraties",
    fields: [
      { q: "Systemen om mee te koppelen", type: "textarea" },
      {
        q: "Is die toegang geregeld",
        type: "select",
        options: [
          "Ja, we hebben werkende toegang",
          "Toegezegd, nog niet werkend",
          "Aangevraagd, nog geen antwoord",
          "Nog niet aangevraagd",
          "Niet van toepassing",
        ],
      },
    ],
  },
  {
    heading: "team en middelen",
    fields: [
      { q: "Wie werkt er nu aan, en waaraan", type: "textarea" },
      {
        q: "Financiering",
        type: "text",
        hint: "eigen middelen, omzet, investering, subsidie",
      },
      {
        q: "Budgetindicatie",
        type: "text",
        hint: "een orde van grootte is genoeg — het scheelt ons allebei tijd",
      },
    ],
  },
  {
    heading: "de opdracht",
    fields: [
      {
        q: "Rol die jullie voor mij zien",
        type: "select",
        options: [
          "Advies en architectuur",
          "Meebouwen als developer",
          "Onderzoek of haalbaarheidstraject",
          "Beoordeling van bestaand werk",
          "Nog niet scherp",
        ],
      },
      {
        q: "Verwachte inzet en startdatum",
        type: "text",
        hint: "ik werk remote, twee tot drie dagen per week",
      },
      {
        q: "Wanneer is dit geslaagd",
        type: "textarea",
        hint: "zo concreet mogelijk: wat moet er over drie maanden waar zijn?",
      },
      { q: "Verder nog iets", type: "textarea" },
    ],
  },
];

const INPUT =
  "w-full bg-transparent border-b border-zinc-700 focus:border-cyan-400 outline-none py-1.5 text-zinc-100 placeholder-zinc-600 placeholder:font-handwriting transition-colors";
const BLOCK =
  "w-full bg-transparent border border-zinc-700 focus:border-cyan-400 outline-none p-3 text-zinc-100 placeholder-zinc-600 placeholder:font-handwriting rounded resize-y transition-colors";

type FormState = "idle" | "submitting" | "success" | "error";

export function IntakeForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const data = new FormData(e.currentTarget);
    const get = (q: string) => String(data.get(q) ?? "").trim();

    const lines: string[] = [];
    for (const section of SECTIONS) {
      const filled = section.fields.filter((f) => get(f.q));
      if (!filled.length) continue;
      lines.push("", `== ${section.heading.toUpperCase()} ==`);
      for (const f of filled) lines.push(`${f.q}: ${get(f.q)}`);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("Contactpersoon"),
          email: get("E-mail"),
          message: ["Intake via nathanrenting.dev/intake", ...lines].join("\n"),
          website: get("website"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Er ging iets mis");
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <SketchBox className="rounded-md" seed={307}>
        <div className="px-6 py-12 text-center">
          <div className="font-handwriting text-4xl text-cyan-400 mb-3">
            ✓ ontvangen
          </div>
          <p className="text-zinc-300 mb-1">
            Dank je. Ik lees het door en kom er binnen één werkdag op terug.
          </p>
          <p className="text-zinc-500 text-sm">
            Iets vergeten? Mail het na naar{" "}
            <a
              href="mailto:info@nathanrenting.dev"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              info@nathanrenting.dev
            </a>
          </p>
        </div>
      </SketchBox>
    );
  }

  const disabled = state === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-12" noValidate>
      {/* Honeypot — hidden from real users, bots fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website (laat leeg)
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {SECTIONS.map((section, i) => (
        <section key={section.heading}>
          <h2 className="text-xl font-semibold text-zinc-100 mb-6">
            <SketchUnderline seed={71 + i * 12}>{section.heading}</SketchUnderline>
          </h2>

          <SketchBox className="rounded-md" seed={211 + i * 7}>
            <div className="p-6 space-y-5">
              {section.fields.map((f) => {
                const id = `intake-${f.q.replace(/\W+/g, "-").toLowerCase()}`;
                return (
                  <div key={f.q}>
                    <label
                      htmlFor={id}
                      className="block font-handwriting text-cyan-400 mb-1.5 text-base"
                    >
                      {f.q.toLowerCase()}
                      {f.required && <span className="text-zinc-600"> *</span>}
                    </label>

                    {f.type === "select" ? (
                      <select
                        id={id}
                        name={f.q}
                        disabled={disabled}
                        defaultValue=""
                        className={`${INPUT} font-mono text-sm`}
                      >
                        <option value="" className="bg-zinc-950">
                          — kies —
                        </option>
                        {f.options?.map((o) => (
                          <option key={o} value={o} className="bg-zinc-950">
                            {o}
                          </option>
                        ))}
                      </select>
                    ) : f.type === "textarea" ? (
                      <textarea
                        id={id}
                        name={f.q}
                        rows={3}
                        disabled={disabled}
                        required={f.required}
                        placeholder={f.placeholder}
                        className={BLOCK}
                      />
                    ) : (
                      <input
                        id={id}
                        type="text"
                        name={f.q}
                        disabled={disabled}
                        required={f.required}
                        placeholder={f.placeholder}
                        className={INPUT}
                      />
                    )}

                    {f.hint && (
                      <p className="mt-1.5 text-xs text-zinc-500 font-mono leading-relaxed">
                        {f.hint}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </SketchBox>
        </section>
      ))}

      {state === "error" && (
        <div className="text-sm font-mono text-red-400 leading-relaxed">
          {error}
          <br />
          Of mail direct:{" "}
          <a
            href="mailto:info@nathanrenting.dev"
            className="underline hover:text-red-300"
          >
            info@nathanrenting.dev
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="submit"
          disabled={disabled}
          className="font-mono text-sm bg-cyan-400 text-zinc-950 px-5 py-2 rounded hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {disabled ? "versturen..." : "versturen →"}
        </button>
        <p className="text-xs text-zinc-500 font-mono">
          alleen de velden met * zijn verplicht
        </p>
      </div>
    </form>
  );
}
