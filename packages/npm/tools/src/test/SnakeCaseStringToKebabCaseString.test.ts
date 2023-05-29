import { SnakeCaseStringToKebabCaseString } from "../SnakeCaseStringToKebabCaseString";

describe("SnakeCaseStringToKebabCaseString", () => {
  test("converts a snake_case string to kebab-case", () => {
    expect(SnakeCaseStringToKebabCaseString("snake_case_string")).toBe(
      "snake-case-string"
    );
    expect(SnakeCaseStringToKebabCaseString("another_snake_case_string")).toBe(
      "another-snake-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(SnakeCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
