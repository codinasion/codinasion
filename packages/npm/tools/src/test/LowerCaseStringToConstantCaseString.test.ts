import { LowerCaseStringToConstantCaseString } from "../LowerCaseStringToConstantCaseString";

describe("LowerCaseStringToConstantCaseString", () => {
  test("converts a lower case string to CONSTANT_CASE", () => {
    expect(LowerCaseStringToConstantCaseString("lower case string")).toBe(
      "LOWER_CASE_STRING"
    );
    expect(
      LowerCaseStringToConstantCaseString("another lower case string")
    ).toBe("ANOTHER_LOWER_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(LowerCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
