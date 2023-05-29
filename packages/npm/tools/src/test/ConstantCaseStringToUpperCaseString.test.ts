import { ConstantCaseStringToUpperCaseString } from "../ConstantCaseStringToUpperCaseString";

describe("ConstantCaseStringToUpperCaseString", () => {
  test("converts a CONSTANT_CASE string to UPPERCASE", () => {
    expect(ConstantCaseStringToUpperCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT CASE STRING"
    );
    expect(
      ConstantCaseStringToUpperCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("ANOTHER CONSTANT CASE STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in UPPERCASE", () => {
    expect(ConstantCaseStringToUpperCaseString("UPPERCASE STRING")).toBe(
      "UPPERCASE STRING"
    );
  });
});
