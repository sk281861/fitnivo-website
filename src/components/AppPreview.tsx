"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Zap, Smartphone, Target } from "lucide-react";
import DeviceSlider from "@/app/ai-fitness-coach/_components/DeviceSlider";

const AppPreview = () => {
    return (
        <section id="app" style={{ 
          padding: "clamp(80px, 12vw, 160px) 0", 
          backgroundColor: "#0B0B0F", 
          position: "relative", 
          overflow: "hidden" 
        }} data-section="faq">
            {/* Decorative UI elements - Abstract Glows */}
            <div style={{ 
              position: "absolute", top: 0, right: 0, width: "50vh", height: "50vh", 
              backgroundColor: "rgba(191, 0, 255, 0.1)", filter: "blur(150px)", 
              borderRadius: "50%", transform: "translate(50%, -50%)" 
            }} />
            <div style={{ 
              position: "absolute", bottom: 0, left: 0, width: "50vh", height: "50vh", 
              backgroundColor: "rgba(0, 242, 255, 0.1)", filter: "blur(150px)", 
              borderRadius: "50%", transform: "translate(-50%, 50%)" 
            }} />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div style={{ 
                  textAlign: "center", maxWidth: "800px", margin: "0 auto 80px auto", 
                  display: "flex", flexDirection: "column", gap: "24px" 
                }}>
                    <h2 style={{ 
                      fontSize: "clamp(48px, 8vw, 84px)", fontWeight: "900", 
                      letterSpacing: "-0.04em", lineHeight: "1.1" 
                    }}>
                      THE FUTURE <br/>
                      <span style={{
                        background: "linear-gradient(90deg, #60A5FA, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>IN YOUR POCKET.</span>
                    </h2>
                    <p style={{ fontSize: "20px", color: "var(--text-muted)", fontWeight: "500", lineHeight: "1.6" }}>
                      Designed with architectural intent. Fitnivo's interface removes friction and focuses on pure performance data.
                    </p>
                </div>

                <div style={{ 
                  display: "flex", flexDirection: "row", gap: "32px", alignItems: "center", justifyContent: "center",
                  flexWrap: "wrap"
                }} className="app-preview-grid">
                    
                    {/* Left Features */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "48px" }} className="app-features-left">
                        <div style={{ textAlign: "right", borderRight: "1px solid rgba(255,255,255,0.05)", paddingRight: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Live Progress Rings</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Full biometric synchronization.</p>
                        </div>
                        <div style={{ textAlign: "right", borderRight: "1px solid rgba(255,255,255,0.05)", paddingRight: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Smart Logging</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Automated set recognition.</p>
                        </div>
                    </div>
                    
                    {/* Phone Mockup */}
                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <motion.div 
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{ position: "relative" }} 
                          className="flex justify-center w-full"
                        >
                            <DeviceSlider />
                        </motion.div>
                    </div>

                    {/* Right Features */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "48px" }} className="app-features-right">
                        <div style={{ textAlign: "left", borderLeft: "1px solid rgba(255,255,255,0.05)", paddingLeft: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Social Challenges</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Verified by neural check.</p>
                        </div>
                        <div style={{ textAlign: "left", borderLeft: "1px solid rgba(255,255,255,0.05)", paddingLeft: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Real-time Form Feedback</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Sub-millisecond latency.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
              @media (max-width: 991px) {
                .app-preview-grid {
                  flex-direction: column !important;
                }
                .app-features-left, .app-features-right {
                  text-align: center !important;
                  border: none !important;
                  padding: 0 !important;
                  align-items: center !important;
                }
                .app-features-left div, .app-features-right div {
                  text-align: center !important;
                  border: none !important;
                  padding: 0 !important;
                }
              }
            `}</style>
        </section>
    );
};

export default AppPreview;
