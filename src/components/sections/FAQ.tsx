"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type FAQItem = {
  q: string;
  a: ReactNode;
};

const ITEMS: FAQItem[] = [
  {
    q: "How does Magnum Opus interact with my repo?",
    a: (
      <>
        It connects as a GitHub App with the narrowest scope necessary —{" "}
        <code className="font-mono text-[0.85em] text-gold-400">
          contents:read
        </code>
        ,{" "}
        <code className="font-mono text-[0.85em] text-gold-400">
          pull_requests:write
        </code>
        ,{" "}
        <code className="font-mono text-[0.85em] text-gold-400">
          checks:write
        </code>
        . It never sees your code outside the webhook scope you grant. Test
        artifacts are committed back to a branch you own.
      </>
    ),
  },
  {
    q: "What does the autonomous agent actually decide?",
    a: (
      <>
        It chooses test scope, prioritization, depth-vs-breadth tradeoffs, and
        which adversarial probes to run on a given PR. Humans choose the
        targets (which repos, which environments) and approve the final PR
        before merge. The agent does not push to{" "}
        <code className="font-mono text-[0.85em] text-gold-400">main</code>.
      </>
    ),
  },
  {
    q: "Where do my tests run?",
    a: (
      <>
        In your CI, using{" "}
        <code className="font-mono text-[0.85em] text-gold-400">
          @civitas-cerebrum/singularity
        </code>
        . You own the artifacts, the run history, the flake metrics — all of
        it. We ship the agent and the playbooks; your runners do the work.
      </>
    ),
  },
  {
    q: "How is data privacy handled?",
    a: (
      <>
        Adept and Magus tiers support a self-hosted runner option — no source
        code persists on our infrastructure. Webhook payloads are processed in
        memory and discarded. Logs are scrubbed of secrets and retained per
        your contractual policy (default 30 days).
      </>
    ),
  },
  {
    q: "What if a bug it reports is a false positive?",
    a: (
      <>
        Stage 13 — verification — is a dedicated gate that re-runs every
        candidate finding against a clean state and a noise budget before it
        becomes a PR comment. You can flag any escape with one click; the
        feedback loops back into your tenant&rsquo;s playbooks within the next
        run.
      </>
    ),
  },
  {
    q: "Does it support languages other than JavaScript?",
    a: (
      <>
        Yes — the pipeline is stack-agnostic. Current first-class adapters
        cover web (Playwright), mobile (Appium), and HTTP APIs (contract
        testing). The orchestration, prioritization and review skills are
        language-neutral.
      </>
    ),
  },
  {
    q: "Can it replace my entire QA team?",
    a: (
      <>
        No, and we&rsquo;d be lying if we said yes. It augments senior QA
        engineers and replaces the manual coverage grind — the part nobody
        wanted to do anyway. The strategy, the exploratory eye, the bar for
        what &ldquo;good&rdquo; means: still human.
      </>
    ),
  },
  {
    q: "What's the rollout timeline?",
    a: (
      <>
        Onboarding finishes in hours: install the GitHub App, point at a repo,
        watch the first PR land. Coverage typically saturates after 2–3
        coverage-expansion cycles (a week of calendar time, mostly waiting on
        CI). Most teams see their first agent-found bug inside the first run.
      </>
    ),
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section relative border-t border-ink-500/60"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header — two-column with eyebrow / headline left, intro right */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500/70" aria-hidden />
              <span className="eyebrow">IX. Questions</span>
            </div>
            <h2 className="font-display mt-6 text-balance text-4xl leading-[1.05] tracking-tight text-bone-50 md:text-6xl">
              Asked &amp;{" "}
              <span className="italic text-gold-400">answered.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <p className="font-mono text-[0.78rem] leading-relaxed text-bone-300">
              The questions every technical buyer asks in the first call. If
              yours isn&rsquo;t here, the GitHub App permissions list and the
              singularity source are both public.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl border-t border-ink-500">
          {ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.q} className="border-b border-ink-500">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors md:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-5 md:gap-7">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone-400 md:text-[0.7rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={
                        "font-display text-xl leading-tight tracking-tight transition-colors md:text-2xl " +
                        (isOpen
                          ? "text-bone-50"
                          : "text-bone-100 group-hover:text-gold-400")
                      }
                    >
                      {item.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={
                      "shrink-0 font-mono text-lg transition-colors md:text-xl " +
                      (isOpen ? "text-gold-500" : "text-bone-300 group-hover:text-gold-400")
                    }
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] },
                        opacity: { duration: 0.22, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="ml-0 max-w-3xl pb-7 pl-12 pr-6 text-[0.95rem] leading-relaxed text-bone-200 md:ml-0 md:pl-[3.4rem] md:pr-10 md:pb-9 md:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
