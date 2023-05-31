import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data F#", () => {
  // Test case for "F#"
  it('should return F# data based on name "F#"', () => {
    expect(getLanguageData({ name: "F#" })).toEqual(
      LanguageData.filter((language) => language.name === "F#")
    );
  });

  it('should return F# data based on file extension "fs"', () => {
    expect(getLanguageData({ fileExtension: "fs" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("fs"))
    );
  });

  it('should return F# data based on prism tag "fsharp"', () => {
    expect(getLanguageData({ prismTag: "fsharp" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "fsharp")
    );
  });
  // Test case for "F#" ends here...
});
