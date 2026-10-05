import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`Responsive test on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('http://localhost:3000');

    // Wait for the page to fully load and animations to settle
    await page.waitForTimeout(2000);

    // Verify there is no horizontal scrollbar by checking if body scroll width exceeds client width
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    
    // Some minor overflow might occur due to scrollbars, so we allow a 5px buffer
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);

    // Take a screenshot of the viewport for visual inspection
    await page.screenshot({ path: `playwright-report/screenshot-${viewport.name}.png`, fullPage: true });
  });
}
