import { CamelCaseStringToSentenceCaseString } from "../CamelCaseStringToSentenceCaseString";

describe("CamelCaseStringToSentenceCaseString", () => {
  test("converts a camelCase string to sentence case", () => {
    expect(CamelCaseStringToSentenceCaseString("camelCaseString")).toBe(
      "Camel case string"
    );
    expect(CamelCaseStringToSentenceCaseString("anotherCamelCaseString")).toBe(
      "Another camel case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(CamelCaseStringToSentenceCaseString("sentence case string")).toBe(
      "Sentence case string"
    );
    expect(CamelCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
