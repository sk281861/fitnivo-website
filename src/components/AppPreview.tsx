"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Zap, Smartphone, Target } from "lucide-react";

const AppPreview = () => {
    return (
        <section id="app" style={{ 
          padding: "clamp(60px, 12vw, 128px) 0", 
          backgroundColor: "#0B0B0F", 
          position: "relative", 
          overflow: "hidden" 
        }}>
            {/* Decorative UI elements - Abstract Glows */}
            <div style={{ 
              position: "absolute", top: 0, right: 0, width: "clamp(200px, 50vw, 50vh)", height: "clamp(200px, 50vw, 50vh)", 
              backgroundColor: "rgba(191, 0, 255, 0.1)", filter: "blur(150px)", 
              borderRadius: "50%", transform: "translate(50%, -50%)" 
            }} />
            <div style={{ 
              position: "absolute", bottom: 0, left: 0, width: "clamp(200px, 50vw, 50vh)", height: "clamp(200px, 50vw, 50vh)", 
              backgroundColor: "rgba(0, 242, 255, 0.1)", filter: "blur(150px)", 
              borderRadius: "50%", transform: "translate(-50%, 50%)" 
            }} />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div style={{ 
                  textAlign: "center", maxWidth: "800px", margin: "0 auto clamp(40px, 8vw, 80px) auto", 
                  display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)",
                  padding: "0 clamp(12px, 2vw, 24px)"
                }}>
                    <h2 style={{ 
                      fontSize: "clamp(32px, 7vw, 84px)", fontWeight: "900", 
                      letterSpacing: "-0.04em", lineHeight: "1.1" 
                    }}>
                      THE FUTURE <br/>
                      <span style={{
                        background: "linear-gradient(90deg, #60A5FA, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>IN YOUR POCKET.</span>
                    </h2>
                    <p style={{ 
                      fontSize: "clamp(14px, 3vw, 20px)", 
                      color: "var(--text-muted)", 
                      fontWeight: "500", 
                      lineHeight: "1.6",
                      padding: "0 clamp(8px, 2vw, 16px)"
                    }}>
                      Designed with architectural intent. Fitnivo's interface removes friction and focuses on pure performance data.
                    </p>
                </div>

                <div style={{ 
                  display: "flex", flexDirection: "row", gap: "clamp(20px, 5vw, 32px)", alignItems: "stretch", justifyContent: "center",
                  flexWrap: "wrap"
                }} className="app-preview-grid">
                    
                    {/* Left Features */}
                    <div style={{ flex: 1, minWidth: "clamp(250px, 100%, 400px)", display: "flex", flexDirection: "column", gap: "clamp(32px, 6vw, 48px)" }} className="app-features-left">
                        <div style={{ 
                          textAlign: "right", 
                          borderRight: "1px solid rgba(255,255,255,0.05)", 
                          paddingRight: "clamp(12px, 2vw, 24px)", 
                          paddingTop: "8px", 
                          paddingBottom: "8px" 
                        }}>
                            <h3 style={{ 
                              fontSize: "clamp(18px, 4vw, 24px)", 
                              fontWeight: "700", 
                              marginBottom: "8px", 
                              letterSpacing: "-0.02em" 
                            }}>Live Progress Rings</h3>
                            <p style={{ 
                              color: "rgba(255,255,255,0.4)", 
                              fontSize: "clamp(10px, 2vw, 12px)", 
                              fontWeight: "700", 
                              textTransform: "uppercase", 
                              letterSpacing: "0.15em" 
                            }}>Full biometric synchronization.</p>
                        </div>
                        <div style={{ 
                          textAlign: "right", 
                          borderRight: "1px solid rgba(255,255,255,0.05)", 
                          paddingRight: "clamp(12px, 2vw, 24px)", 
                          paddingTop: "8px", 
                          paddingBottom: "8px" 
                        }}>
                            <h3 style={{ 
                              fontSize: "clamp(18px, 4vw, 24px)", 
                              fontWeight: "700", 
                              marginBottom: "8px", 
                              letterSpacing: "-0.02em" 
                            }}>Smart Logging</h3>
                            <p style={{ 
                              color: "rgba(255,255,255,0.4)", 
                              fontSize: "clamp(10px, 2vw, 12px)", 
                              fontWeight: "700", 
                              textTransform: "uppercase", 
                              letterSpacing: "0.15em" 
                            }}>Automated set recognition.</p>
                        </div>
                    </div>
                    
                    {/* Phone Mockup */}
                    <div style={{ flex: 1, minWidth: "clamp(250px, 100%, 400px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <motion.div 
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          style={{ position: "relative", width: "100%", maxWidth: "320px" }} 
                          className="group"
                        >
                            <div style={{ 
                              position: "absolute", inset: 0, backgroundColor: "rgba(37, 99, 235, 0.15)", 
                              filter: "blur(100px)", borderRadius: "50%", transform: "scale(0.75)" 
                            }} />
                            
                            <div className="glass" style={{ 
                              width: "100%", 
                              maxWidth: "320px",
                              aspectRatio: "320/650",
                              backgroundColor: "#050505", 
                              borderRadius: "clamp(30px, 8vw, 50px)", 
                              border: "clamp(6px, 1.5vw, 8px) solid #151515", 
                              overflow: "hidden", 
                              position: "relative", 
                              boxShadow: "0 40px 100px rgba(0,0,0,0.8)" 
                            }}>
                                {/* Phone Notch */}
                                <div style={{ 
                                  position: "absolute", top: 0, left: 0, width: "100%", height: "clamp(24px, 5vw, 32px)", 
                                  display: "flex", alignItems: "center", justifyContent: "center", zIndex: 30 
                                }}>
                                    <div style={{ 
                                      width: "60%", 
                                      height: "65%", 
                                      backgroundColor: "black", 
                                      borderRadius: "0 0 20px 20px", 
                                      border: "1px solid rgba(255,255,255,0.1)", 
                                      borderTop: "none"
                                    }} />
                                </div>

                                {/* Mock App Screen Content */}
                                <div style={{ 
                                  padding: "clamp(20px, 4vw, 32px)", 
                                  paddingTop: "clamp(40px, 8vw, 56px)", 
                                  display: "flex", 
                                  flexDirection: "column", 
                                  gap: "clamp(20px, 4vw, 32px)",
                                  height: "100%",
                                  overflow: "hidden"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
                                        <div>
                                            <div style={{ 
                                              fontSize: "clamp(8px, 1.5vw, 10px)", 
                                              color: "rgba(255,255,255,0.4)", 
                                              fontWeight: "800", 
                                              textTransform: "uppercase", 
                                              letterSpacing: "0.1em" 
                                            }}>Thursday, April</div>
                                            <div style={{ 
                                              fontSize: "clamp(18px, 4vw, 24px)", 
                                              fontWeight: "800" 
                                            }}>Hello, Alex</div>
                                        </div>
                                        <div style={{ 
                                          width: "clamp(30px, 8vw, 40px)", 
                                          height: "clamp(30px, 8vw, 40px)", 
                                          borderRadius: "50%", 
                                          backgroundColor: "rgba(255,255,255,0.1)", 
                                          border: "1px solid rgba(255,255,255,0.05)" 
                                        }} />
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "center", padding: "clamp(8px, 2vw, 16px) 0", flex: 1 }}>
                                        <div style={{ position: "relative", width: "clamp(140px, 30vw, 192px)", height: "clamp(140px, 30vw, 192px)" }}>
                                            <svg style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                                                <circle cx="50%" cy="50%" r="45%" stroke="rgba(255,255,255,0.05)" strokeWidth="10%" fill="transparent" />
                                                <motion.circle 
                                                  cx="50%" cy="50%" r="45%" stroke="#60A5FA" strokeWidth="10%" fill="transparent" 
                                                  strokeDasharray="552.92" 
                                                  initial={{ strokeDashoffset: 552.92 }}
                                                  whileInView={{ strokeDashoffset: 120 }}
                                                  transition={{ duration: 1.5, delay: 0.5 }}
                                                  strokeLinecap="round" 
                                                />
                                                <circle cx="50%" cy="50%" r="37%" stroke="rgba(255,255,255,0.05)" strokeWidth="10%" fill="transparent" />
                                                <motion.circle 
                                                  cx="50%" cy="50%" r="37%" stroke="#A855F7" strokeWidth="10%" fill="transparent" 
                                                  strokeDasharray="452.39" 
                                                  initial={{ strokeDashoffset: 452.39 }}
                                                  whileInView={{ strokeDashoffset: 180 }}
                                                  transition={{ duration: 1.5, delay: 0.7 }}
                                                  strokeLinecap="round" 
                                                />
                                                <circle cx="50%" cy="50%" r="29%" stroke="rgba(255,255,255,0.05)" strokeWidth="10%" fill="transparent" />
                                                <motion.circle 
                                                  cx="50%" cy="50%" r="29%" stroke="#4ADE80" strokeWidth="10%" fill="transparent" 
                                                  strokeDasharray="351.86" 
                                                  initial={{ strokeDashoffset: 351.86 }}
                                                  whileInView={{ strokeDashoffset: 90 }}
                                                  transition={{ duration: 1.5, delay: 0.9 }}
                                                  strokeLinecap="round" 
                                                />
                                            </svg>
                                            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                <span style={{ 
                                                  fontSize: "clamp(8px, 1.5vw, 10px)", 
                                                  color: "rgba(255,255,255,0.4)", 
                                                  fontWeight: "800" 
                                                }}>TOTAL SCORE</span>
                                                <span style={{ 
                                                  fontSize: "clamp(28px, 6vw, 36px)", 
                                                  fontWeight: "800", 
                                                  color: "white" 
                                                }}>942</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2vw, 12px)" }}>
                                        <div className="glass" style={{ 
                                          padding: "clamp(8px, 2vw, 12px)", 
                                          borderRadius: "clamp(12px, 2vw, 16px)", 
                                          display: "flex", 
                                          alignItems: "center", 
                                          gap: "clamp(12px, 2vw, 16px)", 
                                          color: "white",
                                          minHeight: "48px"
                                        }}>
                                            <div style={{ 
                                              width: "clamp(28px, 6vw, 32px)", 
                                              height: "clamp(28px, 6vw, 32px)", 
                                              backgroundColor: "rgba(96, 165, 250, 0.15)", 
                                              borderRadius: "8px", 
                                              display: "flex", 
                                              alignItems: "center", 
                                              justifyContent: "center",
                                              flexShrink: 0
                                            }}>
                                                <Activity size={16} />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{ 
                                                  fontSize: "clamp(7px, 1.5vw, 8px)", 
                                                  fontWeight: "900", 
                                                  textTransform: "uppercase", 
                                                  letterSpacing: "0.1em", 
                                                  opacity: 0.6 
                                                }}>Body</div>
                                                <div style={{ 
                                                  fontSize: "clamp(11px, 2vw, 12px)", 
                                                  fontWeight: "700",
                                                  whiteSpace: "nowrap",
                                                  overflow: "hidden",
                                                  textOverflow: "ellipsis"
                                                }}>Leg Day Phase 1</div>
                                            </div>
                                        </div>
                                        <div className="glass" style={{ 
                                          padding: "clamp(8px, 2vw, 12px)", 
                                          borderRadius: "clamp(12px, 2vw, 16px)", 
                                          display: "flex", 
                                          alignItems: "center", 
                                          gap: "clamp(12px, 2vw, 16px)", 
                                          color: "white",
                                          minHeight: "48px"
                                        }}>
                                            <div style={{ 
                                              width: "clamp(28px, 6vw, 32px)", 
                                              height: "clamp(28px, 6vw, 32px)", 
                                              backgroundColor: "rgba(74, 222, 128, 0.15)", 
                                              borderRadius: "8px", 
                                              display: "flex", 
                                              alignItems: "center", 
                                              justifyContent: "center",
                                              flexShrink: 0
                                            }}>
                                                <Wind size={16} />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{ 
                                                  fontSize: "clamp(7px, 1.5vw, 8px)", 
                                                  fontWeight: "900", 
                                                  textTransform: "uppercase", 
                                                  letterSpacing: "0.1em", 
                                                  opacity: 0.6 
                                                }}>Mind</div>
                                                <div style={{ 
                                                  fontSize: "clamp(11px, 2vw, 12px)", 
                                                  fontWeight: "700",
                                                  whiteSpace: "nowrap",
                                                  overflow: "hidden",
                                                  textOverflow: "ellipsis"
                                                }}>Deep Focus Session</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Navigation */}
                                <div style={{ 
                                  position: "absolute", bottom: 0, left: 0, width: "100%", height: "clamp(60px, 10vw, 80px)", 
                                  backgroundColor: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", 
                                  borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", 
                                  alignItems: "center", justifyContent: "space-around", paddingBottom: "8px" 
                                }}>
                                     <div style={{ color: "#60A5FA", minHeight: "48px", minWidth: "48px", display: "flex", alignItems: "center" }}><Zap size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)", minHeight: "48px", minWidth: "48px", display: "flex", alignItems: "center" }}><Smartphone size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)", minHeight: "48px", minWidth: "48px", display: "flex", alignItems: "center" }}><Activity size={20} /></div>
                                     <div style={{ color: "rgba(255,255,255,0.2)", minHeight: "48px", minWidth: "48px", display: "flex", alignItems: "center" }}><Target size={20} /></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Features */}
                    <div style={{ flex: 1, minWidth: "clamp(250px, 100%, 400px)", display: "flex", flexDirection: "column", gap: "clamp(32px, 6vw, 48px)" }} className="app-features-right">
                        <div style={{ 
                          textAlign: "left", 
                          borderLeft: "1px solid rgba(255,255,255,0.05)", 
                          paddingLeft: "clamp(12px, 2vw, 24px)", 
                          paddingTop: "8px", 
                          paddingBottom: "8px" 
                        }}>
                            <h3 style={{ 
                              fontSize: "clamp(18px, 4vw, 24px)", 
                              fontWeight: "700", 
                              marginBottom: "8px", 
                              letterSpacing: "-0.02em" 
                            }}>Social Challenges</h3>
                            <p style={{ 
                              color: "rgba(255,255,255,0.4)", 
                              fontSize: "clamp(10px, 2vw, 12px)", 
                              fontWeight: "700", 
                              textTransform: "uppercase", 
                              letterSpacing: "0.15em" 
                            }}>Verified by neural check.</p>
                        </div>
                        <div style={{ 
                          textAlign: "left", 
                          borderLeft: "1px solid rgba(255,255,255,0.05)", 
                          paddingLeft: "clamp(12px, 2vw, 24px)", 
                          paddingTop: "8px", 
                          paddingBottom: "8px" 
                        }}>
                            <h3 style={{ 
                              fontSize: "clamp(18px, 4vw, 24px)", 
                              fontWeight: "700", 
                              marginBottom: "8px", 
                              letterSpacing: "-0.02em" 
                            }}>Real-time Form Feedback</h3>
                            <p style={{ 
                              color: "rgba(255,255,255,0.4)", 
                              fontSize: "clamp(10px, 2vw, 12px)", 
                              fontWeight: "700", 
                              textTransform: "uppercase", 
                              letterSpacing: "0.15em" 
                            }}>Sub-millisecond latency.</p>
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
