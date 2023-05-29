const getPerimeterOfSquare = (side:number): number =>{
return 4* side;
}

const side = 23;
console.log(`The perimeter of the square of side ${side} is ${getPerimeterOfSquare(side)}`);