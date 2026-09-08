import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';

export const metadata: Metadata = {
  title: 'How We Review AI Fitness Apps — Editorial Standards | Fitnivo',
  description:
    'Fitnivo\'s editorial methodology: how we test and evaluate AI fitness apps, our conflict-of-interest disclosure, and the criteria we use to pick winners.',
  alternates: { canonical: 'https://fitnivo.in/blog/how-we-review-ai-fitness-apps' },
  openGraph: {
    title: 'How We Review AI Fitness Apps — Editorial Standards',
    description:
      'Fitnivo\'s editorial methodology: how we test AI fitness apps, our conflict-of-interest disclosure, and our evaluation criteria.',
    url: 'https://fitnivo.in/blog/how-we-review-ai-fitness-apps',
    type: 'article',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'How We Review AI Fitness Apps — Editorial Standards',
  description:
    'Fitnivo\'s editorial methodology: how we test and evaluate AI fitness apps, our conflict-of-interest disclosure, and the criteria we use to pick winners.',
  image: 'https://fitnivo.in/images/hero/Fitnivo_hero_section.webp',
  url: 'https://fitnivo.in/blog/how-we-review-ai-fitness-apps',
  datePublished: '2026-09-09T00:00:00Z',
  dateModified: '2026-09-09T00:00:00Z',
  authorName: 'Fitnivo Editorial Team',
  authorUrl: 'https://fitnivo.in/about',
  wordCount: 900,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://fitnivo.in' },
  { name: 'Blog', url: 'https://fitnivo.in/blog' },
  { name: 'How We Review AI Fitness Apps', url: 'https://fitnivo.in/blog/how-we-review-ai-fitness-apps' },
]);

const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema]);

const criteria = [
  {
    title: 'AI Adaptivity',
    description:
      'Does the app actually learn from your logged data? We look for genuine progressive overload adjustments, exercise swaps based on performance, and macro targets that respond to real logged intake — not just template selection with a chat interface on top.',
  },
  {
    title: 'Feature Completeness',
    description:
      'Fitness results require both training and nutrition. We score apps on whether they address both sides, or clearly do one thing very well. An app that only does workouts scores lower in our overall rating even if its workout quality is excellent.',
  },
  {
    title: 'Pricing Transparency',
    description:
      'We check whether the free tier is genuinely usable or a locked demo, what the recurring cost is, whether annual pricing is disclosed clearly, and whether the paid tier delivers meaningfully more value than the free tier.',
  },
  {
    title: 'User Experience',
    description:
      'We install each app on an Android device (Pixel 7) and use it daily for a minimum of 14 days. We score onboarding clarity, logging friction, and whether the AI output is actionable or generic.',
  },
  {
    title: 'Data Accuracy',
    description:
      'For nutrition apps, we test food scanning against a known-weight meal and compare the calorie estimate to a verified food database. For workout apps, we verify that progressive overload recommendations are plausible given the logged history.',
  },
];

export default function EditorialMethodologyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />

      <div className="max-w-[780px] mx-auto px-6 pt-32 pb-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-[#FF6A00] hover:text-[#FF6A00]/80">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/blog" className="text-[#FF6A00] hover:text-[#FF6A00]/80">Blog</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/60">How We Review</span>
        </nav>

        <div className="mb-5 flex items-center gap-3 text-sm text-white/50">
          <span className="uppercase tracking-widest text-[#FF6A00] text-xs font-bold">Editorial</span>
          <span>·</span>
          <time dateTime="2026-09-09">September 9, 2026</time>
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
          How We Review AI Fitness Apps
        </h1>

        <p className="text-white/60 text-lg leading-relaxed mb-10 border-l-2 border-[#FF6A00] pl-4">
          Fitnivo is our own product. Every piece of content we publish lives or dies by how honestly we handle that conflict of interest. This page explains exactly how we work.
        </p>

        {/* Who we are */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-baseline gap-3">
            <span className="text-[#FF6A00]">—</span> Who We Are
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            The Fitnivo editorial team consists of fitness practitioners, certified nutrition advisors, and mobile product specialists. Everyone on the team uses fitness apps daily — not for reviews, but because we train. That gives us a baseline for what a good AI fitness app actually feels like to use.
          </p>
          <p className="text-white/65 leading-relaxed">
            We are not an independent review site. We built Fitnivo, we earn revenue from it, and we will always disclose this at the top of any page where we compare it to competitors. We have chosen to write these comparisons because we believe they are genuinely useful to people trying to choose between options in an increasingly crowded category — and because we think we can do them honestly.
          </p>
        </section>

        {/* Conflict of interest */}
        <section className="mb-12 bg-[#FF6A00]/[0.04] border border-[#FF6A00]/25 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-[#FF6A00]">Conflict of Interest Disclosure</span>
          </h2>
          <ul className="space-y-2 text-white/65 text-sm leading-relaxed">
            <li>• Fitnivo is our product. We earn revenue when people subscribe.</li>
            <li>• We do not accept payment, free subscriptions, or promotional consideration from any third-party app we review.</li>
            <li>• When a competitor is the better pick for a specific use case, we say so — and we link to them.</li>
            <li>• Our editorial team operates independently of the product and marketing teams.</li>
          </ul>
        </section>

        {/* Testing methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-baseline gap-3">
            <span className="text-[#FF6A00]">—</span> How We Test
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            Every app we compare or rank has been installed and used by at least one team member for a minimum of 14 days before we write about it. We do not base reviews on app store listings, marketing materials, or press releases.
          </p>
          <p className="text-white/65 leading-relaxed mb-8">
            Our standard testing protocol:
          </p>
          <ol className="space-y-4 mb-6">
            {[
              'Install the app on a clean profile with no prior fitness data',
              'Complete onboarding with a standardized test profile (male, 30, intermediate fitness, goal: muscle gain)',
              'Log workouts and meals daily for 14 days minimum',
              'Intentionally vary performance (good week, poor week) to test AI adaptation',
              'Attempt to use every core feature at least three times',
              'Document any bugs, crashes, or UX friction that affected usability',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-white/65 text-sm leading-relaxed">
                <span className="text-[#FF6A00] font-bold font-mono shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Evaluation criteria */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-baseline gap-3">
            <span className="text-[#FF6A00]">—</span> Evaluation Criteria
          </h2>
          <div className="space-y-6">
            {criteria.map((c) => (
              <div key={c.title} className="border-l-2 border-white/10 pl-5 hover:border-[#FF6A00]/50 transition-colors">
                <h3 className="text-base font-bold text-white mb-1">{c.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Update policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-baseline gap-3">
            <span className="text-[#FF6A00]">—</span> Update Policy
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            AI fitness apps ship updates frequently. Pricing changes, features are added, and AI quality improves. We update our comparisons when:
          </p>
          <ul className="space-y-2 text-white/65 text-sm leading-relaxed">
            <li>• A competitor releases a major feature update that changes our recommendation</li>
            <li>• Pricing changes by more than 15%</li>
            <li>• An app is discontinued or acquired</li>
            <li>• We receive credible reader corrections with evidence</li>
          </ul>
          <p className="text-white/65 leading-relaxed mt-4">
            The <code className="text-[#FF6A00] text-xs bg-white/5 px-1 py-0.5 rounded">dateModified</code> field in our article schema and the &ldquo;Last updated&rdquo; date displayed in the article header always reflect the most recent content revision.
          </p>
        </section>

        {/* Reader corrections */}
        <section className="mb-14 border border-white/[0.08] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-2">Found an error?</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            If we have mis-stated a price, feature, or availability — or if an app has changed significantly since our last update — please reach out. We correct factual errors promptly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6A00] hover:underline"
          >
            Contact us →
          </Link>
        </section>

        {/* Related */}
        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Related</p>
          <div className="flex flex-col gap-3">
            {[
              { href: '/about', label: 'About the Fitnivo team' },
              { href: '/blog/best-ai-fitness-apps-2026', label: 'Best AI Fitness Apps in 2026 (Tested & Compared)' },
              { href: '/blog/best-ai-personal-trainer-apps-2026', label: 'Best AI Personal Trainer Apps in 2026' },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-sm text-white/70 hover:text-[#FF6A00] transition-colors flex items-center gap-2"
              >
                <span className="text-[#FF6A00]">→</span> {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
