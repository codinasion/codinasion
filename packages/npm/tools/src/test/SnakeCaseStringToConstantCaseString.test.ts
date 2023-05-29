import { SnakeCaseStringToConstantCaseString } from "../SnakeCaseStringToConstantCaseString";

describe("SnakeCaseStringToConstantCaseString", () => {
  test("converts a snake_case string to CONSTANT_CASE", () => {
    expect(SnakeCaseStringToConstantCaseString("snake_case_string")).toBe(
      "SNAKE_CASE_STRING"
    );
    expect(
      SnakeCaseStringToConstantCaseString("another_snake_case_string")
    ).toBe("ANOTHER_SNAKE_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(SnakeCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
