import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'What Is an AI Fitness Coach? (2026 Beginner’s Guide) | Fitnivo',
  description:
    'An AI fitness coach is a digital assistant that plans, tracks, and adapts your workouts. Here is what one does, how it works, and when to use it.',
  keywords: [
    'what is an AI fitness coach',
    'AI fitness coach explained',
    'how AI fitness coaches work',
    'AI personal trainer explained',
  ],
  alternates: { canonical: 'https://fitnivo.in/blog/what-is-an-ai-fitness-coach' },
  openGraph: {
    title: 'What Is an AI Fitness Coach?',
    description: 'A plain-English guide to AI fitness coaches — what they do, how they work, and who they help.',
    url: 'https://fitnivo.in/blog/what-is-an-ai-fitness-coach',
    type: 'article',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'What Is an AI Fitness Coach? (2026 Beginner’s Guide)',
  description: 'A plain-English guide to AI fitness coaches — what they do, how they work, and when to use one.',
  image: 'https://fitnivo.in/images/mockup/ai-fitness-coach-chat-workout-planner.webp',
  url: 'https://fitnivo.in/blog/what-is-an-ai-fitness-coach',
  datePublished: '2026-09-03T00:00:00Z',
  dateModified: '2026-09-03T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1500,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'What Is an AI Fitness Coach', url: 'https://fitnivo.in/blog/what-is-an-ai-fitness-coach' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI fitness coach in one sentence?', acceptedAnswer: { '@type': 'Answer', text: 'An AI fitness coach is a digital fitness assistant that uses your goals, training, and progress data to plan, track, and adapt your workouts.' } },
    { '@type': 'Question', name: 'How does an AI fitness coach work?', acceptedAnswer: { '@type': 'Answer', text: 'It gathers data (goal, experience, equipment, workout history), uses that data to generate a plan, then adapts the plan as you log new sessions.' } },
    { '@type': 'Question', name: 'Is an AI fitness coach the same as an AI personal trainer?', acceptedAnswer: { '@type': 'Answer', text: 'The terms are often used interchangeably. Some apps focus more on planning workouts (coach), others on real-time cueing during a session (trainer).' } },
    { '@type': 'Question', name: 'Can an AI fitness coach replace a human trainer?', acceptedAnswer: { '@type': 'Answer', text: 'For most goals — building a routine, tracking progress, staying consistent — yes. For hands-on form assessment or rehab, work with a qualified human.' } },
    { '@type': 'Question', name: 'Are AI fitness coaches good for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A good AI coach removes the biggest beginner blocker: not knowing what to do. It hands you a personalized plan and progresses you gradually.' } },
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
          <span className="text-white/60">What Is an AI Fitness Coach</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Explainer</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <time dateTime="2026-09-03">September 3, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          What Is an AI Fitness Coach?
        </h1>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            An <strong>AI fitness coach</strong> is a digital fitness assistant that uses your goals, workouts, and progress to plan, track, and adapt your training — without you having to design each session yourself.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. This is a general-information article, not medical advice.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Definition</h2>
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
          Think of an AI fitness coach as a personal trainer who lives in an app. It asks about your goal, experience, and equipment; builds a workout you can actually follow; and adjusts what comes next based on how each session went.
        </p>
        <p className="text-[#B4B4B4] text-lg leading-relaxed mb-8">
          The AI part means the app does the planning and progression math for you. Instead of following a rigid PDF that ignores whether you missed a week or crushed a set early, an AI coach reads your logged data and updates the plan.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What an AI fitness coach actually does</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>Asks about your goal — muscle gain, fat loss, strength, general fitness, or consistency</li>
          <li>Learns your equipment — commercial gym, home dumbbells, bodyweight only</li>
          <li>Generates a personalized workout for today</li>
          <li>Logs your sets, reps, and weights</li>
          <li>Tracks your history so future sessions build on past ones</li>
          <li>Adjusts progression up or down based on how the last session went</li>
          <li>Answers questions about form, technique, or the plan (in apps that include chat)</li>
          <li>Connects training data with nutrition data (in apps that cover both)</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How it works (in plain language)</h2>
        <ol className="space-y-4 text-[#B4B4B4] mb-10 list-decimal pl-6">
          <li><strong className="text-white">Data collection.</strong> The app asks about your goal, experience, equipment, and schedule. Some also pull heart rate or sleep data from a wearable.</li>
          <li><strong className="text-white">Plan generation.</strong> Based on your inputs, the AI chooses exercises, sets, reps, and rest times.</li>
          <li><strong className="text-white">Session logging.</strong> You perform the workout and log what you actually did.</li>
          <li><strong className="text-white">Adaptation.</strong> The AI compares planned vs actual and adjusts the next session — heavier if you cleared the target, held or reduced if you missed reps.</li>
          <li><strong className="text-white">Feedback loop.</strong> Over weeks, the plan becomes tuned to you personally.</li>
        </ol>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">AI fitness coach vs workout generator</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          A workout generator hands you a routine. An AI fitness coach helps you understand <em>what to do next</em>. The distinction is important because a lot of apps market themselves as "AI-powered" while really just being generators with a chatbot layer.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-10">
          The tell: does the app read your logged data and change what it recommends next week? If not, it&apos;s a generator.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">When to use an AI fitness coach</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>You want structure but can&apos;t justify $100–$300+ per month for a human trainer</li>
          <li>You&apos;re a beginner and don&apos;t know where to start</li>
          <li>You&apos;re intermediate and stuck designing your own progression</li>
          <li>You travel a lot and need plans that flex to whatever equipment you have</li>
          <li>You want to combine training with nutrition and calorie tracking in one place</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">When a human coach is still better</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>You need hands-on form correction on heavy lifts</li>
          <li>You&apos;re rehabbing an injury and need supervised loading</li>
          <li>You&apos;re preparing for a competition with technical event demands</li>
          <li>You want the accountability of an actual person waiting for you</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What Fitnivo does</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-4">
          Fitnivo is an AI fitness and nutrition coach. It builds personalized workouts, tracks your training, connects with an AI food scanner and macro tracker, and gives you a meal plan built around your calorie and protein targets — all in one app.
        </p>
        <p className="text-[#B4B4B4] leading-relaxed mb-12">
          See <Link href="/ai-fitness-coach" className="text-cyan-400 hover:underline">the AI Fitness Coach page</Link> for how it works day-to-day.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">Frequently asked questions</h2>
        <div className="space-y-6 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">What is an AI fitness coach in one sentence?</h4>
            <p className="text-[#B4B4B4]">An AI fitness coach is a digital fitness assistant that uses your goals, training, and progress data to plan, track, and adapt your workouts.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Is an AI fitness coach the same as an AI personal trainer?</h4>
            <p className="text-[#B4B4B4]">The terms are often used interchangeably. Some apps focus more on planning workouts (coach), others on real-time cueing during a session (trainer).</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Can an AI fitness coach replace a human trainer?</h4>
            <p className="text-[#B4B4B4]">For most goals — building a routine, tracking progress, staying consistent — yes. For hands-on form assessment or rehab, work with a qualified human.</p>
          </div>
          <div className="border-t border-[#1f1f1f] pt-6">
            <h4 className="text-lg font-bold text-white mb-2">Are AI fitness coaches good for beginners?</h4>
            <p className="text-[#B4B4B4]">Yes. A good AI coach removes the biggest beginner blocker: not knowing what to do. It hands you a personalized plan and progresses you gradually.</p>
          </div>
        </div>

        <div className="border border-cyan-400 bg-cyan-950/10 p-8 mb-12">
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo&apos;s AI fitness coach</h3>
          <p className="text-[#B4B4B4] mb-4">Personalized workouts, tracking, nutrition, and AI food scanning in one free app.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/blog/best-ai-fitness-apps-2026" className="hover:underline">Best AI Fitness Apps in 2026</Link></li>
          <li><Link href="/blog/fitnivo-vs-fitbod" className="hover:underline">Fitnivo vs Fitbod</Link></li>
          <li><Link href="/blog/ai-vs-traditional-coaching" className="hover:underline">AI vs Traditional Fitness Coaching</Link></li>
          <li><Link href="/ai-fitness-coach" className="hover:underline">Fitnivo AI Fitness Coach</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
