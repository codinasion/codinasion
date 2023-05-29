export function ConstantCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "-");
}
