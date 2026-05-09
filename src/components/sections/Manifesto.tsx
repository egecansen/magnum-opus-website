"use client";

import { motion } from "motion/react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const PRINCIPLES = [
  {
    numeral: "i.",
    title: "Adversarial by default",
    body: "Probes XSS, race conditions, and session manipulation as a first-class run, not an afterthought.",
  },
  {
    numeral: "ii.",
    title: "Evidence-first",
    body: "Every bug ships with screenshots, traces, and reproduction steps. No speculative tickets.",
  },
  {
    numeral: "iii.",
    title: "PR-native",
    body: "Findings land where engineers already work — in a pull request, beside the diff.",
  },
  {
    numeral: "iv.",
    title: "Survive by design",
    body: "Skills, engine, and page repository persist. The model is hot-swappable. Swap the model — keep the methodology.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="section relative isolate overflow-hidden"
    >
      {/* faint copper drift behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(233,185,73,0.07), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Section header — Roman numeral marker */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid grid-cols-12 items-baseline gap-6"
        >
          <div className="col-span-12 flex items-center gap-4 md:col-span-3">
            <span className="font-display text-3xl text-gold-500">II.</span>
            <span className="h-px flex-1 bg-ink-500" />
          </div>
          <span className="col-span-12 eyebrow md:col-span-9">
            Manifesto · The Coverage Gap
          </span>
        </motion.div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14 md:gap-x-10">
          {/* LEFT — pull quote, asymmetric */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="col-span-12 md:col-span-7"
          >
            <p
              className="font-display text-balance text-[clamp(2rem,4.6vw,3.85rem)] leading-[1.04] tracking-[-0.015em] text-bone-50"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
            >
              <span className="text-bone-400">“</span>
              Manual QA is a coverage{" "}
              <span
                className="italic text-gold-400"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 1" }}
              >
                rounding error.
              </span>{" "}
              <br className="hidden md:block" />
              Magnum Opus closes the gap.
              <span className="text-bone-400">”</span>
            </p>

            <div className="mt-10 flex items-start gap-5">
              <span className="mt-1 inline-block h-px w-12 bg-gold-500" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-200">
                  Civitas Cerebrum
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone-400">
                  Founding Thesis · MMXXVI
                </p>
              </div>
            </div>

            {/* Sub-prose — magazine column feel */}
            <div className="mt-10 max-w-prose space-y-5 text-[0.96rem] leading-relaxed text-bone-300">
              <p>
                Test suites rot. Engineers ship faster than QA can author
                scenarios. Coverage decays into folklore — &ldquo;the auth flow
                is mostly tested&rdquo; — until production teaches otherwise.
              </p>
              <p>
                Magnum Opus is built on a different premise: an agent can
                discover the application, compose the suite, hunt the edge
                cases, and deliver the work as a pull request — at the cadence
                of the codebase, not the headcount.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — 2x2 principles grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="col-span-12 md:col-span-5"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="eyebrow">Four Principles</span>
              <span className="font-mono text-[0.62rem] tracking-[0.22em] text-bone-400">
                §02
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink-500">
              {PRINCIPLES.map((p, i) => (
                <motion.article
                  key={p.numeral}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.25 + i * 0.08,
                    ease: EASE,
                  }}
                  className="group relative border-b border-r border-ink-500 bg-ink-800/40 p-6 transition-colors duration-300 hover:bg-ink-700/60"
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className="font-display text-2xl italic text-gold-500"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 1" }}
                    >
                      {p.numeral}
                    </span>
                    <span className="font-mono text-[0.6rem] tracking-[0.22em] text-bone-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-[1.18rem] leading-tight tracking-tight text-bone-50">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-bone-300">
                    {p.body}
                  </p>

                  {/* Hover accent */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-500 group-hover:w-full"
                  />
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing refrain — the deck's signature line */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-24 grid grid-cols-12 items-end gap-6 md:mt-32"
        >
          <div className="col-span-12 md:col-span-3">
            <span className="h-px block w-12 bg-gold-500" />
            <span className="mt-4 block font-mono text-[0.62rem] uppercase tracking-[0.24em] text-bone-400">
              Refrain
            </span>
          </div>
          <p
            className="font-display col-span-12 text-balance text-[clamp(1.6rem,3.4vw,2.85rem)] leading-[1.1] tracking-[-0.012em] text-bone-100 md:col-span-9"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
          >
            The medium changed.{" "}
            <span
              className="italic text-gold-400"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 1" }}
            >
              The craft hasn&rsquo;t.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
