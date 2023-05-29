export function SnakeCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
