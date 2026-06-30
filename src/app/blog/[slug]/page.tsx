import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, Bell, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

// Map of details for upcoming articles
const UPCOMING_ARTICLES: Record<
  string,
  {
    title: string;
    category: string;
    categoryColor: string;
    image: string;
    readTime: string;
    summary: string;
    highlights: string[];
    advisoryPanel: string[];
  }
> = {
  "biometric-optimization-science": {
    title: "The Science of Biometric Optimization",
    category: "Biometrics",
    categoryColor: "#818cf8",
    image: "/images/wearable-biometric-recovery-sync.webp",
    readTime: "8 min read",
    summary:
      "A deep dive into how modern wearable devices and machine learning models parse raw physiological data to generate real-time performance adjustments.",
    highlights: [
      "Continuous HRV (Heart Rate Variability) analysis and its application to daily training load tolerances.",
      "The role of sleep staging data in calculating overnight metabolic recovery speed.",
      "Standardizing bio-metric ingestion across Apple Watch, Garmin, Whoop, Oura, Fitbit, Garmin, Samsung Watch, Polar, and Strava.",
      "Prescriptive vs. descriptive biometric feedback: moving from historical logging to forward-looking training schedules.",
    ],
    advisoryPanel: ["Dr. Sarah Chen, PhD (Neuroscience)", "Marcus Vance, CSCS (High-Performance Lead)"],
  },

  "recovery-optimization-sleep-stress": {
    title: "Recovery Optimization: Sleep, Stress, and Adaptation",
    category: "Recovery",
    categoryColor: "#ec4899",
    image: "/images/blog/ai-coaching/hybrid_coaching_future.webp",
    readTime: "11 min read",
    summary:
      "A comprehensive review of the physical mechanisms governing muscle tissue repair, nervous system supercompensation, and autonomic balance.",
    highlights: [
      "The science of deep sleep and growth hormone release: metrics for optimal recovery.",
      "Mapping the physical impact of chronic psychological stress on muscle protein synthesis.",
      "Autonomic nervous system (ANS) monitoring: catching systemic overtraining before it stalls progress.",
      "Practical recovery protocols: temperature therapy, active mobility scheduling, and targeted nutrient timing.",
    ],
    advisoryPanel: ["Dr. Sarah Chen, PhD (Biomedical Science)", "Elena Rostova, MS (Exercise Physiology)"],
  },

};

// Simple list of published posts to suggest on the sidebar or bottom
const PUBLISHED_POSTS = [
  {
    slug: "nutrition-science-personalization",
    title: "Nutrition Science: Macros, Micros & Personalization",
    category: "Nutrition",
    categoryColor: "#34d399",
    image: "/images/blog/nutrition/nutrition_science_hero.webp",
    readTime: "12 min read",
  },
  {
    slug: "ai-vs-traditional-coaching",
    title: "AI vs. Traditional Fitness Coaching: A Complete Comparison",
    category: "AI Coaching",
    categoryColor: "#f59e0b",
    image: "/images/blog/ai-coaching/ai_vs_traditional_hero.webp",
    readTime: "10 min read",
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: "biometric-optimization-science" },
    { slug: "recovery-optimization-sleep-stress" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = UPCOMING_ARTICLES[slug];
  if (!article) {
    return {
      title: "Article Not Found | Fitnivo Blog",
      description: "This article does not exist or has been moved.",
    };
  }
  return {
    title: `${article.title} | Fitnivo Blog`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Fitnivo Blog`,
      description: article.summary,
      url: `https://fitnivo.in/blog/${slug}`,
      type: "article",
      images: [
        {
          url: `https://fitnivo.in${article.image}`,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Fitnivo Blog`,
      description: article.summary,
      images: [`https://fitnivo.in${article.image}`],
    },
  };
}

export default async function UpcomingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = UPCOMING_ARTICLES[slug];

  // If it's a random slug that doesn't match an upcoming post, show a clean "Not Found" message
  if (!article) {
    return (
      <main className="min-h-screen bg-[#05050a] text-white flex flex-col justify-between">
        <Navbar />
        <div className="container py-32 text-center flex-1 flex flex-col items-center justify-center">
          <FileText size={64} className="text-indigo-400/20 mb-6" />
          <h1 className="text-3xl font-extrabold mb-4">Article Not Found</h1>
          <p className="text-white/50 max-w-md mx-auto mb-8">
            The article you are trying to access doesn't exist or has been relocated to another route.
          </p>
          <Link
            href="/blog"
            className="flex items-center gap-2 px-6 py-14 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500/15 transition-all text-sm font-semibold"
            style={{ textDecoration: "none", padding: "12px 24px" }}
          >
            <ArrowLeft size={16} /> Return to Journal Index
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #050505 50%, #080814 100%)",
        color: "white",
      }}
    >
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Glowing background details */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "450px",
            borderRadius: "50%",
            background: `radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div className="container relative z-10">
          {/* Back Navigation Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-8"
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft size={16} /> Back to Journal Index
          </Link>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start"
            style={{ display: "grid", gap: "48px" }}
          >
            {/* Left Content Area */}
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: article.categoryColor,
                  }}
                >
                  {article.category}
                </span>
                <span
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    background: "rgba(245,158,11,0.1)",
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  <Lock size={10} /> Research Preview
                </span>
                <span className="text-white/40 text-sm">·</span>
                <span className="text-white/40 text-sm">{article.readTime}</span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: "900",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "white",
                  marginBottom: "24px",
                }}
              >
                {article.title}
              </h1>

              {/* Summary */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "40px",
                }}
              >
                {article.summary}
              </p>

              {/* Feature Hero Image */}
              <div
                style={{
                  position: "relative",
                  height: "380px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: "48px",
                }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  style={{ objectFit: "cover", filter: "grayscale(0.3) brightness(0.6)" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.2) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "24px",
                  }}
                >
                  <Lock size={44} className="text-amber-400 mb-4" />
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "800",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#f59e0b",
                      marginBottom: "8px",
                    }}
                  >
                    STATUS: UNDER EDITORIAL REVIEW
                  </span>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", maxWidth: "380px", textAlign: "center" }}>
                    This research paper is being validated by our scientific advisory board for physiological accuracy.
                  </p>
                </div>
              </div>

              {/* Overview Details Section */}
              <div
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "24px",
                  padding: "36px",
                  marginBottom: "40px",
                }}
              >
                <h2 style={{ fontSize: "20px", fontWeight: "800", color: "white", marginBottom: "20px" }}>
                  Key Topics In This Publication:
                </h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                  {article.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={18} className="text-indigo-400 mt-1 flex-shrink-0" />
                      <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.5" }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Science Review Board Details */}
              <div
                style={{
                  background: "rgba(99,102,241,0.03)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: "20px",
                  padding: "24px 32px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <ShieldCheck size={28} className="text-indigo-400" />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "14px", fontWeight: "700", color: "white", marginBottom: "4px" }}>
                    Scientific Advisory Panel
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: "1.4" }}>
                    Assigned Reviewers: {article.advisoryPanel.join(" · ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Info & Subscription Panel */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Notify Me Widget */}
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 24px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                  <Bell className="text-amber-400" size={24} />
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "white" }}>Get Notified</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13.5px", lineHeight: "1.5", marginBottom: "24px" }}>
                  Be the first to receive the complete, peer-reviewed article and its interactive infographics directly in your inbox.
                </p>
                
                {/* Form placeholder - redirects to index form or has small message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      padding: "12px 16px",
                      borderRadius: "100px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(0,0,0,0.2)",
                      color: "white",
                      fontSize: "13px",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                  <button
                    style={{
                      padding: "12px 18px",
                      borderRadius: "100px",
                      background: "white",
                      color: "black",
                      fontWeight: "700",
                      fontSize: "13px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <Mail size={13} /> Unlock Early Access
                  </button>
                </div>
              </div>

              {/* Read Published Articles Widget */}
              <div
                style={{
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "24px",
                  padding: "28px 24px",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "800", color: "white", marginBottom: "20px" }}>
                  Published Research
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {PUBLISHED_POSTS.map((pub) => (
                    <Link
                      key={pub.slug}
                      href={`/blog/${pub.slug}`}
                      style={{ textDecoration: "none", color: "inherit", display: "block" }}
                    >
                      <div
                        className="group"
                        style={{ display: "flex", gap: "12px", cursor: "pointer" }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "72px",
                            height: "72px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            flexShrink: 0,
                            border: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          <Image src={pub.image} alt={pub.title} fill sizes="72px" style={{ objectFit: "cover" }} />
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: "9px",
                              fontWeight: "800",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: pub.categoryColor,
                              display: "block",
                              marginBottom: "4px",
                            }}
                          >
                            {pub.category}
                          </span>
                          <h4
                            className="group-hover:text-indigo-400"
                            style={{
                              fontSize: "12.5px",
                              fontWeight: "700",
                              color: "white",
                              lineHeight: "1.3",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {pub.title}
                          </h4>
                          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10.5px" }}>{pub.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
