export interface DietaryPreference {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface MealPlan {
  id: string;
  title: string;
  description: string;
  macros: string;
  meals: number;
}

export const dietaryPreferences: DietaryPreference[] = [
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    description: 'Plant-based with dairy and eggs',
    icon: '🥬',
  },
  {
    id: 'vegan',
    label: 'Vegan',
    description: 'Completely plant-based',
    icon: '🌱',
  },
  {
    id: 'keto',
    label: 'Keto',
    description: 'Low-carb, high-fat diet',
    icon: '🥑',
  },
  {
    id: 'paleo',
    label: 'Paleo',
    description: 'Whole foods, no processed items',
    icon: '🍖',
  },
  {
    id: 'mediterranean',
    label: 'Mediterranean',
    description: 'Heart-healthy Mediterranean diet',
    icon: '🫒',
  },
  {
    id: 'balanced',
    label: 'Balanced',
    description: 'Balanced macronutrient approach',
    icon: '🍽️',
  },
];

export const mealPlansByPreference: Record<string, MealPlan[]> = {
  vegetarian: [
    {
      id: 'veg-1',
      title: 'Protein-Focused Vegetarian',
      description: 'High protein with legumes and dairy',
      macros: '40% Protein, 35% Carbs, 25% Fat',
      meals: 4,
    },
    {
      id: 'veg-2',
      title: 'Balanced Vegetarian',
      description: 'Balanced nutrients with variety',
      macros: '30% Protein, 45% Carbs, 25% Fat',
      meals: 3,
    },
    {
      id: 'veg-3',
      title: 'Energy-Optimized Vegetarian',
      description: 'Carb-focused for endurance',
      macros: '25% Protein, 55% Carbs, 20% Fat',
      meals: 5,
    },
  ],
  vegan: [
    {
      id: 'vegan-1',
      title: 'High-Protein Vegan',
      description: 'Maximized plant-based protein',
      macros: '35% Protein, 40% Carbs, 25% Fat',
      meals: 4,
    },
    {
      id: 'vegan-2',
      title: 'Balanced Vegan',
      description: 'Well-rounded vegan nutrition',
      macros: '25% Protein, 50% Carbs, 25% Fat',
      meals: 3,
    },
    {
      id: 'vegan-3',
      title: 'Whole-Food Vegan',
      description: 'Minimally processed plant foods',
      macros: '20% Protein, 60% Carbs, 20% Fat',
      meals: 5,
    },
  ],
  keto: [
    {
      id: 'keto-1',
      title: 'Standard Keto',
      description: 'Classic ketogenic macros',
      macros: '25% Protein, 5% Carbs, 70% Fat',
      meals: 2,
    },
    {
      id: 'keto-2',
      title: 'Targeted Keto',
      description: 'Keto with workout carbs',
      macros: '25% Protein, 10% Carbs, 65% Fat',
      meals: 3,
    },
    {
      id: 'keto-3',
      title: 'Cyclical Keto',
      description: 'Keto with carb-loading days',
      macros: '25% Protein, 15% Carbs, 60% Fat',
      meals: 4,
    },
  ],
  paleo: [
    {
      id: 'paleo-1',
      title: 'Protein-Heavy Paleo',
      description: 'Meat and fish focused',
      macros: '40% Protein, 30% Carbs, 30% Fat',
      meals: 3,
    },
    {
      id: 'paleo-2',
      title: 'Balanced Paleo',
      description: 'Traditional paleo approach',
      macros: '30% Protein, 40% Carbs, 30% Fat',
      meals: 3,
    },
    {
      id: 'paleo-3',
      title: 'Carb-Cycling Paleo',
      description: 'Paleo with strategic carbs',
      macros: '30% Protein, 45% Carbs, 25% Fat',
      meals: 4,
    },
  ],
  mediterranean: [
    {
      id: 'med-1',
      title: 'Heart-Healthy Mediterranean',
      description: 'Olive oil and fish focused',
      macros: '25% Protein, 45% Carbs, 30% Fat',
      meals: 3,
    },
    {
      id: 'med-2',
      title: 'Active Mediterranean',
      description: 'Higher carbs for activity',
      macros: '20% Protein, 55% Carbs, 25% Fat',
      meals: 4,
    },
    {
      id: 'med-3',
      title: 'Protein-Enhanced Mediterranean',
      description: 'Mediterranean with more protein',
      macros: '35% Protein, 40% Carbs, 25% Fat',
      meals: 4,
    },
  ],
  balanced: [
    {
      id: 'bal-1',
      title: 'Standard Balanced',
      description: 'Classic balanced macros',
      macros: '30% Protein, 45% Carbs, 25% Fat',
      meals: 3,
    },
    {
      id: 'bal-2',
      title: 'Performance Balanced',
      description: 'Optimized for athletic performance',
      macros: '35% Protein, 45% Carbs, 20% Fat',
      meals: 4,
    },
    {
      id: 'bal-3',
      title: 'Flexible Balanced',
      description: 'Flexible approach to balanced eating',
      macros: '25% Protein, 50% Carbs, 25% Fat',
      meals: 5,
    },
  ],
};
