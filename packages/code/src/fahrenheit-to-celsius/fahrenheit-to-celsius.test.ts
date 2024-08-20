import { fahrenheitToCelsius } from './fahrenheit-to-celsius';

describe('fahrenheitToCelsius', () => {
  it('should convert Fahrenheit to Celsius correctly', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(212)).toBe(100);
    expect(fahrenheitToCelsius(-40)).toBe(-40);
    expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37, 1);
    expect(fahrenheitToCelsius(68)).toBe(20);
  });
});