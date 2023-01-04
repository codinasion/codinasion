/* Problem: Write a JavaScript program to find surface area of a cuboid. 

Surface area of cuboid = 2 x (Length * Width + Length * Height + Width * Height) 

Length : 2
Width : 3
Height : 4
Surface area : 52

Approach 
- initialize side1 as length * width
- initialize side2 as length * height
- initialize side3 as width * height 
- take the sum of side1, side2 and side3 and multiply by 2

*/ 

function findAreaOfCuboid(length, width, height) {
    let side1 = length * width; 
    let side2 = length * height; 
    let side3 = width * height; 
    let surfaceArea = 2 * (side1 + side2 + side3); 
    return surfaceArea; 
}; 

console.log(findAreaOfCuboid(2,3,4)); 