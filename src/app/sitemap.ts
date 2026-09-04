import { MetadataRoute } from 'next';

// Force static generation so the sitemap is always instantly available to crawlers
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fitnivo.in';
  const currentDate = new Date();

  return [
    // Homepage (1.0, daily)
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },

    // Pillar / Landing Pages (0.9, weekly) — money keywords
    { url: `${baseUrl}/ai-fitness-coach`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ai-food-scanner`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ai-nutrition-coach`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ai-workout-planner`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ai-meal-planner`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },

    // Secondary landing pages (0.7)
    { url: `${baseUrl}/mindfulness-wellness`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/biometric-sync`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },

    // General Pages (0.5)
    { url: `${baseUrl}/features`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.7 },

    // Category / "best-of" blogs (0.8, monthly) — high commercial intent
    { url: `${baseUrl}/blog/best-ai-fitness-apps-2026`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-ai-personal-trainer-apps-2026`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-ai-nutrition-coach-apps-2026`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },

    // Comparison blogs (0.7)
    { url: `${baseUrl}/blog/fitnivo-vs-fitbod`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/fitnivo-vs-cal-ai`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/fitnivo-vs-macrofactor`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/fitnivo-vs-myfitnesspal`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/fitnivo-vs-freeletics`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },

    // Educational / PAA blogs (0.7)
    { url: `${baseUrl}/blog/what-is-an-ai-fitness-coach`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-ai-fitness-coaches-work`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-ai-food-scanners-work`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },

    // Existing Blog Posts (0.6, monthly)
    { url: `${baseUrl}/blog/nutrition-science-personalization`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-vs-traditional-coaching`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/best-fitbod-alternatives`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/mindfulness-athletic-performance`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/sustainable-fitness-habits`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },

    { url: `${baseUrl}/blog/ai-fitness-coach-vs-personal-trainer`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/is-ai-food-scanning-accurate`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/ai-fitness-apps-for-weight-loss`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-fitness-apps-for-muscle-gain`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-fitness-apps-for-beginners`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-fitness-apps-for-home-workouts`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-nutrition-coach-for-weight-loss`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/ai-workout-generator-explained`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },

    // Legal Pages (0.3)
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/data-deletion`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.3 },
  ];
}
