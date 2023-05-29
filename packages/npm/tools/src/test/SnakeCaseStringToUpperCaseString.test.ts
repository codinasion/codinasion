import { SnakeCaseStringToUpperCaseString } from "../SnakeCaseStringToUpperCaseString";

describe("SnakeCaseStringToUpperCaseString", () => {
  test("converts a snake_case string to upper case", () => {
    expect(SnakeCaseStringToUpperCaseString("snake_case_string")).toBe(
      "SNAKE CASE STRING"
    );
    expect(SnakeCaseStringToUpperCaseString("another_snake_case_string")).toBe(
      "ANOTHER SNAKE CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(SnakeCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
