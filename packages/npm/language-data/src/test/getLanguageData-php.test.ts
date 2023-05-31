import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data PHP", () => {
  // Test case for "PHP"
  it('should return PHP data based on name "PHP"', () => {
    expect(getLanguageData({ name: "PHP" })).toEqual(
      LanguageData.filter((language) => language.name === "PHP")
    );
  });

  it('should return PHP data based on file extension "php"', () => {
    expect(getLanguageData({ fileExtension: "php" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("php"))
    );
  });

  it('should return PHP data based on prism tag "php"', () => {
    expect(getLanguageData({ prismTag: "php" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "php")
    );
  });
  // Test case for "PHP" ends here...
});
