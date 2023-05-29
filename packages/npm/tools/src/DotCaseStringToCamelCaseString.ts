export function DotCaseStringToCamelCaseString(str: string): string {
  return str.replace(/\.(\w)/g, (match, char) => char.toUpperCase());
}
