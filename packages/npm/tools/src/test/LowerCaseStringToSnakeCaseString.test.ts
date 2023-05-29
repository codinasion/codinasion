import { LowerCaseStringToSnakeCaseString } from "../LowerCaseStringToSnakeCaseString";

describe("LowerCaseStringToSnakeCaseString", () => {
  test("converts a lower case string to snake_case", () => {
    expect(LowerCaseStringToSnakeCaseString("lower case string")).toBe(
      "lower_case_string"
    );
    expect(LowerCaseStringToSnakeCaseString("another lower case string")).toBe(
      "another_lower_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(LowerCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
