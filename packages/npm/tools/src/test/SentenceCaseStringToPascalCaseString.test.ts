import { SentenceCaseStringToPascalCaseString } from "../SentenceCaseStringToPascalCaseString";

describe("SentenceCaseStringToPascalCaseString", () => {
  test("converts a sentence-case string to PascalCase", () => {
    expect(SentenceCaseStringToPascalCaseString("Sentence case string")).toBe(
      "SentenceCaseString"
    );
    expect(
      SentenceCaseStringToPascalCaseString("Another sentence case string")
    ).toBe("AnotherSentenceCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(SentenceCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
