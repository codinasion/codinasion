/**
 * @name This program finds the volue of a cone
 * @param {number} side
 * @returns {number}
 *
 * @example
 * ```ts
 * const volume1: number = FindVolumeOfACone(2) // 8
 * const volume2: number = FindVolumeOfACone(5) // 125
 * ```
 *
 * @author Tanishq Singh
 */
function FindVolumeOfACone(side: number): number {
	const volume = side * side * side;
	
	return volume;
}

// Console Tests
console.log("Area of cone of radius 2 and slant-height 3: ");
console.log("That is " + FindVolumeOfACone(3) + " // 27");

console.log("Area of cone of radius 5 and slant-height 10: ");
console.log("That is " + FindVolumeOfACone(1) + " // 1");