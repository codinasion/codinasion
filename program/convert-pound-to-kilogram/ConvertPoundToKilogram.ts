function poundToKilogram(pounds: Number): Number {
  let kilogram: Number = pounds * 0.453592;
  return kilogram
}
let pounds = prompt("Enter weight in pounds:");
console.log(poundToKilogram(pounds))
