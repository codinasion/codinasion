import { PascalCaseStringToTitleCaseString } from "./pascal-case-string-to-title-case-string";

describe("PascalCaseStringToTitleCaseString", () => {
  test("converts a PascalCase string to title case", () => {
    expect(PascalCaseStringToTitleCaseString("PascalCaseString")).toBe(
      "Pascal Case String",
    );
    expect(PascalCaseStringToTitleCaseString("AnotherPascalCaseString")).toBe(
      "Another Pascal Case String",
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in title case", () => {
    expect(PascalCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String",
    );
  });
});
