import { SnakeCaseStringToSentenceCaseString } from "../SnakeCaseStringToSentenceCaseString";

describe("SnakeCaseStringToSentenceCaseString", () => {
  test("converts a snake_case string to sentence case", () => {
    expect(SnakeCaseStringToSentenceCaseString("snake_case_string")).toBe(
      "Snake case string"
    );
    expect(
      SnakeCaseStringToSentenceCaseString("another_snake_case_string")
    ).toBe("Another snake case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SnakeCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(SnakeCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
