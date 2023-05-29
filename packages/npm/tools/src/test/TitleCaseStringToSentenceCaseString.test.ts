import { TitleCaseStringToSentenceCaseString } from "../TitleCaseStringToSentenceCaseString";

describe("TitleCaseStringToSentenceCaseString", () => {
  test("converts a TitleCase string to sentence case", () => {
    expect(TitleCaseStringToSentenceCaseString("Title Case String")).toBe(
      "Title case string"
    );
    expect(
      TitleCaseStringToSentenceCaseString("Another Title Case String")
    ).toBe("Another title case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(TitleCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
