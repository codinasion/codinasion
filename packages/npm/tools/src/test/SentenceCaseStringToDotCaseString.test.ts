import { SentenceCaseStringToDotCaseString } from "../SentenceCaseStringToDotCaseString";

describe("SentenceCaseStringToDotCaseString", () => {
  test("converts a sentence-case string to dot.case", () => {
    expect(SentenceCaseStringToDotCaseString("Sentence case string")).toBe(
      "sentence.case.string"
    );
    expect(
      SentenceCaseStringToDotCaseString("Another sentence case string")
    ).toBe("another.sentence.case.string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(SentenceCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
