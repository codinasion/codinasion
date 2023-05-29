export function LowerCaseStringToCamelCaseString(str: string): string {
  return str.replace(/ ([a-z])/g, (match, group1) => group1.toUpperCase());
}
