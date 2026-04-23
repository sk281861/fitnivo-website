"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Utensils, Zap, Sparkles } from "lucide-react";
import ImageSequenceScrub from "./ImageSequenceScrub";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]); 

  const bgBlur = useTransform(scrollY, [0, 1200], ["blur(10px)", "blur(0px)"]);

  const [scrollLen, setScrollLen] = React.useState(1500);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setScrollLen(800); // Shorter scroll duration on mobile
    }
  }, []);

  return (
    <section style={{ position: "relative", zIndex: 1, backgroundColor: "black" }}>
      <ImageSequenceScrub 
        directory="/frames/hero/" 
        frameCount={150} 
        scrollLength={scrollLen} 
      >
        {/* Dynamic Background Blur Overlay - Complete fade-out to ensure clarity */}
        <motion.div style={{ 
          backdropFilter: bgBlur,
          WebkitBackdropFilter: bgBlur,
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: useTransform(scrollY, [0, 800], [1, 0])
        }} />


        {/* Legibility Gradients & Vignette - Deepened for better contrast */}
        <motion.div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%), linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 25%, transparent 75%, rgba(0,0,0,1) 100%)",
          zIndex: 1,
          pointerEvents: "none",
          opacity: useTransform(scrollY, [0, 1200], [1, 0])
        }} />

        {/* Global Bottom Transition Mask - Ensuring no hard edge between Hero and Pillars */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "250px",
          background: "linear-gradient(to top, #0B0B0F, transparent)",
          zIndex: 4,
          pointerEvents: "none"
        }} />

        {/* Floating Content */}
        <div style={{
          position: "absolute",
          top: "60px", // Shifting down to match the artwork offset
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3
        }}>
          <motion.div 
            style={{ 
              opacity, 
              scale, 
              y: textY, 
              textAlign: "center", 
              pointerEvents: "auto",
              padding: "0 20px"
            }} 
            className="container hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="glass-pill" style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                marginBottom: "24px",
                fontSize: "clamp(10px, 2vw, 14px)",
                fontWeight: "600",
                color: "var(--accent-fitness)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: "rgba(0,0,0,0.5)"
              }}>
                <Sparkles size={14} />
                <span>Bio-Link Initialized</span>
              </div>

              <h1 className="hero-title" style={{ 
                fontSize: "clamp(48px, 15vw, 130px)", 
                fontWeight: "900",
                lineHeight: "0.9", 
                marginBottom: "32px",
                letterSpacing: "-0.05em",
                textTransform: "uppercase",
                filter: "drop-shadow(0 0 50px rgba(0,0,0,0.8))"
              }}>
                <span className="gradient-text-fitness">Train</span><br />
                <span className="gradient-text-nutrition">Fuel</span><br />
                <span className="gradient-text-mind">Evolve</span>
              </h1>

              <p className="hero-subtitle" style={{ 
                fontSize: "clamp(16px, 4vw, 24px)", 
                fontWeight: "300",
                color: "rgba(255,255,255,0.7)", 
                maxWidth: "640px", 
                margin: "0 auto 40px auto",
                lineHeight: "1.4",
                letterSpacing: "0.02em"
              }}>
                Synchronize your physiology with AI-driven protocols for local-precision wellness.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ display: "flex", gap: "24px", justifyContent: "center" }}
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.fitnivo.app&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", width: "100%", maxWidth: "300px" }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "var(--accent-fitness)",
                      color: "black",
                      padding: "clamp(16px, 3vw, 20px) clamp(30px, 5vw, 48px)",
                      borderRadius: "100px",
                      fontSize: "clamp(16px, 4vw, 18px)",
                      fontWeight: "700",
                      cursor: "pointer",
                      border: "none",
                      width: "100%",
                      boxShadow: "0 10px 40px rgba(0, 242, 255, 0.3)"
                    }}
                  >
                    Access System
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </ImageSequenceScrub>
    </section>
  );
};

export default Hero;
