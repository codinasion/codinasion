import { HeaderCaseStringToKebabCaseString } from "../HeaderCaseStringToKebabCaseString";

describe("HeaderCaseStringToKebabCaseString", () => {
  test("converts a Header-Case string to kebab-case", () => {
    expect(HeaderCaseStringToKebabCaseString("Header-Case-String")).toBe(
      "header-case-string"
    );
    expect(
      HeaderCaseStringToKebabCaseString("Another-Header-Case-String")
    ).toBe("another-header-case-string");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(HeaderCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
