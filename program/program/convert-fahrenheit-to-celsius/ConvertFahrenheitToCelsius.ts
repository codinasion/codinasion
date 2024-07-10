function convertFahrenheitToCelsius(fahrenheit: number): string {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
}

console.log("Given Fahrenheit in Celsius:", convertFahrenheitToCelsius(50));
