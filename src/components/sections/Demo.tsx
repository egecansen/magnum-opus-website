"use client";

import { motion } from "motion/react";
import {
  GitPullRequestArrow,
  FileCode,
  Bug,
  Map,
  FileText,
  Workflow,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

type Severity = "critical" | "high" | "medium";

const REVIEW_COMMENTS: {
  file: string;
  line: string;
  severity: Severity;
  body: string;
  evidence: string;
}[] = [
  {
    file: "tests/e2e/checkout/payment.spec.ts",
    line: "L43",
    severity: "critical",
    body: "Payment intent retries 4× on 5xx without idempotency key — duplicate charges observed in adversarial pass.",
    evidence: "evidence/checkout-double-charge.png",
  },
  {
    file: "tests/e2e/auth/session.spec.ts",
    line: "L88",
    severity: "high",
    body: "Cross-tab logout leaves /billing in authenticated state until manual reload.",
    evidence: "evidence/cross-tab-stale.png",
  },
  {
    file: "tests/e2e/admin/roles.spec.ts",
    line: "L21",
    severity: "high",
    body: "Guest can hit /admin/users via direct nav — gate is client-side only.",
    evidence: "evidence/role-bypass.png",
  },
  {
    file: "tests/e2e/forms/comment.spec.ts",
    line: "L57",
    severity: "medium",
    body: "Comment body renders <img onerror=…> — sanitizer strips <script> only.",
    evidence: "evidence/xss-img-onerror.png",
  },
];

const DELIVERABLES: { Icon: LucideIcon; title: string; sub: string }[] = [
  { Icon: FileCode, title: "612 test files", sub: "tests/e2e/** — tagged across 8 categories" },
  { Icon: Bug, title: "4 bug reproductions", sub: "isolated specs · screenshot evidence · steps-to-repro" },
  { Icon: Map, title: "journey-map.json", sub: "every page, every flow, every entry condition" },
  { Icon: FileText, title: "page-repository.json", sub: "stable element registry, semantic locators" },
  { Icon: Workflow, title: ".github/workflows/qa.yml", sub: "CI integration · sharded parallel run" },
  { Icon: BookOpen, title: "QA-README.md", sub: "how to run, extend, and interpret the suite" },
];

const SEV_STYLES: Record<Severity, string> = {
  critical: "border-crimson-500/60 text-crimson-500 bg-crimson-500/10",
  high: "border-copper-500/60 text-copper-500 bg-copper-500/10",
  medium: "border-bone-400/40 text-bone-300 bg-ink-700",
};

export function Demo() {
  return (
    <section id="demo" className="section relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">VI. The Delivery</div>
            <div className="rule mt-6 max-w-[8rem]" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone-50 leading-[0.95]">
              Every run ships a{" "}
              <span className="italic text-gold-500">pull request.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-bone-300 text-lg leading-relaxed">
              Not a dashboard. Not a Slack message. A reviewable, mergeable PR
              with the work, the evidence, and the reasoning attached.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* PR card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <article className="border border-ink-500 bg-ink-800 overflow-hidden">
              {/* PR header */}
              <header className="border-b border-ink-500 px-6 py-5 bg-gradient-to-r from-ink-700 via-ink-700 to-ink-800">
                <div className="flex items-center gap-3">
                  <GitPullRequestArrow size={18} strokeWidth={1.5} className="text-gold-500" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-500">
                    Open · #1247
                  </span>
                  <span className="ml-auto font-mono text-[11px] text-bone-400">
                    main ← magnum-opus/run-7af2
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-bone-50 mt-3 leading-tight">
                  Magnum Opus: discovered 612 tests, 4 bugs (book-hive)
                </h3>
                <div className="flex items-center gap-4 mt-3 font-mono text-[11px] text-bone-400">
                  <span className="flex items-center gap-1.5">
                    <span className="dot pulse-gold" /> @magnum-opus[bot]
                  </span>
                  <span>·</span>
                  <span>
                    <span className="text-verdigris-500">+12,847</span>{" "}
                    <span className="text-crimson-500">−23</span>
                  </span>
                  <span>·</span>
                  <span>71 files changed</span>
                </div>
              </header>

              {/* PR description */}
              <div className="px-6 py-5 border-b border-ink-500 font-mono text-[12.5px] leading-relaxed text-bone-300 space-y-2">
                <div className="text-bone-100"># Summary</div>
                <div>· Mapped 14 user journeys across 28 pages</div>
                <div>· Authored 612 tests · 8 tags · 0 flakes after 3 retries</div>
                <div>· 4 bugs reproduced with screenshot evidence</div>
                <div>· CI workflow added · sharded across 6 runners</div>
              </div>

              {/* Review comments */}
              <div className="px-6 py-5 space-y-4">
                <div className="font-mono text-[10.5px] text-bone-400 tracking-[0.18em] uppercase">
                  Review · 4 threads
                </div>
                {REVIEW_COMMENTS.map((c, i) => (
                  <ReviewComment key={i} c={c} />
                ))}
              </div>
            </article>
          </motion.div>

          {/* Deliverables timeline */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="eyebrow">What arrives</div>
              <div className="font-mono text-bone-400 text-xs mt-3">
                Inside the PR.
              </div>

              <ol className="mt-8 relative">
                <span className="absolute left-[14px] top-2 bottom-2 w-[1px] bg-ink-500" aria-hidden />
                {DELIVERABLES.map((d, i) => (
                  <motion.li
                    key={d.title}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative flex items-start gap-4 py-4"
                  >
                    <span className="relative z-10 flex-shrink-0 h-7 w-7 grid place-items-center bg-ink-800 border border-ink-500">
                      <d.Icon size={14} strokeWidth={1.5} className="text-gold-500" />
                    </span>
                    <div className="pt-0.5">
                      <div className="font-display text-[1.05rem] text-bone-50 leading-tight">
                        {d.title}
                      </div>
                      <div className="font-mono text-[11px] text-bone-400 mt-1 leading-relaxed">
                        {d.sub}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewComment({
  c,
}: {
  c: {
    file: string;
    line: string;
    severity: Severity;
    body: string;
    evidence: string;
  };
}) {
  return (
    <div className="border border-ink-500 bg-ink-700 px-4 py-3.5">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-[10.5px] text-bone-400 truncate max-w-[60%]">
          {c.file}
        </span>
        <span className="font-mono text-[10.5px] text-bone-500">·</span>
        <span className="font-mono text-[10.5px] text-bone-400">{c.line}</span>
        <span
          className={clsx(
            "ml-auto font-mono text-[10px] uppercase tracking-[0.18em] border px-2 py-0.5",
            SEV_STYLES[c.severity],
          )}
        >
          {c.severity}
        </span>
      </div>
      <p className="text-bone-200 text-[13.5px] mt-2.5 leading-relaxed">{c.body}</p>
      <div className="flex items-center gap-2 mt-3 font-mono text-[10.5px] text-bone-400">
        <ImageIcon size={11} strokeWidth={1.5} />
        <span className="border-b border-ink-500">{c.evidence}</span>
      </div>
    </div>
  );
}
