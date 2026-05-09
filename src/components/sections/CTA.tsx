"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

type Status = "idle" | "submitting" | "received";

export function CTA() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // Inline validation — keeps the form honest without a backend.
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setError("Please enter a valid work email.");
      return;
    }
    if (!org.trim()) {
      setError("GitHub organization is required.");
      return;
    }

    setStatus("submitting");
    // Simulate a network round-trip — purely for the UX rhythm.
    window.setTimeout(() => setStatus("received"), 700);
  }

  return (
    <section
      id="access"
      className="ledger relative isolate overflow-hidden border-y border-ink-500/60"
      aria-label="Request access"
    >
      {/* Climax glow — a faint gold radial emanating from the upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 88% 12%, rgba(233,185,73,0.12) 0%, rgba(233,185,73,0.03) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 8% 92%, rgba(184,115,51,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-500/70" aria-hidden />
            <span className="eyebrow">X. The Invitation</span>
            <span className="h-px w-10 bg-gold-500/70" aria-hidden />
          </div>

          {/* Massive headline */}
          <h2 className="font-display mt-8 text-balance text-5xl leading-[1.0] tracking-tight text-bone-50 md:text-[5.5rem] md:leading-[0.98]">
            Stop writing tests.
            <br />
            <span className="italic text-gold-400">Start shipping.</span>
          </h2>

          {/* Sub-line */}
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-bone-200 md:text-xl">
            Hand the manual coverage grind to the agent. Keep the strategic
            work for yourself. The first PR lands within hours of install.
          </p>

          {/* Form / received state */}
          <div className="mx-auto mt-14 max-w-2xl">
            <AnimatePresence mode="wait" initial={false}>
              {status === "received" ? (
                <motion.div
                  key="received"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="card-edge flex flex-col items-center gap-3 px-8 py-10 text-center"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-gold-500 text-gold-500">
                    <Check className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="font-display text-2xl text-bone-50 md:text-3xl">
                    Received. We&rsquo;ll be in touch.
                  </p>
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-bone-400">
                    Expect a reply within one business day
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-1 gap-5 text-left md:grid-cols-2 md:gap-6"
                >
                  {/* Work email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="cta-email"
                      className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-300"
                    >
                      Work email
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="lena@atlas.dev"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "submitting"}
                      className="w-full border border-ink-500 bg-ink-800/80 px-4 py-3.5 font-mono text-[0.9rem] text-bone-50 placeholder:text-bone-500 outline-none transition-all focus:border-gold-500 focus:bg-ink-800 focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60"
                    />
                  </div>

                  {/* GitHub org */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="cta-org"
                      className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-300"
                    >
                      GitHub organization
                    </label>
                    <input
                      id="cta-org"
                      type="text"
                      autoComplete="organization"
                      required
                      placeholder="atlas-labs"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      disabled={status === "submitting"}
                      className="w-full border border-ink-500 bg-ink-800/80 px-4 py-3.5 font-mono text-[0.9rem] text-bone-50 placeholder:text-bone-500 outline-none transition-all focus:border-gold-500 focus:bg-ink-800 focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60"
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 md:mt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary w-full justify-center md:w-auto"
                    >
                      {status === "submitting"
                        ? "Sending…"
                        : "Request access"}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </button>
                  </div>

                  {/* Error */}
                  {error && (
                    <p
                      role="alert"
                      className="md:col-span-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-crimson-500"
                    >
                      ▲ {error}
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>

            {/* Confirmation pill */}
            <div className="mt-10 flex justify-center">
              <span className="inline-flex items-center gap-2.5 border border-ink-500 bg-ink-800/70 px-3.5 py-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-bone-300">
                <span className="dot pulse-gold" aria-hidden />
                Currently onboarding 12 repos this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
