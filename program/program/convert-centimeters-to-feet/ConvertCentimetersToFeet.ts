function ConvertCentimetersToFeet(cm: number) {
  return (cm / 30.48).toFixed(2);
}

const cm = 152.4;
console.log(`Input: ${cm} cm`);
console.log(`${cm} cm is ${ConvertCentimetersToFeet(cm)} feet`);