"use client";

import { motion } from "motion/react";
import {
  Crosshair,
  ShieldAlert,
  Cpu,
  Network,
  Bug,
  KeyRound,
  Smartphone,
  Filter,
} from "lucide-react";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

type Failure = {
  tag: string;
  title: string;
  desc: string;
  asserts: string[];
  Icon: LucideIcon;
  large?: boolean;
};

const FAILURES: Failure[] = [
  {
    tag: "@functional",
    title: "Functional",
    desc: "Every primary user journey, end-to-end, with realistic data lifecycles. The work the app actually exists to do.",
    asserts: [
      "VERIFY checkout(usd, 2-items) → /order/{id}",
      "VERIFY profile.update(name) PERSISTS across reload",
    ],
    Icon: Crosshair,
    large: true,
  },
  {
    tag: "@negative",
    title: "Negative & Validation",
    desc: "Risk-weighted error taxonomy across three tiers — typed input, structural attacks, and contract violations.",
    asserts: [
      "REJECT signup({email: 'a@b'}) → field error",
      "REJECT api.post(/items, {qty: -1}) → 422",
    ],
    Icon: ShieldAlert,
    large: true,
  },
  {
    tag: "@session",
    title: "State & Session",
    desc: "Lifecycle coverage — stale UI, cross-tab races, re-login.",
    asserts: ["EXPECT cart PRESERVED after re-login"],
    Icon: Cpu,
  },
  {
    tag: "@permission",
    title: "Permission & Access",
    desc: "Role isolation matrices. Every gate, every role, every redirect.",
    asserts: ["ASSERT user-cannot-access(/admin) AS guest"],
    Icon: KeyRound,
  },
  {
    tag: "@usability",
    title: "Usability / UX",
    desc: "Empty states, dead ends, overflow, focus traps — the small failures users notice first.",
    asserts: ["VERIFY empty(/inbox) RENDERS cta + helper"],
    Icon: Bug,
  },
  {
    tag: "@search",
    title: "Search & Filtering",
    desc: "URL state synchronization, deep links, edge inputs.",
    asserts: ["EXPECT ?q=… RESTORES filters on reload"],
    Icon: Filter,
  },
  {
    tag: "@responsive",
    title: "Responsive",
    desc: "Mobile 375×812 and tablet 768×1024 — touch targets, navigation, layout integrity.",
    asserts: ["VERIFY nav.toggle visible AT 375×812"],
    Icon: Smartphone,
  },
  {
    tag: "@security",
    title: "Security",
    desc: "XSS, SQL injection, CSRF, response headers, and token hygiene — surfaced as reproducible exploits.",
    asserts: ["BLOCK <script> IN comment.body"],
    Icon: Network,
  },
];

export function Features() {
  return (
    <section id="features" className="section relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">IV. Eight Kinds of Failure</div>
            <div className="rule mt-6 max-w-[8rem]" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone-50 leading-[0.95]">
              Every way an app can break —{" "}
              <span className="italic text-gold-500">covered.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-bone-300 text-lg leading-relaxed">
              Eight test types. Eight tags. One run. The taxonomy a senior QA
              engineer would build, encoded into a deterministic pipeline.
            </p>
          </div>
        </div>

        {/* Two large featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-500 border border-ink-500 mb-px">
          {FAILURES.slice(0, 2).map((f, i) => (
            <FeatureCard key={f.tag} f={f} index={i} variant="large" alt={i === 1} />
          ))}
        </div>

        {/* 6 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-500 border-x border-b border-ink-500">
          {FAILURES.slice(2).map((f, i) => (
            <FeatureCard key={f.tag} f={f} index={i + 2} variant="small" alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  f,
  index,
  variant,
  alt,
}: {
  f: Failure;
  index: number;
  variant: "large" | "small";
  alt?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.2, 0.8, 0.2, 1] }}
      className={clsx(
        "group relative p-8 md:p-10 transition-colors duration-300",
        alt ? "bg-ink-700" : "bg-ink-800",
        "hover:bg-ink-600",
        variant === "large" && "lg:p-12",
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="font-mono text-xs text-gold-500 tracking-wider">{f.tag}</div>
        <f.Icon
          className="text-bone-400 group-hover:text-gold-500 transition-colors duration-300"
          strokeWidth={1.25}
          size={variant === "large" ? 28 : 22}
        />
      </div>

      <h3
        className={clsx(
          "font-display text-bone-50 leading-tight mt-6",
          variant === "large" ? "text-3xl md:text-4xl" : "text-2xl",
        )}
      >
        {f.title}
      </h3>

      <p
        className={clsx(
          "text-bone-300 leading-relaxed mt-4",
          variant === "large" ? "text-base max-w-md" : "text-[14.5px]",
        )}
      >
        {f.desc}
      </p>

      <div className="mt-7 space-y-2">
        {f.asserts.map((a, i) => (
          <div
            key={i}
            className="font-mono text-[11.5px] text-bone-400 leading-relaxed border-l border-ink-500 group-hover:border-gold-500 pl-3 transition-colors"
          >
            {a}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
