import { LowerCaseStringToHeaderCaseString } from "../LowerCaseStringToHeaderCaseString";

describe("LowerCaseStringToHeaderCaseString", () => {
  test("converts a lower case string to Header Case", () => {
    expect(LowerCaseStringToHeaderCaseString("lower case string")).toBe(
      "Lower-Case-String"
    );
    expect(LowerCaseStringToHeaderCaseString("another lower case string")).toBe(
      "Another-Lower-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header Case", () => {
    expect(LowerCaseStringToHeaderCaseString("header-case-string")).toBe(
      "Header-Case-String"
    );
    expect(LowerCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
