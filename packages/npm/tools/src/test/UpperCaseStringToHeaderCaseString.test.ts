import { UpperCaseStringToHeaderCaseString } from "../UpperCaseStringToHeaderCaseString";

describe("UpperCaseStringToHeaderCaseString", () => {
  test("converts an uppercase string to Header-Case", () => {
    expect(UpperCaseStringToHeaderCaseString("UPPER CASE STRING")).toBe(
      "Upper-Case-String"
    );
    expect(UpperCaseStringToHeaderCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "Another-Upper-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(UpperCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
