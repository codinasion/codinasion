function areaOfCube() {
    let side = parseFloat(prompt("Enter the length of a side of the cube:"));
    return 6 * side * side;
}

let area = areaOfCube();
console.log("The area of the cube is " + area);
