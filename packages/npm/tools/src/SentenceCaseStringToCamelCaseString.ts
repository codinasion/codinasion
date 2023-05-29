export function SentenceCaseStringToCamelCaseString(str: string): string {
  const result = str.replace(/\s+(.)/g, (_, char) => char.toUpperCase());
  return result.charAt(0).toLowerCase() + result.slice(1);
}
