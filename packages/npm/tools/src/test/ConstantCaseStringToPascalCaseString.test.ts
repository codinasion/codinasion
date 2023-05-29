import { ConstantCaseStringToPascalCaseString } from "../ConstantCaseStringToPascalCaseString";

describe("ConstantCaseStringToPascalCaseString", () => {
  test("converts a CONSTANT_CASE string to PascalCase", () => {
    expect(ConstantCaseStringToPascalCaseString("CONSTANT_CASE_STRING")).toBe(
      "ConstantCaseString"
    );
    expect(
      ConstantCaseStringToPascalCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("AnotherConstantCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(ConstantCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
