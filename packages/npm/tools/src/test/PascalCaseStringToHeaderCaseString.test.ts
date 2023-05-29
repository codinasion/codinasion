import { PascalCaseStringToHeaderCaseString } from "../PascalCaseStringToHeaderCaseString";

describe("PascalCaseStringToHeaderCaseString", () => {
  test("converts a PascalCase string to Header-Case", () => {
    expect(PascalCaseStringToHeaderCaseString("PascalCaseString")).toBe(
      "Pascal-Case-String"
    );
    expect(PascalCaseStringToHeaderCaseString("AnotherPascalCaseString")).toBe(
      "Another-Pascal-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(PascalCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
