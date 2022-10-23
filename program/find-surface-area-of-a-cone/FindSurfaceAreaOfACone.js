/**
 * @name This program finds the surface area of cone
 * @param {number} radius
 * @param {number} slantHeight 
 * @returns {number}
 *
 * @example
 * ```js
 * const area1 = FindSurfaceAreaOfACone(2, 3) // 31.41592653589793
 * const area2 = FindSurfaceAreaOfACone(5, 10) // 235.61944901923448
 * ```
 *
 * @author Tanishq Singh
 */
function FindSurfaceAreaOfACone(radius, slantHeight) {
	const area = Math.PI * radius * (radius + slantHeight);

	return area;
}

// Console Tests
console.log("Area of cone of radius 2 and slant-height 3: ");
console.log("That is " + FindSurfaceAreaOfACone(2, 3) + " // 31.41592653589793");

console.log("Numer of weeks in 3024000 seconds: ");
console.log("That is " + FindSurfaceAreaOfACone(5, 10) + " // 235.61944901923448")
