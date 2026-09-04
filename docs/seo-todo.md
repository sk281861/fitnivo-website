# Fitnivo SEO To-Do — 2026 Roadmap

**Owner:** Sandeep · **Last updated:** 2026-09-04 · **Target markets:** US 🇺🇸 · UK 🇬🇧 · CA 🇨🇦 · AU 🇦🇺 · IN 🇮🇳
**Canonical entity:** *Fitnivo — AI Fitness & Nutrition Coach that combines personalized workouts, calorie & macro tracking, AI food scanning, meal planning, and fitness coaching in one app.*

---

## ✅ Implementation status — 2026-09-03

**Shipped today (build passing):**
- ✅ Layout schema: removed fake `aggregateRating` (4.9/1240), added Organization + WebSite + SoftwareApplication JSON-LD, added `metadataBase`, OG, Twitter tags
- ✅ Homepage Hero: H1 rewritten to canonical `Fitnivo — AI Fitness & Nutrition Coach`, sub-hero uses canonical description
- ✅ SocialProof component: removed "150,000+ members", "4.9/5 RATING", "VERIFIED TRAINER VERDICT" (unverifiable claims)
- ✅ `/ai-fitness-coach` REDESIGNED — killed "Sub-500ms Recalculation", "CNS Load", "Real-Time Form Analysis", "$100–$300/month" fabricated claims. New structure per §3.2: hero → What Is → More Than Generator → 5-step how-it-works → 6-tile ecosystem → AI Personal Trainer → AI Gym Trainer → Goals → Personalization diagram → Comparison table → 10-Q FAQ → CTA. SoftwareApplication + FAQPage + BreadcrumbList schema
- ✅ `/ai-food-scanner` NEW pillar page (mockup: ai-food-scanner-calorie-macro-tracker.webp)
- ✅ `/ai-nutrition-coach` NEW pillar page (mockup: nutrition-stats-bmi-tracking-dashboard.webp)
- ✅ `/ai-workout-planner` NEW pillar page (mockup: custom-workout-creator-exercise-builder.webp)
- ✅ `/ai-meal-planner` NEW pillar page (mockup: personalized-ai-meal-plan-dashboard.webp)
- ✅ `/blog/best-ai-fitness-apps-2026` — 8 apps compared side-by-side (Fitnivo, Fitbod, Freeletics, FitnessAI, Caliber, Ray, SensAI, JuggernautAI)
- ✅ `/blog/fitnivo-vs-fitbod` — full honest comparison
- ✅ `/blog/fitnivo-vs-cal-ai` — full honest comparison
- ✅ `/blog/what-is-an-ai-fitness-coach` — explainer / featured-snippet targeting
- ✅ `next.config.mjs` — 301 redirect `/nutrition-intelligence → /ai-nutrition-coach`
- ✅ `sitemap.ts` — all new URLs added with proper priorities
- ✅ Blog index (`/blog`) — 4 new posts featured at top
- ✅ Every new page: SoftwareApplication OR Article + FAQPage + BreadcrumbList schema, canonical, OG/Twitter meta
- ✅ Real mockup screenshots wired into hero images (from `public/images/mockup/`)
- ✅ `npm run build` — passes, 26 static pages generated

**Shipped 2026-09-04 (batch 2, build passing — 33 static pages):**

*Trust cleanup — existing blog posts (done):*
- ✅ `/blog/ai-vs-traditional-coaching` — fake author `James Okafor CSCS` → Fitnivo Editorial Team, "87,000 user cohort" claim removed, sidebar links updated
- ✅ `/blog/nutrition-science-personalization` — fake author `Dr. Priya Sharma RD` → Fitnivo Editorial Team, "50,000+ users" and "31% lean mass" claims removed, all `/nutrition-intelligence` links redirected to `/ai-nutrition-coach`
- ✅ `/blog/best-fitbod-alternatives` — fake author `Marcus Vance CSCS` → Fitnivo Editorial Team

*New blogs (7 shipped, all with real free-tier + $10/mo Pro pricing):*
- ✅ `/blog/best-ai-personal-trainer-apps-2026`
- ✅ `/blog/best-ai-nutrition-coach-apps-2026`
- ✅ `/blog/fitnivo-vs-macrofactor`
- ✅ `/blog/fitnivo-vs-myfitnesspal`
- ✅ `/blog/fitnivo-vs-freeletics`
- ✅ `/blog/how-ai-fitness-coaches-work`
- ✅ `/blog/how-ai-food-scanners-work`

*Pricing sync (real Fitnivo pricing baked in everywhere):*
- ✅ Free tier: 3 AI food scans/day, 15 AI coach messages/day (with tool-calling for workouts, templates, meal plans), unlimited workout logger, water tracking
- ✅ Pro: $10/month or $60/year (annual works out to $5/month)
- ✅ Every SoftwareApplication schema has Free + Monthly Pro + Annual Pro offers
- ✅ All CTAs, comparison tables, FAQ answers use the correct story

*Site hygiene:*
- ✅ Google Search Console verification wired (`IeEXdW…`)
- ✅ Deleted dead `/nutrition-intelligence/page.tsx` (301 in `next.config.mjs` handles the redirect)
- ✅ Sitemap now includes all 8 new blogs + 4 pillars + priorities
- ✅ Blog index (`/blog`) features 8 new posts at the top

**Still TODO (follow-up work):**

*Additional blog content — Tier 2:*
- ⏳ `/blog/ai-fitness-coach-vs-personal-trainer` (cousin to `ai-vs-traditional-coaching`, more search-language-friendly)
- ⏳ `/blog/is-ai-food-scanning-accurate` (competitor silence = easy featured snippet)
- ⏳ Goal/audience blogs (weight loss, muscle gain, beginners, home, gym, over-40, women)

*External / off-page (manual work — not code):*
- ⏳ Product Hunt launch prep + submission
- ⏳ AlternativeTo, G2, Capterra, Toolify, Futurepedia, TAAFT profiles
- ⏳ Play Store / App Store description sync to canonical entity + real pricing
- ⏳ 10 external mentions target (Reddit, YouTube, fitness bloggers, podcast pitches)

*Optional polish:*
- ⏳ `robots.txt` file in `public/` (currently not present — Next.js serves default, but explicit is better)
- ⏳ `llms.txt` refresh — add new URLs
- ⏳ Consider dropping `/mindfulness-wellness` and `/biometric-sync` if they dilute entity focus (or keep but de-emphasize in nav)
- ⏳ Real Fitnivo testimonials on homepage (SocialProof.tsx still uses stock reviewer content)


> This file is the single source of truth for what to build, in what order, with the exact title / meta / H1 / sections / keywords / schema / internal-linking / competitor benchmarks. It merges the audit + live SERP research pulled from US/UK first-page competitors (Sept 2026).

---

## 0. TL;DR — What to do this quarter

1. **Fix trust first** (fake numbers, unverifiable "CSCS/RD" authors, "150K+ members", "87K user cohort", "$100–$300/month" claims). Ship this before publishing any new page. Google's E-E-A-T + structured-data guidelines penalize unsupportable claims in health/fitness.
2. **Redesign `/ai-fitness-coach`** (thin content, but already earning impressions on 8+ semantic variants — highest ROI single change).
3. **Ship 4 new pillar pages** (`/ai-food-scanner`, `/ai-nutrition-coach`, `/ai-workout-planner`, `/ai-meal-planner`) — these are the missing entity anchors.
4. **Ship 2 category "best-of" blogs** (`best-ai-fitness-apps-2026`, `best-ai-nutrition-coach-apps-2026`) — how Fitnivo enters LLM answer sets.
5. **Ship 3 comparison blogs** (`fitnivo-vs-fitbod`, `fitnivo-vs-cal-ai`, `fitnivo-vs-macrofactor`) — captures branded competitor search + AI answer references.
6. **Global schema** (Organization + WebSite + SoftwareApplication on `/`, Article + FAQPage + BreadcrumbList on posts).
7. **10 external mentions** (Product Hunt, AlternativeTo, G2, Capterra, Toolify, There's An AI For That, Futurepedia, AlternativeAI, Reddit r/fitness, YouTube review).

---

## 1. Current site inventory (audit baseline)

Existing routes under `src/app/`:

| URL | File | Purpose | SEO status |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Homepage | ✅ indexed, needs H1/hero rewrite |
| `/ai-fitness-coach` | `src/app/ai-fitness-coach/page.tsx` | Pillar page | ⚠️ ranking pos ~1 for "ai fitness coach" (43 impressions) but content is too technical / thin on user intent — **REDESIGN** |
| `/features` | `src/app/features/page.tsx` | Feature grid | 🟡 keep, add internal links to new pillars |
| `/biometric-sync` | | Secondary | 🟡 de-emphasize (dilutes entity) |
| `/mindfulness-wellness` | | Secondary | 🟡 de-emphasize |
| `/nutrition-intelligence` | | Secondary | 🔴 **rename → `/ai-nutrition-coach`** (see §3.4) or 301 to it |
| `/blog` + `[slug]` | | Blog index + template | ✅ keep |
| `/blog/ai-vs-traditional-coaching` | | Existing blog | 🟡 rewrite intro/title to match search language |
| `/blog/best-fitbod-alternatives` | | Existing blog | ✅ **valuable — expand & add Fitnivo entry, update to 2026** |
| `/blog/nutrition-science-personalization` | | Existing blog | 🟡 rewrite as "How AI Nutrition Coaches Work" |
| `/blog/sustainable-fitness-habits` | | Existing blog | 🟡 keep, retitle for search intent |
| `/blog/mindfulness-athletic-performance` | | Existing blog | 🟢 low priority — outside primary entity |
| `/about`, `/contact`, `/privacy`, `/terms`, `/data-deletion` | | Utility | ✅ keep |

**Critical trust cleanup (BLOCKING — do first):**

- [ ] Remove "150,000+ members" / "4.9/5 rating" / "verified trainer verdict" from homepage unless independently verifiable
- [ ] Remove "Fitnivo's internal cohort analysis of 87,000 users" from `/blog/ai-vs-traditional-coaching`
- [ ] Remove "Fitnivo's internal data from 50,000+ users" from `/blog/nutrition-science-personalization`
- [ ] Remove specific product claims from `/ai-fitness-coach`: "Sub-500ms Recalculation", "CNS Load", "Set Velocity Tracking", "Real-Time Form Analysis", "$100–$300/month" — unless every one of these is actually shipped in the app today
- [ ] Replace fake authors (James Okafor CSCS, Dr. Priya Sharma RD) with **"Fitnivo Editorial Team"** OR real people with real LinkedIn + credentials
- [ ] Add a visible "Reviewed by" line with a real name on every health-adjacent article

---

## 2. Keyword architecture (with live SERP-first-page evidence)

Every keyword below was verified against Google's first page in Sept 2026. **"Competitor first-page pages"** = who Fitnivo has to out-rank / get listed alongside.

### 🔴 Tier 1 — Money keywords (build immediately)

| Keyword | Intent | Primary target URL | Competitor first-page pages |
|---|---|---|---|
| ai fitness coach | commercial | `/ai-fitness-coach` (redesign) | freebeatfit.com, everfit.io, builtworkout.com, trlactive.com, fitcraft |
| ai personal trainer app | commercial | `/ai-fitness-coach` (same page, cover in H2) | rayfit.com, forgetrainer.ai, sensai.fit, arvo.guru, barbend.com, gainframe.app, trainera.fit |
| ai fitness app | commercial | `/` (homepage) | fast.io, indiehackers.com, fitbod.me, sensai.fit, bestaifitnessapp.com, loadmuscle.com |
| ai workout planner / generator | commercial | `/ai-workout-planner` (new) | planfit.ai, bodbot, workoutgen.app, arvo.guru, setgraph.app |
| ai nutrition coach | commercial | `/ai-nutrition-coach` (new — rename `/nutrition-intelligence`) | welling.ai, ilounge.com, ai-nutrition-coach.com, nutritracker.io, trainera.fit, nutrola.app |
| ai food scanner / ai calorie tracker | commercial | `/ai-food-scanner` (new) | calai.app, caloriemama.ai, snapcalorie.com, geteatai.app, whatthefood.io |
| ai meal planner | commercial | `/ai-meal-planner` (new) | (open — lower competition) |
| best ai fitness apps 2026 | list | `/blog/best-ai-fitness-apps-2026` (new) | fast.io, sensai.fit, fitbod.me, indiehackers.com, loadmuscle.com, bestaifitnessapp.com |
| best ai personal trainer apps 2026 | list | `/blog/best-ai-personal-trainer-apps-2026` (new) | barbend.com, forgetrainer.ai, sensai.fit, rayfit.com, arvo.guru, gainframe.app, trainera.fit |
| best ai nutrition coach apps 2026 | list | `/blog/best-ai-nutrition-coach-apps-2026` (new) | welling.ai, ilounge.com, nutritracker.io, nutrola.app, fuelnutrition.app |

### 🟠 Tier 2 — Semantic support (already earning impressions per GSC)

- ai fitness coaching, ai fitness trainer, ai personal training, personal ai trainer, ai gym trainer, ai coaching to hit fitness goals, ai fitness and nutrition coach, fitness coach ai
- ai workout app, adaptive workout app, personalized workout app, personalized workout planner
- ai calorie scanner, ai calorie counter from photo, photo calorie tracker, food photo calorie calculator, ai macro tracker, ai macro scanner, food photo nutrition analyzer, ai meal scanner, ai food tracking app

### 🟡 Tier 3 — Long-tail (individual blog posts)

- ai fitness app for weight loss / muscle gain / beginners / home workouts / gym workouts / women / men / over 40
- ai personal trainer for beginners / for gym / for home
- ai workout generator based on equipment / dumbbells only / bodyweight
- ai nutrition coach for weight loss / for muscle gain / for fat loss
- ai calorie tracker from photo, calorie counter from picture, scan food calories
- fitbod alternatives, fitbod alternative free, apps like fitbod, apps like myfitnesspal, apps like cal ai
- macrofactor vs cal ai, cal ai vs myfitnesspal, fitbod vs freeletics vs fitnessai
- what is an ai fitness coach, how do ai fitness coaches work, are ai fitness coaches worth it, is cal ai accurate

### 🟢 Brand + entity

- fitnivo, fitnivo ai, fitnivo app, fitnivo review, fitnivo vs [competitor], fitnivo pricing, fitnivo ai fitness coach, fitnivo ai nutrition coach, fitnivo calorie tracker, fitnivo food scanner

---

## 3. Page/blog build roadmap

Priority column: **P0** = ship in week 1–2, **P1** = weeks 3–4, **P2** = weeks 5–8, **P3** = weeks 9–12.

### 3.1 Homepage `/` — REVISE (P0)

- **Title:** `Fitnivo — AI Fitness & Nutrition Coach | Personal AI Trainer`
- **Meta (155 char):** Fitnivo is your AI fitness and nutrition coach — personalized workouts, calorie & macro tracking, AI food scanning, and meal planning in one app.
- **H1:** `Fitnivo — AI Fitness & Nutrition Coach`
- **Sub-hero:** *An AI personal trainer and nutrition coach that creates personalized workouts, tracks calories and macros, scans meals with AI, and helps you stay consistent.*
- **Sections:** hero → 6-icon feature strip (AI Workout, Workout Tracking, AI Food Scanner, AI Nutrition Coach, Meal Plans, AI Coach) → 3-step "How Fitnivo Works" → Why AI (short) → Comparison strip (Fitnivo vs generic tracker) → Social proof (ONLY if real) → FAQ (5 Q) → CTA
- **Internal links:** all 4 new pillars, 2 top blogs, `/blog`
- **Schema:** `Organization`, `WebSite` (with `SearchAction`), `SoftwareApplication` (with `applicationCategory: HealthApplication`, `operatingSystem: Android, iOS`, `offers`)
- **Word target:** 900–1,300

### 3.2 `/ai-fitness-coach` — REDESIGN (P0, single biggest ROI)

- **Keep URL.** GSC shows 43 impressions across 8 semantic variants already.
- **Title:** `AI Fitness Coach & Personal Trainer | Fitnivo`
- **Meta:** Get a personalized AI fitness coach that creates workouts around your goals, tracks progress, plans nutrition, and adapts as you improve. Free to start.
- **H1:** `AI Fitness Coach That Adapts to You`
- **Sections (H2 order):**
  1. Intro paragraph (captures: AI fitness coach, AI fitness trainer, personal AI trainer, AI personal trainer)
  2. **What Is an AI Fitness Coach?** (answers PAA — target featured snippet)
  3. **More Than an AI Workout Generator** (differentiator vs Fitbod-style apps)
  4. **Your Personal AI Trainer, Built Around Your Goals** (5-step numbered how-it-works)
  5. **Your AI Fitness Coach Covers More Than Workouts** (6-tile ecosystem: Workout, Tracking, Food Scanner, Nutrition, Meal Plans, AI Coach)
  6. **AI Personal Trainer Without the Gym Appointment**
  7. **Your AI Gym Trainer** (captures "ai gym trainer")
  8. **An AI Coach for Your Fitness Goals** (5 goals: muscle, fat loss, strength, fitness, consistency)
  9. **How Fitnivo Personalizes Your Fitness Coaching** (inputs → AI → next action diagram)
  10. **AI Fitness Coach vs Traditional Personal Trainer** (comparison table, position AI as complement not replacement)
  11. **FAQ** (10 Q — see audit; wrap in FAQPage schema)
  12. **CTA**
- **Internal links:** homepage, `/ai-food-scanner`, `/ai-nutrition-coach`, `/ai-workout-planner`, `/ai-meal-planner`, blog: `what-is-an-ai-fitness-coach`, `ai-fitness-coach-vs-personal-trainer`, `best-ai-fitness-apps-2026`
- **Schema:** `SoftwareApplication` + `FAQPage` + `BreadcrumbList`
- **Word target:** 1,800–2,500 (NOT 5,000)
- **Delete from current page:** "Sub-500ms Recalculation", "CNS Load", "Set Velocity Tracking", "Real-Time Form Analysis", any dollar-price claims unless real

### 3.3 `/ai-food-scanner` — NEW (P0)

- **Title:** `AI Food Scanner & Calorie Tracker — Snap Meals to Log | Fitnivo`
- **Meta:** Fitnivo's AI food scanner estimates calories and macros from a photo of your meal. Track meals in seconds — no manual searching.
- **H1:** `AI Food Scanner — Snap a Photo, Log Your Meal`
- **Sections:**
  1. Intro — Fitnivo scans meals from a photo and logs calories, protein, carbs, fat
  2. **How AI Food Scanning Works** (photo → recognition → portion estimate → macros → review & log)
  3. **What Fitnivo's Food Scanner Tracks** (calories, protein, carbs, fat + water + logs)
  4. **AI Food Scanner vs Manual Calorie Tracker** (comparison table)
  5. **Photo Calorie Tracker for Real Meals** (mixed dishes, restaurant food, home cooked)
  6. **Accuracy — What to Expect** (be honest: AI estimates, adjust if wrong — competitor sites push the accuracy angle heavily)
  7. **AI Food Scanner + AI Nutrition Coach = Full Feedback Loop**
  8. **Fitnivo vs Cal AI vs MyFitnessPal** (short comparison table, link to full blog)
  9. **FAQ** (8 Q — is AI food scanning accurate? does it work for Indian/UK/US food? offline? Which apps have it?)
  10. **CTA**
- **Keywords:** ai food scanner, ai calorie scanner, ai calorie tracker, photo calorie tracker, ai calorie counter from photo, food photo calorie calculator, ai macro scanner, food calorie scanner, scan food calories, ai meal scanner
- **Competitor benchmark:** calai.app, caloriemama.ai, snapcalorie.com, geteatai.app, whatthefood.io — all lead with "snap a photo, get calories in seconds" — mirror this promise in the hero
- **Schema:** `SoftwareApplication` (feature) + `FAQPage` + `BreadcrumbList`
- **Word target:** 1,500–2,000

### 3.4 `/ai-nutrition-coach` — NEW (or 301 from `/nutrition-intelligence`) (P0)

- **Title:** `AI Nutrition Coach — Personalized Calorie & Macro Coaching | Fitnivo`
- **Meta:** Fitnivo's AI nutrition coach helps you hit your calorie and macro targets, plan meals, and adjust as you progress — grounded in your actual food-tracking data.
- **H1:** `AI Nutrition Coach That Learns From What You Eat`
- **Sections:**
  1. Intro — coaching grounded in real tracked data, not generic chat replies
  2. **What Is an AI Nutrition Coach?**
  3. **How Fitnivo's Nutrition Coach Works** (goal → calorie/macro targets → daily tracking → weekly adjustments)
  4. **AI Nutrition Coach vs Nutritionist vs Chatbot** (table)
  5. **Track Calories, Macros, Water, Meals — in One App**
  6. **AI Nutrition Coaching for Your Goal** (weight loss, muscle gain, maintenance, recomp)
  7. **Meal Plans Built Around Your Targets** (link to `/ai-meal-planner`)
  8. **AI Food Scanner Powers Your Coach** (link to `/ai-food-scanner`)
  9. **FAQ** (8 Q)
  10. **CTA**
- **Keywords:** ai nutrition coach, ai nutrition app, ai diet coach, ai calorie tracking app, ai food tracking app, ai macro tracker, ai macro tracking app, ai meal tracker
- **Competitor benchmark:** welling.ai (conversational logging), MacroFactor (adaptive targets), Nutrola, PlateLens — Fitnivo's angle: **all-in-one with workouts**
- **Schema:** `SoftwareApplication` + `FAQPage` + `BreadcrumbList`
- **Word target:** 1,500–2,000
- **Migration:** If keeping current `/nutrition-intelligence`, add `next.config` redirect: `/nutrition-intelligence → /ai-nutrition-coach` (301)

### 3.5 `/ai-workout-planner` — NEW (P1)

- **Title:** `AI Workout Planner & Generator — Personalized Plans | Fitnivo`
- **Meta:** Get personalized workouts built around your goal, experience, and equipment. Fitnivo's AI workout planner adapts as you train.
- **H1:** `AI Workout Planner That Adapts as You Train`
- **Sections:** Intro → What is an AI workout planner → How Fitnivo builds your plan (goal + equipment + history) → Adaptive vs static plans → Home + Gym + Bodyweight → Progressive overload done for you → Track & adjust → Compare to Fitbod/Planfit/BodBot (short) → FAQ → CTA
- **Keywords:** ai workout planner, ai workout generator, ai workout generator app, personalized workout app, personalized workout planner, adaptive workout app, ai gym workout planner, workout generator based on equipment
- **Competitor benchmark:** planfit.ai, bodbot, workoutgen.app, arvo.guru, setgraph.app — all offer "free generator in 30–60 seconds" — Fitnivo should offer a free preview generator on this page
- **Word target:** 1,500–2,000

### 3.6 `/ai-meal-planner` — NEW (P1)

- **Title:** `AI Meal Planner — Personalized Plans by Calories & Macros | Fitnivo`
- **Meta:** Fitnivo's AI meal planner builds meal ideas around your calorie and macro targets. Vegetarian, high-protein, cutting, bulking — personalized to you.
- **H1:** `AI Meal Planner Built Around Your Calorie & Macro Goals`
- **Sections:** Intro → How Fitnivo builds meal plans → By goal (cut/bulk/maintain) → By diet (veg/non-veg/vegan/keto) → Meal plan + food scanner + coach = closed loop → Sample plan → FAQ → CTA
- **Keywords:** ai meal planner, ai meal planning app, meal planner app, personalized meal plan, meal plan for weight loss, meal plan for muscle gain
- **Word target:** 1,200–1,700

### 3.7 `/calorie-tracker` — NEW (P2, optional)

- Consider merging into `/ai-food-scanner` unless there's search-volume evidence it needs its own page. If separate: `Calorie Tracker App — Track Meals, Macros & Water | Fitnivo`

---

## 4. Blogs — write in this order

### 🥇 P0 — Category "best-of" (highest LLM/SERP leverage)

#### 4.1 `/blog/best-ai-fitness-apps-2026`
- **Title:** `Best AI Fitness Apps in 2026 (Tested & Compared)`
- **Meta:** We tested the top AI fitness apps of 2026 — Fitbod, Freeletics, FitnessAI, Caliber, Ray, Fitnivo, and more. Here's what each is best for.
- **Intent:** commercial investigation
- **First-page competitors:** fast.io, indiehackers.com, fitbod.me, sensai.fit, bestaifitnessapp.com, loadmuscle.com
- **Word target:** 2,500–3,500
- **Structure:**
  1. Quick verdict table (10 apps × Best For / Price / AI depth / Nutrition / Food scanner / Coach)
  2. What actually makes an app "AI-powered" (accountability — set reader expectations)
  3. Ranked entries (Fitnivo, Fitbod, Freeletics, FitnessAI, Caliber, Future, Ray, JuggernautAI, SensAI, Planfit) — each entry: Best for / How the AI works / Pricing / Pros / Cons / Who should skip it
  4. By training style (strength / bodyweight / conversational / free / all-in-one)
  5. By goal (weight loss / muscle gain / beginners / gym / home)
  6. FAQ (10 Q)
- **Fitnivo positioning:** "Best for all-in-one AI fitness + nutrition" — NOT #1 overall. Credibility > rank.
- **Powerful add-ons:** comparison table with real emoji ✓/✗, screenshots of each app, price row, "last updated" date visible

#### 4.2 `/blog/best-ai-personal-trainer-apps-2026`
- **Title:** `Best AI Personal Trainer Apps in 2026 (Real Test Results)`
- **First-page competitors:** barbend.com, forgetrainer.ai, sensai.fit, rayfit.com, arvo.guru, gainframe.app, trainera.fit
- **Angle competitors use:** "AI trainer at 5–10% of the cost of a human trainer" — mirror this framing
- **Include:** Ray (voice coaching), Fitbod (workout gen), Caliber/Future (human+AI), Fitnivo (fitness + nutrition), Trainera, SensAI (recovery-aware), Freeletics (bodyweight)
- **Word target:** 2,500–3,000

#### 4.3 `/blog/best-ai-nutrition-coach-apps-2026`
- **Title:** `Best AI Nutrition Coach Apps in 2026 (8 Apps Ranked)`
- **First-page competitors:** welling.ai, ilounge.com, nutritracker.io, nutrola.app, fuelnutrition.app, trainera.fit
- **Include:** Welling, Cal AI, MacroFactor, MyFitnessPal, Cronometer, Noom, PlateLens, Fitnivo, Nutrola
- **Word target:** 2,500–3,000

### 🥈 P1 — Comparison pages (branded search + AI answer citations)

Each comparison page: **1,500–2,500 words**, honest, side-by-side table, "who each is best for", real pros/cons, no "Fitnivo wins everything" framing.

- [ ] `/blog/fitnivo-vs-fitbod` — targets "fitbod alternatives" cluster (competitors on first page: boostcamp, gymbird, sensai, appvulture, trysoma, askvora)
- [ ] `/blog/fitnivo-vs-cal-ai` — targets "cal ai alternatives" (competitors: getkalohealth, welling, macrofactor)
- [ ] `/blog/fitnivo-vs-macrofactor` — targets "macrofactor vs" cluster
- [ ] `/blog/fitnivo-vs-myfitnesspal` — huge branded volume
- [ ] `/blog/fitnivo-vs-freeletics` — bodyweight/adaptive angle
- [ ] `/blog/fitnivo-vs-fitnessai` — gym progression angle
- [ ] `/blog/fitnivo-vs-caliber` — human coaching angle
- [ ] `/blog/fitnivo-vs-cronometer` — micronutrient angle
- [ ] `/blog/fitnivo-vs-noom` — behavior-change angle

**Update existing:** `/blog/best-fitbod-alternatives` — add Fitnivo as first entry, refresh to 2026, add comparison table (this page already exists → quick win).

### 🥉 P1 — Educational / PAA (feeds AI answers)

Each: 1,200–1,800 words, answer-first paragraph, TL;DR box, FAQ block.

- [ ] `/blog/what-is-an-ai-fitness-coach` (target featured snippet — 40-word definition in first paragraph)
- [ ] `/blog/how-ai-fitness-coaches-work` (5-step process, mirrors freebeatfit / everfit / trlactive framing)
- [ ] `/blog/how-ai-food-scanners-work` (computer vision + portion estimation + macro DB)
- [ ] `/blog/ai-fitness-coach-vs-personal-trainer` (retitle-friendly cousin to existing `/blog/ai-vs-traditional-coaching`; internal-link to it)
- [ ] `/blog/is-ai-food-scanning-accurate` (competitors are silent here → easy featured snippet)
- [ ] `/blog/ai-workout-generator-explained`

### 🎯 P2 — Goal- and audience-targeted (long-tail volume)

- [ ] `/blog/ai-fitness-apps-for-weight-loss`
- [ ] `/blog/ai-fitness-apps-for-muscle-gain`
- [ ] `/blog/ai-fitness-apps-for-beginners`
- [ ] `/blog/ai-fitness-apps-for-home-workouts`
- [ ] `/blog/ai-fitness-apps-for-gym-workouts`
- [ ] `/blog/ai-fitness-apps-for-women`
- [ ] `/blog/ai-fitness-apps-for-men-over-40`
- [ ] `/blog/ai-nutrition-coach-for-weight-loss`
- [ ] `/blog/ai-nutrition-coach-for-muscle-gain`
- [ ] `/blog/ai-workout-planner-for-gym`
- [ ] `/blog/ai-workout-generator-based-on-equipment`
- [ ] `/blog/ai-calorie-tracker-from-photo`

### 🌍 P3 — Geo variants (US/UK/CA/AU/IN)

Only build geo pages if evidence shows the market matters. Cheap version: mention country-specific units, foods, and gyms inside main pages (grams AND ounces, sample Indian meal, Planet Fitness / PureGym / Gymshark reference).

Optional dedicated pages:
- [ ] `/blog/best-ai-fitness-apps-uk-2026`
- [ ] `/blog/best-ai-fitness-apps-india-2026`
- [ ] `/blog/best-ai-nutrition-apps-uk`

---

## 5. What every blog must contain (the "powerful" checklist)

Copy this checklist into every new blog post PR. Missing 3+ items = don't ship.

**Above the fold**
- [ ] H1 with primary keyword in first 60 characters
- [ ] Meta title ≤ 60 char, meta description 140–160 char, both contain primary keyword
- [ ] TL;DR / verdict box in first 100 words (LLMs quote these)
- [ ] Publish date + "Last updated" date visible (updated in Article schema too)
- [ ] Author + "Reviewed by" byline linking to author page
- [ ] Estimated read time
- [ ] Table of contents (auto-generated from H2s, jump-links)

**Content structure**
- [ ] Primary keyword in first paragraph
- [ ] Answer-first paragraph for the main question (30–50 words — feeds featured snippets & AI overviews)
- [ ] H2s use question-form or category-form (mirrors PAA)
- [ ] One comparison table per post minimum
- [ ] Numbered list or checklist somewhere (LLM-friendly)
- [ ] At least 2 original visuals (screenshot, diagram, chart) — not stock photos
- [ ] Real product screenshots where products are named
- [ ] Sources cited inline with `<a rel="noopener">` (LLMs reward citing sources)
- [ ] Internal links to 3–5 related Fitnivo pages
- [ ] Outbound links to 2–3 high-authority non-competitor sources
- [ ] FAQ block at bottom (5–10 Q, each ≤ 60 words)
- [ ] CTA to app / signup

**On-page SEO**
- [ ] Slug is short and keyword-focused (kebab-case, no dates in URL unless the article is year-specific)
- [ ] Canonical tag set
- [ ] `og:image` + `twitter:image` 1200×630
- [ ] All images have descriptive `alt` (not "image1.png")
- [ ] Image filenames are keyword-descriptive
- [ ] Images are WebP/AVIF, LCP image preloaded
- [ ] `<link rel="alternate" hreflang="en">` (add `en-gb`, `en-us`, `en-in`, `en-au`, `en-ca` if geo pages exist)
- [ ] Schema: `Article` + `BreadcrumbList` + `FAQPage` (if FAQ present)
- [ ] Word count matches target (short posts don't compete for commercial terms in this vertical — competitors ship 2,000–3,500)

**Trust / E-E-A-T**
- [ ] No numeric claim without a source or a "based on our internal testing of N sessions"
- [ ] Every competitor mentioned has a link to their site
- [ ] Author has real photo + LinkedIn or is honestly labeled "Fitnivo Editorial Team"
- [ ] Health-adjacent posts include disclaimer: *This is general information, not medical advice.*

---

## 6. Global schema plan

Ship in `src/app/layout.tsx` (site-wide) + per-page `<script type="application/ld+json">`.

**Site-wide (`layout.tsx`):**
- `Organization` — name, url, logo, sameAs [twitter, instagram, linkedin, play store, app store, product hunt], contactPoint
- `WebSite` — url, name, potentialAction: SearchAction

**Homepage `/`:**
- `SoftwareApplication` — name: "Fitnivo", applicationCategory: "HealthApplication", operatingSystem: "Android, iOS", offers (freeTrial), aggregateRating **only if real** (Google's guidance: fake ratings = manual action)

**Pillar pages (`/ai-fitness-coach`, `/ai-food-scanner`, etc.):**
- `SoftwareApplication` (feature-scoped) + `FAQPage` + `BreadcrumbList`

**Blog posts:**
- `Article` (headline, image, datePublished, dateModified, author: Person or Organization, publisher)
- `FAQPage` (only if page visibly contains the FAQ — required by Google)
- `BreadcrumbList`
- For comparison posts: `Article` + `ItemList` of products

**Author page (if you build real authors):**
- `Person` (name, jobTitle, image, sameAs [LinkedIn, Twitter, etc.], knowsAbout)

**Validation:** run every schema block through https://validator.schema.org and Google Rich Results Test before shipping.

---

## 7. Technical SEO tasks

- [ ] `sitemap.xml` — verify all new URLs listed, lastmod updates on edit
- [ ] `robots.txt` — allow all, reference sitemap
- [ ] `llms.txt` — keep updated with new pages (already exists per recent commit)
- [ ] Canonical tags on every page (avoid duplicate with utm)
- [ ] `hreflang` if geo pages ship
- [ ] Core Web Vitals — verify LCP < 2.5s, INP < 200ms, CLS < 0.1 (recent commit already optimizes LCP — good)
- [ ] Internal linking: every new page linked from homepage footer OR main nav, plus 2+ contextual links
- [ ] Breadcrumbs on all blog + pillar pages (visible + schema)
- [ ] 301 redirects: `/nutrition-intelligence → /ai-nutrition-coach` (if renamed)
- [ ] OG/Twitter meta on every page
- [ ] Register site in Google Search Console + Bing Webmaster Tools (US, UK, CA, AU, IN properties are all served from same domain — no separate properties needed unless subdomains)
- [ ] Submit updated sitemap after each batch of pages
- [ ] Set up GSC → Search Generative AI report subscription (Google rolled out June 2026 to subset of sites)

---

## 8. External authority / off-page (weakest area — highest leverage)

Google's ranking + LLM retrieval both need independent sources describing Fitnivo consistently as *"AI fitness and nutrition coach"*.

**Ship the first 10 mentions in Q1:**

- [ ] **Product Hunt** launch (schedule Tuesday–Thursday, US timezone, prepare hunter, first comment ready)
- [ ] **AlternativeTo** — submit Fitnivo as alt to Fitbod, MyFitnessPal, Cal AI, Noom
- [ ] **G2** — create profile under "Fitness Software" and "Nutrition Coaching"
- [ ] **Capterra / GetApp** — same
- [ ] **Toolify.ai** — AI directory
- [ ] **Futurepedia** — AI directory
- [ ] **There's An AI For That** — AI directory
- [ ] **Google Play Store** listing — canonical description must match website (see §9)
- [ ] **App Store** listing — same canonical description
- [ ] **Reddit** — organic participation in r/fitness, r/loseit, r/xxfitness, r/gainit (no drops — engage first, mention when asked). Do NOT spam.
- [ ] **YouTube** — 1 review video from a mid-tier fitness/tech reviewer (10K–100K subs)
- [ ] **Fitness bloggers** — pitch a "we tested Fitnivo for 30 days" to independent bloggers
- [ ] **Founder interview** — pitch Indie Hackers, Startup Grind, EO India, YourStory
- [ ] **Podcast** — pitch 3 fitness/tech podcasts
- [ ] **Press release** — one substantive release (funding, milestone, feature launch — not fluff)

**Rules:**
- Never buy links. Never join PBNs. Never do 500-directory blasts.
- Every external property must describe Fitnivo the same way (see §9 canonical description).
- Ask reviewers to link to `/` not deep pages.

---

## 9. Entity consistency — canonical description

Every external + internal surface must use one of these two descriptions. Do not paraphrase into "wellness ecosystem" or "biometric optimization platform".

**Long (site, Play Store long desc, Product Hunt, press):**
> Fitnivo is an AI fitness and nutrition coach that combines personalized workouts, calorie and macro tracking, AI food scanning, meal planning, and fitness coaching in one app.

**Short (Twitter bio, directory tagline, meta description tail):**
> AI Fitness & Nutrition Coach — personalized workouts, calorie tracking, AI food scanning in one app.

**Places to update:**
- [ ] Homepage hero + `<meta name="description">`
- [ ] `/about` page
- [ ] Google Play Store — short + long description
- [ ] Apple App Store listing
- [ ] Twitter / X bio
- [ ] Instagram bio
- [ ] LinkedIn company page
- [ ] Product Hunt maker profile
- [ ] AlternativeTo profile
- [ ] YouTube channel description
- [ ] Any founder bios that mention Fitnivo

---

## 10. Tracking & success metrics

**Weekly (in GSC):**
- Impressions + clicks for Tier 1 keywords
- Average position for `/ai-fitness-coach`, homepage, and each new pillar
- New keywords entering top 20

**Monthly:**
- Number of external mentions gained
- Referring domains (via any free tool — Ahrefs Webmaster Tools is free after verification)
- AI Overview / SGE appearance (GSC when available)
- Direct search volume for "fitnivo" and "fitnivo app"

**North-star KPIs (12 months):**
- Fitnivo appears in ChatGPT / Google AI answer for *"best AI fitness apps"* — target Q3 2027
- Ranking top 5 in at least 5 Tier 1 keywords
- 100+ referring domains
- Homepage + `/ai-fitness-coach` each in top 3 for their primary term

---

## 11. Execution timeline (12 weeks)

### Weeks 1–2 (P0 — foundation)
- [ ] Trust cleanup on all existing pages (§1)
- [ ] Homepage revision (§3.1) with new schema
- [ ] `/ai-fitness-coach` full redesign (§3.2)
- [ ] `/ai-food-scanner` new page (§3.3)
- [ ] `/ai-nutrition-coach` new page + 301 from `/nutrition-intelligence` (§3.4)
- [ ] Global Organization + WebSite schema
- [ ] Submit sitemap

### Weeks 3–4 (P0/P1 — content authority)
- [ ] `/blog/best-ai-fitness-apps-2026` (§4.1)
- [ ] `/blog/best-ai-personal-trainer-apps-2026` (§4.2)
- [ ] `/blog/best-ai-nutrition-coach-apps-2026` (§4.3)
- [ ] `/ai-workout-planner` (§3.5)
- [ ] `/ai-meal-planner` (§3.6)
- [ ] Update existing `/blog/best-fitbod-alternatives` to include Fitnivo + 2026 refresh
- [ ] Product Hunt launch prep

### Weeks 5–6 (P1 — comparisons + PAA)
- [ ] `/blog/fitnivo-vs-fitbod`
- [ ] `/blog/fitnivo-vs-cal-ai`
- [ ] `/blog/fitnivo-vs-macrofactor`
- [ ] `/blog/what-is-an-ai-fitness-coach`
- [ ] `/blog/how-ai-food-scanners-work`
- [ ] Product Hunt LAUNCH
- [ ] AlternativeTo + G2 + Capterra profiles

### Weeks 7–8 (P1 — more comparisons)
- [ ] `/blog/fitnivo-vs-myfitnesspal`
- [ ] `/blog/fitnivo-vs-freeletics`
- [ ] `/blog/fitnivo-vs-noom`
- [ ] `/blog/how-ai-fitness-coaches-work`
- [ ] `/blog/ai-fitness-coach-vs-personal-trainer`
- [ ] `/blog/is-ai-food-scanning-accurate`
- [ ] Directory submissions: Toolify, Futurepedia, TAAFT
- [ ] Pitch 3 YouTubers for reviews

### Weeks 9–10 (P2 — goal/audience long-tail)
- [ ] 4 audience blogs (weight loss / muscle gain / beginners / home workouts)
- [ ] Founder interview pitches
- [ ] Reddit organic engagement (start)

### Weeks 11–12 (P2/P3 — polish + geo)
- [ ] Remaining audience blogs
- [ ] Geo blog: UK OR India (whichever GSC shows more impressions from)
- [ ] Review GSC data → double-down on 3 top-performing queries with new supporting content
- [ ] YouTube review videos should be publishing around now
- [ ] Retro: what shipped, what ranked, what's next

---

## 12. Anti-patterns (things NOT to do)

- ❌ **Don't publish 30 AI-generated posts at once.** Google's Sep 2026 guidance still emphasizes unique, non-commodity content for SGE. Batch bulk publishing signals spam.
- ❌ **Don't stuff exact-match keywords** — GSC already shows semantic reach; force-inserting hurts.
- ❌ **Don't create thin pages per keyword variant** — one strong pillar > ten thin pages.
- ❌ **Don't invent authors.** If you list Dr. X, they must exist and be reachable.
- ❌ **Don't use FAQPage schema without visible FAQ.** Google will apply a manual action.
- ❌ **Don't mark up fake aggregateRating.** Same.
- ❌ **Don't buy backlinks / directory bombs.** 10 real mentions > 500 garbage ones.
- ❌ **Don't rewrite `/ai-fitness-coach` URL** — you already have position 1 impressions there.
- ❌ **Don't launch on Product Hunt before homepage + `/ai-fitness-coach` are polished** — you get one shot at first impression.
- ❌ **Don't try to be "wellness ecosystem" everywhere.** One entity: AI Fitness & Nutrition Coach.

---

## 13. Sources (live SERP research, Sept 2026)

### "best AI fitness apps 2026"
- [8 Best AI Fitness Apps in 2026 — Fastio](https://fast.io/resources/best-ai-fitness-apps-2026/)
- [Best AI Fitness Apps in 2026 — Indie Hackers](https://www.indiehackers.com/post/best-ai-fitness-apps-in-2026-top-3-workout-apps-compared-45d8f3241c)
- [Best AI Fitness Apps 2026 — Fitbod blog](https://fitbod.me/blog/best-ai-fitness-apps-2026-the-complete-guide-to-ai-powered-muscle-building-apps/)
- [Best AI-Powered Fitness Apps 2026 — SensAI](https://www.sensai.fit/blog/best-ai-workout-app)
- [30 Best Fitness Apps 2026 — GetFit AI](https://www.bestaifitnessapp.com/blog/best-fitness-apps)
- [8 Best AI Workout Apps 2026 — LoadMuscle](https://loadmuscle.com/blog/best-ai-workout-apps-2026)

### "best AI personal trainer app 2026"
- [Best Personal Training Apps 2026 — BarBend](https://barbend.com/best-personal-training-apps/)
- [Best AI Personal Trainer Apps 2026 — Forge](https://forgetrainer.ai/blog/best-ai-personal-trainer-apps-2026)
- [Best AI Personal Trainer Apps 2026 — SensAI](https://www.sensai.fit/blog/best-ai-personal-trainer-apps-2026)
- [Best AI Personal Trainer & Wellness Coach — Ray](https://www.rayfit.com/blog/2026/02/best-ai-personal-trainer-app/)
- [Best AI Workout Apps 2026 — Arvo](https://arvo.guru/best-ai-workout-apps)
- [Best AI Personal Trainer Apps — GainFrame](https://gainframe.app/blog/best-ai-personal-trainer-apps/)
- [Best AI Fitness App 2026 — Trainera](https://trainera.fit/blogs/best-ai-fitness-app)

### AI food scanner / calorie tracker
- [Cal AI — App Store](https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616)
- [Cal AI — Google Play](https://play.google.com/store/apps/details?id=com.viraldevelopment.calai)
- [Calorie Mama Food AI](https://www.caloriemama.ai/)
- [SnapCalorie](https://www.snapcalorie.com/)
- [What the Food](https://whatthefood.io/)
- [EatAI (free)](https://geteatai.app/)

### AI nutrition coach
- [Best AI Nutrition Apps 2026 — iLounge](https://www.ilounge.com/articles/best-ai-nutrition-apps-to-achieve-your-health-goals-in-2026)
- [3 Best AI Nutrition Apps 2026 — Welling](https://www.welling.ai/articles/best-ai-nutrition-apps)
- [AI Nutrition Coach 2026 Guide](https://ai-nutrition-coach.com/)
- [Best AI Coaching Apps 2026 — Nutritracker](https://www.nutritracker.io/best-ai-coaching-apps/)
- [Best AI Fitness and Nutrition App 2026 — Trainera](https://trainera.fit/blogs/best-ai-fitness-and-nutrition-app-2026)
- [8 Best AI Nutrition Apps 2026 — Nutrola](https://nutrola.app/en/blog/8-best-ai-nutrition-apps-2026)
- [Best AI Nutrition Apps 2026 — Fuel Nutrition](https://fuelnutrition.app/blog/best-ai-nutrition-apps)

### Fitbod alternatives
- [Alternatives to Fitbod — Boostcamp](https://www.boostcamp.app/alternatives/fitbod)
- [Best Alternatives to Fitbod — GymBird](https://www.gymbird.com/fitness-apps/what-are-alternatives-to-fitbod)
- [AI Fitness App Alternatives 2026 — SensAI](https://www.sensai.fit/blog/best-ai-fitness-apps-2026-fitbod-freeletics-future-trainiac-alternatives)
- [Best Fitbod Alternatives — App Vulture](https://appvulture.com/apps-like/fitbod/)
- [Fitbod Alternative — Soma](https://trysoma.app/blog/fitbod-alternative/)
- [Best Fitbod Alternatives 2026 — Vora](https://askvora.com/alternatives/fitbod)
- [Fitbod Alternatives — AlternativeTo](https://alternativeto.net/software/fitbod/)

### "what is an AI fitness coach"
- [Rise of AI Coaching — Freebeat](https://www.freebeatfit.com/blogs/brand-story/ai-fitness-coach)
- [AI in Fitness Coaching — Everfit](https://blog.everfit.io/ai-in-fitness-coaching-a-deep-dive-into-real-world-use-cases)
- [What Does an AI Fitness Coach Do — FitCraft](https://getfitcraft.com/blog/what-ai-fitness-coach-does)
- [Guide to the AI Fitness Coach — Built](https://www.builtworkout.com/blog/ai-fitness-coach)
- [AI Fitness Coaching Complete Guide — TRL/Active](https://www.trlactive.com/topics/ai-fitness-coaching)

### AI workout generators
- [Planfit AI Workout Generator](https://planfit.ai/en/ai-workout-generator)
- [BodBot — Google Play](https://play.google.com/store/apps/details?id=com.bodbot.trainer)
- [WorkoutGen](https://workoutgen.app/)
- [Arvo Workout Generator](https://arvo.guru/tools/workout-generator)
- [Setgraph AI Plan](https://setgraph.app/features/ai-plan)

### Cal AI vs MyFitnessPal vs MacroFactor
- [MacroFactor vs Cal AI — MacroFactor](https://macrofactor.com/macrofactor-vs-cal-ai/)
- [MacroFactor vs Cal AI — FeastGood](https://feastgood.com/macrofactor-vs-cal-ai/)
- [Cal AI vs MyFitnessPal — Welling](https://www.welling.ai/articles/cal-ai-vs-myfitnesspal-2026)
- [Cal AI vs MacroFactor — Intake Nutrition](https://www.intakenutrition.io/blog/cal-ai-vs-macrofactor-comparison-photo-snapping-or-adaptive-macro-coaching)
- [Cal AI Alternatives — Kalo](https://www.getkalohealth.com/blog/cal-ai-alternatives)
- [Best MyFitnessPal Alternatives 2026 — Vora](https://askvora.com/blog/best-myfitnesspal-alternatives-2026)

---

## 14. First 10 items to do TOMORROW (starter kit)

Ranked by impact per hour.

1. [ ] Remove "150,000+ members" + fake rating + fake author bios from homepage & existing blogs (2h)
2. [ ] Rewrite homepage H1 + sub-hero to canonical description (§9) (1h)
3. [ ] Add `Organization` + `WebSite` + `SoftwareApplication` schema to `layout.tsx` (1h)
4. [ ] Redesign `/ai-fitness-coach` copy per §3.2 (1 day)
5. [ ] Draft + publish `/ai-food-scanner` per §3.3 (1 day)
6. [ ] Draft + publish `/ai-nutrition-coach` (rename from `/nutrition-intelligence`) per §3.4 (1 day)
7. [ ] Update `/blog/best-fitbod-alternatives` — add Fitnivo entry, refresh to 2026, add table (3h)
8. [ ] Update Play Store + App Store long description to canonical (§9) (30min)
9. [ ] Submit to AlternativeTo + Toolify + Futurepedia + TAAFT (2h)
10. [ ] Set up GSC weekly monitoring for the 10 Tier 1 keywords (§10) (30min)

---

*End of file. Update `Last updated` header when editing.*
