import { SnakeCaseStringToCamelCaseString } from "../SnakeCaseStringToCamelCaseString";

describe("SnakeCaseStringToCamelCaseString", () => {
  test("converts a snake_case string to camelCase", () => {
    expect(SnakeCaseStringToCamelCaseString("snake_case_string")).toBe(
      "snakeCaseString"
    );
    expect(SnakeCaseStringToCamelCaseString("another_snake_case_string")).toBe(
      "anotherSnakeCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(SnakeCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
