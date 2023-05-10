function poundToKilogram(pounds: number): number {
  const kilogram: number = pounds * 0.453592;
  return kilogram
}
const pounds = prompt("Enter weight in pounds:");
console.log(poundToKilogram(pounds))
