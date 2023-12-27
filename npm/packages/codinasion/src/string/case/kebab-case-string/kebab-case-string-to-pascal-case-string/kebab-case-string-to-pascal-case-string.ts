/**
 * Converts a kebab-case string to PascalCase string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The PascalCase string.
 */
export function KebabCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/-(?<temp1>[a-z])/g, (match: string, group1: string) =>
      group1.toUpperCase(),
    )
    .replace(/^\w/, (match) => match.toUpperCase());
}
