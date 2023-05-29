export function HeaderCaseStringToSentenceCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
      })
      .join(" ");
  }
  return str;
}
