import { DotCaseStringToPathCaseString } from "../DotCaseStringToPathCaseString";

describe("DotCaseStringToPathCaseString", () => {
  test("converts a dot.case string to path/case", () => {
    expect(DotCaseStringToPathCaseString("dot.case.string")).toBe(
      "dot/case/string"
    );
    expect(DotCaseStringToPathCaseString("another.dot.case.string")).toBe(
      "another/dot/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(DotCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
