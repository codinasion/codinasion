import { SnakeCaseStringToPascalCaseString } from "../SnakeCaseStringToPascalCaseString";

describe("SnakeCaseStringToPascalCaseString", () => {
  test("converts a snake_case string to PascalCase", () => {
    expect(SnakeCaseStringToPascalCaseString("snake_case_string")).toBe(
      "SnakeCaseString"
    );
    expect(SnakeCaseStringToPascalCaseString("another_snake_case_string")).toBe(
      "AnotherSnakeCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(SnakeCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
