import { SnakeCaseStringToLowerCaseString } from "../SnakeCaseStringToLowerCaseString";

describe("SnakeCaseStringToLowerCaseString", () => {
  test("converts a snake_case string to lower case", () => {
    expect(SnakeCaseStringToLowerCaseString("snake_case_string")).toBe(
      "snake case string"
    );
    expect(SnakeCaseStringToLowerCaseString("another_snake_case_string")).toBe(
      "another snake case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(SnakeCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
