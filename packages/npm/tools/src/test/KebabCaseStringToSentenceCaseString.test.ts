import { KebabCaseStringToSentenceCaseString } from "../KebabCaseStringToSentenceCaseString";

describe("KebabCaseStringToSentenceCaseString", () => {
  test("converts a kebab-case string to sentence case", () => {
    expect(KebabCaseStringToSentenceCaseString("kebab-case-string")).toBe(
      "Kebab case string"
    );
    expect(
      KebabCaseStringToSentenceCaseString("another-kebab-case-string")
    ).toBe("Another kebab case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(KebabCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
