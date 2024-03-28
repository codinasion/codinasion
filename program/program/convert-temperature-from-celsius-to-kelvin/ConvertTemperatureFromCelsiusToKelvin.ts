function celsiusToKelvin(celsius: number): number {
    const kelvin: number = celsius + 273.15;
    return kelvin;
}

const celsiusTemperature: number = -40; 
const kelvinTemperature: number = celsiusToKelvin(celsiusTemperature);
console.log(`${celsiusTemperature} degrees Celsius is equal to ${kelvinTemperature} Kelvin.`);
