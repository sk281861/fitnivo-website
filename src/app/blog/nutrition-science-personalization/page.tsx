import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

// ── Schema Data ──────────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  headline: 'Nutrition Science: Macros, Micros & Personalization',
  description:
    'Master nutrition science with our deep dive into macronutrients, micronutrients, and AI-powered personalization strategies to optimize your diet for any goal.',
  image: 'https://fitnivo.in/images/blog/nutrition/nutrition_science_hero.webp',
  url: 'https://fitnivo.in/blog/nutrition-science-personalization',
  datePublished: '2026-06-02T00:00:00Z',
  dateModified: '2026-06-02T00:00:00Z',
  authorName: 'Dr. Priya Sharma, RD',
  authorUrl: 'https://fitnivo.in/blog',
  wordCount: 2100,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  {
    name: 'Nutrition Science: Macros, Micros & Personalization',
    url: 'https://fitnivo.in/blog/nutrition-science-personalization',
  },
]);

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema]);

// ── Table of Contents ─────────────────────────────────────────────────────────
const tableOfContents = [
  { id: 'what-are-macronutrients', label: 'What Are Macronutrients?' },
  { id: 'protein-the-building-block', label: 'Protein: The Building Block' },
  { id: 'carbohydrates-your-primary-fuel', label: 'Carbohydrates: Your Primary Fuel' },
  { id: 'fats-the-misunderstood-macro', label: 'Fats: The Misunderstood Macro' },
  { id: 'micronutrients-the-hidden-engine', label: 'Micronutrients: The Hidden Engine' },
  { id: 'personalized-nutrition-science', label: 'Personalized Nutrition Science' },
  { id: 'nutrient-timing-and-performance', label: 'Nutrient Timing & Performance' },
  { id: 'ai-driven-nutrition', label: 'AI-Driven Nutrition Personalization' },
  { id: 'key-takeaways', label: 'Key Takeaways' },
];

// ── Related Posts ─────────────────────────────────────────────────────────────
const relatedPosts = [
  {
    title: 'The Science of Biometric Optimization',
    description: "How wearables and AI combine to optimize your body's performance metrics.",
    href: '/blog/biometric-optimization-science',
    image: '/images/biometric_sync_wearable.webp',
    readTime: '8 min read',
    category: 'Science',
  },
  {
    title: 'Recovery Optimization: Sleep, Stress & Adaptation',
    description: 'Science-backed strategies to maximize recovery and supercharge your adaptation.',
    href: '/blog/recovery-optimization-sleep-stress',
    image: '/images/pillar_mind.webp',
    readTime: '10 min read',
    category: 'Recovery',
  },
  {
    title: 'Mindfulness and Athletic Performance',
    description: 'The neuroscience of how mindfulness training enhances athletic output.',
    href: '/blog/mindfulness-athletic-performance',
    image: '/ai_mindfulness.webp',
    readTime: '9 min read',
    category: 'Mindfulness',
  },
];

export default function NutritionSciencePersonalizationPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1033 50%, #0a0a1a 100%)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog" className="text-indigo-400 hover:text-indigo-300 transition-colors">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60 truncate">Nutrition Science</span>
          </nav>

          {/* Category & read time */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}
            >
              Nutrition Science
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">12 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">June 2, 2026</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}>
            Nutrition Science:{' '}
            <span style={{ background: 'linear-gradient(90deg, #818cf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Macros, Micros & Personalization
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Most people track calories. Elite performers track <strong className="text-white">nutrient quality, timing, and individual metabolic response</strong> — the trio that actually moves the needle on body composition, energy, and longevity.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/images/fitbuu.webp"
              alt="Dr. Priya Sharma, Registered Dietitian at Fitnivo"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-indigo-500/40"
            />
            <div>
              <p className="text-white font-semibold text-sm">Dr. Priya Sharma, RD</p>
              <p className="text-white/50 text-xs">Registered Dietitian · Sports Nutrition Specialist</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(99,102,241,0.2)' }}>
            <Image
              src="/images/blog/nutrition/nutrition_science_hero.webp"
              alt="Holographic display of macronutrient molecules with personalized nutrition AI dashboard"
              width={1200}
              height={630}
              priority
              className="w-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,26,0.6) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ─────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

          {/* ── Article Body ───────────────────────────────────────────────── */}
          <article className="min-w-0">

            {/* ── Table of Contents ─────────────────────────────────────── */}
            <nav
              aria-label="Table of contents"
              className="mb-12 rounded-2xl p-6"
              style={{
                background: 'rgba(99,102,241,0.07)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span style={{ color: '#818cf8' }}>📋</span> Table of Contents
              </h2>
              <ol className="space-y-2">
                {tableOfContents.map((item, i) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="text-xs font-mono mt-0.5 w-5 text-right flex-shrink-0" style={{ color: '#818cf8' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-white/70 hover:text-indigo-400 transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── SECTION 1: What Are Macronutrients ────────────────────── */}
            <section id="what-are-macronutrients" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                What Are Macronutrients?
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                Macronutrients — protein, carbohydrates, and fats — are the three calorie-bearing nutrients your body uses for energy, structural repair, and hormonal synthesis. While every diet debate seems to pit these macros against each other, the research consistently shows a more nuanced picture: <strong className="text-white">total intake matters far less than macro quality and individual metabolic context.</strong>
              </p>

              <p className="text-white/75 leading-relaxed mb-6">
                Fitnivo's internal data from 50,000+ users shows that body composition changes stall not from eating too many calories, but from miscalibrated macro ratios relative to each person's training volume, stress levels, and hormonal baseline — factors that change week to week.
              </p>

              {/* Macros Infographic */}
              <figure className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/macronutrients_infographic.webp"
                  alt="Pie chart infographic showing macronutrient split: 30% protein, 45% carbohydrates, 25% fats for optimal body composition"
                  width={800}
                  height={800}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  Evidence-based macro split for body composition optimization — individual ratios vary by activity and physiology.
                </figcaption>
              </figure>

              {/* Snippet-bait FAQ block */}
              <div className="rounded-xl p-6 mb-6" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <h3 className="text-xl font-bold text-white mb-3" id="what-is-a-macronutrient">
                  What Is a Macronutrient?
                </h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  A macronutrient is any nutrient required in large quantities for energy production and bodily function. The three macronutrients are protein (4 kcal/g), carbohydrates (4 kcal/g), and fats (9 kcal/g). Each plays a distinct physiological role beyond mere calorie supply.
                </p>
              </div>
            </section>

            {/* ── SECTION 2: Protein ────────────────────────────────────── */}
            <section id="protein-the-building-block" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Protein: The Building Block
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                Protein is not just for bodybuilders. Every cell in your body contains protein. Your enzymes, immune cells, neurotransmitters, and structural tissues all depend on a continuous supply of amino acids. The average sedentary adult needs ~0.8g/kg of bodyweight, but <strong className="text-white">active individuals and those in a caloric deficit need 1.6–2.4g/kg</strong> to preserve lean mass and accelerate recovery.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">Complete vs. Incomplete Proteins</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Animal proteins (chicken, eggs, fish, dairy) are "complete" — they contain all nine essential amino acids your body cannot synthesize. Plant proteins are often "incomplete," but strategic combinations (rice + beans, hummus + pita) fill every amino acid gap without requiring meat.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">The Leucine Threshold</h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Muscle protein synthesis (MPS) is primarily triggered by the amino acid <strong className="text-white">leucine</strong>. Research from the Journal of Nutrition shows you need ~2.5–3g of leucine per meal to maximally stimulate MPS — roughly the amount in 30–40g of high-quality protein. This is why spreading protein across 4–5 meals outperforms two large feasts for muscle building.
              </p>

              {/* Meal Planning Image */}
              <figure className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/nutrition_meal_planning.webp"
                  alt="Balanced meal plan spread showing lean proteins, complex carbohydrates, and healthy fats arranged for optimal nutrition"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  A balanced meal encompassing all three macronutrients in evidence-based proportions.
                </figcaption>
              </figure>

              {/* Callout */}
              <div className="rounded-xl p-5 mb-4 flex gap-4" style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.2)' }}>
                <span className="text-2xl flex-shrink-0">💡</span>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">Fitnivo Insight:</strong> Our AI nutrition model found that users who hit their protein targets consistently for 8 weeks showed 31% better lean mass retention during a caloric deficit compared to those who under-consumed protein — even when total calories were the same.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">Top Protein Sources by Bioavailability</h3>
              <ul className="space-y-2 mb-4">
                {[
                  { source: 'Whey protein isolate', score: '~110 DIAAS', note: 'Fastest absorption — ideal post-workout' },
                  { source: 'Eggs (whole)', score: '~113 DIAAS', note: 'The gold standard reference protein' },
                  { source: 'Chicken breast', score: '~108 DIAAS', note: 'Lean and complete across all amino acids' },
                  { source: 'Salmon (wild)', score: '~100 DIAAS', note: 'Adds omega-3s alongside complete protein' },
                  { source: 'Soy protein isolate', score: '~98 DIAAS', note: 'Best plant-based complete protein' },
                ].map((item) => (
                  <li key={item.source} className="flex items-start gap-3 rounded-lg p-3"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="text-green-400 font-mono text-xs mt-1 w-24 flex-shrink-0">{item.score}</span>
                    <div>
                      <span className="text-white font-medium text-sm">{item.source}</span>
                      <span className="text-white/50 text-xs ml-2">— {item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SECTION 3: Carbohydrates ──────────────────────────────── */}
            <section id="carbohydrates-your-primary-fuel" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Carbohydrates: Your Primary Fuel
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                Carbohydrates have been vilified by keto culture, but glucose remains the brain's preferred fuel and the primary substrate for high-intensity exercise. The real issue is not carbohydrates themselves — it's <strong className="text-white">the glycemic index, fiber content, and timing</strong> of carbohydrate intake that separates health outcomes.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">Simple vs. Complex Carbohydrates</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Simple carbohydrates (white sugar, fruit juice, refined grains) digest rapidly, causing sharp insulin spikes. Complex carbohydrates (oats, quinoa, sweet potato, lentils) digest slowly, providing sustained energy and feeding gut microbiome diversity. The glycemic load — not just glycemic index — determines the actual blood sugar impact per serving.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">Carb Cycling and Performance</h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Strategic carb cycling — consuming more carbohydrates on high-intensity training days and fewer on rest days — allows you to maintain glycogen stores for performance while improving insulin sensitivity and fat oxidation on recovery days. Fitnivo's AI automatically adjusts daily carb targets based on your <Link href="/ai-fitness-coach" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">AI coaching workout schedule</Link> and biometric recovery data.
              </p>

              {/* Nutrient Timing Infographic */}
              <figure className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/nutrition_timing_chart.webp"
                  alt="Nutrient timing timeline chart showing optimal windows for carbohydrate, protein, and fat consumption throughout the day"
                  width={1000}
                  height={500}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  Optimal nutrient timing windows for athletic performance — carb-load pre-workout, maximize protein post-workout.
                </figcaption>
              </figure>
            </section>

            {/* ── SECTION 4: Fats ───────────────────────────────────────── */}
            <section id="fats-the-misunderstood-macro" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Fats: The Misunderstood Macro
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                Dietary fat is essential for testosterone production, vitamin absorption (A, D, E, K are all fat-soluble), cellular membrane integrity, and brain function (the brain is ~60% fat by dry weight). The decades-long "low-fat" movement contributed to the processed food era and arguably worsened metabolic health across populations.
              </p>

              <p className="text-white/75 leading-relaxed mb-6">
                The modern consensus: <strong className="text-white">total fat isn't the enemy — trans fats and excessive saturated fat are.</strong> Monounsaturated fats (olive oil, avocados) and polyunsaturated fats (omega-3s from fatty fish and flaxseed) actively reduce systemic inflammation, support cardiovascular health, and improve insulin sensitivity.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">Omega-3 to Omega-6 Ratio</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Modern Western diets average a 15:1 omega-6 to omega-3 ratio. Research suggests optimal health falls between 4:1 and 2:1. This imbalance drives chronic low-grade inflammation — the root mechanism in metabolic syndrome, cardiovascular disease, and impaired recovery. Prioritizing fatty fish, walnuts, and flaxseed while reducing seed oils meaningfully improves this ratio.
              </p>
            </section>

            {/* ── SECTION 5: Micronutrients ─────────────────────────────── */}
            <section id="micronutrients-the-hidden-engine" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Micronutrients: The Hidden Engine
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                While macros determine your energy balance, micronutrients — vitamins and minerals — are the catalysts that make every metabolic reaction possible. You can eat the perfect macro ratio and still underperform if you're deficient in magnesium, vitamin D, iron, or B12.
              </p>

              <p className="text-white/75 leading-relaxed mb-6">
                A landmark study in the <em>American Journal of Clinical Nutrition</em> found that <strong className="text-white">over 90% of adults are deficient in at least one key micronutrient</strong>, with vitamin D (deficient in 42% of U.S. adults), magnesium (deficient in 68%), and zinc among the most common gaps — even in people eating "healthy" diets.
              </p>

              {/* Micronutrients Image */}
              <figure className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/micronutrients_vitamins.webp"
                  alt="Scientific visualization of key micronutrients including Vitamin D, B12, Iron, Magnesium, and Zinc with absorption pathways in the human body"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  Key micronutrients and their absorption pathways — deficiency silently impairs performance and recovery.
                </figcaption>
              </figure>

              {/* Snippet block */}
              <div className="rounded-xl p-6 mb-6" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <h3 className="text-xl font-bold text-white mb-3" id="why-are-micronutrients-important">
                  Why Are Micronutrients Important for Athletes?
                </h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  Micronutrients act as enzymatic cofactors enabling energy metabolism, oxygen transport, muscle contraction, and immune function. Athletes deplete micronutrients faster through sweat and elevated metabolic demand, making targeted replenishment through whole foods and strategic supplementation critical for sustained performance and injury prevention.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">Critical Micronutrients for Active Individuals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { nutrient: 'Vitamin D3', role: 'Testosterone synthesis, immune function, muscle repair', sources: 'Sunlight, fatty fish, fortified foods' },
                  { nutrient: 'Magnesium', role: 'ATP production, protein synthesis, sleep quality', sources: 'Dark leafy greens, pumpkin seeds, dark chocolate' },
                  { nutrient: 'Iron', role: 'Oxygen transport to muscles, energy production', sources: 'Red meat, lentils, spinach (with vitamin C)' },
                  { nutrient: 'Zinc', role: 'Testosterone regulation, wound healing, immune defense', sources: 'Oysters, beef, pumpkin seeds' },
                  { nutrient: 'B12', role: 'Nervous system function, red blood cell formation', sources: 'Animal products, nutritional yeast, supplements' },
                  { nutrient: 'Vitamin C', role: 'Collagen synthesis, antioxidant defense, iron absorption', sources: 'Bell peppers, citrus, kiwi, broccoli' },
                ].map((item) => (
                  <div key={item.nutrient} className="rounded-xl p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <h4 className="text-white font-bold text-sm mb-1">{item.nutrient}</h4>
                    <p className="text-white/60 text-xs mb-2 leading-snug">{item.role}</p>
                    <p className="text-indigo-400 text-xs">🌿 {item.sources}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 6: Personalization ────────────────────────────── */}
            <section id="personalized-nutrition-science" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Personalized Nutrition Science
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                The biggest revolution in nutrition science over the past decade is the unambiguous proof that <strong className="text-white">there is no universal optimal diet.</strong> The PREDICT study (2019, Kings College London / Massachusetts General Hospital), the largest nutrition study ever conducted, showed that two people eating identical meals can have blood glucose responses varying by up to 10-fold. Insulin response, gut microbiome composition, sleep quality, and stress hormone levels all modulate how each person metabolizes every meal.
              </p>

              <p className="text-white/75 leading-relaxed mb-6">
                This is the science that makes <Link href="/nutrition-intelligence" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">AI-powered nutrition intelligence</Link> a genuine paradigm shift — not marketing hype. A system that continuously reads your biometric outputs and adjusts macro targets accordingly will outperform any static diet plan, regardless of how well-designed that plan is.
              </p>

              {/* AI Nutrition image */}
              <figure className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/personalized_nutrition_ai.webp"
                  alt="AI personalized nutrition dashboard showing biometric data analysis and custom meal plan generation"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  Fitnivo's AI model integrates biometric data to generate individualized macro targets — updated daily.
                </figcaption>
              </figure>

              <h3 className="text-xl font-bold text-white mb-3">The Four Pillars of Personalized Nutrition</h3>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    n: '01',
                    title: 'Metabolic Rate Calibration',
                    body: 'Your basal metabolic rate (BMR) and total daily energy expenditure (TDEE) are individual constants that standard formulas like Mifflin-St Jeor underestimate by 15-20% in high-muscle-mass individuals. Continuous biometric monitoring refines these estimates weekly.',
                  },
                  {
                    n: '02',
                    title: 'Gut Microbiome Profiling',
                    body: 'Your unique gut bacterial ecosystem determines how efficiently you extract energy from food, produce short-chain fatty acids, and regulate appetite hormones (leptin, ghrelin). High-fiber diverse diets grow the microbiome diversity that correlates with leaner body composition.',
                  },
                  {
                    n: '03',
                    title: 'Hormonal Context',
                    body: 'Cortisol, insulin, testosterone, and thyroid hormones all shift macro partitioning. Under chronic stress (high cortisol), carbohydrates are preferentially stored as visceral fat. Adapting macro ratios to hormonal rhythms — not just workout schedules — produces dramatically better outcomes.',
                  },
                  {
                    n: '04',
                    title: 'Training Phase Alignment',
                    body: 'Nutrition requirements shift between hypertrophy phases (caloric surplus, high protein), cutting phases (caloric deficit, even higher protein to preserve muscle), and maintenance. AI systems that dynamically adjust to phase transitions prevent the stagnation that kills most manual diet attempts.',
                  },
                ].map((item) => (
                  <li key={item.n} className="flex gap-4 rounded-xl p-5"
                    style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)' }}>
                    <span className="font-mono font-bold text-2xl flex-shrink-0 leading-none mt-0.5" style={{ color: '#818cf8' }}>
                      {item.n}
                    </span>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-white/65 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── SECTION 7: Nutrient Timing ────────────────────────────── */}
            <section id="nutrient-timing-and-performance" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                Nutrient Timing & Performance
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                When you eat is nearly as important as what you eat for athletic performance and body composition. The "anabolic window" — long believed to be a strict 30-minute post-workout protein deadline — is more flexible than originally theorized, spanning 2–3 hours. But <strong className="text-white">pre-workout carbohydrate loading and strategic post-workout nutrition</strong> remain evidence-backed performance levers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    phase: 'Pre-Workout',
                    timing: '2–3 hrs before',
                    icon: '⚡',
                    color: 'rgba(245,158,11,0.1)',
                    border: 'rgba(245,158,11,0.25)',
                    accent: '#fbbf24',
                    recs: ['1–4g/kg carbohydrates', 'Moderate protein (~20g)', 'Minimize dietary fat', 'Hydrate: 500ml water'],
                  },
                  {
                    phase: 'Intra-Workout',
                    timing: 'During training',
                    icon: '🔥',
                    color: 'rgba(99,102,241,0.1)',
                    border: 'rgba(99,102,241,0.25)',
                    accent: '#818cf8',
                    recs: ['Fast carbs (>60 min sessions)', '6–8% carb solution', 'Electrolytes: Na, K, Mg', 'BCAAs optional'],
                  },
                  {
                    phase: 'Post-Workout',
                    timing: 'Within 2 hrs',
                    icon: '🏆',
                    color: 'rgba(52,211,153,0.1)',
                    border: 'rgba(52,211,153,0.25)',
                    accent: '#34d399',
                    recs: ['25–40g fast protein', 'Leucine-rich source', '1–1.5g/kg carbohydrates', 'Anti-inflammatory foods'],
                  },
                ].map((phase) => (
                  <div key={phase.phase} className="rounded-xl p-5"
                    style={{ background: phase.color, border: `1px solid ${phase.border}` }}>
                    <div className="text-2xl mb-2">{phase.icon}</div>
                    <h3 className="font-bold text-white mb-0.5">{phase.phase}</h3>
                    <p className="text-xs mb-3" style={{ color: phase.accent }}>{phase.timing}</p>
                    <ul className="space-y-1.5">
                      {phase.recs.map((r) => (
                        <li key={r} className="text-xs text-white/65 flex items-start gap-1.5">
                          <span style={{ color: phase.accent }} className="mt-0.5 flex-shrink-0">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SECTION 8: AI-Driven Nutrition ───────────────────────── */}
            <section id="ai-driven-nutrition" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #818cf8', paddingLeft: '1rem' }}>
                AI-Driven Nutrition Personalization
              </h2>

              <p className="text-white/75 leading-relaxed mb-4">
                Static diet plans fail because bodies are dynamic systems. Fitnivo's nutrition AI solves this by treating nutrition as a control loop: ingest biometric input → analyze patterns → adjust macro and micronutrient targets → reassess outcomes → repeat. This closed-loop approach outperforms any static meal plan by definition because it corrects its own errors.
              </p>

              <p className="text-white/75 leading-relaxed mb-6">
                The system integrates data from <Link href="/biometric-sync" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">biometric wearables</Link>, workout completion rates, sleep quality scores, and subjective energy ratings to build a model of your individual nutritional response — a model that improves with every data point. After 30 days, users report an average 67% improvement in dietary adherence because the plan actually fits their life and physiology.
              </p>

              {/* Gut microbiome image */}
              <figure className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid rgba(99,102,241,0.15)' }}>
                <Image
                  src="/images/blog/nutrition/gut_microbiome_nutrition.webp"
                  alt="Scientific visualization of gut microbiome diversity and its connection to nutrition and brain health"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="text-center text-white/40 text-xs py-3 px-4">
                  Gut microbiome diversity is one of the most powerful predictors of long-term metabolic health — shaped primarily by diet.
                </figcaption>
              </figure>

              {/* Snippet block for PAA */}
              <div className="rounded-xl p-6 mb-6" style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)' }}>
                <h3 className="text-xl font-bold text-white mb-3" id="how-does-ai-personalize-nutrition">
                  How Does AI Personalize Nutrition?
                </h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  AI nutrition systems analyze biometric inputs (HRV, sleep stages, activity data), food logs, and body composition trends to continuously recalibrate macro targets, meal timing windows, and micronutrient priorities. Unlike static plans, AI models update recommendations daily as your physiology and lifestyle context shift, creating a true feedback loop between what you eat and how your body responds.
                </p>
              </div>

              <p className="text-white/75 leading-relaxed">
                Explore how <Link href="/mindfulness-wellness" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">mindfulness and stress management</Link> further modulate nutritional outcomes through cortisol regulation — one of the most underappreciated variables in body composition science.
              </p>
            </section>

            {/* ── Key Takeaways ─────────────────────────────────────────── */}
            <section id="key-takeaways" className="mb-14 scroll-mt-24">
              <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(52,211,153,0.05) 100%)', border: '1px solid rgba(99,102,241,0.25)' }}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>🎯</span> Key Takeaways
                </h2>
                <ul className="space-y-4">
                  {[
                    'Macronutrient quality and timing matter more than raw calorie counting — focus on whole-food sources that provide density of both macros and micros.',
                    'Protein needs for active individuals are 2x the standard RDA recommendation (1.6–2.4g/kg vs 0.8g/kg) — spread evenly across 4–5 meals to maximize muscle protein synthesis.',
                    'Over 90% of adults are deficient in at least one key micronutrient; prioritize vitamin D, magnesium, and zinc through food-first strategies before supplementing.',
                    'Individual variation in dietary response (proven by PREDICT study) means no single diet plan works optimally for everyone — personalization is not a luxury, it is a biological necessity.',
                    'AI-driven nutrition systems create a feedback loop between biometric outputs and dietary inputs, outperforming any static plan by correcting its own errors continuously.',
                  ].map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.4)' }}>
                        {i + 1}
                      </span>
                      <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── CTA Section ───────────────────────────────────────────── */}
            <section className="mb-14">
              <div className="rounded-2xl p-8 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0ea5e9 100%)' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Personalize Your Nutrition?
                  </h2>
                  <p className="text-white/85 mb-6 max-w-xl mx-auto">
                    Stop guessing your macros. Fitnivo's AI reads your biometrics, adapts to your physiology, and delivers a nutrition plan that's as unique as your fingerprint.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/nutrition-intelligence"
                      className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg"
                    >
                      Explore Nutrition Intelligence →
                    </Link>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
                    >
                      Download Free App
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Author Bio ────────────────────────────────────────────── */}
            <section className="mb-14">
              <div className="rounded-2xl p-6 flex gap-5 items-start"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Image
                  src="/images/fitbuu.webp"
                  alt="Dr. Priya Sharma - Registered Dietitian and Sports Nutrition Specialist at Fitnivo"
                  width={72}
                  height={72}
                  className="rounded-full flex-shrink-0 ring-2"
                  style={{ outline: '2px solid rgba(99,102,241,0.4)' }}
                />
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-white font-bold">Dr. Priya Sharma, RD</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>
                      Verified Expert
                    </span>
                  </div>
                  <p className="text-indigo-400 text-sm mb-2">Registered Dietitian · Sports Nutrition Specialist · MSc Human Nutrition</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Dr. Sharma is Fitnivo's lead nutrition scientist with 12 years of clinical and applied sports nutrition experience. She has worked with Olympic athletes, elite CrossFit competitors, and thousands of everyday users through data-driven, evidence-based dietary interventions. Her research focuses on nutrient timing, gut microbiome modulation, and AI-assisted dietary personalization.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Related Posts ─────────────────────────────────────────── */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group rounded-xl overflow-hidden block transition-transform duration-200 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,26,0.7) 0%, transparent 60%)' }} />
                      <span className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(99,102,241,0.25)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug group-hover:text-indigo-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-xs leading-relaxed mb-2">{post.description}</p>
                      <span className="text-white/30 text-xs">{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </article>

          {/* ── Sticky Sidebar ─────────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* Quick Nav */}
              <nav className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Quick Navigation</h3>
                <ul className="space-y-1.5">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs text-white/55 hover:text-indigo-400 transition-colors block leading-snug"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar CTA */}
              <div className="rounded-2xl p-5 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(52,211,153,0.08) 100%)', border: '1px solid rgba(99,102,241,0.25)' }}>
                <div className="text-3xl mb-3">🥗</div>
                <h3 className="text-white font-bold text-sm mb-2">AI Nutrition Coach</h3>
                <p className="text-white/60 text-xs mb-4 leading-relaxed">
                  Get your personalized macro targets based on your biometrics.
                </p>
                <Link
                  href="/nutrition-intelligence"
                  className="block w-full py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed)' }}
                >
                  Explore Now →
                </Link>
              </div>

              {/* Related Landing Pages */}
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Explore Fitnivo</h3>
                <ul className="space-y-3">
                  {[
                    { label: '🤖 AI Fitness Coach', href: '/ai-fitness-coach' },
                    { label: '🥗 Nutrition Intelligence', href: '/nutrition-intelligence' },
                    { label: '🧘 Mindfulness & Wellness', href: '/mindfulness-wellness' },
                    { label: '📊 Biometric Sync', href: '/biometric-sync' },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/65 hover:text-indigo-400 transition-colors flex items-center gap-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}
