import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data GO", () => {
  // Test case for "GO"
  it('should return GO data based on name "GO"', () => {
    expect(getLanguageData({ name: "GO" })).toEqual(
      LanguageData.filter((language) => language.name === "GO")
    );
  });

  it('should return GO data based on file extension "go"', () => {
    expect(getLanguageData({ fileExtension: "go" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("go"))
    );
  });

  it('should return GO data based on prism tag "go"', () => {
    expect(getLanguageData({ prismTag: "go" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "go")
    );
  });
  // Test case for "GO" ends here...
});
