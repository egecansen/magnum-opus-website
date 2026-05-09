import { ArrowUpRight } from "lucide-react";

/**
 * Testimonials
 *
 * Three testimonials in three different editorial layouts — a centered
 * pull-quote, a split with metrics, and a smaller gold-bordered case-study
 * teaser. Magazine pacing rather than a uniform card grid.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section relative"
      aria-label="What customers say"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 flex items-baseline justify-between gap-8 md:mb-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold-500/70" aria-hidden />
            <span className="eyebrow">VII. The Witnesses</span>
          </div>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone-400">
            §03 / Field Notes
          </span>
        </div>

        <h2 className="font-display max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight text-bone-50 md:text-6xl">
          What the engineers who let it
          <span className="italic text-gold-400"> ship </span>
          have to say.
        </h2>

        {/* ── Testimonial I — large centered pull-quote ─────────────── */}
        <div className="mt-24 md:mt-32">
          <div className="rule" aria-hidden />
          <figure className="mx-auto max-w-4xl px-2 py-14 text-center md:py-20">
            <span
              aria-hidden
              className="font-display block text-7xl leading-none text-gold-500/50 md:text-8xl"
            >
              &ldquo;
            </span>
            <blockquote className="font-display -mt-4 text-balance text-3xl italic leading-[1.2] text-bone-50 md:text-5xl md:leading-[1.15]">
              Our QA backlog dropped to zero in a week. That had never happened
              in five years.
            </blockquote>
            <figcaption className="mt-10 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-bone-300">
              <span className="text-bone-400">— </span>
              Lena Park
              <span className="text-bone-500"> · </span>
              <span className="text-bone-400">VP Engineering @ Atlas Labs</span>
            </figcaption>
          </figure>
          <div className="rule" aria-hidden />
        </div>

        {/* ── Testimonial II — quote + metrics split ───────────────── */}
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-10 md:mt-28 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone-400">
              No. II
            </span>
            <blockquote className="font-display mt-5 text-balance text-2xl leading-[1.25] text-bone-100 md:text-[2.1rem] md:leading-[1.2]">
              <span className="text-gold-500/60" aria-hidden>
                &ldquo;
              </span>
              It found a session-fixation bug we&rsquo;d been shipping for six
              months. The PR landed before our standup.
              <span className="text-gold-500/60" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-bone-300">
              <span className="text-bone-400">— </span>
              Marcus Trent
              <span className="text-bone-500"> · </span>
              <span className="text-bone-400">CTO @ Halcyon</span>
            </figcaption>
          </div>

          {/* Metrics card */}
          <aside className="card-edge md:col-span-5 md:self-center">
            <div className="border-b border-ink-500 px-6 py-3">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gold-500">
                Halcyon · Run #017
              </span>
            </div>
            <dl className="divide-y divide-ink-500">
              {[
                { k: "Tests written", v: "612", sub: "in 4 hrs" },
                { k: "Bugs found", v: "4", sub: "week 1" },
                { k: "Manual setup", v: "0", sub: "hours" },
                { k: "PRs merged", v: "23", sub: "auto-reviewed" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between px-6 py-4"
                >
                  <dt className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bone-300">
                    {row.k}
                  </dt>
                  <dd className="flex items-baseline gap-2">
                    <span className="font-display text-2xl tabular-nums text-bone-50 md:text-3xl">
                      {row.v}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone-400">
                      {row.sub}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* ── Testimonial III — smaller, gold-bordered, case-study ── */}
        <div className="mt-20 max-w-3xl md:mt-28">
          <div className="border-l-2 border-gold-500 pl-6 md:pl-8">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone-400">
              No. III · Case Study
            </span>
            <blockquote className="font-display mt-4 text-balance text-xl italic leading-[1.35] text-bone-100 md:text-2xl md:leading-[1.3]">
              Magnum Opus reviews PRs better than half my senior engineers.
              I&rsquo;m not joking.
            </blockquote>
            <figcaption className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-300">
              <span className="text-bone-400">— </span>
              Yuki Aoyama
              <span className="text-bone-500"> · </span>
              <span className="text-bone-400">Head of Platform @ Cordially</span>
            </figcaption>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-gold-500 transition-colors hover:text-gold-400"
            >
              <span>Read the book-hive teardown</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
