// program to convert meters to miles (1 mile = 1609.344 meters)

function convertMetersToMiles(meters) {
  return meters / 1609.344;
}

// const userInput=prompt('Input: ')
// alert(convertMetersToMiles(userInput))

const userInput = 8046.72;
console.log("input  : " + userInput);
console.log("output : " + convertMetersToMiles(userInput));
