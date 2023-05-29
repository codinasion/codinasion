import { UpperCaseStringToDotCaseString } from "../UpperCaseStringToDotCaseString";

describe("UpperCaseStringToDotCaseString", () => {
  test("converts an uppercase string to dot.case", () => {
    expect(UpperCaseStringToDotCaseString("UPPER CASE STRING")).toBe(
      "upper.case.string"
    );
    expect(UpperCaseStringToDotCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "another.upper.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(UpperCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
