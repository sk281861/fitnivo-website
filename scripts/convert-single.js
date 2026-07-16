const sharp = require('sharp');
const fs = require('fs');

const inPath = 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\Mobile_mockup_design_202607170325.jpeg';
const outPath = 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\anti-burnout-approach-fitness.webp';

async function convert() {
  try {
    await sharp(inPath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`Successfully converted to ${outPath}`);
    // Optional: delete original jpeg
    // fs.unlinkSync(inPath);
  } catch (e) {
    console.error(`Error converting:`, e);
  }
}

convert();
