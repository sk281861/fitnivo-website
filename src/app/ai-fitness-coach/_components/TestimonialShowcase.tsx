'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Fitnivo transformed my workouts. The AI coaching is like having a personal trainer in my pocket.',
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    avatar: '/images/fitbuu.webp',
    rating: 5,
  },
  {
    quote:
      'The form correction feature has prevented injuries and improved my technique significantly.',
    name: 'Mike Chen',
    role: 'CrossFit Athlete',
    avatar: '/images/fitbuu.webp',
    rating: 5,
  },
  {
    quote:
      'I love how the app adapts to my recovery. It knows when I need to push and when to rest.',
    name: 'Emma Davis',
    role: 'Marathon Runner',
    avatar: '/images/fitbuu.webp',
    rating: 5,
  },
];

export default function TestimonialShowcase() {
  return (
    <section className="relative py-24 bg-[#0B0B0F]" data-section="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by{' '}
            <span className="gradient-text-fitness">Real Users</span>
          </h2>
          <p className="text-lg text-[#A1A1A6]">
            See how Fitnivo is transforming fitness for thousands of users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden hover:border-white/20 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, ri) => (
                  <Star
                    key={ri}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-white/10 absolute top-6 right-6" />
              <p className="text-white/90 mb-6 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00F2FF] to-[#BF00FF] flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[#A1A1A6]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
