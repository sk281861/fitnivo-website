"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";

interface PillarProps {
  title: string;
  subtitle: string;
  color: string;
  rejected: string[];
  accepted: string;
  image: string;
  index: number;
}

const Pillar = ({ title, subtitle, color, rejected, accepted, image, index }: PillarProps) => {
  const ref = useRef(null);
  const isEven = index % 2 === 0;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const contentX = useTransform(scrollYProgress, [0, 0.2], [isEven ? -50 : 50, 0]);
  const imageX = useTransform(scrollYProgress, [0, 0.2], [isEven ? 50 : -50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        gap: "clamp(40px, 8vw, 80px)",
        opacity,
        scale,
        padding: "clamp(100px, 15vw, 160px) 24px"
      }}
      className="container pillar-container"
    >
      <motion.div className="pillar-content" style={{ flex: 1.2 }}>
        <div style={{ color: color, fontSize: "12px", fontWeight: "800", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "3px" }}>
          Pillar 0{index + 1}
        </div>
        <h2 style={{ fontSize: "clamp(36px, 6vw, 84px)", lineHeight: "0.95", marginBottom: "24px", fontWeight: "900", letterSpacing: "-0.04em" }}>
          {title.split(':')[1].trim()}
        </h2>
        <p style={{ fontSize: "clamp(16px, 3vw, 18px)", color: "rgba(255,255,255,0.6)", marginBottom: "32px", lineHeight: "1.6", maxWidth: "540px" }}>
          {subtitle}
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {rejected.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.3)", textDecoration: "line-through" }}>
                <X size={16} />
                <span style={{ fontSize: "16px" }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: color, fontWeight: "700" }}>
            <Check size={24} />
            <span style={{ fontSize: "18px" }}>{accepted}</span>
          </div>
        </div>
      </motion.div>

      <motion.div className="pillar-image-wrapper" style={{ flex: 1, position: "relative", width: "100%" }}>
        <motion.div 
          style={{ 
            width: "100%",
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            borderRadius: "clamp(24px, 5vw, 48px)",
            background: "#08080A",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: `0 40px 100px -20px rgba(0,0,0,0.8), 0 0 80px ${color}15`
          }}
        >
          {/* Main Visual Image */}
          <motion.img 
            src={image}
            alt={title}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              opacity: 0.95 // Increased for better visibility
            }} 
          />

          {/* AI Scanner Effect */}
          <motion.div
            animate={{ top: ["-5%", "105%", "-5%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              boxShadow: `0 0 30px ${color}`,
              zIndex: 10
            }}
          />

          {/* Status Overlay - Desktop version */}
          <div className="desktop-only" style={{
            position: "absolute",
            bottom: "clamp(16px, 4vw, 32px)",
            left: "clamp(16px, 4vw, 32px)",
            right: "clamp(16px, 4vw, 32px)",
            padding: "16px",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            zIndex: 15
          }}>
            <div style={{ color: color, fontWeight: "800", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "4px" }}>SYSTEM ANALYSIS</div>
            <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px" }}>Protocol Active</div>
          </div>
          
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.4) 100%)`, 
            zIndex: 5 
          }} />
        </motion.div>

        {/* Status Overlay - Mobile specific version (Below image) */}
        <div className="mobile-only" style={{
          marginTop: "20px",
          width: "100%",
          padding: "16px",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center"
        }}>
          <div style={{ color: color, fontWeight: "800", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "4px" }}>SYSTEM ANALYSIS</div>
          <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px" }}>Protocol Active</div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 968px) {
          .pillar-container {
            flex-direction: column-reverse !important;
            text-align: center;
          }
          .pillar-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .pillar-image-wrapper {
            max-width: 400px;
            margin: 0 auto;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
        @media (min-width: 969px) {
          .mobile-only {
            display: none !important;
          }
          .desktop-only {
            display: block !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      title: "Body: Precision Fitness",
      subtitle: "Move with morphological intent. Fitnivo's AI analyzes biomechanics in real-time to prescribe exact loading protocols and recovery windows.",
      color: "#00F2FF",
      rejected: ["Static Workout Plans", "Plateau-Prone Routines", "Volume Overtraining"],
      accepted: "Neural Load Optimization",
      image: "/images/pillar_fitness.png",
      index: 0
    },
    {
      title: "Fuel: Molecular Nutrition",
      subtitle: "Fueling as a biological function. We track micronutrient density and individual glycemic response to synchronize your intake with output.",
      color: "#FF2D55",
      rejected: ["Genetic Meal Plans", "Restrictive Diet Logic", "Micronutrient Gaps"],
      accepted: "Bio-Adaptive Fuel Sync",
      image: "/images/pillar_nutrition.png",
      index: 1
    },
    {
      title: "Mind: Cognitive Resonance",
      subtitle: "Mental clarity is a performance metric. Integrate HRV and neurological recovery tracking to maintain a peak-state nervous system.",
      color: "#00FF85",
      rejected: ["Chronic Stress Cycles", "Fragmented Sleep Sync", "Cognitive Burnout"],
      accepted: "Autonomous Nervous Reset",
      image: "/images/pillar_mind.png",
      index: 2
    }
  ];

  return (
    <div style={{ position: "relative", backgroundColor: "var(--background)" }} id="features">
      {pillars.map((pillar, i) => (
        <Pillar key={i} {...pillar} />
      ))}
    </div>
  );
};

export default PillarsSection;
