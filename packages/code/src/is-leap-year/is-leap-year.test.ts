import { isLeapYear } from './is-leap-year';

describe('isLeapYear', () => {
  it('should return true for leap years divisible by 4 but not by 100', () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2016)).toBe(true);
  });

  it('should return false for years not divisible by 4', () => {
    expect(isLeapYear(2019)).toBe(false);
    expect(isLeapYear(2021)).toBe(false);
  });

  it('should return false for years divisible by 100 but not by 400', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2100)).toBe(false);
  });

  it('should return true for years divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1600)).toBe(true);
  });
});