import { LowerCaseStringToSentenceCaseString } from "../LowerCaseStringToSentenceCaseString";

describe("LowerCaseStringToSentenceCaseString", () => {
  test("converts a lower case string to sentence case", () => {
    expect(LowerCaseStringToSentenceCaseString("lower case string")).toBe(
      "Lower case string"
    );
    expect(
      LowerCaseStringToSentenceCaseString("another lower case string")
    ).toBe("Another lower case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(LowerCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
