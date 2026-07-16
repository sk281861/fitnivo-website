const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'C:\\Users\\sandeep.k\\.gemini\\antigravity-ide\\brain\\27a299d5-1802-4ec3-8874-0537bd98a238';
const outputDir = 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = {
  'ai_nutrition_1784238345967.png': 'ai-calorie-tracker-food-scanner.webp',
  'ai_coach_1784238360645.png': 'interactive-ai-personal-trainer.webp',
  'holistic_health_1784238375311.png': 'complete-fitness-mental-wellness-hub.webp',
  'gamification_analytics_1784238389823.png': 'fitness-gamification-advanced-analytics.webp'
};

async function convert() {
  for (const [inName, outName] of Object.entries(files)) {
    const inPath = path.join(inputDir, inName);
    const outPath = path.join(outputDir, outName);
    try {
      await sharp(inPath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log(`Converted ${inName} to ${outName}`);
    } catch (e) {
      console.error(`Error converting ${inName}:`, e);
    }
  }
}

convert();
