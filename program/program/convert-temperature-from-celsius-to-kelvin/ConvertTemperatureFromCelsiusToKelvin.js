function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

const celsius = -40;
const kelvin = celsiusToKelvin(celsius);

console.log(`Input (C): ${celsius}`);
console.log(`Output (K): ${kelvin}`);
