import { CamelCaseStringToPathCaseString } from "../CamelCaseStringToPathCaseString";

describe("CamelCaseStringToPathCaseString", () => {
  test("converts a camelCase string to path-case", () => {
    expect(CamelCaseStringToPathCaseString("camelCaseString")).toBe(
      "camel-case-string"
    );
    expect(CamelCaseStringToPathCaseString("anotherCamelCaseString")).toBe(
      "another-camel-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path-case", () => {
    expect(CamelCaseStringToPathCaseString("path-case-string")).toBe(
      "path-case-string"
    );
  });
});
