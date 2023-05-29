export function PascalCaseStringToConstantCaseString(str: string): string {
  if (str === str.toUpperCase()) {
    return str;
  }
  const result = str.replace(/([A-Z])/g, "_$1").toUpperCase();
  if (result.startsWith("_")) {
    return result.substring(1);
  }
  return result;
}
