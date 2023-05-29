import { KebabCaseStringToCamelCaseString } from "../KebabCaseStringToCamelCaseString";

describe("KebabCaseStringToCamelCaseString", () => {
  test("converts a kebab-case string to camelCase", () => {
    expect(KebabCaseStringToCamelCaseString("kebab-case-string")).toBe(
      "kebabCaseString"
    );
    expect(KebabCaseStringToCamelCaseString("another-kebab-case-string")).toBe(
      "anotherKebabCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(KebabCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
