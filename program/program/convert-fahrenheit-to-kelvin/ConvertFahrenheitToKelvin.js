const fahrenheit = prompt();
const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
console.log(`${kelvin.toFixed(3)}K`);
