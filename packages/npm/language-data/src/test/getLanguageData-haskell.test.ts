import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Haskell", () => {
  // Test case for "Haskell"
  it('should return Haskell data based on name "Haskell"', () => {
    expect(getLanguageData({ name: "Haskell" })).toEqual(
      LanguageData.filter((language) => language.name === "Haskell")
    );
  });

  it('should return Haskell data based on file extension "hs"', () => {
    expect(getLanguageData({ fileExtension: "hs" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("hs"))
    );
  });

  it('should return Haskell data based on prism tag "haskell"', () => {
    expect(getLanguageData({ prismTag: "haskell" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "haskell")
    );
  });
  // Test case for "Haskell" ends here...
});
