# Magnum Opus — Go-to-Market Plan

> **TL;DR.** Magnum Opus is an autonomous QA agent that takes a GitHub repo, maps every user journey, writes 600+ E2E tests across 8 taxonomies, hunts bugs adversarially with a screenshot-verified evidence gate, and ships the whole thing as a pull request. We are selling it to VPEs and Heads of Platform at Series B–D SaaS companies whose Playwright suite has not kept pace with the product. Wedge: a free 30-day pilot on one repo with a contractually defined success bar (≥500 tests, ≥3 verified bugs, time-to-first-PR <4 hours). Foothold: 10–15 hand-picked design partners by end of Q2, 5 paying by end of Q3, $1.2M exit ARR and 30 customers by end of Q4. The methodology — 13 persistent skills, the page repository, the engine, the verification gate — is the moat. The model is hot-swappable. **The medium changed. The craft hasn't.**

---

## 1. Executive summary

We are building the autonomous QA agent that a senior QA engineer would build if they had infinite hands and never got tired. Magnum Opus installs as a GitHub App, scans the target repository, maps the application's user journeys, and ships a pull request containing 600+ E2E tests, adversarial bug findings with screenshot evidence, and a CI workflow. On every subsequent PR it runs the suite, probes the changed surface, and posts a check-run with a verdict. It does this in three modes: **Onboarding** (the 16-stage discovery pipeline, run once), **PR Review** (lightweight per-PR), and **Test Discovery** (periodic coverage expansion).

**Who buys.** Series B–D SaaS engineering organisations, 30–250 engineers, web product, Playwright-leaning or open to it, with a chronic under-investment in E2E coverage and an aversion to building a 10-person QA team. Buyer is the VPE / Head of Platform / CTO. Champion is the senior or staff engineer who has been carrying the test suite on their back for 18 months.

**Why now.** Three converging tailwinds: (a) frontier models are finally good enough at multi-step tool use to drive a Playwright session for hours without supervision; (b) post-ZIRP, eng leaders are forbidden from hiring more QA contractors but are still on the hook for ship velocity; (c) GitHub Copilot, CodeRabbit, Greptile, Cursor have trained the buyer that an LLM in your repo is normal. We have a 12–24 month window before GitHub itself ships a worse version of this and before the open-source community catches up to the methodology.

**The wedge.** A 30-day free pilot on one repo, with a written success bar. We don't sell the agent — we sell the pull request that lands four hours after install. If the buyer isn't sold by the first PR, we have failed and we want to know.

**The destination.** In 24 months, "Magnum Opus" is the proper noun for autonomous QA the way "Datadog" is the proper noun for observability. The methodology — skills, page-repository, engine, evidence gate — is the moat. The model is a swappable component.

> "The trick isn't the AI. It's everything around it."

---

## 2. Market & timing

### Why this is a category, not a feature

Autonomous QA is structurally different from "AI-assisted test writing." The unit of value is not a generated test — it's a **delivered pull request that a human can merge unread (but won't, and shouldn't)**. That requires four things in one box: a tool harness that drives a real browser, a skill methodology that knows what a senior QA engineer would do, a verification gate that filters hallucinations, and a stage isolation architecture that prevents context drift across hours of autonomous work. None of the existing test-gen tools do all four. None of the LLM PR-review tools touch the test suite. None of the low-code platforms can read a GitHub repo and write artisan-level Playwright. The category we are entering — **autonomous engineering agents that ship pull requests** — has Cursor and Devin as adjacent players in code authoring, and approximately nobody in QA. That is the gap.

### Macro tailwinds

| Tailwind | What it means for us |
|---|---|
| Frontier-model capability curve (tool use, long context, agentic loops) | The product gets cheaper to run and better at its job each quarter we ship. |
| CI/CD cost compression | Eng leaders are line-item-hunting; "one QA hire's salary" is the relevant comparison. |
| QA hiring shortage / contractor burnout | Senior QA engineers are 6–9 month hires. We are 4 hours. |
| Post-ZIRP engineering productivity mandate | Every VPE has a "do more with the team you have" board slide. |
| Normalised LLMs-in-the-repo (Copilot, CodeRabbit, Cursor) | Trust barrier for autonomous PRs has fallen 80% in 24 months. |
| EU AI Act + SOC 2 attention on autonomous agents | A real moat for the disciplined; a death zone for the sloppy. |

### The window

12–24 months. After that, two things happen: GitHub ships a worse-but-bundled version of this (probably called "Copilot QA" or similar), and the open-source community publishes a methodology that approximates 60% of ours. Both are survivable if and only if we have customer logos, a category-defining narrative, and the methodology so far ahead of the OSS clone that switching is irrational. The implication: every quarter of the first 24 months is spent on (a) named logos, (b) the founder's voice in the category, (c) widening the methodology gap. Nothing else.

> "The medium changed. The craft hasn't."

---

## 3. ICP — Ideal Customer Profile

### Primary ICP

| Dimension | Profile |
|---|---|
| Stage | Series B – Series D |
| ARR | $5M – $80M |
| Eng team | 30–250 engineers |
| QA team | 0–3 people, or rotating contractors |
| Stack | Web app (React / Next / Vue / Svelte / Remix), backend any, **Playwright present or willing** |
| Test maturity | Some Playwright, ~50–200 tests, coverage decaying, no full-time owner |
| Cadence | 5+ PRs/day, at least one production incident a quarter traceable to missed coverage |
| Pain | "Our suite was great in 2023; it's a graveyard now." |
| Buyer | VPE / Head of Platform / CTO |
| Champion | Senior or staff engineer who owns testing by accident |
| Budget reality | One QA hire authorised but not yet filled, OR contractor line item ≥$10k/mo |

The reason this profile is sharp: a too-early-stage company won't pay; a too-late-stage company has a real QA function that will resist; an eng team under 30 doesn't have the PR volume to justify; an eng team over 250 has an internal platform team that will want to build it themselves.

### Secondary ICP

- Series-A startups with a Playwright-fluent founding eng team and angel-style budget for tooling. Lower ACV, higher conversion velocity, useful for logos and case studies.
- Public-company eng productivity teams (post-IPO, 250–1000 eng) who have a "developer experience" budget and an internal showcase mandate. Slower cycle, much higher ACV.
- Agencies / dev shops who deliver client web apps and want a QA layer they can rebadge. Channel play, not direct.

### Anti-ICP — do not chase in year one

- Health-tech, defence, regulated finance with on-prem-only mandates. Useful in year two; not year one.
- Companies whose primary surface is mobile-native (iOS/Android). Singularity has Appium support but the methodology is web-first; we'd be selling the hard mode of our product.
- Pre-seed / pre-product-market-fit startups with no users and no journeys to map. There is no QA work to do.
- Eng orgs whose CTO has publicly written that "AI in the repo is a liability." We will not convert them; we will burn cycles trying.
- Government / municipal procurement. The sales cycle is the company.

### Buyer & decision unit

- **Economic buyer:** VPE / Head of Platform / CTO. Signs the contract. Cares about: shipping velocity, incident rate, headcount avoidance.
- **Champion:** senior / staff engineer who currently owns the suite. Cares about: not being on call for the suite, not being blamed for missed coverage, looking smart in front of their VPE.
- **End user:** every engineer who opens a PR. Cares about: the check-run not being noisy, the bug reports being real, the agent not blocking their merge over false positives.
- **Blocker risk:** a head of QA (if one exists) who reads "autonomous QA" as "replace me." Co-opt by positioning Magnum Opus as their leverage, not their replacement. If they can't be co-opted, walk.

---

## 4. Positioning

### Category statement

**Magnum Opus is the autonomous QA engineer for engineering teams that ship faster than they can test.** Install once, get a pull request in four hours, get a senior-QA-grade review on every subsequent PR forever.

### Position vs. alternatives

| Alternative | What they do | Where they break | What we say |
|---|---|---|---|
| Manual QA contractors | Humans write Playwright, slowly | $130–180k loaded, 6–9 month hire, leave after 18 months, suite rots when they go | "We are one engineer's salary, never quit, and the methodology compounds." |
| Mabl / Testim / Reflect | Low-code record-replay, AI-assisted maintenance | Tests live in their cloud, not your repo. Fragile. Engineers don't trust them. Coverage caps at the happy path. | "Your tests live in your repo, in your language, in your CI. Engineers will actually read them." |
| Diffblue / Codium / Qodo | Unit-test generation from code | Unit tests, not E2E. Doesn't drive a browser. Doesn't find user-facing bugs. | "We test the product the user uses, not the function the engineer wrote." |
| CodeRabbit / Greptile / Graphite Reviewer | LLM PR review | Read-only. Comments on diffs. Doesn't run anything. Doesn't write tests. | "We don't comment on your PR. We send you one." |
| "Cursor + Playwright + a weekend" | DIY agentic QA | Works for one repo, one engineer, until it doesn't. No methodology, no skills, no verification gate, no stage isolation. Drifts. | "We've spent 18 months on the methodology so you don't have to. The hard part isn't the prompt." |
| GitHub Copilot Workspace | Generic coding agent | Generic. Doesn't know what a senior QA engineer would do. No 8-taxonomy coverage discipline. | "General-purpose agents write general-purpose tests. We wrote 13 specialised skills." |

### Why we win

1. **The methodology stack.** 13 skills (`element-interactions`, `journey-mapping`, `test-composer`, `bug-discovery`, `failure-diagnosis`, `coverage-expansion`, `test-repair`, `agents-vs-agents`, `contract-testing`, `companion-mode`, `test-catalogue`, `work-summary-deck`, `singularity`) loaded per stage and unloaded — this is a year of deliberate craft, not a prompt.
2. **The page repository.** A persistent, deduplicated map of every selector, every journey, every error state — survives across runs, models, and time.
3. **The engine.** Stage isolation via `query()` per stage with on-disk `context-bundle.md` artifacts. No shared state. No drift. Reproducible.
4. **The verification gate.** Every bug claim must produce a screenshot reproduction or it is not reported. False-positive rate is the product.
5. **Hot-swappable model.** When Sonnet 4.7 is replaced by Sonnet 5, we ship an upgrade, not a rewrite. Customers don't carry that risk.

### Three messaging pillars

| Pillar | One-line proof |
|---|---|
| **Eight kinds of failure — covered.** | Functional, negative, session, permission, usability, search, responsive, security. The taxonomy a senior QA engineer would build, encoded. |
| **Every run ships a PR.** | Onboarding, coverage expansion, bug discovery — the artefact is always a pull request you can read, review, and merge. Nothing lives in our cloud. |
| **The methodology is the moat.** | Skills, page repository, engine, evidence gate. Swap the model. Keep the craft. |

> "Stop writing tests. Start shipping."

---

## 5. Pricing & packaging

### Tiers

The website lists tiers as "covenants" with `$ Custom`. Internally we anchor to the following, sold via demo, never self-serve.

| Tier | Internal anchor | Repos | Monthly runs (PR review) | Onboarding runs / quarter | Coverage expansion runs / quarter | Bug-hunt runs / quarter | Support |
|---|---|---|---|---|---|---|---|
| **Initiate** | $2,500 / mo ($30k ACV) | 1 | Unlimited | 1 | 4 | 2 | Slack Connect, business-hours |
| **Adept** | $7,500 / mo ($90k ACV) | up to 3 | Unlimited | 3 | 12 | 6 | Shared Slack, named CSM, 24h response |
| **Magus** | $20,000+ / mo ($240k+ ACV) | unlimited | Unlimited | unlimited | unlimited | unlimited | Dedicated CSM, custom skills, on-prem option, quarterly architecture review |

### Why these numbers

- Mabl entry is ~$2,000–2,500/mo and stops at the happy path. We start there and deliver an order of magnitude more.
- CodeRabbit Enterprise is ~$30/dev/month. A 60-engineer team is $1,800/mo for read-only review. We are 1.4× that and we ship the test suite.
- A senior QA engineer is $130–180k loaded. **Initiate is 17% of one hire. Adept is 50%. Magus is 1.3× and replaces a 3-person QA team.** This is the sentence the VPE repeats to the CFO.
- We are below the "this needs procurement and security review" line ($100k) at Initiate and Adept. Magus crosses it intentionally — those buyers expect a real procurement.

### Pilot pricing

- **30-day free pilot.** One repo, one onboarding run, one coverage expansion, one bug-hunt. No credit card.
- **Contractual success bar** (signed in the pilot agreement, not just promised verbally):
  - ≥500 tests written and merged into a green-on-CI PR
  - ≥3 verified bugs reported with screenshot evidence
  - ≥80% test stability across 3 reruns on unchanged code
  - Time-to-first-PR < 4 hours from GitHub App install
- **Conversion path.** Day 25 review call. If we hit the bar, contract signs at Adept (default) on day 30. If we miss the bar, we extend 14 days at our cost or walk away. We do not extend twice.

### Land-and-expand

- **Land:** one repo, the most painful one, usually the public-facing web app.
- **Expand quarter 2:** add the admin dashboard, the customer portal, the partner-facing app — each a separate `repo` slot.
- **Expand quarter 3:** custom skills (e.g., a domain-specific bug taxonomy for fintech KYC flows). Priced as a one-time engagement ($25–50k) plus a step up to Magus.
- **Expand quarter 4:** portfolio rollout — every web product the company owns, billed at Magus.

The mental model: Datadog's "land on one service, expand to the SRE team's whole estate." We land on one repo, expand to the whole codebase.

### Negotiating posture

- **Never discount price. Always discount scope.** If a buyer pushes on Adept's $7.5k, we drop them to Initiate (one repo, one quarter of runs). They feel the pinch and upgrade in two months.
- **Multi-year discount only at Magus.** 10% for two years prepaid. Not a penny more.
- **Pilot extensions are not free** beyond the 14-day grace. Time is our scarcest resource.
- **Walk-away discipline.** If a deal isn't closing in 60 days from first call, it's not closing. Cut and reinvest.

---

## 6. The wedge & the foothold (months 0–3)

This is the phase that decides everything. We hand-pick 10–15 design partners, run the playbook in person, and convert 5 to paid by end of Q1.

### The 10–15 design partner shortlist (profiles)

We don't open inbound. We pick. Each design partner is sourced from the founders' network or one degree out, profiled against the ICP, and approached personally.

| # | Profile | Source channel |
|---|---|---|
| 1 | Series-B fintech, 60 eng, NYC, Playwright in place, no full-time QA, ~120 tests, public web app + admin | spriteCloud alumni network |
| 2 | Series-C dev-tools company, 80 eng, EU, Cursor user, founder-led eng, 20-test suite | Anthropic startup program intros |
| 3 | Series-B vertical SaaS (legal-tech), 45 eng, Toronto, contractor QA rotating monthly | LinkedIn Sales Navigator + warm intro |
| 4 | Series-D B2B marketplace, 200 eng, SF, internal platform team, suite rotted | Founders' angel network |
| 5 | YC W24 graduate, 25 eng, AI infra, Playwright-curious | YC slack + Garry Tan intro |
| 6 | Series-B HR-tech, 70 eng, London, recently fired contractor QA firm | Engineering Leadership SF Slack |
| 7 | Series-C climate-tech, 90 eng, Berlin, strict CI hygiene, low coverage | Rands Leadership Slack |
| 8 | Series-B B2C SaaS (fitness/health), 50 eng, Sydney, Vue + Playwright | Cold founder DM after blog comment |
| 9 | Series-C edtech, 110 eng, Boston, recent incident from missed coverage | Pragmatic Engineer reader intro |
| 10 | Series-B prop-tech, 40 eng, Amsterdam (home turf), French/Dutch market | spriteCloud direct relationship |
| 11 | Public-comp DevEx team, 600 eng, mid-cap SaaS, internal showcase budget | Personal network of one founder |
| 12 | Series-D cybersecurity, 180 eng, Tel Aviv, security-paranoid (good test for objection handling) | Investor warm intro |
| 13 | Series-C analytics, 80 eng, US-remote, Linear-style culture | Linear / Notion alumni network |
| 14 | Series-B B2B platform, 55 eng, Dublin, regulated-but-not-SOX | EU eng meetup |
| 15 | Vercel / Next ecosystem darling, 35 eng, full-stack Next, frontier-tech early adopter | Vercel partnerships team intro |

Sourcing channels, ranked by hit rate we expect:

1. **spriteCloud alumni and clients** — the founders have 15 years of QA-services relationships. Highest hit rate.
2. **Anthropic startup program / partner intros** — we are a flagship Claude Agent SDK consumer. Anthropic has a vested interest.
3. **Eng-leadership Slacks and Discords** — Rands, Engineering Leadership SF, BetterEM, the Pragmatic Engineer Discord, Lenny's Slack.
4. **Vercel / Linear / Notion / Cursor alumni networks** — engineers who have built at design-led tooling companies are the right buyer profile.
5. **YC + Garry Tan intros** — fast, but lower-quality fit (often too early).
6. **Investor warm intros** — useful for late-stage targets, slow.
7. **Cold founder DM after a thoughtful blog comment** — only when there's a real signal.

### The founder-led sales playbook — exactly how the first 10 calls go

**Pre-call (24 hours before).** We've already cloned a representative public repo of theirs (or read their GitHub if they have an OSS project) and run a dry onboarding internally. We arrive knowing what their PR will look like.

**The call (45 minutes).** No pitch deck. The structure:

1. **5 min — listen.** "Tell me where your test suite is at and what hurts." We do not interrupt. We take notes.
2. **5 min — the one slide.** A single image: the 16-stage pipeline. We say one sentence: *"This runs on your repo. The output is a pull request. Want to see it on yours?"*
3. **30 min — the live install.** GitHub App install. Trigger onboarding mode. Screen-share the streaming logs. Walk through the page repository as it builds. Open the PR when it lands. Read three test files together. Open the bug report. Show the screenshot.
4. **5 min — the ask.** "We have ten design partner slots. Free for 30 days. Here's the success bar in writing. Are you in?"

**Post-call (within 2 hours).** We send a one-page recap with the success bar, the pilot agreement, and a Calendly link for the 25-day review.

**The conversion math.** Of 15 hand-picked design partners, we expect:

- 12 take the pilot (80%)
- 8 hit the success bar (66% of pilots — strict design-partner selection should drive this)
- 5 convert to paid (62% of those who hit the bar — the rest will need a second quarter to fund)
- 3 agree to be named publicly
- 1 produces a written case study by end of Q1

If we hit 5 paid and 3 named, we have graduated.

### Weeks 1–12 cadence

| Week | Founder #1 (sales / GTM) | Founder #2 (product / pipeline) | Output |
|---|---|---|---|
| 1 | Build the 15-person target list. Personal outreach to 5. | Lock the pilot agreement template. Lock the success-bar instrumentation in the agent. | 5 calls booked |
| 2 | 5 more outreach. 3 first calls. | Ship telemetry: time-to-first-PR, test count, bug count auto-reported per run. | 3 calls done, 1 pilot signed |
| 3 | 5 more outreach. 4 first calls. 2 pilot installs. | Polish the onboarding stage 1–4 (the 4-hour SLA depends on it). | 2 pilots running |
| 4 | First case-study interview with pilot #1. Publish first founder essay. | Bug-discovery skill hardening; verification gate threshold tuning. | 4 pilots running, 1 essay live |
| 5 | 4 more first calls. Slack Connect set up with each pilot. | Stage isolation hardening. Resume-from-stage on failure. | 6 pilots running |
| 6 | 25-day review with pilot #1. Convert. Publish announcement. | Coverage-expansion v2 — the breadth/depth modes. | 1st paid logo |
| 7 | Second-essay drop. First "show and tell" YouTube short. | Skill: `failure-diagnosis` improvements after pilot data. | 2nd paid logo |
| 8 | 25-day reviews with pilots #2 and #3. | PR-review mode polish (the per-PR check-run). | 3rd paid logo |
| 9 | Case study #1 published. Hacker News "ask HN" about adversarial testing. | Adversarial probe library expansion (XSS, SQLi, race, session). | Case study live |
| 10 | Begin Q2 design-partner cohort outreach (the next 15). | Performance: parallel stage execution where safe. | 4th paid logo |
| 11 | Conference CFP submissions (TestJS, Playwright Conf, LeadDev). | Launch-readiness: hero asset (90s video) shot. | CFPs in |
| 12 | 5th paid logo signed. Internal Q1 retro. Founders take 2 days off. | Q2 roadmap locked. | **Phase exit** |

### Phase exit criteria (end of week 12)

- ✅ 5 paying logos
- ✅ 3 willing to be named publicly
- ✅ 1 published case study (with measured before/after — bugs caught, coverage delta, time saved)
- ✅ NPS-style "would recommend" feedback collected from all pilots, public and not (target: 9 of 10 say yes)
- ✅ Internal sales playbook documented (this section, but updated with the real data)
- ✅ Pilot → paid conversion rate measured (target: 50%+; if below 40%, stop and re-examine ICP)

If we miss any of those, we do not move to launch. We extend Q1 by 4 weeks and re-run the playbook with a refined target list.

---

## 7. The launch (months 3–6)

We launch publicly only after the foothold is proven. A premature launch with no logos is a wasted shot.

### Launch sequence

The launch is a 14-day countdown culminating in a 24-hour orchestrated drop, with a 7-day follow-up.

| T-day | Channel | Action |
|---|---|---|
| T-14 | Internal | Hero asset (90s video) final cut. Press list locked. Five customer quotes secured. |
| T-10 | Press / analyst | Brief Latent Space, Software Engineering Daily, Pragmatic Engineer, Lenny's, Stratechery (long shot). Brief 2 Gartner / Forrester analysts under embargo. |
| T-7 | Founder | Twitter/X teaser thread #1: "We've been building something for 18 months. Two design partners shipped 1,200 tests last week. Next Tuesday." |
| T-3 | Community | DM key voices in Playwright Discord, eng-leadership Slacks, dev.to authors. No ask — just a heads-up. |
| T-1 | Internal | Site freeze. Demo env load-tested. On-call rotation set for launch day. |
| T-0, 06:00 PT | HN | "Show HN: Magnum Opus — an autonomous QA agent that ships pull requests" — links to `book-hive-qa-demo` (the open repo with the agent's actual PRs visible). |
| T-0, 07:00 PT | Twitter/X | Founder thread (10 tweets) with the 90s video as tweet #1. |
| T-0, 08:00 PT | LinkedIn | Founder long-form post. Tag 5 named design partners. |
| T-0, 09:00 PT | Email | Newsletter to entire list (target 3,000 subs by then). |
| T-0, 10:00 PT | Product Hunt | Submission goes live. Hunter pre-arranged. |
| T-0, 12:00 PT | Substack | Founder essay: "Why we wrote 13 skills instead of one prompt" goes live. |
| T-0, 14:00 PT | YouTube | "Watch Magnum Opus onboard book-hive in 4 hours" timelapse video. |
| T-0, 16:00 PT | Discord / Slack | Founder live AMA in Playwright Discord. |
| T+1 | Press | Embargoed pieces drop. We push them. |
| T+3 | Founder | Twitter/X follow-up thread: "Day 3 metrics — what we saw." |
| T+7 | Internal | Launch retro. Learnings into the pipeline. |

### The hero asset

A single 90-second video. Editorial aesthetic of the marketing site — dark, slow, no stock music. Real screen capture of a real PR being authored on a real (consenting) customer repo. Voice-over by the founder, not a hired narrator. The script:

1. **0–10s.** A senior QA engineer at a whiteboard, quickly. *"Eight kinds of failure. Functional. Negative. Session. Permission. Usability. Search. Responsive. Security. The taxonomy a senior QA engineer would build."*
2. **10–30s.** Terminal output as Magnum Opus runs through the 16 stages. Page repository fills in. Tests stream past.
3. **30–60s.** A real GitHub PR opens. 612 tests. 4 verified bugs with screenshots. CI green.
4. **60–80s.** A second PR — a normal feature PR by a developer. Magnum Opus posts a check-run with a verdict. *"Every run ships a PR."*
5. **80–90s.** Black card. White serif. *"The medium changed. The craft hasn't. Magnum Opus."*

### Press / analyst angle

- **Latent Space** (Swyx & Alessio) — pitch as "the most rigorous agent productisation we've seen — 13 skills, stage isolation, evidence gate."
- **Software Engineering Daily** — pitch as "QA, finally autonomous." 45-min interview format.
- **Pragmatic Engineer (Gergely Orosz)** — pitch the methodology essay; he respects craft.
- **Lenny's Newsletter** — pitch the "post-ZIRP eng productivity" angle; he loves a numbers story.
- **Gartner / Forrester** — brief the AI-in-DevOps analysts. Goal: get on the radar for next year's "Cool Vendor in Engineering Productivity" report. Expect 9 months to land.

### Sample launch tweet thread

```
1/  18 months ago we asked: what would a senior QA engineer
    build if they had infinite hands?

    Today we're shipping it. Magnum Opus.

    [video]

2/  You install a GitHub App. It scans your repo.

    Four hours later, a pull request lands.

    600+ tests across 8 specialised taxonomies.
    Adversarial bug findings with screenshot evidence.
    A working CI workflow.

3/  On every PR after that, it runs the suite,
    probes the changed surface, and posts a check-run.

    It's not a comment. It's a verdict.

4/  The trick isn't the AI. It's everything around it.

    13 specialised skills loaded per stage.
    A persistent page repository that survives runs.
    Stage isolation so context never drifts.
    A verification gate so bugs are screenshot-verified.

5/  Eight kinds of failure — covered.
    Functional. Negative. Session. Permission.
    Usability. Search. Responsive. Security.

    The taxonomy a senior QA engineer would build,
    encoded.

6/  Five design partners ran it for 90 days.
    Combined: 4,800 tests. 47 verified bugs.
    Six prevented production incidents.
    Two QA hires not made.

7/  We priced it as a fraction of one QA engineer's salary.

    Initiate. Adept. Magus.
    Sold via demo, not a credit card form.

8/  Open foundations:
    @civitas-cerebrum/element-interactions
    @civitas-cerebrum/element-repository
    @civitas-cerebrum/context-store

    The agent on top is the conversion.
    The packages below are the funnel.

9/  We came from spriteCloud.
    15 years writing tests by hand.

    The medium changed. The craft hasn't.

10/ magnum-opus.civitas-cerebrum.com
    Demo slots open this week.
    Reply if you want one.
```

---

## 8. Demand generation (months 3–12)

For each channel: target audience, content format, weekly cadence, success metric, owner.

### Founder content

| Item | Detail |
|---|---|
| Target | VPE / staff eng readers of Pragmatic Engineer, Latent Space, Lenny's |
| Format | Long-form essay (1,500–3,000 words), Civitas Cerebrum blog + cross-post to Substack |
| Cadence | 1 essay every 2 weeks; 12 in the first 24 weeks |
| Metric | Subscriber growth, time-on-page >4 min, demo requests attributable within 14 days |
| Owner | Founder #1 |

**Twelve essay sequence (publish in this order):**

1. *Why we wrote 13 skills instead of one prompt.*
2. *The verification gate is the product.*
3. *Stage isolation, or how we stopped the agent from forgetting why it was there.*
4. *Eight kinds of failure — the taxonomy a senior QA engineer would build.*
5. *Hot-swappable model, persistent skill: how we de-risked the next model release.*
6. *The page repository — a living map of your application.*
7. *We don't comment on your PR. We send you one.*
8. *The medium changed. The craft hasn't.*
9. *What 4,800 autonomous tests taught us about flakiness.*
10. *Adversarial-by-default: red-teaming your own product.*
11. *Onboarding is one mode. PR review and discovery are the other two.*
12. *Survive by design — building agentic products in a world where the model changes every six months.*

### Open source as marketing

| Item | Detail |
|---|---|
| Target | Senior engineers Googling Playwright patterns, contract testing, page-object alternatives |
| Format | `@civitas-cerebrum/element-interactions`, `element-repository`, `context-store`, `email-client`, `test-coverage`. Aggressive READMEs. Real example apps (`book-hive`). |
| Cadence | One package release / week (point release or example). One blog deep-dive per package per quarter. |
| Metric | npm weekly downloads (target 5k by Q4), GitHub stars (target 2k by Q4), inbound from package users (target 10% of demos) |
| Owner | Founder #2 |

The strategy: **the public packages are the funnel; the agent is the conversion.** A senior engineer adopts `element-interactions` because it's a better Playwright wrapper. They learn what we believe about test architecture. Six months later, when their VPE asks "how do we get 10x more tests written," they say "I know who to call."

### Conference & meetup

| Conference | Submission | Format | When |
|---|---|---|---|
| TestJS Summit | "The Verification Gate: Stopping LLM Hallucinations from Reaching Your Test Suite" | 30-min talk | Q3 |
| Playwright Conf | "13 Skills, One Agent: The Methodology Stack Behind Magnum Opus" | 25-min talk | Q3 |
| LeadDev (NYC / London / Berlin) | "Post-ZIRP QA: Why We Stopped Hiring and Built an Agent" | 20-min eng-leadership talk | Q3–Q4 |
| KCDC | "Stage Isolation in Agentic Pipelines" | Q4 |
| dev.to / virtual QA tracks | Sponsored deep-dive | Quarterly |
| Local meetups (Amsterdam, NYC, SF, London) | "The medium changed. The craft hasn't." | Founder talk | Monthly Q3 onward |

### Community embedding

| Community | Strategy | Cadence |
|---|---|---|
| Playwright Discord | Founder #2 answers questions, never pitches. Becomes the recognised authority on agentic Playwright. | 30 min/day |
| Rands Leadership Slack | Founder #1 contributes to QA / testing / hiring threads. Mentions product only when asked. | 2x/week |
| Engineering Leadership SF | Same as Rands. | 2x/week |
| r/QualityAssurance | Helpful answers. Publish one essay/quarter natively to subreddit. | Weekly |
| r/devops, r/programming | Posts of major essays. No spam. | Per essay |
| Hacker News | One Show HN at launch. One thoughtful Ask HN per quarter. Comments daily. | Daily |
| Pragmatic Engineer Discord | High-signal lurking. Comment when expertise applies. | Daily |
| Lenny's Slack | Same. | Daily |

The rule: **we are the helpful authority, never the pitch.** Every community conversion comes from someone asking "wait, who built this?" after you've helped them for a month.

### Outbound

Narrowly targeted. Not a 10,000-account spray. The first 12 months of outbound is **300 named accounts**, hand-researched, founder-sent.

**Sample outbound sequence — VPE at a Series-C SaaS:**

```
Subject: 612 tests, 4 bugs, one PR — for $COMPANY

Hi $NAME,

I noticed $COMPANY's web app has ~80 Playwright tests and a
public engineering blog post from 18 months ago about test
strategy that hasn't been updated. I've watched that pattern
play out at 30+ teams.

We built Magnum Opus — an autonomous QA agent. You install a
GitHub App; four hours later it ships you a PR with 600+ tests
across 8 taxonomies, plus screenshot-verified bug findings. On
every subsequent PR it runs the suite and posts a verdict.

A 60-eng Series-B fintech ran it last month: 612 tests, 4 verified
bugs (one was a session-fixation issue), one prevented incident.

I have 5 design-partner slots open this quarter. 30-day pilot,
free, written success bar (≥500 tests, ≥3 verified bugs,
time-to-first-PR <4h).

15 minutes next week?

— $FOUNDER

P.S. Open foundation packages we maintain:
github.com/civitas-cerebrum/element-interactions (1.2k stars)
```

```
Subject: re: 612 tests, 4 bugs, one PR — for $COMPANY

$NAME — bumping this up. 3 of the 5 slots are gone. If you'd
like to see the agent run on $COMPANY's repo live before
committing, I can do that in 20 minutes on Tuesday.

— $FOUNDER
```

```
Subject: closing the loop

$NAME — last note. If now isn't the moment, I get it. I'll send
one essay a month from our blog; unsubscribe with a one-word
reply if it's noise.

The first one's here: [link to "Why we wrote 13 skills instead
of one prompt"].

— $FOUNDER
```

LinkedIn touch (after email 2, before email 3):

```
Hi $NAME — saw your post on $TOPIC last week, agreed with the
take on $POINT. We're tackling the testing-debt corner of that
same problem. Sent a note to your work email; happy to chat
here too.
```

Cadence: 5 outbound accounts/day, founder-sent, Tuesday & Thursday only. Owner: Founder #1.

### Paid

**Do not turn on paid until Q4.** Reasons: (a) the buyer doesn't Google for "autonomous QA agent" yet — there's no demand to capture; (b) we don't have the LTV/CAC math to spend efficiently; (c) paid will signal "yet another AI tool" and we are positioning as the considered, editorial choice.

When we do turn it on (Q4 + Y2):

- **Sponsor** — Pragmatic Engineer, Latent Space, Software Engineering Daily, Lenny's, JS Weekly. Roughly $5–15k per placement; expect 2–4 demo requests each.
- **Search** — narrow, intent-heavy: "playwright test generation," "ai qa engineer," "automated e2e tests." Cap spend at $10k/mo until CAC is provably <$5k.
- **Avoid** — programmatic display, generic LinkedIn, retargeting ads, sponsored Twitter/X. Brand-eroding.

### Partnerships

| Partner | Play | Why |
|---|---|---|
| **Anthropic** | Co-marketing as a flagship Claude Agent SDK consumer. Joint blog post. Inclusion in their case-study deck. | We are an ideal customer of theirs. |
| **GitHub** | Marketplace listing Day 1. Apply to GitHub Technology Partner program by Q3. Co-webinar on agentic CI by Q4. | The install path *is* GitHub. |
| **Vercel** | Integration listing (post-deploy QA hook). Co-marketing to Next.js teams. | Our primary ICP runs on Vercel. |
| **Linear** | Agent-files-issues integration (when we hunt bugs, file Linear issues). | Champion engineers love Linear. |
| **Cursor** | Skill / extension that calls Magnum Opus from Cursor. Founder-level relationship. | Same buyer, complementary surface. |
| **Playwright (Microsoft)** | Sponsorship at Playwright Conf. Contribute upstream when our work touches it. | Credibility within the framework community. |

---

## 9. Sales motion

### Pipeline stages

| Stage | Definition | Exit criteria | Target SLA |
|---|---|---|---|
| Lead | Inbound demo request, qualified outbound reply, or warm intro | ICP-match check passed | 2 hrs to first reply |
| Discovery call | 30-min Zoom with champion + ideally buyer | Pain confirmed, success bar agreed | 5 days from lead |
| Live demo | 45-min agent-on-their-repo demo | Visible "I want this" reaction; pilot agreement sent | 7 days from discovery |
| Pilot | 30-day free run on one repo | Success bar measured | 30 days |
| Pilot review | Day-25 call with champion + buyer | Verdict: convert / extend / walk | 5 days from pilot end |
| Contract | MSA / order form signed | Counter-signed; kickoff scheduled | 14 days from review |

### The 10-minute live demo script

The demo *is* the agent running on the buyer's actual repo. Not a slide deck.

1. **Min 1.** "Open your repo with the most under-tested web surface. Public OK?"
2. **Min 2.** Click the GitHub App install link. Repo selected. Trigger onboarding.
3. **Min 3–5.** Walk through the first three stages live (scan, stack detect, journey-mapping kickoff). Show streaming logs. Show the page repository populating.
4. **Min 6–8.** Skip ahead to a previously-recorded onboarding on a similar repo so they can see the PR. Show the test files. Show one bug report with the screenshot.
5. **Min 9.** "Want me to leave the agent running on your repo? Four hours, you'll have a PR. We schedule a 25-day review."
6. **Min 10.** Pilot agreement, success bar, calendly link.

If the demo takes longer than 12 minutes, we are losing the room.

### Pilot success criteria — what we promise, what we measure

| Metric | Target | How measured |
|---|---|---|
| Tests written | ≥500 | Count of PR-merged spec files × scenarios |
| Verified bugs | ≥3 | Count of bug reports with passing repro |
| Time-to-first-PR | <4 hrs | GitHub App install timestamp → first PR opened |
| Test stability | ≥80% pass on 3 reruns | CI pass rate on unchanged code, 3 consecutive runs |
| False-positive bug rate | ≤10% | Customer dispute count / total bug count |
| Coverage delta | ≥3× baseline | Lines / journeys covered before vs after |
| Champion NPS | ≥9 | Single-question post-pilot survey |

If we hit 6 of 7, we have earned the contract.

### Common objections — and the answers

| Objection | Answer |
|---|---|
| "We already have QA contractors." | "Great. We'll ship the long tail they don't have time for. Run us on the surface they don't touch — admin, partner portal — and see what we find in 30 days. If we don't find anything, you've spent zero." |
| "Our tests will get flaky." | "Test stability is in our success bar. If we don't hit 80% on three reruns of unchanged code, you don't pay. The verification gate is exactly for this." |
| "Data privacy / source code in your cloud." | "Your code never leaves your CI. The agent runs in a container we host or one you host (Magus tier on-prem option). Output is a PR in your repo. We retain logs for 30 days and can shorten that contractually." |
| "We're not on Playwright." | "Today we're Playwright-first; Singularity has Appium for mobile. If you're on Cypress and willing, the pilot's first deliverable is a Playwright migration plus the suite. If you don't want to migrate, we're not the right fit yet — be honest with you." |
| "GPT-5 / Claude N+1 will replace this." | "It will make us cheaper and better. The methodology is what's hard — 13 skills, the page repository, stage isolation, the verification gate. We swap the model in a release, not a rewrite. The same isn't true of teams hand-rolling on top of an API." |
| "How is this different from Mabl / Testim?" | "Your tests live in your repo, in your language, in your CI. Engineers will actually read them and edit them. Low-code tools are an island; we're a tributary into your existing river." |
| "What about my Head of QA?" | "They're the champion, not the threat. We make them the leverage point of the org — they review the agent's PRs and direct its priorities. We are a force multiplier on a senior QA engineer; we don't replace them." |
| "We don't have budget right now." | "Budget is the wrong question for a 30-day free pilot. Worst case you have 600 free tests and three new bug reports. Best case we save you a hire. Let's just run it." |

### Conversion targets

| Funnel step | Target rate | Why |
|---|---|---|
| Lead → Discovery | 70% | Hand-picked, warm |
| Discovery → Live demo | 80% | We pre-qualify hard |
| Live demo → Pilot | 70% | The demo is the agent on their repo |
| Pilot → Paid | 50%+ | Strict success bar, strict ICP |
| Paid → Renewal | 90% | Land + product working = sticky |

If pilot→paid drops below 40%, we stop and re-examine ICP. If renewal drops below 80%, we stop and re-examine product.

---

## 10. The first 12 months — quarterly targets

Concrete numbers. Hold these in our heads. Review them every Monday.

| Quarter | Stage | Customers | ARR | Repos onboarded | Tests written (cum) | Bugs found (cum) | Case studies | Headcount |
|---|---|---|---|---|---|---|---|---|
| **Q1** | Foothold | 5 paid | $150k ARR | 8 | 4,500 | 35 | 1 | 4 (2 founders + 2 eng) |
| **Q2** | Public launch | 12 paid | $450k ARR | 18 | 12,000 | 120 | 3 | 6 (+1 eng, +1 GTM) |
| **Q3** | Scale GTM | 22 paid | $850k ARR | 35 | 28,000 | 280 | 6 | 9 (+1 eng, +1 CSM, +1 DevRel) |
| **Q4** | Category | 30 paid | **$1.2M ARR** exit run-rate | 55 | 45,000 | 480 | 10 | 12 (+1 eng, +1 GTM, +1 ops) |

**Average ACV target by Q4: $40k.** Mix: roughly 12 Initiate × $30k + 13 Adept × $90k + 5 Magus × $240k = $1.2M.

**Inbound search share by Q4:** 25% of "autonomous QA agent" / "AI QA engineer" inbound search routes to magnum-opus.civitas-cerebrum.com (measured via SimilarWeb / direct GA + comparative branded search). By 24 months we want this >60%. That's the category-leadership signal.

---

## 11. Metrics & cadence — the Monday dashboard

What we look at every Monday, in this order, in 20 minutes.

### Top-of-funnel

| Metric | Q1 target | Q4 target |
|---|---|---|
| Demo requests / week | 3 | 25 |
| GitHub stars (`element-interactions`) | 600 | 2,000 |
| Blog newsletter subs | 500 | 4,000 |
| Twitter/X follower count (founders) | 2,500 | 12,000 |
| HN front-page hits / quarter | 1 | 4 |

### Funnel conversion

| Metric | Target |
|---|---|
| Lead → Discovery | 70% |
| Discovery → Demo | 80% |
| Demo → Pilot | 70% |
| Pilot → Paid | 50% |

### Retention & expansion

| Metric | Target |
|---|---|
| Logo retention | 90% |
| Net Revenue Retention (NRR) | 130% |
| Quarterly churn | <2.5% |
| Expansion ACV / customer / year | +$25k |

### Product-led signals

| Metric | Target |
|---|---|
| Tests written per onboarding run | ≥500 (median) |
| Verified bugs per bug-hunt run | ≥3 (median) |
| Time-to-first-PR | <4 hrs (95th percentile) |
| Test stability after 3 reruns | ≥80% (median) |
| False-positive bug rate | ≤10% |
| PR-review check-run latency | <12 min (95th percentile) |
| Customer-reported false-positive disputes / month | <5 |

### Operating cadence

| Cadence | Meeting | Output |
|---|---|---|
| Daily | 15-min founder standup | Blockers cleared |
| Weekly Mon | 60-min GTM review (this dashboard) | Re-ranking the week's priorities |
| Weekly Fri | 60-min product review (active runs, customer issues) | Bug list triaged |
| Bi-weekly | Customer office hours (open Zoom for all paying) | Direct signal from users |
| Monthly | Investor update | Trust + tempo |
| Quarterly | Offsite (2 days) | Plan the next quarter |

---

## 12. Risk register

The eight things most likely to kill this, and the mitigation for each. Read this every quarter.

| # | Risk | Mitigation |
|---|---|---|
| 1 | **Frontier model price/quality regression.** Anthropic raises prices 3×, or Sonnet N+1 is worse on tool use, or rate limits change. | The hot-swappable architecture is exactly this hedge. Maintain a continuous eval against 3 model providers (Anthropic primary, OpenAI secondary, open-weight tertiary). Keep `small-model-agent-skill` updated; ensure the agent runs on a cheaper model at acceptable degradation by Q3. |
| 2 | **Open-source clone of the methodology.** Someone publishes a credible 60% clone on GitHub. | Widen the methodology gap with every release. Skills 14–20 by Q4. Public packages are the funnel — we *want* the OSS community building on our foundations, not against them. The verification gate, the 16-stage pipeline, and the customer logos remain proprietary. |
| 3 | **GitHub builds this themselves.** "Copilot QA" appears in 18 months. | Be the category proper noun by then. Bundled features beat unbundled features only when the bundled version is plausibly good — Copilot's track record on specialised domains (security, perf) is mediocre. Win on craft. Co-list on GitHub Marketplace as a partner before they decide to compete. |
| 4 | **Customer trust in autonomous PRs.** A bad PR lands and a customer churns publicly. | The verification gate is non-negotiable. Every bug claim needs a screenshot reproduction. Test PRs run through CI before they're opened. Maintain a post-mortem culture: any false-positive / bad-PR incident gets a public write-up + code fix within 7 days. Ship a "preview mode" by Q3 so anxious teams can review before the agent opens the PR. |
| 5 | **False-positive backlash.** Adversarial bug-hunting finds 10 bugs, 3 are real, 7 are noise. Champion frustration. | The evidence gate already filters most of this. Add a confidence score per finding by Q2. Add a "dismiss with reason" feedback loop that retrains the skill's heuristics by Q3. Aggressively measure and publish false-positive rate — *the rate is the product*. |
| 6 | **Scaling the human review of agent output.** As we 10× customers, founder review of every onboarding becomes impossible. | By Q3, every onboarding run produces an internal "evidence package" reviewed by a CSM, not a founder. By Q4, the CSM reviews exception cases only — the agent self-grades against the success bar. Hire QA-experienced CSMs (spriteCloud network) so review quality stays high. |
| 7 | **Hiring eng-marketing talent.** Senior eng marketers with credibility in the eng-leader audience are scarce. | Don't hire one in year one. Founders are the voice. Hire DevRel (Q3) and a content / ops lead (Q4). The voice is the founder's voice; hires are amplifiers. If we cannot hire a strong DevRel by Q3, slow GTM rather than dilute the voice. |
| 8 | **Regulatory / SOC 2 / EU AI Act exposure.** A regulator decides that autonomous code-modifying agents need certification we don't have. | SOC 2 Type 1 by Q3, Type 2 by end of Y2. Engage outside counsel on EU AI Act classification by Q2 (we believe the agent is "limited risk" but should not assume). Ship a fully on-prem deployment option (Magus tier) by Q4. Maintain an air-gapped reference deployment for regulated buyers. |

---

## 13. The 24-month destination

In 24 months, Civitas Cerebrum is the company that defined autonomous QA. Magnum Opus is the proper noun. Five-six VPEs at well-known companies will have publicly written or talked about how they replaced a planned 3-person QA hire with a Magus-tier subscription. The package layer (`element-interactions`, `element-repository`, `context-store`) has 5,000+ stars and is taught in two well-known engineering bootcamps. The annual "Magnum Opus State of Autonomous QA" report is the canonical reference for the category.

**Run-rate at month 24:** $6–10M ARR, 80–120 customers, 25–35 employees. Cash-efficient — we believe this business should burn under $750k/mo even at the upper end of that range, because the product *is* the marketing.

### Expansion vectors (we will pick 2 of these — not all)

| Vector | Why | Risk |
|---|---|---|
| **Mobile native** (Appium-driven, full Singularity) | Same buyer, large surface, our infrastructure already supports it | Methodology rewrite for mobile-specific flows |
| **API contract testing** (full automation of the `contract-testing` skill) | Existing skill, easy to package as a separate product | Different buyer (backend lead, not VPE) |
| **Security audits** (full automation of `agents-vs-agents` for AI features) | Massive market, regulated buyers willing to pay 3× | Long sales cycles, certification overhead |
| **SRE on-call** (autonomous incident response) | Adjacent agentic engineering category | Furthest from our methodology |
| **Autonomous code review for non-test code** (a "Greptile killer") | Same architecture, different skill set | Direct competition, harder differentiation |

**Our bet for year 2:** Mobile native (largest TAM, lowest methodology risk) + Security audits (highest ACV, longest moat).

### The category-defining bet

> The methodology, not the model, is the moat.

If this is true — if 13 disciplined skills + a page repository + stage isolation + a verification gate genuinely outperforms a single brilliant prompt against a frontier model — then in 24 months we are the autonomous QA category. If it is false, we are a feature inside someone else's bundle.

We believe it. We will spend two years proving it.

> "The medium changed. The craft hasn't."

---

## The next 14 days — punch list

The ten things to do in the next two weeks. No more, no less.

1. **Lock the 15-person design partner shortlist.** Names, profiles, sourcing channel, who-reaches-out, by Friday.
2. **Send 5 personal outreach emails** from Founder #1 — one per day, Tuesday through Saturday. No automation.
3. **Finalise the pilot agreement template** — success bar codified, signed by legal counsel, ready to send.
4. **Instrument the success bar in the agent** — time-to-first-PR, test count, bug count, false-positive rate emitted as telemetry per run, displayed in an internal dashboard.
5. **Cut the 90-second hero video** — script, screen-record, voiceover by Founder #1, edited to the editorial aesthetic. Final cut by day 14.
6. **Publish founder essay #1** — *Why we wrote 13 skills instead of one prompt* — on the Civitas Cerebrum blog, cross-posted to Substack, with a clear demo CTA at the bottom.
7. **Set up Slack Connect template** — branded, intro message, on-call rotation defined, ready to spin up per design partner in <10 minutes.
8. **Stand up the Monday dashboard** — Linear or Notion view of every metric in section 11. Founder #1 owns updating it weekly.
9. **Apply to GitHub Technology Partner** program and submit the GitHub Marketplace listing draft. Allow 6 weeks for review; start now.
10. **Brief Anthropic** — 30-min call with the partnerships team. Ask for: case-study inclusion, startup-program credits if not already, a co-marketing slot at a Q3 event. We are a flagship Claude Agent SDK consumer; act like it.

> "Stop writing tests. Start shipping."
