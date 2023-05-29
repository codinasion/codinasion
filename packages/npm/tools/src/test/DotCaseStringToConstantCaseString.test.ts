import { DotCaseStringToConstantCaseString } from "../DotCaseStringToConstantCaseString";

describe("DotCaseStringToConstantCaseString", () => {
  test("converts a dot.case string to CONSTANT_CASE", () => {
    expect(DotCaseStringToConstantCaseString("dot.case.string")).toBe(
      "DOT_CASE_STRING"
    );
    expect(DotCaseStringToConstantCaseString("another.dot.case.string")).toBe(
      "ANOTHER_DOT_CASE_STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(DotCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
