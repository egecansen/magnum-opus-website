"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const TERMINAL_LINES: Array<{
  text: string;
  status: "cmd" | "done" | "running";
  count?: string;
}> = [
  { text: "$ mo onboard civitas-cerebrum/book-hive", status: "cmd" },
  { text: "stage 01 — journey-mapping", status: "done" },
  { text: "stage 02 — scaffold & setup", status: "done" },
  { text: "stage 03 — functional-testing", status: "done", count: "142 tests" },
  {
    text: "stage 04 — negative-validation",
    status: "done",
    count: " 89 tests",
  },
  { text: "stage 05 — state-session", status: "running" },
];

const STATS: Array<{ value: string; label: string }> = [
  { value: "600+", label: "tests / repo" },
  { value: "16", label: "discovery stages" },
  { value: "8", label: "test types" },
  { value: "0", label: "humans in loop" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden pt-28 md:pt-36"
    >
      {/* Faint ledger grid behind the whole hero */}
      <div
        aria-hidden
        className="ledger-faint pointer-events-none absolute inset-0 -z-10"
      />

      {/* Soft copper glow upper-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,115,51,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3"
            >
              <span className="dot pulse-gold" />
              <span className="eyebrow">
                Civitas Cerebrum · Magnum Opus · v0.1.0
              </span>
            </motion.div>

            {/* Roman numeral section marker — editorial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.3em] text-bone-400">
                I.
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-ink-500" />
              <span className="font-mono text-[0.7rem] tracking-[0.3em] text-bone-400">
                THE GREAT WORK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
              className="font-display mt-7 text-balance text-[clamp(2.75rem,7.5vw,6.4rem)] leading-[0.95] tracking-[-0.02em] text-bone-50"
            >
              Replace a QA team
              <br />
              with{" "}
              <span className="relative inline-block">
                <span
                  className="font-display italic text-gold-400"
                  style={{
                    fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 1",
                    fontWeight: 500,
                  }}
                >
                  one&nbsp;autonomous
                </span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gold-500/70"
                />
              </span>
              <br />
              <span className="text-bone-50">agent.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="mt-7 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-bone-300 md:text-[1.08rem]"
            >
              Magnum Opus ingests your repository, maps every user journey, and
              writes hundreds of end-to-end tests across eight specialized
              suites — then opens a pull request with bug reports and
              screenshot-grade evidence. No standups. No tickets. No humans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#access" className="btn-primary">
                Request Access
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a href="#pipeline" className="btn-ghost">
                See the pipeline
              </a>
            </motion.div>
          </div>

          {/* RIGHT — terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
            className="lg:col-span-5"
          >
            <TerminalCard />
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          className="mt-20 border-t border-ink-500"
        >
          <dl className="grid grid-cols-2 divide-x divide-ink-500 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="py-6 pr-4 first:pl-0 md:py-7 md:pl-6 md:first:pl-0">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400">
                  {s.label}
                </dt>
                <dd className="font-display mt-2 text-3xl text-bone-50 md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Terminal card (right side of hero) ---------- */

function TerminalCard() {
  return (
    <div className="relative">
      {/* Annotation rail outside the card */}
      <div className="absolute -left-16 top-2 hidden flex-col items-end gap-2 xl:flex">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-bone-400">
          run.log
        </span>
        <span className="h-12 w-px bg-ink-500" />
      </div>

      <div className="relative overflow-hidden border border-ink-500 bg-ink-800/90 backdrop-blur-sm">
        {/* Top gold rule */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, rgba(233,185,73,0.0), rgba(233,185,73,0.7) 30%, rgba(233,185,73,0.7) 70%, rgba(233,185,73,0.0))",
          }}
        />

        {/* Ledger grid background */}
        <div
          aria-hidden
          className="ledger-faint pointer-events-none absolute inset-0"
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-ink-500 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-ink-500" />
            <span className="h-2 w-2 rounded-full bg-ink-500" />
            <span className="h-2 w-2 rounded-full bg-gold-500/80" />
          </div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400">
            magnum-opus · agent
          </span>
          <span className="font-mono text-[0.62rem] tracking-[0.18em] text-bone-400">
            22:14 UTC
          </span>
        </div>

        {/* Body */}
        <div className="relative px-5 py-6 font-mono text-[0.82rem] leading-[1.85] text-bone-100 md:px-7 md:py-7">
          {TERMINAL_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.9 + i * 0.18,
                ease: EASE,
              }}
              className="flex items-baseline gap-3"
            >
              {line.status === "cmd" && (
                <span className="text-bone-300">{line.text}</span>
              )}
              {line.status === "done" && (
                <>
                  <span className="text-gold-500">✓</span>
                  <span className="flex-1 text-bone-200">{line.text}</span>
                  {line.count && (
                    <span className="text-bone-400">[{line.count}]</span>
                  )}
                </>
              )}
              {line.status === "running" && (
                <>
                  <span className="text-gold-400">▶</span>
                  <span className="flex-1 text-bone-50">{line.text}</span>
                  <span className="text-bone-400">running</span>
                  <BlinkingCursor />
                </>
              )}
            </motion.div>
          ))}

          {/* Trailing prompt with cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + TERMINAL_LINES.length * 0.18, duration: 0.5 }}
            className="mt-4 flex items-center gap-2 text-bone-400"
          >
            <span>$</span>
            <BlinkingCursor />
          </motion.div>
        </div>
      </div>

      {/* Caption row beneath card */}
      <div className="mt-4 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400">
        <span>fig. i — single agent · single PR</span>
        <span className="text-bone-300">↗</span>
      </div>
    </div>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      aria-hidden
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1.05, repeat: Infinity, ease: "linear" }}
      className="inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-gold-500"
    />
  );
}
