import { LowerCaseStringToDotCaseString } from "../LowerCaseStringToDotCaseString";

describe("LowerCaseStringToDotCaseString", () => {
  test("converts a lower case string to dot.case", () => {
    expect(LowerCaseStringToDotCaseString("lower case string")).toBe(
      "lower.case.string"
    );
    expect(LowerCaseStringToDotCaseString("another lower case string")).toBe(
      "another.lower.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(LowerCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
