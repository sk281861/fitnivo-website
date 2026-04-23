"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadUrl = "https://play.google.com/store/apps/details?id=com.fitnivo.app&pcampaignid=web_share";

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "AI Coach", href: "/ai-features" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "16px 0" : "24px 0",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled || mobileMenuOpen ? "rgba(11, 11, 15, 0.95)" : "transparent",
          backdropFilter: scrolled || mobileMenuOpen ? "blur(30px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          overflow: "visible"
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", overflow: "visible" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", zIndex: 1001, overflow: "visible" }}>
            <Image 
              src="/favicon.png" 
              alt="Fitnivo Logo" 
              width={scrolled ? 36 : 48} 
              height={scrolled ? 36 : 48} 
              priority
              style={{ transition: "0.5s", objectFit: "contain", flexShrink: 0 }} 
            />
            <span style={{ fontSize: scrolled ? "22px" : "26px", fontWeight: "800", letterSpacing: "-0.03em", transition: "0.5s", lineHeight: "1.2", paddingBottom: "2px" }}>Fitnivo</span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                style={{ 
                  fontSize: "15px", 
                  fontWeight: "500", 
                  color: "rgba(255,255,255,0.6)", 
                  transition: "all 0.3s",
                  textDecoration: "none" 
                }} 
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")} 
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {link.name}
              </Link>
            ))}
            
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  background: "white", 
                  color: "black", 
                  fontWeight: "700", 
                  borderRadius: "100px",
                  cursor: "pointer",
                  padding: "10px 24px",
                  fontSize: "14px",
                  border: "none"
                }}
              >
                Download App
              </motion.button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: "none", 
              border: "none", 
              color: "white", 
              cursor: "pointer", 
              padding: "10px",
              zIndex: 1001 
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#0B0B0F",
              zIndex: 999,
              padding: "120px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "40px"
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  fontSize: "32px", 
                  fontWeight: "800", 
                  color: "white", 
                  textDecoration: "none" 
                }}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={downloadUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                background: "white", 
                color: "black", 
                fontWeight: "800", 
                borderRadius: "100px",
                padding: "20px",
                fontSize: "18px",
                textDecoration: "none",
                textAlign: "center",
                marginTop: "20px"
              }}
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
