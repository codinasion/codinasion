/**
 * @name This program finds the surface area of cuboid
 * @param {number} length
 * @param {number} width
 * @param {number} height 
 * @returns {number}
 *
 * @example
 * ```ts
 * const area1: number = FindSurfaceAreaOfACuboid(2, 3, 4) // 52
 * const area2: number = FindSurfaceAreaOfACuboid(5, 1, 3) // 46
 * ```
 *
 * @author Tanishq Singh
 */
function FindSurfaceAreaOfACuboid(length: number, width: number, height: number): number {
	const area = 2 * ((length * width) + (width * height) + (height * length));

	return area;
}

// Console Tests
console.log("Area of cuboid of dimensions 2, 3, 4: ");
console.log("That is " + FindSurfaceAreaOfACuboid(2, 3, 4) + " // 52");

console.log("Area of cuboid of dimensions 5, 1, 3: ");
console.log("That is " + FindSurfaceAreaOfACuboid(5, 1, 3) + " // 46")
