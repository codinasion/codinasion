export function PathCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, "_");
}
