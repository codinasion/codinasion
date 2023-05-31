import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Ruby", () => {
  // Test case for "Ruby"
  it('should return Ruby data based on name "Ruby"', () => {
    expect(getLanguageData({ name: "Ruby" })).toEqual(
      LanguageData.filter((language) => language.name === "Ruby")
    );
  });

  it('should return Ruby data based on file extension "rb"', () => {
    expect(getLanguageData({ fileExtension: "rb" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("rb"))
    );
  });

  it('should return Ruby data based on prism tag "ruby"', () => {
    expect(getLanguageData({ prismTag: "ruby" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "ruby")
    );
  });
  // Test case for "Ruby" ends here...
});
