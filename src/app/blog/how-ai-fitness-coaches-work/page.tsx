import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'How AI Fitness Coaches Work (2026 Guide) | Fitnivo',
  description:
    'How AI fitness coaches build workouts, adapt to your progress, and pair with nutrition — a plain-English guide to what actually happens inside these apps.',
  keywords: ['how AI fitness coaches work', 'AI fitness coach explained', 'how AI workout apps work', 'adaptive AI training'],
  alternates: { canonical: 'https://fitnivo.in/blog/how-ai-fitness-coaches-work' },
  openGraph: {
    title: 'How AI Fitness Coaches Work',
    description: 'A plain-English guide to how AI fitness coaches build and adapt your training.',
    url: 'https://fitnivo.in/blog/how-ai-fitness-coaches-work',
    type: 'article',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'How AI Fitness Coaches Work (2026 Guide)',
  description: 'A plain-English guide to how AI fitness coaches build and adapt your training.',
  image: 'https://fitnivo.in/images/mockup/ai-fitness-coach-chat-workout-planner.webp',
  url: 'https://fitnivo.in/blog/how-ai-fitness-coaches-work',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1500,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'How AI Fitness Coaches Work', url: 'https://fitnivo.in/blog/how-ai-fitness-coaches-work' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does an AI fitness coach work in simple terms?', acceptedAnswer: { '@type': 'Answer', text: 'You tell it your goal, experience, and equipment. It generates a workout. You log the workout. It adjusts the next one based on how you did. Repeat.' } },
    { '@type': 'Question', name: 'What is the difference between an AI fitness coach and a workout generator?', acceptedAnswer: { '@type': 'Answer', text: 'A generator gives you a plan once. An AI coach reads your logged data over time and progresses you at the right pace — heavier when you clear targets, hold when you miss reps.' } },
    { '@type': 'Question', name: 'Can AI fitness coaches see your form?', acceptedAnswer: { '@type': 'Answer', text: 'Some AI apps offer computer-vision form feedback via video, but most rely on your logged sets, reps, and RPE. For hands-on form correction, work with a qualified human trainer.' } },
    { '@type': 'Question', name: 'What signals do AI fitness coaches use?', acceptedAnswer: { '@type': 'Answer', text: 'Common inputs: goal (muscle, fat loss, strength, general fitness), experience, available equipment, logged sets/reps/weight, workout history, and optionally recovery data from a wearable.' } },
  ],
};

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]);

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">How AI Fitness Coaches Work</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Explainer</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          How AI Fitness Coaches Work
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            An <strong>AI fitness coach</strong> is a feedback loop: it takes what you tell it (goal, equipment, experience), generates a workout, watches what you actually did, and updates the next session so progression happens without you having to think about the math.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. General information, not medical advice.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">The five-step loop</h2>
        <ol className="space-y-6 mb-10 list-decimal pl-6 text-[#B4B4B4]">
          <li>
            <strong className="text-white">Input.</strong> You share your goal (muscle, fat loss, strength, general fitness), training experience, available equipment, and how many days per week you can train.
          </li>
          <li>
            <strong className="text-white">Plan generation.</strong> The AI chooses exercises, sets, reps, rest, and a weekly split based on your inputs. Good apps also use your training history if you have one.
          </li>
          <li>
            <strong className="text-white">Session logging.</strong> You perform the workout and log what actually happened — weight used, reps completed, whether it was easy or brutal.
          </li>
          <li>
            <strong className="text-white">Adaptation.</strong> The AI compares your logged performance to the plan and decides what changes next: push heavier, hold the load, deload, swap an exercise, add volume, subtract volume.
          </li>
          <li>
            <strong className="text-white">Feedback loop.</strong> Over weeks and months, the plan becomes progressively more tailored to how <em>you</em> actually train — not the average lifter.
          </li>
        </ol>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What signals AI coaches actually use</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Goal:</strong> The single biggest input — muscle gain, fat loss, strength, general fitness, or consistency drive different programs.</li>
          <li><strong className="text-white">Equipment:</strong> Barbell + rack, dumbbells only, bodyweight, or full commercial gym — sets what exercises are on the table.</li>
          <li><strong className="text-white">Experience:</strong> Beginners get lower volumes and simpler exercises; advanced lifters get more specialization.</li>
          <li><strong className="text-white">Logged sets/reps/weight:</strong> The most valuable signal after your inputs — actual performance tells the AI how to progress.</li>
          <li><strong className="text-white">Perceived exertion (RPE / RIR):</strong> How hard the set felt, when the app asks.</li>
          <li><strong className="text-white">Optional wearable data:</strong> Some apps use HRV, sleep, and resting HR to modulate training load.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI fitness coach vs static plan vs human trainer</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Static plan:</strong> Same routine week after week regardless of what you did. Great for cost. Bad for individual response.</li>
          <li><strong className="text-white">AI fitness coach:</strong> Adjusts every session based on your logged data. Middle-ground: cheaper than a human, more personalized than a PDF.</li>
          <li><strong className="text-white">Human trainer:</strong> Sees your form live, spots you on heavy lifts, holds you accountable in the room. Best when hands-on matters — expensive.</li>
        </ul>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          Many serious lifters combine: AI coach for daily programming, human coach for occasional form checks.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Where AI coaches struggle</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>Live form correction on complex lifts (squat depth, deadlift bracing) is still hard for AI without video</li>
          <li>Injury rehab needs a qualified professional, not an app</li>
          <li>Highly technical sport skills (Olympic lifting, gymnastics) need a coach who can see you move</li>
          <li>Motivation on the day you don&apos;t feel like training — no app truly replaces someone waiting for you in the gym</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How Fitnivo does it</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-6">
          <Link href="/ai-fitness-coach" className="text-cyan-400 hover:underline">Fitnivo&apos;s AI fitness coach</Link> pairs the classic feedback loop with an AI coach chat that can generate workouts and meal plans on demand — and connects your training to nutrition tracking in the same app. On the free tier you get unlimited workout logging plus 15 AI coach messages per day (with tool-calling for workouts and meal plans). Pro is $10/month or $60/year for unlimited messages and scans.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">FAQ</h2>
        <div className="space-y-6 mb-12">
          {faqSchema.mainEntity.map((f) => (
            <div key={f.name} className="border-t border-[#1f1f1f] pt-6 first:border-t-0 first:pt-0">
              <h4 className="text-lg font-bold text-white mb-2">{f.name}</h4>
              <p className="text-[#B4B4B4]">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo&apos;s AI fitness coach</h3>
          <p className="text-[#B4B4B4] mb-4">Free tier includes unlimited workout logger and 15 AI coach messages/day. Pro unlocks unlimited for $10/mo or $60/yr.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">Download Fitnivo</a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/what-is-an-ai-fitness-coach" className="hover:underline">What is an AI fitness coach?</Link></li>
          <li><Link href="/blog/how-ai-food-scanners-work" className="hover:underline">How AI Food Scanners Work</Link></li>
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI Fitness Apps 2026</Link></li>
          <li><Link href="/ai-fitness-coach" className="hover:underline">Fitnivo AI Fitness Coach</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
