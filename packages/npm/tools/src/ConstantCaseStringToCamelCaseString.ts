export function ConstantCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf("_") !== -1) {
    return str
      .toLowerCase()
      .replace(/_([a-z])/g, (match, char) => char.toUpperCase());
  }
  return str;
}
