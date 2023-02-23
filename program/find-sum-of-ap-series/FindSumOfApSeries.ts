function sumOfApSeries(a: number, n: number, d: number): number {
  const a_n = a + (n - 1) * d;
  const part1 = n / 2;
  const part2 = a + a_n;
  return part1 * part2;
}
