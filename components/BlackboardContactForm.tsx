"use client";

import { useState } from "react";
import { SketchBox } from "@/components/sketch";

type FormState = "idle" | "submitting" | "success" | "error";

export function BlackboardContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      // honeypot — bots fill this, humans don't see it
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Er ging iets mis");
      }
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <SketchBox className="rounded-md" seed={211}>
        <div className="px-6 py-12 text-center">
          <div className="font-handwriting text-4xl text-cyan-400 mb-3">
            ✓ ontvangen
          </div>
          <p className="text-zinc-300 mb-1">
            Reactie meestal binnen één werkdag.
          </p>
          <p className="text-zinc-500 text-sm">
            Bij urgentie:{" "}
            <a
              href="mailto:jdrenting@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              jdrenting@gmail.com
            </a>
          </p>
        </div>
      </SketchBox>
    );
  }

  return (
    <SketchBox className="rounded-md" seed={211}>
      <form onSubmit={onSubmit} className="p-6 space-y-5" noValidate>
        {/* Honeypot — hidden from real users, bots fill it */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Website (laat leeg)
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="contact-name"
            className="block font-handwriting text-cyan-400 mb-1.5 text-base"
          >
            naam
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            disabled={state === "submitting"}
            className="w-full bg-transparent border-b border-zinc-700 focus:border-cyan-400 outline-none py-1.5 text-zinc-100 placeholder-zinc-600 placeholder:font-handwriting transition-colors"
            placeholder="hoe heet je?"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block font-handwriting text-cyan-400 mb-1.5 text-base"
          >
            email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            disabled={state === "submitting"}
            className="w-full bg-transparent border-b border-zinc-700 focus:border-cyan-400 outline-none py-1.5 text-zinc-100 placeholder-zinc-600 placeholder:font-handwriting transition-colors"
            placeholder="zodat ik kan reageren"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block font-handwriting text-cyan-400 mb-1.5 text-base"
          >
            wat je nodig hebt
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            disabled={state === "submitting"}
            className="w-full bg-transparent border border-zinc-700 focus:border-cyan-400 outline-none p-3 text-zinc-100 placeholder-zinc-600 placeholder:font-handwriting rounded resize-y transition-colors"
            placeholder="kort: wat is het probleem, ruwe vorm van wat je zoekt, tijdshorizon..."
          />
        </div>

        {state === "error" && (
          <div className="text-sm font-mono text-red-400 leading-relaxed">
            {error}
            <br />
            Of mail direct:{" "}
            <a
              href="mailto:jdrenting@gmail.com"
              className="underline hover:text-red-300"
            >
              jdrenting@gmail.com
            </a>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="submit"
            disabled={state === "submitting"}
            className="font-mono text-sm bg-cyan-400 text-zinc-950 px-5 py-2 rounded hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {state === "submitting" ? "versturen..." : "versturen →"}
          </button>
          <p className="text-xs text-zinc-500 font-mono">
            of mail{" "}
            <a
              href="mailto:jdrenting@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              direct
            </a>
          </p>
        </div>
      </form>
    </SketchBox>
  );
}
