"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Zap, Salad, Wind, BarChart3, BrainCircuit, Sparkles, 
  Smartphone, Activity, ShieldCheck, Repeat, TrendingUp, 
  ChevronRight, ArrowRight 
} from "lucide-react";

export default function AIFeaturesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } 
    }
  };

  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "white" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ 
        paddingTop: "clamp(120px, 20vw, 220px)", 
        paddingBottom: "clamp(60px, 10vw, 120px)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Ambient Glows */}
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ textAlign: "center" }}
          >
            <motion.div
              variants={itemVariants}
              className="glass-pill"
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                marginBottom: "32px",
                fontSize: "12px",
                fontWeight: "700",
                color: "var(--accent-fitness)",
                textTransform: "uppercase",
                letterSpacing: "0.2em"
              }}
            >
              <Sparkles size={14} />
              <span>The Future of Human Performance</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontSize: "clamp(48px, 12vw, 130px)", 
                fontWeight: "900", 
                letterSpacing: "-0.06em", 
                lineHeight: "0.85",
                marginBottom: "40px",
                textTransform: "uppercase"
              }}
            >
              Fitnivo <span className="text-gradient" style={{ display: "block", marginTop: "10px" }}>Features</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: "clamp(20px, 4vw, 24px)", 
                color: "rgba(255,255,255,0.5)", 
                maxWidth: "700px", 
                margin: "0 auto", 
                lineHeight: "1.4",
                fontWeight: "400"
              }}
            >
              Not just a fitness app. A complete AI-powered system for <span style={{ color: "white", fontWeight: "600" }}>body, fuel, and mind.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars: Body, Fuel, Mind */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
            
            {/* Pillar: AI Workout Intelligence (Body) */}
            <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }}>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ flex: 1.2 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ padding: "10px", background: "rgba(0,242,255,0.1)", borderRadius: "12px", color: "var(--accent-fitness)" }}>
                    <Zap size={24} />
                  </div>
                  <h2 style={{ fontSize: "14px", fontWeight: "800", color: "var(--accent-fitness)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Body Optimization
                  </h2>
                </div>
                <h3 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "24px" }}>
                  🧠 AI Workout Intelligence
                </h3>
                <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", lineHeight: "1.6" }}>
                  Train with precision. Our brain-level intelligence adapts your physical load in real-time.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                  {[
                    "Adaptive workout plans based on your progress",
                    "Smart load and intensity adjustments",
                    "Plateau detection and optimization"
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ width: "24px", height: "1px", background: "var(--accent-fitness)" }} />
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "rgba(255,255,255,0.5)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "20px 24px", background: "rgba(0,242,255,0.05)", borderRadius: "16px", border: "1px solid rgba(0,242,255,0.1)", display: "inline-block", fontWeight: "700", color: "white" }}>
                  👉 Every session is optimized, not random
                </div>
              </motion.div>
              <div style={{ flex: 1, position: "relative" }}>
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   style={{ 
                    width: "100%", 
                    borderRadius: "40px", 
                    overflow: "hidden", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 30px 60px rgba(0,242,255,0.1)"
                  }}
                 >
                   <img src="/ai_workout.png" alt="AI Workout" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
                 </motion.div>
              </div>
            </div>

            {/* Pillar: Smart Nutrition (Fuel) */}
            <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 100px)", alignItems: "center", flexDirection: "row-reverse" }}>
              <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 style={{ flex: 1.2 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ padding: "10px", background: "rgba(191,0,255,0.1)", borderRadius: "12px", color: "var(--accent-nutrition)" }}>
                    <Salad size={24} />
                  </div>
                  <h2 style={{ fontSize: "14px", fontWeight: "800", color: "var(--accent-nutrition)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Fuel Calibration
                  </h2>
                </div>
                <h3 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "24px" }}>
                  🥗 Smart Nutrition System
                </h3>
                <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", lineHeight: "1.6" }}>
                  Eat with clarity. Remove the friction of tracking and focus on biological results.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                  {[
                    "Intelligent calorie tracking",
                    "AI-powered meal insights",
                    "Macro balance tailored to your goals"
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ width: "24px", height: "1px", background: "var(--accent-nutrition)" }} />
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "rgba(255,255,255,0.5)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "20px 24px", background: "rgba(191,0,255,0.05)", borderRadius: "16px", border: "1px solid rgba(191,0,255,0.1)", display: "inline-block", fontWeight: "700", color: "white" }}>
                  👉 Fuel your performance, not just your hunger
                </div>
              </motion.div>
              <div style={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ 
                    width: "100%", 
                    borderRadius: "40px", 
                    overflow: "hidden", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 30px 60px rgba(191,0,255,0.1)"
                  }}
                >
                   <img src="/ai_nutrition.png" alt="AI Nutrition" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
                </motion.div>
              </div>
            </div>

            {/* Pillar: Mindfulness Engine (Mind) */}
            <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }}>
              <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 style={{ flex: 1.2 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ padding: "10px", background: "rgba(0,255,133,0.1)", borderRadius: "12px", color: "var(--accent-mind)" }}>
                    <Wind size={24} />
                  </div>
                  <h2 style={{ fontSize: "14px", fontWeight: "800", color: "var(--accent-mind)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Mindset Matrix
                  </h2>
                </div>
                <h3 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "24px" }}>
                  🧘 Mindfulness Engine
                </h3>
                <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", lineHeight: "1.6" }}>
                  Balance your mind. Because every physical breakthrough begins within.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                  {[
                    "Guided breathing and focus sessions",
                    "Stress and consistency tracking",
                    "Daily mental clarity routines"
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ width: "24px", height: "1px", background: "var(--accent-mind)" }} />
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "rgba(255,255,255,0.5)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "20px 24px", background: "rgba(0,255,133,0.05)", borderRadius: "16px", border: "1px solid rgba(0,255,133,0.1)", display: "inline-block", fontWeight: "700", color: "white" }}>
                  👉 Because discipline starts in the mind
                </div>
              </motion.div>
              <div style={{ flex: 1 }}>
                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   style={{ 
                    width: "100%", 
                    borderRadius: "40px", 
                    overflow: "hidden", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 30px 60px rgba(0,255,133,0.1)"
                  }}
                >
                   <img src="/ai_mindfulness.png" alt="AI Mindfulness" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "900", marginBottom: "20px" }}>📊 Premium Dashboard UI</h2>
            <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.4)", maxWidth: "800px", margin: "0 auto" }}>
              A system you can see. Clean, distraction-free, and alive with your data.
            </p>
          </div>
          
          <div style={{ 
            padding: "80px 24px", 
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)", 
            borderRadius: "48px",
            border: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center"
          }}>
             <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginBottom: "60px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "120px", height: "120px", background: "radial-gradient(circle, rgba(0,242,255,0.2) 0%, transparent 70%)", borderRadius: "50%", border: "4px solid var(--accent-fitness)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "24px" }}>
                    75%
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "var(--accent-fitness)", textTransform: "uppercase" }}>Workout</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "120px", height: "120px", background: "radial-gradient(circle, rgba(191,0,255,0.2) 0%, transparent 70%)", borderRadius: "50%", border: "4px solid var(--accent-nutrition)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "24px" }}>
                    62%
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "var(--accent-nutrition)", textTransform: "uppercase" }}>Calories</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "120px", height: "120px", background: "radial-gradient(circle, rgba(0,255,133,0.2) 0%, transparent 70%)", borderRadius: "50%", border: "4px solid var(--accent-mind)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "24px" }}>
                    90%
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: "800", color: "var(--accent-mind)", textTransform: "uppercase" }}>Mind</span>
                </div>
             </div>
             <p style={{ fontSize: "18px", color: "white", fontWeight: "700", letterSpacing: "0.05em" }}>
                👉 Data that feels alive, not boring
             </p>
          </div>
        </div>
      </section>

      {/* Speed & performance */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          <div className="stack-on-mobile" style={{ gap: "60px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div style={{ padding: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "100px", width: "fit-content", marginBottom: "24px" }}>
                <Zap size={20} color="#FFD700" />
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "24px" }}>⚡ Ultra-Fast, Smooth Experience</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "20px", lineHeight: "1.6", marginBottom: "32px" }}>
                Built for performance. Instant loading, fluid transitions, and zero latency.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ fontSize: "15px", fontWeight: "600", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "8px", height: "8px", background: "#FFD700", borderRadius: "50%" }} />
                  Instant loading screens
                </div>
                <div style={{ fontSize: "15px", fontWeight: "600", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "8px", height: "8px", background: "#FFD700", borderRadius: "50%" }} />
                  Smooth animations and transitions
                </div>
              </div>
              <div style={{ marginTop: "48px", fontWeight: "800", color: "white" }}>
                👉 No lag. No friction. Just flow.
              </div>
            </div>
            <div style={{ flex: 1, height: "300px", background: "linear-gradient(90deg, #050505 0%, #00F2FF 50%, #050505 100%)", opacity: 0.1, borderRadius: "100px", filter: "blur(40px)" }} />
          </div>
        </div>
      </section>

      {/* Fitbuu Section */}
      <section style={{ padding: "100px 0", background: "#08080C" }}>
        <div className="container">
          <div className="stack-on-mobile" style={{ gap: "100px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
               <motion.div
                 initial={{ opacity: 0, rotate: -10 }}
                 whileInView={{ opacity: 1, rotate: 0 }}
                 viewport={{ once: true }}
               >
                 <img src="/fitbuu_coach.png" alt="Fitbuu AI Coach" style={{ width: "100%", borderRadius: "48px", boxShadow: "0 0 100px rgba(0,242,255,0.2)" }} />
               </motion.div>
            </div>
            <div style={{ flex: 1.5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <BrainCircuit size={24} color="var(--accent-fitness)" />
                <h2 style={{ fontSize: "14px", fontWeight: "800", color: "var(--accent-fitness)", letterSpacing: "0.2em", textTransform: "uppercase" }}>The Architect</h2>
              </div>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "900", marginBottom: "32px" }}>🤖 Fitbuu — Your AI Coach</h2>
              <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: "1.6" }}>
                More than guidance. It learns your physiological and behavioral patterns to build the system that works for YOU.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "48px" }}>
                 <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <h4 style={{ fontWeight: "800", marginBottom: "8px" }}>Pattern Recognition</h4>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>Learns your habits and rhythms.</p>
                 </div>
                 <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <h4 style={{ fontWeight: "800", marginBottom: "8px" }}>Proactive Hints</h4>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>Suggests actions based on data.</p>
                 </div>
              </div>
              <p style={{ fontSize: "18px", fontWeight: "800", color: "white" }}>
                👉 Your personal system, always evolving
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Tracking loop */}
      <section style={{ padding: "150px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "12px", fontWeight: "800", color: "rgba(255,255,255,0.3)", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "40px" }}>The Ecosystem</h2>
          <h2 style={{ fontSize: "clamp(32px, 8vw, 84px)", fontWeight: "900", marginBottom: "40px", lineHeight: "1" }}>🔁 Daily System Tracking</h2>
          <p style={{ fontSize: "24px", color: "rgba(255,255,255,0.5)", maxWidth: "800px", margin: "0 auto 80px auto" }}>
            Everything is connected in one intelligent, closed-loop system.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ padding: "32px", background: "rgba(255,255,255,0.03)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", width: "200px" }}>
              <Activity size={32} color="var(--accent-fitness)" style={{ marginBottom: "16px" }} />
              <div style={{ fontWeight: "700" }}>Workouts</div>
            </div>
            <ArrowRight size={24} color="rgba(255,255,255,0.1)" />
            <div style={{ padding: "32px", background: "rgba(255,255,255,0.03)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", width: "200px" }}>
              <Salad size={32} color="var(--accent-nutrition)" style={{ marginBottom: "16px" }} />
              <div style={{ fontWeight: "700" }}>Nutrition</div>
            </div>
            <ArrowRight size={24} color="rgba(255,255,255,0.1)" />
            <div style={{ padding: "32px", background: "rgba(255,255,255,0.03)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", width: "200px" }}>
              <Wind size={32} color="var(--accent-mind)" style={{ marginBottom: "16px" }} />
              <div style={{ fontWeight: "700" }}>Mindset</div>
            </div>
          </div>
          
          <p style={{ marginTop: "80px", fontSize: "20px", fontWeight: "800" }}>
            👉 One system. Total control.
          </p>
        </div>
      </section>

      {/* Habit & Streak Engine */}
      <section style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <div className="stack-on-mobile" style={{ gap: "80px", alignItems: "center" }}>
            <div style={{ flex: 1.2 }}>
              <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: "900", marginBottom: "32px" }}>🎯 Habit & Streak Engine</h2>
              <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: "1.6" }}>
                Consistency simplified. Small wins, daily protocols, and unstoppable streaks.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "16px" }}>
                  <TrendingUp size={24} color="#FF9500" />
                  <span style={{ fontWeight: "600" }}>Daily goals across all pillars</span>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "16px" }}>
                  <Sparkles size={24} color="#FFD700" />
                  <span style={{ fontWeight: "600" }}>Streak tracking with rewards</span>
                </div>
              </div>
              <p style={{ marginTop: "48px", fontSize: "18px", fontWeight: "800", color: "#FF9500" }}>
                👉 Small wins → big transformation
              </p>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ width: "100%", height: "400px", borderRadius: "48px", overflow: "hidden", position: "relative" }}>
                <img src="/habit_mock.png" alt="Habit Tracking" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: "80px", fontWeight: "900", color: "#FF9500" }}>14</div>
                    <div style={{ fontSize: "20px", fontWeight: "700", marginLeft: "10px", marginTop: "30px" }}>DAY STREAK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section style={{ padding: "100px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <ShieldCheck size={60} color="#30D158" style={{ marginBottom: "32px" }} />
          <h2 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "20px" }}>🔐 Smart & Secure</h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", maxWidth: "600px", margin: "0 auto 40px auto" }}>
            Your data is private, encrypted, and built with commercial-grade reliability.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", fontSize: "14px", fontWeight: "800", opacity: 0.6 }}>
            <span>SECURE AUTHENTICATION</span>
            <span>DATA ENCRYPTION</span>
            <span>CLOUD SYNC</span>
          </div>
          <p style={{ marginTop: "60px", fontSize: "18px", fontWeight: "800" }}>
            👉 Your data stays protected
          </p>
        </div>
      </section>

      {/* Final Comparison Callout */}
      <section style={{ padding: "150px 24px" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
              borderRadius: "60px",
              padding: "clamp(60px, 10vw, 120px) 24px",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center"
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "var(--accent-fitness)", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "40px" }}>
              The Fitnivo Edge
            </h2>
            <h3 style={{ fontSize: "clamp(32px, 8vw, 84px)", fontWeight: "900", marginBottom: "40px", lineHeight: "1" }}>
              🔥 What Makes Fitnivo Different
            </h3>
            <div style={{ fontSize: "28px", color: "rgba(255,255,255,0.6)", maxWidth: "800px", margin: "0 auto 60px auto", lineHeight: "1.4" }}>
              <p style={{ marginBottom: "24px" }}>Most apps track your actions.</p>
              <p style={{ color: "white", fontWeight: "800" }}>Fitnivo builds your system.</p>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "80px", fontWeight: "800", fontSize: "14px", color: "#00F2FF" }}>
              <span>AI</span>
              <div style={{ width: "4px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", marginTop: "8px" }} />
              <span>FITNESS</span>
              <div style={{ width: "4px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", marginTop: "8px" }} />
              <span>NUTRITION</span>
              <div style={{ width: "4px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", marginTop: "8px" }} />
              <span>MINDFULNESS</span>
            </div>

            <p style={{ fontSize: "clamp(24px, 5vw, 48px)", fontWeight: "900", color: "white", letterSpacing: "-0.04em" }}>
              This isn’t tracking.<br />
              <span className="text-gradient">This is transformation.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
