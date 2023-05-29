export function UpperCaseStringToDotCaseString(str: string): string {
  return str.replace(/ /g, ".").toLowerCase();
}
