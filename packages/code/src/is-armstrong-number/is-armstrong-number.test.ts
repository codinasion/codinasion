import { isArmstrongNumber } from './is-armstrong-number';

describe('isArmstrongNumber', () => {
  test('should return true for single-digit Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toBe(true);
  });

  test('should return true for multi-digit Armstrong numbers', () => {
    expect(isArmstrongNumber(153)).toBe(true);
    expect(isArmstrongNumber(9474)).toBe(true);
  });

  test('should return false for non-Armstrong numbers', () => {
    expect(isArmstrongNumber(123)).toBe(false);
    expect(isArmstrongNumber(100)).toBe(false);
  });

  test('should return true for large Armstrong numbers', () => {
    expect(isArmstrongNumber(9474)).toBe(true);
    expect(isArmstrongNumber(54748)).toBe(true);
  });

  test('should return false for large non-Armstrong numbers', () => {
    expect(isArmstrongNumber(9475)).toBe(false);
    expect(isArmstrongNumber(54749)).toBe(false);
  });
});