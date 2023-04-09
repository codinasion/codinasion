function inchesToCentimeters(inches: number): number {
    return inches * 2.54;
  }
  
  const inches = 10;
  const centimeters = inchesToCentimeters(inches);
  console.log(`${inches} inches is equal to ${centimeters} centimeters.`);
  