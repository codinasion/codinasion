/**
 *
 * @name This program find surface area of cube
 * @param {number} side Side length of the cude
 * @returns {number}
 *
 * @example
 * ```js
 * const area1 = FindSurfaceAreaOfACube(2) // 24
 * const area2 = FindSurfaceAreaOfACube(3) // 54
 * ```
 */
function FindSurfaceAreaOfACube(side) {
  return side * side * 6;
}

// Console Tests
console.log("Surface area of cube of side: 3");
console.log("That is" + FindSurfaceAreaOfACube(3) + "// 54");

console.log("Surface area of cube of side: 4");
console.log("That is" + FindSurfaceAreaOfACube(4) + "// 96");

console.log("Surface area of cube of side: 5");
console.log("That is" + FindSurfaceAreaOfACube(5) + "// 150");
