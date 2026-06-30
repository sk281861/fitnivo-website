"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    category: "Nutrition Science",
    categoryColor: "#34d399",
    title: "Nutrition Science: Macros, Micros & Personalization",
    excerpt:
      "Most people track calories. Elite performers track nutrient quality, timing, and individual metabolic response — the trio that actually moves the needle.",
    href: "/blog/nutrition-science-personalization",
    image: "/images/blog/nutrition/nutrition_science_hero.webp",
    readTime: "12 min read",
    date: "Jun 2, 2026",
    tag: "Featured",
  },
  {
    category: "Biometric Science",
    categoryColor: "#818cf8",
    title: "The Science of Biometric Optimization",
    excerpt:
      "How wearables and AI combine to decode your body's data and convert it into precision performance protocols.",
    href: "/blog/biometric-optimization-science",
    image: "/images/wearable-biometric-recovery-sync.webp",
    readTime: "8 min read",
    date: "Jun 2, 2026",
    tag: "New",
  },
  {
    category: "AI Coaching",
    categoryColor: "#f59e0b",
    title: "AI vs. Traditional Fitness Coaching: A Complete Comparison",
    excerpt:
      "Eight dimensions where AI coaching consistently outperforms human-only methods — and where human touch still wins.",
    href: "/blog/ai-vs-traditional-coaching",
    image: "/images/fitness_coach_feature.webp",
    readTime: "10 min read",
    date: "Jun 2, 2026",
    tag: "New",
  },
];

export default function BlogPreviewSection() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, #050505 0%, #0a0a1a 50%, #050505 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#818cf8",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              padding: "6px 16px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}
          >
            Latest Insights
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Science-Backed{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818cf8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Performance Intel
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Deep dives into the research, strategies, and AI principles powering elite wellness.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={post.href}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 60%)",
                      }}
                    />
                    {/* Tag badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        fontSize: "10px",
                        fontWeight: "700",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        background: "rgba(99,102,241,0.25)",
                        color: "#818cf8",
                        border: "1px solid rgba(99,102,241,0.4)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Category */}
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: post.categoryColor,
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "white",
                        lineHeight: 1.4,
                        marginBottom: "12px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        marginBottom: "20px",
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
                        {post.date}
                      </span>
                      <span
                        style={{
                          color: "#818cf8",
                          fontSize: "12px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {post.readTime} →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center" }}
        >
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                borderRadius: "100px",
                border: "1px solid rgba(129,140,248,0.4)",
                background: "rgba(99,102,241,0.08)",
                color: "#818cf8",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                letterSpacing: "-0.01em",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.18)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(129,140,248,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(129,140,248,0.4)";
              }}
            >
              View All Articles →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
