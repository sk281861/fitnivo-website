"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import MindfulnessSection from "@/components/MindfulnessSection";
import AiCoach from "@/components/AiCoach";
import AppPreview from "@/components/AppPreview";
import Transformation from "@/components/Transformation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PillarsSection />
      <AiCoach />
      <MindfulnessSection />
      <AppPreview />
      <Transformation />
      <Footer />
    </main>
  );
}
