"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Flame, Heart, Brain } from "lucide-react";

const AppDashboard = () => {
  return (
    <section style={{ padding: "120px 0", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontSize: "56px", marginBottom: "64px" }}>The Command Center for <br />Your Entire Lifecycle.</h2>
        
        <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
          {/* Main Dashboard UI Mockup */}
          <div className="glass" style={{
            padding: "40px",
            borderRadius: "32px",
            textAlign: "left",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
              <div>
                <h3 style={{ fontSize: "28px", marginBottom: "8px" }}>Protocol Active</h3>
                <p style={{ color: "var(--text-muted)" }}>Thursday, April 23</p>
              </div>
              <div className="glass-pill" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-mind)", boxShadow: "0 0 10px var(--accent-mind)" }} />
                <span>AI Sync: Optimal</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "40px" }}>
              {/* Progress Rings Area */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <div className="glass" style={{ flex: "1", minWidth: "200px", padding: "24px", textAlign: "center", position: "relative" }}>
                  <svg width="140" height="140" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <motion.circle 
                      cx="50" cy="50" r="45" fill="none" stroke="var(--accent-fitness)" strokeWidth="8" 
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 70 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Activity size={32} color="var(--accent-fitness)" />
                  </div>
                  <h4 style={{ marginTop: "16px" }}>Fitness</h4>
                  <div style={{ color: "var(--text-muted)", fontSize: "14px" }}>82% of Goal</div>
                </div>

                <div className="glass" style={{ flex: "1", minWidth: "200px", padding: "24px", textAlign: "center", position: "relative" }}>
                  <svg width="140" height="140" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                    <motion.circle 
                      cx="50" cy="50" r="45" fill="none" stroke="var(--accent-nutrition)" strokeWidth="8" 
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 120 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <Flame size={32} color="var(--accent-nutrition)" />
                  </div>
                  <h4 style={{ marginTop: "16px" }}>Nutrition</h4>
                  <div style={{ color: "var(--text-muted)", fontSize: "14px" }}>1,840 kcal / 2,200</div>
                </div>
              </div>

              {/* Side Panels */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="glass" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(0, 255, 133, 0.1)", color: "var(--accent-mind)" }}>
                    <Brain size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>Focus Session</div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>15 mins remaining</div>
                  </div>
                </div>
                
                <div className="glass" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(0, 242, 255, 0.1)", color: "var(--accent-fitness)" }}>
                    <Heart size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>Heart Rate</div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>64 BPM (Steady)</div>
                  </div>
                </div>

                <div style={{ marginTop: "auto", padding: "20px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px dashed rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "8px" }}>AI COACH TIP (Fitbuu 🐻)</div>
                  <div style={{ fontSize: "14px" }}>"Recovery is higher than yesterday. You can push 5% harder on today's Deadlift session."</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ position: "absolute", top: "-40px", right: "-60px", zIndex: -1 }}
          >
            <div className="glass" style={{ width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(191, 0, 255, 0.1) 0%, transparent 70%)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDashboard;
