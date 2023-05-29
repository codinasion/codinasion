import { HeaderCaseStringToLowerCaseString } from "../HeaderCaseStringToLowerCaseString";

describe("HeaderCaseStringToLowerCaseString", () => {
  test("converts a Header-Case string to lowercase", () => {
    expect(HeaderCaseStringToLowerCaseString("Header-Case-String")).toBe(
      "header case string"
    );
    expect(
      HeaderCaseStringToLowerCaseString("Another-Header-Case-String")
    ).toBe("another header case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lowercase", () => {
    expect(HeaderCaseStringToLowerCaseString("lowercase string")).toBe(
      "lowercase string"
    );
  });
});
