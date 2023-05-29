export function PathCaseStringToCamelCaseString(str: string): string {
  if (str.indexOf("/") === -1) {
    return str;
  }
  return str.toLowerCase().replace(/\/(.)/g, (_, char) => char.toUpperCase());
}
