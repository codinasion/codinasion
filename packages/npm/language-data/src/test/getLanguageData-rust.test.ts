import getLanguageData from "../getLanguageData";
import LanguageData from "../data";

describe("Get Language Data Rust", () => {
  // Test case for "Rust"
  it('should return Rust data based on name "Rust"', () => {
    expect(getLanguageData({ name: "Rust" })).toEqual(
      LanguageData.filter((language) => language.name === "Rust")
    );
  });

  it('should return Rust data based on file extension "rs"', () => {
    expect(getLanguageData({ fileExtension: "rs" })).toEqual(
      LanguageData.filter((language) => language.fileExtension.includes("rs"))
    );
  });

  it('should return Rust data based on prism tag "rust"', () => {
    expect(getLanguageData({ prismTag: "rust" })).toEqual(
      LanguageData.filter((language) => language.prismTag === "rust")
    );
  });
  // Test case for "Rust" ends here...
});
