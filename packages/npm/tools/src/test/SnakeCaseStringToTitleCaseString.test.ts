import { SnakeCaseStringToTitleCaseString } from "../SnakeCaseStringToTitleCaseString";

describe("SnakeCaseStringToTitleCaseString", () => {
  test("converts a snake_case string to Title Case", () => {
    expect(SnakeCaseStringToTitleCaseString("snake_case_string")).toBe(
      "Snake Case String"
    );
    expect(SnakeCaseStringToTitleCaseString("another_snake_case_string")).toBe(
      "Another Snake Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(SnakeCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
