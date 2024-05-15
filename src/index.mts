import playwright, { type Page } from "playwright";

const webPath: [string, string][] = [
  ["http://localhost:8081", "http://localhost:8081"],
];

type Device = "pc" | "sp";

const screenshotByDevice = async (
  device: Device,
  viewPort: { height: number; width: number } | null = null
) => {
  console.log(`Creating ${device} screenshots...`);

  const browser = await playwright["chromium"].launch();

  const context = await browser.newContext();
  const page = await context.newPage();

  if (viewPort) {
    await page.setViewportSize(viewPort);
  }

  for (let i = 0; i < webPath.length; i++) {
    const originalUrl = webPath[i][0];
    const compareUrl = webPath[i][1];

    await page.goto(originalUrl);
    await page.screenshot({
      path: `images/${device}_${i + 1}_original.png`,
      fullPage: true,
    });

    await page.goto(compareUrl);
    await page.screenshot({
      path: `images/${device}_${i + 1}_compare.png`,
      fullPage: true,
    });
  }

  await browser.close();

  await console.log(`Finished ${device} screenshots!!!`);
};

(async () => {
  console.log("Start...");

  await screenshotByDevice("pc");

  await screenshotByDevice("sp", {
    width: 375,
    height: 1000,
  });

  // 完了メッセージ
  await console.log("Completed Screenshots!!!");
})();
