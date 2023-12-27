import { DotCaseStringToUpperCaseString } from "./dot-case-string-to-upper-case-string";

describe("DotCaseStringToUpperCaseString", () => {
  test("converts a dot.case string to UPPERCASE", () => {
    expect(DotCaseStringToUpperCaseString("dot.case.string")).toBe(
      "DOT CASE STRING",
    );
    expect(DotCaseStringToUpperCaseString("another.dot.case.string")).toBe(
      "ANOTHER DOT CASE STRING",
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in UPPERCASE", () => {
    expect(DotCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING",
    );
  });
});
