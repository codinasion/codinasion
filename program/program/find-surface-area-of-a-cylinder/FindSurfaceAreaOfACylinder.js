function surfaceArea(radius, height) {
  return {
    area() {
      return 2 * Math.PI * radius * (radius + height);
    },
  };
}

const cylinder = surfaceArea(2, 3);
console.log(cylinder.area());
