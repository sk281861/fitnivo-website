"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

// ── Schema Data ──────────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  headline: 'Building Sustainable Fitness Habits: A Behavioral Science Approach',
  description:
    'Discover how to use behavioral science, the habit loop, and environmental design to build permanent exercise and workout habits that stick for life.',
  image: 'https://fitnivo.in/images/blog/habits/sustainable-fitness-habits-hero.webp',
  url: 'https://fitnivo.in/blog/sustainable-fitness-habits',
  datePublished: '2026-06-30T00:00:00Z',
  dateModified: '2026-06-30T00:00:00Z',
  authorName: 'Marcus Vance, CSCS',
  authorUrl: 'https://fitnivo.in/blog',
  wordCount: 1650,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  {
    name: 'Building Sustainable Fitness Habits: A Behavioral Science Approach',
    url: 'https://fitnivo.in/blog/sustainable-fitness-habits',
  },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What if I miss a workout day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Missing one day does not reset the habit loop. The behavioral goal is simply to never miss two days in a row, preserving your momentum."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it so hard to stay motivated to exercise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Motivation is an emotion, which is inherently unstable and fleeting. Sustainable exercise relies on structured environmental cues and automatic routines rather than unpredictable willpower."
      }
    },
    {
      "@type": "Question",
      "name": "Does habit stacking work for fitness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, linking a short exercise routine to an already established daily habit (like brushing your teeth or making coffee) is one of the fastest ways to build new neural pathways for fitness."
      }
    }
  ]
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

// ── Table of Contents ─────────────────────────────────────────────────────────
const tableOfContents = [
  { id: 'why-willpower-fails', label: 'Why Willpower Fails in the Long Term' },
  { id: 'three-step-habit-loop', label: 'The 3-Step Habit Loop for Fitness' },
  { id: 'how-long-to-build-habit', label: 'How Long Does It Actually Take to Build a Habit?' },
  { id: 'three-behavioral-hacks', label: '3 Behavioral Hacks to Automate Your Workout' },
  { id: 'how-fitnivo-uses-science', label: 'How Fitnivo Uses Behavioral Science' },
  { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
];

// ── Related Posts ─────────────────────────────────────────────────────────────
const relatedPosts = [
  {
    title: 'Mindfulness and Athletic Performance: The Mind-Body Connection',
    description: 'Explore the neuroscience of how mindfulness training reduces stress and improves athletic output.',
    href: '/blog/mindfulness-athletic-performance',
    image: '/images/blog/mindfulness/mindfulness-athletic-performance-hero.webp',
    readTime: '9 min read',
    category: 'Mindfulness',
  },
  {
    title: 'Nutrition Science: Macros, Micros & Personalization',
    description: 'Most people track calories. Elite performers track nutrient quality, timing, and individual metabolic response.',
    href: '/blog/nutrition-science-personalization',
    image: '/images/blog/nutrition/nutrition_science_hero.webp',
    readTime: '12 min read',
    category: 'Nutrition',
  },
  {
    title: 'AI vs. Traditional Fitness Coaching: A Complete Comparison',
    description: 'Eight dimensions where AI coaching consistently outperforms human-only methods.',
    href: '/blog/ai-vs-traditional-coaching',
    image: '/images/blog/ai-coaching/ai_vs_traditional_hero.webp',
    readTime: '10 min read',
    category: 'AI Coaching',
  },
];

export default function SustainableFitnessHabitsPage() {
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
            <span className="text-white/60 truncate">Behavioral Science</span>
          </nav>

          {/* Category & read time */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
              style={{ background: 'rgba(0,242,254,0.15)', color: '#00F2FF', border: '1px solid rgba(0,242,254,0.3)' }}
            >
              Behavioral Science
            </span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">7 min read</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-white/40 text-sm">June 30, 2026</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}>
            Building Sustainable Fitness Habits:{' '}
            <span style={{ background: 'linear-gradient(90deg, #00F2FF, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              A Behavioral Science Approach
            </span>
          </h1>

          {/* AEO Quick Answer Block */}
          <div className="bg-indigo-950/20 border border-indigo-500/20 p-6 rounded-2xl mb-8">
            <p className="text-lg text-white font-bold leading-relaxed">
              Quick Answer: Building sustainable fitness habits relies on behavioral science rather than willpower. By utilizing the &quot;habit loop&quot;—creating a specific cue, executing a scalable routine, and providing an immediate reward—individuals can rewire their neural pathways. Research shows that repeating this loop consistently for an average of 66 days transforms exercise from a conscious struggle into an automatic daily behavior.
            </p>
          </div>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
            Every January, millions of people flood gyms with motivation, only for the crowds to vanish by February. This is because relying on temporary spikes of willpower is a biological design flaw that is guaranteed to fail in the long term.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/images/fitbuu.webp"
              alt="Marcus Vance, CSCS — Behavioral Fitness Specialist and Chief Analytics Officer at Fitnivo"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-indigo-500/40"
            />
            <div>
              <p className="text-white font-semibold text-sm">Marcus Vance, CSCS</p>
              <p className="text-white/50 text-xs">Behavioral Fitness Specialist · MSc Applied Psychology</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(99,102,241,0.2)' }}>
            <Image
              src="/images/blog/habits/sustainable-fitness-habits-hero.webp"
              alt="Neatly laid out workout gear showing prep habits like placing shoes and sports gear next to each other"
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

            {/* Introduction paragraphs */}
            <div className="text-white/80 space-y-6 leading-relaxed mb-12">
              <p>
                Willpower is finite. We wake up with a full reservoir, but throughout the day, decision fatigue, stress, and physical fatigue slowly drain it. By the time the evening rolls around, asking your brain to overcome workout resistance using sheer motivation is a losing battle.
              </p>
              <p>
                Behavioral science fitness approaches the problem from a completely different angle. Instead of forcing behavior through sheer mental pressure, we design environments and build neurological habits that require minimal conscious effort. When a habit becomes automatic, it bypasses the parts of your brain responsible for decision fatigue entirely.
              </p>
              <p>
                In this deep dive, we will outline the neuroscience of habit formation, explain the exact mechanisms behind Duhigg&apos;s habit loop, and give you actionable tools to make exercise as natural and automatic as brushing your teeth.
              </p>
            </div>

            {/* ── SECTION 1: Why Willpower Fails ─────────────────────────────── */}
            <section id="why-willpower-fails" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                The Behavioral Science of Exercise: Why Willpower Fails
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  To understand why willpower fails, we must look at the structural division of the brain. Conscious decisions, planning, and self-control are managed by the prefrontal cortex. This is the executive center of the brain. It is highly advanced but consumes massive amounts of energy and tires easily.
                </p>
                <p>
                  In contrast, automatic habits are stored in the basal ganglia. This is a much older, primitive part of the brain designed to conserve energy. When the brain detects a repeating behavioral loop, it shifts the activity from the prefrontal cortex to the basal ganglia, turning it into a chunked, automatic script.
                </p>
                <p>
                  Research shows that the brain operates on autopilot for roughly 45% of our daily actions to save energy. When you are forced to consciously decide whether or not to work out, you are burning prefrontal cortex energy. The goal of behavioral fitness is to move the workout out of the prefrontal cortex and into the basal ganglia, making it a permanent neural pathway.
                </p>
                <p>
                  This transition requires neuroplasticity—the brain&apos;s physical ability to restructure its neural pathways through repetition. By consistently reinforcing a specific habit loop, you physically build neural pathways that make workout resistance vanish.
                </p>
              </div>
            </section>

            {/* ── SECTION 2: The 3-Step Habit Loop ──────────────────────────── */}
            <section id="three-step-habit-loop" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                The 3-Step Habit Loop for Fitness
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  The primary framework of behavioral habit change is the Habit Loop, popularized by Charles Duhigg. It consists of three distinct phases: the Cue, the Routine, and the Reward. If any of these three stages are weak or missing, the habit loop collapses and the behavior fails to become automatic.
                </p>

                {/* Inline Section Image */}
                <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/blog/habits/habit-loop-model.webp"
                    alt="Visualization of the fitness habit loop model showing Cue, Routine, and Reward pathways"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">1. The Cue (Trigger)</h3>
                  <p>
                    A cue is the anchor that launches the automatic routine. Vague intentions like &quot;I will work out today&quot; fail because they lack a defined sensory trigger. A strong cue is always specific, immediate, and tied directly to your existing schedule or location.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>Time-based cues:</strong> &quot;Every day at exactly 6:00 PM, I will walk out the front door.&quot;</li>
                    <li><strong>Preceding action cues:</strong> &quot;When I close my laptop at the end of the workday, I immediately change into my athletic shirt.&quot;</li>
                    <li><strong>Location-based cues:</strong> &quot;The second I pass the local community gym on my commute home, I pull into the parking lot.&quot;</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white">2. The Routine (Action)</h3>
                  <p>
                    The routine is the behavior you want to automate. The most common mistake beginners make is designing routines that are physically exhausting or take too long to complete. When starting, focus entirely on consistency rather than intensity.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>Scale it down:</strong> A 10-minute bodyweight circuit at home preserves the habit loop just as well as a 90-minute heavy weightlifting session.</li>
                    <li><strong>Focus on show-up rate:</strong> In the first month, your primary goal is to build the automatic trigger-action association.</li>
                    <li><strong>Avoid burnout:</strong> Do not push to absolute failure or physical exhaustion in the first few weeks, as this associates the routine with pain.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white">3. The Reward (Reinforcement)</h3>
                  <p>
                    The reward is the positive reinforcement that tells your brain the loop is worth remembering. Long-term rewards like fat loss, cardiovascular health, or muscle hypertrophy take weeks or months to manifest. The primitive basal ganglia cannot wait that long; it requires an immediate reward to cement the loop.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>Intrinsic Motivation:</strong> Celebrate the immediate post-workout endorphin rush or the feeling of stress melting away.</li>
                    <li><strong>Extrinsic Rewards:</strong> Enjoy a specific protein smoothie, watch a favorite show only while on the treadmill, or check off your visual habit streak.</li>
                    <li><strong>Loss-Aversion:</strong> Track your consistency scores. The pain of breaking a streak can act as a powerful behavioral driver.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION 3: How Long to Build a Habit ──────────────────────── */}
            <section id="how-long-to-build-habit" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                How Long Does It Actually Take to Build an Exercise Habit?
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  We have all heard the popular myth that it takes exactly 21 days to form a new habit. This widely cited statistic actually originated from a misinterpretation of a plastic surgeon&apos;s observations about patients adjusting to amputations.
                </p>
                <p>
                  The actual scientific data paints a different picture. In a landmark study led by Dr. Phillippa Lally at University College London, researchers tracked habit formation over several months.
                </p>
                <p>
                  The study proved that it takes an average of **66 days** for a new behavior to reach peak automaticity. For complex behaviors like exercise, the timeline can range from 18 days to as long as 254 days depending on environmental triggers and complexity. Setting a realistic 2-to-3 month expectation prevents you from quitting early when the behavior still feels like a conscious effort.
                </p>
              </div>
            </section>

            {/* ── SECTION 4: 3 Behavioral Hacks ────────────────────────────── */}
            <section id="three-behavioral-hacks" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                3 Behavioral Hacks to Automate Your Workout
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  Beyond the basic habit loop, there are advanced behavioral hacks derived from clinical psychology that you can use to optimize your routine immediately.
                </p>

                {/* Inline Section Image */}
                <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/blog/habits/workout-automation-hacks.webp"
                    alt="Prepped gym gear, running shoes, and fitness dashboard illustrating environmental friction reduction"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white">1. Habit Stacking</h3>
                  <p>
                    Habit stacking, popularized by James Clear, is the process of linking a new habit to an existing daily anchor. Rather than trying to build a habit out of thin air, you overlay it on top of a behavior you already perform automatically.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>The formula:</strong> &quot;After [Current Habit], I will [New Habit].&quot;</li>
                    <li><strong>Example 1:</strong> &quot;After I brush my teeth in the morning, I will immediately perform 15 squats.&quot;</li>
                    <li><strong>Example 2:</strong> &quot;After I pour my morning coffee, I will open my Fitnivo app and view today&apos;s workout targets.&quot;</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white">2. Environmental Friction Reduction</h3>
                  <p>
                    Your physical environment is the ultimate architect of your behavior. Friction reduction is the practice of making good habits incredibly easy to start, while making bad habits difficult.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>Prep the night before:</strong> Pack your gym bag, lay out your lifting straps, and place your running shoes directly beside the bed.</li>
                    <li><strong>Eliminate choices:</strong> Choose your workout clothes and write your exercise schedule on Sunday to eliminate decision fatigue during the week.</li>
                    <li><strong>Create resistance for distractions:</strong> Put the television remote in another room or log out of social media apps before your workout window.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white">3. The Two-Minute Rule</h3>
                  <p>
                    The Two-Minute Rule states that any new habit should take less than two minutes to start. If you are feeling massive resistance to a workout, give yourself permission to exercise for just two minutes.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm text-white/70">
                    <li><strong>Show up:</strong> Put on your gym clothes, drive to the gym, and stretch for two minutes.</li>
                    <li><strong>Momentum build:</strong> In 90% of cases, once you overcome the initial starting friction, momentum takes over and you complete the session.</li>
                    <li><strong>Preserve the loop:</strong> Even if you leave after two minutes, you successfully triggered the cue and routine, keeping the neural loop alive.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: How Fitnivo Uses Behavioral Science ────────────── */}
            <section id="how-fitnivo-uses-science" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                How Fitnivo Uses Behavioral Science
              </h2>
              <div className="text-white/80 space-y-6 leading-relaxed">
                <p>
                  The Fitnivo app is structurally built on these exact behavioral principles. It acts as an external nervous system, offloading the cognitive planning that often halts progress.
                </p>
                <p>
                  First, Fitnivo delivers clear, time-based cues through automated notifications. Second, it reduces environmental friction by using a personal AI trainer to generate your exact workout based on the equipment you have available, eliminating gym decision fatigue.
                </p>
                <p>
                  Finally, it provides immediate reward loops through progress streaks, set-velocity checks, and macro-sync notifications, closing the neural loop and helping you reach the 66-day automaticity threshold.
                </p>
              </div>
            </section>

            {/* ── SECTION 6: Frequently Asked Questions ───────────────────── */}
            <section id="frequently-asked-questions" className="mb-14 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6" style={{ borderLeft: '3px solid #00F2FF', paddingLeft: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">What if I miss a workout day?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Missing one day does not reset the habit loop. The behavioral goal is simply to never miss two days in a row. Focus on getting right back on track during the next scheduled window.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-bold text-white mb-2">Why is it so hard to stay motivated to exercise?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Motivation is an emotion, which is inherently unstable. Sustainable exercise relies on environmental cues and structured routines rather than fleeting spikes of motivation.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-bold text-white mb-2">Does habit stacking work for fitness?</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Yes, linking a short exercise routine to an already established daily habit is one of the fastest ways to build neural pathways for fitness. It leverages existing automated behaviors to build new ones.
                  </p>
                </div>
              </div>
            </section>

          </article>

          {/* ── Sidebar ────────────────────────────────────────────────────── */}
          <aside className="sticky top-28 space-y-10 lg:block">
            {/* Newsletter Sign Up */}
            <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <h3 className="text-white font-bold text-base mb-3 font-mono uppercase tracking-wider">
                ⚡ Fitnivo Journal
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4">
                Get the latest science-backed workout, biomechanics, and nutrition insights delivered weekly.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold text-xs rounded-xl font-mono uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-white font-bold text-sm mb-5 font-mono uppercase tracking-wider">
                📚 Related Articles
              </h3>
              <div className="space-y-5">
                {relatedPosts.map((post) => (
                  <Link href={post.href} key={post.title} className="group block" style={{ textDecoration: 'none' }}>
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="280px"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest" style={{ color: '#818cf8' }}>
                      {post.category} · {post.readTime}
                    </span>
                    <h4 className="text-white group-hover:text-indigo-400 transition-colors text-sm font-semibold mt-1 leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}
