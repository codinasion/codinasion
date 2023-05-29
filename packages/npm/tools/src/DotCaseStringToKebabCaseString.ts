export function DotCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\./g, "-");
}
