// export handler
module.exports = GetPRSize;

async function GetPRSize(pullRequest) {
  const linesOfCodeChanged = pullRequest.additions + pullRequest.deletions;

  // determine pull request size
  let pullRequestSize = "LOC: XS";
  if (linesOfCodeChanged < 10) {
    pullRequestSize = "LOC: XS";
  } else if (linesOfCodeChanged >= 10 && linesOfCodeChanged < 30) {
    pullRequestSize = "LOC: S";
  } else if (linesOfCodeChanged >= 30 && linesOfCodeChanged < 100) {
    pullRequestSize = "LOC: M";
  } else if (linesOfCodeChanged >= 100 && linesOfCodeChanged < 500) {
    pullRequestSize = "LOC: L";
  } else if (linesOfCodeChanged >= 500 && linesOfCodeChanged < 1000) {
    pullRequestSize = "LOC: XL";
  } else if (linesOfCodeChanged >= 1000) {
    pullRequestSize = "LOC: XXL";
  }

  return pullRequestSize;
}
