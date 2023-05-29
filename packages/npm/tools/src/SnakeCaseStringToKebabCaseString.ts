export function SnakeCaseStringToKebabCaseString(str: string): string {
  return str.replace(/_/g, "-");
}
