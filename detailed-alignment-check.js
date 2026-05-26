const { chromium } = require('@playwright/test');

async function detailedCheck() {
  const browser = await chromium.launch();
  
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1280, height: 720 }
  ];

  const pages = [
    '/',
    '/ai-fitness-coach',
    '/nutrition-intelligence',
    '/mindfulness-wellness',
    '/biometric-sync'
  ];

  console.log('🔍 Detailed Alignment Check\n');

  for (const pagePath of pages) {
    console.log(`\n📄 Page: ${pagePath}`);
    console.log('='.repeat(60));

    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      
      try {
        const url = `http://localhost:3000${pagePath}`;
        await page.goto(url, { waitUntil: 'networkidle' });

        const metrics = await page.evaluate(() => {
          const sections = {
            hero: document.querySelector('[data-section="hero"]'),
            features: document.querySelector('[data-section="features"]'),
            widget: document.querySelector('[data-section="widget"]'),
            testimonials: document.querySelector('[data-section="testimonials"]'),
            faq: document.querySelector('[data-section="faq"]'),
            cta: document.querySelector('[data-section="cta"]')
          };

          const results = {};
          for (const [name, el] of Object.entries(sections)) {
            if (el) {
              const rect = el.getBoundingClientRect();
              const computed = window.getComputedStyle(el);
              results[name] = {
                width: rect.width,
                height: rect.height,
                padding: computed.padding,
                margin: computed.margin,
                overflow: el.scrollWidth > el.clientWidth ? 'YES' : 'NO',
                children: el.children.length
              };
            }
          }
          return results;
        });

        console.log(`\n  ${viewport.name} (${viewport.width}x${viewport.height}):`);
        for (const [section, data] of Object.entries(metrics)) {
          if (data) {
            console.log(`    ${section}:`);
            console.log(`      Width: ${Math.round(data.width)}px, Height: ${Math.round(data.height)}px`);
            console.log(`      Overflow: ${data.overflow}`);
            console.log(`      Children: ${data.children}`);
          }
        }

      } catch (error) {
        console.log(`  ❌ Error on ${viewport.name}: ${error.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log('\n✅ Detailed check complete!');
}

detailedCheck().catch(console.error);
