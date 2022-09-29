export const convertMetersToMiles = (meters: number): number => meters / 1609.344;

const meters = 8046.72;
console.log("Input  : " + meters);
console.log("Output : " + convertMetersToMiles(meters));
