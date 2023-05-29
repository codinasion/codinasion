import { DotCaseStringToLowerCaseString } from "../DotCaseStringToLowerCaseString";

describe("DotCaseStringToLowerCaseString", () => {
  test("converts a dot.case string to lowercase", () => {
    expect(DotCaseStringToLowerCaseString("dot.case.string")).toBe(
      "dot case string"
    );
    expect(DotCaseStringToLowerCaseString("another.dot.case.string")).toBe(
      "another dot case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lowercase", () => {
    expect(DotCaseStringToLowerCaseString("lower.case.string")).toBe(
      "lower case string"
    );
  });
});
