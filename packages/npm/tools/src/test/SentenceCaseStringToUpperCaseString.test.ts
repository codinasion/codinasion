import { SentenceCaseStringToUpperCaseString } from "../SentenceCaseStringToUpperCaseString";

describe("SentenceCaseStringToUpperCaseString", () => {
  test("converts a sentence-case string to upper case", () => {
    expect(SentenceCaseStringToUpperCaseString("sentence case string")).toBe(
      "SENTENCE CASE STRING"
    );
    expect(
      SentenceCaseStringToUpperCaseString("another sentence case string")
    ).toBe("ANOTHER SENTENCE CASE STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(SentenceCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
