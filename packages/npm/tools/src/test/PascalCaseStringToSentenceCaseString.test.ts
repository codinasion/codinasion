import { PascalCaseStringToSentenceCaseString } from "../PascalCaseStringToSentenceCaseString";

describe("PascalCaseStringToSentenceCaseString", () => {
  test("converts a PascalCase string to sentence case", () => {
    expect(PascalCaseStringToSentenceCaseString("PascalCaseString")).toBe(
      "Pascal case string"
    );
    expect(
      PascalCaseStringToSentenceCaseString("AnotherPascalCaseString")
    ).toBe("Another pascal case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(PascalCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
