import { LowerCaseStringToCamelCaseString } from "./lower-case-string-to-camel-case-string";

describe("LowerCaseStringToCamelCaseString", () => {
  test("converts a lower case string to camelCase", () => {
    expect(LowerCaseStringToCamelCaseString("lower case string")).toBe(
      "lowerCaseString",
    );
    expect(LowerCaseStringToCamelCaseString("another lower case string")).toBe(
      "anotherLowerCaseString",
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(LowerCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString",
    );
  });
});
