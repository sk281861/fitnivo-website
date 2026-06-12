'use client';

import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

type Row = { feature: string; fitnivo: string; traditional: string; trainer: string; badge?: string };

const rows: Row[] = [
  { feature: 'Custom Workout Plans', fitnivo: 'Dynamic & Real-Time', traditional: 'Static/Pre-made Templates', trainer: 'Weekly/Monthly Changes' },
  { feature: 'Real-Time Form Feedback', fitnivo: 'Yes (Camera Vision)', badge: 'Coming Soon', traditional: 'No', trainer: 'Yes (In-person only)' },
  { feature: 'Turnkey Diet & Nutrition', fitnivo: 'Included', traditional: 'Add-on feature', trainer: 'Often separate fee' },
  { feature: 'Availability', fitnivo: '24/7 Instant Chat', traditional: 'None', trainer: 'Limited to session hours' },
  { feature: 'Average Monthly Cost', fitnivo: 'Micro-subscription', traditional: 'Basic tracking fee', trainer: '₹3,000 – ₹8,000+ ($100-$300+)' },
];

export default function ComparisonTable() {
  return (
    <section className="relative py-24 bg-[#0B0B0F]" data-section="comparison">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI Personal Trainer vs.{' '}
            <span className="gradient-text-fitness">Traditional Training</span>
          </h2>
          <p className="text-lg text-[#A1A1A6]">
            See why Fitnivo is the most comprehensive fitness solution on the market.
          </p>
        </motion.div>

        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="py-5 px-6 text-sm font-semibold text-[#A1A1A6]">Feature</th>
                  <th className="py-5 px-6 text-sm font-bold text-[#00F2FF]">Fitnivo AI Coach</th>
                  <th className="py-5 px-6 text-sm font-bold text-gray-400">Traditional Apps</th>
                  <th className="py-5 px-6 text-sm font-bold text-gray-400">Human Personal Trainer</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="py-5 px-6 text-white font-medium text-sm md:text-base">{row.feature}</td>
                    <td className="py-5 px-6 text-[#00F2FF] font-semibold text-sm md:text-base">
                      {row.fitnivo}
                      {row.badge && (
                        <span className="ml-2 text-[10px] text-amber-400 font-medium">{row.badge}</span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-gray-400 text-sm md:text-base">{row.traditional}</td>
                    <td className="py-5 px-6 text-gray-400 text-sm md:text-base">{row.trainer}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
