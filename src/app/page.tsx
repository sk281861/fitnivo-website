export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import Footer from "@/components/Footer";
import nextDynamic from "next/dynamic";
import { generateOrganizationSchema } from "@/lib/seo/generateSchema";
import BlogPreviewSection from "@/components/BlogPreviewSection";

// Dynamically import client-side interactive widgets to enable code-splitting
const AiCoach = nextDynamic(() => import("@/components/AiCoach"), { ssr: true });
const MindfulnessSection = nextDynamic(() => import("@/components/MindfulnessSection"), { ssr: true });
const AppPreview = nextDynamic(() => import("@/components/AppPreview"), { ssr: true });
const Transformation = nextDynamic(() => import("@/components/Transformation"), { ssr: true });

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const schemaJson = JSON.stringify(organizationSchema);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <Navbar />
      <Hero />
      <PillarsSection />
      <AiCoach />
      <MindfulnessSection />
      <AppPreview />
      <Transformation />
      <BlogPreviewSection />
      <Footer />
    </main>
  );
}
