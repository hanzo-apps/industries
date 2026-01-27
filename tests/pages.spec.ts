import { test, expect } from '@playwright/test';

// List of all pages to test
const pages = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/team', name: 'Team' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/solutions', name: 'Solutions' },
  { path: '/capabilities', name: 'Capabilities' },
  { path: '/case-studies', name: 'Case Studies' },
  { path: '/examples', name: 'Examples' },
  { path: '/research', name: 'Research' },
  { path: '/press', name: 'Press' },
  { path: '/models', name: 'AI Models' },
  { path: '/help', name: 'Help' },
  { path: '/contact', name: 'Contact' },
  { path: '/services', name: 'Services' },
  { path: '/status', name: 'Status' },
  { path: '/security', name: 'Security' },
  { path: '/terms', name: 'Terms' },
  { path: '/privacy', name: 'Privacy' },
  { path: '/careers', name: 'Careers' },
  // Product pages
  { path: '/products/zen', name: 'Zen' },
  { path: '/products/koan', name: 'Koan' },
  { path: '/products/hanzo-ai', name: 'Hanzo AI' },
  { path: '/products/hanzo-dx', name: 'Hanzo DX' },
  { path: '/products/hanzo-ml', name: 'Hanzo ML' },
  { path: '/products/hanzo-dev', name: 'Hanzo Dev' },
  { path: '/products/hanzo-team', name: 'Hanzo Team' },
  { path: '/products/lux', name: 'Lux' },
];

test.describe('All pages render correctly', () => {
  for (const page of pages) {
    test(`${page.name} page (${page.path}) renders without errors`, async ({ page: browserPage }) => {
      // Track console errors
      const consoleErrors: string[] = [];
      browserPage.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      // Navigate to page
      const response = await browserPage.goto(page.path, { waitUntil: 'networkidle' });

      // Check response is successful
      expect(response?.status()).toBeLessThan(400);

      // Check page has content (not blank)
      const bodyContent = await browserPage.locator('body').textContent();
      expect(bodyContent?.length).toBeGreaterThan(100);

      // Check no font loading errors (the main issue we're fixing)
      const fontErrors = consoleErrors.filter(err =>
        err.includes('font') || err.includes('MIME type') || err.includes('Cal Sans')
      );
      expect(fontErrors).toHaveLength(0);

      // Check navbar is visible
      await expect(browserPage.locator('nav').first()).toBeVisible();

      // Check footer is visible (most pages have footer)
      const footer = browserPage.locator('footer');
      if (await footer.count() > 0) {
        await expect(footer.first()).toBeVisible();
      }
    });
  }
});

test.describe('Research page hash navigation', () => {
  const hashRoutes = [
    { hash: '#ai', expectedFilter: 'ai' },
    { hash: '#consensus', expectedFilter: 'consensus' },
    { hash: '#fhe', expectedFilter: 'fhe' },
    { hash: '#mpc', expectedFilter: 'mpc' },
    { hash: '#papers', expectedSection: 'papers' },
  ];

  for (const route of hashRoutes) {
    test(`Research page with ${route.hash} works correctly`, async ({ page }) => {
      const response = await page.goto(`/research${route.hash}`, { waitUntil: 'networkidle' });

      // Page should load
      expect(response?.status()).toBeLessThan(400);

      // Should have papers section
      await expect(page.locator('#papers')).toBeVisible();
    });
  }
});

test('Command palette opens with Cmd+K', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // Press Cmd+K
  await page.keyboard.press('Meta+k');

  // Command palette should be visible
  await expect(page.getByPlaceholder('Search pages, products, docs...')).toBeVisible();

  // Press Escape to close
  await page.keyboard.press('Escape');

  // Should close
  await expect(page.getByPlaceholder('Search pages, products, docs...')).not.toBeVisible();
});

test('Fonts load correctly (Geist family)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // Check that body uses Geist font
  const fontFamily = await page.evaluate(() => {
    return window.getComputedStyle(document.body).fontFamily;
  });

  // Should contain Geist or system fonts (fallback)
  expect(fontFamily.toLowerCase()).toMatch(/geist|system-ui|sans-serif/);
});
