export function UpperCaseStringToPathCaseString(str: string): string {
  return str.replace(/ /g, "/").toLowerCase();
}
