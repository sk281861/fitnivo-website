import { Metadata } from 'next';

export interface LandingPageMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords: string[];
}

export function generateLandingPageMetadata(
  page: LandingPageMetadata
): Metadata {
  // Validate description is 150-160 characters
  if (page.description.length < 150 || page.description.length > 160) {
    console.warn(
      `Meta description for ${page.url} is ${page.description.length} chars. Target: 150-160.`
    );
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.url,
      type: 'website',
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [page.image],
    },
    robots: 'index, follow',
  };
}
