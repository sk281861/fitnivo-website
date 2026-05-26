'use client';

import { useState, useEffect } from 'react';
import { workoutGoals, workoutsByGoal } from '@/lib/widgets/workoutData';

export default function WorkoutCustomization() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage
    const saved = localStorage.getItem('workout-goal');
    if (saved) {
      setSelectedGoal(saved);
    }
  }, []);

  useEffect(() => {
    if (selectedGoal) {
      localStorage.setItem('workout-goal', selectedGoal);
    }
  }, [selectedGoal]);

  if (!mounted) return null;

  const workouts = selectedGoal ? workoutsByGoal[selectedGoal] : [];

  return (
    <section className="py-16 md:py-24 bg-white" data-section="widget">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customize Your Workouts
          </h2>
          <p className="text-lg text-gray-600">
            Select your fitness goal to see personalized workout recommendations
          </p>
        </div>

        {/* Goal Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workoutGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedGoal === goal.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
              aria-pressed={selectedGoal === goal.id}
            >
              <div className="text-4xl mb-3">{goal.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{goal.label}</h3>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </button>
          ))}
        </div>

        {/* Workout Results */}
        {selectedGoal && workouts.length > 0 && (
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recommended Workouts for {workoutGoals.find(g => g.id === selectedGoal)?.label}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {workout.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {workout.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-indigo-600 font-medium">
                      {workout.duration}
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                      {workout.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedGoal && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Select a fitness goal above to see personalized workout recommendations
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
