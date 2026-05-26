import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  headline: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export default function FeatureCard({
  icon,
  headline,
  description,
  image,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
      {/* Icon */}
      <div className="p-4 md:p-6 bg-white/5 border-b border-white/5 flex items-center justify-center">
        <span className="text-4xl md:text-5xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{icon}</span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 line-clamp-2">{headline}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Image */}
        {image && (
          <div className="mt-auto rounded-xl overflow-hidden border border-white/5 bg-black/40 relative w-full h-40 md:h-48">
            <Image
              src={image}
              alt={imageAlt || headline}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </div>
    </div>
  );
}
