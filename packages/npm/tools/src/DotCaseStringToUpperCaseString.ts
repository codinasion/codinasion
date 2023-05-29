export function DotCaseStringToUpperCaseString(str: string): string {
  return str.replace(/\./g, " ").toUpperCase();
}
