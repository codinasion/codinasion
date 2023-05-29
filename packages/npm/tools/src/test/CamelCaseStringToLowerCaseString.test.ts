import { CamelCaseStringToLowerCaseString } from "../CamelCaseStringToLowerCaseString";

describe("CamelCaseStringToLowerCaseString", () => {
  test("converts a camelCase string to lower case", () => {
    expect(CamelCaseStringToLowerCaseString("camelCaseString")).toBe(
      "camel case string"
    );
    expect(CamelCaseStringToLowerCaseString("anotherCamelCaseString")).toBe(
      "another camel case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(CamelCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
