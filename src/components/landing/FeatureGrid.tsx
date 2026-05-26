import FeatureCard from './FeatureCard';

interface Feature {
  icon: string;
  headline: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface FeatureGridProps {
  title: string;
  description?: string;
  features: Feature[];
}

export default function FeatureGrid({
  title,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 bg-[#0B0B0F] relative overflow-hidden" data-section="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              headline={feature.headline}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
