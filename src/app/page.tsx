import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { generateOrganizationSchema } from "@/lib/seo/generateSchema";

// Dynamically import client-side interactive widgets to enable code-splitting
const AiCoach = dynamic(() => import("@/components/AiCoach"));
const MindfulnessSection = dynamic(() => import("@/components/MindfulnessSection"));
const AppPreview = dynamic(() => import("@/components/AppPreview"));
const Transformation = dynamic(() => import("@/components/Transformation"));

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
      <Footer />
    </main>
  );
}
