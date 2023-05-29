export function UpperCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/ /g, "_").toLowerCase();
}
