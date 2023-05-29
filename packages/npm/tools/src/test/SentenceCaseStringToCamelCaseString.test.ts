import { SentenceCaseStringToCamelCaseString } from "../SentenceCaseStringToCamelCaseString";

describe("SentenceCaseStringToCamelCaseString", () => {
  test("converts a sentence-case string to camelCase", () => {
    expect(SentenceCaseStringToCamelCaseString("Sentence case string")).toBe(
      "sentenceCaseString"
    );
    expect(
      SentenceCaseStringToCamelCaseString("Another sentence case string")
    ).toBe("anotherSentenceCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(SentenceCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
