export function SnakeCaseStringToCamelCaseString(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}
