import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data C", () => {
  // Test case for "C"
  it('should return C data based on name "C"', () => {
    expect(getLanguageData({ name: "C" })).toEqual(
      LanguageData.filter((language) => language.name === "C")
    );
  });

  it('should return C data based on file extension "c"', () => {
    expect(getLanguageData({ fileExtension: "c" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("c"))
    );
  });

  it('should return C data based on prism tag "c"', () => {
    expect(getLanguageData({ prismTag: "c" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "c")
    );
  });
  // Test case for "C" ends here...
});
