import { SentenceCaseStringToSnakeCaseString } from "../SentenceCaseStringToSnakeCaseString";

describe("SentenceCaseStringToSnakeCaseString", () => {
  test("converts a sentence-case string to snake_case", () => {
    expect(SentenceCaseStringToSnakeCaseString("Sentence case string")).toBe(
      "sentence_case_string"
    );
    expect(
      SentenceCaseStringToSnakeCaseString("Another sentence case string")
    ).toBe("another_sentence_case_string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(SentenceCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
