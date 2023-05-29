import { PascalCaseStringToUpperCaseString } from "../PascalCaseStringToUpperCaseString";

describe("PascalCaseStringToUpperCaseString", () => {
  test("converts a PascalCase string to upper case", () => {
    expect(PascalCaseStringToUpperCaseString("PascalCaseString")).toBe(
      "PASCAL CASE STRING"
    );
    expect(PascalCaseStringToUpperCaseString("AnotherPascalCaseString")).toBe(
      "ANOTHER PASCAL CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(PascalCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
