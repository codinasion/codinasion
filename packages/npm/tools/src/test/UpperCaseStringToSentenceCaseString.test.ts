import { UpperCaseStringToSentenceCaseString } from "../UpperCaseStringToSentenceCaseString";

describe("UpperCaseStringToSentenceCaseString", () => {
  test("converts an uppercase string to sentence case", () => {
    expect(UpperCaseStringToSentenceCaseString("UPPER CASE STRING")).toBe(
      "Upper case string"
    );
    expect(
      UpperCaseStringToSentenceCaseString("ANOTHER UPPER CASE STRING")
    ).toBe("Another upper case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(UpperCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
