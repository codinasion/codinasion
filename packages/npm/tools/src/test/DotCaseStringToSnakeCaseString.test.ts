import { DotCaseStringToSnakeCaseString } from "../DotCaseStringToSnakeCaseString";

describe("DotCaseStringToSnakeCaseString", () => {
  test("converts a dot.case string to snake_case", () => {
    expect(DotCaseStringToSnakeCaseString("dot.case.string")).toBe(
      "dot_case_string"
    );
    expect(DotCaseStringToSnakeCaseString("another.dot.case.string")).toBe(
      "another_dot_case_string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(DotCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
