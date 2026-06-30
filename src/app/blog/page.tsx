"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, Lock, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Definitive blog posts list combining published and upcoming articles
const ALL_POSTS = [
  {
    slug: "nutrition-science-personalization",
    title: "Nutrition Science: Macros, Micros & Personalization",
    category: "Nutrition",
    categoryColor: "#34d399",
    excerpt: "Most people track calories. Elite performers track nutrient quality, timing, and individual metabolic response — the trio that actually moves the needle.",
    image: "/images/blog/nutrition/nutrition_science_hero.webp",
    readTime: "12 min read",
    date: "Jun 2, 2026",
    tag: "Featured",
    status: "published",
  },
  {
    slug: "ai-vs-traditional-coaching",
    title: "AI vs. Traditional Fitness Coaching: A Complete Comparison",
    category: "AI Coaching",
    categoryColor: "#f59e0b",
    excerpt: "Eight dimensions where AI coaching consistently outperforms human-only methods — and where human touch still wins.",
    image: "/images/blog/ai-coaching/ai_vs_traditional_hero.webp",
    readTime: "10 min read",
    date: "Jun 2, 2026",
    tag: "New",
    status: "published",
  },
  {
    slug: "best-fitbod-alternatives",
    title: "The 5 Best Fitbod Alternatives in 2026 (Free & Premium Options)",
    category: "AI Coaching",
    categoryColor: "#f59e0b",
    excerpt: "Looking for the best Fitbod alternatives in 2026? Read our detailed review of Fitnivo, Hevy, Strong, and others to find the best all-in-one fitness app.",
    image: "/images/mockup/personal-ai-trainer-custom-workout-routine.webp",
    readTime: "10 min read",
    date: "Jul 1, 2026",
    tag: "New",
    status: "published",
  },
  {
    slug: "biometric-optimization-science",
    title: "The Science of Biometric Optimization",
    category: "Biometrics",
    categoryColor: "#818cf8",
    excerpt: "How wearables and AI combine to decode your body's data and convert it into precision performance protocols.",
    image: "/images/wearable-biometric-recovery-sync.webp",
    readTime: "8 min read",
    date: "Coming Soon",
    tag: "Preview",
    status: "upcoming",
  },
  {
    slug: "mindfulness-athletic-performance",
    title: "Mindfulness and Athletic Performance: The Mind-Body Connection",
    category: "Mindfulness",
    categoryColor: "#00FF85",
    excerpt: "Explore the neuroscience of how mindfulness training alters brain structure to reduce stress, improve focus, and elevate athletic output.",
    image: "/images/blog/mindfulness/mindfulness-athletic-performance-hero.webp",
    readTime: "9 min read",
    date: "Jun 30, 2026",
    tag: "New",
    status: "published",
  },
  {
    slug: "recovery-optimization-sleep-stress",
    title: "Recovery Optimization: Sleep, Stress, and Adaptation",
    category: "Recovery",
    categoryColor: "#ec4899",
    excerpt: "How sleep cycles, heart rate variability, and stress tracking determine training adaptation and physical supercompensation.",
    image: "/images/blog/ai-coaching/hybrid_coaching_future.webp",
    readTime: "11 min read",
    date: "Coming Soon",
    tag: "Preview",
    status: "upcoming",
  },
  {
    slug: "sustainable-fitness-habits",
    title: "Building Sustainable Fitness Habits: A Behavioral Science Approach",
    category: "Behavioral",
    categoryColor: "#00F2FF",
    excerpt: "Using the science of habit loops, identity-based habits, and friction reduction to build routines that stick for life.",
    image: "/images/blog/habits/sustainable-fitness-habits-hero.webp",
    readTime: "7 min read",
    date: "Jun 30, 2026",
    tag: "New",
    status: "published",
  },
];

const CATEGORIES = ["All", "AI Coaching", "Nutrition", "Biometrics", "Mindfulness", "Recovery", "Behavioral"];

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // The main featured post at the top
  const featuredPost = useMemo(() => {
    return ALL_POSTS.find((post) => post.tag === "Featured");
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #050505 40%, #080814 100%)",
        color: "white",
      }}
    >
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Ambient radial glows */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,242,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#818cf8",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                padding: "6px 16px",
                borderRadius: "100px",
                marginBottom: "24px",
              }}
            >
              <Sparkles size={12} /> Fitnivo Journal
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "900",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              Precision{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00F2FF, #818cf8, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Performance Intel
              </span>
            </h1>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto 48px auto",
                lineHeight: 1.6,
              }}
            >
              Scientific frameworks, AI integrations, and behavioral protocols designed to maximize your physiological potential.
            </p>
          </motion.div>

          {/* Interactive Search & Filter Control Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Search Input Box */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "550px",
              }}
            >
              <Search
                size={20}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "rgba(255,255,255,0.4)",
                }}
              />
              <input
                type="text"
                placeholder="Search articles by topic, keyword, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 20px 16px 54px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "500",
                  outline: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backdropFilter: "blur(12px)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(99,102,241,0.15)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              />
            </div>

            {/* Category Pills Slider */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "4px",
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "100px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      border: isActive
                        ? "1px solid rgba(99,102,241,0.5)"
                        : "1px solid rgba(255,255,255,0.05)",
                      background: isActive
                        ? "rgba(99,102,241,0.15)"
                        : "rgba(255,255,255,0.03)",
                      color: isActive ? "#a5b4fc" : "rgba(255,255,255,0.6)",
                      transition: "all 0.2s ease",
                      backdropFilter: "blur(6px)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "white";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Card Section (Only visible when no search query and 'All' category selected) */}
      {searchQuery === "" && selectedCategory === "All" && featuredPost && (
        <section style={{ padding: "40px 0 20px 0" }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "32px",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="featured-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)";
                    e.currentTarget.style.background = "rgba(99,102,241,0.03)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Visual Left */}
                  <div style={{ position: "relative", minHeight: "320px", overflow: "hidden" }}>
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="100vw"
                      style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.2) 100%)",
                      }}
                    />
                    {/* Floating badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                        fontSize: "11px",
                        fontWeight: "800",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "6px 14px",
                        borderRadius: "100px",
                        background: "rgba(99,102,241,0.25)",
                        color: "#a5b4fc",
                        border: "1px solid rgba(99,102,241,0.4)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      ★ FEATURED ARTICLE
                    </span>
                  </div>

                  {/* Content Right */}
                  <div
                    style={{
                      padding: "40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "800",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: featuredPost.categoryColor,
                        marginBottom: "16px",
                      }}
                    >
                      {featuredPost.category}
                    </span>

                    <h2
                      style={{
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                        fontWeight: "800",
                        color: "white",
                        lineHeight: 1.2,
                        marginBottom: "16px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {featuredPost.title}
                    </h2>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "16px",
                        lineHeight: 1.7,
                        marginBottom: "32px",
                        maxWidth: "680px",
                      }}
                    >
                      {featuredPost.excerpt}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "16px", color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <Calendar size={14} /> {featuredPost.date}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <Clock size={14} /> {featuredPost.readTime}
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#818cf8",
                          fontSize: "15px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        Read Full Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <style jsx>{`
            @media (min-width: 992px) {
              :global(.featured-card) {
                grid-template-columns: 1.2fr 1fr !important;
              }
            }
          `}</style>
        </section>
      )}

      {/* Grid of Articles */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "36px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "16px",
            }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "white" }}>
              {searchQuery || selectedCategory !== "All" ? "Filter Results" : "All Insights & Research"}
            </h2>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", fontWeight: "600" }}>
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <BookOpen size={48} style={{ color: "rgba(255,255,255,0.2)", marginBottom: "16px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "white", marginBottom: "8px" }}>No Articles Found</h3>
              <p style={{ color: "rgba(255,255,255,0.4)" }}>
                We couldn't find any articles matching your current filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#818cf8",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
              }}
            >
              <AnimatePresence>
                {filteredPosts.map((post) => {
                  const isPublished = post.status === "published";
                  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                    isPublished ? (
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                        {children}
                      </Link>
                    ) : (
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                        {children}
                      </Link>
                    );

                  return (
                    <motion.div
                      key={post.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardWrapper>
                        <motion.div
                          whileHover={{ y: -8, scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          style={{
                            background: "rgba(255,255,255,0.015)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderRadius: "24px",
                            overflow: "hidden",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = isPublished
                              ? "rgba(99,102,241,0.3)"
                              : "rgba(255,255,255,0.1)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                          }}
                        >
                          {/* Image */}
                          <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              style={{
                                objectFit: "cover",
                                filter: isPublished ? "none" : "grayscale(0.6) brightness(0.7)",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)",
                              }}
                            />

                            {/* Badges */}
                            <span
                              style={{
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                fontSize: "10px",
                                fontWeight: "800",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                padding: "4px 10px",
                                borderRadius: "100px",
                                background: isPublished ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.1)",
                                color: isPublished ? "#818cf8" : "rgba(255,255,255,0.7)",
                                border: isPublished
                                  ? "1px solid rgba(99,102,241,0.3)"
                                  : "1px solid rgba(255,255,255,0.2)",
                                backdropFilter: "blur(8px)",
                              }}
                            >
                              {post.tag}
                            </span>

                            {!isPublished && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "16px",
                                  right: "16px",
                                  background: "rgba(0,0,0,0.65)",
                                  borderRadius: "50%",
                                  width: "28px",
                                  height: "28px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backdropFilter: "blur(6px)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                }}
                              >
                                <Lock size={12} style={{ color: "rgba(255,255,255,0.7)" }} />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
                            {/* Category */}
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: "800",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: post.categoryColor,
                                marginBottom: "12px",
                                display: "block",
                              }}
                            >
                              {post.category}
                            </span>

                            {/* Title */}
                            <h3
                              style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "white",
                                lineHeight: 1.4,
                                marginBottom: "14px",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p
                              style={{
                                color: "rgba(255,255,255,0.55)",
                                fontSize: "14px",
                                lineHeight: 1.6,
                                marginBottom: "24px",
                                flex: 1,
                              }}
                            >
                              {post.excerpt}
                            </p>

                            {/* Meta bottom */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingTop: "18px",
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                              }}
                            >
                              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                                <Calendar size={12} /> {post.date}
                              </span>
                              <span
                                style={{
                                  color: isPublished ? "#818cf8" : "rgba(255,255,255,0.4)",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}
                              >
                                {isPublished ? (
                                  <>Read Article →</>
                                ) : (
                                  <>Research Preview →</>
                                )}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </CardWrapper>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup Banner Section */}
      <section
        style={{
          padding: "100px 0",
          background: "radial-gradient(circle at center, rgba(99,102,241,0.06) 0%, transparent 60%)",
          borderTop: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "32px",
              padding: "48px 32px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "12px" }}>
              Join the Roster
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "480px", margin: "0 auto 28px auto", lineHeight: 1.6 }}>
              Get peer-reviewed sports science summaries, AI workflow updates, and biometric optimization protocols delivered straight to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribe}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                  className="subscribe-form"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your professional email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: "16px 24px",
                      borderRadius: "100px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(0,0,0,0.3)",
                      color: "white",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                      textAlign: "center",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "16px 36px",
                      borderRadius: "100px",
                      background: "white",
                      color: "black",
                      fontWeight: "700",
                      fontSize: "14px",
                      border: "none",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    Subscribe to Intel
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ color: "#34d399", fontWeight: "700", fontSize: "16px" }}
                >
                  ✓ Welcome to the elite roster. Check your inbox for confirmation.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 576px) {
            .subscribe-form {
              flex-direction: row !important;
            }
            .subscribe-form input {
              text-align: left !important;
            }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}
