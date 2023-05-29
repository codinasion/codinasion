// https://www.sitepoint.com/delay-sleep-pause-wait/
export default async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
