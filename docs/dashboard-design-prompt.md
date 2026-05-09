# Magnum Opus — Application (Dashboard) Design Prompt

> Paste this whole document into Claude's design tool (or any AI design tool — Galileo, Uizard, v0, Lovable). It is self-contained: product context, aesthetic system, screens to design, states, and a quality bar.

---

## What you are designing

The **Magnum Opus customer dashboard** — the web application a customer logs into after installing the Magnum Opus GitHub App. Magnum Opus is an autonomous QA agent by Civitas Cerebrum: it ingests a GitHub repository, maps user journeys, writes 600+ E2E tests, hunts bugs adversarially, and ships everything as a pull request. The customer mostly receives results through GitHub (PR comments, check runs), but the dashboard exists to:

- Watch runs in progress in real time (the 16-stage pipeline as it executes)
- Browse historical runs and outcomes
- Triage bug findings with screenshot evidence
- Manage repositories under coverage
- Review billing / plan / quota
- Configure adversarial probe budgets, notification preferences, runners

The **primary user** is a senior or staff engineer at a Series B–D SaaS company. They are technical, time-poor, and cynical about marketing UI. They will spend most of their time in GitHub. The dashboard exists to give them confidence the agent is working — not to be a daily destination. **Optimize for trust and density, not engagement.**

---

## Aesthetic system — non-negotiable

The dashboard must feel like the same product as the marketing site at `civitas-cerebrum/magnum-opus-website`. The aesthetic is **editorial / alchemical with terminal undertones** — deep ink background, copper-amber accents, magazine-grade typography. Think: a senior engineer's terminal styled by an art director who reads *The Believer*.

### Color tokens

| Token | Hex | Use |
|---|---|---|
| `ink-900` | `#0a0807` | Primary background |
| `ink-800` | `#100c0a` | Elevated surface (sidebar, cards on bg) |
| `ink-700` | `#18120e` | Card on elevated surface |
| `ink-600` | `#221a14` | Hover state on card |
| `ink-500` | `#2a2018` | Borders, hairline rules |
| `bone-50` | `#f7efe1` | Primary text |
| `bone-100` | `#ede2cf` | Secondary text |
| `bone-300` | `#a89478` | Muted text, labels |
| `bone-400` | `#756450` | Faint metadata |
| `gold-500` | `#e9b949` | Primary accent — running states, success, CTAs |
| `gold-400` | `#f3c768` | Hover on gold |
| `copper-500` | `#b87333` | Secondary accent — warnings, "high" severity |
| `verdigris-500` | `#5b8276` | Tertiary — passive info, completed states |
| `crimson-500` | `#8c2a2a` | Critical severity, destructive actions, errors |

**Use color sparingly.** Most of the surface is ink + bone. Gold is precious — reserve it for one accent per view (the active run, a CTA, a success marker). Never use gradients between ink and gold; they look cheap. Hairline rules between sections in `ink-500`.

### Typography

- **Display:** Fraunces (variable serif). Use the variable axes — `opsz`, `SOFT`, `WONK` — to differentiate italic accents from regular display. Fraunces is the "Magnum Opus" wordmark and the headline font.
- **Body / UI:** Geist Sans. Do not use Inter, Roboto, Arial, or system-ui.
- **Technical:** JetBrains Mono. Used for: data values, file paths, run IDs, git SHAs, ALL-CAPS metadata labels with wide tracking (0.18–0.22em letter-spacing).

Type rhythm rule: anything that is a number, an identifier, a status, or a label is JetBrains Mono. Anything that is human prose or a heading is Fraunces or Geist. Don't mix the two roles.

### Layout & motion

- Sharp 4px corners. No rounded-full pills anywhere. No "card" with > 4px radius.
- Hairline rules at 1px, color `ink-500`.
- Generous negative space inside cards. Dense data presentation is OK as long as the whitespace around the card breathes.
- Use Roman numerals for major section markers (`I.` `II.` `XVI.`) — already a brand signature.
- Motion: enter-on-scroll stagger with `ease: [0.2, 0.8, 0.2, 1]`. The active running stage gets a soft pulsing gold glow. Avoid bouncy / spring animations.
- Subtle paper-grain texture overlay at 5% opacity over the whole UI.
- Faint ledger-grid background on technical surfaces (run-detail, telemetry).

### What to avoid (this is critical — these all break the brand)

- ❌ Purple gradients
- ❌ Rounded-full pill buttons (use square-cornered btn-primary / btn-ghost)
- ❌ Generic SaaS dashboard tropes (donut charts, stacked area gradients, glassmorphism)
- ❌ Inter / Arial / system fonts
- ❌ Emoji in UI chrome
- ❌ Marketing-tone microcopy ("Awesome!" / "Let's get started!" / "🎉")
- ❌ Drop shadows of more than 8px blur
- ❌ Skeuomorphic gloss

---

## Screens to design

Design every screen at **two breakpoints**: desktop 1440×900 and mobile 390×844. Include hover, focus, loading, empty, and error states where called out.

### 1. Dashboard / Home (the default view after login)

**Purpose:** at a glance, "is the agent doing what I'm paying for."

**Layout (desktop):** left sidebar (240px) + main content area.

**Sidebar:**
- Top: small alchemical sun-mark + Fraunces "Magnum Opus" wordmark + JetBrains Mono "v0.1.0".
- Org switcher (mono): `civitas-cerebrum` ▾.
- Nav items (mono, ALL-CAPS, wide tracking): `Overview` · `Runs` · `Bugs` · `Tests` · `Repositories` · `Billing` · `Settings`.
- Bottom: small status pill `● Operational` in verdigris with mono text `tier: ADEPT`.

**Main content (top to bottom):**
- Roman numeral `I.` + eyebrow `OVERVIEW` + thin gold rule.
- Headline (Fraunces, large): the org name. Sub-line: `12 repositories under coverage · last run 14 minutes ago`.
- A 4-stat strip (no charts): `Tests under management · 4,127`, `Bugs verified this month · 23`, `Time saved (rolling 30d) · 142h`, `Avg time-to-first-PR · 3h 48m`. Display values in Fraunces, labels in mono. Hairline rules between cells.
- An **active run banner** if any run is currently executing — full-width card with a pulsing gold dot, the repo name in mono, the active stage name in Fraunces ("Stage VII · Usability / UX"), a 16-segment progress strip showing completed (verdigris), running (gold pulse), pending (ink-500), and a `View live →` link.
- "Recent runs" table — 5 rows. Columns: status icon · repo · branch · stage reached · tests written · bugs · started (relative) · duration. Mono throughout, hairline rules. Hover row: bg shifts to `ink-700`.
- "Recent bugs" sidebar (right column on desktop, stacked on mobile) — 5 most recent verified findings with severity pill, file path in mono, one-line description, evidence thumbnail.

**States:** empty (first install — see screen 7), loading (skeleton with shimmering ink-700 blocks), error (mono red banner at top with retry button).

### 2. Runs — list view

A full-page list of every run for the org, paginated.

- Header: Roman numeral `II.` + `RUNS`. Headline "Runs". Filter chips (mono): `All · Onboarding · PR Review · Discovery · Failed · Running`.
- Table with columns: status · run ID (`run-7af2`) · repo · branch · mode · trigger (manual / webhook / scheduled) · stages completed · started · duration · actions (`View →`).
- Status icons: gold pulsing dot for running, verdigris check for success, copper warning for "completed with bugs", crimson cross for failed.
- Default sort: most recent first.
- Infinite scroll or "Load more" footer in mono.

**States:** loading skeleton, empty ("No runs yet — install the GitHub App and trigger your first run"), error.

### 3. Run detail — the hero screen

The screen that proves the product is real. Open from any run row.

**Top:** breadcrumb (`Runs / run-7af2`), then a hero card spanning the page:
- Run mode pill (mono): `ONBOARDING`.
- Headline (Fraunces): `civitas-cerebrum/book-hive` · `main`.
- Sub-line (mono): `triggered by webhook (push) · started 2026-05-09 21:14 UTC · duration 3h 12m`.
- Right-side: `View PR #1247 ↗` button in gold.

**The 16-stage timeline.** Vertical on mobile, horizontal step-bar on desktop wide. Each of the 16 stages shows:
- Roman numeral + zero-padded number (`I. 01`).
- Stage name (Fraunces).
- Status (verdigris check / gold pulse / ink-500 dot / crimson x).
- Telemetry below: tests added, time taken, artifact emitted (e.g., `journey-map.json`, `context-bundle.md`).
- Click to expand: shows the stage's logs (mono), agent decisions, and any artifact files emitted with download links.

**Below the timeline:**
- "Tests written" tab — 612 entries, filterable by tag (`@functional` `@negative` etc.), with file path (mono) and assertion preview.
- "Bugs found" tab — list of verified findings with severity, file/line, screenshot evidence thumbnail.
- "Artifacts" tab — every file the run produced (`journey-map.json`, `page-repository.json`, `context-bundle.md`, etc.) with size + download.
- "Logs" tab — raw stage transcripts. Mono. Read-only.

**Live state** (when a run is currently executing): the active stage pulses gold, the stage logs auto-scroll, a `STREAMING` badge appears in mono next to the run ID. Show a small status footer: `Connected · last event 2s ago`.

### 4. Bugs — triage view

The screen the QA-champion lives in.

- Header: Roman numeral `III.` + `BUGS`. Filter chips: `Open · Verified · Dismissed · Critical · High · Medium`.
- Two-pane split: left list (40%), right detail (60%).
- **Left list:** each row shows severity pill (crimson/copper/bone), bug title (Fraunces, one line), file path (mono), found-in-run reference (`run-7af2`), age (mono).
- **Right detail (selected bug):**
  - Severity + title.
  - Evidence — full screenshot at the top (with grid overlay if relevant), playable trace if available.
  - Reproduction steps — numbered list, mono assertions.
  - The failing test file — file path, line number, mono code excerpt with the failing assertion highlighted in copper.
  - "Why this is a bug" — short prose paragraph from the agent (Fraunces body), referencing the verification gate's reasoning.
  - Actions: `Open in PR ↗` (gold primary) · `Mark false positive` (ghost) · `Dismiss` (ghost).

### 5. Repositories — manage coverage

Grid of cards, one per repo under coverage.

- Each card: repo name (mono) · last run status · tests count · bugs (verified + open) · last run timestamp · pause/resume toggle · settings gear.
- Header: `Add repository →` button, opens a modal that lists the org's repos from GitHub and lets the user enable Magnum Opus on selected ones.
- Empty state: "No repositories under coverage yet. Connect one to begin." with the GitHub-App link.

### 6. Billing — tier & usage

- Current plan card (large): tier name in Fraunces (`Adept`), seat count, monthly run quota, runner type (managed / self-hosted), renewal date. `Upgrade to Magus →` ghost button.
- Usage panel: month-to-date runs, tests written, bugs found, runner-hours consumed. Hairline rules, mono numbers, no charts.
- Invoices table — date, amount, status (`paid` in verdigris, `due` in copper). Download icon.
- Payment method block — last 4 + expiry, mono.

### 7. Empty state — fresh install

Critical screen. The user has just installed the GitHub App and landed in the dashboard with no data.

- Centered, vertical composition.
- Large alchemical sun-mark in gold at top, drifting subtly.
- Fraunces headline: *"The first run is on us."*
- Sub-line (Geist): "Pick a repository. We'll map it, write the tests, and open a pull request — within four hours of first commit."
- Single primary CTA: `Choose a repository →` (gold). Triggers the same modal as screen 5.
- Below: a faint ledger-grid card showing what's about to happen — the 16 stages listed compactly with their typical durations. Mono. This sets expectations.

### 8. Settings — adversarial budget

A representative deep settings screen. Show one detailed example so the design system extends to forms.

- Section header `IV. ADVERSARIAL BUDGET` in Roman numeral + eyebrow style.
- Slider control: `Probe intensity` — Low / Medium / High / Maximum. Show the implication of each in mono ("~5 probes / 10 mins" through "~80 probes / 60 mins").
- Toggle list (each with a description below in mono, italic Fraunces label):
  - XSS injection probes — *recommended*
  - SQL injection probes — *requires DB-backed test env*
  - Race condition probes — *experimental*
  - Session fixation probes
  - LLM jailbreak probes — *only if your app embeds an LLM*
- Save button (gold primary), Discard (ghost). Hairline rule above buttons.

---

## Component library — design these primitives explicitly

Show one detail board with these small reusable elements rendered in their states:

- **Status pill** (running / passed / failed / dismissed / dry-run).
- **Severity pill** (critical / high / medium).
- **Stage chip** (numeral + roman + name).
- **Mono code block** (multi-line, with subtle line numbers, ink-700 surface, ink-500 border).
- **Hairline-divided table row** in default and hover.
- **`btn-primary`** (gold) and **`btn-ghost`** (ink with ink-500 border, gold-on-hover).
- **Form input** (ink-800 fill, ink-500 border, gold-500 focus ring).
- **Toggle switch** (ink off, gold on).
- **Empty state** (shared shell).
- **Toast / system message** (info / warning / error variants).

---

## Deliverables

1. **8 main screens** at desktop (1440×900). All required states (default, loading, empty, hover-prominent-element, error if applicable).
2. **The same 8 screens at mobile** (390×844). Sidebar collapses to a top header with a hamburger that slides in a panel from the right (consistent with the marketing site).
3. **One component-library board** with the primitives listed above.
4. **One motion spec** describing: the active-run pulse, stage progression on the timeline, page transitions, list-row enter stagger.
5. **A short design notes panel** explaining each non-obvious choice (no more than 8 lines).

Format: Figma frames, or web prototype (HTML+CSS), or static images — whichever the design tool supports. If exporting images, name them `screen-01-overview.png` through `screen-08-settings.png`, plus `library-01-primitives.png` and `motion-01-spec.png`.

---

## Quality bar

- Every screen looks like it could ship today.
- A senior engineer pasting a screenshot into Slack would not be embarrassed.
- The aesthetic is consistent enough that someone seeing the marketing site afterwards goes "ah, same product."
- Density is high but no screen is overwhelming — there is whitespace.
- No element looks like a stock SaaS template.

If you find yourself reaching for a chart, a glassmorphism panel, a rounded-full pill, a purple anything, or the word "Awesome" — stop. Re-read the aesthetic system and try again.

---

## Reference

- Marketing site source: https://github.com/civitas-cerebrum/magnum-opus-website (private)
- Design tokens live in `src/app/globals.css` of that repo
- The deck "The New Medium" frames the product philosophy
- Brand refrain: **"The medium changed. The craft hasn't."**
