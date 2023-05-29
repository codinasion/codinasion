export function UpperCaseStringToKebabCaseString(str: string): string {
  return str.replace(/ /g, "-").toLowerCase();
}
