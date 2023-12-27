import { CamelCaseStringToSnakeCaseString } from "./camel-case-string-to-snake-case-string";

describe("CamelCaseStringToSnakeCaseString", () => {
  test("converts a camelCase string to snake_case", () => {
    expect(CamelCaseStringToSnakeCaseString("camelCaseString")).toBe(
      "camel_case_string",
    );
    expect(CamelCaseStringToSnakeCaseString("anotherCamelCaseString")).toBe(
      "another_camel_case_string",
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(CamelCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string",
    );
  });
});
