/**
 * Add two numbers together
 * @param  {Float} Kilometers a distance with kilometers unit
 *
 * @return {Float}    the distance with miles unit
 */

function ConvertKilometersToMiles(Kilometers) {
  return Kilometers / 1.609;
}

//test
console.log(ConvertKilometersToMiles(8.04672));
