import { fahrenheitToKelvin } from "./fahrenheit-to-kelvin";

describe("fahrenheitToKelvin", () => {
  it("should convert Fahrenheit to Kelvin correctly", () => {
    expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15, 2);
    expect(fahrenheitToKelvin(212)).toBeCloseTo(373.15, 2);
    expect(fahrenheitToKelvin(-40)).toBeCloseTo(233.15, 2);
    expect(fahrenheitToKelvin(98.6)).toBeCloseTo(310.15, 2);
    expect(fahrenheitToKelvin(68)).toBeCloseTo(293.15, 2);
  });
});
