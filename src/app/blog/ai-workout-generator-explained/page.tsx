import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Workout Generator Explained: How It Works and What to Expect | Fitnivo',
  description:
    'What is an AI workout generator, how does it build your program, and when is it better than a static plan? A clear guide to AI workout generation in 2026.',
  keywords: [
    'ai workout generator',
    'ai workout generator explained',
    'how does ai workout generator work',
    'ai workout plan generator',
    'ai exercise generator',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/ai-workout-generator-explained' },
  openGraph: {
    title: 'AI Workout Generator Explained: How It Works and What to Expect',
    description:
      'What is an AI workout generator, how does it build your program, and when is it better than a static plan? A clear guide to AI workout generation in 2026.',
    url: 'https://fitnivo.in/blog/ai-workout-generator-explained',
    type: 'article',
    images: [
      {
        url: 'https://fitnivo.in/images/blog/ai-coaching/ai_coach_holographic.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'AI Workout Generator Explained: What It Is and How It Works',
  description:
    'What is an AI workout generator, how does it build your program, and when is it better than a static plan? A clear guide to AI workout generation in 2026.',
  image: 'https://fitnivo.in/images/blog/ai-coaching/ai_coach_holographic.webp',
  url: 'https://fitnivo.in/blog/ai-workout-generator-explained',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 2100,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'AI Workout Generator Explained', url: 'https://fitnivo.in/blog/ai-workout-generator-explained' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI workout generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI workout generator takes your inputs — goal, experience level, available equipment, and training days per week — and produces a structured workout program. A basic generator does this once. A good AI workout app then tracks your sessions and updates the program as you progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are AI workout generators free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some AI workout generators are free or have free tiers. Fitnivo offers a free tier with unlimited workout logging and 15 AI coach messages per day, including workout generation. Most apps with deeper AI adaptation — tracking your history and personalizing over time — require a paid subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are AI workout generators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI workout generators produce reasonable programs when you give accurate inputs. The quality depends on how honestly you report your experience level, available equipment, and goals. The program is only as accurate as the information you provide — overestimating your experience will produce a program that is too hard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an AI workout generator the same as an AI personal trainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A generator makes a plan. An AI personal trainer tracks your ongoing performance, adapts your program based on what you actually did, and provides coaching feedback. The difference is the feedback loop — a generator is a one-time output, a trainer is an ongoing system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI workout generators adapt to my progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the app. A basic workout generator produces a fixed plan. A full AI workout app tracks what you log each session and adjusts future sessions based on your performance — increasing weight when you hit your targets, reducing volume when you flag fatigue. The adaptation is what makes it genuinely AI rather than just algorithmic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI workout generator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a workout generator that also adapts over time, Fitnivo, Fitbod, and FitnessAI are strong options. Fitnivo adds nutrition coaching in the same app. Fitbod excels at gym-based strength programming. FitnessAI is the leanest option for straightforward progressive overload. The best choice depends on whether you also want nutrition tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI workout generators work for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, provided you are honest about your experience level during setup. AI workout generators are particularly useful for beginners because they eliminate the decision of what to do — the program is built for you. The key is accurate onboarding and consistent logging so the AI can adapt correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information does an AI workout generator need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical AI workout generator asks for: your primary goal (muscle gain, fat loss, endurance, general fitness), your experience level (beginner, intermediate, advanced), available equipment (bodyweight, dumbbells, full gym), how many days per week you can train, and any injuries or limitations. More advanced apps also use your workout history to personalize the plan.',
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
          <span className="text-white/60">AI Workout Generator Explained</span>
        </nav>

        {/* Meta strip */}
        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Explainer</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          AI Workout Generator Explained: What It Is and How It Works
        </h1>

        {/* Hero image */}
        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/ai-coaching/ai_coach_holographic.webp"
            alt="AI workout generator explained — how AI builds your workout program"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* TL;DR box */}
        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            <strong>TL;DR:</strong> An AI workout generator takes inputs — your goal, experience, available equipment, and how many days you can train — and produces a structured workout program. A basic generator does this once. A good AI workout app then tracks your performance and updates the program as you progress. The difference between a workout generator and an AI coach is that feedback loop.
          </p>
        </div>

        {/* Answer-first paragraph */}
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-6">
          An AI workout generator is software that takes structured inputs about you — your goal, experience level, equipment, and available training days — and outputs a personalized workout program. A basic generator produces a one-time plan. A more advanced AI workout app tracks every session you log and continuously updates the program based on your actual performance. The term covers both, and the difference matters significantly for results.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-8 italic">
          General information only, not medical advice. Consult a qualified professional before starting any new exercise program if you have a medical condition or injury.
        </p>

        <p className="text-sm text-[#B4B4B4] mb-10">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>.
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Is an AI Workout Generator?</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          An AI workout generator is a system that takes user inputs and produces a structured workout plan. At minimum, it selects exercises, determines sets and reps, and arranges them into a weekly schedule based on your goal and training days.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The &quot;AI&quot; label is applied to everything from simple rule-based systems (if goal = muscle gain and equipment = gym, then select these exercises) to machine-learning models trained on millions of workout sessions that produce recommendations based on patterns in that data. The distinction matters because ML-based systems can personalize more precisely and adapt more intelligently than rigid rule systems.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          What a workout generator is not: a replacement for a coach who can watch your form, a diagnostic tool, or a medical device. It produces a training plan — useful, often very good, but bounded by what inputs you provide and what the model has learned from.
        </p>

        {/* Section 2 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Inputs AI Workout Generators Use</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A well-designed AI workout generator collects:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">Primary goal</strong> — muscle gain, fat loss, strength, endurance, general fitness. This determines exercise selection philosophy, rep ranges, and training density.</li>
          <li><strong className="text-white">Experience level</strong> — beginner, intermediate, advanced. This affects volume (total weekly sets), intensity (how close to failure), and exercise complexity.</li>
          <li><strong className="text-white">Available equipment</strong> — bodyweight only, resistance bands, dumbbells, full gym. This determines what exercises are possible.</li>
          <li><strong className="text-white">Training days per week</strong> — 3, 4, 5, or 6 days determines the weekly split (full body, upper/lower, push/pull/legs, etc.).</li>
          <li><strong className="text-white">Workout duration</strong> — 30, 45, or 60 minutes determines how many exercises and sets fit per session.</li>
          <li><strong className="text-white">Workout history</strong> (in adaptive apps) — what you actually logged last session, how close you were to your targets, and how many sessions you have completed.</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          The quality of the output is directly tied to the accuracy of the inputs. An experienced lifter who enters &quot;beginner&quot; will get a program that is too easy. A beginner who enters &quot;advanced&quot; will get one that is too hard. Be accurate.
        </p>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How the Workout Is Built</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Once the generator has your inputs, it produces a program through a combination of rules and learned patterns:
        </p>
        <div className="space-y-5 mb-10">
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-lg font-bold text-white mb-1">Exercise selection</h3>
            <p className="text-[#B4B4B4]">The AI selects exercises that match your equipment, target the muscle groups appropriate to your goal, and are suitable for your experience level. A beginner program for muscle gain will include compound movements (squat, bench, row) before adding isolation work.</p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-lg font-bold text-white mb-1">Sets and reps</h3>
            <p className="text-[#B4B4B4]">Set and rep ranges follow established principles: 3–5 sets of 1–5 reps for strength, 3–4 sets of 6–12 reps for hypertrophy, 2–3 sets of 12–20 reps for endurance. The generator applies these ranges based on your goal.</p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-lg font-bold text-white mb-1">Weekly split</h3>
            <p className="text-[#B4B4B4]">Your training days determine the split. Three days typically yields full-body workouts. Four days enables upper/lower splits. Five or six days opens push/pull/legs or more specialized structures. The AI selects the split that balances stimulus and recovery for your schedule.</p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-lg font-bold text-white mb-1">Rest periods</h3>
            <p className="text-[#B4B4B4]">Rest periods are assigned based on exercise type and goal. Heavy compound movements get longer rests (2–3 minutes); isolation exercises get shorter (60–90 seconds). Endurance circuits get shorter still.</p>
          </div>
          <div className="border-l-2 border-[#1f1f1f] pl-4">
            <h3 className="text-lg font-bold text-white mb-1">Progressive overload schedule</h3>
            <p className="text-[#B4B4B4]">The generator sets starting weights based on your inputs and defines when and how to progress — typically increasing weight when you complete all sets at the top of the rep range.</p>
          </div>
        </div>

        {/* Section 4 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI Generator vs Static Workout Plan</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A static workout plan (a PDF program, a book, a fixed 12-week routine) does not change based on you. Everyone following that plan does the same thing on week 4 regardless of whether they are ahead or behind schedule, injured, or training more frequently than specified.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          An AI workout generator personalizes the plan to your inputs from the start. An AI workout app that adapts continues personalizing based on what you log — it knows you hit your squat target two sessions in a row and increases the weight, or knows you missed a session and adjusts the next week accordingly.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Static plans are not worthless — many excellent programs are static designs created by expert coaches. But they assume you fit the program. AI generators assume the program should fit you.
        </p>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border border-[#1f1f1f] text-sm">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4 text-white">Factor</th>
                <th className="p-4 text-white">Static plan</th>
                <th className="p-4 text-white">AI workout generator</th>
              </tr>
            </thead>
            <tbody className="text-[#B4B4B4]">
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">Personalized to your goal</td>
                <td className="p-4 border-t border-[#1f1f1f]">Partially (you choose the right plan)</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Yes</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 border-t border-[#1f1f1f]">Adapts to your equipment</td>
                <td className="p-4 border-t border-[#1f1f1f]">Only if you swap exercises manually</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Automatic</td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">Updates based on performance</td>
                <td className="p-4 border-t border-[#1f1f1f]">No</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Yes (in adaptive apps)</td>
              </tr>
              <tr className="bg-[#050505]">
                <td className="p-4 border-t border-[#1f1f1f]">Expert-designed periodization</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Often excellent</td>
                <td className="p-4 border-t border-[#1f1f1f]">Varies by app quality</td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[#1f1f1f]">Best for</td>
                <td className="p-4 border-t border-[#1f1f1f]">Intermediate/advanced lifters who know what they want</td>
                <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">Beginners and people who want automated adaptation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI Generator vs Full AI Coach</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A workout generator makes a plan. A full <Link href="/ai-fitness-coach" className="text-cyan-400 hover:underline">AI fitness coach</Link> makes a plan, tracks every session, adapts the plan in response to your performance, and is available to answer questions in real time.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          The generator is the foundation. The coach is what happens after you log your first workout. Apps like Fitnivo start with a generated plan from your inputs and then operate as a coaching system — the AI adapts weights, volume, and exercise selection based on your actual logged data, not just your initial profile.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          The practical difference: after six weeks, a generator&#39;s output is increasingly outdated. A full AI coach&#39;s output is increasingly personalized. See our guide on <Link href="/blog/what-is-an-ai-fitness-coach" className="text-cyan-400 hover:underline">what an AI fitness coach is</Link> for a deeper comparison.
        </p>

        {/* Section 6 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Makes a Workout Generator &quot;AI&quot; vs Just an Algorithm</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          This is where marketing often muddles things. A rule-based algorithm (&quot;if beginner + muscle gain + 3 days = full body program with these exercises&quot;) is not the same as machine learning trained on training data.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          True AI in workout generation typically involves:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">Training data at scale</strong> — the model has learned from millions of workout sessions what progression rates, exercise combinations, and rep schemes produce results across different populations.</li>
          <li><strong className="text-white">Personalization that improves over time</strong> — the model becomes more accurate about your specific response to training as you provide more data.</li>
          <li><strong className="text-white">Non-linear adaptation</strong> — rather than a fixed rule (&quot;add 5 pounds if you hit all reps&quot;), a true AI can decide when to hold, when to deload, and when to change exercises based on patterns in your history.</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Many apps labeled &quot;AI&quot; use simpler rule-based systems with good results. The distinction matters less than whether the output is good and whether it adapts based on what you log.
        </p>

        {/* Section 7 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Limitations of AI Workout Generators</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          AI workout generators have real limitations that are worth understanding before you rely on them:
        </p>
        <ul className="text-[#B4B4B4] space-y-3 mb-6 list-disc pl-6">
          <li><strong className="text-white">They cannot see your form.</strong> The AI does not know if you are squatting with your knees caving, rounding your lower back on deadlifts, or using momentum on curls. Form errors that cause injury are invisible to the generator.</li>
          <li><strong className="text-white">They cannot assess injury.</strong> If you have a shoulder impingement, the generator does not know unless you tell it — and even then, it cannot assess severity or prescribe appropriate modifications the way a physio can.</li>
          <li><strong className="text-white">They work with the information you give them.</strong> Lying about your experience level, equipment, or injury history produces a plan that does not fit your actual situation.</li>
          <li><strong className="text-white">They do not account for factors outside the app.</strong> Stress, sleep quality, illness, and life events affect training capacity. The AI does not know about these unless you log them as session feedback.</li>
          <li><strong className="text-white">Some generators do not adapt at all.</strong> A one-time plan generator gives you the same output for weeks. If you are not logging and adapting, you are using an algorithm, not an AI coach.</li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How to Get the Best Result from an AI Workout Generator</h2>
        <ul className="text-[#B4B4B4] space-y-4 mb-10">
          <li>
            <strong className="text-white">Be accurate with your inputs.</strong> Experience level, equipment, and goal are the three variables that most determine the quality of the output. Do not optimize for a harder-sounding program — optimize for accuracy.
          </li>
          <li>
            <strong className="text-white">Log every session.</strong> If the app adapts based on your logs, every unlogged session is a missed signal. The AI cannot know you did a workout if you do not tell it. Log even when the workout felt easy or you did not hit your targets.
          </li>
          <li>
            <strong className="text-white">Use the adaptation, not just the plan.</strong> The initial generated plan is a starting point. The value compounds as the app learns your actual performance over weeks and adjusts accordingly. Do not abandon an app before this feedback loop has had time to work.
          </li>
          <li>
            <strong className="text-white">Report fatigue and soreness honestly.</strong> If the app asks for session ratings or recovery feedback, give accurate responses. This data shapes the next session&#39;s intensity.
          </li>
          <li>
            <strong className="text-white">Use the AI coach alongside the generator.</strong> If the app includes a chat-based AI coach (as Fitnivo does), ask it to explain why certain exercises are in your plan, how to modify for soreness, or when to expect progress. This turns the generator into a learning system rather than a black box.
          </li>
        </ul>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              q: 'What is an AI workout generator?',
              a: 'An AI workout generator takes your inputs — goal, experience level, available equipment, and training days per week — and produces a structured workout program. A basic generator does this once. A good AI workout app then tracks your sessions and updates the program as you progress.',
            },
            {
              q: 'Are AI workout generators free?',
              a: 'Some AI workout generators are free or have free tiers. Fitnivo offers a free tier with unlimited workout logging and 15 AI coach messages per day, including workout generation. Most apps with deeper AI adaptation — tracking your history and personalizing over time — require a paid subscription.',
            },
            {
              q: 'How accurate are AI workout generators?',
              a: 'AI workout generators produce reasonable programs when you give accurate inputs. The quality depends on how honestly you report your experience level, available equipment, and goals. The program is only as accurate as the information you provide — overestimating your experience will produce a program that is too hard.',
            },
            {
              q: 'Is an AI workout generator the same as an AI personal trainer?',
              a: 'No. A generator makes a plan. An AI personal trainer tracks your ongoing performance, adapts your program based on what you actually did, and provides coaching feedback. The difference is the feedback loop — a generator is a one-time output, a trainer is an ongoing system.',
            },
            {
              q: 'Can AI workout generators adapt to my progress?',
              a: 'It depends on the app. A basic workout generator produces a fixed plan. A full AI workout app tracks what you log each session and adjusts future sessions based on your performance — increasing weight when you hit your targets, reducing volume when you flag fatigue. The adaptation is what makes it genuinely AI rather than just algorithmic.',
            },
            {
              q: 'What is the best AI workout generator?',
              a: 'For a workout generator that also adapts over time, Fitnivo, Fitbod, and FitnessAI are strong options. Fitnivo adds nutrition coaching in the same app. Fitbod excels at gym-based strength programming. FitnessAI is the leanest option for straightforward progressive overload. The best choice depends on whether you also want nutrition tracking.',
            },
            {
              q: 'Do AI workout generators work for beginners?',
              a: 'Yes, provided you are honest about your experience level during setup. AI workout generators are particularly useful for beginners because they eliminate the decision of what to do — the program is built for you. The key is accurate onboarding and consistent logging so the AI can adapt correctly.',
            },
            {
              q: 'What information does an AI workout generator need?',
              a: 'A typical AI workout generator asks for: your primary goal (muscle gain, fat loss, endurance, general fitness), your experience level (beginner, intermediate, advanced), available equipment (bodyweight, dumbbells, full gym), how many days per week you can train, and any injuries or limitations. More advanced apps also use your workout history to personalize the plan.',
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
          <h3 className="text-2xl font-bold mb-3">An AI that generates your workout — and adapts it as you progress</h3>
          <p className="text-[#B4B4B4] mb-4">
            Fitnivo generates a personalized workout program from your goal, equipment, and schedule — then tracks your sessions and updates the plan automatically. Free tier: unlimited workout logger, 15 AI coach messages/day. Pro: $10/month or $60/year for unlimited.
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
          <li><Link href="/ai-workout-planner" className="hover:underline">Fitnivo AI Workout Planner</Link></li>
          <li><Link href="/ai-fitness-coach" className="hover:underline">Fitnivo AI Fitness Coach</Link></li>
          <li><Link href="/blog/how-ai-fitness-coaches-work" className="hover:underline">How AI fitness coaches work</Link></li>
          <li><Link href="/blog/what-is-an-ai-fitness-coach" className="hover:underline">What is an AI fitness coach?</Link></li>
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI fitness apps in 2026 (full comparison)</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
