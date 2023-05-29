import { DotCaseStringToPascalCaseString } from "../DotCaseStringToPascalCaseString";

describe("DotCaseStringToPascalCaseString", () => {
  test("converts a dot.case string to PascalCase", () => {
    expect(DotCaseStringToPascalCaseString("dot.case.string")).toBe(
      "DotCaseString"
    );
    expect(DotCaseStringToPascalCaseString("another.dot.case.string")).toBe(
      "AnotherDotCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(DotCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
