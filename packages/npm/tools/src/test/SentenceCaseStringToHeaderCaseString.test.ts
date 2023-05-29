import { SentenceCaseStringToHeaderCaseString } from "../SentenceCaseStringToHeaderCaseString";

describe("SentenceCaseStringToHeaderCaseString", () => {
  test("converts a sentence-case string to Header-Case", () => {
    expect(SentenceCaseStringToHeaderCaseString("Sentence case string")).toBe(
      "Sentence-Case-String"
    );
    expect(
      SentenceCaseStringToHeaderCaseString("Another sentence case string")
    ).toBe("Another-Sentence-Case-String");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(SentenceCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
