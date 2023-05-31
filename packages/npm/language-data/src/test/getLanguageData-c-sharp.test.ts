import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data C#", () => {
  // Test case for "C#"
  it('should return C# data based on name "C#"', () => {
    expect(getLanguageData({ name: "C#" })).toEqual(
      LanguageData.filter((language) => language.name === "C#")
    );
  });

  it('should return C# data based on file extension "cs"', () => {
    expect(getLanguageData({ fileExtension: "cs" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("cs"))
    );
  });

  it('should return C# data based on prism tag "csharp"', () => {
    expect(getLanguageData({ prismTag: "csharp" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "csharp")
    );
  });
  // Test case for "C#" ends here...
});
