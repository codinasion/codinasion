import { PathCaseStringToDotCaseString } from "../PathCaseStringToDotCaseString";

describe("PathCaseStringToDotCaseString", () => {
  test("converts a path-case string to dot.case", () => {
    expect(PathCaseStringToDotCaseString("path/case/string")).toBe(
      "path.case.string"
    );
    expect(PathCaseStringToDotCaseString("another/path/case/string")).toBe(
      "another.path.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(PathCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
