export function StringToSentenceCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const sentence = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return sentence;
}
