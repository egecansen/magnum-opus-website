"use client";

import { motion } from "motion/react";
import { useState } from "react";
import clsx from "clsx";

type Mode = "onboarding" | "pr-review" | "discovery";

const MODES: { id: Mode; label: string; entry: string; desc: string }[] = [
  {
    id: "onboarding",
    label: "Onboarding",
    entry: "onboard.mjs",
    desc: "One-time per repo. Full 16-stage discovery from zero to delivered PR.",
  },
  {
    id: "pr-review",
    label: "PR Review",
    entry: "qa.mjs",
    desc: "Lightweight per-PR. Diff-aware suite execution + senior-QA review comments.",
  },
  {
    id: "discovery",
    label: "Test Discovery",
    entry: "discover.mjs",
    desc: "Periodic re-run for coverage expansion against drifted UI surface.",
  },
];

export function Architecture() {
  const [mode, setMode] = useState<Mode>("onboarding");
  const active = MODES.find((m) => m.id === mode)!;

  return (
    <section id="architecture" className="section relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">V. Architecture</div>
            <div className="rule mt-6 max-w-[8rem]" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone-50 leading-[0.95]">
              Three layers.<br />
              <span className="italic text-gold-500">Zero coupling.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-bone-300 text-lg leading-relaxed">
              The orchestrator schedules. The pipeline drives. The skills know how.
              Each layer talks to the next through a single, narrow contract.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Diagram */}
          <div className="lg:col-span-8">
            <div className="ledger-faint relative border border-ink-500 bg-ink-900/40 p-8 md:p-12">
              <div className="absolute top-3 left-4 font-mono text-[10px] text-bone-400 tracking-widest">
                FIG.III · SYSTEM TOPOLOGY
              </div>

              {/* Layer 1: Service */}
              <Layer
                idx={0}
                tag="SERVICE"
                title="The orchestrator"
                bullets={[
                  "server.mjs · HTTP intake",
                  "RunQueue · per-repo serial",
                  "Runner · Local | Container",
                ]}
              />

              <Annotation label="HTTP triggers · webhook + CLI" />

              {/* Layer 2: Pipeline (mode-specific entry script) */}
              <Layer
                idx={1}
                highlight
                tag="PIPELINE"
                title="The 16-stage runner"
                bullets={[
                  `${active.entry}  · entry`,
                  "Claude Agent SDK query()",
                  "context-bundle.md handoff",
                ]}
              />

              <Annotation label="Methodology + artifact contracts" />

              {/* Layer 3: Skill */}
              <Layer
                idx={2}
                tag="SKILL"
                title="The methodology"
                bullets={[
                  "@civitas-cerebrum/singularity",
                  "13 skills · loaded per stage",
                  "unloaded after completion",
                ]}
              />
            </div>
          </div>

          {/* Mode toggle panel */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="eyebrow">Three modes</div>
              <div className="font-mono text-bone-400 text-xs mt-3">
                Switch the pipeline&apos;s entry script.
              </div>

              <div className="mt-6 space-y-2">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={clsx(
                      "w-full text-left flex items-center justify-between gap-3 px-4 py-3 border transition-all duration-300",
                      mode === m.id
                        ? "border-gold-500 bg-ink-700 text-bone-50"
                        : "border-ink-500 bg-ink-800 text-bone-300 hover:border-bone-400",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={clsx(
                          "h-1.5 w-1.5 rounded-full transition-colors",
                          mode === m.id ? "bg-gold-500" : "bg-bone-500",
                        )}
                      />
                      <span className="font-mono text-xs uppercase tracking-[0.18em]">
                        {m.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10.5px] text-bone-400">
                      {m.entry}
                    </span>
                  </button>
                ))}
              </div>

              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-6 border-l border-gold-500 pl-4"
              >
                <div className="font-display text-xl text-bone-50 leading-tight">
                  {active.label}
                </div>
                <p className="text-bone-300 text-sm mt-2 leading-relaxed">
                  {active.desc}
                </p>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Layer({
  idx,
  tag,
  title,
  bullets,
  highlight,
}: {
  idx: number;
  tag: string;
  title: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      className={clsx(
        "relative grid grid-cols-12 gap-4 items-center border bg-ink-800 px-6 py-6 md:px-8 md:py-7",
        highlight ? "border-gold-500/60 shadow-[0_0_40px_-20px_rgba(233,185,73,0.4)]" : "border-ink-500",
      )}
    >
      <div className="col-span-12 md:col-span-3">
        <div
          className={clsx(
            "font-mono text-[11px] tracking-[0.22em]",
            highlight ? "text-gold-500" : "text-bone-400",
          )}
        >
          {tag}
        </div>
        <div className="font-display text-xl md:text-2xl text-bone-50 leading-tight mt-1">
          {title}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 md:border-l md:border-ink-500 md:pl-6">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-6">
          {bullets.map((b) => (
            <li
              key={b}
              className="font-mono text-[11.5px] text-bone-300 leading-relaxed"
            >
              <span className="text-bone-500 mr-2">·</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Annotation({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-3 my-3 pl-2"
      aria-hidden
    >
      <div className="h-6 w-[1px] bg-ink-500" />
      <span className="font-mono text-[10.5px] text-bone-400 tracking-wider uppercase">
        ↓ {label}
      </span>
    </div>
  );
}
