import { DotCaseStringToHeaderCaseString } from "../DotCaseStringToHeaderCaseString";

describe("DotCaseStringToHeaderCaseString", () => {
  test("converts a dot.case string to Header-Case", () => {
    expect(DotCaseStringToHeaderCaseString("dot.case.string")).toBe(
      "Dot-Case-String"
    );
    expect(DotCaseStringToHeaderCaseString("another.dot.case.string")).toBe(
      "Another-Dot-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(DotCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
