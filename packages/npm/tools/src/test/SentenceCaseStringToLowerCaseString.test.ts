import { SentenceCaseStringToLowerCaseString } from "../SentenceCaseStringToLowerCaseString";

describe("SentenceCaseStringToLowerCaseString", () => {
  test("converts a sentence-case string to lower case", () => {
    expect(SentenceCaseStringToLowerCaseString("Sentence case string")).toBe(
      "sentence case string"
    );
    expect(
      SentenceCaseStringToLowerCaseString("Another sentence case string")
    ).toBe("another sentence case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(SentenceCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
