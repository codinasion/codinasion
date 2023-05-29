import { PascalCaseStringToConstantCaseString } from "../PascalCaseStringToConstantCaseString";

describe("PascalCaseStringToConstantCaseString", () => {
  test("converts a PascalCase string to CONSTANT_CASE", () => {
    expect(PascalCaseStringToConstantCaseString("PascalCaseString")).toBe(
      "PASCAL_CASE_STRING"
    );
    expect(
      PascalCaseStringToConstantCaseString("AnotherPascalCaseString")
    ).toBe("ANOTHER_PASCAL_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(PascalCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
