const sharp = require('sharp');

const inPath = 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\Realistic_mobile_mockup_android_…_202607170332.jpeg';
const outPath = 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\anti-burnout-approach-fitness.webp';

async function convert() {
  try {
    await sharp(inPath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Successfully converted to ${outPath}`);
  } catch (e) {
    console.error(`Error converting:`, e);
  }
}

convert();
