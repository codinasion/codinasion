import { CamelCaseStringToKebabCaseString } from "../CamelCaseStringToKebabCaseString";

describe("CamelCaseStringToKebabCaseString", () => {
  test("converts a camelCase string to kebab-case", () => {
    expect(CamelCaseStringToKebabCaseString("camelCaseString")).toBe(
      "camel-case-string"
    );
    expect(CamelCaseStringToKebabCaseString("anotherCamelCaseString")).toBe(
      "another-camel-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(CamelCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
