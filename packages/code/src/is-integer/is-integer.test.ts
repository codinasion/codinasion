import { isInteger,  } from './is-integer';

describe('isInteger', () => {
  test('should return true for integers', () => {
    expect(isInteger(4)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-2)).toBe(true);
  });

  test('should return false for floats', () => {
    expect(isInteger(4.5)).toBe(false);
    expect(isInteger(-1.1)).toBe(false);
  });
});