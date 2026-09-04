import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Nutrition Coach for Weight Loss — Does It Work? (2026) | Fitnivo',
  description:
    'Can an AI nutrition coach help you lose weight? How AI calorie tracking, adaptive macro targets, and meal planning work together for sustainable fat loss.',
  keywords: [
    'ai nutrition coach for weight loss',
    'ai diet coach for weight loss',
    'ai calorie tracker weight loss',
    'ai meal planner for weight loss',
    'best ai nutrition app for weight loss',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-nutrition-coach-for-weight-loss' },
  openGraph: {
    title: 'AI Nutrition Coach for Weight Loss — Does It Work? (2026)',
    description:
      'Can an AI nutrition coach help you lose weight? How AI calorie tracking, adaptive macro targets, and meal planning work together for sustainable fat loss.',
    url: 'https://fitnivo.in/blog/ai-nutrition-coach-for-weight-loss',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/nutrition/nutrition_meal_planning.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'AI Nutrition Coach for Weight Loss: Does It Actually Work?',
  description:
    'Can an AI nutrition coach help you lose weight? How AI calorie tracking, adaptive macro targets, and meal planning work together for sustainable fat loss.',
  image: 'https://fitnivo.in/images/blog/nutrition/nutrition_meal_planning.webp',
  url: 'https://fitnivo.in/blog/ai-nutrition-coach-for-weight-loss',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2300,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Nutrition Coach for Weight Loss', url: 'https://fitnivo.in/blog/ai-nutrition-coach-for-weight-loss' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can an AI nutrition coach help me lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An AI nutrition coach supports weight loss by setting a calorie deficit target, helping you track what you eat, and adjusting recommendations as your weight and activity change. The consistency of tracking — which the AI makes easier — is what drives results. It cannot replace medical nutrition therapy for clinical conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is AI calorie tracking for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI calorie tracking is accurate enough to be useful — within 10–20% for most foods when using a food database, and within a similar range for AI food scanning of photos. The bigger factor is consistency: tracking imperfectly every day beats tracking perfectly twice a week. Do not optimize for precision at the cost of adherence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should my macros be for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common evidence-based starting point for fat loss is 0.7–1g of protein per pound of bodyweight, with remaining calories split between carbohydrates and fat based on preference. An AI nutrition coach sets these targets from your weight, goal, and activity level, and adjusts them as you progress. This is general guidance — consult a professional for clinical conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Fitnivo good for weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fitnivo sets a calorie deficit target based on your goal, tracks calories and macros, includes an AI food scanner for quick logging, and provides an AI nutrition coach that can build meal plans around your budget. It also includes workout tracking, which supports fat loss through the training side.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI nutrition app for fat loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fitnivo, MacroFactor, and Cronometer are strong choices for fat loss nutrition tracking. Fitnivo adds AI coaching and food scanning. MacroFactor uses adaptive calorie targets based on your weigh-ins. Cronometer focuses on micronutrient detail. Which is best depends on whether you want coaching, accuracy, or depth of nutritional data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to count calories to lose weight with an AI app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tracking calories is the most reliable way to create the awareness needed for a sustained deficit. You do not need to hit exact numbers, but having a target and logging what you eat gives the AI something to work with and gives you data to learn from. Precise counting is less important than consistent logging.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is an AI nutrition coach different from MyFitnessPal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MyFitnessPal is primarily a food logging database. An AI nutrition coach actively engages with your data — it sets your targets, notices patterns (like consistently going over on weekends), suggests meal options within your calorie budget, and answers questions. The database records; the AI coaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI nutrition coaching safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For general fat loss in healthy adults, AI nutrition coaching is safe and evidence-informed. It is not appropriate as a substitute for medical nutrition therapy for clinical conditions such as diabetes, eating disorders, kidney disease, or pregnancy. Always consult a qualified professional if you have a medical condition affecting your diet.',
      },
    },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">AI Nutrition Coach for Weight Loss</span>
        </nav>

        {/* Meta strip */}
        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Guide</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          AI Nutrition Coach for Weight Loss: Does It Actually Work?
        </h1>

        {/* Hero image */}
        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/nutrition/nutrition_meal_planning.webp"
            alt="AI nutrition coach for weight loss — meal planning and calorie tracking"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* TL;DR box */}
        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>TL;DR:</strong> An AI nutrition coach helps with weight loss by setting a calorie deficit target, tracking what you eat, and adjusting recommendations as your weight and activity change. It removes the two biggest barriers to tracking: knowing what to eat and logging it consistently. It cannot replace medical nutrition therapy for clinical conditions, but for general fat loss it covers the key behaviors.
          </p>
        </div>

        {/* Answer-first paragraph */}
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
          An AI nutrition coach for weight loss works by giving you a calorie and protein target, helping you log what you eat, and updating your plan as your weight changes over time. It removes the guesswork from the two decisions that determine most fat loss outcomes: how much to eat and what to eat within that budget. Whether it works depends almost entirely on how consistently you use it.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-8 italic">
          General information only, not medical advice. If you have a medical condition that affects your diet (diabetes, kidney disease, eating disorders, pregnancy), consult a qualified healthcare professional before making dietary changes.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-10">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>.
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How Weight Loss Actually Works</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Weight loss requires a calorie deficit — consuming fewer calories than your body uses over time. There is no evidence-backed workaround to this principle. The specific macronutrient split matters less than total calories for fat loss, though adequate protein (roughly 0.7–1g per pound of bodyweight) is consistently associated with better muscle retention during a deficit.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The three variables that determine outcomes are: how large the deficit is, how much protein you eat, and how consistently you maintain this over weeks and months. Most people fail on consistency, not knowledge. They know what to do but do not track or plan reliably enough to maintain the deficit.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          This is the problem AI nutrition coaching is designed to solve — not with magic, but by reducing the friction in tracking and planning so that consistency becomes easier.
        </p>

        {/* Section 2 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What an AI Nutrition Coach Does for Weight Loss Specifically</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A good AI nutrition coach does the following for weight loss:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">Sets a calorie deficit target</strong> from your current weight, goal weight, activity level, and timeline. Not a generic 1,200-calorie recommendation — a number calculated for you.</li>
          <li><strong className="text-white">Tracks your daily intake</strong> against the target, showing how much room you have left for each meal and how your macros are balanced.</li>
          <li><strong className="text-white">Adjusts targets over time</strong> as your weight changes. A 2,000-calorie deficit that worked at 200 pounds requires recalculation at 185. AI does this automatically.</li>
          <li><strong className="text-white">Flags when you are consistently off-track</strong> — if you are eating 400 calories over target every weekend, the AI can identify the pattern.</li>
          <li><strong className="text-white">Suggests meals and foods</strong> that fit within your remaining calorie budget, removing the decision of what to eat next.</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          What it does not do: diagnose conditions, prescribe therapeutic diets, or account for medications that affect metabolism. For these, a registered dietitian is the appropriate resource.
        </p>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI Nutrition Coaching vs a Calorie Counting App</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A calorie counting app (a food logging database like MyFitnessPal) records what you eat. It calculates totals. It does not actively coach you — it waits for you to log, shows you numbers, and stops there.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          An AI nutrition coach engages with your data. It sets your targets intelligently, responds to your patterns, suggests meals when you are stuck, and answers questions about your diet. The difference is the same as reading a calorie table vs talking to someone who knows your data and gives you specific advice.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Most people who fail with calorie counting apps fail not because the math is wrong, but because they run out of ideas about what to eat within their budget or lose motivation when the app does not respond to their situation. AI coaching closes that gap.
        </p>

        {/* Section 4 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI Nutrition Coaching vs a Human Dietitian</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4 text-white">Factor</th>
                <th className="p-4 text-white">AI Nutrition Coach</th>
                <th className="p-4 text-white">Human Dietitian</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">Availability</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">24/7</td>
                <td className="p-4 border-t border-[#1f1f1f]">Scheduled appointments</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 border-t border-[#1f1f1f]">Cost</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Low (often free or $10/mo)</td>
                <td className="p-4 border-t border-[#1f1f1f]">Higher (typically $100–250/session)</td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">Clinical expertise</td>
                <td className="p-4 border-t border-[#1f1f1f]">None</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Full medical context</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 border-t border-[#1f1f1f]">Daily tracking support</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Continuous</td>
                <td className="p-4 border-t border-[#1f1f1f]">Check-ins only</td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">General fat loss guidance</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Strong</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Strong</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 border-t border-[#1f1f1f]">Clinical conditions</td>
                <td className="p-4 border-t border-[#1f1f1f]">Not appropriate</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          For most healthy adults pursuing general fat loss, an AI nutrition coach provides the daily support that makes a dietitian&#39;s guidance actionable. They complement each other — the dietitian sets clinical direction, the AI helps you execute it daily.
        </p>

        {/* Section 5 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How Food Scanning Speeds Up Weight Loss Tracking</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The most common reason people stop tracking is friction. Finding a food in a database, choosing the right serving size, and logging it for every item in a meal takes 5–10 minutes per meal if the foods are not already saved. Most people give up before they develop the habit.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          AI food scanning solves this. You photograph your plate and the app identifies the foods, estimates portions, and calculates calories and macros automatically. A meal that would take 8 minutes to log manually takes 30 seconds with a scan.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Lower friction leads to more consistent logging. More consistent logging means your calorie data is accurate enough to actually manage your deficit. This is why food scanning is one of the most practically impactful features in weight loss nutrition apps. Fitnivo&#39;s <Link href="/ai-food-scanner" className="text-cyan-400 hover:underline">AI food scanner</Link> is available free at 3 scans per day, with unlimited scans on Pro. See also: <Link href="/blog/how-ai-food-scanners-work" className="text-cyan-400 hover:underline">how AI food scanners work</Link>.
        </p>

        {/* Section 6 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What a Good AI Nutrition Weight Loss Plan Looks Like</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A well-structured AI weight loss nutrition plan shares these characteristics:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">Protein target set first</strong> — usually 0.7–1g per pound of bodyweight. This is the lever that protects muscle during fat loss. Everything else fills around it.</li>
          <li><strong className="text-white">A moderate calorie deficit</strong> — not a crash. A 500-calorie daily deficit produces roughly 1 pound of fat loss per week and is sustainable without extreme hunger. Larger deficits reduce adherence rapidly.</li>
          <li><strong className="text-white">Meal suggestions that fit the budget</strong> — not generic healthy eating advice, but specific food and meal ideas within your remaining calories for the day.</li>
          <li><strong className="text-white">Flexibility built in</strong> — a plan that leaves you eating nothing but chicken and broccoli will fail by week two. The AI should accommodate your food preferences and culture.</li>
          <li><strong className="text-white">Regular recalculation</strong> — as you lose weight, your maintenance calories drop. The AI should update your target, not leave you following a stale deficit from six weeks ago.</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Realistic Expectations from AI Nutrition Coaching</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          AI nutrition coaching is a tool that makes consistent tracking easier and gives you a data-driven framework for your deficit. It is not a transformation product that works while you ignore it.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          What you should expect at 4 weeks with consistent use: awareness of where your calories are going, a rough understanding of your eating patterns, and probably 1–4 pounds of weight lost depending on how closely you followed the plan.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          What you should expect at 12 weeks: visible changes, better-established eating habits, and data to understand what works for your body. Fat loss is measured in months, not weeks.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          The biggest predictor of whether AI nutrition coaching produces results is whether you log consistently. Apps that reduce logging friction (food scanning, meal templates, quick-add recent foods) produce better outcomes because they make the key habit easier to maintain.
        </p>

        {/* Section 8 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How Fitnivo Approaches Weight Loss Nutrition</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Fitnivo&#39;s <Link href="/ai-nutrition-coach" className="text-cyan-400 hover:underline">AI nutrition coach</Link> sets your calorie and macro targets from your goal, weight, height, age, and activity level. It tracks what you log, shows your daily totals against targets, and the AI coach responds to your actual data — not generic scripts.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The AI food scanner reduces the friction of logging by letting you photograph meals rather than searching databases. The <Link href="/ai-meal-planner" className="text-cyan-400 hover:underline">AI meal planner</Link> suggests meals within your remaining daily calorie budget, adapting to your cuisine preferences — Indian, Mediterranean, Mexican, or others.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Workout tracking is built into the same app, so your exercise data informs your nutrition targets — a benefit when estimating total daily energy expenditure. Free tier includes calorie and macro tracking, 3 AI food scans per day, and 15 AI coach messages per day. Pro unlocks unlimited for $10/month or $60/year.
        </p>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              q: 'Can an AI nutrition coach help me lose weight?',
              a: 'Yes. An AI nutrition coach supports weight loss by setting a calorie deficit target, helping you track what you eat, and adjusting recommendations as your weight and activity change. The consistency of tracking — which the AI makes easier — is what drives results. It cannot replace medical nutrition therapy for clinical conditions.',
            },
            {
              q: 'How accurate is AI calorie tracking for weight loss?',
              a: 'AI calorie tracking is accurate enough to be useful — within 10–20% for most foods when using a food database, and within a similar range for AI food scanning of photos. The bigger factor is consistency: tracking imperfectly every day beats tracking perfectly twice a week. Do not optimize for precision at the cost of adherence.',
            },
            {
              q: 'What should my macros be for weight loss?',
              a: 'A common evidence-based starting point for fat loss is 0.7–1g of protein per pound of bodyweight, with remaining calories split between carbohydrates and fat based on preference. An AI nutrition coach sets these targets from your weight, goal, and activity level, and adjusts them as you progress. This is general guidance — consult a professional for clinical conditions.',
            },
            {
              q: 'Is Fitnivo good for weight loss?',
              a: 'Yes. Fitnivo sets a calorie deficit target based on your goal, tracks calories and macros, includes an AI food scanner for quick logging, and provides an AI nutrition coach that can build meal plans around your budget. It also includes workout tracking, which supports fat loss through the training side.',
            },
            {
              q: 'What is the best AI nutrition app for fat loss?',
              a: 'Fitnivo, MacroFactor, and Cronometer are strong choices for fat loss nutrition tracking. Fitnivo adds AI coaching and food scanning. MacroFactor uses adaptive calorie targets based on your weigh-ins. Cronometer focuses on micronutrient detail. Which is best depends on whether you want coaching, accuracy, or depth of nutritional data.',
            },
            {
              q: 'Do I need to count calories to lose weight with an AI app?',
              a: 'Tracking calories is the most reliable way to create the awareness needed for a sustained deficit. You do not need to hit exact numbers, but having a target and logging what you eat gives the AI something to work with and gives you data to learn from. Precise counting is less important than consistent logging.',
            },
            {
              q: 'How is an AI nutrition coach different from MyFitnessPal?',
              a: 'MyFitnessPal is primarily a food logging database. An AI nutrition coach actively engages with your data — it sets your targets, notices patterns (like consistently going over on weekends), suggests meal options within your calorie budget, and answers questions. The database records; the AI coaches.',
            },
            {
              q: 'Is AI nutrition coaching safe?',
              a: 'For general fat loss in healthy adults, AI nutrition coaching is safe and evidence-informed. It is not appropriate as a substitute for medical nutrition therapy for clinical conditions such as diabetes, eating disorders, kidney disease, or pregnancy. Always consult a qualified professional if you have a medical condition affecting your diet.',
            },
          ].map((item, i) => (
            <div key={i} className={i > 0 ? 'border-t border-[#1f1f1f] pt-6' : ''}>
              <h4 className="text-lg font-bold text-white mb-2">{item.q}</h4>
              <p className="text-[#B4B4B4]">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Track nutrition and training in one app</h3>
          <p className="text-[#B4B4B4] mb-4">
            Fitnivo sets your calorie and macro targets, tracks what you eat with AI food scanning, and coaches you through a deficit that adapts as your weight changes. Free tier: calorie tracking, 3 AI food scans/day, 15 AI coach messages/day. Pro: $10/month or $60/year.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
            className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300"
          >
            Download Fitnivo Free
          </a>
        </div>

        {/* Related links */}
        <h3 className="text-xl font-bold mb-4">Related reading</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/ai-nutrition-coach" className="hover:underline">Fitnivo AI Nutrition Coach</Link></li>
          <li><Link href="/ai-food-scanner" className="hover:underline">Fitnivo AI Food Scanner</Link></li>
          <li><Link href="/ai-meal-planner" className="hover:underline">Fitnivo AI Meal Planner</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="hover:underline">Best AI nutrition coach apps in 2026</Link></li>
          <li><Link href="/blog/how-ai-food-scanners-work" className="hover:underline">How AI food scanners work</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
