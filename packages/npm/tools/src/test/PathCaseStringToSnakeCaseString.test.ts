import { PathCaseStringToSnakeCaseString } from "../PathCaseStringToSnakeCaseString";

describe("PathCaseStringToSnakeCaseString", () => {
  test("converts a path-case string to snake_case", () => {
    expect(PathCaseStringToSnakeCaseString("path/case/string")).toBe(
      "path_case_string"
    );
    expect(PathCaseStringToSnakeCaseString("another/path/case/string")).toBe(
      "another_path_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(PathCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
