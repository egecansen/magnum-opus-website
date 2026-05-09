"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

/* The alchemical sun mark — a circle with radiating rays + an inner ring.
   Hand-built so it stays unique to Magnum Opus, not a stock icon. */
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
      {/* outer rays */}
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
      {/* horizon line */}
      <path d="M5.5 22 H 26.5" opacity="0.4" />
    </svg>
  );
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300",
          scrolled
            ? "bg-ink-900/75 backdrop-blur-md border-b border-ink-500/70"
            : "bg-transparent border-b border-transparent",
        )}
      >
        {/* Hairline gold rule that fades in on scroll */}
        <div
          className={clsx(
            "absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(233,185,73,0.55) 22%, rgba(233,185,73,0.55) 78%, transparent)",
          }}
        />

        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          {/* Mark + wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Magnum Opus — home"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center text-gold-500 transition-colors duration-300 group-hover:text-gold-400">
              <SunMark className="h-9 w-9" />
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-display text-[1.05rem] tracking-tight text-bone-50 md:text-[1.15rem]">
                Magnum Opus
              </span>
              <span className="hidden font-mono text-[0.62rem] tracking-[0.22em] text-bone-400 sm:inline">
                /
              </span>
              <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.22em] text-bone-400 sm:inline">
                Civitas Cerebrum
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-mono text-[0.74rem] uppercase tracking-[0.2em] text-bone-200 transition-colors duration-200 hover:text-gold-400"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://github.com/civitas-cerebrum"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-300 transition-colors hover:text-gold-400"
            >
              <span aria-hidden>→</span>
              <span>View on GitHub</span>
            </a>
            <a href="#access" className="btn-primary">
              Request Access
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-ink-500 text-bone-100 transition-colors hover:border-gold-500 hover:text-gold-400 lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[60] lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-ink-500 bg-ink-800 px-7 pb-10 pt-6"
              variants={{
                closed: { x: "100%" },
                open: { x: 0 },
              }}
              transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-gold-500">
                  <SunMark className="h-7 w-7" />
                  <span className="font-display text-base text-bone-50">
                    Magnum Opus
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center border border-ink-500 text-bone-100 transition-colors hover:border-gold-500 hover:text-gold-400"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              <span className="eyebrow mb-4 block">Index</span>
              <nav className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between border-b border-ink-500 py-4 transition-colors hover:text-gold-400"
                  >
                    <span className="font-display text-2xl text-bone-50 group-hover:text-gold-400">
                      {link.label}
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-[0.22em] text-bone-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-10">
                <a
                  href="#access"
                  onClick={() => setOpen(false)}
                  className="btn-primary justify-center"
                >
                  Request Access
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </a>
                <a
                  href="https://github.com/civitas-cerebrum"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-ghost justify-center"
                >
                  View on GitHub
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
