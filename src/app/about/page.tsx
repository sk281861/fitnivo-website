"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Target, Compass, Sparkles, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "white" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ 
        paddingTop: "clamp(120px, 15vw, 220px)", 
        paddingBottom: "clamp(60px, 8vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Ambient Glows */}
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "min(800px, 100%)", height: "600px", background: "radial-gradient(circle, rgba(0,122,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ 
              fontSize: "clamp(40px, 8vw, 100px)", 
              fontWeight: "900", 
              letterSpacing: "-0.05em", 
              lineHeight: "0.95",
              marginBottom: "32px"
            }}>
              Beyond tracking.<br />
              <span className="text-gradient">Intelligent systems.</span>
            </h1>
            <p style={{ 
              fontSize: "clamp(18px, 3vw, 24px)", 
              color: "rgba(255,255,255,0.6)", 
              maxWidth: "800px", 
              margin: "0 auto", 
              lineHeight: "1.5",
              fontWeight: "400"
            }}>
              Fitnivo is an intelligent system designed to optimize your body, fuel your lifestyle, and calm your mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0" }}>
        <div className="container">
          <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ flex: 1 }}
            >
              <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                Our Belief
              </h2>
              <p style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: "700", lineHeight: "1.3", marginBottom: "32px", letterSpacing: "-0.02em" }}>
                Real transformation happens when fitness, nutrition, and mental clarity <span style={{ color: "#00F2FF" }}>work together.</span>
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: "1.8" }}>
                Most apps focus on one part of the journey. Fitnivo connects all three—powered by advanced Artificial Intelligence to remove guesswork and noise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: "relative", flex: 1, width: "100%" }}
            >
              <div style={{
                width: "100%",
                height: "clamp(400px, 50vw, 600px)",
                position: "relative",
                borderRadius: "40px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <img 
                  src="/elite_performance_png_1776977986303.png" 
                  alt="Elite Performance" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
                <div style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: "linear-gradient(to top, #050505 0%, transparent 60%)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "16px"
                }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Activity size={20} color="#00F2FF" />
                    <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>Holistic Evolution</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "clamp(40px, 8vw, 100px)" }}>
            The Fitnivo Approach
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 10vw, 100px)" }}>
            <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 80px)", alignItems: "center" }}>
              <div style={{ flex: 1, height: "400px", borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", width: "100%" }}>
                <img 
                  src="/ai_system_core_png_1776977971209.png" 
                  alt="AI Intelligent Core" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>Our Systems</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", fontSize: "16px", marginBottom: "32px" }}>
                  At the core of Fitnivo is an adaptive AI system that learns from you. It doesn’t just track your actions—it understands them.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ padding: "14px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", color: "white", fontWeight: "600", fontSize: "13px" }}>Guided Workouts</div>
                  <div style={{ padding: "14px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", color: "white", fontWeight: "600", fontSize: "13px" }}>Intelligent Nutrition</div>
                  <div style={{ padding: "14px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", color: "white", fontWeight: "600", fontSize: "13px" }}>Consistency Systems</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <Compass size={40} color="rgba(255,255,255,0.1)" style={{ marginBottom: "24px" }} />
              <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "20px" }}>Why Fitnivo Exists</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8", fontSize: "18px" }}>
                Too many tools. Too much noise. No clear system. We saw a problem where people start strong but lose direction. We built Fitnivo to remove guesswork and provide structured, intelligent progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mind & Body Section */}
      <section style={{ padding: "clamp(80px, 12vw, 150px) 0" }}>
        <div className="container">
          <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 80px)", alignItems: "center" }}>
            <div style={{ 
              flex: 1,
              height: "clamp(400px, 50vw, 600px)", 
              borderRadius: "40px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "relative",
              width: "100%"
            }}>
              <img 
                src="/mindfulness_zen_png_1776977999197.png" 
                alt="Mindfulness Zen" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(to top, #050505 0%, transparent 40%)" 
              }} />
            </div>
            <div style={{ flex: 1.2 }}>
              <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "24px" }}>Fitness Beyond the Physical</h2>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", lineHeight: "1.6", marginBottom: "32px" }}>
                Strength isn’t just about your body. Your focus, discipline, and mental clarity define your results.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ fontWeight: "700", marginBottom: "8px", fontSize: "16px" }}>Mindfulness</h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Integrated practices for peak focus.</p>
                </div>
                <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <h4 style={{ fontWeight: "700", marginBottom: "8px", fontSize: "16px" }}>Habit Architect</h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Structured daily consistency systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Callout */}
      <section style={{ paddingBottom: "clamp(100px, 15vw, 200px)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              padding: "clamp(60px, 10vw, 100px) 24px", 
              background: "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
              borderRadius: "48px",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
              Our Vision
            </h2>
            <p style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "900", lineHeight: "1.2", maxWidth: "700px", margin: "0 auto", marginBottom: "48px" }}>
              To create a world where fitness is intelligent, personalized, and sustainable.
            </p>
            <div style={{ height: "1px", width: "80px", background: "#00F2FF", margin: "0 auto 48px auto" }} />
            <p style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "#00F2FF", fontWeight: "800" }}>
              Fitnivo isn’t just tracking your journey.<br />
              It’s building the system that transforms it.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
