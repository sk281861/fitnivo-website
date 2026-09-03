import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'AI Food Scanner & Calorie Tracker — Snap Meals to Log | Fitnivo',
  description:
    "Fitnivo's AI food scanner estimates calories and macros from a photo of your meal. Track meals in seconds — no manual searching.",
  keywords: [
    'AI food scanner',
    'AI calorie tracker',
    'AI calorie scanner',
    'photo calorie tracker',
    'AI calorie counter from photo',
    'food photo calorie calculator',
    'AI macro scanner',
    'food calorie scanner',
    'scan food calories',
    'AI meal scanner',
  ],
  alternates: { canonical: 'https://fitnivo.in/ai-food-scanner' },
  openGraph: {
    title: 'AI Food Scanner & Calorie Tracker | Fitnivo',
    description: 'Snap a photo of your meal. Fitnivo estimates calories, protein, carbs, and fat in seconds.',
    url: 'https://fitnivo.in/ai-food-scanner',
    type: 'website',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fitnivo AI Food Scanner',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Android, iOS',
  description:
    'AI food scanner and calorie tracker. Snap a photo of your meal and Fitnivo estimates calories, protein, carbs, and fat.',
  url: 'https://fitnivo.in/ai-food-scanner',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does an AI food scanner work?',
      acceptedAnswer: { '@type': 'Answer', text: 'An AI food scanner uses computer vision to identify foods in a photo, estimate portion sizes, and match items to a nutrition database to calculate calories, protein, carbs, and fat.' },
    },
    {
      '@type': 'Question',
      name: 'Is AI food scanning accurate?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI food scanners provide estimates. Accuracy is best for clearly visible single foods and drops with mixed dishes, sauces, and hidden ingredients. Fitnivo lets you adjust estimates before saving.' },
    },
    {
      '@type': 'Question',
      name: 'What does the Fitnivo food scanner track?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo estimates calories, protein, carbohydrates, and fat from a meal photo, and lets you save the entry to your daily log.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need internet to use the food scanner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The AI food scanner processes images through a cloud model, so an internet connection is required to get instant estimates.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use the AI food scanner for restaurant food?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The scanner works on restaurant plates, home-cooked meals, and packaged food. For very specific branded products, barcode-style search is often more precise.' },
    },
    {
      '@type': 'Question',
      name: 'Is Fitnivo free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fitnivo has a free download. Some advanced features may require a subscription — check the app for current pricing in your region.' },
    },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'AI Food Scanner', url: 'https://fitnivo.in/ai-food-scanner' },
]);

const schemaJson = JSON.stringify([softwareAppSchema, faqSchema, breadcrumbSchema]);

const steps = [
  { n: '01', title: 'Snap your meal', body: 'Open Fitnivo and take a photo of your plate — restaurant, home-cooked, or packaged food.' },
  { n: '02', title: 'AI recognizes your food', body: 'Computer vision identifies the items on your plate and estimates portion sizes.' },
  { n: '03', title: 'Get macros in seconds', body: 'See estimated calories, protein, carbs, and fat before you save.' },
  { n: '04', title: 'Adjust and log', body: 'Fine-tune quantities if needed, then save the entry to your daily log.' },
];

const faqs = [
  { q: 'How does an AI food scanner work?', a: 'An AI food scanner uses computer vision to identify foods in a photo, estimate portion sizes, and match items to a nutrition database to calculate calories, protein, carbs, and fat.' },
  { q: 'Is AI food scanning accurate?', a: 'AI food scanners provide estimates. Accuracy is best for clearly visible single foods and drops with mixed dishes, sauces, and hidden ingredients. Fitnivo lets you adjust estimates before saving.' },
  { q: 'What does the Fitnivo food scanner track?', a: 'Fitnivo estimates calories, protein, carbohydrates, and fat from a meal photo, and lets you save the entry to your daily log.' },
  { q: 'Do I need internet to use the food scanner?', a: 'Yes. The AI food scanner processes images through a cloud model, so an internet connection is required.' },
  { q: 'Can I use the AI food scanner for restaurant food?', a: 'Yes. The scanner works on restaurant plates, home-cooked meals, and packaged food. For very specific branded products, search or barcode input is often more precise.' },
  { q: 'Does Fitnivo work for Indian, UK, and US foods?', a: 'Yes — the recognition model is trained on a wide range of global cuisines. If a specific regional dish is unfamiliar, you can search manually or adjust the estimate.' },
  { q: 'Is Fitnivo free?', a: 'Fitnivo has a free download. Some advanced features may require a subscription — check the app for current pricing in your region.' },
  { q: 'Which apps compete with Fitnivo for AI food scanning?', a: 'Popular AI food scanners include Cal AI, Calorie Mama, SnapCalorie, and EatAI. Fitnivo combines a food scanner with workouts and nutrition coaching in one app.' },
];

export default function AIFoodScannerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/60">AI Food Scanner</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                AI Food Scanner + Calorie Tracker
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                Snap a Photo. Log Your Meal.
              </h1>
              <p className="text-lg text-[#B4B4B4] mb-8 leading-relaxed max-w-2xl">
                Fitnivo&apos;s AI food scanner estimates calories, protein, carbs, and fat from a photo of your meal — no more digging through databases to log lunch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300 text-center">
                  Try the Food Scanner
                </a>
                <a href="#how-it-works" className="px-8 py-4 border border-[#262626] hover:border-cyan-400 font-semibold uppercase tracking-wider text-center">
                  How It Works
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/images/mockup/ai-food-scanner-calorie-macro-tracker.webp"
                alt="Fitnivo AI food scanner analyzing a meal photo and showing calories, protein, carbs, and fat"
                width={400}
                height={800}
                priority
                className="w-full max-w-sm h-auto rounded-2xl border border-[#262626]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How AI Food Scanning Works */}
      <section id="how-it-works" className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How AI Food Scanning Works</h2>
          <p className="text-[#B4B4B4] text-lg mb-12 max-w-3xl">
            Four steps from photo to logged meal — no manual searching, no barcode hunting for most foods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="border border-[#1f1f1f] bg-[#050505] p-6">
                <div className="text-cyan-400 font-mono text-sm font-bold mb-2">{s.n}</div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#B4B4B4] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it tracks */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Fitnivo&apos;s Food Scanner Tracks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Calories', 'Protein', 'Carbohydrates', 'Fat'].map((n) => (
              <div key={n} className="border border-[#1f1f1f] bg-[#050505] p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{n}</div>
              </div>
            ))}
          </div>
          <p className="text-[#B4B4B4] mt-8 max-w-3xl">
            Every logged meal feeds your daily nutrition dashboard and your <Link href="/ai-nutrition-coach" className="text-cyan-400 hover:underline">AI nutrition coach</Link>, so recommendations are based on what you actually eat — not generic guesses.
          </p>
        </div>
      </section>

      {/* Manual vs AI comparison */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Food Scanner vs Manual Calorie Tracker</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-[#1f1f1f] text-sm">
              <thead>
                <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                  <th className="p-4">Task</th>
                  <th className="p-4 text-cyan-400">AI Food Scanner (Fitnivo)</th>
                  <th className="p-4">Manual Search Tracker</th>
                </tr>
              </thead>
              <tbody className="text-[#B4B4B4]">
                {[
                  ['Log a home-cooked meal', 'Photo → estimate → save', 'Search each ingredient, adjust portions'],
                  ['Log a restaurant plate', 'Photo of the plate', 'Guess ingredients, hope database has it'],
                  ['Time per meal', 'Seconds', 'Minutes'],
                  ['Ideal for', 'Fast logging, mixed dishes', 'Packaged food with barcodes'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? 'bg-[#050505]' : ''}>
                    <td className="p-4 font-semibold text-white border-t border-[#1f1f1f]">{row[0]}</td>
                    <td className="p-4 border-t border-[#1f1f1f] text-cyan-400">{row[1]}</td>
                    <td className="p-4 border-t border-[#1f1f1f]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accuracy — What to Expect</h2>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            AI food scanning is an estimate, not a laboratory measurement. Accuracy is highest when the food is clearly visible, single-item, and photographed from above. It drops with heavily sauced dishes, layered foods, or hidden ingredients.
          </p>
          <p className="text-[#B4B4B4] text-lg leading-relaxed mb-4">
            Fitnivo shows the estimate <em>before</em> you save so you can adjust quantities based on what you know. Over time this gives you a more reliable log than trying to reverse-engineer restaurant meals from a database search.
          </p>
          <p className="text-[#B4B4B4] text-lg leading-relaxed">
            For pre-packaged foods where precision matters, use the app&apos;s search to find the branded entry.
          </p>
        </div>
      </section>

      {/* Related pillars */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Part of Your AI Fitness &amp; Nutrition Coach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/ai-nutrition-coach" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Nutrition Coach</h3>
              <p className="text-sm text-[#B4B4B4]">Coaching grounded in your actual tracked food data.</p>
            </Link>
            <Link href="/ai-meal-planner" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Meal Planner</h3>
              <p className="text-sm text-[#B4B4B4]">Meals built around your calorie and protein targets.</p>
            </Link>
            <Link href="/ai-fitness-coach" className="border border-[#1f1f1f] bg-[#050505] p-6 hover:border-cyan-400 group">
              <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400">AI Fitness Coach</h3>
              <p className="text-sm text-[#B4B4B4]">Personalized workouts that adapt to your progress.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="border border-[#1f1f1f] bg-[#050505] p-6 group">
                <summary className="cursor-pointer font-bold text-white flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#B4B4B4] mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-cyan-950/20 to-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Log Your Next Meal in Seconds</h2>
          <p className="text-[#B4B4B4] text-lg mb-8">Download Fitnivo and try the AI food scanner today.</p>
          <a href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" className="inline-block px-10 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider hover:bg-cyan-300">
            Download Fitnivo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
