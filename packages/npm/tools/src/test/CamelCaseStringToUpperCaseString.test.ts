import { CamelCaseStringToUpperCaseString } from "../CamelCaseStringToUpperCaseString";

describe("CamelCaseStringToUpperCaseString", () => {
  test("converts a camelCase string to upper case", () => {
    expect(CamelCaseStringToUpperCaseString("camelCaseString")).toBe(
      "CAMEL CASE STRING"
    );
    expect(CamelCaseStringToUpperCaseString("anotherCamelCaseString")).toBe(
      "ANOTHER CAMEL CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(CamelCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
