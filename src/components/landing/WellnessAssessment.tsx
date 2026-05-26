'use client';

import { useState, useEffect } from 'react';
import {
  wellnessDimensions,
  calculateWellnessProfile,
} from '@/lib/widgets/wellnessData';

export default function WellnessAssessment() {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [profile, setProfile] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const saved = localStorage.getItem('wellness-ratings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setRatings(parsed);
      setProfile(calculateWellnessProfile(parsed));
    }
  }, []);

  const handleRating = (dimensionId: string, value: number) => {
    const newRatings = { ...ratings, [dimensionId]: value };
    setRatings(newRatings);
    localStorage.setItem('wellness-ratings', JSON.stringify(newRatings));

    // Calculate profile if all dimensions are rated
    if (Object.keys(newRatings).length === wellnessDimensions.length) {
      setProfile(calculateWellnessProfile(newRatings));
    }
  };

  if (!mounted) return null;

  const allRated = Object.keys(ratings).length === wellnessDimensions.length;

  return (
    <section className="py-16 md:py-24 bg-white" data-section="widget">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wellness Assessment
          </h2>
          <p className="text-lg text-gray-600">
            Rate your wellness across 5 key dimensions
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="space-y-8 mb-12">
          {wellnessDimensions.map((dimension) => (
            <div
              key={dimension.id}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">{dimension.icon}</span>
                    {dimension.label}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {dimension.description}
                  </p>
                </div>
              </div>

              {/* Rating Scale */}
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRating(dimension.id, value)}
                    className={`w-12 h-12 rounded-lg font-semibold transition-all ${
                      ratings[dimension.id] === value
                        ? 'bg-indigo-600 text-white scale-110'
                        : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-indigo-300'
                    }`}
                    aria-label={`Rate ${dimension.label} as ${value}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Wellness Profile */}
        {allRated && profile && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Wellness Profile
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                {profile.title}
              </h4>
              <p className="text-gray-700 mb-6">{profile.description}</p>
            </div>

            {/* Recommendations */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">
                Personalized Recommendations:
              </h5>
              <ul className="space-y-3">
                {profile.recommendations.map((rec: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-indigo-600 font-bold mt-1">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!allRated && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Rate all dimensions above to see your personalized wellness profile
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
