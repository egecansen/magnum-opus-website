import { ArrowUpRight, Check, Minus } from "lucide-react";
import clsx from "clsx";

type Tier = {
  numeral: "I" | "II" | "III";
  name: string;
  eligibility: string;
  pricing: string;
  pricingNote: string;
  ctaLabel: string;
  features: { label: string; included: boolean }[];
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    numeral: "I",
    name: "Initiate",
    eligibility: "for solo engineers",
    pricing: "$ Custom",
    pricingNote: "Talk to us",
    ctaLabel: "Talk to us",
    features: [
      { label: "Up to 5 repositories", included: true },
      { label: "Onboarding pipeline", included: true },
      { label: "Autonomous PR review", included: true },
      { label: "Slack support", included: true },
      { label: "Adversarial bug-hunt passes", included: false },
      { label: "Dedicated environment", included: false },
      { label: "Self-hosted runner", included: false },
      { label: "SOC 2 / SAML / audit log", included: false },
    ],
  },
  {
    numeral: "II",
    name: "Adept",
    eligibility: "for shipping teams",
    pricing: "$ Custom",
    pricingNote: "Request access",
    ctaLabel: "Request access",
    featured: true,
    features: [
      { label: "Up to 25 repositories", included: true },
      { label: "Full pipeline · all 13 stages", included: true },
      { label: "Adversarial bug-hunt passes", included: true },
      { label: "Dedicated environment", included: true },
      { label: "99.9% SLA + priority response", included: true },
      { label: "Quarterly QA review session", included: true },
      { label: "Self-hosted runner", included: false },
      { label: "Custom skills & playbooks", included: false },
    ],
  },
  {
    numeral: "III",
    name: "Magus",
    eligibility: "for the regulated",
    pricing: "$ Custom",
    pricingNote: "Contact sales",
    ctaLabel: "Contact sales",
    features: [
      { label: "Unlimited repositories", included: true },
      { label: "Self-hosted runner", included: true },
      { label: "Custom skills & playbooks", included: true },
      { label: "White-glove onboarding", included: true },
      { label: "SOC 2 / SAML / audit log", included: true },
      { label: "Compliance attestations", included: true },
      { label: "Designated solutions architect", included: true },
      { label: "Co-developed roadmap", included: true },
    ],
  },
];

function TierColumn({ tier }: { tier: Tier }) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col px-6 py-10 md:px-9 md:py-12",
        // Subtle elevation for the featured tier
        tier.featured && "bg-ink-800/60 md:-my-4 md:py-16",
      )}
    >
      {/* Top hairline — gold for featured, faint for others */}
      <div
        aria-hidden
        className={clsx(
          "absolute inset-x-0 top-0 h-px",
          tier.featured ? "bg-gold-500" : "bg-ink-500",
        )}
      />

      {/* "MOST CHOSEN" tag for featured */}
      {tier.featured && (
        <span className="absolute left-6 top-0 -translate-y-1/2 bg-ink-900 px-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-gold-500 md:left-9">
          ◆ Most Chosen
        </span>
      )}

      {/* Numeral */}
      <span
        className={clsx(
          "font-display text-sm tracking-[0.32em]",
          tier.featured ? "text-gold-500" : "text-bone-400",
        )}
      >
        {tier.numeral}.
      </span>

      {/* Name + eligibility */}
      <div className="mt-4">
        <h3
          className={clsx(
            "font-display text-3xl leading-tight tracking-tight md:text-4xl",
            tier.featured ? "text-bone-50" : "text-bone-100",
          )}
        >
          {tier.name}
        </h3>
        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bone-400">
          {tier.eligibility}
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-8">
        <div className="flex items-baseline gap-3">
          <span
            className={clsx(
              "font-display text-2xl md:text-3xl",
              tier.featured ? "text-gold-400" : "text-bone-200",
            )}
          >
            {tier.pricing}
          </span>
        </div>
        <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone-400">
          {tier.pricingNote}
          <span className="text-bone-500"> · sold via demo</span>
        </p>
      </div>

      {/* Hairline */}
      <div className="my-8 h-px w-full bg-ink-500" aria-hidden />

      {/* Feature list */}
      <ul className="flex flex-col gap-3.5">
        {tier.features.map((f) => (
          <li
            key={f.label}
            className="flex items-start gap-3 font-mono text-[0.78rem] leading-relaxed"
          >
            {f.included ? (
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                strokeWidth={2}
              />
            ) : (
              <Minus
                className="mt-0.5 h-4 w-4 shrink-0 text-bone-500"
                strokeWidth={1.5}
              />
            )}
            <span
              className={clsx(
                f.included ? "text-bone-100" : "text-bone-400 line-through decoration-bone-500/60",
              )}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA pinned to bottom */}
      <div className="mt-10 flex-1" />
      <a
        href="#access"
        className={clsx(
          tier.featured ? "btn-primary" : "btn-ghost",
          "w-full justify-center",
        )}
      >
        {tier.ctaLabel}
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </a>
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section relative border-t border-ink-500/60"
      aria-label="Pricing"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500/70" aria-hidden />
              <span className="eyebrow">VIII. The Covenant</span>
            </div>
            <h2 className="font-display mt-6 max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight text-bone-50 md:text-6xl">
              Choose your <span className="italic text-gold-400">scale.</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-[0.78rem] leading-relaxed text-bone-300 md:text-right">
            Three covenants. No public price tags. Every engagement begins with
            a demo on your repo &mdash; you only sign once you&rsquo;ve seen the
            first PR land.
          </p>
        </div>

        {/* Tiers — full-height columns separated by hairline rules */}
        <div className="relative grid grid-cols-1 border border-ink-500 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={clsx(
                "relative",
                // Vertical hairline dividers between columns on desktop
                i > 0 && "md:border-l md:border-ink-500",
                // Horizontal dividers between stacked columns on mobile
                i > 0 && "border-t border-ink-500 md:border-t-0",
              )}
            >
              <TierColumn tier={tier} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-400">
          <span className="text-gold-500">●</span>&nbsp;&nbsp;All tiers include
          the autonomous pipeline · self-hosted runner available on Adept by
          request
        </p>
      </div>
    </section>
  );
}
