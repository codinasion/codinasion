import { HeaderCaseStringToCamelCaseString } from "../HeaderCaseStringToCamelCaseString";

describe("HeaderCaseStringToCamelCaseString", () => {
  test("converts a Header-Case string to camelCase", () => {
    expect(HeaderCaseStringToCamelCaseString("Header-Case-String")).toBe(
      "headerCaseString"
    );
    expect(
      HeaderCaseStringToCamelCaseString("Another-Header-Case-String")
    ).toBe("anotherHeaderCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(HeaderCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
