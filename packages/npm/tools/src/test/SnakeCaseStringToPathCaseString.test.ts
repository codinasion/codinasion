import { SnakeCaseStringToPathCaseString } from "../SnakeCaseStringToPathCaseString";

describe("SnakeCaseStringToPathCaseString", () => {
  test("converts a snake_case string to path/case", () => {
    expect(SnakeCaseStringToPathCaseString("snake_case_string")).toBe(
      "snake/case/string"
    );
    expect(SnakeCaseStringToPathCaseString("another_snake_case_string")).toBe(
      "another/snake/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(SnakeCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
