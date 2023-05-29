export function UpperCaseStringToPascalCaseString(str: string): string {
  if (str.indexOf(" ") === -1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
