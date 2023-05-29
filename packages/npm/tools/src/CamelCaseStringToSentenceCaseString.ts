export function CamelCaseStringToSentenceCaseString(str: string): string {
  const result = str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
