import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data C++", () => {
  // Test case for "C++"
  it('should return C++ data based on name "C++"', () => {
    expect(getLanguageData({ name: "C++" })).toEqual(
      LanguageData.filter((language) => language.name === "C++")
    );
  });

  it('should return C++ data based on file extension "cpp"', () => {
    expect(getLanguageData({ fileExtension: "cpp" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("cpp"))
    );
  });

  it('should return C++ data based on prism tag "cpp"', () => {
    expect(getLanguageData({ prismTag: "cpp" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "cpp")
    );
  });
  // Test case for "C++" ends here...
});
