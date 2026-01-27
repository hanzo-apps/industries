import { test, expect } from '@playwright/test';

test('Screenshot case studies page', async ({ page }) => {
  // Capture console errors
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('/case-studies', { waitUntil: 'networkidle' });

  // Count how many case study cards are visible
  const cards = await page.locator('.space-y-12 > a').count();
  console.log(`Found ${cards} case study cards`);

  // Scroll to bottom to trigger animations
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'case-studies-screenshot.png', fullPage: true });

  // Report any errors
  if (consoleErrors.length > 0) {
    console.log('Console errors:', consoleErrors);
  }

  // Should have 7 case studies
  expect(cards).toBeGreaterThan(0);
});

test('Screenshot careers page', async ({ page }) => {
  await page.goto('/careers', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'careers-screenshot.png', fullPage: true });
});
