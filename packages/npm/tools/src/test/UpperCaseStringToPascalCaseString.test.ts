import { UpperCaseStringToPascalCaseString } from "../UpperCaseStringToPascalCaseString";

describe("UpperCaseStringToPascalCaseString", () => {
  test("converts an uppercase string to PascalCase", () => {
    expect(UpperCaseStringToPascalCaseString("UPPER CASE STRING")).toBe(
      "UpperCaseString"
    );
    expect(UpperCaseStringToPascalCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "AnotherUpperCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(UpperCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
