"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Salad, Wind, BarChart3, BrainCircuit, Sparkles } from "lucide-react";

export default function AIFeaturesPage() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Smart Workout Intelligence",
      tagline: "Train smarter, not harder",
      desc: "Your workouts adapt to you in real-time.",
      points: [
        "Personalized routines based on your progress",
        "Intelligent adjustments to avoid plateaus",
        "Focus on efficiency, not just intensity"
      ],
      color: "#007AFF"
    },
    {
      icon: <Salad size={24} />,
      title: "AI Nutrition Guidance",
      tagline: "Fuel your body with precision",
      desc: "No more guesswork in your daily meals.",
      points: [
        "Smart calorie tracking with computer vision",
        "AI-based meal suggestions for your macros",
        "Nutritional insights tailored to your goals"
      ],
      color: "#30D158"
    },
    {
      icon: <Wind size={24} />,
      title: "Mindfulness & Mental Clarity",
      tagline: "A strong mind builds a strong body",
      desc: "Because fitness isn't just physical.",
      points: [
        "Guided breathing & focus sessions",
        "Daily mindfulness tracking and journaling",
        "Habit-building systems for consistency"
      ],
      color: "#AF52DE"
    }
  ];

  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "white" }}>
      <Navbar />

      <section style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "120px" }}
          >
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "12px", 
              padding: "12px 24px", 
              background: "rgba(255,255,255,0.03)", 
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.05)",
              marginBottom: "40px"
            }}>
              <BrainCircuit size={20} color="var(--accent-primary)" />
              <span style={{ fontSize: "14px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase" }}>AI-Powered Ecosystem</span>
            </div>
            <h1 style={{ 
              fontSize: "clamp(48px, 10vw, 100px)", 
              fontWeight: "900", 
              letterSpacing: "-0.05em", 
              lineHeight: "0.95",
              marginBottom: "40px"
            }}>
              The <span className="text-gradient">Intelligent</span> Coach.
            </h1>
            <p style={{ fontSize: "22px", color: "rgba(255,255,255,0.6)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
              Fitnivo isn’t just tracking your activity. It’s actively optimizing your fitness, nutrition, and mindset—using biological-grade intelligent systems.
            </p>
          </motion.div>

          {/* Grid of Features */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", marginBottom: "150px" }}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  padding: "60px 40px", 
                  background: "rgba(255,255,255,0.02)", 
                  border: "1px solid rgba(255,255,255,0.05)", 
                  borderRadius: "32px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "4px", 
                  background: feature.color 
                }} />
                <div style={{ color: feature.color, marginBottom: "32px" }}>{feature.icon}</div>
                <h3 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "16px" }}>{feature.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", marginBottom: "32px", fontWeight: "500" }}>{feature.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                  {feature.points.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ minWidth: "6px", height: "6px", background: feature.color, borderRadius: "50%", marginTop: "10px" }} />
                      <span style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(255,255,255,0.7)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "900", color: feature.color, textTransform: "uppercase", letterSpacing: "0.2em" }}>{feature.tagline}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress System Visualization */}
          <section style={{ marginBottom: "clamp(80px, 15vw, 150px)" }}>
            <div 
              className="stack-on-mobile"
              style={{ 
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)", 
                borderRadius: "clamp(32px, 8vw, 48px)", 
                padding: "clamp(40px, 8vw, 80px)", 
                border: "1px solid rgba(255,255,255,0.05)",
                gap: "clamp(40px, 10vw, 100px)",
                alignItems: "center"
              }}
            >
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                  System Architecture
                </h2>
                <h3 style={{ fontSize: "clamp(32px, 5vw, 40px)", fontWeight: "900", lineHeight: "1.05", marginBottom: "24px" }}>Real-Time Progress System</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
                  Everything works together. Workout data, calorie consumption, and mindfulness logs are synced in real-time to provide biological insights and visual progress tracking.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", flex: "1", minWidth: "120px", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px" }}>87%</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Efficiency Gain</div>
                  </div>
                  <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", flex: "1", minWidth: "120px", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: "900", marginBottom: "4px" }}>24/7</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Active Monitoring</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, position: "relative", width: "100%", maxWidth: "500px", margin: "0 auto" }}>
                 <div style={{ 
                   width: "100%", 
                   aspectRatio: "1", 
                   background: "radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, transparent 70%)", 
                   position: "absolute",
                   top: "50%",
                   left: "50%",
                   transform: "translate(-50%, -50%)"
                 }} />
                 <img 
                   src="/fitbuu_ai_coach.png" 
                   alt="Fitbuu AI Coach" 
                   style={{ width: "100%", borderRadius: "32px", position: "relative", zIndex: 1, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }} 
                 />
              </div>
            </div>
          </section>

          {/* Fitbuu Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              textAlign: "center", 
              padding: "clamp(60px, 10vw, 120px) 24px clamp(60px, 10vw, 100px) 24px", 
              background: "linear-gradient(to bottom, rgba(0, 242, 255, 0.05), transparent)", 
              border: "1px solid rgba(0, 242, 255, 0.15)",
              borderRadius: "48px",
              color: "white",
              position: "relative",
              marginTop: "clamp(60px, 10vw, 100px)",
              overflow: "visible"
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
                boxShadow: [
                  "0 0 30px rgba(0, 242, 255, 0.2)",
                  "0 0 60px rgba(0, 242, 255, 0.4)",
                  "0 0 30px rgba(0, 242, 255, 0.2)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ 
                width: "clamp(120px, 20vw, 180px)", 
                height: "clamp(120px, 20vw, 180px)", 
                margin: "calc(clamp(120px, 20vw, 180px) * -1.2) auto 40px auto",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #00F2FF",
                background: "#050505",
                position: "relative",
                zIndex: 10,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
              }}
            >
              <img 
                src="/ai_coach_avatar.png" 
                alt="Fitbuu AI Coach Avatar" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </motion.div>
            <h2 style={{ fontSize: "clamp(32px, 8vw, 48px)", fontWeight: "900", marginBottom: "24px", color: "white" }}>Meet Fitbuu</h2>
            <p style={{ fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "400", maxWidth: "800px", margin: "0 auto 60px auto", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
              More than an app—your intelligent companion. <span style={{ color: "#00F2FF", fontWeight: "700" }}>Fitbuu</span> understands your behaviors and patterns, guiding your daily actions to keep you consistent and focused.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.2em", color: "#00F2FF" }}>
              Powered by AI. Built for real transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
