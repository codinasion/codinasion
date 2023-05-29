import { ConstantCaseStringToSnakeCaseString } from "../ConstantCaseStringToSnakeCaseString";

describe("ConstantCaseStringToSnakeCaseString", () => {
  test("converts a CONSTANT_CASE string to snake_case", () => {
    expect(ConstantCaseStringToSnakeCaseString("CONSTANT_CASE_STRING")).toBe(
      "constant_case_string"
    );
    expect(
      ConstantCaseStringToSnakeCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("another_constant_case_string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(ConstantCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
