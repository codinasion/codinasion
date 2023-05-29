export function SnakeCaseStringToDotCaseString(str: string): string {
  return str.replace(/_/g, ".");
}
