'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PremiumCTA() {
  return (
    <section className="relative py-28 bg-[#0B0B0F] overflow-hidden" data-section="cta">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F2FF]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            Ready to Start?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Body with{' '}
            <span className="gradient-text-fitness">Intelligent Coaching</span>
          </h2>
          <p className="text-lg text-[#A1A1A6] mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing the power of
            AI-driven fitness coaching. Download Fitnivo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00F2FF] to-[#007AFF] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:scale-[1.02] w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Download Fitnivo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 w-full sm:w-auto border border-white/10"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
