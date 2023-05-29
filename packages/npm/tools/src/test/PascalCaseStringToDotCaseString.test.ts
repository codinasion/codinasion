import { PascalCaseStringToDotCaseString } from "../PascalCaseStringToDotCaseString";

describe("PascalCaseStringToDotCaseString", () => {
  test("converts a PascalCase string to dot.case", () => {
    expect(PascalCaseStringToDotCaseString("PascalCaseString")).toBe(
      "pascal.case.string"
    );
    expect(PascalCaseStringToDotCaseString("AnotherPascalCaseString")).toBe(
      "another.pascal.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(PascalCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
