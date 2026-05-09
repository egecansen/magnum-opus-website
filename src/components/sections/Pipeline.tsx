"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import clsx from "clsx";

type Stage = {
  num: number;
  roman: string;
  name: string;
  artifact: string;
  badge: string;
  badgeKind: "tests" | "skill" | "gate";
};

const STAGES: Stage[] = [
  { num: 1, roman: "I", name: "Journey Mapping", artifact: "produces journey-map.json + page-repository.json", badge: "→ journey-mapping", badgeKind: "skill" },
  { num: 2, roman: "II", name: "Scaffold & Setup", artifact: "writes baseFixture, ContextStore, CI workflow", badge: "→ singularity", badgeKind: "skill" },
  { num: 3, roman: "III", name: "Functional Testing", artifact: "happy-path coverage across every journey", badge: "142 tests", badgeKind: "tests" },
  { num: 4, roman: "IV", name: "Negative & Validation", artifact: "3-tier risk-weighted error taxonomy", badge: "98 tests", badgeKind: "tests" },
  { num: 5, roman: "V", name: "State & Session", artifact: "lifecycle, stale UI, cross-tab, re-login", badge: "61 tests", badgeKind: "tests" },
  { num: 6, roman: "VI", name: "Permission & Access", artifact: "auth gates, role isolation matrices", badge: "44 tests", badgeKind: "tests" },
  { num: 7, roman: "VII", name: "Usability / UX", artifact: "empty states, dead ends, overflow", badge: "37 tests", badgeKind: "tests" },
  { num: 8, roman: "VIII", name: "Search & Filtering", artifact: "URL state sync + edge cases", badge: "29 tests", badgeKind: "tests" },
  { num: 9, roman: "IX", name: "Responsive", artifact: "mobile 375×812, tablet 768×1024", badge: "52 tests", badgeKind: "tests" },
  { num: 10, roman: "X", name: "Security", artifact: "XSS, SQLi, CSRF, headers, tokens", badge: "73 tests", badgeKind: "tests" },
  { num: 11, roman: "XI", name: "Coverage Expansion", artifact: "3-turn iterative cycle, ledger dedup", badge: "+76 tests", badgeKind: "tests" },
  { num: 12, roman: "XII", name: "Bug Discovery", artifact: "adversarial probing, oracle synthesis", badge: "→ bug-discovery", badgeKind: "skill" },
  { num: 13, roman: "XIII", name: "Bug Verification", artifact: "false-positive gate, repro confirmation", badge: "→ verification", badgeKind: "gate" },
  { num: 14, roman: "XIV", name: "AI Adversarial", artifact: "LLM guardrails, prompt-injection probes", badge: "→ agents-vs-agents", badgeKind: "skill" },
  { num: 15, roman: "XV", name: "Test Consolidation", artifact: "dedup, restructure, tag normalization", badge: "→ consolidation", badgeKind: "gate" },
  { num: 16, roman: "XVI", name: "Deliver", artifact: "sanitize, commit, push, open PR", badge: "1 pull request", badgeKind: "tests" },
];

export function Pipeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });
  const stageNumber = useTransform(scrollYProgress, (v) => {
    const n = Math.min(16, Math.max(1, Math.ceil(v * 16) || 1));
    return n.toString().padStart(2, "0");
  });
  const progressHeight = useTransform(scrollYProgress, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);

  return (
    <section id="pipeline" className="section relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">III. The Pipeline</div>
            <div className="rule mt-6 max-w-[8rem]" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone-50 leading-[0.95]">
              Sixteen stages.<br />
              <span className="text-gold-500 italic">One delivery.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-bone-300 text-lg leading-relaxed">
              Each stage is a fresh{" "}
              <span className="font-mono text-bone-100">query()</span> with isolated
              context. They communicate only through on-disk artifacts — a sealed
              chain of custody from repository to pull request.
            </p>
          </div>
        </div>

        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky progress indicator */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32">
              <div className="eyebrow text-bone-400">Current</div>
              <div className="font-mono text-bone-400 text-xs mt-3">STAGE</div>
              <div className="font-display text-5xl text-gold-500 leading-none mt-1 tabular-nums">
                <motion.span>{stageNumber}</motion.span>
              </div>
              <div className="font-mono text-bone-400 text-xs mt-1">/ XVI</div>
              <div className="mt-6 h-48 w-[1px] bg-ink-500 relative">
                <motion.div
                  style={{ height: progressHeight }}
                  className="absolute inset-x-0 top-0 w-[1px] bg-gold-500"
                />
              </div>
            </div>
          </aside>

          {/* Stage list */}
          <ol className="lg:col-span-10 border-t border-ink-500">
            {STAGES.map((stage, i) => (
              <StageRow key={stage.num} stage={stage} index={i} />
            ))}
          </ol>
        </div>

        {/* Context-bundle callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-5">
            <div className="eyebrow">The Handoff</div>
            <h3 className="font-display text-3xl md:text-4xl text-bone-50 mt-4 leading-tight">
              Context as <span className="italic text-gold-500">artifact</span>, not memory.
            </h3>
            <p className="text-bone-300 mt-4 leading-relaxed">
              Every stage reads the upstream{" "}
              <span className="font-mono text-bone-100">context-bundle.md</span>,
              writes its own, and exits. No shared state. No drift. Reproducible.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="card-edge font-mono text-[12.5px] leading-relaxed overflow-hidden">
              <div className="flex items-center gap-2 border-b border-ink-500 px-4 py-2.5 bg-ink-700">
                <span className="h-2 w-2 rounded-full bg-crimson-500/70" />
                <span className="h-2 w-2 rounded-full bg-gold-500/70" />
                <span className="h-2 w-2 rounded-full bg-verdigris-500/70" />
                <span className="ml-3 text-bone-400 text-[11px] tracking-wider">
                  artifacts/run-7af2/context-bundle.md
                </span>
              </div>
              <pre className="px-5 py-4 text-bone-200 whitespace-pre-wrap">
{`# stage-04 → stage-05 handoff
journeys_covered: 7
auth_state: storage/admin.json
flaky_specs: []
open_questions:
  - cross-tab logout on /billing
  - stale cart after 3xx redirect
next_skill: state-session`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StageRow({ stage, index }: { stage: Stage; index: number }) {
  const badgeColor =
    stage.badgeKind === "tests"
      ? "text-gold-400"
      : stage.badgeKind === "skill"
      ? "text-verdigris-500"
      : "text-copper-500";

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: [0.2, 0.8, 0.2, 1] }}
      className={clsx(
        "group relative grid grid-cols-12 items-center gap-4 border-b border-ink-500 py-6 px-2 lg:px-6",
        "transition-colors duration-300 hover:bg-ink-800/50",
      )}
    >
      {/* Glow border on hover/in-view */}
      <span className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="col-span-2 lg:col-span-1">
        <div className="font-mono text-gold-500 text-sm tabular-nums">
          {stage.num.toString().padStart(2, "0")}
        </div>
        <div className="font-mono text-bone-400 text-[10px] mt-1">{stage.roman}</div>
      </div>

      <div className="col-span-7 lg:col-span-7">
        <div className="font-display text-2xl md:text-[1.65rem] text-bone-50 leading-tight">
          {stage.name}
        </div>
        <div className="font-mono text-bone-400 text-xs mt-1.5 tracking-tight">
          {stage.artifact}
        </div>
      </div>

      <div className="col-span-3 lg:col-span-4 text-right">
        <span className={clsx("font-mono text-xs tracking-wide", badgeColor)}>
          {stage.badge}
        </span>
      </div>
    </motion.li>
  );
}
