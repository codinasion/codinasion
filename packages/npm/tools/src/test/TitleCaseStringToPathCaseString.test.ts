import { TitleCaseStringToPathCaseString } from "../TitleCaseStringToPathCaseString";

describe("TitleCaseStringToPathCaseString", () => {
  test("converts a TitleCase string to path/case", () => {
    expect(TitleCaseStringToPathCaseString("Title Case String")).toBe(
      "title/case/string"
    );
    expect(TitleCaseStringToPathCaseString("Another Title Case String")).toBe(
      "another/title/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(TitleCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
