/**
 * Converts a string to PascalCase.
 *
 * @param str - The input string to convert.
 * @returns The converted string in PascalCase.
 */
export function StringToPascalCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const pascalWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return pascalWords.join("");
}
