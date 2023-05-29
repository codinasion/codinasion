import { SnakeCaseStringToHeaderCaseString } from "../SnakeCaseStringToHeaderCaseString";

describe("SnakeCaseStringToHeaderCaseString", () => {
  test("converts a snake_case string to Header-Case", () => {
    expect(SnakeCaseStringToHeaderCaseString("snake_case_string")).toBe(
      "Snake-Case-String"
    );
    expect(SnakeCaseStringToHeaderCaseString("another_snake_case_string")).toBe(
      "Another-Snake-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(SnakeCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
