import { ArrowUpRight } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

const COMPANY_LINKS = [
  { label: "Civitas Cerebrum", href: "https://civitas-cerebrum.ai" },
  { label: "Singularity SDK", href: "#singularity" },
  { label: "Research", href: "#research" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "mailto:hello@civitascerebrum.ai" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Security", href: "#security" },
  { label: "DPA", href: "#dpa" },
  { label: "Status", href: "#status" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/civitas-cerebrum" },
  { label: "X / Twitter", href: "#x" },
  { label: "LinkedIn", href: "#linkedin" },
];

/* Hand-built alchemical mark — kept identical in feel to NavBar's */
function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x1 = 16 + Math.cos(angle) * 13.2;
        const y1 = 16 + Math.sin(angle) * 13.2;
        const x2 = 16 + Math.cos(angle) * 15.6;
        const y2 = 16 + Math.sin(angle) * 15.6;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <circle cx="16" cy="16" r="9" />
      <circle cx="16" cy="16" r="5.2" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <path d="M5.5 22 H 26.5" opacity="0.4" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-ink-500 bg-ink-900">
      {/* Top decorative rule */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(233,185,73,0.45) 25%, rgba(233,185,73,0.45) 75%, transparent)",
        }}
      />

      {/* faint copper bloom upper-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,115,51,0.08), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 pb-0 pt-24 md:px-10 md:pt-28">
        {/* Top — wordmark + tagline */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 text-gold-500">
              <SunMark className="h-10 w-10" />
              <span className="font-display text-2xl tracking-tight text-bone-50">
                Magnum Opus
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.96rem] leading-relaxed text-bone-300">
              The autonomous QA engineer.
              <br />
              <span className="text-bone-400">By Civitas Cerebrum.</span>
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#access" className="btn-primary">
                Request Access
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>

            {/* Address / locale block */}
            <div className="mt-10 space-y-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400">
              <p>Lat. 41.0082 · Lon. 28.9784</p>
              <p>Atelier — Civitas Cerebrum</p>
              <p>est. MMXXVI</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
          </div>
          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <FooterColumn title="Company" links={COMPANY_LINKS} />
          </div>
          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
          <div className="col-span-6 md:col-span-12 lg:col-span-2">
            <FooterColumn title="Social" links={SOCIAL_LINKS} external />
          </div>
        </div>

        {/* Hairline */}
        <div className="mt-20 rule" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-bone-400">
            © Civitas Cerebrum MMXXVI · All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 border border-ink-500 px-3 py-1.5">
              <span className="dot pulse-gold" />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-100">
                Operational
              </span>
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400">
              v0.1.0 · build {buildHash()}
            </span>
            <a
              href="#top"
              className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-300 transition-colors hover:text-gold-400"
            >
              ↑ Back to top
            </a>
          </div>
        </div>

        {/* Oversized watermark wordmark — closing flourish */}
        <div
          aria-hidden
          className="relative mt-4 -mb-4 overflow-hidden md:-mb-8"
        >
          <p
            className="font-display select-none whitespace-nowrap text-center leading-[0.85] tracking-[-0.04em] text-bone-200"
            style={{
              fontSize: "clamp(5rem, 22vw, 22rem)",
              opacity: 0.08,
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
            }}
          >
            MAGNUM OPUS
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string;
  links: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h4 className="eyebrow mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="group inline-flex items-center gap-1.5 text-[0.92rem] text-bone-200 transition-colors hover:text-gold-400"
            >
              {link.label}
              {external && (
                <ArrowUpRight
                  className="h-3 w-3 text-bone-400 transition-colors group-hover:text-gold-400"
                  strokeWidth={1.75}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Static pseudo-build hash so it's stable across SSR/CSR.
   Not real — just a typographic detail. */
function buildHash() {
  return "a7f9c2";
}
