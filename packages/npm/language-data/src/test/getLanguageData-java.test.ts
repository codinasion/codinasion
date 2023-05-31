import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Java", () => {
  // Test case for "Java"
  it('should return Java data based on name "Java"', () => {
    expect(getLanguageData({ name: "Java" })).toEqual(
      LanguageData.filter((language) => language.name === "Java")
    );
  });

  it('should return Java data based on file extension "java"', () => {
    expect(getLanguageData({ fileExtension: "java" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("java"))
    );
  });

  it('should return Java data based on prism tag "java"', () => {
    expect(getLanguageData({ prismTag: "java" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "java")
    );
  });
  // Test case for "Java" ends here...
});
