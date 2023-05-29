import { SentenceCaseStringToKebabCaseString } from "../SentenceCaseStringToKebabCaseString";

describe("SentenceCaseStringToKebabCaseString", () => {
  test("converts a sentence-case string to kebab-case", () => {
    expect(SentenceCaseStringToKebabCaseString("Sentence case string")).toBe(
      "sentence-case-string"
    );
    expect(
      SentenceCaseStringToKebabCaseString("Another sentence case string")
    ).toBe("another-sentence-case-string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(SentenceCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
