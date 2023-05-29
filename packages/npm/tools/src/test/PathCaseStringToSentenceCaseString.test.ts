import { PathCaseStringToSentenceCaseString } from "../PathCaseStringToSentenceCaseString";

describe("PathCaseStringToSentenceCaseString", () => {
  test("converts a path-case string to sentence case", () => {
    expect(PathCaseStringToSentenceCaseString("path/case/string")).toBe(
      "Path case string"
    );
    expect(PathCaseStringToSentenceCaseString("another/path/case/string")).toBe(
      "Another path case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(PathCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
