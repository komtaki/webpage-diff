import { type Page } from "playwright";
import { test, expect } from "@playwright/test";
import { describe } from "node:test";

const webPath: string[] = ["http://localhost:8081"];

const screenshotByDevice = async (
  page: Page,
  testUrl: string,
  viewPort: { height: number; width: number } | null = null
) => {
  if (viewPort) {
    await page.setViewportSize(viewPort);
  }

  await page.goto(testUrl);
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
};

for (let i = 0; i < webPath.length; i++) {
  test(`PC | ${webPath[i]}`, async ({ page }) => {
    await screenshotByDevice(page, webPath[i]);
  });
}

for (let i = 0; i < webPath.length; i++) {
  test(`SP | ${webPath[i]}`, async ({ page }) => {
    await screenshotByDevice(page, webPath[i], {
      width: 375,
      height: 1000,
    });
  });
}
