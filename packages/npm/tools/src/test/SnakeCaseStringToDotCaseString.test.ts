import { SnakeCaseStringToDotCaseString } from "../SnakeCaseStringToDotCaseString";

describe("SnakeCaseStringToDotCaseString", () => {
  test("converts a snake_case string to dot.case", () => {
    expect(SnakeCaseStringToDotCaseString("snake_case_string")).toBe(
      "snake.case.string"
    );
    expect(SnakeCaseStringToDotCaseString("another_snake_case_string")).toBe(
      "another.snake.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(SnakeCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
