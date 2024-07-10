const gcd = (x: number, y: number): number => {
  if (y === 0) return x;
  return gcd(y, x % y);
};

console.log(gcd(12, 18));
