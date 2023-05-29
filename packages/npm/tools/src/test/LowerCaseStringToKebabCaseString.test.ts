import { LowerCaseStringToKebabCaseString } from "../LowerCaseStringToKebabCaseString";

describe("LowerCaseStringToKebabCaseString", () => {
  test("converts a lower case string to kebab-case", () => {
    expect(LowerCaseStringToKebabCaseString("lower case string")).toBe(
      "lower-case-string"
    );
    expect(LowerCaseStringToKebabCaseString("another lower case string")).toBe(
      "another-lower-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(LowerCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
