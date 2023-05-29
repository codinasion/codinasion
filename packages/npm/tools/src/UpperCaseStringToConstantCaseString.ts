export function UpperCaseStringToConstantCaseString(str: string): string {
  return str.replace(/ /g, "_");
}
