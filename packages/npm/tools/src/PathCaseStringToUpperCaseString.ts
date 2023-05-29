export function PathCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/\//g, " ");
}
