import { UpperCaseStringToLowerCaseString } from "../UpperCaseStringToLowerCaseString";

describe("UpperCaseStringToLowerCaseString", () => {
  test("converts an uppercase string to lowercase", () => {
    expect(UpperCaseStringToLowerCaseString("UPPER CASE STRING")).toBe(
      "upper case string"
    );
    expect(UpperCaseStringToLowerCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "another upper case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lowercase", () => {
    expect(UpperCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
