import { LowerCaseStringToPascalCaseString } from "../LowerCaseStringToPascalCaseString";

describe("LowerCaseStringToPascalCaseString", () => {
  test("converts a lower case string to PascalCase", () => {
    expect(LowerCaseStringToPascalCaseString("lower case string")).toBe(
      "LowerCaseString"
    );
    expect(LowerCaseStringToPascalCaseString("another lower case string")).toBe(
      "AnotherLowerCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(LowerCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
