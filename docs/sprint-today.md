# Today — 2-hour website sprint

3 people · 2 hours · 3 independent tracks. Pick one, paste your track's brief into Claude Code in your local clone of `civitas-cerebrum/magnum-opus-website`, ship by end of session.

The tracks touch **disjoint files** on purpose — no merge conflicts as long as everyone stays in their lane.

| File / Surface                                    | Owner |
|---------------------------------------------------|-------|
| Vercel dashboard, `public/`, `layout.tsx`, `next.config.ts` | **A** |
| `Hero.tsx`, `Manifesto.tsx`, `TrustedBy.tsx`, `CTA.tsx`, `Footer.tsx` | **B** |
| New `Packages.tsx`, `page.tsx`, `FAQ.tsx`         | **C** |
| `globals.css`                                     | nobody — leave it alone |
| Pipeline / Features / Architecture / Demo / Testimonials / Pricing / NavBar | nobody — already good |

---

## Track A — Get it live (deploy + infra)

**Goal:** the site is live on a public URL with a custom OG image, favicon, and analytics. Pasting the URL into Slack shows a proper card.

**Steps:**
1. Sign into [Vercel](https://vercel.com) with the `civitas-cerebrum` GitHub. Import `magnum-opus-website`. Trigger the first deploy. Confirm all 13 sections render.
2. **OG image** — create `src/app/opengraph-image.tsx` using `next/og`'s `ImageResponse`. Render: black `#0a0807` background, the alchemical sun-mark SVG in gold (copy the `SunMark` definition from `src/components/sections/NavBar.tsx`), Fraunces "Magnum Opus" wordmark, JetBrains Mono tagline "The autonomous QA engineer." 1200×630.
3. **Favicon** — create `src/app/icon.tsx` (also via `next/og`) re-using the sun mark. Next will auto-emit `/icon.png`.
4. **Analytics** — `npm i @vercel/analytics` and mount `<Analytics />` in `src/app/layout.tsx` body.
5. **Workspace warning** — add `turbopack: { root: __dirname }` to `next.config.ts` to silence the "multiple lockfiles" warning the build prints.
6. Test the deployed site on a real phone. Note any layout breaks for Track B to pick up next sprint.

**Done when:** prod URL is live, OG card renders correctly when pasted into Slack/iMessage, favicon shows in the tab, mobile view doesn't break.

**Hand-off note for B & C:** post the prod URL in chat the moment it's up so they can sanity-check their changes against it.

---

## Track B — Tighten the words (copy polish)

**Goal:** zero faux content, every external link points somewhere real, voice is consistent across the funnel.

**Files (touch only these — DO NOT touch `page.tsx`, `layout.tsx`, or `globals.css`):**
- `src/components/sections/TrustedBy.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Manifesto.tsx`
- `src/components/sections/CTA.tsx`
- `src/components/sections/Footer.tsx`

**Steps:**

1. **`TrustedBy.tsx` — biggest change.** The faux company names ("Atlas Labs", "Halcyon", "Cordially", etc.) are dishonest — we have something better: our own real public OSS packages. Rewrite this section as **"Built on open foundations"**:
   - Replace `COMPANIES` with the real package names: `@civitas-cerebrum/singularity` · `@civitas-cerebrum/element-interactions` · `@civitas-cerebrum/element-repository` · `@civitas-cerebrum/context-store` · `@civitas-cerebrum/email-client` · `@civitas-cerebrum/test-coverage` · `book-hive` · `agent-debug-mode` · `small-model-agent-skill` · `wasapi`.
   - Change the eyebrow from "Trusted by engineering teams shipping faster than QA can keep up" to something like **"The methodology, in the open. The agent, on top."**
   - Render the package names in `font-mono` rather than display serif (they're packages, not brands).

2. **`Footer.tsx`** — find every `href="#"` and every social/GitHub link. Replace with the real URLs:
   - `https://github.com/civitas-cerebrum`
   - `https://github.com/civitas-cerebrum/magnum-opus`
   - `https://github.com/civitas-cerebrum/element-interactions`
   - LinkedIn / X if Civitas Cerebrum has accounts (otherwise drop those rows rather than leaving dead links).

3. **`Hero.tsx`** — read every line. Optionally weave in the deck's signature line as a kicker beneath the headline or above the CTA: **"The medium changed. The craft hasn't."** Don't restructure — just refine.

4. **`Manifesto.tsx`** — already strong (we just added principle iv "Survive by design" and the closing refrain). Sanity-check the four principles read cleanly. Fix any typos.

5. **`CTA.tsx`** — if Civitas Cerebrum has a real Calendly / Tally / form URL, swap the simulated `setTimeout` success state for a real `fetch` to that endpoint. Otherwise leave the client-side stub.

**Done when:** `git grep -i "atlas labs\|halcyon\|cordially\|northstar\|forge & co\|meridian\|cipher works\|polaris\|echelon\|helios studio"` returns zero results. Every external `href` works.

---

## Track C — New "Packages" section

**Goal:** add a section that showcases our public OSS packages — these are the top-of-funnel for Magnum Opus. Position it as: *the agent is private; the methodology beneath it is public, and you can read every line.*

**Files (you are the only person editing these today):**
- NEW: `src/components/sections/Packages.tsx`
- `src/app/page.tsx`
- `src/components/sections/FAQ.tsx` (optional, only if time allows)

**Steps:**

1. **Create `Packages.tsx`.** Style match: same design tokens as `Features.tsx` (read it first for the pattern). Editorial header:
   - Eyebrow: `XI. The Foundations`
   - Headline (Fraunces): *"Magnum Opus stands on open ground."*
   - Sub: *"The agent is closed. Every layer beneath it isn't."*
   
2. List six packages in a 2×3 or 3×2 grid:
   | Package | Purpose |
   |---|---|
   | `@civitas-cerebrum/element-interactions` | Semantic Steps API for Playwright |
   | `@civitas-cerebrum/element-repository` | JSON-based locator store |
   | `@civitas-cerebrum/context-store` | Test-state across steps |
   | `@civitas-cerebrum/email-client` | Zero-dependency SMTP/IMAP for E2E |
   | `@civitas-cerebrum/test-coverage` | API coverage enforcement for TS |
   | `book-hive-qa-demo` | The reference suite — read the source |
   
   For each card:
   - Package name in JetBrains Mono
   - One-line description in Geist
   - `npm i` line in a small mono code block
   - Outbound link to the GitHub repo (use `lucide-react`'s `ArrowUpRight`)
   - Real package list & repos: https://github.com/civitas-cerebrum

3. **Wire it into `page.tsx`** — insert `<Packages />` between `<Demo />` and `<Testimonials />`. Add the import.

4. **Run `npm run build`** — confirm no TS errors.

5. **Optional:** add one FAQ entry about the OSS strategy: *"Why open-source the foundations but not the agent?"* — answer ties to the deck's "swap the model, keep the methodology."

**Done when:** new section renders, every package link opens the right repo, build is clean.

---

## Coordination

- Branch each track if you prefer (`a-deploy`, `b-copy`, `c-packages`), or push to `main` directly — small team, fast iteration. Either is fine, just decide together up front.
- **First to finish pings the other two** so they pull before pushing.
- **End of session:** Track A confirms the deploy refreshed with B and C's changes. If anything broke, fix forward — don't revert.

---

## Out-of-scope today (parking lot for next sprint)

- Real customer logos / testimonials (we don't have permission yet)
- A real demo video / GIF of `mo onboard` running on book-hive
- Domain setup beyond `*.vercel.app` (need DNS access)
- A `/blog` route + first founder essay (assigned in the GTM plan)
- Lighthouse perf pass
- Docs site / `/docs` route
