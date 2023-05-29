import { TitleCaseStringToSnakeCaseString } from "../TitleCaseStringToSnakeCaseString";

describe("TitleCaseStringToSnakeCaseString", () => {
  test("converts a TitleCase string to snake_case", () => {
    expect(TitleCaseStringToSnakeCaseString("Title Case String")).toBe(
      "title_case_string"
    );
    expect(TitleCaseStringToSnakeCaseString("Another Title Case String")).toBe(
      "another_title_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(TitleCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
