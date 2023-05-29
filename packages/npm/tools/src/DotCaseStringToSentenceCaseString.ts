export function DotCaseStringToSentenceCaseString(str: string): string {
  if (str.indexOf(".") !== -1) {
    return str
      .toLowerCase()
      .split(".")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase()
      )
      .join(" ");
  }
  return str;
}
