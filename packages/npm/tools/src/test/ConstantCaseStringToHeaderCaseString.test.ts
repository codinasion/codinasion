import { ConstantCaseStringToHeaderCaseString } from "../ConstantCaseStringToHeaderCaseString";

describe("ConstantCaseStringToHeaderCaseString", () => {
  test("converts a CONSTANT_CASE string to Header-Case", () => {
    expect(ConstantCaseStringToHeaderCaseString("CONSTANT_CASE_STRING")).toBe(
      "Constant-Case-String"
    );
    expect(
      ConstantCaseStringToHeaderCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("Another-Constant-Case-String");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(ConstantCaseStringToHeaderCaseString("header-case-string")).toBe(
      "Header-Case-String"
    );
    expect(ConstantCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
