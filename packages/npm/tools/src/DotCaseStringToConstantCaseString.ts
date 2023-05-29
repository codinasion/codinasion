export function DotCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\./g, "_");
}
