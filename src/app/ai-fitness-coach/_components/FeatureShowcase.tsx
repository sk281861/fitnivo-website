'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScanEye, TrendingUp, Apple, Watch, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: ScanEye,
    title: 'Computer-Vision Form Correction & Rep Tracker',
    description:
      'No more second-guessing your technique. By utilizing your device\u2019s webcam or camera, our advanced motion-tracking AI automatically counts your reps, tracks your set tempos, and provides instant audio-visual feedback to correct your form in real-time.',
    image: '/images/fitness_coach_feature.webp',
    gradient: 'from-[#00F2FF] to-[#007AFF]',
  },
  {
    icon: TrendingUp,
    title: 'Progressive Overload & Adaptive Difficulty',
    description:
      'The Fitnivo algorithm continuously learns from your training history. If a set was too easy or an old injury flares up, the AI instantly recalibrates your difficulty, adjusts your targeted weights, and updates your upcoming circuit to keep you progressing safely.',
    image: '/ai_workout.webp',
    gradient: 'from-[#00FF85] to-[#38ef7d]',
  },
  {
    icon: Apple,
    title: 'All-in-One Nutrition & Diet Insights',
    description:
      'True fitness happens inside and outside the gym. Fitnivo provides turnkey meal-planning support and automated nutrition advice, serving as a comprehensive health coach that aligns your daily caloric intake and macros with your training load.',
    image: '/images/nutrition_intelligence_feature.webp',
    gradient: 'from-[#BF00FF] to-[#ee0979]',
  },
  {
    icon: Watch,
    title: 'Biometric Wearable Synchronization',
    description:
      'Sync seamlessly with Apple Health, Google Fit, and top wearables (including Fitbit and Garmin). By pulling your heart rate variability (HRV), sleep data, and daily activity levels, the AI calculates precise recovery optimization protocols.',
    image: '/images/biometric_sync_wearable.webp',
    gradient: 'from-[#00F2FF] to-[#007AFF]',
  },
  {
    icon: MessageCircle,
    title: '24/7 AI Fitness Coach Chat',
    description:
      'Imagine having a certified coach available every minute of the day. Use our intelligent companion chat to ask for immediate exercise modifications, quick healthy recipes, or a burst of motivation right before your workout.',
    image: '/ai_coach_avatar.webp',
    gradient: 'from-[#00FF85] to-[#38ef7d]',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="relative py-24 bg-[#0B0B0F] overflow-hidden" data-section="features">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,242,255,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The Science-Backed Features of{' '}
            <span className="gradient-text-fitness">Fitnivo</span>
          </motion.h2>
          <p className="text-lg text-[#A1A1A6] max-w-2xl mx-auto">
            Built on millions of real training data points and empirical fitness
            methodologies, Fitnivo acts as an all-in-one health, strength, and
                            nutrition companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/80 to-[#0B0B0F]/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
              </div>

              <div className="relative p-8 flex flex-col h-full min-h-[420px]">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-auto shadow-lg shadow-black/30`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <div className="mt-auto">
                  <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl p-5 -mx-1 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-white/20">
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[#A1A1A6] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
