import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data TypeScript", () => {
  // Test case for "TypeScript"
  it('should return TypeScript data based on name "TypeScript"', () => {
    expect(getLanguageData({ name: "TypeScript" })).toEqual(
      LanguageData.filter((language) => language.name === "TypeScript")
    );
  });

  it('should return TypeScript data based on file extension "ts"', () => {
    expect(getLanguageData({ fileExtension: "ts" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("ts"))
    );
  });

  it('should return TypeScript data based on prism tag "typescript"', () => {
    expect(getLanguageData({ prismTag: "typescript" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "typescript")
    );
  });
  // Test case for "TypeScript" ends here...
});
