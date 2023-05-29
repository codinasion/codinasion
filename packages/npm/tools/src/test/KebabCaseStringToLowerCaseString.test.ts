import { KebabCaseStringToLowerCaseString } from "../KebabCaseStringToLowerCaseString";

describe("KebabCaseStringToLowerCaseString", () => {
  test("converts a kebab-case string to lowercase", () => {
    expect(KebabCaseStringToLowerCaseString("kebab-case-string")).toBe(
      "kebab case string"
    );
    expect(KebabCaseStringToLowerCaseString("another-kebab-case-string")).toBe(
      "another kebab case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lowercase", () => {
    expect(KebabCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
