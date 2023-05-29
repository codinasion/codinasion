import { KebabCaseStringToSnakeCaseString } from "../KebabCaseStringToSnakeCaseString";

describe("KebabCaseStringToSnakeCaseString", () => {
  test("converts a kebab-case string to snake_case", () => {
    expect(KebabCaseStringToSnakeCaseString("kebab-case-string")).toBe(
      "kebab_case_string"
    );
    expect(KebabCaseStringToSnakeCaseString("another-kebab-case-string")).toBe(
      "another_kebab_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(KebabCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
