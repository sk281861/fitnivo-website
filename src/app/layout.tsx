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
  title: 'Fitnivo - AI Fitness & Nutrition Coach',
  description: 'Optimize your health with customized biometric-driven workouts and nutritional intelligence.',
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_STRING_HERE',
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
    <html lang="en-US" className={outfit.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Fitnivo" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/frames/hero/ezgif-frame-001.webp" as="image" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
