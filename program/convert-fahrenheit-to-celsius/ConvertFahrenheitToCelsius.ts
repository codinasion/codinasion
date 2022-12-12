function convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9 
}

console.log("Given Fahrenheit in Celsius:", convertFahrenheitToCelsius(50))