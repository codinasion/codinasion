export function SnakeCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}
