export function DotCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\./g, "_");
}
