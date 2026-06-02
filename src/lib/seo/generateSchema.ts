export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  ratingValue?: number;
  ratingCount?: number;
}

export function generateProductSchema(props: ProductSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    image: props.image,
    url: props.url,
    brand: {
      '@type': 'Brand',
      name: 'Fitnivo',
    },
    ...(props.ratingValue && props.ratingCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: props.ratingValue,
        ratingCount: props.ratingCount,
      },
    }),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fitnivo',
    url: 'https://fitnivo.in',
    logo: 'https://fitnivo.in/favicon.webp',
    sameAs: [
      'https://www.instagram.com/fitnivo.app/'
    ]
  };
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  wordCount?: number;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    image: props.image,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    ...(props.wordCount && { wordCount: props.wordCount }),
    author: {
      '@type': 'Person',
      name: props.authorName,
      ...(props.authorUrl && { url: props.authorUrl }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fitnivo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fitnivo.in/favicon.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}
