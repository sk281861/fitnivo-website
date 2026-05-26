const { chromium } = require('@playwright/test');

async function checkAlignment() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });

  const pages = [
    '/',
    '/ai-fitness-coach',
    '/nutrition-intelligence',
    '/mindfulness-wellness',
    '/biometric-sync'
  ];

  console.log('🔍 Checking alignment issues on all landing pages...\n');

  for (const pagePath of pages) {
    try {
      const url = `http://localhost:3000${pagePath}`;
      console.log(`📄 Checking: ${url}`);
      
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Take screenshot
      const screenshotPath = `./screenshots/${pagePath.replace(/\//g, '-')}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`   ✅ Screenshot saved: ${screenshotPath}`);

      // Check for alignment issues
      const issues = await page.evaluate(() => {
        const problems = [];
        
        // Check hero section
        const hero = document.querySelector('[data-section="hero"]');
        if (hero) {
          const rect = hero.getBoundingClientRect();
          if (rect.left < 0 || rect.right > window.innerWidth) {
            problems.push(`Hero section overflow: left=${rect.left}, right=${rect.right}, width=${window.innerWidth}`);
          }
        }

        // Check feature grid
        const features = document.querySelectorAll('[data-section="features"] > div');
        if (features.length > 0) {
          features.forEach((feature, idx) => {
            const rect = feature.getBoundingClientRect();
            if (rect.left < 0 || rect.right > window.innerWidth) {
              problems.push(`Feature ${idx} overflow: left=${rect.left}, right=${rect.right}`);
            }
          });
        }

        // Check for text overflow
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          if (el.scrollWidth > el.clientWidth) {
            const text = el.textContent?.substring(0, 50) || 'no text';
            problems.push(`Text overflow in ${el.tagName}: "${text}..."`);
          }
        });

        return problems;
      });

      if (issues.length > 0) {
        console.log(`   ⚠️  Issues found:`);
        issues.forEach(issue => console.log(`      - ${issue}`));
      } else {
        console.log(`   ✅ No alignment issues detected`);
      }
      console.log('');

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}\n`);
    }
  }

  await browser.close();
}

checkAlignment().catch(console.error);
