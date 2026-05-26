import Link from 'next/link';

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export default function RelatedContent({
  items,
  title = 'Related Content',
}: RelatedContentProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Explore more resources and insights
          </p>
        </div>

        {/* Related Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {item.icon && (
                <div className="text-4xl mb-4">{item.icon}</div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                Learn more
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
