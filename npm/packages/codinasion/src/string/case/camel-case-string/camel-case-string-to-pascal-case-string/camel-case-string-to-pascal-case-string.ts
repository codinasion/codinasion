/**
 * Converts a camel case string to a Pascal case string.
 *
 * @param str - The camel case string to convert.
 * @returns The Pascal case string.
 */
export function CamelCaseStringToPascalCaseString(str: string): string {
  return str.replace(
    /(?<temp2>\w)(?<temp1>\w*)/g,
    (match: string, firstChar: string, rest: string) =>
      firstChar.toUpperCase() + rest,
  );
}
