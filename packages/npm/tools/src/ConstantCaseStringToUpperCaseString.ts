export function ConstantCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
