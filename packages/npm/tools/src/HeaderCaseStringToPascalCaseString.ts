export function HeaderCaseStringToPascalCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
