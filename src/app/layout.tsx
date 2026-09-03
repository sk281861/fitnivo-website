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
  metadataBase: new URL('https://fitnivo.in'),
  title: {
    default: 'Fitnivo — AI Fitness & Nutrition Coach | Personal AI Trainer',
    template: '%s | Fitnivo',
  },
  description:
    'Fitnivo is your AI fitness and nutrition coach — personalized workouts, calorie & macro tracking, AI food scanning, and meal planning in one app.',
  openGraph: {
    type: 'website',
    siteName: 'Fitnivo',
    url: 'https://fitnivo.in',
    title: 'Fitnivo — AI Fitness & Nutrition Coach',
    description:
      'Personalized AI workouts, calorie & macro tracking, AI food scanning, and meal planning in one app.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitnivo — AI Fitness & Nutrition Coach',
    description:
      'Personalized AI workouts, calorie & macro tracking, AI food scanning, and meal planning in one app.',
  },
  verification: {
    google: 'IeEXdWHYshLJYhyG80USropVWT-3gAw7dc4YtgQi7xI',
  },
  alternates: {
    canonical: 'https://fitnivo.in/',
    languages: {
      'en-US': 'https://fitnivo.in/',
      'en': 'https://fitnivo.in/',
      'x-default': 'https://fitnivo.in/',
    },
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fitnivo",
      "url": "https://fitnivo.in",
      "logo": "https://fitnivo.in/favicon.webp",
      "sameAs": [
        "https://www.instagram.com/fitnivo.app/",
        "https://play.google.com/store/apps/details?id=com.fitnivo.app"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Fitnivo",
      "url": "https://fitnivo.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://fitnivo.in/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Fitnivo",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "HealthApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Fitnivo is an AI fitness and nutrition coach that combines personalized workouts, calorie and macro tracking, AI food scanning, meal planning, and fitness coaching in one app."
    }
  ];

  return (
    <html lang="en-US" className={outfit.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Fitnivo" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/images/hero/Fitnivo_hero_section.webp" as="image" type="image/webp" fetchPriority="high" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { background-color: #000; color: #fff; }
          .hero-section-wrapper { background-color: #000; }
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
