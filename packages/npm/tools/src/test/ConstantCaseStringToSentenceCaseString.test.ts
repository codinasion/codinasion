import { ConstantCaseStringToSentenceCaseString } from "../ConstantCaseStringToSentenceCaseString";

describe("ConstantCaseStringToSentenceCaseString", () => {
  test("converts a CONSTANT_CASE string to sentence case", () => {
    expect(ConstantCaseStringToSentenceCaseString("CONSTANT_CASE_STRING")).toBe(
      "Constant case string"
    );
    expect(
      ConstantCaseStringToSentenceCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("Another constant case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(ConstantCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
