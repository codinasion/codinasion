export function PathCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, "-");
}
