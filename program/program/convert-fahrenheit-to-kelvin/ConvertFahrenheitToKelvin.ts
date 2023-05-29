function convertFahrenheitToKelvin(fahrenheit: number): string {
    return (((fahrenheit - 32) * 5 / 9) + 273.15);
}

console.log("Given Fahrenheit in Kelvin:", convertFahrenheitToKelvin(1))