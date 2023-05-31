import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Python", () => {
  // Test case for "Python"
  it('should return Python data based on name "Python"', () => {
    expect(getLanguageData({ name: "Python" })).toEqual(
      LanguageData.filter((language) => language.name === "Python")
    );
  });

  it('should return Python data based on file extension "py"', () => {
    expect(getLanguageData({ fileExtension: "py" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("py"))
    );
  });

  it('should return Python data based on prism tag "python"', () => {
    expect(getLanguageData({ prismTag: "python" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "python")
    );
  });
  // Test case for "Python" ends here...
});
