// Program to swap two numbers using JavaScript
function swapTowNumbers (number_1, number_2) {
    let temp_number;
    temp_number = number_1;
    number_1 = number_2;
    number_2 = temp_number;
    return [number_1, number_2];
}

// taking input 
const number_1 = 10;
const number_2 = 20;

// before the opearation
console.log(`before swaping numbers: a = ${number_1}, b = ${number_2}`);
// after the opearation
console.log(`after swaping numbers: a = ${swapTowNumbers(number_1, number_2)[0]}, b = ${swapTowNumbers(number_1, number_2)[1]}`);