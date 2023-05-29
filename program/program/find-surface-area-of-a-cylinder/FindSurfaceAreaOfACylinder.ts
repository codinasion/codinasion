const surfaceAreaOfCylinder = (radius: number, height: number): number => {
  return  2 * Math.PI * radius * ( radius + height );
}

console.log(surfaceAreaOfCylinder(2, 3))
