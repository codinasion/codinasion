export function ConstantCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, ".");
}
