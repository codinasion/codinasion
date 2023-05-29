import { SentenceCaseStringToTitleCaseString } from "../SentenceCaseStringToTitleCaseString";

describe("SentenceCaseStringToTitleCaseString", () => {
  test("converts a sentence-case string to title case", () => {
    expect(SentenceCaseStringToTitleCaseString("sentence case string")).toBe(
      "Sentence Case String"
    );
    expect(
      SentenceCaseStringToTitleCaseString("another sentence case string")
    ).toBe("Another Sentence Case String");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in title case", () => {
    expect(SentenceCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
