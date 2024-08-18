import { isPangram } from './is-pangram';

describe('isPangram', () => {
  it('should return true for pangram strings', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
    expect(isPangram("Pack my box with five dozen liquor jugs")).toBe(true);
    expect(isPangram("Sphinx of black quartz, judge my vow")).toBe(true);
  });

  it('should return false for non-pangram strings', () => {
    expect(isPangram("Hello, world!")).toBe(false);
    expect(isPangram("This is not a pangram")).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(isPangram("")).toBe(false);
  });

  it('should handle strings with non-alphabetic characters', () => {
    expect(isPangram("1234567890!@#$%^&*()_+")).toBe(false);
  });
});