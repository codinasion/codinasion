import { SentenceCaseStringToConstantCaseString } from "../SentenceCaseStringToConstantCaseString";

describe("SentenceCaseStringToConstantCaseString", () => {
  test("converts a sentence-case string to CONSTANT_CASE", () => {
    expect(SentenceCaseStringToConstantCaseString("Sentence case string")).toBe(
      "SENTENCE_CASE_STRING"
    );
    expect(
      SentenceCaseStringToConstantCaseString("Another sentence case string")
    ).toBe("ANOTHER_SENTENCE_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(SentenceCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
