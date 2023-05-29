export function HeaderCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf("-") !== -1) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
