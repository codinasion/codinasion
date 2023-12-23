export function EncodeProgramURL(language: string): string {
  return language.replace(/\+/g, "-plus").replace(/#/g, "-sharp").toLowerCase();
}

export function DecodeProgramURL(language: string): string {
  return language
    .replace(/-plus/g, "+")
    .replace(/-sharp/g, "#")
    .replace(/-/g, " ");
  // .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}
