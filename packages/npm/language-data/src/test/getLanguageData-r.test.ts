import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data R", () => {
  // Test case for "R"
  it('should return R data based on name "R"', () => {
    expect(getLanguageData({ name: "R" })).toEqual(
      LanguageData.filter((language) => language.name === "R")
    );
  });

  it('should return R data based on file extension "r"', () => {
    expect(getLanguageData({ fileExtension: "r" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("r"))
    );
  });

  it('should return R data based on prism tag "r"', () => {
    expect(getLanguageData({ prismTag: "r" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "r")
    );
  });
  // Test case for "R" ends here...
});
