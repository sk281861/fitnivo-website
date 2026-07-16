"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const textYDesktop = useTransform(scrollY, [0, 600], [0, -100]);
  // Always call both transforms (Rules of Hooks), select at render based on isMobile
  const textYMobile = useTransform(scrollY, [0, 1], [0, 0]);
  const textY = isMobile ? textYMobile : textYDesktop;

  return (
    <section 
      className="hero-section-wrapper" 
      style={{ 
        position: "relative", 
        zIndex: 1, 
        backgroundColor: "black",
        overflow: "hidden",
      }} 
      data-section="hero"
    >
      {/* Background Image with eager/priority loading */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero/Fitnivo_hero_section.webp"
          alt="Fitnivo Hero Section"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: isMobile ? "center center" : "right center"
          }}
        />
      </div>

      {/* Legibility Gradients & Vignette - Deepened for better contrast */}
      <div className="hero-gradient-overlay" />

      {/* Global Bottom Transition Mask - Ensuring no hard edge between Hero and Pillars */}
      <div className="hero-bottom-mask" />

      {/* Floating Content */}
      <div className="hero-content-container">
        <motion.div 
          style={{ 
            opacity, 
            scale, 
            y: textY, 
          }} 
          className="hero-text-block hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title" style={{ 
              fontSize: "clamp(34px, 5vw, 52px)", 
              fontWeight: "900",
              lineHeight: "1.15", 
              marginBottom: "20px",
              letterSpacing: "-0.03em",
              filter: "drop-shadow(0 0 40px rgba(0,0,0,0.9))"
            }}>
              Meet Your All-In-One <br className="desktop-only" />
              <span style={{ background: "linear-gradient(90deg, #F7971E, #FFD200)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AI Fitness Coach</span>
            </h1>

            <h2 className="hero-subtitle" style={{ 
              fontSize: "clamp(14px, 2.2vw, 17px)", 
              fontWeight: "300",
              color: "rgba(255,255,255,0.7)", 
              maxWidth: "450px", 
              marginBottom: "32px",
              lineHeight: "1.6",
              letterSpacing: "0.01em"
            }}>
              Stop juggling four different apps. Track calories, plan custom workouts, and crush your goals with one intelligent system.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-btn-container"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=com.fitnivo.app&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "#FFFFFF",
                    color: "#0B0B0F",
                    padding: "12px 28px",
                    borderRadius: "100px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    border: "none",
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)",
                    whiteSpace: "nowrap"
                  }}
                >
                  Download Free for Android
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="hero-stats-container"
        >
          {/* PACE CARD */}
          <div className="stat-card">
            <div className="stat-card-title">Pace</div>
            <div className="stat-card-svg">
              <svg width="100" height="55" viewBox="0 0 100 55">
                <defs>
                  <linearGradient id="paceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#33F4FF" />
                    <stop offset="50%" stopColor="#00FF85" />
                    <stop offset="100%" stopColor="#FF007F" />
                  </linearGradient>
                </defs>
                <path d="M15,50 A35,35 0 0,1 85,50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" />
                <path d="M15,50 A35,35 0 0,1 85,50" fill="none" stroke="url(#paceGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="110" strokeDashoffset="22" />
                <line x1="50" y1="50" x2="72" y2="24" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.9)" />
              </svg>
            </div>
            <div className="stat-card-footer">
              <span>300</span>
              <span>288</span>
            </div>
          </div>

          {/* HEART RATE CARD */}
          <div className="stat-card">
            <div className="stat-card-title">Heart Rate</div>
            <div className="stat-card-svg">
              <svg width="100" height="55" viewBox="0 0 100 55">
                <defs>
                  <linearGradient id="hrGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF007F" />
                    <stop offset="50%" stopColor="#BF00FF" />
                    <stop offset="100%" stopColor="#33F4FF" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <path d="M5,42 L20,42 L28,28 L36,45 L42,12 L48,47 L55,34 L72,34 L80,24 L95,30" fill="none" stroke="url(#hrGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="12" r="3.5" fill="#33F4FF" filter="url(#glow)" />
                <circle cx="42" cy="12" r="1.5" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="stat-card-footer" style={{ display: "flex", gap: "8px" }}>
              <span>15M</span>
              <span>15M</span>
              <span>198</span>
              <span>1800</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

