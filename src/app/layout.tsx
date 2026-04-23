import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Fitnivo | AI-Powered Fitness, Nutrition & Mindfulness System",
  description: "Fitnivo uses advanced AI and biometric synchronization to optimize your workouts, nutrition, and holistic mental wellness in one unified system. Experience local-precision wellness tailored to your unique physiology.",
  keywords: ["AI fitness coach", "personalized AI workout planner", "biometric sync fitness", "holistic transformation app", "AI mindfulness system", "integrated wellness", "data-driven fitness protocols", "Fitnivo AI"],
  authors: [{ name: "Fitnivo Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Fitnivo | The Future of Integrated Wellness",
    description: "Synchronize your physiology with AI-driven protocols for peak human performance.",
    url: "https://fitnivo.com",
    siteName: "Fitnivo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitnivo AI Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitnivo | AI-Driven Holistic Transformation",
    description: "Peak human performance through biometric sync and AI coaching.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png?v=3",
    shortcut: "/favicon.png?v=3",
    apple: "/favicon.png?v=3",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Fitnivo",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1240"
    },
    "description": "Unified AI wellness system for advanced fitness, nutrition, and mindfulness tracking."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://fitnivo.com" />
      </head>
      <body className={`${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}
