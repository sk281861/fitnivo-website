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
