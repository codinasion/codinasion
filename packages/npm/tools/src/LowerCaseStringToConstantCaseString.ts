export function LowerCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/ /g, "_");
}
