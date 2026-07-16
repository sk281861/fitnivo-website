const sharp = require('sharp');

const imagesToProcess = [
  {
    in: 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\Mobile_mockup_design_202607170325.jpeg',
    out: 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\complete-fitness-anti-burnout.webp'
  },
  {
    in: 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\Realistic_mobile_mockup_android_…_202607170332.jpeg',
    out: 'c:\\Users\\sandeep.k\\OneDrive\\Desktop\\website\\public\\images\\ai-coach-custom-workouts.webp'
  }
];

async function convert() {
  for (const img of imagesToProcess) {
    try {
      await sharp(img.in)
        .webp({ quality: 80 })
        .toFile(img.out);
      console.log(`Successfully converted to ${img.out}`);
    } catch (e) {
      console.error(`Error converting ${img.in}:`, e);
    }
  }
}

convert();
