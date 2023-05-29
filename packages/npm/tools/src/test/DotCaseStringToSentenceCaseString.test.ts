import { DotCaseStringToSentenceCaseString } from "../DotCaseStringToSentenceCaseString";

describe("DotCaseStringToSentenceCaseString", () => {
  test("converts a dot.case string to sentence case", () => {
    expect(DotCaseStringToSentenceCaseString("dot.case.string")).toBe(
      "Dot case string"
    );
    expect(DotCaseStringToSentenceCaseString("another.dot.case.string")).toBe(
      "Another dot case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(DotCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
