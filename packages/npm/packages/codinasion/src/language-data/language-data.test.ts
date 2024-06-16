import { GetLanguageData } from ".";
import { LanguageData } from "./data";

describe("GetLanguageData", () => {
  test("returns languages by name", () => {
    const language = LanguageData[0];
    // @ts-expect-error - We're testing the function's ability to handle
    const result = GetLanguageData({ name: language.name });
    expect(result).toContainEqual(language);
  });

  test("returns languages by file extension", () => {
    const language =
      LanguageData.find((lang) => lang.fileExtension.length > 0) ||
      LanguageData[0];
    const result = GetLanguageData({
      // @ts-expect-error - We're testing the function's ability to handle
      fileExtension: language.fileExtension[0],
    });
    expect(result).toContainEqual(language);
  });

  test("returns languages by prism tag", () => {
    const language =
      LanguageData.find((lang) => lang.prismTag) || LanguageData[0];
    // @ts-expect-error - We're testing the function's ability to handle
    const result = GetLanguageData({ prismTag: language.prismTag });
    expect(result).toContainEqual(language);
  });

  test("returns an empty array if no match is found", () => {
    const result = GetLanguageData({ name: "nonexistent" });
    expect(result).toEqual([]);
  });
});
