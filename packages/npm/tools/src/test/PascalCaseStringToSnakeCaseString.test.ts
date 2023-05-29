import { PascalCaseStringToSnakeCaseString } from "../PascalCaseStringToSnakeCaseString";

describe("PascalCaseStringToSnakeCaseString", () => {
  test("converts a PascalCase string to snake_case", () => {
    expect(PascalCaseStringToSnakeCaseString("PascalCaseString")).toBe(
      "pascal_case_string"
    );
    expect(PascalCaseStringToSnakeCaseString("AnotherPascalCaseString")).toBe(
      "another_pascal_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(PascalCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
