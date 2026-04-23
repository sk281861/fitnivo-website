"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Zap, Database, Globe } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      id: "1",
      icon: <Database size={20} />,
      title: "Information We Collect",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p>We collect information to provide a personalized AI coaching experience and ensure app stability.</p>
          
          <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "white", marginBottom: "12px", fontSize: "16px" }}>A. Personal Identification Information</h4>
            <ul style={{ color: "rgba(255,255,255,0.5)", listStyle: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Name and Email Address (for account creation and authentication)</li>
              <li>Google Account Metadata (if using Google Sign-In)</li>
            </ul>
          </div>

          <div style={{ padding: "24px", background: "rgba(0,122,255,0.03)", borderRadius: "16px", border: "1px solid rgba(0,122,255,0.1)" }}>
            <h4 style={{ color: "var(--accent-primary)", marginBottom: "12px", fontSize: "16px" }}>B. Health & Fitness Data (Sensitive)</h4>
            <ul style={{ color: "rgba(255,255,255,0.6)", listStyle: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong>Body Metrics:</strong> Height, Weight, Age, Gender for plan calculation</li>
              <li><strong>Activity Logs:</strong> Exercises, sets, reps, and workout duration</li>
              <li><strong>Nutrition Data:</strong> Calorie intake, water consumption, and meal completions</li>
              <li><strong>Wellness Metrics:</strong> Mood entries, sleep duration, and journal reflections</li>
            </ul>
            <p style={{ marginTop: "16px", fontSize: "13px", color: "var(--accent-primary)", fontWeight: "600" }}>All health-related data is encrypted during transmission and storage.</p>
          </div>

          <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "white", marginBottom: "12px", fontSize: "16px" }}>C. Payment & Subscription Data</h4>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Subscriptions are processed securely via RevenueCat and the Google Play Store. Fitnivo does not store or process your credit card or payment credentials directly.</p>
          </div>

          <div style={{ padding: "24px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 style={{ color: "white", marginBottom: "12px", fontSize: "16px" }}>D. Technical & Usage Data</h4>
            <ul style={{ color: "rgba(255,255,255,0.5)", listStyle: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>Device Information (Model, OS version, and unique device identifiers)</li>
              <li>Log Data (Crash reports via Firebase Crashlytics for stability)</li>
              <li>Interaction Data (Feature usage and session duration via Firebase Analytics)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "2",
      icon: <Zap size={20} />,
      title: "How We Use Your Information",
      content: (
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            "Generate personalized AI workout and meal plans via the Fitbuu engine.",
            "Synchronize your health data across devices using Firebase/Supabase.",
            "Manage subscriptions and provide access to Pro features via RevenueCat.",
            "Send periodic coaching reminders and hydration alerts via system notifications.",
            "Diagnose app crashes and optimize technical performance."
          ].map((item, idx) => (
            <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ minWidth: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-primary)", marginTop: "10px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: "3",
      icon: <Shield size={20} />,
      title: "Third-Party Services & Data Sharing",
      content: (
        <div>
          <p style={{ marginBottom: "20px", fontWeight: "600", color: "white" }}>We do not sell your personal data.</p>
          <p style={{ marginBottom: "20px" }}>We share information only with service providers required for core app functionality:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { name: "Google Firebase", role: "Auth, DB, Functions, Crashlytics" },
              { name: "Supabase", role: "Real-time Sync & Profiles" },
              { name: "RevenueCat", role: "Subscriptions & Payments" },
              { name: "Google Play Services", role: "Updates & Billing" }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontWeight: "700", color: "white", marginBottom: "4px" }}>{service.name}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{service.role}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "4",
      icon: <Zap size={20} />,
      title: "AI Features & Medical Disclaimer",
      content: "Fitnivo uses advanced AI models (Fitbuu 🐻) to provide coaching insights and generated plans. AI responses are generated based on your data and may not be medically accurate. Always consult a healthcare professional for clinical health advice. Your personal identity is never shared with external AI training models."
    },
    {
      id: "5",
      icon: <Lock size={20} />,
      title: "Data Retention & Deletion",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p>We retain your data as long as your account is active. You have the \"Right to be Forgotten\" at any time:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p><strong>• In-App Deletion:</strong> Navigate to Settings {">"} Delete Account to immediately purge your profile.</p>
            <p><strong>• Permanent Removal:</strong> Upon account deletion, your data is scheduled for permanent hard-removal from our servers within 30 days.</p>
          </div>
        </div>
      )
    },
    {
      id: "6",
      icon: <Eye size={20} />,
      title: "User Control & Data Correction",
      content: "You can update or correct your personal data anytime from within the app settings. For full data portability requests, you may contact our support team."
    },
    {
      id: "7",
      icon: <Lock size={20} />,
      title: "Permissions Disclosure",
      content: (
        <ul style={{ listStyle: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <li><strong>Notifications:</strong> Used for Fitbuu reminders and water alerts.</li>
          <li><strong>Internet:</strong> Required for data syncing, AI generation, and subscription checks.</li>
          <li><strong>Storage:</strong> Used locally for caching media and mascot assets for notifications.</li>
        </ul>
      )
    },
    {
      id: "10",
      icon: <Shield size={20} />,
      title: "Data Security",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {[
            "HTTPS encryption for all data transfers in transit.",
            "Secure cloud storage with strict backend access controls.",
            "Authentication handled via trusted providers (Firebase Auth).",
            "Restricted internal access to sensitive user data."
          ].map((item, idx) => (
            <div key={idx} style={{ padding: "20px", background: "rgba(0,255,150,0.02)", borderRadius: "16px", border: "1px solid rgba(0,255,150,0.1)", display: "flex", gap: "12px" }}>
              <Shield size={18} color="#00FF96" />
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>{item}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "11",
      icon: <Globe size={20} />,
      title: "International Data Transfers",
      content: "Fitnivo is a global service. Your data may be processed on servers (via Firebase and Supabase) located outside your country of residence. We ensure that appropriate safeguards and encryption measures are in place to protect your data during these transfers."
    }
  ];

  return (
    <main style={{ background: "#050505", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: "180px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "80px" }}
          >
            <h1 style={{ 
              fontSize: "clamp(40px, 8vw, 72px)", 
              fontWeight: "900", 
              letterSpacing: "-0.04em", 
              lineHeight: "1.1", 
              marginBottom: "24px" 
            }}>
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>
              Last Updated: April 2026
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            <p style={{ fontSize: "20px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", maxWidth: "800px" }}>
              At Fitnivo, your privacy is our priority. This Privacy Policy outlines how we collect, use, store, and protect your information when you interact with our mobile application and services.
            </p>

            <div style={{ display: "grid", gap: "20px" }}>
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="stack-on-mobile"
                  style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.05)", 
                    paddingTop: "clamp(40px, 8vw, 60px)",
                    gap: "24px"
                  }}
                >
                  <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "340px" }}>
                    <div style={{ 
                      width: "36px", 
                      height: "36px", 
                      borderRadius: "10px", 
                      background: "rgba(255,255,255,0.03)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      marginBottom: "20px",
                      color: "#00F2FF"
                    }}>
                      {section.icon}
                    </div>
                    <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                      {section.title}
                    </h2>
                    <span style={{ fontSize: "11px", fontWeight: "900", color: "rgba(255,255,255,0.1)", letterSpacing: "0.1em" }}>SECTION {section.id}</span>
                  </div>
                  <div style={{ 
                    flex: "1",
                    fontSize: "15px", 
                    lineHeight: "1.7", 
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: "400"
                  }}>
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Anchor */}
            <div style={{ 
              marginTop: "40px", 
              padding: "clamp(40px, 6vw, 60px) 24px", 
              background: "rgba(255,255,255,0.02)", 
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "32px",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>Privacy Support</h3>
              <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "24px", fontSize: "14px" }}>Have questions about your data rights?</p>
              <a href="mailto:support@fitnivo.in" style={{ 
                color: "#00F2FF", 
                textDecoration: "none", 
                fontSize: "18px", 
                fontWeight: "700" 
              }}>support@fitnivo.in</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
