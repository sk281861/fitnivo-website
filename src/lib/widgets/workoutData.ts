export interface WorkoutGoal {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
}

export const workoutGoals: WorkoutGoal[] = [
  {
    id: 'strength',
    label: 'Strength',
    description: 'Build muscle and increase power',
    icon: '💪',
  },
  {
    id: 'endurance',
    label: 'Endurance',
    description: 'Improve cardiovascular fitness',
    icon: '🏃',
  },
  {
    id: 'flexibility',
    label: 'Flexibility',
    description: 'Enhance mobility and range of motion',
    icon: '🧘',
  },
  {
    id: 'weight-loss',
    label: 'Weight Loss',
    description: 'Burn calories and lose fat',
    icon: '🔥',
  },
];

export const workoutsByGoal: Record<string, Workout[]> = {
  strength: [
    {
      id: 'strength-1',
      title: 'Strength Training',
      description: 'Progressive resistance training with compound movements',
      duration: '60 min',
      difficulty: 'Intermediate',
    },
    {
      id: 'strength-2',
      title: 'Power Building',
      description: 'Explosive movements to build functional strength',
      duration: '45 min',
      difficulty: 'Advanced',
    },
    {
      id: 'strength-3',
      title: 'Hypertrophy Focus',
      description: 'High-volume training for muscle growth',
      duration: '75 min',
      difficulty: 'Intermediate',
    },
  ],
  endurance: [
    {
      id: 'endurance-1',
      title: 'Steady State Cardio',
      description: 'Consistent-paced aerobic training',
      duration: '45 min',
      difficulty: 'Beginner',
    },
    {
      id: 'endurance-2',
      title: 'HIIT Training',
      description: 'High-intensity intervals for maximum efficiency',
      duration: '30 min',
      difficulty: 'Advanced',
    },
    {
      id: 'endurance-3',
      title: 'Long Distance',
      description: 'Extended endurance building sessions',
      duration: '90 min',
      difficulty: 'Intermediate',
    },
  ],
  flexibility: [
    {
      id: 'flexibility-1',
      title: 'Dynamic Stretching',
      description: 'Movement-based flexibility work',
      duration: '30 min',
      difficulty: 'Beginner',
    },
    {
      id: 'flexibility-2',
      title: 'Yoga Flow',
      description: 'Flowing yoga sequences for mobility',
      duration: '45 min',
      difficulty: 'Intermediate',
    },
    {
      id: 'flexibility-3',
      title: 'Deep Stretching',
      description: 'Intense static stretching for maximum range',
      duration: '40 min',
      difficulty: 'Intermediate',
    },
  ],
  'weight-loss': [
    {
      id: 'weight-loss-1',
      title: 'Circuit Training',
      description: 'Full-body circuits for calorie burn',
      duration: '40 min',
      difficulty: 'Intermediate',
    },
    {
      id: 'weight-loss-2',
      title: 'Metabolic Conditioning',
      description: 'High-intensity metabolic workouts',
      duration: '35 min',
      difficulty: 'Advanced',
    },
    {
      id: 'weight-loss-3',
      title: 'Active Recovery',
      description: 'Low-impact calorie-burning sessions',
      duration: '50 min',
      difficulty: 'Beginner',
    },
  ],
};
