export interface WellnessDimension {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface WellnessProfile {
  id: string;
  title: string;
  description: string;
  recommendations: string[];
}

export const wellnessDimensions: WellnessDimension[] = [
  {
    id: 'sleep',
    label: 'Sleep',
    description: 'Quality and duration of sleep',
    icon: '😴',
  },
  {
    id: 'stress',
    label: 'Stress',
    description: 'Current stress levels',
    icon: '😰',
  },
  {
    id: 'focus',
    label: 'Focus',
    description: 'Mental clarity and concentration',
    icon: '🧠',
  },
  {
    id: 'energy',
    label: 'Energy',
    description: 'Overall energy levels',
    icon: '⚡',
  },
  {
    id: 'mood',
    label: 'Mood',
    description: 'Emotional well-being',
    icon: '😊',
  },
];

export const wellnessProfiles: WellnessProfile[] = [
  {
    id: 'optimal',
    title: 'Optimal Wellness',
    description: 'You are in excellent overall wellness condition',
    recommendations: [
      'Maintain your current routine',
      'Focus on consistency',
      'Explore advanced wellness practices',
      'Consider mentoring others',
    ],
  },
  {
    id: 'good',
    title: 'Good Wellness',
    description: 'You have solid wellness foundations',
    recommendations: [
      'Identify one area to improve',
      'Increase sleep consistency',
      'Add stress management practices',
      'Boost energy with movement',
    ],
  },
  {
    id: 'fair',
    title: 'Fair Wellness',
    description: 'There is room for improvement',
    recommendations: [
      'Prioritize sleep quality',
      'Implement stress reduction',
      'Add daily movement',
      'Practice mindfulness',
    ],
  },
  {
    id: 'needs-attention',
    title: 'Needs Attention',
    description: 'Your wellness needs immediate focus',
    recommendations: [
      'Start with sleep optimization',
      'Seek professional support',
      'Begin gentle movement',
      'Practice daily meditation',
    ],
  },
];

export function calculateWellnessProfile(ratings: Record<string, number>): WellnessProfile {
  const average = Object.values(ratings).reduce((a, b) => a + b, 0) / 5;

  if (average >= 4.5) return wellnessProfiles[0]; // Optimal
  if (average >= 3.5) return wellnessProfiles[1]; // Good
  if (average >= 2.5) return wellnessProfiles[2]; // Fair
  return wellnessProfiles[3]; // Needs Attention
}
