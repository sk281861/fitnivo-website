# Implementation Plan: Fitnivo Landing Pages

## Overview

This implementation plan breaks down the design and requirements into executable tasks across 4 phases: Foundation & Utilities, Interactive Widgets, Landing Pages, and Testing & Optimization.

## Tasks

### Phase 1: Foundation & Utilities

#### Task 1. Create SEO Utilities
- [x] 1. Create `lib/seo/generateMetadata.ts` for meta tag generation
- [x] 2. Create `lib/seo/generateSchema.ts` for JSON-LD schema markup
- [x] 3. Create `lib/seo/generateBreadcrumbs.ts` for breadcrumb schema
- [x] 4. Implement meta description validation (150-160 chars)
- [x] 5. Implement Product schema with aggregateRating
- [x] 6. Implement BreadcrumbList schema

#### Task 2. Create Widget Data and Constants
- [x] 7. Create `lib/widgets/workoutData.ts` with fitness goals and workouts
- [x] 8. Create `lib/widgets/nutritionData.ts` with dietary preferences and meal plans
- [x] 9. Create `lib/widgets/wellnessData.ts` with wellness dimensions and profiles
- [x] 10. Create `lib/widgets/deviceData.ts` with device compatibility data
- [x] 11. Create `lib/constants/colors.ts` for color palette
- [x] 12. Create `lib/constants/typography.ts` for type scale
- [x] 13. Create `lib/constants/spacing.ts` for spacing scale

#### Task 3. Create Reusable Components
- [x] 14. Create `src/components/landing/HeroSection.tsx` with animations
- [x] 15. Create `src/components/landing/FeatureCard.tsx` with responsive layout
- [x] 16. Create `src/components/landing/FeatureGrid.tsx` for 5-column grid
- [x] 17. Create `src/components/landing/TestimonialCarousel.tsx` with auto-rotation
- [x] 18. Create `src/components/landing/FAQAccordion.tsx` with smooth animations
- [x] 19. Create `src/components/landing/CTASection.tsx` with app store links
- [x] 20. Create `src/components/landing/RelatedContent.tsx` for internal links

### Phase 2: Interactive Widgets

#### Task 4. Implement Workout Customization Widget
- [x] 21. Create `src/components/landing/WorkoutCustomization.tsx`
- [x] 22. Implement 4 fitness goals (Strength, Endurance, Flexibility, Weight Loss)
- [x] 23. Display 3 sample workouts per goal
- [x] 24. Implement localStorage persistence
- [x] 25. Add keyboard navigation and ARIA labels
- [x] 26. Test widget state management

#### Task 5. Implement Nutrition Profile Widget
- [x] 27. Create `src/components/landing/NutritionProfile.tsx`
- [x] 28. Implement 6 dietary preference options
- [x] 29. Display 3 meal plans per preference selection
- [x] 30. Implement localStorage persistence
- [x] 31. Add keyboard navigation and ARIA labels
- [x] 32. Test widget state management

#### Task 6. Implement Wellness Assessment Widget
- [x] 33. Create `src/components/landing/WellnessAssessment.tsx`
- [x] 34. Implement 5 wellness dimensions with 5-point scales
- [x] 35. Display personalized wellness profile
- [x] 36. Implement localStorage persistence
- [x] 37. Add keyboard navigation and ARIA labels
- [x] 38. Test widget state management

#### Task 7. Implement Device Compatibility Widget
- [x] 39. Create `src/components/landing/DeviceCompatibility.tsx`
- [x] 40. Implement 8 device categories
- [x] 41. Display compatibility details per device
- [x] 42. Implement localStorage persistence
- [x] 43. Add keyboard navigation and ARIA labels
- [x] 44. Test widget state management

### Phase 3: Landing Pages

#### Task 8. Implement AI Fitness Coach Landing Page
- [x] 45. Create `src/app/ai-fitness-coach/page.tsx`
- [x] 46. Create `src/app/ai-fitness-coach/layout.tsx`
- [x] 47. Implement hero section with headline (≤50 chars)
- [x] 48. Implement 5 feature sections
- [x] 49. Integrate WorkoutCustomization widget
- [x] 50. Implement comparison table (5 points)
- [x] 51. Add testimonials section (3 testimonials)
- [x] 52. Add FAQ section (5 questions)
- [x] 53. Add CTA section with app store links
- [x] 54. Add related content links
- [x] 55. Generate SEO metadata (150-160 char description)
- [x] 56. Generate Product schema with aggregateRating
- [x] 57. Optimize images (WebP format, explicit dimensions)
- [x] 58. Test Core Web Vitals targets

#### Task 9. Implement Nutrition Intelligence Landing Page
- [x] 59. Create `src/app/nutrition-intelligence/page.tsx`
- [x] 60. Create `src/app/nutrition-intelligence/layout.tsx`
- [x] 61. Implement hero section with headline (≤50 chars)
- [x] 62. Implement 5 feature sections
- [x] 63. Integrate NutritionProfile widget
- [x] 64. Implement nutrition science section
- [x] 65. Add testimonials section (3 testimonials)
- [x] 66. Add FAQ section (5 questions)
- [x] 67. Add CTA section with app store links
- [x] 68. Add related content links
- [x] 69. Generate SEO metadata (150-160 char description)
- [x] 70. Generate Product schema with aggregateRating
- [x] 71. Optimize images (WebP format, explicit dimensions)
- [x] 72. Test Core Web Vitals targets

#### Task 10. Implement Mindfulness & Wellness Landing Page
- [x] 73. Create `src/app/mindfulness-wellness/page.tsx`
- [x] 74. Create `src/app/mindfulness-wellness/layout.tsx`
- [x] 75. Implement hero section with headline (≤50 chars)
- [x] 76. Implement 5 feature sections
- [x] 77. Integrate WellnessAssessment widget
- [x] 78. Implement meditation science section
- [x] 79. Add testimonials section (3 testimonials)
- [x] 80. Add FAQ section (5 questions)
- [x] 81. Add CTA section with app store links
- [x] 82. Add related content links
- [x] 83. Generate SEO metadata (150-160 char description)
- [x] 84. Generate Product schema with aggregateRating
- [x] 85. Optimize images (WebP format, explicit dimensions)
- [x] 86. Test Core Web Vitals targets

#### Task 11. Implement Biometric Synchronization Landing Page
- [x] 87. Create `src/app/biometric-sync/page.tsx`
- [x] 88. Create `src/app/biometric-sync/layout.tsx`
- [x] 89. Implement hero section with headline (≤50 chars)
- [x] 90. Implement 5 feature sections
- [x] 91. Integrate DeviceCompatibility widget
- [x] 92. Implement data privacy section
- [x] 93. Add testimonials section (3 testimonials)
- [x] 94. Add FAQ section (5 questions)
- [x] 95. Add CTA section with app store links
- [x] 96. Add related content links
- [x] 97. Generate SEO metadata (150-160 char description)
- [x] 98. Generate Product schema with aggregateRating
- [x] 99. Optimize images (WebP format, explicit dimensions)
- [x] 100. Test Core Web Vitals targets

### Phase 4: Testing & Optimization

#### Task 12. Performance Optimization and Testing
- [ ] 101. Run Lighthouse audits on all landing pages
- [ ] 102. Verify Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] 103. Test image optimization (WebP format, lazy loading)
- [ ] 104. Verify font loading strategy (font-display: swap)
- [ ] 105. Test code-splitting for widgets
- [ ] 106. Verify responsive design on mobile, tablet, desktop
- [ ] 107. Test touch-friendly interactions (44x44px minimum)

#### Task 13. Accessibility and SEO Verification
- [ ] 108. Verify WCAG 2.1 AA compliance
- [ ] 109. Test keyboard navigation on all pages
- [ ] 110. Verify color contrast (4.5:1 for text)
- [ ] 111. Test screen reader compatibility
- [ ] 112. Verify all images have alt text
- [ ] 113. Verify heading hierarchy (H1 → H2 → H3)
- [ ] 114. Verify schema markup validation at schema.org/validator
- [ ] 115. Verify meta descriptions (150-160 chars)
- [ ] 116. Verify canonical URLs
- [ ] 117. Verify internal links with descriptive anchor text

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "tasks": [1, 2, 3],
      "description": "Foundation & Utilities - Create SEO utilities, widget data, and reusable components"
    },
    {
      "wave": 2,
      "tasks": [4, 5, 6, 7],
      "description": "Interactive Widgets - Implement all 4 interactive widgets",
      "dependsOn": [1, 2, 3]
    },
    {
      "wave": 3,
      "tasks": [8, 9, 10, 11],
      "description": "Landing Pages - Implement all 4 landing pages",
      "dependsOn": [1, 2, 3, 4, 5, 6, 7]
    },
    {
      "wave": 4,
      "tasks": [12, 13],
      "description": "Testing & Optimization - Performance and accessibility verification",
      "dependsOn": [8, 9, 10, 11]
    }
  ]
}
```

## Notes

- All tasks follow the design specifications from design.md
- Each landing page integrates one interactive widget
- SEO metadata and schema markup are generated for all pages
- Core Web Vitals optimization is critical for search ranking
- Accessibility compliance ensures inclusive user experience
- Testing phase validates all requirements before deployment
- Tasks 1-100 are marked as completed (already implemented)
- Tasks 101-117 are pending (testing and optimization phase)
