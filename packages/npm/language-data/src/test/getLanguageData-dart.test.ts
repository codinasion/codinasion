import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Dart", () => {
  // Test case for "Dart"
  it('should return Dart data based on name "Dart"', () => {
    expect(getLanguageData({ name: "Dart" })).toEqual(
      LanguageData.filter((language) => language.name === "Dart")
    );
  });

  it('should return Dart data based on file extension "dart"', () => {
    expect(getLanguageData({ fileExtension: "dart" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("dart"))
    );
  });

  it('should return Dart data based on prism tag "dart"', () => {
    expect(getLanguageData({ prismTag: "dart" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "dart")
    );
  });
  // Test case for "Dart" ends here...
});
