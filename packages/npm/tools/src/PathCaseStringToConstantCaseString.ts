export function PathCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\//g, "_");
}
