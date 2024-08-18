export function isPalindrome(str: string): boolean {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the normalized string with its reverse
  return normalizedStr === normalizedStr.split("").reverse().join("");
}
