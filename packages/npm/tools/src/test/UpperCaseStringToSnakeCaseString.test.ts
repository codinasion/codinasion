import { UpperCaseStringToSnakeCaseString } from "../UpperCaseStringToSnakeCaseString";

describe("UpperCaseStringToSnakeCaseString", () => {
  test("converts an uppercase string to snake_case", () => {
    expect(UpperCaseStringToSnakeCaseString("UPPER CASE STRING")).toBe(
      "upper_case_string"
    );
    expect(UpperCaseStringToSnakeCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "another_upper_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(UpperCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
