"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Moon, Brain, Focus } from "lucide-react";

const MindfulnessSection = () => {
  const [phase, setPhase] = useState("Inhale");

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => p === "Inhale" ? "Hold" : p === "Hold" ? "Exhale" : "Inhale");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      padding: "160px 0", 
      background: "radial-gradient(circle at 70% 50%, rgba(0, 255, 133, 0.05) 0%, transparent 60%)",
      overflow: "hidden"
    }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "clamp(60px, 10vw, 80px)" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(36px, 8vw, 56px)", marginBottom: "24px", lineHeight: "1.1" }}>
            Mental Wellness is <br />
            <span className="gradient-text-mind">Non-Negotiable.</span>
          </h2>
          <p style={{ fontSize: "clamp(16px, 3vw, 20px)", color: "var(--text-muted)", marginBottom: "40px", lineHeight: "1.6" }}>
            Fitness is incomplete without mental clarity. Fitnivo senses your stress levels via wearable sync and triggers guided protocols to restore balance.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div className="glass" style={{ padding: "32px", textAlign: "left" }}>
              <Wind style={{ color: "var(--accent-mind)", marginBottom: "20px" }} size={32} />
              <h4 style={{ marginBottom: "12px", fontSize: "20px" }}>Guided Breathing</h4>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>Adaptive sessions based on heart rate variability protocols.</p>
            </div>
            <div className="glass" style={{ padding: "32px", textAlign: "left" }}>
              <Moon style={{ color: "var(--accent-mind)", marginBottom: "20px" }} size={32} />
              <h4 style={{ marginBottom: "12px", fontSize: "20px" }}>Sleep Recovery</h4>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>AI-driven wind-down protocols designed for deep restorative REM.</p>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Breathing Animation Background */}
          <motion.div
            animate={{
              scale: phase === "Inhale" ? 1.5 : phase === "Hold" ? 1.5 : 1,
              opacity: phase === "Inhale" ? 0.3 : 0.1
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "var(--accent-mind)",
              filter: "blur(60px)",
              zIndex: 1
            }}
          />

          {/* Main Breathing Circle */}
      <div style={{ 
        width: "clamp(280px, 90vw, 400px)", 
        height: "clamp(280px, 90vw, 400px)", 
        position: "relative", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        zIndex: 10,
        margin: "0 auto"
      }}>
        <motion.div
          animate={{
            scale: phase === "Inhale" ? 1.2 : phase === "Hold" ? 1.2 : 0.8,
          }}
          transition={{ duration: 4, ease: "easeInOut" }}
          style={{
            width: "clamp(180px, 60vw, 240px)",
            height: "clamp(180px, 60vw, 240px)",
            borderRadius: "50%",
            border: "2px solid rgba(0, 255, 133, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(20px)"
          }}
        >
              <div style={{ textAlign: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phase}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{ fontSize: "24px", fontWeight: "600", color: "var(--accent-mind)" }}
                  >
                    {phase}
                  </motion.div>
                </AnimatePresence>
                <div style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "8px" }}>04:00 Session</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessSection;
