import { DotCaseStringToCamelCaseString } from "../DotCaseStringToCamelCaseString";

describe("DotCaseStringToCamelCaseString", () => {
  test("converts a dot.case string to camelCase", () => {
    expect(DotCaseStringToCamelCaseString("dot.case.string")).toBe(
      "dotCaseString"
    );
    expect(DotCaseStringToCamelCaseString("another.dot.case.string")).toBe(
      "anotherDotCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(DotCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
