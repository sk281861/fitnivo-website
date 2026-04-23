"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trash2, ShieldCheck, Clock, Mail } from "lucide-react";

export default function DataDeletionPage() {
  const steps = [
    {
      icon: <Mail size={24} />,
      title: "Send an email",
      desc: "Send an email from your registered email address to ensure we can verify your identity."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Official Channel",
      desc: "Email us at support@fitnivo.in with your request details."
    },
    {
      icon: <Clock size={24} />,
      title: "Subject Line",
      desc: "Use the subject line: \"Fitnivo Account Deletion Request\" for priority processing."
    }
  ];

  const dataPoints = [
    "User account information (email address and user ID)",
    "Fitness and health data (calorie tracking, workouts, water intake)",
    "Mood tracking and journal entries",
    "Any other personal data associated with your Fitnivo account"
  ];

  return (
    <main style={{ background: "#050505", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "100px" }}
          >
            <h1 style={{ 
              fontSize: "clamp(40px, 8vw, 72px)", 
              fontWeight: "900", 
              letterSpacing: "-0.04em", 
              lineHeight: "1.1", 
              marginBottom: "32px" 
            }}>
              Account & Data <span className="text-gradient">Deletion</span>
            </h1>
            <p style={{ 
              color: "rgba(255,255,255,0.6)", 
              fontSize: "20px", 
              maxWidth: "600px", 
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Fitnivo respects your privacy and gives you full control over your personal data.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
            {/* Step Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 style={{ fontSize: "14px", fontWeight: "800", color: "var(--accent-primary)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "48px" }}>
                How to request deletion
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                {steps.map((step, idx) => (
                  <div key={idx} style={{ 
                    padding: "40px", 
                    background: "rgba(255,255,255,0.02)", 
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "24px",
                    transition: "0.3s"
                  }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}>
                    <div style={{ color: "var(--accent-primary)", marginBottom: "24px" }}>{step.icon}</div>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Data Points Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ 
                padding: "clamp(30px, 5vw, 60px)", 
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
                borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <div className="stack-on-mobile" style={{ gap: "48px" }}>
                <div style={{ flex: "1", minWidth: "100%" }}>
                  <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#00F2FF", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
                    What will be deleted
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {dataPoints.map((point, idx) => (
                      <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00F2FF", marginTop: "8px", flexShrink: 0 }} />
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: "1.5" }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="retention-box" style={{ 
                  flex: "0.8", 
                  minWidth: "100%", 
                  borderLeft: "1px solid rgba(255,255,255,0.1)", 
                  paddingLeft: "clamp(0px, 8vw, 48px)" 
                }}>
                  <h2 style={{ fontSize: "12px", fontWeight: "800", color: "#FF2D55", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
                    Data Retention
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                      <Trash2 size={18} color="#FF2D55" />
                      <span style={{ fontSize: "17px", fontWeight: "700" }}>7-Day Permanent Wipe</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.8", fontSize: "14px" }}>
                      All personal data will be permanently deleted within 7 days after verification. 
                      No personal data is retained after account deletion.
                    </p>
                  </div>
                </div>
              </div>
              <style jsx>{`
                @media (max-width: 768px) {
                  .retention-box {
                    border-left: none !important;
                    padding-left: 0 !important;
                    margin-top: 40px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                  }
                }
              `}</style>
            </motion.div>

            {/* Support CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ 
                textAlign: "center", 
                padding: "clamp(40px, 8vw, 80px) 24px", 
                borderRadius: "32px",
                background: "#00F2FF",
                color: "black"
              }}
            >
              <h2 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: "900", marginBottom: "16px" }}>Have Questions?</h2>
              <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "32px", opacity: 0.8 }}>
                Our team is here to help you manage your data rights.
              </p>
              <a href="mailto:support@fitnivo.in" style={{ 
                display: "inline-block",
                background: "black",
                color: "white",
                padding: "14px 40px",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "15px",
                transition: "0.3s"
              }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                Contact Support
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
