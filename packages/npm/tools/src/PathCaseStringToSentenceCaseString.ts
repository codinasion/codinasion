export function PathCaseStringToSentenceCaseString(str: string): string {
  const result = str.toLowerCase().replace(/\//g, " ").trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
