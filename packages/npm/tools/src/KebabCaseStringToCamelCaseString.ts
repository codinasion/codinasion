export function KebabCaseStringToCamelCaseString(str: string): string {
  return str.replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());
}
