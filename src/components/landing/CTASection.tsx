interface CTASectionProps {
  headline: string;
  subheading: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export default function CTASection({
  headline,
  subheading,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: CTASectionProps) {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      data-section="cta"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-blue-600/90" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>

        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={primaryCTA.href}
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {primaryCTA.text}
          </a>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
