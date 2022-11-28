/**
 *
 * @name This program returns the area of a cuboid 
 * @param {number} height 
 * @param {number} width 
 * @param {number} length 
 * @returns {number}
 *
 * @example
 * ```ts
 * const area1: number = FindAreaOfACuboid(3, 2, 4) // 52
 * const area2: number = FindAreaOfACuboid(43, 1, 82) // 7302
 * ```
 * 
 * @author Tanishq Singh
 */
function FindAreaOfACuboid(height: number, width: number, length: number): number {
	return 2 * ((length * width) + (length * height) + (width * height));
}

// Console Tests
console.log("Area of cuboid of dimensions (1, 2, 3): ");
console.log("That is " + FindAreaOfACuboid(1, 2, 3) + " // 22");

console.log("Area of cuboid of dimensions (43, 12, 32): ");
console.log("That is " + FindAreaOfACuboid(43, 12, 32) + " // 4552");
