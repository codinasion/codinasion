import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data JavaScript", () => {
  // Test case for "JavaScript"
  it('should return JavaScript data based on name "JavaScript"', () => {
    expect(getLanguageData({ name: "JavaScript" })).toEqual(
      LanguageData.filter((language) => language.name === "JavaScript")
    );
  });

  it('should return JavaScript data based on file extension "js"', () => {
    expect(getLanguageData({ fileExtension: "js" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("js"))
    );
  });

  it('should return JavaScript data based on prism tag "javascript"', () => {
    expect(getLanguageData({ prismTag: "javascript" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "javascript")
    );
  });
  // Test case for "JavaScript" ends here...
});
