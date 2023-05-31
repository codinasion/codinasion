import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Julia", () => {
  // Test case for "Julia"
  it('should return Julia data based on name "Julia"', () => {
    expect(getLanguageData({ name: "Julia" })).toEqual(
      LanguageData.filter((language) => language.name === "Julia")
    );
  });

  it('should return Julia data based on file extension "jl"', () => {
    expect(getLanguageData({ fileExtension: "jl" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("jl"))
    );
  });

  it('should return Julia data based on prism tag "julia"', () => {
    expect(getLanguageData({ prismTag: "julia" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "julia")
    );
  });
  // Test case for "Julia" ends here...
});
