import { KebabCaseStringToHeaderCaseString } from "../KebabCaseStringToHeaderCaseString";

describe("KebabCaseStringToHeaderCaseString", () => {
  test("converts a kebab-case string to Header-Case", () => {
    expect(KebabCaseStringToHeaderCaseString("kebab-case-string")).toBe(
      "Kebab-Case-String"
    );
    expect(KebabCaseStringToHeaderCaseString("another-kebab-case-string")).toBe(
      "Another-Kebab-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(KebabCaseStringToHeaderCaseString("header-case-string")).toBe(
      "Header-Case-String"
    );
    expect(KebabCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
