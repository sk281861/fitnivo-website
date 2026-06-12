'use client';

import { motion } from 'framer-motion';

export default function DefinitionSection() {
  return (
    <section className="relative py-24 bg-[#0B0B0F]" data-section="definition">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#BF00FF]/[0.04] rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text-fitness relative z-10">
            What is an AI Fitness Coach?
          </h2>
          <div className="space-y-6 text-lg text-[#A1A1A6] leading-relaxed relative z-10">
            <p>
              An <strong className="text-white">AI fitness coach</strong> is an
              advanced software solution engineered to execute the exact tasks of
              a world-class human personal trainer. Unlike static, one-size-fits-all
              PDF exercise routines, Fitnivo uses cutting-edge artificial
              intelligence, machine learning, and computer vision to analyze your
              physical data, track your biometric trends, and build
              hyper-personalized workouts that adapt on the fly.
            </p>
            <p>
              Whether you want to build lean muscle, accelerate weight loss, or
              master your movement patterns, an AI personal trainer eliminates
              decision fatigue by telling you exactly what exercises to perform,
              the exact weights to lift, and how long to rest—all for a fraction
              of the cost of traditional gym training.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
