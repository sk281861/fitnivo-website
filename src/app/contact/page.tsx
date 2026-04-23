"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Heart, ShieldAlert, Smartphone, Send } from "lucide-react";

export default function ContactPage() {
  const helpCategories = [
    { icon: <Smartphone size={20} />, text: "App support & technical issues" },
    { icon: <ShieldAlert size={20} />, text: "Account or subscription queries" },
    { icon: <MessageSquare size={20} />, text: "Feedback & feature suggestions" },
    { icon: <Heart size={20} />, text: "Partnerships & collaborations" }
  ];

  return (
    <main style={{ background: "#050505", minHeight: "100vh", color: "white" }}>
      <Navbar />

      <section style={{ paddingTop: "clamp(120px, 15vw, 180px)", paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "clamp(60px, 10vw, 100px)" }}
          >
            <h1 style={{ 
              fontSize: "clamp(40px, 8vw, 80px)", 
              fontWeight: "900", 
              letterSpacing: "-0.05em", 
              lineHeight: "1",
              marginBottom: "24px"
            }}>
              Contact <span style={{ color: "#00F2FF" }}>Fitnivo</span>
            </h1>
            <p style={{ fontSize: "clamp(16px, 3vw, 20px)", color: "rgba(255,255,255,0.5)", lineHeight: "1.6", maxWidth: "700px" }}>
              Have a question, need support, or want to collaborate? Reach out and we’ll get back to you within 24–48 hours.
            </p>
          </motion.div>

          <div className="stack-on-mobile" style={{ gap: "clamp(40px, 8vw, 80px)" }}>
            {/* Left Column: Categories & Info */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
                How Can We Help?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "60px" }}>
                {helpCategories.map((cat, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div style={{ color: "rgba(255,255,255,0.3)" }}>{cat.icon}</div>
                    <span style={{ fontSize: "15px", fontWeight: "600", color: "rgba(255,255,255,0.7)" }}>{cat.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ 
                padding: "32px", 
                background: "rgba(255,255,255,0.02)", 
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px"
              }}>
                <Mail size={28} color="#00F2FF" style={{ marginBottom: "20px" }} />
                <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>Email Support</h3>
                <a href="mailto:support@fitnivo.in" style={{ 
                  fontSize: "clamp(18px, 4vw, 24px)", 
                  fontWeight: "700", 
                  color: "white", 
                  textDecoration: "none",
                  wordBreak: "break-all"
                }}>support@fitnivo.in</a>
                <p style={{ marginTop: "12px", color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
                  We aim to respond within 24–48 hours.
                </p>
              </div>
            </div>

            {/* Right Column: Pre-Contact Info */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "48px" }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ fontSize: "12px", fontWeight: "800", color: "white", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>
                  Before You Reach Out
                </h2>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: "1.8" }}>
                  <p style={{ marginBottom: "16px" }}>To help us assist you faster, please include:</p>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{ width: "6px", height: "6px", background: "#00F2FF", borderRadius: "50%" }} />
                      Your registered email
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{ width: "6px", height: "6px", background: "#00F2FF", borderRadius: "50%" }} />
                      Device details (Android/iOS)
                    </li>
                    <li style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <div style={{ width: "6px", height: "6px", background: "#00F2FF", borderRadius: "50%" }} />
                      Brief description of your issue
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ 
                  padding: "40px", 
                  background: "linear-gradient(135deg, rgba(0,242,255,0.05) 0%, transparent 100%)",
                  border: "1px solid rgba(0,242,255,0.1)",
                  borderRadius: "32px"
                }}
              >
                <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "16px" }}>Our Commitment</h2>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "20px" }}>
                  At Fitnivo, we don’t just build features—we support your journey. Your experience matters.
                </p>
                <div style={{ fontWeight: "800", color: "#00F2FF", fontSize: "14px" }}>
                  Every message helps us build something better.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
