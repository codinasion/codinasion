import { PascalCaseStringToLowerCaseString } from "../PascalCaseStringToLowerCaseString";

describe("PascalCaseStringToLowerCaseString", () => {
  test("converts a PascalCase string to lower case", () => {
    expect(PascalCaseStringToLowerCaseString("PascalCaseString")).toBe(
      "pascal case string"
    );
    expect(PascalCaseStringToLowerCaseString("AnotherPascalCaseString")).toBe(
      "another pascal case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(PascalCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
