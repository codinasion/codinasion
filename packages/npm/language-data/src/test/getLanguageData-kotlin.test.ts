import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Kotlin", () => {
  // Test case for "Kotlin"
  it('should return Kotlin data based on name "Kotlin"', () => {
    expect(getLanguageData({ name: "Kotlin" })).toEqual(
      LanguageData.filter((language) => language.name === "Kotlin")
    );
  });

  it('should return Kotlin data based on file extension "kt"', () => {
    expect(getLanguageData({ fileExtension: "kt" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("kt"))
    );
  });

  it('should return Kotlin data based on prism tag "kotlin"', () => {
    expect(getLanguageData({ prismTag: "kotlin" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "kotlin")
    );
  });
  // Test case for "Kotlin" ends here...
});
