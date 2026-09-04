import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'How AI Food Scanners Work (2026 Guide) | Fitnivo',
  description:
    'How AI food scanners recognize food, estimate portions, and calculate calories from a photo — and how accurate they really are in 2026.',
  keywords: ['how AI food scanners work', 'AI food recognition', 'photo calorie tracker how it works', 'AI calorie scanner accuracy'],
  alternates: { canonical: 'https://fitnivo.in/blog/how-ai-food-scanners-work' },
  openGraph: {
    title: 'How AI Food Scanners Work',
    description: 'A plain-English guide to AI food scanners — computer vision, portion estimation, and macro calculation.',
    url: 'https://fitnivo.in/blog/how-ai-food-scanners-work',
    type: 'article',
    images: [{ url: 'https://fitnivo.in/images/blog/nutrition/how-ai-food-scanners-work.webp', width: 1200, height: 630 }],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'How AI Food Scanners Work (2026 Guide)',
  description: 'A plain-English guide to AI food scanners — computer vision, portion estimation, and macro calculation.',
  image: 'https://fitnivo.in/images/blog/nutrition/how-ai-food-scanners-work.webp',
  url: 'https://fitnivo.in/blog/how-ai-food-scanners-work',
  datePublished: '2026-09-04T00:00:00Z',
  dateModified: '2026-09-04T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 1500,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'How AI Food Scanners Work', url: 'https://fitnivo.in/blog/how-ai-food-scanners-work' },
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do AI food scanners work?', acceptedAnswer: { '@type': 'Answer', text: 'An AI food scanner uses computer vision to identify foods in a photo, estimate portion size from visual cues, and match items to a nutrition database to calculate calories, protein, carbs, and fat.' } },
    { '@type': 'Question', name: 'Are AI food scanners accurate?', acceptedAnswer: { '@type': 'Answer', text: 'AI food scanners are estimates, not lab measurements. Accuracy is highest for single, clearly-visible foods and lower for mixed dishes with hidden ingredients. Good apps let you adjust the estimate before saving.' } },
    { '@type': 'Question', name: 'Can AI food scanners recognize any cuisine?', acceptedAnswer: { '@type': 'Answer', text: 'Modern models are trained on wide global datasets covering common cuisines. Very regional or unusual dishes may not match perfectly; search or manual entry is a fallback.' } },
    { '@type': 'Question', name: 'Do AI food scanners work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Most AI food scanners process images in the cloud, so an internet connection is required for instant estimates.' } },
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
          <span className="text-white/60">How AI Food Scanners Work</span>
        </nav>

        <div className="mb-6 flex items-center gap-3 text-sm text-[#B4B4B4]">
          <span className="uppercase tracking-widest text-cyan-400 text-xs font-bold">Explainer</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <time dateTime="2026-09-04">September 4, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          How AI Food Scanners Work
        </h1>

        <div className="relative w-full aspect-[1.9/1] mb-10 overflow-hidden rounded-lg">
          <Image
            src="/images/blog/nutrition/how-ai-food-scanners-work.webp"
            alt="How AI food scanners recognize food and calculate calories from a photo"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="bg-cyan-950/20 border border-cyan-400/30 p-6 mb-10">
          <p className="text-white font-semibold leading-relaxed">
            An <strong>AI food scanner</strong> uses computer vision to identify what&apos;s on your plate, estimate portion size from the image, and match items to a nutrition database — turning a photo into estimated calories, protein, carbs, and fat in a few seconds.
          </p>
        </div>

        <p className="text-sm text-[#B4B4B4] mb-8">
          Reviewed by the <Link href="/about" className="text-cyan-400 hover:underline">Fitnivo Editorial Team</Link>. General information, not medical advice.
        </p>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">The four steps</h2>
        <ol className="space-y-6 mb-10 list-decimal pl-6 text-[#B4B4B4]">
          <li>
            <strong className="text-white">Image capture.</strong> You take a photo of your meal (single dish, whole plate, or packaged product). Better lighting and a top-down angle usually improve recognition.
          </li>
          <li>
            <strong className="text-white">Food recognition (computer vision).</strong> A trained vision model segments the image, identifies each item (&quot;rice&quot;, &quot;grilled chicken&quot;, &quot;broccoli&quot;), and outputs class labels with confidence scores.
          </li>
          <li>
            <strong className="text-white">Portion estimation.</strong> The model estimates the volume or weight of each identified item using visual references (plate size, item shape, depth cues from the phone camera).
          </li>
          <li>
            <strong className="text-white">Nutrition lookup.</strong> Each identified food and its estimated portion is matched against a nutrition database (USDA, curated app database, or a commercial provider) to calculate calories, protein, carbs, and fat.
          </li>
        </ol>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What affects accuracy</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li><strong className="text-white">Photo quality:</strong> Blurry, dim, or angled photos reduce recognition accuracy.</li>
          <li><strong className="text-white">Mixed dishes:</strong> Casseroles, curries, and layered dishes are harder because ingredients aren&apos;t individually visible.</li>
          <li><strong className="text-white">Hidden fats and sauces:</strong> A photo can&apos;t see oil in the pan or dressing under lettuce — these are commonly under-counted.</li>
          <li><strong className="text-white">Regional foods:</strong> If a specific regional dish wasn&apos;t in the training data, the model may match to a similar-looking food that has different macros.</li>
          <li><strong className="text-white">Portion depth:</strong> Cameras estimate depth better on newer phones with depth sensors, which improves volume estimation.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How to get better results</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>Take the photo from directly above the plate</li>
          <li>Include a familiar object for scale (a standard fork, a standard plate)</li>
          <li>Photograph before you eat, not halfway through</li>
          <li>Adjust the AI&apos;s estimate before saving if you know it&apos;s off (e.g., extra oil, larger serving)</li>
          <li>Use search or barcode entry for packaged food — usually more precise than photo</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What AI food scanners are good for</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>Fast daily logging when you don&apos;t want to search a database</li>
          <li>Restaurant meals where you don&apos;t know the exact recipe</li>
          <li>Home-cooked mixed meals where entering each ingredient would take too long</li>
          <li>Reducing the friction that makes people quit calorie tracking in the first week</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">What they&apos;re not good for</h2>
        <ul className="space-y-3 text-[#B4B4B4] mb-10 list-disc pl-6">
          <li>Bodybuilders in a strict prep who need precise macros — weigh food instead</li>
          <li>Clinical macronutrient calculations for medical conditions — work with a professional</li>
          <li>Packaged food where the label is right there — use the barcode</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 border-l-4 border-cyan-400 pl-4">How Fitnivo does it</h2>
        <p className="text-[#B4B4B4] leading-relaxed mb-6">
          Fitnivo&apos;s <Link href="/ai-food-scanner" className="text-cyan-400 hover:underline">AI food scanner</Link> is built into the same app as your AI nutrition coach and workouts, so a scanned meal automatically counts toward your day&apos;s targets and shows up in your coach&apos;s recommendations tomorrow. On the free tier you get 3 scans per day (enough for most daily users); Pro is $10/month or $60/year for unlimited scans.
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
          <h3 className="text-2xl font-bold mb-3">Try Fitnivo&apos;s AI food scanner</h3>
          <p className="text-[#B4B4B4] mb-4">3 free scans/day forever. Pro unlocks unlimited for $10/mo or $60/yr.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">Download Fitnivo</a>
        </div>

        <h3 className="text-xl font-bold mb-4">Related</h3>
        <ul className="text-cyan-400 space-y-2">
          <li><Link href="/ai-food-scanner" className="hover:underline">Fitnivo AI Food Scanner</Link></li>
          <li><Link href="/blog/fitnivo-vs-cal-ai" className="hover:underline">Fitnivo vs Cal AI</Link></li>
          <li><Link href="/blog/best-ai-nutrition-coach-apps-2026" className="hover:underline">Best AI Nutrition Coach Apps 2026</Link></li>
          <li><Link href="/blog/how-ai-fitness-coaches-work" className="hover:underline">How AI Fitness Coaches Work</Link></li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
