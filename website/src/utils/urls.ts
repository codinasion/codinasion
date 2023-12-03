export function EncodeURI(str: string): string {
  return encodeURIComponent(str);
}

export function DecodeURI(str: string): string {
  return decodeURIComponent(str);
}

export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch (e) {
    return false;
  }
}
