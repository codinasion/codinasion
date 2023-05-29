import { HeaderCaseStringToSentenceCaseString } from "../HeaderCaseStringToSentenceCaseString";

describe("HeaderCaseStringToSentenceCaseString", () => {
  test("converts a Header-Case string to sentence case", () => {
    expect(HeaderCaseStringToSentenceCaseString("Header-Case-String")).toBe(
      "Header case string"
    );
    expect(
      HeaderCaseStringToSentenceCaseString("Another-Header-Case-String")
    ).toBe("Another header case string");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToSentenceCaseString("")).toBe("");
  });

  test("returns the same string if input is already in sentence case", () => {
    expect(HeaderCaseStringToSentenceCaseString("Sentence case string")).toBe(
      "Sentence case string"
    );
  });
});
