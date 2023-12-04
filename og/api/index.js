import getScreenshot from "./_chromium";

const BASE_URL = "https://codinasion.tech";

module.exports = async (req, res) => {
  const { query } = req;
  const { path } = query;

  const URL = path ? BASE_URL + path : BASE_URL;

  const img = await getScreenshot({
    url: URL,
  });

  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Cache-Control": "public, max-age=31536000, stale-while-revalidate=604800",
  });
  res.end(img, "binary");
};
