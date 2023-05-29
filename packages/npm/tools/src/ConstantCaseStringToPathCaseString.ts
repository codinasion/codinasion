export function ConstantCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "/");
}
