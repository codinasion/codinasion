export function CamelCaseStringToPascalCaseString(str: string): string {
  return str.replace(
    /(\w)(\w*)/g,
    (match, firstChar, rest) => firstChar.toUpperCase() + rest
  );
}
