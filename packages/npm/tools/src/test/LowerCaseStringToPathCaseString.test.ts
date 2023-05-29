import { LowerCaseStringToPathCaseString } from "../LowerCaseStringToPathCaseString";

describe("LowerCaseStringToPathCaseString", () => {
  test("converts a lower case string to path-case", () => {
    expect(LowerCaseStringToPathCaseString("lower case string")).toBe(
      "lower/case/string"
    );
    expect(LowerCaseStringToPathCaseString("another lower case string")).toBe(
      "another/lower/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path-case", () => {
    expect(LowerCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
