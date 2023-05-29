export function ConstantCaseStringToPascalCaseString(str: string): string {
  if (str.indexOf("_") !== -1) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }
  return str;
}
