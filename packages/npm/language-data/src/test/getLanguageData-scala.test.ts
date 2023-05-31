import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Scala", () => {
  // Test case for "Scala"
  it('should return Scala data based on name "Scala"', () => {
    expect(getLanguageData({ name: "Scala" })).toEqual(
      LanguageData.filter((language) => language.name === "Scala")
    );
  });

  it('should return Scala data based on file extension "scala"', () => {
    expect(getLanguageData({ fileExtension: "scala" })).toEqual(
      LanguageData.filter((language) =>
        language.fileExtension.includes("scala")
      )
    );
  });

  it('should return Scala data based on prism tag "scala"', () => {
    expect(getLanguageData({ prismTag: "scala" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "scala")
    );
  });
  // Test case for "Scala" ends here...
});
