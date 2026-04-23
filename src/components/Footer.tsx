"use client";

import React from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{
      padding: "100px 0 60px 0",
      background: "#050505",
      borderTop: "1px solid rgba(255,255,255,0.05)"
    }}>
      <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <img src="/favicon.png" alt="Fitnivo Logo" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                <div style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.03em" }}>Fitnivo</div>
              </div>
              <p style={{
                color: "rgba(255,255,255,0.4)",
                lineHeight: "1.8",
                fontSize: "16px",
                maxWidth: "380px",
                fontWeight: "400",
                marginBottom: "32px"
              }}>
                The intersection of elite human performance and advanced artificial intelligence. Built for those who refuse to settle.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="#" style={{ color: "rgba(255,255,255,0.4)", transition: "0.3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Support Column */}
            <div className="footer-col">
              <h4 style={{ fontSize: "12px", fontWeight: "800", color: "var(--text-muted)", letterSpacing: "0.2em", marginBottom: "32px", textTransform: "uppercase" }}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li><Link href="/contact" style={{ color: "#00F2FF", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>Contact Fitnivo</Link></li>
                <li style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: "1.6" }}>
                  Have a question or need support?<br />
                  <a href="mailto:support@fitnivo.in" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>support@fitnivo.in</a>
                </li>
                <li style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontStyle: "italic" }}>
                  Response: 24–48 hours
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-col">
              <h4 style={{ fontSize: "12px", fontWeight: "800", color: "var(--text-muted)", letterSpacing: "0.2em", marginBottom: "32px", textTransform: "uppercase" }}>Company</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li><Link href="/about" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", transition: "0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>About Us</Link></li>
                <li><Link href="/data-deletion" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", transition: "0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>Data Deletion</Link></li>
                <li><Link href="/privacy" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", transition: "0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>Privacy Policy</Link></li>
                <li><Link href="/terms" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "15px", transition: "0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "white")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <style jsx>{`
            .footer-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 60px;
              margin-bottom: 80px;
            }
            .footer-brand { grid-column: span 2; }
            .footer-col { grid-column: span 1; }

            @media (max-width: 992px) {
              .footer-grid {
                grid-template-columns: 1fr 1fr;
              }
            }

            @media (max-width: 768px) {
              .footer-grid {
                grid-template-columns: 1fr;
                gap: 48px;
              }
              .footer-brand, .footer-col { grid-column: span 1; }
            }
          `}</style>

        <div style={{ 
          paddingTop: "40px", 
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: "500", textAlign: "center" }}>
            © {new Date().getFullYear()} Fitnivo AI Ecosystem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
