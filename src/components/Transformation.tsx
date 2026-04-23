"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Transformation = () => {
  return (
    <section style={{ padding: "clamp(80px, 15vw, 160px) 0", backgroundColor: "var(--background)" }}>
      <div className="container">
        <div className="transformation-grid" style={{ gap: "clamp(60px, 10vw, 100px)" }}>
          
          {/* Left Column: The Visual Result */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ flex: 1, width: "100%" }}
          >
            <div className="transformation-card" style={{ borderRadius: "clamp(24px, 5vw, 48px)" }}>
              <img 
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80" 
                alt="Transformation" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)",
                opacity: 0.8,
                pointerEvents: "none"
              }} />
              
              <div style={{ 
                position: "absolute", 
                bottom: "clamp(24px, 6vw, 48px)", 
                left: "clamp(24px, 6vw, 48px)", 
                color: "white" 
              }}>
                <div style={{ 
                  fontSize: "clamp(32px, 8vw, 64px)", 
                  fontWeight: "900", 
                  lineHeight: "0.9",
                  letterSpacing: "-0.03em"
                }}>
                  PEAK<br />STATE
                </div>
                <div style={{ 
                  color: "var(--accent-mind)", 
                  fontWeight: "700", 
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "clamp(10px, 2vw, 14px)",
                  marginTop: "16px"
                }}>
                  16 Weeks Transformation
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="testimonial-content"
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: "clamp(32px, 5vw, 40px)" }}
          >
            <h2 style={{ 
              fontSize: "clamp(40px, 8vw, 84px)", 
              fontWeight: "900", 
              lineHeight: "1.0",
              letterSpacing: "-0.05em"
            }}>
              TOTAL <br />
              <span className="peak-human-gradient">PEAK HUMAN.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 6vw, 48px)" }}>
              <div className="testimonial-row" style={{ display: "flex", gap: "24px" }}>
                <div className="glass desktop-only" style={{ 
                  width: "64px", 
                  height: "64px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--accent-fitness)",
                  borderRadius: "20px"
                }}>
                  <Quote size={32} />
                </div>
                <p style={{ 
                  fontSize: "clamp(18px, 3.5vw, 22px)", 
                  color: "var(--text-muted)", 
                  fontStyle: "italic",
                  lineHeight: "1.6",
                  fontWeight: "400"
                }}>
                  "I used to think fitness was just about the gym. Fitnivo showed me that recovery and mental focus are just as critical. My body is stronger, and my mind has never been clearer."
                </p>
              </div>

              <div className="author-row" style={{ display: "flex", alignItems: "center", gap: "20px", paddingLeft: "clamp(0px, 10vw, 88px)" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  borderRadius: "50%", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  overflow: "hidden"
                }}>
                  <div style={{ width: "100%", height: "100%", background: "linear-gradient(45deg, #222, #444)" }} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "white" }}>David Chen</div>
                  <div style={{ 
                    fontSize: "11px", 
                    color: "rgba(255,255,255,0.4)", 
                    textTransform: "uppercase", 
                    fontWeight: "800",
                    letterSpacing: "0.15em",
                    marginTop: "4px"
                  }}>
                    Architect & Runner
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA: Download Row */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: "160px", 
            textAlign: "center",
            padding: "120px 40px",
            borderRadius: "60px",
            position: "relative",
            overflow: "hidden",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 100px rgba(0,0,0,1)"
          }}
        >
          {/* Background Image with Intensity Shading */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/cta_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            filter: "grayscale(100%) contrast(150%)",
            zIndex: 1
          }} />
          
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #000 0%, transparent 40%, transparent 60%, #000 100%), radial-gradient(circle at center, transparent 0%, #000 100%)",
            zIndex: 2,
            opacity: 0.9
          }} />

          <div style={{ position: "relative", zIndex: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 style={{ 
                fontSize: "clamp(48px, 8vw, 96px)", 
                fontWeight: "900", 
                marginBottom: "24px",
                lineHeight: "0.9",
                letterSpacing: "-0.05em",
                textTransform: "uppercase"
              }}>
                READY TO <br />
                <span className="peak-human-gradient">REWRITE YOUR CODE?</span>
              </h3>
              <p style={{ 
                color: "rgba(255,255,255,0.6)", 
                fontSize: "22px", 
                marginBottom: "64px", 
                maxWidth: "700px", 
                margin: "0 auto 64px auto",
                lineHeight: "1.6"
              }}>
                The only system that synchronizes your training, nutrition, and recovery into a unified peak-performance protocol.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
                {/* Play Store Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.fitnivo.app&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "#fff",
                      color: "#000",
                      padding: "20px 48px",
                      borderRadius: "24px",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                    }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: "32px" }} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", opacity: 0.6 }}>IMMEDIATE ACCESS</div>
                      <div style={{ fontSize: "22px", fontWeight: "900" }}>Google Play</div>
                    </div>
                  </motion.button>
                </a>

                {/* App Store Coming Soon */}
                <div style={{ position: "relative" }}>
                  <motion.button 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      background: "rgba(255,255,255,0.03)",
                      color: "rgba(255,255,255,0.3)",
                      padding: "20px 48px",
                      borderRadius: "24px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "not-allowed",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)"
                    }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: "32px", filter: "grayscale(1) opacity(0.3)" }} />
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", opacity: 0.3 }}>APP STORE RELEASE</div>
                      <div style={{ fontSize: "22px", fontWeight: "900" }}>Coming Soon</div>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformation;
