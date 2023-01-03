/*ISSUE #3407*/
function centimetersToInch(centimeters) {
    return centimeters / 2.54;
  }

  const centimeters = 12.7;
  console.log(`Input: ${centimeters} ${centimeters > 1 ? 'centimeters' : 'centimeter'}`);
  const result = centimetersToInch(centimeters);
  console.log(`Output: ${result} ${result == 1 ? 'inch' : 'inches'}`);