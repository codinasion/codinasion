const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

import fs from "fs";
import Jimp from "jimp";

const BASE_URL = "https://codinasion.tech";
const BASE_WIDTH = 1200;
const BASE_HEIGHT = 630;

export default async function getScreenshot({
  url = BASE_URL,
  background = true,
  hiddenElements = [],
}) {
  const randomId = Math.random().toString(36).substring(2, 15);

  const imagePath = `/tmp/screenshot-${randomId}.jpg`;

  const getScreenshot = async (screenshot_url) => {
    console.log("Screenshot URL: ", screenshot_url);

    console.log("Launching browser...");
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath:
        // /usr/bin/google-chrome-stable
        process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
      headless: true,
    });

    console.log("Opening new page...");
    const page = await browser.newPage();

    console.log("Setting viewport...");
    await page.setViewport({ width: BASE_WIDTH, height: BASE_HEIGHT });

    console.log("Navigating to page...");
    await page.goto(screenshot_url, {
      waitUntil: "networkidle2",
    });

    if (hiddenElements.length > 0) {
      console.log("Hiding elements...");
      await page.evaluate((hiddenElements) => {
        hiddenElements.forEach((selector) => {
          document.querySelector(selector).style.display = "none";
        });
      }, hiddenElements);
    }

    console.log("Taking screenshot...");
    await page.screenshot({
      path: imagePath,
      captureBeyondViewport: false,
      quality: 100,
    });

    if (background) {
      console.log("Adding background...");

      // Load gradient image
      console.log("Loading gradient image...");
      const gradient = await Jimp.read(
        "https://github.com/codinasion/codinasion/assets/54644599/6ee325aa-553f-4432-afad-639bb41e0910",
      );
      gradient.resize(BASE_WIDTH, BASE_HEIGHT);

      // Load screenshot image
      console.log("Loading screenshot image...");
      const image = await Jimp.read(imagePath);
      image.resize(BASE_WIDTH - 20, BASE_HEIGHT - 20);

      // Composite gradient and screenshot
      console.log("Compositing gradient and screenshot...");
      gradient.composite(image, 10, 10);
      await gradient.writeAsync(imagePath);
    }

    console.log("Closing browser...");
    await browser.close();
  };

  try {
    await getScreenshot(url);
  } catch (error) {
    throw new Error(`Error while trying to get screenshot: ${error}`);
  }

  const img = fs.readFileSync(imagePath);

  return img;
}
