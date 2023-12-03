export function MarkdownToText(markdown: string): string {
  // Remove all markdown formatting and return the text
  return markdown
    .replace(/!\[.*\]\(.*\)/g, "") // Remove images
    .replace(/\[.*\]\(.*\)/g, "") // Remove links
    .replace(/#{1,6}\s?/g, "") // Remove headers
    .replace(/`{3}.*`{3}/gs, "") // Remove code blocks
    .replace(/`{1}.*`{1}/g, "") // Remove inline code
    .replace(/\*{1,2}(.+?)\*{1,2}/g, "$1") // Remove emphasis and strong
    .replace(/~~(.+?)~~/g, "$1") // Remove strikethrough
    .replace(/>\s?/g, "") // Remove blockquotes
    .replace(/\n{2,}/g, "\n") // Replace multiple line breaks with a single one
    .trim(); // Remove leading and trailing whitespace
}

export function ConvertToTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function ConvertKebabCaseToTitleCase(str: string): string {
  return ConvertToTitleCase(str.replace(/-/g, " "));
}
