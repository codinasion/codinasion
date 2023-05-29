import { SentenceCaseStringToPathCaseString } from "../SentenceCaseStringToPathCaseString";

describe("SentenceCaseStringToPathCaseString", () => {
  test("converts a sentence-case string to path-case", () => {
    expect(SentenceCaseStringToPathCaseString("Sentence case string")).toBe(
      "sentence/case/string"
    );
    expect(
      SentenceCaseStringToPathCaseString("Another sentence case string")
    ).toBe("another/sentence/case/string");
  });

  test("returns an empty string if input is empty", () => {
    expect(SentenceCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path-case", () => {
    expect(SentenceCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
