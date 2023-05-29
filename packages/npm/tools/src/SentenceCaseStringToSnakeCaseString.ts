export function SentenceCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "_");
}
