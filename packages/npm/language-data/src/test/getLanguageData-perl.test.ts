import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Perl", () => {
  // Test case for "Perl"
  it('should return Perl data based on name "Perl"', () => {
    expect(getLanguageData({ name: "Perl" })).toEqual(
      LanguageData.filter((language) => language.name === "Perl")
    );
  });

  it('should return Perl data based on file extension "pl"', () => {
    expect(getLanguageData({ fileExtension: "pl" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("pl"))
    );
  });

  it('should return Perl data based on prism tag "perl"', () => {
    expect(getLanguageData({ prismTag: "perl" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "perl")
    );
  });
  // Test case for "Perl" ends here...
});
