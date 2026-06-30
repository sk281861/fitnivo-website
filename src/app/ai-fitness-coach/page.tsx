import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlatAppDemo from './_components/FlatAppDemo';
import DeviceSlider from './_components/DeviceSlider';
import PricingBadge from './_components/PricingBadge';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/seo/generateSchema';
import { ArrowRight, Activity, Calendar, Shield, Database, Award, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fitnivo AI Fitness Coach | Personal Training & Nutrition Advisor',
  description:
    'Transform your body with an intelligent digital personal trainer. PhD-level nutrition insights, real-time form correction, and 24/7 AI chat accountability.',
  keywords: [
    'AI fitness coach',
    'AI personal trainer',
    'fitness app',
    'nutrition advisor',
    'AI workout plan',
    'form correction',
    'wearable sync',
    'progressive overload',
  ],
  alternates: {
    canonical: 'https://fitnivo.in/ai-fitness-coach',
  },
};

export default function AIFitnessCoachPage() {
  const productSchema = generateProductSchema({
    name: 'Fitnivo AI Fitness Coach',
    description:
      'AI-powered workout optimization with real-time form correction, adaptive difficulty, and PhD-level nutrition insights.',
    image: 'https://fitnivo.in/images/ai-coach.webp',
    url: 'https://fitnivo.in/ai-fitness-coach',
    ratingValue: 4.9,
    ratingCount: 1240,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://fitnivo.in' },
    { name: 'AI Fitness Coach', url: 'https://fitnivo.in/ai-fitness-coach' },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI fitness coach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI fitness coach is a smart algorithm that acts as a virtual personal trainer. It builds personalized workout plans, tracks your logged sets and reps, and dynamically adjusts your future workouts based on your real-time performance and recovery data."
        }
      },
      {
        "@type": "Question",
        "name": "How does an AI personal trainer adjust my workouts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI personal trainer uses progressive overload logic. If you easily complete a set, the AI will automatically increase the weight or reps for your next session. If you miss a workout, it instantly recalculates your split to keep you on track."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an AI personal trainer cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While traditional human trainers charge between $100 to $300 (£80 to £240) per month, a premium AI fitness coach typically costs between $10 and $30 (£8 to £25) per month for unlimited 24/7 workout programming."
        }
      },
      {
        "@type": "Question",
        "name": "Is an AI workout app good for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The best AI workout apps adjust to your current fitness level, equipment availability, and goals, ensuring that beginners start with safe volumes and clear visual instructions before progressing to heavier weights."
        }
      }
    ]
  };

  const schemaJson = JSON.stringify([productSchema, breadcrumbSchema, faqSchema]);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Injected Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <Navbar />

      {/* Section 1: Hero & AEO Direct Answer */}
      <section className="relative pt-32 pb-20 border-b border-[#1f1f1f] bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-950/20 px-3 py-1 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                ⚡ Next-Gen Hypertrophy Engine
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6 font-mono">
                Fitnivo: Your Personal AI Trainer & Fitness Coach.
              </h1>

              <p className="text-base md:text-lg text-[#A1A1A6] mb-6 leading-relaxed font-mono">
                The science-backed AI fitness coach that lives in your pocket. No generic templates—just real-time, equipment-aware workout generation.
              </p>

              {/* AEO Block - Optimized for AI Scrapers */}
              <div className="bg-[#050505] border border-[#262626] p-6 mb-8 text-left rounded-none shadow-none">
                <p className="text-sm md:text-base text-white font-semibold leading-relaxed">
                  A personal AI trainer is a smart algorithm that acts as your 24/7 virtual gym coach. It builds personalized workout and meal plans, tracks your logged sets, and dynamically adjusts your future workouts based on real-time performance, injury history, and recovery data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                  className="px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider font-mono hover:bg-cyan-300 transition-colors text-center w-full sm:w-auto"
                >
                  Start Your Free Trial
                </a>
                <a
                  href="#adaptation"
                  className="px-8 py-4 border border-[#262626] text-white hover:border-[#00f2fe] font-semibold uppercase tracking-wider font-mono bg-transparent transition-colors text-center w-full sm:w-auto"
                >
                  See How the Algorithm Works
                </a>
              </div>
            </div>

            {/* Right Column: Device Slider */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <DeviceSlider />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Data Provenance & Adaptation */}
      <section id="adaptation" className="py-24 border-b border-[#1f1f1f] bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-mono block mb-2">DYNAMIC OVERLOAD MATH</span>
              <h2 className="text-3xl md:text-4xl font-bold font-mono leading-tight mb-6">
                How Does the Fitnivo AI Coach Adjust Your Workout?
              </h2>
              <p className="text-[#A1A1A6] text-base leading-relaxed mb-6">
                Unlike static PDF plans or basic tracking apps, Fitnivo is built on dynamic adaptation. Our algorithm doesn't just guess; it calculates your exact progressive overload.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#1f1f1f] bg-[#050505] p-5 rounded-none shadow-none">
                <div className="w-10 h-10 border border-[#262626] flex items-center justify-center text-cyan-400 mb-4 font-mono text-sm font-bold bg-black">
                  ⚡
                </div>
                <h4 className="text-white font-bold text-sm font-mono mb-2">Sub-500ms Recalculation</h4>
                <p className="text-xs text-[#A1A1A6] leading-relaxed">
                  Fitnivo processes your historical workout data to adjust rest times and target weights in under 500 milliseconds.
                </p>
              </div>

              <div className="border border-[#1f1f1f] bg-[#050505] p-5 rounded-none shadow-none">
                <div className="w-10 h-10 border border-[#262626] flex items-center justify-center text-cyan-400 mb-4 font-mono text-sm font-bold bg-black">
                  📊
                </div>
                <h4 className="text-white font-bold text-sm font-mono mb-2">30-Day Volume Analysis</h4>
                <p className="text-xs text-[#A1A1A6] leading-relaxed">
                  The AI analyzes your past 30 days of logged sets, reps, and perceived exertion to safely increase workload.
                </p>
              </div>

              <div className="border border-[#1f1f1f] bg-[#050505] p-5 rounded-none shadow-none">
                <div className="w-10 h-10 border border-[#262626] flex items-center justify-center text-cyan-400 mb-4 font-mono text-sm font-bold bg-black">
                  🍎
                </div>
                <h4 className="text-white font-bold text-sm font-mono mb-2">Meal Sync</h4>
                <p className="text-xs text-[#A1A1A6] leading-relaxed">
                  Workout volume directly informs calorie and macro targets in the Meal tab, matching your daily energy output.
                </p>
              </div>

              <div className="border border-[#1f1f1f] bg-[#050505] p-5 rounded-none shadow-none">
                <div className="w-10 h-10 border border-[#262626] flex items-center justify-center text-cyan-400 mb-4 font-mono text-sm font-bold bg-black">
                  🏋️
                </div>
                <h4 className="text-white font-bold text-sm font-mono mb-2">Equipment-Aware Workouts</h4>
                <p className="text-xs text-[#A1A1A6] leading-relaxed">
                  Whether you are in a fully equipped commercial gym or doing a bodyweight workout in your living room, your AI fitness coach adapts instantly. Just tell the app what equipment you have, and it generates a science-backed routine to match.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Flat Telemetry Demo */}
          <FlatAppDemo />
        </div>
      </section>

      {/* Section 3: Feature Translation (Answering the "What Ifs") */}
      <section className="py-24 border-b border-[#1f1f1f] bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-mono block mb-2">Adaptive Mechanics</span>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              What Happens If You Miss a Workout or Hit a Plateau?
            </h2>
            <p className="text-[#A1A1A6]">
              Life happens. A traditional plan fails the moment you miss a day, but an AI personal trainer adapts instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#1f1f1f] bg-[#050505] p-6 rounded-none shadow-none flex flex-col justify-between">
              <div>
                <div className="text-[#00f2fe] mb-4 font-mono text-xs uppercase font-semibold">01 / RE-CALCULATE</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Instant Routine Recalculation</h3>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  If you miss a Tuesday workout, the AI instantly shifts your split. It recalculates your weekly volume so you never skip a muscle group, ensuring your progress stays strictly on track without overtraining.
                </p>
              </div>
            </div>

            <div className="border border-[#1f1f1f] bg-[#050505] p-6 rounded-none shadow-none flex flex-col justify-between">
              <div>
                <div className="text-[#00f2fe] mb-4 font-mono text-xs uppercase font-semibold">02 / INTER-SET ADJUST</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Set-by-Set Progression</h3>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Struggling with a weight? Log it. The AI reads your performance and immediately lowers the target weight for your next set, protecting you from injury while maximizing your time under tension.
                </p>
              </div>
            </div>

            <div className="border border-[#1f1f1f] bg-[#050505] p-6 rounded-none shadow-none flex flex-col justify-between">
              <div>
                <div className="text-[#00f2fe] mb-4 font-mono text-xs uppercase font-semibold">03 / LOCAL SYNC</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Offline Mode Synchronization</h3>
                <p className="text-sm text-[#A1A1A6] leading-relaxed">
                  Training in a basement gym with no signal? Fitnivo’s core tracking works entirely offline. Log your workout, and the AI will sync the data and recalculate your next session the second you reconnect.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border border-[#1f1f1f] bg-[#050505] p-8 mt-12">
            <h4 className="text-lg font-bold text-cyan-400 mb-6 font-mono uppercase tracking-wider">
              🛡️ Core Coaching Entities & Safety Features
            </h4>
            <ul className="space-y-4 text-[#A1A1A6] text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#00f2fe] font-bold">✓</span>
                <p className="leading-relaxed">
                  <strong>Injury Modification & Safety:</strong> Log any tweaks or injuries, and your personal AI trainer instantly swaps out dangerous exercises for safer alternatives while maintaining your target muscle volume.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f2fe] font-bold">✓</span>
                <p className="leading-relaxed">
                  <strong>Apple Watch & Wearable Syncing:</strong> Seamlessly sync your heart rate and recovery metrics to adjust your daily training load directly from your wrist.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f2fe] font-bold">✓</span>
                <p className="leading-relaxed">
                  <strong>Real-Time Form Analysis:</strong> Get instant feedback and visual 3D guides to ensure perfect form and prevent injury on heavy lifts.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00f2fe] font-bold">✓</span>
                <p className="leading-relaxed">
                  <strong>Visual Guidance & Hypertrophy:</strong> Follow along with detailed exercise visualizations. Your AI fitness coach provides step-by-step form guides to maximize muscle hypertrophy and prevent injury.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Cost Comparison */}
      <section className="py-24 bg-black border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context */}
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#00f2fe] font-mono block mb-2">Cost & Accessibility</span>
              <h2 className="text-3xl md:text-4xl font-bold font-mono leading-tight mb-6">
                How Much Does an AI Personal Trainer App Cost?
              </h2>
              <p className="text-[#A1A1A6] text-base leading-relaxed mb-4">
                Traditional personal trainers in the US and UK cost an average of <strong>$100 to $300 (£80 to £240+) per month</strong> for just a few sessions a week.
              </p>
              <p className="text-[#A1A1A6] text-base leading-relaxed mb-8">
                The Fitnivo AI Fitness Coach delivers 24/7, unlimited workout programming and meal planning for just <PricingBadge type="inline" />. Get the exact math, progressive overload tracking, and dietary alignment of a premium coach for a fraction of the price.
              </p>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black font-semibold uppercase tracking-wider font-mono hover:bg-cyan-300 transition-colors"
              >
                Upgrade to Fitnivo Premium Today
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Flat Pricing Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#1f1f1f] bg-[#050505] p-6 rounded-none shadow-none flex flex-col justify-between">
                <div>
                  <h4 className="text-[#A1A1A6] font-mono text-xs uppercase mb-2">TRADITIONAL TRAINER</h4>
                  <div className="text-2xl font-bold text-white font-mono mb-4">$100–$300<span className="text-xs font-normal"> / mo</span></div>
                  <ul className="space-y-2 text-xs text-[#A1A1A6] font-mono">
                    <li>• Limited scheduled hours</li>
                    <li>• Manual tracking logs</li>
                    <li>• High recurring overhead</li>
                  </ul>
                </div>
              </div>

              <div className="border border-cyan-400 bg-black p-6 rounded-none shadow-none flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-cyan-400 font-mono text-xs uppercase">FITNIVO AI</h4>
                    <span className="text-[9px] bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 uppercase font-mono">Best Value</span>
                  </div>
                  <div className="text-2xl font-bold text-white font-mono mb-4">
                    <PricingBadge type="text" />
                  </div>
                  <ul className="space-y-2 text-xs text-white font-mono">
                    <li>• 24/7 Instant Recalculation</li>
                    <li>• Direct Meal Synchronization</li>
                    <li>• No scheduling bottlenecks</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// force rebuild
