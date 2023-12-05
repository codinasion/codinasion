import getScreenshot from "../../../_chromium";

const BASE_URL = "https://github.com/trending";

module.exports = async (req, res) => {
  const hiddenElements = [".header-logged-out", ".site-subnav"];

  const img = await getScreenshot({
    url: BASE_URL,
    hiddenElements,
  });

  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Cache-Control": "public, max-age=31536000, stale-while-revalidate=604800",
  });
  res.end(img, "binary");
};
