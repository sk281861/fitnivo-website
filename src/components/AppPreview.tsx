"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Zap, Smartphone, Target } from "lucide-react";

const AppPreview = () => {
    return (
        <section id="app" style={{ 
          padding: "128px 0", 
          backgroundColor: "#0B0B0F", 
          position: "relative", 
          overflow: "hidden" 
        }}>
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
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Full biometric synchronization.</p>
                        </div>
                        <div style={{ textAlign: "right", borderRight: "1px solid rgba(255,255,255,0.05)", paddingRight: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Smart Logging</h3>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Automated set recognition.</p>
                        </div>
                    </div>
                    
                    {/* Phone Mockup */}
                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <motion.div 
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{ position: "relative" }} 
                          className="group"
                        >
                            <div style={{ 
                              position: "absolute", inset: 0, backgroundColor: "rgba(37, 99, 235, 0.15)", 
                              filter: "blur(100px)", borderRadius: "50%", transform: "scale(0.75)" 
                            }} />
                            
                            <div className="glass" style={{ 
                              width: "320px", height: "650px", backgroundColor: "#050505", 
                              borderRadius: "50px", border: "8px solid #151515", overflow: "hidden", 
                              position: "relative", boxShadow: "0 40px 100px rgba(0,0,0,0.8)" 
                            }}>
                                {/* Phone Notch */}
                                <div style={{ 
                                  position: "absolute", top: 0, left: 0, width: "100%", height: "32px", 
                                  display: "flex", alignItems: "center", justifyContent: "center", zIndex: 30 
                                }}>
                                    <div style={{ width: "80px", height: "20px", backgroundColor: "black", borderRadius: "0 0 20px 20px", border: "1px solid rgba(255,255,255,0.1)", borderTop: "none" }} />
                                </div>

                                {/* Mock App Screen Content */}
                                <div style={{ padding: "32px", paddingTop: "56px", display: "flex", flexDirection: "column", gap: "32px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
                                        <div>
                                            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em" }}>Thursday, April 23</div>
                                            <div style={{ fontSize: "24px", fontWeight: "800" }}>Hello, Alex</div>
                                        </div>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.05)" }} />
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
                                        <div style={{ position: "relative", width: "192px", height: "192px" }}>
                                            <svg style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                                                <circle cx="96" cy="96" r="88" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="transparent" />
                                                <motion.circle 
                                                  cx="96" cy="96" r="88" stroke="#60A5FA" strokeWidth="10" fill="transparent" 
                                                  strokeDasharray="552.92" 
                                                  initial={{ strokeDashoffset: 552.92 }}
                                                  whileInView={{ strokeDashoffset: 120 }}
                                                  transition={{ duration: 1.5, delay: 0.5 }}
                                                  strokeLinecap="round" 
                                                />
                                                <circle cx="96" cy="96" r="72" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="transparent" />
                                                <motion.circle 
                                                  cx="96" cy="96" r="72" stroke="#A855F7" strokeWidth="10" fill="transparent" 
                                                  strokeDasharray="452.39" 
                                                  initial={{ strokeDashoffset: 452.39 }}
                                                  whileInView={{ strokeDashoffset: 180 }}
                                                  transition={{ duration: 1.5, delay: 0.7 }}
                                                  strokeLinecap="round" 
                                                />
                                                <circle cx="96" cy="96" r="56" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="transparent" />
                                                <motion.circle 
                                                  cx="96" cy="96" r="56" stroke="#4ADE80" strokeWidth="10" fill="transparent" 
                                                  strokeDasharray="351.86" 
                                                  initial={{ strokeDashoffset: 351.86 }}
                                                  whileInView={{ strokeDashoffset: 90 }}
                                                  transition={{ duration: 1.5, delay: 0.9 }}
                                                  strokeLinecap="round" 
                                                />
                                            </svg>
                                            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: "800" }}>TOTAL SCORE</span>
                                                <span style={{ fontSize: "36px", fontWeight: "800", color: "white" }}>942</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        <div className="glass" style={{ padding: "12px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px", color: "white" }}>
                                            <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(96, 165, 250, 0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#60A5FA" }}>
                                                <Activity size={16} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: "8px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Body</div>
                                                <div style={{ fontSize: "12px", fontWeight: "700" }}>Leg Day Phase 1</div>
                                            </div>
                                        </div>
                                        <div className="glass" style={{ padding: "12px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px", color: "white" }}>
                                            <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(74, 222, 128, 0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ADE80" }}>
                                                <Wind size={16} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: "8px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Mind</div>
                                                <div style={{ fontSize: "12px", fontWeight: "700" }}>Deep Focus Session</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Navigation */}
                                <div style={{ 
                                  position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", 
                                  backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", 
                                  borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", 
                                  alignItems: "center", justifyContent: "space-around", paddingBottom: "8px" 
                                }}>
                                     <div style={{ color: "#60A5FA" }}><Zap size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)" }}><Smartphone size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)" }}><Activity size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)" }}><Target size={20} /></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Features */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "48px" }} className="app-features-right">
                        <div style={{ textAlign: "left", borderLeft: "1px solid rgba(255,255,255,0.05)", paddingLeft: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Social Challenges</h3>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Verified by neural check.</p>
                        </div>
                        <div style={{ textAlign: "left", borderLeft: "1px solid rgba(255,255,255,0.05)", paddingLeft: "24px", paddingTop: "8px", paddingBottom: "8px" }}>
                            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.02em" }}>Real-time Form Feedback</h3>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.15em" }}>Sub-millisecond latency.</p>
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
