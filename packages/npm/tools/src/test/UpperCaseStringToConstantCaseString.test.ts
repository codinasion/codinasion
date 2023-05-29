import { UpperCaseStringToConstantCaseString } from "../UpperCaseStringToConstantCaseString";

describe("UpperCaseStringToConstantCaseString", () => {
  test("converts an uppercase string to CONSTANT_CASE", () => {
    expect(UpperCaseStringToConstantCaseString("UPPER CASE STRING")).toBe(
      "UPPER_CASE_STRING"
    );
    expect(
      UpperCaseStringToConstantCaseString("ANOTHER UPPER CASE STRING")
    ).toBe("ANOTHER_UPPER_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(UpperCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
