const COMPANIES = [
  "Atlas Labs",
  "Halcyon",
  "Cordially",
  "Northstar Systems",
  "Forge & Co.",
  "Meridian",
  "Cipher Works",
  "Polaris Robotics",
  "Echelon",
  "Helios Studio",
];

/**
 * TrustedBy
 *
 * Edge-to-edge marquee of faux engineering-org wordmarks. We deliberately
 * render names as text in Fraunces rather than fake logos — pretending a
 * stock svg is a real customer logo would be lying. Light grayscale, wide
 * tracking, hairline divider between each, mask-fade at the edges.
 */
export function TrustedBy() {
  // Duplicate the list so the -50% translate keyframe loops seamlessly.
  const track = [...COMPANIES, ...COMPANIES];

  return (
    <section
      aria-label="Trusted by"
      className="relative overflow-hidden border-y border-ink-500/60 py-14 md:py-16"
    >
      {/* Eyebrow header — sits above the marquee, constrained to content width */}
      <div className="mx-auto mb-10 max-w-[1400px] px-6 md:mb-12 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-ink-500" aria-hidden />
          <span className="eyebrow">
            Trusted by engineering teams shipping faster than QA can keep up
          </span>
        </div>
      </div>

      {/* Marquee — full bleed with mask gradients on left/right */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap md:gap-16">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-12 md:gap-16"
            >
              <span className="font-display text-lg tracking-[0.04em] text-bone-300/85 md:text-2xl">
                {name}
              </span>
              <span
                aria-hidden
                className="h-5 w-px bg-ink-500 md:h-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
