'use client';

import { useState, useEffect } from 'react';
import { dietaryPreferences, mealPlansByPreference } from '@/lib/widgets/nutritionData';

export default function NutritionProfile() {
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const saved = localStorage.getItem('nutrition-preference');
    if (saved) {
      setSelectedPreference(saved);
    }
  }, []);

  useEffect(() => {
    if (selectedPreference) {
      localStorage.setItem('nutrition-preference', selectedPreference);
    }
  }, [selectedPreference]);

  if (!mounted) return null;

  const mealPlans = selectedPreference ? mealPlansByPreference[selectedPreference] : [];

  return (
    <section className="py-16 md:py-24 bg-white" data-section="widget">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personalized Nutrition Plans
          </h2>
          <p className="text-lg text-gray-600">
            Select your dietary preference to discover meal plans tailored to your needs
          </p>
        </div>

        {/* Preference Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {dietaryPreferences.map((pref) => (
            <button
              key={pref.id}
              onClick={() => setSelectedPreference(pref.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                selectedPreference === pref.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
              aria-pressed={selectedPreference === pref.id}
              title={pref.description}
            >
              <div className="text-3xl mb-2">{pref.icon}</div>
              <p className="text-sm font-medium text-gray-900">{pref.label}</p>
            </button>
          ))}
        </div>

        {/* Meal Plans Results */}
        {selectedPreference && mealPlans.length > 0 && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Meal Plans for {dietaryPreferences.find(p => p.id === selectedPreference)?.label}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mealPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {plan.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Macros:</span>
                      <span className="font-medium text-indigo-600">{plan.macros}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Meals/Day:</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        {plan.meals}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedPreference && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Select a dietary preference above to see personalized meal plans
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
