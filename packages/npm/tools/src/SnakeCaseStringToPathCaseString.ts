export function SnakeCaseStringToPathCaseString(str: string): string {
  return str.replace(/_/g, "/");
}
