import { ConstantCaseStringToLowerCaseString } from "../ConstantCaseStringToLowerCaseString";

describe("ConstantCaseStringToLowerCaseString", () => {
  test("converts a CONSTANT_CASE string to lower case with spaces", () => {
    expect(ConstantCaseStringToLowerCaseString("CONSTANT_CASE_STRING")).toBe(
      "constant case string"
    );
    expect(
      ConstantCaseStringToLowerCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("another constant case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case with spaces", () => {
    expect(ConstantCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
