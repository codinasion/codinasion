import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Swift", () => {
  // Test case for "Swift"
  it('should return Swift data based on name "Swift"', () => {
    expect(getLanguageData({ name: "Swift" })).toEqual(
      LanguageData.filter((language) => language.name === "Swift")
    );
  });

  it('should return Swift data based on file extension "swift"', () => {
    expect(getLanguageData({ fileExtension: "swift" })).toEqual(
      LanguageData.filter((language) =>
        language.fileExtension.includes("swift")
      )
    );
  });

  it('should return Swift data based on prism tag "swift"', () => {
    expect(getLanguageData({ prismTag: "swift" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "swift")
    );
  });
  // Test case for "Swift" ends here...
});
