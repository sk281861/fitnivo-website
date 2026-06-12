'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does an AI fitness coach build a custom workout plan?',
    answer:
      'An AI fitness coach utilizes machine learning models trained on vast databases of empirical sports science and real training sessions. When you set your profile up, the algorithm evaluates your current fitness levels, schedule constraints, and goals. As you log your weights and reps, it mathematically scales your training volume to ensure continuous progressive overload.',
  },
  {
    question: 'Can an AI coach completely replace a human personal trainer?',
    answer:
      'For the vast majority of fitness enthusiasts, yes. Fitnivo handles programming, weight tracking, recovery planning, and real-time form correction through motion tracking, eliminating the high cost and schedule restrictions of a human trainer. However, AI cannot replace a licensed physical therapist for severe rehabilitation, and it lacks the human-to-human physical accountability that some lifters prefer.',
  },
  {
    question: 'How accurate is the camera-based form correction feedback?',
    answer:
      'Our built-in AI Rep Tracker uses specialized computer-vision technology to map key joint angles and movement planes while you perform an exercise. It is highly accurate at identifying common mistakes, such as rounding your back during deadlifts or shallow depth during squats, giving you instant cues to fix your posture and protect your joints.',
  },
  {
    question: 'Does Fitnivo offer personalized nutrition and diet advice?',
    answer:
      'Yes. Fitnivo operates as an all-in-one health advisor. It doesn\'t just give you a generic macro calculator; it analyzes your training intensity, biometric expenditure, and goals to provide turnkey diet recommendations, healthy meal ideas, and nutritional insights to fuel your recovery.',
  },
  {
    question: 'Can I use the app without a wearable fitness tracker?',
    answer:
      'Absolutely. While syncing with a tracker or wearable unlocks advanced automatic recovery tracking (by analyzing sleep and active heart rate), you can easily enter your perceived exhaustion levels and manual data directly into the app to keep your AI training program highly accurate.',
  },
  {
    question: 'What is the benefit of the AI fitness coach chat feature?',
    answer:
      'The 24/7 interactive chat acts as your personal health companion. If you are traveling and find your hotel gym lacks weights, you can text the chat: "I only have resistance bands today, swap my chest workout." The AI will instantly generate an optimized substitute circuit for you. It can also assist with quick prompt commands for calculating meal macros on the go.',
  },
  {
    question: 'Is there a free trial available for the Fitnivo AI coach?',
    answer:
      'Yes! You can download Fitnivo on the App Store or Google Play and start exploring personalized workout routines, biometric data features, and smart coaching tools absolutely free.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#0B0B0F]" data-section="faq">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions About{' '}
            <span className="gradient-text-fitness">AI Fitness Coaching</span>
          </h2>
          <p className="text-lg text-[#A1A1A6]">
            Everything you need to know about the future of fitness.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00F2FF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 text-[#A1A1A6] leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
