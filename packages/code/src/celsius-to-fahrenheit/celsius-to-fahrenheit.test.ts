import { celsiusToFahrenheit } from "./celsius-to-fahrenheit";

describe("celsiusToFahrenheit", () => {
  it("should convert Celsius to Fahrenheit correctly", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
    expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});
