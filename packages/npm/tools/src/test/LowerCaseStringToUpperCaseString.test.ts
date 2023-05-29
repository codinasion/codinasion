import { LowerCaseStringToUpperCaseString } from "../LowerCaseStringToUpperCaseString";

describe("LowerCaseStringToUpperCaseString", () => {
  test("converts a lower case string to upper case", () => {
    expect(LowerCaseStringToUpperCaseString("lower case string")).toBe(
      "LOWER CASE STRING"
    );
    expect(LowerCaseStringToUpperCaseString("another lower case string")).toBe(
      "ANOTHER LOWER CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(LowerCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
