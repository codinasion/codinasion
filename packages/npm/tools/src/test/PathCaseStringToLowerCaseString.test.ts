import { PathCaseStringToLowerCaseString } from "../PathCaseStringToLowerCaseString";

describe("PathCaseStringToLowerCaseString", () => {
  test("converts a path-case string to lower case", () => {
    expect(PathCaseStringToLowerCaseString("path/case/string")).toBe(
      "path case string"
    );
    expect(PathCaseStringToLowerCaseString("another/path/case/string")).toBe(
      "another path case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(PathCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
