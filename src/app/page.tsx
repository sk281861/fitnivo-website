export const dynamic = 'force-dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import nextDynamic from "next/dynamic";
import { generateOrganizationSchema } from "@/lib/seo/generateSchema";

// Dynamically import client-side interactive widgets to enable code-splitting
const PillarsSection = nextDynamic(() => import("@/components/PillarsSection"), {
  loading: () => <div style={{ minHeight: "600px" }} />,
  ssr: true,
});
const AiCoach = nextDynamic(() => import("@/components/AiCoach"), { ssr: true });
const MindfulnessSection = nextDynamic(() => import("@/components/MindfulnessSection"), { ssr: true });
const AppPreview = nextDynamic(() => import("@/components/AppPreview"), { ssr: true });
const Transformation = nextDynamic(() => import("@/components/Transformation"), { ssr: true });
const BlogPreviewSection = nextDynamic(() => import("@/components/BlogPreviewSection"), { ssr: true });
const Footer = nextDynamic(() => import("@/components/Footer"), { ssr: true });

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
