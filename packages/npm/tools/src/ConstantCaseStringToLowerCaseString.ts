export function ConstantCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, " ");
}
