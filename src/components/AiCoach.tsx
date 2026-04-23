"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

const AiCoach = () => {
  return (
    <section style={{ padding: "clamp(60px, 10vw, 120px) 0", background: "rgba(0,0,0,0.2)" }}>
      <div className="container stack-on-mobile" style={{ alignItems: "center", gap: "clamp(40px, 8vw, 80px)" }}>
        <div style={{ flex: "1 1 0%", width: "100%", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              overflow: "hidden",
              position: "relative",
              borderRadius: "40px"
            }}
          >
            <img src="/images/fitbuu.png" alt="Fitbuu AI Coach" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              right: "24px",
              padding: "20px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ fontWeight: "700", fontSize: "16px" }}>Fitbuu 🐻</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", fontStyle: "italic", lineHeight: "1.5" }}>
                "Based on your glycemic response to the apple, I recommend shifting your workout by 20 minutes for peak insulin sensitivity."
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{ flex: "1 1 0%", width: "100%" }}>
          <div className="glass-pill" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px", color: "var(--accent-fitness)" }}>
            <Sparkles size={16} />
            <span>Meet Your Digital Twin</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", marginBottom: "24px", lineHeight: "1.1" }}>A Coach That <br />Truly Knows You.</h2>
          <p style={{ fontSize: "20px", color: "var(--text-muted)", marginBottom: "40px", lineHeight: "1.6" }}>
            Fitbuu doesn't just give advice; it makes smart decisions across all three pillars. It learns from your heart rate, sleep quality, and even your mood to fine-tune your holistic protocol every second.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(0, 242, 255, 0.1)", color: "var(--accent-fitness)", height: "fit-content" }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: "4px" }}>Real-time Adjustments</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Dynamic protocol updates as you go about your day.</p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(191, 0, 255, 0.1)", color: "var(--accent-nutrition)", height: "fit-content" }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: "4px" }}>Privacy-First AI</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Your biological data is encrypted and remains entirely yours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCoach;
