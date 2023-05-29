import { PathCaseStringToCamelCaseString } from "../PathCaseStringToCamelCaseString";

describe("PathCaseStringToCamelCaseString", () => {
  test("converts a path-case string to camelCase", () => {
    expect(PathCaseStringToCamelCaseString("path/case/string")).toBe(
      "pathCaseString"
    );
    expect(PathCaseStringToCamelCaseString("another/path/case/string")).toBe(
      "anotherPathCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(PathCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
